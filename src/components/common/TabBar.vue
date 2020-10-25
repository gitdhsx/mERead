<template>
  <transition name="slide">
    <div id="tabbar" v-show="isShow" :style="tabBarStyle">
      <div class="left" :class="{ twoCo: columnn >= 2 }" :style="leftStyle">
        <slot name="left"></slot>
      </div>
      <div
        class="center"
        :class="{ threeCo: columnn === 3 }"
        :style="centerStyle"
      >
        <slot name="center"></slot>
      </div>
      <div class="right" :class="{ twoCo: columnn >= 2 }" :style="rightStyle">
        <slot name="right"></slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "TabBar",
  data() {
    return {
      // isShow: false,
      leftStyle: null,
      centerStyle: null,
      rightStyle: null,
      tabBarStyle: null,
    };
  },
  computed: {},
  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
    position: {
      type: String,
      default: "top",
    },
    columnn: {
      type: Number,
      default: 5,
    },
    itemsWidth: {
      type: Object,
      // default() {
      //   return {
      //     left: 25 + "%",
      //     center: 50 + "%",
      //     right: 25 + "%",
      //   };
      // },
    },
    styles: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  mounted() {
    this.getStyle();
  },
  methods: {
    getRightClass() {},
    getStyle() {
      if (this.columnn === 0 && this.itemsWidth) {
        this.leftStyle = { flex: "0 0 " + this.itemsWidth.left };
        this.centerStyle = { flex: "0 0 " + this.itemsWidth.center };
        this.rightStyle = { flex: "0 0 " + this.itemsWidth.right };
      }
      else if(this.columnn === 1) {
        this.leftStyle = {flex: "0 0 px2rem(10)"} 
        this.centerStyle = {flex: 1}
        this.rightStyle= {flex: "0 0 px2rem(10)"} 
      }
      if (this.position === "top" && !this.itemsWidth) {
        console.log("tooopppp");
        this.tabBarStyle = {
          // "box-shadow": "0 px2rem(8) px2rem(8) rgba(0, 0, 0, .15)",
        };
        this.rightStyle = {
          // "justify-content": "flex-end"
        };
      } else if (this.position === "bottom") {
        this.tabBarStyle = {
          // "box-shadow": "0 px2rem(-8) px2rem(8) rgba(0, 0, 0, .15)",
          // // "&.slide-enter,  &.slide-leave-to":
          // //   "{transform: translate3d(0, 100%, 0)}",
          // "&.slide-enter,  &.slide-leave-to": {
          //   "transform": "translate3d(0, 100%, 0)"
          // },
        };
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "assets/styles/global";

#tabbar {
  position: absolute;
  // bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  z-index: 102;
  background: #fff;
  .left {
    display: flex;
    @include center;
  }
  .center {
    display: flex;
    // @include center;
  }
  .right {
    display: flex;
    // @include center;
  }
  .twoCo,
  .threeCo {
    flex: 1;
  }
  // &.slide-enter,
  // &.slide-leave-to {
  //   transform: translate3d(0, 100%, 0);
  // }
  &.slide-enter-to,
  &.slide-leave {
    transform: translate3d(0, 0, 0);
  }
  &.slide-enter-active,
  &.slide-leave-active {
    transition: all 1s linear;
  }
}
</style>