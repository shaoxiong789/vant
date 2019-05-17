<template>
  <div class="van-calendar">
    <van-row>
      <van-col style="height:30px;" span="4"/>
      <van-col @click.native="toLastMonth" span="4" style="text-align: center;line-height:30px;">
        <i class="van-icon">&#xe643;</i>
      </van-col>
      <van-col span="8" style="text-align: center;line-height:30px;">{{ currentMonth }}</van-col>
      <van-col @click.native="toNextMonth" span="4" style="text-align: center;line-height:30px;">
        <i class="van-icon">&#xe644;</i>
      </van-col>
      <van-col style="height:30px;text-align: center;" span="4">
        <div class="totoday" @click="toToday">今</div>
      </van-col>
    </van-row>
    <div>
      <van-row>
        <van-col span="3" class="cell" style="line-height: calc( 100vw / 7 - 10px );" :key="index" v-for="(week, index) in textTop">{{ week }}</van-col>
      </van-row>
      <van-swipe @change="swipeChange" :show-indicators="false" :initial-swipe="1" ref="swipe">
        <template v-if="!isSpread">
          <van-swipe-item v-for="(week,index) in someWeek" :key="index">
            <van-row>
              <van-col
                span="3" class="cell" @click.native="clickDay(day)" :class="{today: day.isToday, selectday: isSelectDay(day)}" :key="index"
                v-for="(day, index) in getWeekListNoOther(week)">
                <slot :day="day">
                  <div style="line-height: calc( 100vw / 7 - 10px );">
                    {{ day.id }}
                  </div>
                </slot>
              </van-col>
            </van-row>
          </van-swipe-item>
        </template>
        <template v-else>
          <van-swipe-item v-for="(month,index) in someMonth" :key="index">
            <van-row>
              <van-col span="3" class="cell other" @click.native="clickDay(day)" :key="index+'_-'" v-for="(day, index) in getLeftArr(month)">
                <slot :day="day">
                  <div style="line-height: calc( 100vw / 7 - 10px );">
                    {{ day.id }}
                  </div>
                </slot>
              </van-col>
              <van-col
                span="3" class="cell" @click.native="clickDay(day)" :class="{today: day.isToday, selectday: isSelectDay(day)}" :key="index"
                v-for="(day, index) in getMonthListNoOther(month)">
                <slot :day="day">
                  <div style="line-height: calc( 100vw / 7 - 10px );">
                    {{ day.id }}
                  </div>
                </slot>
              </van-col>
              <van-col span="3" class="cell other" @click.native="clickDay(day)" :key="index+'_+'" v-for="(day, index) in getRightArr(month)">
                <slot :day="day">
                  <div style="line-height: calc( 100vw / 7 - 10px );">
                    {{ day.id }}
                  </div>
                </slot>
              </van-col>
            </van-row>
          </van-swipe-item>
        </template>
      </van-swipe>
      <div style="text-align: center;">
        <i class="van-icon" v-if="!isSpread" @click="triggerWeek">&#xe766;</i>
        <i class="van-icon" v-else @click="triggerWeek">&#xe75f;</i>
      </div>
    </div>
  </div>
</template>

<script>
import create from '../utils/create';
import util from './utils.js';
import fecha from 'fecha';
import Row from '../row';
import Col from '../col';
import Swipe from '../swipe';
import SwipeItem from '../swipe-item';
export default create({
  name: 'calendar',
  components: {
    VanRow: Row,
    VanCol: Col,
    VanSwipe: Swipe,
    VanSwipeItem: SwipeItem
  },
  props: {
    value: {
      type: Date,
      default() {
        return new Date();
      }
    },
    titleFormat: {
      type: String,
      default: 'YYYY年M月'
    },
    spread: {
      type: Boolean,
      default() {
        return true;
      }
    }
  },
  data() {
    return {
      // 当前日
      currentDay: this.value,
      today: new Date(),
      textTop: util.getTextTop(),
      someMonth: [],
      someWeek: [],
      isSpread: this.spread
    };
  },
  watch: {
    currentDay() {
      this.setSomeDates();
    },
    value(val, oldVal) {
      if (fecha.format(val, 'YYYY-MM-DD') !== fecha.format(oldVal, 'YYYY-MM-DD')) {
        this.currentDay = this.value;
      }
    }
  },
  computed: {
    currentMonth() {
      return this.currentDay ? fecha.format(this.currentDay, this.titleFormat) : '';
    }
  },
  mounted() {
    this.setSomeDates();
    // this.currentDay = new Date();
    // console.log(this.getLeftArr(new Date()));
  },
  methods: {
    setSomeDates() {
      // if (this.swipingWeek) {
      this.someWeek = [util.getOtherWeek(this.currentDay, ''), this.currentDay, util.getOtherWeek(this.currentDay)];
      // } else {
      this.someMonth = [util.getOtherMonth(this.currentDay, ''), this.currentDay, util.getOtherMonth(this.currentDay)];
      // }
      this.$emit('input', this.currentDay);
    },
    toToday() {
      this.currentDay = new Date();
    },
    triggerWeek() {
      this.isSpread = !this.isSpread;
      this.$emit('update:spread', this.isSpread);
    },
    swipeChange(index) {
      if (!this.isSpread) {
        this.currentDay = this.someWeek[index];
      } else {
        this.currentDay = this.someMonth[index];
      }
      this.$nextTick(() => {
        this.$refs.swipe.JumpTo(1);
      });
    },
    // 获取当月所有日期
    getMonthListNoOther(date) {
      return util.getMonthListNoOther(date);
    },

    // 获取当周所有日期
    getWeekListNoOther(date) {
      // console.log(date, util.getWeekListNoOther(date));
      return util.getWeekListNoOther(date);
    },
    isSelectDay(day) {
      const nowTime = fecha.format(this.currentDay, 'YYYY/M/D');
      return nowTime === day.date;
    },

    clickDay(day) {
      this.currentDay = new Date(day.date);
    },
    // 前面空出列数
    getMonthweek(date) {
      return util.getMonthweek(date);
    },
    // 获取上个月末尾的一些日期
    getLeftArr(date) {
      return util.getLeftArr(date);
    },
    getRightArr(date) {
      return util.getRightArr(date);
    },
    // 去上个月
    toLastMonth() {
      // console.log(util.getOtherMonth(this.currentDay, ''));
      this.currentDay = util.getOtherMonth(this.currentDay, '');
    },
    // 去下个月
    toNextMonth() {
      this.currentDay = util.getOtherMonth(this.currentDay);
    },
    onChange() {

    }
  }
});
</script>
<style scoped>
</style>

