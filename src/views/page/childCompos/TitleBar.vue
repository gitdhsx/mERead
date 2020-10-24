<template>
  <div id="titlebar">
    <tab-bar
      class="tab-bar"
      ref="tabBar"
      position="top"
      :isShow='isTitleShow'
      :columnn=0
      :itemsWidth="tabItemsWidth"
    >
      <template v-slot:left> <span class="icon-back icon"></span></template>
      <template v-slot:center></template>
      <template v-slot:right class="right">
        <div class="icon-wrapper"><span class="icon-cart icon"></span></div>
        <div class="icon-wrapper"><span class="icon-person icon"></span></div>
        <div class="icon-wrapper"><span class="icon-more icon"></span></div>
      </template>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "components/common/TabBar";

export default {
  name: "TitleBar",
  components: {
    TabBar,
  },
  data() {
    return {
      position: "bottom",
      tabItemsWidth: {
        left: 10 + "%",
        center: 60 + "%",
        right: 30 + "%",
      },
    };
  },
  props: {
    isTitleShow: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style lang="scss" scoped>
@import "assets/styles/global";

#titlebar {
  .tab-bar {
    top: 0;
    height: px2rem(48);
    box-shadow: 0 px2rem(8) px2rem(8) rgba(0, 0, 0, 0.2);
    &.slide-enter,
    &.slide-leave-to {
      transform: translate3d(0, -100%, 0);
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
}
</style>