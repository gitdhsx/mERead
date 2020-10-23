<template>
  <div id="shelf">
    <h2>shelffff</h2>
    <div id="title" class="loadbook" v-show="isShow">
      <input type="file" id="input" @change="loadLocalBook" />
    </div>
    <div class="booklist">
      <div
        v-for="(book, index) in bookList"
        :key="index"
        class="bookInfo"
        @click="openBook(index)"
      >
        <img :src="book.coverUrl" alt="" id="bookCover" />
        <div class="bookTitle">{{ book.title }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import ePub from "epubjs";

export default {
  name: "Shelf",
  data() {
    return {
      book: null,
      rendition: null,
      isShow: true,
      bookList: [],
      bookInfo: {},
      activeBookIndex: 0,
    };
  },
  methods: {
    loadLocalBook(event) {
      // const vm = this
      const file = event.target.files[0];
      if (window.FileReader) {
        const reader = new FileReader();
        reader.onload = this.buildBookObject;
        // TODO 用promise改写
        reader.readAsArrayBuffer(file);
      }
    },
    buildBookObject(e) {
      // 1. 创建Book对象实例
      this.book = ePub();
      const bookData = e.target.result;
      this.book.open(bookData, "binary");
      this.book.coverUrl().then((res) => {
        // console.log(res);
      });
      // console.log(typeof this.book);
      // console.log(this.book["package"]);
      // const bookTitle = this.book.package.metadata.title;
      const bookTitle = "aaaaaaanameee";
      const coverUrl = "static/reg/cover.jpeg";
      // const coverUrl = 'https://bkimg.cdn.bcebos.com/pic/d788d43f8794a4c229f9bde800f41bd5ac6e391e?x-bce-process=image/resize,m_lfit,w_268,limit_1/format,f_jpg'
      this.bookInfo = {
        title: bookTitle,
        coverUrl: coverUrl,
      };
      this.$store.dispatch("addBook", this.bookInfo);
      this.bookList = this.$store.state.bookList;
      

      // 2. 通过Book对象renderTo方法得rendition对象
      // this.rendition = this.book.renderTo();
    },
    getCover() {},
    openBook(index) {
      this.activeBookIndex = index;
      this.$router.push({
        path: '/page',
        query: {
          bid: index
        }
      });
      this.$store.dispatch('modifyBook', this.book)
    },
  },
  mounted() {
    // loadLocalBook()
  },
};
</script>

<style lang="scss" scoped>
@import "assets/styles/global";

#shelf {
  .booklist {
    background: #fff;
    .bookInfo {
      width: px2rem(200);
      height: px2rem(300);
      background: yellowgreen;
      img {
        width: px2rem(200);
        height: px2rem(300);
      }
    }
  }
}
</style>