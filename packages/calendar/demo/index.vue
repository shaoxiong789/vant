<template>
  <demo-section background="#f8f8f8">
    <demo-block :title="$t('basicUsage')">
      <van-calendar v-model="currentDay" title-format="YYYY年MM月"/>
    </demo-block>
    <demo-block :title="$t('advancedUsage')">
      <van-calendar title-format="YYYY年MM月">
        <template slot-scope="slotProps">
          <div style="    margin-top: 6px;">
            <div>{{ slotProps.day.id }}</div>
            <div style="color: #ccc;font-size: 12px;">{{ slotProps.day.lunar }}</div>
          </div>
        </template>
      </van-calendar>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      currentDay: new Date('2019-02-10')
    };
  }
};
</script>
