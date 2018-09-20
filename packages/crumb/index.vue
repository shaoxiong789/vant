<template>
  <div :class="b()">
    <div :style="{width: contentWidth+'px'}">
      <slot/>
    </div>
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
            click: true,
            startX: this.$el.offsetWidth - width > 0 ? 0 : this.$el.offsetWidth - width
          });
        });
      });
    }
  }
});
</script>
