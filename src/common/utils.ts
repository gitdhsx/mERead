/**
 * @作者: JJ
 * @创建时间: 2018/9/12 上午11:58
 * @Version 1.0
 * @描述: 直接获取Epub的书名+封面图片。
 */
public class ReadEpubHeadInfo {
  /**
   * 存储content.opf文件路径
   */
  private static final String META_INF_CONTAINER = "META-INF/container.xml";
  /**
   * 默认解压后进行暂存的地址
   */
  private static String SAVE_INFO_PATH = "/sdcard/aEpubHeadInfo/";

  /**
   * 默认图片存放路径
   */
  private static String SAVE_IMAGE_PATH = "/sdcard/aResult/";

  public String getSaveInfoPath() {
      return SAVE_INFO_PATH;
  }

  public void setSaveInfoPath(String saveInfoPath) {
      SAVE_INFO_PATH = saveInfoPath;
  }

  public ReadEpubHeadInfo() {

  }

  public static BookModel getePubBook(String ePubPath) {
      if (TextUtils.isEmpty(ePubPath))
          return null;
      if (!FileUtils.getFileExtension(ePubPath).equals("epub")) {
          return null;
      }
      BookModel book = new BookModel();
      //之前是否有缓存，清空
      if (FileUtils.isDir(SAVE_INFO_PATH)) {
          FileUtils.deleteDir(SAVE_INFO_PATH);
      }
      try {
          //存储content.opf文件路径信息
          String contentOpfPath = "";
          LogUtils.d("epub", "1.解压MEAT-INF文件 " + ePubPath);
          //1.解压MEAT-INF文件，解析container.xml的rootfile标签，获取content.opf的路径。
          if (ZipUtils.zipSpecifiedFile(ePubPath, SAVE_INFO_PATH, META_INF_CONTAINER)) {
              contentOpfPath = XmlUtils.xmlSubtagNameAnalysis(SAVE_INFO_PATH + META_INF_CONTAINER, "rootfiles", "rootfile", "full-path");
          } else {
              LogUtils.e("epub解析", ePubPath + "解析错误，请检查书本");
              return null;
          }
          LogUtils.d("epub", "2.解压获取到的content.opf路径 " + ePubPath);
          //2.解压获取到的content.opf路径，并用xml解析获取title信息
          if (ZipUtils.zipSpecifiedFile(ePubPath, SAVE_INFO_PATH, contentOpfPath)) {
              book.setName(XmlUtils.xmlSubtagNameAnalysis(SAVE_INFO_PATH + contentOpfPath, "metadata", "title", null));
              book.setAuthor(XmlUtils.xmlSubtagNameAnalysis(SAVE_INFO_PATH + contentOpfPath, "metadata", "creator", null));
              //3.获取封面图片路径
              LogUtils.d("epub", "3.获取封面图片路径 " + ePubPath);
              String imgXmlFlag = XmlUtils.xmlSubtagConditionAnalysis(SAVE_INFO_PATH + contentOpfPath, "metadata", "name", "cover", "content");
              if (imgXmlFlag != null) {
                  String imgPath = "";
                  String[] content = contentOpfPath.split("/");
                  for (int i = 0; i < content.length - 1; i++) {
                      imgPath += content[i] + "/";
                  }
                  String[] sourceBookName = ePubPath.split("/");
                  imgPath += XmlUtils.xmlSubtagConditionAnalysis(SAVE_INFO_PATH + contentOpfPath, "manifest", "id", imgXmlFlag, "href");
                  String saveImagePath = SAVE_IMAGE_PATH + FileUtils.delFileSuffix(sourceBookName[sourceBookName.length - 1]) + "/";
                  LogUtils.d("epub", "4.根据路径解压图片 " + ePubPath);
                  //4.根据路径解压图片
                  if (ZipUtils.zipSpecifiedFile(ePubPath, saveImagePath, imgPath)) {
                      book.setCover(saveImagePath + imgPath);
                  } else {
                      book.setCover(null);
                  }
                  LogUtils.d("epub", "完成 " + ePubPath);
              }
          } else {
              LogUtils.e("epub解析", ePubPath + "解析错误，请检查书本（可能原因，书籍被加密）");
              return null;
          }

      } catch (Exception e) {
          return null;
      }
      if (book.getName() == null) {
          //获取文件名，作为备用，如果获取不到书名的话用文件名代替
          book.setName(new File(ePubPath).getName());
      }
      return book;
  }
}
