<template>
  <div id="ebook">
    <div class="title-wrapper">
      <div class="left">
        <span class="icon-back icon"></span>
      </div>
      <div class="right">
        <div class="icon-wrapper"><span class="icon-cart icon"></span></div>
        <div class="icon-wrapper"><span class="icon-person icon"></span></div>
        <div class="icon-wrapper"><span class="icon-more icon"></span></div>
      </div>
    </div>
    <!-- <div id="title" class="loadbook" v-show="isShow">
      <input type="file" id="input" />
    </div> -->
    <div class="read-wrapper">
      <div class="mask">
        <div class="left" @click.prevent="prevPage">
          <!-- <a id="prev" href="#prev" class="arrow">‹</a> -->
        </div>
        <div class="center"></div>
        <div class="right" @click="nextPage">
          <!-- <a id="next" class="arrow">›</a> -->
        </div>
      </div>
      <div id="read"></div>
    </div>
    <div class="menu-wrapper">
      <div class="icon-wrapper"><span class="icon icon-menu"></span></div>
      <div class="icon-wrapper"><span class="icon icon-progess"></span></div>
      <div class="icon-wrapper"><span class="icon icon-bright"></span></div>
      <div class="icon-wrapper"><span class="icon icon-a">A</span></div>
    </div>
  </div>
</template>

<script>
import ePub from "epubjs";

export default {
  name: "Ebook",
  data() {
    return {
      DOWNLOAD_URL: "/static/OEBPS/content.opt",
      DOWNLOAD_UR: "/static/req.epub",
      book: null,
      isShow: true,
      rendition: null,
    };
  },

  methods: {
    showEpub() {
      //生成Book对象

      this.book = ePub();
      // let rendition;
      let inputElement = document.getElementById("input");
      inputElement.addEventListener("change", (e) => {
        var file = e.target.files[0];
        if (window.FileReader) {
          console.log(11111112222, this);
          this.isShow = false;
          var reader = new FileReader();
          reader.onload = (e) => {
            this.isShow = false;
            var bookData = e.target.result;
            var title = document.getElementById("title");
            var next = document.getElementById("next");
            var prev = document.getElementById("prev");

            this.book.open(bookData, "binary");

            // console.log(book);

            //生成rendition对象
            console.log(233333333, this);
            this.rendition = this.book.renderTo("read", {
              width: window.innerWidth,
              height: window.innerHeight,
            });
            //3. 通过Rendition.display渲染电子书
            this.rendition.display();
          };

          reader.readAsArrayBuffer(file);
        }
      });
    },

    getLocalBook() {},

    prevPage() {
      console.log(2222222222);
      if (this.rendition) {
        console.log("prevvvvvvvvvvvvvvvv");
        this.rendition.prev();
      }
    },

    nextPage() {
      console.log(1111111);
      console.log(this);
      if (this.rendition) {
        console.log("nextttttttttt");
        this.rendition.next();
      }
    },
    
  },

  mounted() {
    this.showEpub();
  },
};
</script>

<style lang="scss" scoped>
@import "assets/styles/global";

#ebook {
  position: relative;
  .title-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: px2rem(48);
    display: flex;
    z-index: 101;
    background: yellowgreen;
    box-shadow: 0 px2rem(8) px2rem(8) rgba(0, 0, 0, 0.15);
    .left {
      flex: 0 0 px2rem(60);
      @include center;
    }
    .right {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      .icon-wrapper {
        flex: 0 0 px2rem(40);
        @include center;
      }
    }
  }
  .loadbook {
    position: absolute;
    top: 100px;
    left: 50%;
    transform: translate(-50%, -50%);
    height: px2rem(30);
    z-index: 200;
  }
  .read-wrapper {
    .mask {
      position: absolute;
      left: 0;
      right: 0;
      width: 100%;
      height: 100%;
      z-index: 10;
      display: flex;
      .left {
        flex: 0 0 px2rem(100);
      }
      .center {
        flex: 1;
        // background: violet;
      }
      .right {
        flex: 0 0 px2rem(100);
      }
    }
  }
  .menu-wrapper {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: px2rem(48);
    display: flex;
    z-index: 102;
    background: burlywood;
    box-shadow: 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, 0.15);
    .icon-wrapper {
      flex: 1;
      @include center;
      .icon-progess {
        font-size: px2rem(60);
      }
    }
  }
}
</style>

