<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-cell-group>
        <van-switch-cell v-model="checked" :title="$t('title')" />
      </van-cell-group>
    </demo-block>

    <demo-block :title="$t('basicUsage')">
      <van-cell-group>
        <van-switch-cell v-model="ischeck" active-value="1" inactive-value="0" :title="$t('title')" />
      </van-cell-group>
    </demo-block>

    <demo-block :title="$t('disabled')">
      <van-cell-group>
        <van-switch-cell v-model="checked" disabled :title="$t('title')" />
      </van-cell-group>
    </demo-block>

    <demo-block :title="$t('loading')">
      <van-cell-group>
        <van-switch-cell v-model="checked" loading :title="$t('title')" />
      </van-cell-group>
    </demo-block>

  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      checked: true,
      ischeck: '1'
    };
  }
};
</script>
