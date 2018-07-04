<template>
  <div :class="b()">
    <ul :style="{width: contentWidth+'px'}">
      <slot/>
    </ul>
  </div>
</template>
<script>
import create from '../utils/create';

import BScroll from 'better-scroll';
export default create({
  name: 'crumb',
  data() {
    return {
      contentWidth: 0
    };
  },
  mounted() {
    this.initScroll();
  },
  updated() {
    this.initScroll();
  },
  methods: {
    initScroll() {
      this.$nextTick(() => {
        const width = this.$children.reduce((width, $item) => {
          return width + $item.$el.offsetWidth + 1;
        }, 0);
        this.contentWidth = width;
        this.$nextTick(() => {
          new BScroll(this.$el, {
            scrollX: true,
            // click: true,
            startX: this.$el.offsetWidth - width > 0 ? 0 : this.$el.offsetWidth - width
          });
        });
      });
    }
  }
});
</script>
<style>
.van-crumb{
  line-height: 1.8;
  font-size: 14px;
  overflow: hidden;
}
.van-crumb ul{
  white-space:nowrap;
  overflow: hidden;
}
</style>
<style>
.van-crumb-item:last-child{
  color: #999 !important;
}
.van-crumb-item:last-child:after{
  display: none;
}
</style>
