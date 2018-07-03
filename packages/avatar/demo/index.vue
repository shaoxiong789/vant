<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <div style="display: flex">
        <van-avatar name="李明"/>
        <van-avatar name="天明"/>
        <van-avatar name="夏丹"/>
        <van-avatar name="喔趣"/>
        <van-avatar name="马东"/>
      </div>
    </demo-block>
    <demo-block :title="$t('title1')">
      <div style="display: flex">
        <van-avatar :colors="colors" name="李明"/>
        <van-avatar :colors="colors" name="天明"/>
        <van-avatar :colors="colors" name="夏丹"/>
        <van-avatar :colors="colors" name="喔趣"/>
        <van-avatar :colors="colors" name="马东"/>
      </div>
    </demo-block>
    <demo-block :title="$t('title2')">
      <div style="display: flex">
        <van-avatar name="李明" size="30px"/>
        <van-avatar name="李明" size="40px"/>
        <van-avatar name="李明" size="50px"/>
      </div>
    </demo-block>
    <demo-block :title="$t('title3')">
      <div style="display: flex">
        <van-avatar name="马明" size="50px" font-size="12px"/>
        <van-avatar name="马明" size="50px" font-size="14px"/>
        <van-avatar name="马明" size="50px" font-size="16px"/>
      </div>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title: '标签名称',
      title1: '自定义颜色合集',
      title2: '自定义尺寸大小',
      title3: '自定义字体大小'
    }
  },

  data() {
    return {
      activeKey: 0,
      colors: ['#795548', '#673ab7', '#4CAF50', '#5EC9F6', '#795548']
    };
  },

  methods: {
    onClick(key) {
      this.activeKey = key;
    }
  }
};
</script>

<style lang="postcss">
.demo-avatar {

  .van-doc-demo-block {
    padding: 0 15px;
    .van-avatar{
      margin-right: 5px;
    }
  }

  .van-doc-demo-block__title {
    padding-left: 0;
  }
}
</style>
