<template>
  <div id="menubar">
    <div class="left">
      <div class="icon-wrapper"><span class="icon icon-menu"></span></div>
      <div class="icon-wrapper"><span class="icon icon-progess"></span></div>
    </div>
    <div class="center"></div>
    <div class="right">
      <div class="icon-wrapper"><span class="icon icon-bright"></span></div>
      <div class="icon-wrapper"><span class="icon icon-a">A</span></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuBar",
};
</script>

<style lang="scss" scoped>
@import "assets/styles/global";

#menubar {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: px2rem(48);
  display: flex;
  z-index: 102;
  background: burlywood;
  box-shadow: 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, 0.15);
  .left{
    background: aqua;
  }
  .center{
    background: #fea;
  }
  .right {
    background: #a3f;
  }
  .icon-wrapper {
    flex: 1;
    @include center;
    .icon-progess {
      font-size: px2rem(60);
    }
  }
}
</style>