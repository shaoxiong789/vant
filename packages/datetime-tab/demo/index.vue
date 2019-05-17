<template>
  <demo-section>
    <!-- <demo-block :title="$t('title1')">
      <van-datetime-tab :url="url" :eid="eid" @sureCallBack="sureCallBack" />
    </demo-block> -->

    <demo-block :title="$t('title2')">
      <button @click="click1">1</button>
      <button @click="click2">2</button>
      <button @click="click3">3</button>
      <button @click="click4">4</button>
      <!-- <van-button @click="click1">1</van-button>
      <van-button @click="click2">2</van-button>
      <van-button @click="click3">3</van-button>
      <van-button @click="click4">4</van-button> -->
      <van-datetime-tab ref="dateTimeTab" />
    </demo-block>

    <!-- <demo-block :title="$t('title3')">
      <van-datetime-tab :current-date="currentDate2" :step="step2" :mode="mode2" :url="url2" :eid="eid2"
:date-type="dateType2" @sureCallBack="sureCallBack2" />
    </demo-block> -->

  </demo-section>
</template>

<script>
import base from '../base.js';
// import Button from '../button';
export default {
  i18n: {
    'zh-CN': {
      title1: '基础组件',
      title2: '提供初始值显示班次模式',
      title3: '完整示例'
    },
    'en-US': {
      title2: 'Swipe Tabs',
      title3: 'Disabled Tab',
      title4: 'Card Style',
      title5: 'Click Event',
      title6: 'Sticky',
      title7: 'Custom Tab',
      title8: 'Swipeable',
      disabled: ' is disabled'
    }
  },
  data() {
    return {
      // currentDate1: new Date('2019-2-24 11:00'),
      // currentDate2: new Date('2019-3-03 09:05'),
      // step1: 4,
      // eid: 1,
      // url:
      //   'http://rap2api.taobao.org/app/mock/163270/app/employee/myAttendanceData.htm',
      // dateType1: 'hasCalendar',
      // eid1: 2,
      // mode1: 'shiftMode',
      // url1:
      //   'http://rap2api.taobao.org/app/mock/163270/app/employee/myAttendanceData.htm',
      // dateType2: 'hasCalendar',
      // scene: '',
      // step2: 15,
      // mode2: 'showPointMode',
      // url2:
      //   'http://rap2api.taobao.org/app/mock/163270/app/employee/myAttendanceData.htm',
      // eid2: 3
    };
  },
  mounted() {
    // const params = {
    //   eid: 1,
    //   mode: 'pointMode', // pointMode
    //   date: '2019-04-01 12:23', // 可能是这种格式 2019-04-01 肯定有值
    //   url:
    //     'http://rap2api.taobao.org/app/mock/163270/app/employee/myAttendanceData.htm',
    //   step: 15
    // };
    // this.$refs.dateTimeTab.init(
    //   params,
    //   function(data) {
    //     console.log(data);
    //   },
    //   function(err) {
    //     console.log(err);
    //   }
    // );
  },
  methods: {
    click1() {
      console.log(1);
      const params = {
        eid: 1,
        // mode: 'pointMode', // pointMode
        date: '2019-03-01', // 可能是这种格式 2019-04-01 肯定有值
        url:
          'http://rap2api.taobao.org/app/mock/163270/app/employee/myAttendanceData.htm'
        // step: 15
      };
      base.getData(
        params,
        data => {
          console.log(data);
        },
        err => {
          console.log(err);
        }
      );

      // this.$refs.dateTimeTab.init(
      //   params,
      //   data => {
      //     console.log(data);
      //   },
      //   err => {
      //     console.log(err);
      //   }
      // );
    },
    click2() {
      console.log(2);
      const params = {
        eid: 1,
        mode: 'pointMode', // pointMode
        date: '2019-03-01', // 可能是这种格式 2019-04-01 肯定有值
        url:
          'http://rap2api.taobao.org/app/mock/163270/app/employee/myAttendanceData.htm',
        step: 15
      };
      this.$refs.dateTimeTab.init(
        params,
        data => {
          console.log(data);
        },
        err => {
          console.log(err);
        }
      );
    },
    click3() {
      const params = {
        eid: 2,
        mode: 'pointMode', // pointMode
        date: '2019-03-01', // 可能是这种格式 2019-04-01 肯定有值
        url:
          'http://rap2api.taobao.org/app/mock/163270/app/employee/myAttendanceData.htm',
        step: 15
      };
      this.$refs.dateTimeTab.init(
        params,
        data => {
          console.log(data);
        },
        err => {
          console.log(err);
        }
      );
    },
    click4() {
      console.log(4);
      const params = {
        eid: 2,
        mode: 'shiftMode', // pointMode
        date: '2019-03-01 8:00', // 可能是这种格式 2019-04-01 肯定有值
        url:
          'http://rap2api.taobao.org/app/mock/163270/app/employee/myAttendanceData.htm',
        step: 15
      };
      this.$refs.dateTimeTab.init(
        params,
        data => {
          console.log(data);
        },
        err => {
          console.log(err);
        }
      );
    }
    // sureCallBack(data) {
    //   console.log(data);
    // },
    // sureCallBack1(data) {
    //   console.log(data);
    // },
    // sureCallBack2(data) {
    //   console.log(data);
    // }
  }
};
// 组件输入
</script>

<style lang="postcss">
.demo-tab {
  margin-bottom: 300px;

  .van-tab .van-icon {
    margin-right: 5px;
    vertical-align: -2px;
  }

  .van-tab__pane {
    background-color: #fff;
    padding: 20px;
  }

  .van-tabs--card .van-tab__pane {
    background-color: transparent;
  }

  .custom-tabwrap .van-tab-active {
    color: #20a0ff;
  }

  .custom-tabwrap .van-tabs-nav-bar {
    background: #20a0ff;
  }

  .custom-pane {
    text-align: center;
    height: 50px;
    line-height: 50px;
  }

  .van-doc-demo-block:last-child {
    .van-tab__pane {
      padding: 50px 20px;
    }
  }
}
</style>
