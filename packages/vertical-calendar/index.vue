<template>
  <div class="van-vertical-calendar">
    <van-row class="vertical-calendar-title">
      <van-col style="height:30px;" span="8" />
      <van-col span="8" style="text-align: center;line-height:30px;font-size:15px;">{{ currentMonth }}</van-col>
      <van-col style="height:30px;text-align: center;" span="8" />
    </van-row>
    <div>
      <van-row>
        <van-col span="3" class="cell" :key="index" v-for="(week, index) in textTop"><span>{{ week }}</span></van-col>
      </van-row>
      <van-swipe @change="swipeChange" :show-indicators="false" :vertical="true" :initial-swipe="1" ref="swipe">
        <template v-if="!isSpread">
          <van-swipe-item v-for="(week,index) in someWeek" :key="index">
            <van-row>
              <van-col span="3" class="cell" @touchdown.native="mouseDown($event)" @touchup.native="mouseUp($event,day)" @mousedown.native="mouseDown($event)" 
@mouseup.native="mouseUp($event,day)" :class="{today: day.isToday, selectday: isSelectDay(day)}" :key="index" v-for="(day, index) in getWeekListNoOther(week)">
                <slot :day="day">
                  <div>
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
              <van-col span="3" class="cell other" @touchdown.native="mouseDown($event)" @touchup.native="mouseUp($event,day)" @mousedown.native="mouseDown($event)" 
@mouseup.native="mouseUp($event,day)" :key="index+'_-'" v-for="(day, index) in getLeftArr(month)">
                <slot :day="day">
                  <div>
                    {{ day.id }}
                  </div>
                </slot>
              </van-col>
              <van-col span="3" class="cell" @touchdown.native="mouseDown($event)" @touchup.native="mouseUp($event,day)" @mousedown.native="mouseDown($event)" 
@mouseup.native="mouseUp($event,day)" :class="{today: day.isToday, selectday: isSelectDay(day)}" :key="index" v-for="(day, index) in getMonthListNoOther(month)">
                <slot :day="day">
                  <div>
                    {{ day.id }}
                  </div>
                </slot>
              </van-col>
              <van-col span="3" class="cell other" @touchdown.native="mouseDown($event)" @touchup.native="mouseUp($event,day)" @mousedown.native="mouseDown($event)" 
@mouseup.native="mouseUp($event,day)" :key="index+'_+'" v-for="(day, index) in getRightArr(month)">
                <slot :day="day">
                  <div>
                    {{ day.id }}
                  </div>
                </slot>
              </van-col>
            </van-row>
          </van-swipe-item>
        </template>
      </van-swipe>
      <!-- <div style="text-align: center;">
        <i class="van-icon" v-if="!isSpread" @click="triggerWeek">&#xe766;</i>
        <i class="van-icon" v-else @click="triggerWeek">&#xe75f;</i>
      </div> -->
    </div>
  </div>
</template>

<script>
import create from '../utils/create';
import util from './utils.js';
import moment from 'moment';
import Row from '../row';
import Col from '../col';
import Swipe from '../swipe';
import SwipeItem from '../swipe-item';
export default create({
  name: 'vertical-calendar',
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
      swipeDay: this.value,
      currentDay: this.value,
      today: new Date(),
      textTop: util.getTextTop(),
      someMonth: [],
      someWeek: [],
      isSpread: this.spread,
      mouseDownX: 0,
      mouseDownY: 0,
      mouseUpX: 0,
      mouseUpY: 0
    };
  },
  watch: {
    swipeDay() {
      this.setSomeDates();
    },
    value(val, oldVal) {
      if (
        moment(val).format('YYYY-MM-DD') !== moment(oldVal).format('YYYY-MM-DD')
      ) {
        this.swipeDay = this.value;
      }
    }
  },
  computed: {
    currentMonth() {
      return this.swipeDay
        ? moment(this.swipeDay).format(this.titleFormat)
        : '';
    }
  },
  mounted() {
    this.setSomeDates();
  },
  methods: {
    mouseDown(event) {
      this.mouseDownX = event.clientX;
      this.mouseDownY = event.clientY;
    },
    mouseUp(event, day) {
      this.mouseUpX = event.clientX;
      this.mouseUpY = event.clientY;
      if (
        Math.abs(this.mouseUpX - this.mouseDownX) < 5 &&
        Math.abs(this.mouseUpY - this.mouseDownY) < 5
      ) {
        this.clickDay(day);
      }
    },
    setSomeDates() {
      // if (this.swipingWeek) {
      this.someWeek = [
        util.getOtherWeek(this.swipeDay, ''),
        this.swipeDay,
        util.getOtherWeek(this.swipeDay)
      ];
      // } else {
      this.someMonth = [
        util.getOtherMonth(this.swipeDay, ''),
        this.swipeDay,
        util.getOtherMonth(this.swipeDay)
      ];
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
        this.swipeDay = this.someWeek[index];
      } else {
        this.swipeDay = this.someMonth[index];
      }
      this.$nextTick(() => {
        this.$refs.swipe.JumpTo(1);
        this.$emit('swipeCallBack', index);
      });
    },
    // 获取当月所有日期
    getMonthListNoOther(date) {
      return util.getMonthListNoOther(date);
    },
    // 获取当周所有日期
    getWeekListNoOther(date) {
      return util.getWeekListNoOther(date);
    },
    isSelectDay(day) {
      const nowTime = moment(this.currentDay).format('YYYY/M/D');
      return nowTime === day.date;
    },

    clickDay(day) {
      this.swipeDay = new Date(day.date);
      this.currentDay = this.swipeDay;
      this.$emit('callback', day);
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
    onChange() {}
  }
});
</script>
<style scoped>
</style>

