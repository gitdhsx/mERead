<template>
  <div id="shelf">
    <h2>shelffff</h2>
    <div id="title" class="loadbook" v-show="isShow">
      <input type="file" id="input" @change="loadLocalBook" />
    </div>
    <div v-for="(book, index) in bookList" :key="index" class="booklist">
      <div class="bookInfo" @click="openBook(index)">
        12333333333
        <img :src="book.coverUrl" alt="" id="bookCover" />
        <div class="bookTitle">{{book.title}}</div>
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
      console.log(file);
      if (window.FileReader) {
        console.log(1111111, this);
        const reader = new FileReader();
        reader.onload = this.buildBookObject;
        // TODO 用promise改写
        reader.readAsArrayBuffer(file);
      }
    },
    buildBookObject(e) {
      console.log(222222, this);
      // 1. 创建Book对象实例
      this.book = ePub();
      const bookData = e.target.result;
      this.book.open(bookData, "binary");
      console.log(this.book);
      this.book.coverUrl().then((res) => {
        console.log(res);
      });
      console.log(typeof(this.book));
      console.log(this.book['package']);
      // const bookTitle = this.book.package.metadata.title;
      const bookTitle = 'aaaaaaanameee'
      console.log(bookTitle);
      const coverUrl = "static/reg/cover.jpg";
      this.bookInfo = {
        title: bookTitle,
        coverUrl: coverUrl,
      };
      this.$store.dispatch('addBook', this.bookInfo)
      this.bookList = this.$store.state.bookList

      // 2. 通过Book对象renderTo方法得rendition对象
      // this.rendition = this.book.renderTo();
    },
    getCover() {},
    openBook(index) {
      this.activeBookIndex = index
      this.$router.push('/page')
    }
  },
  mounted() {
    // loadLocalBook()
  },
};
</script>

<style lang="scss" scoped>
@import "assets/styles/global";

#shelf {
  .booklist{
    background: #fff;
    .bookInfo{
      width: px2rem(200);
      height: px2rem(200);
      background: yellowgreen;
    }
  }
}

</style>