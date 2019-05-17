<template>
  <demo-section>
    <demo-block :title="$t('title4')">
      {{ currentDate4 }}
      <van-time-picker v-model="currentDate4" type="time" :min-hour="minHour" :max-hour="maxHour" :step="step" />
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
      title4: '选择时间',
      year: '年',
      month: '月'
    },
    'en-US': {
      title1: 'Choose DateTime',
      title2: 'Choose Date',
      title3: 'Choose Year-Month',
      title4: 'Choose Time',
      year: ' Year',
      month: ' Month'
    }
  },

  data() {
    return {
      minHour: 0,
      maxHour: 23,
      minMinute: 0,
      maxMinute: 59,
      step: 5,
      currentDate4: '12:00'
    };
  },
  mounted() {
    console.log(typeof this.currentDate4);
  }
};
</script>
