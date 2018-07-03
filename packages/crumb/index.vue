<template>
  <div class="wq-breadcrumb">
    <!-- <vue-better-scroll direction="horizontal" ref="scroll" :width="contentWidth"> -->
    <ul :style="{width: contentWidth+'px'}">
      <slot :list="list"/>
    </ul>
    <!-- </vue-better-scroll> -->
  </div>
</template>
<script>
import BScroll from 'better-scroll';
// import VueBetterScroll from 'vue2-better-scroll';
export default {
  name: 'Crumb',
  props: {
    list: {
      type: Array
    }
  },
  // components: { VueBetterScroll },
  data() {
    return {
      contentWidth: 0
    };
  },
  watch: {
    list() {
      this.initScroll();
      console.log('list');
    }
  },
  mounted() {
    console.log('刷新');
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
          const scroll = new BScroll(this.$el, {
            scrollX: true,
            click: true,
            startX: this.$el.offsetWidth - width > 0 ? 0 : this.$el.offsetWidth - width
          });
          // this.scroll = scroll;
          console.log(scroll);
        });
      });
    }
  }
};
</script>
<style lang="stylus" scoped>
.wq-breadcrumb{
  line-height: 1.8;
  font-size: 14px;
  overflow: hidden;
  ul{
    white-space:nowrap;
    overflow: hidden;
  }
}
</style>
<style lang="stylus">
.wq-breadcrumb__item:last-child{
  color: #999 !important;
}
.wq-breadcrumb__item:last-child:after{
  display: none;
}
.wq-breadcrumb .scroll-content{
  // width: 500px;
}
</style>
