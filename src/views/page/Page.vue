<template>
  <div id="page">
    <div class="read-wrapper">
      <div class="mask">
        <title-bar ref="titleBar" :isTitleShow="isTabShow"></title-bar>
        <menu-bar
          ref="menuBar"
          :isMenuShow="isTabShow"
          :fontSizeList="fontSizeList"
          :selectFontSize="currentFontSize"
          @setFontSize="setFontSize"
          :themeList="themeList"
          :selectTheme="currentThemeIndex"
          @setTheme='setTheme'
        ></menu-bar>
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
import TitleBar from "./childCompos/TitleBar";

export default {
  name: "Page",
  data() {
    return {
      book: null,
      rendition: null,
      themes: null,
      isTabShow: false,
      fontSizeList: [12, 14, 16, 18, 20, 22, 24],
      currentFontSize: 16,
      currentThemeIndex: 0,
      themeList:[
        {
          name: 'default',
          style: {
            body: {
              'color': '#000', 'background': '#fff'
            }
          }
        },
        {
          name: 'eye',
          style: {
            body: {
              'color': '#000', 'background': '#ceeaba'
            }
          }
        },
        {
          name: 'night',
          style: {
            body: {
              'color': '#fff', 'background': '#000'
            }
          }
        },
        {
          name: 'gold',
          style: {
            body: {
              'color': '#000', 'background': 'rgb(241, 236, 226)'
            }
          }
        },
      ]
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
    this.themes = this.rendition.themes
    // 4. 设置字体
    this.setFontSize(this.currentFontSize)
    // 5. 设置主体
    this.registerTheme()
    this.setTheme(this.currentThemeIndex)
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

    toggleTabShow() {
      this.isTabShow = !this.isTabShow;
      this.$refs.menuBar.settingHide();
    },

    setFontSize(fontSize){
      this.currentFontSize = fontSize
      if (this.themes) {
        console.log(2222222222);
        this.themes.fontSize(fontSize + 'px')
      }
    },

    registerTheme() {
      this.themeList.forEach((theme) => {
        this.themes.register(theme.name, theme.style)
      })
    },

    setTheme(index) {
      this.currentThemeIndex = index
      this.themes.select(this.themeList[index].name)
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