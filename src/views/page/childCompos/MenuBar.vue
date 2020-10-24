<template>
  <div id="menubar">
    <div class="menu">
      <tab-bar
        class="menu-bar"
        ref="menu"
        :columnn="2"
        :itemsWidth="menuItemsWidth"
        position="bottom"
        :isShow="isMenuShow"
        :class="{ 'hide-shadow': isSettingShow }"
      >
        <template v-slot:left class="lleft">
          <div class="icon-wrapper"><span class="icon icon-menu"></span></div>
          <div class="icon-wrapper">
            <span class="icon icon-progess"></span>
          </div>
        </template>
        <template v-slot:center class="ccenter"></template>
        <template v-slot:right class="rright">
          <div class="icon-wrapper"><span class="icon icon-bright"></span></div>
          <div class="icon-wrapper" @click="settingShow">
            <span class="icon icon-a">A</span>
          </div>
        </template>
      </tab-bar>
    </div>

    <div class="settings">
      <div id="font-size-setting">
        <tab-bar
          ref="fontbar"
          class="font-bar"
          position="bottom"
          :isShow="isSettingShow"
          :columnn="0"
          :itemsWidth="fontItemsWidth"
        >
          <template v-slot:left></template>
          <template v-slot:center>
            <div class="preview" :style="{ fontSize: fontSizeList[0] + 'px' }">
              A
            </div>
            <div class="select">
              <div
                class="select-wrapper"
                v-for="(fontSize, index) in fontSizeList"
                :key="index"
                @click="fontClick(fontSize)"
              >
                <div class="line"></div>
                <div class="point-wrapper">
                  <div class="circle" v-show="selectFontSize === fontSize">
                    <div class="point"></div>
                  </div>
                </div>
                <div class="line"></div>
              </div>
            </div>
            <div
              class="preview"
              :style="{
                fontSize: fontSizeList[fontSizeList.length - 1] + 'px',
              }"
            >
              A
            </div>
          </template>
          <template v-slot:right></template>
        </tab-bar>
      </div>
    </div>
  </div>
</template>

<script>
import TabBar from "components/common/TabBar";
export default {
  name: "MenuBar",
  components: {
    TabBar,
  },
  props: {
    isMenuShow: {
      type: Boolean,
      default: false,
    },
    fontSizeList: {
      type: Array,
      default: [],
    },
    selectFontSize: Number,
    themeList: Array,
    selectTheme: Number,

  },
  data() {
    return {
      position: "bottom",
      menuItemsWidth: {
        left: 25 + "%",
        center: 50 + "%",
        right: 25 + "%",
      },
      fontItemsWidth: {
        left: 5 + "%",
        center: 90 + "%",
        right: 5 + "%",
      },
      isSettingShow: false,
    };
  },
  mounted() {
    // this.$refs.fontsize.isShow = true
  },
  methods: {
    settingShow() {
      this.isSettingShow = true;
    },
    settingHide() {
      this.isSettingShow = false;
    },
    fontClick(fontSize) {
      this.$emit('setFontSize', fontSize)
    }
  },
};
</script>

<style lang="scss" scoped>
@import "assets/styles/global";

#menubar {
  .settings {
    outline: aqua;
    .font-bar {
      outline: cadetblue;
      bottom: px2rem(48);
      height: px2rem(60);
      z-index: 101;
      box-shadow: 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, 0.2);
      &.slide-enter,
      &.slide-leave-to {
        transform: translate3d(0, px2rem(108), 0);
      }
      .preview {
        flex: 0 0 px2rem(40);
      }
      .select {
        flex: 1;
        display: flex;
        .select-wrapper {
          flex: 1;
          display: flex;
          align-items: center;
          &:first-child {
            // background: #000;
            .line{
              &:first-child{
                border-top: none;
              }
            }
          }
          &:last-child{
            :last-child{
              border-top: none;
            }
          }
          // background: red;
          .line {
            flex: 1;
            height: 0;
            border-top: px2rem(1) solid red;
          }
          .point-wrapper {
            position: relative;
            flex: 0 0 0;
            width: 0;
            height: px2rem(7);
            border-left: px2rem(1) solid blue;
            .circle{
              position: absolute;
              top: px2rem(-8);
              left: px2rem(-10);
              width: px2rem(20);
              height: px2rem(20);
              border-radius: 50%;
              background: #fff;
              border: px2rem(1) solid #ccc;
              box-shadow: 0 px2rem(4) px2rem(4) rgba(0, 0, 0, 0.2);
              @include center;
              .point{
                width: px2rem(5);
                height: px2rem(5);
                border-radius: 50%;
                background: #000;
              }
            }
          }
        }
      }
    }
  }
  .menu {
    .menu-bar {
      bottom: 0;
      height: px2rem(48);
      box-shadow: 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, 0.2);
      &.slide-enter,
      &.slide-leave-to {
        transform: translate3d(0, px2rem(108), 0);
      }
      &.hide-shadow {
        box-shadow: none;
      }
      .lleft {
        background: black;
      }
      .center {
        background: #fea;
      }
      .right {
        background: #a3f;
      }
      .icon-wrapper {
        flex: 1;
        @include center;
        .icon-progess {
          font-size: px2rem(20);
        }
      }
    }
  }
}
</style>