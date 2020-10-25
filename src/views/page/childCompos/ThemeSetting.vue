<template>
  <div class="theme-setting">
    <tab-bar
      class="tab-bar"
      :columnn="1"
      position="bottom"
      :isShow="isThemeShow"
    >
      <template v-slot:center>
        <div
          class="theme-item"
          v-for="(item, index) in themeList"
          :key="index"
          @click="themeClick(index)"
        >
          <div
            class="preview"
            :style="{ background: item.style.body.background }"
            :class="{
              'white-bg-border': item.style.body.background === '#fff',
            }"
          ></div>
          <div class="text" :class="{ selected: index === currentTheme }">
            {{ item.name }}
          </div>
        </div>
      </template>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "components/common/TabBar";

export default {
  name: "ThemeSetting",
  components: {
    TabBar,
  },
  props: {
    isThemeShow: {
      type: Boolean,
      default: false,
    },
    themeList: {
      type: Array,
    },
    currentTheme: Number,
  },
  methods: {
    themeClick(themeIndex) {
      this.$bus.$emit("selectTheme", themeIndex);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "assets/styles/global";

.theme-setting {
  outline: aqua;

  // position: absolute;

  .tab-bar {
    bottom: px2rem(48);
    height: px2rem(60);
    z-index:101;
    box-shadow: 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, 0.2);
    &.slide-enter,
    &.slide-leave-to {
      transform: translate3d(0, px2rem(108), 0);
    }
    .theme-item {
      flex: 1;
      display: flex;
      flex-direction: column;
      padding: px2rem(5);
      box-sizing: border-box;
      // align-items: stretch;
      // background: #da2;
      .preview {
        flex: 1;
        box-sizing: border-box;
        &.white-bg-border {
          border: px2rem(1) solid #ccc;
        }
        // outline: red dotted thick;
      }
      .text {
        flex: 0 0 px2rem(20);
        font-size: px2rem(14);
        color: #999;
        @include center;
        &.selected {
          color: #333;
        }
      }
    }
  }
}
</style>