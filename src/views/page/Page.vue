<template>
  <div id="page">
    <div class="read-wrapper">
      <div class="mask">
        <title-bar v-show="isTabShow"></title-bar>
        <menu-bar ref='menuBar'></menu-bar>
        <div class="left" @click.prevent="prevPage">
          <!-- <a id="prev" href="#prev" class="arrow">‹</a> -->
        </div>
        <div class="center" @click="toggleTabShow"></div>
        <div class="right" @click="nextPage">
          <!-- <a id="next" class="arrow">›</a> -->
        </div>
      </div>
      <div id="readview"></div>
    </div>
  </div>
</template>

<script>
import MenuBar from "./childCompos/MenuBar";
import TitleBar from "components/content/TitleBar";

export default {
  name: "Page",
  data() {
    return {
      book: null,
      rendition: null,
      isTabShow: false,
    };
  },
  components: {
    MenuBar,
    TitleBar,
  },
  mounted() {
    // 1. 获取Book对象
    this.book = this.$store.state.book;
    // 2. 通过Book对象的renderTo方法生成rendition对象
    this.rendition = this.book.renderTo("readview", {
      width: window.innerWidth,
      height: window.innerHeight,
    });
    // 3. 通过Rendition.display渲染电子书
    this.rendition.display();
  },
  methods: {
    prevPage() {
      if (this.rendition) {
        this.rendition.prev();
      }
    },

    nextPage() {
      if (this.rendition) {
        this.rendition.next();
      }
    },

    toggleTabShow(){
      this.isTabShow = !this.isTabShow
      this.$refs.menuBar.$refs.tabBar.isShow = !this.$refs.menuBar.$refs.tabBar.isShow
    }
  },
};
</script>

<style lang="scss" scoped>
@import "assets/styles/global";

.read-wrapper {
  position: relative;
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
</style>