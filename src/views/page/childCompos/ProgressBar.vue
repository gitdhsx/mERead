<template>
  <div id="progress-wrapper">
    <input
      type="range"
      class="progress"
      ref="progress"
      max="100"
      min="0"
      step="1"
      :value="progress"
      @change="ProgressChange($event.target.value)"
      @input="onProgressInput($event.target.value)"
      :disabled="!bookAvailable"
    />
    <div class="text-wrapper">
      <span>{{ bookAvailable ? progress + "%" : "加载中..." }}</span>
    </div>
  </div>
</template>

<script>
import TabBar from "components/common/TabBar";

export default {
  name: "ProgressBar",
  components: {
    TabBar,
  },
  data() {
    return {
      progress: 0,
      progressItemsWidth: {
        left: 0 + "%",
        center: 95 + "%",
        right: 0 + "%",
      },
    };
  },
  props: {
    isProgressShow: {
      type: Boolean,
      default: false,
    },
    bookAvailable: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onProgressInput(progress) {
      this.progress = progress;
      this.$refs.progress.style.backgroundSize = "${this.progress}% 100%";
    },
    ProgressChange(progress) {
      this.$emit("onProgressChange", progress);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "assets/styles/global";

#progress-wrapper {
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: px2rem(48);
  height: px2rem(60);
  left: 0;
  width: 100%;
  background: white;
  box-shadow: 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, 0.2);
  @include center;
  padding: 0  px2rem(30);
  box-sizing: border-box;
  .progress {
    appearance: none;
    -webkit-appearance: none;
    height: px2rem(2);
    width: 100%;
    background: -webkit-linear-gradient(#999, #999) no-repeat, #ddd;
    background-size: 0 100%;
    &:focus {
      outline: none;
    }
    &::-webkit-slider-thumb {
      height: px2rem(20);
      width: px2rem(20);
      border-radius: 50%;
      background: white;
      box-shadow: 0 px2rem(4) px2rem(4) 0 rgba(0, 0, 0, 0.2);
      border: px2rem(1) solid #ddd;
    }
  }
  .text-wrapper {
    color: #000;
    font-size: px2rem(16);
  }
}
</style>