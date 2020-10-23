<template>
  <div id="titlebar">
    <div class="left">
      <span class="icon-back icon"></span>
    </div>
    <div class="center"></div>
    <div class="right">
      <div class="icon-wrapper"><span class="icon-cart icon"></span></div>
      <div class="icon-wrapper"><span class="icon-person icon"></span></div>
      <div class="icon-wrapper"><span class="icon-more icon"></span></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TitleBar",
};
</script>

<style lang="scss" scoped>
@import "assets/styles/global";

#titlebar {
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
  .center{
    background: #ae8;
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
</style>