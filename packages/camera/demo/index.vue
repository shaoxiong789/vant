<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <div style="display: flex">
        <van-camera name="图片上传" :imgArr="imgArr"></van-camera>
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
      imgArr: [],
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
