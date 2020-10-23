<template>
  <div id="menubar">
    <tab-bar ref='tabBar' :columnn="2" :itemsWidth="tabItemsWidth" :position="position">
      <template v-slot:left class="lleft">
        <div class="icon-wrapper"><span class="icon icon-menu"></span></div>
        <div class="icon-wrapper"><span class="icon icon-progess"></span></div>
      </template>
      <template v-slot:center class="ccenter"></template>
      <template v-slot:right class="rright">
        <div class="icon-wrapper"><span class="icon icon-bright"></span></div>
        <div class="icon-wrapper"><span class="icon icon-a">A</span></div>
      </template>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "components/common/TabBar";
export default {
  name: "MenuBar",
  components: {
    TabBar,
  },
  data() {
    return {
      position: 'bottom',
      tabItemsWidth: {
        left: 25 + "%",
        center: 50 + "%",
        right: 25 + "%",
      },
    };
  },
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
  // background: burlywood;
  box-shadow: 0 px2rem(-80) px2rem(80) rgba(0, 0, 0, 0.5);
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
      font-size: px2rem(60);
    }
  }
}
</style>