<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-crumb>
        <van-crumb-item @click.native="onClick(crumb)" :key="index" v-for="(crumb,index) in crumbs">{{ crumb.text }}</van-crumb-item>
      </van-crumb>

      <div style="margin-top: 10px;">you clicked: {{ crumb }}</div>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title1: '选择完整时间',
      title2: '选择日期（年月日）',
      title3: '选择日期（年月）',
      title4: '选择时间'
    },
    'en-US': {
    }
  },

  data() {
    return {
      crumb: '',
      crumbs: [
        { text: '刘一' },
        { text: '陈二' },
        { text: '张三' },
        { text: '李四' },
        { text: '王五' },
        { text: '赵六' },
        { text: '孙七' },
        { text: '周八' },
        { text: '吴九' },
        { text: '郑十' }
      ]
    };
  },
  methods: {
    onClick(crumb) {
      this.crumb = crumb;
    }
  }
};
</script>
<style lang="postcss">
.demo-crumb {
  .van-doc-demo-block {
    padding: 0 15px;
  }
  .van-doc-demo-block__title {
    padding-left: 0;
  }
}
</style>
