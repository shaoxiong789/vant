<template>
  <demo-section background="#f8f8f8">
    <demo-block :title="$t('advancedUsage')">
      <van-vertical-calendar title-format="YYYY年MM月" :spread="spread" v-model="currentDay" @swipeCallBack="swipeCallBack" @callback="callback">
        <template slot-scope="scope">
          <div class="slot-class">
            <div class="slot-calendar">{{ scope.day.id }}</div>
            <div class="slot-content" style="font-size: 12px;" v-if="scope.day.id">{{ filter(scope.day.date) }}</div>
          </div>
        </template>
      </van-vertical-calendar>
    </demo-block>
  </demo-section>
</template>

<script>
import fecha from 'fecha';
export default {
  data() {
    return {
      currentDay: new Date('2019-02-10'),
      shiftArr: [],
      spread: true
    };
  },
  computed: {
    newcurrentDay() {
      return this.currentDay ? fecha.format(this.currentDay, 'YYYY-MM-DD') : '';
    }
  },
  mounted() {
    this.shiftArr = [
      { '2019/2/24': '休' },
      { '2019/2/25': '休' },
      { '2019/2/26': '白' },
      { '2019/2/27': '休' },
      { '2019/2/28': '休' },
      { '2019/3/1': '休' },
      { '2019/3/2': '休' },
      { '2019/3/3': '白' },
      { '2019/3/4': '休' },
      { '2019/3/5': '休' },
      { '2019/3/6': '休' },
      { '2019/3/7': '休' },
      { '2019/3/8': '白' },
      { '2019/3/9': '休' },
      { '2019/3/10': '休' },
      { '2019/3/11': '休' },
      { '2019/3/12': '休' },
      { '2019/3/13': '白' },
      { '2019/3/14': '休' },
      { '2019/3/15': '休' },
      { '2019/3/16': '休' },
      { '2019/3/17': '休' },
      { '2019/3/18': '白' },
      { '2019/3/19': '休' },
      { '2019/3/20': '休' },
      { '2019/3/21': '休' },
      { '2019/3/22': '休' },
      { '2019/3/23': '白' },
      { '2019/3/24': '休' },
      { '2019/3/25': '休' },
      { '2019/3/26': '白' },
      { '2019/3/27': '休' },
      { '2019/3/28': '休' },
      { '2019/3/29': '休' },
      { '2019/3/30': '休' },
      { '2019/3/31': '休' },
      { '2019/4/1': '休' },
      { '2019/4/2': '休' },
      { '2019/4/3': '白' },
      { '2019/4/4': '休' },
      { '2019/4/5': '休' },
      { '2019/4/6': '休' }
    ];
  },
  methods: {
    filter(date) {
      let shiftName = '';
      for (let i = 0; i < this.shiftArr.length; i++) {
        for (const key in this.shiftArr[i]) {
          if (key === date) {
            shiftName = this.shiftArr[i][key];
          }
        }
      }
      return shiftName;
    },
    callback(data) {
      console.log(666);
    },
    swipeCallBack(data) {
      console.log(777);
    }
  }
};
</script>
