<template>
  <div class="van-datetime-tab" v-if="initFlag">
    <div class="tab-sure-button" @click="onSure">确定</div>
    <van-tabs v-model="active" color="#999">
      <van-tab>
        <div slot="title">
          {{ newcurrentDay }}
        </div>
        <van-vertical-calendar v-model="inCurrentDate" @swipeCallBack="swipeCallBack" @callback="callback">
          <template slot-scope="scope">
            <div class="slot-class" :class="{'noMode':!mode}">
              <div class="slot-calendar">{{ scope.day.id }}</div>
              <div v-if="mode==='shiftMode'">
                <!-- (请假、外出、出差、加班、调班) -->
                <div class="slot-content" v-if="scope.day.id">{{ filter(scope.day.date) }}</div>
              </div>
              <div v-if="mode==='pointMode'">
                <!-- 漏打卡、迟到、早退 -->
                <div class="slot-content" :class="{ calendarFlag : filter(scope.day.date)==='hasPoint' }" v-if="scope.day.id" />
              </div>
            </div>
          </template>
        </van-vertical-calendar>
      </van-tab>
      <van-tab v-if="hasTime">
        <div slot="title">
          {{ inCurrentTime }}
        </div>
        <van-time-picker v-model="inCurrentTime" type="time" :step="step" />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import create from '../utils/create';
import Cell from '../cell';
import Tab from '../tab';
import Tabs from '../tabs';
import VerticalCalendar from '../vertical-calendar';
import TimePicker from '../time-picker';
import moment from 'moment';
import axios from 'axios';

export default create({
  name: 'datetime-tab',
  components: {
    VanTab: Tab,
    VanTabs: Tabs,
    VanCell: Cell,
    VanVerticalCalendar: VerticalCalendar,
    VanTimePicker: TimePicker
  },
  data() {
    return {
      initFlag: false,
      hasTime: true,
      step: 1,
      active: 0,
      inCurrentDate: '',
      inCurrentTime: '',
      shiftArr: [],
      newShiftArr: [],
      dayArr: [],
      currentValue: '',
      cback: null,
      err: null,
      eid: '',
      scene: '',
      mode: '',
      url: ''
    };
  },
  computed: {
    newcurrentDay() {
      return this.inCurrentDate
        ? moment(this.inCurrentDate).format('YYYY年MM月DD日')
        : '';
    }
  },
  methods: {
    // 初始化日历
    init(param, cback, err) {
      if (param) {
        this.inCurrentDate = moment(param.date).toDate();
        this.inCurrentTime = moment(param.date).format('HH:mm');
        this.eid = param.eid || '';
        this.scene = param.scene || '';
        this.mode = param.mode || '';
        this.step = param.step || 1;
        this.url = param.url;
        this.cback = cback;
        this.err = err;
        if (this.mode === 'pointMode') {
          this.hasTime = false;
          this.inCurrentTime = '00:00';
        } else {
          this.hasTime = true;
        }
      }
      const params = {
        year: moment(this.inCurrentDate).year(),
        month: moment(this.inCurrentDate).month() + 1,
        eid: this.eid || '',
        scene: this.scene || ''
      };
      console.log(params);
      axios.post(this.url, params).then(({ data }) => {
        if (data.result === 0) {
          // const shiftList = require('./demo/demo.json');
          this.shiftObj = data.data.attendance;
          this.dayArr = this.shiftObj.days;
          this.shiftArr = this.shiftObj.shifts;
          this.newShiftArr = this.dayArr.map((item, index) => {
            const shiftName = this.shiftArr.map(shift => {
              if (this.mode === 'shiftMode') {
                if (item.shiftId === 0) {
                  // 班次id为0择为休
                  item.cName = '休';
                } else if (
                  item.shiftId === shift.shiftId &&
                  item.shiftVersion === shift.shiftVersion
                ) {
                  // 找到对应班次的简称
                  item.cName = shift.shiftShortName;
                } else {
                  item.cName = '';
                }
                return item.cName;
              } else if (this.mode === 'pointMode') {
                const earlyFlag =
                  item.early1 > 0 ||
                  item.early2 > 0 ||
                  item.early3 > 0 ||
                  item.early4 > 0;
                const lateFlag =
                  item.late1 > 0 ||
                  item.late2 > 0 ||
                  item.late3 > 0 ||
                  item.late4 > 0;
                if (
                  (item.needSignIn && item.nosignTime > 0) ||
                  earlyFlag ||
                  lateFlag
                ) {
                  item.cName = 'hasPoint';
                } else {
                  item.cName = '';
                }
                return item.cName;
              } else {
                item.cName = '';
                return item.cName;
              }
            });
            // 数组去重
            let filterArr = Array.from(new Set(shiftName));
            // 去掉空数据;
            if (filterArr.length === 2) {
              filterArr = filterArr.filter(item => item);
            }
            item.cName = filterArr[0];
            return item;
          });
          this.initFlag = true;
        } else {
          this.err(data.message);
        }
      });
    },
    filter(date) {
      let shiftName = '';
      const len = this.newShiftArr.length;
      // 使用moment;
      for (var i = 0; i < len; i++) {
        if (moment(this.newShiftArr[i].date).isSame(date, 'day')) {
          shiftName = this.newShiftArr[i].cName;
        }
      }
      return shiftName;
    },
    onSure() {
      console.log(this.inCurrentDate);
      this.currentValue =
        moment(this.inCurrentDate).format('YYYY-MM-DD') +
        ' ' +
        this.inCurrentTime;
      const currentValue =
        moment(this.inCurrentDate).format('YYYY-MM-DD') + ' 00:00';
      const item = this.newShiftArr.filter(item => {
        // 判断选中的日历，并传给父级
        // moment same方法
        if (moment(item.date).isSame(currentValue, 'day')) {
          return item;
        }
      });
      const params = {
        date: this.currentValue,
        shift: this.shiftArr,
        data: item[0]
      };
      // 输出信息
      this.cback(params);
    },
    callback(data) {
      // 日期选择回调
      if (this.hasTime) {
        this.active = 1;
      }
      // this.$emit("dateCallBack", data);
    },
    swipeCallBack(data) {
      // 滚动回调
      // 切换日历，重新调取接口
      // this.$emit("dateSwipeCallBack", this.currentValue);
      this.init();
    }
  }
});
</script>

