"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _chineseLunar = _interopRequireDefault(require("chinese-lunar"));

var _default = {
  // 某个日期当月的天数
  getDaysInOneMonth: function getDaysInOneMonth(date) {
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var d = new Date(year, month, 0);
    return d.getDate();
  },
  // 前面空出多少
  getMonthweek: function getMonthweek(date) {
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var dateFirstOne = new Date(year + '/' + month + '/1');
    return this.sundayStart ? dateFirstOne.getDay() === 0 ? 7 : dateFirstOne.getDay() : dateFirstOne.getDay() === 0 ? 6 : dateFirstOne.getDay() - 1;
  },

  /**
   * 获取当前日期上周或者下周
   * @param {*} date
   * @param {*} str
   */
  getOtherWeek: function getOtherWeek(date, str) {
    if (str === void 0) {
      str = 'nextWeek';
    }

    var timesStamp = date.getTime();

    if (str === 'nextWeek') {
      return new Date(timesStamp + 24 * 60 * 60 * 1000 * 7);
    } else {
      return new Date(timesStamp - 24 * 60 * 60 * 1000 * 7);
    }
  },

  /**
   * 获取当前日期上个月或者下个月
  */
  getOtherMonth: function getOtherMonth(date, str) {
    if (str === void 0) {
      str = 'nextMonth';
    }

    var timeArray = this.dateFormat(date).split('/');
    var year = timeArray[0];
    var month = timeArray[1];
    var day = timeArray[2];
    var year2 = year;
    var month2;

    if (str === 'nextMonth') {
      month2 = parseInt(month) + 1;

      if (month2 === 13) {
        year2 = parseInt(year2) + 1;
        month2 = 1;
      }
    } else {
      month2 = parseInt(month) - 1;

      if (month2 === 0) {
        year2 = parseInt(year2) - 1;
        month2 = 12;
      }
    }

    var day2 = day;
    var days2 = new Date(year2, month2, 0).getDate();

    if (day2 > days2) {
      day2 = days2;
    }

    if (month2 < 10) {
      month2 = '0' + month2;
    }

    if (day2 < 10) {
      day2 = '0' + day2;
    }

    var t2 = year2 + '/' + month2 + '/' + 1;
    return new Date(t2);
  },
  // 上个月末尾的一些日期
  getLeftArr: function getLeftArr(date) {
    var arr = [];
    var leftNum = this.getMonthweek(date);
    var num = this.getDaysInOneMonth(this.getOtherMonth(date, 'preMonth')) - leftNum + 1;
    var preDate = this.getOtherMonth(date, 'preMonth'); // 上个月多少开始

    for (var i = 0; i < leftNum; i++) {
      var nowTime = preDate.getFullYear() + '/' + (preDate.getMonth() + 1) + '/' + (num + i);
      arr.push({
        id: num + i,
        date: nowTime,
        lunar: _chineseLunar.default.solarToLunar(new Date(nowTime), 'D'),
        isToday: false,
        otherMonth: 'preMonth'
      });
    }

    return arr;
  },
  // 下个月前面的一些日期
  getRightArr: function getRightArr(date) {
    var arr = [];
    var nextDate = this.getOtherMonth(date, 'nextMonth');
    var leftLength = this.getDaysInOneMonth(date) + this.getMonthweek(date); // const _length = 7 - leftLength % 7;

    var _length = 7 * 6 % leftLength;

    for (var i = 0; i < _length; i++) {
      var nowTime = nextDate.getFullYear() + '/' + (nextDate.getMonth() + 1) + '/' + (i + 1);
      arr.push({
        id: i + 1,
        date: nowTime,
        lunar: _chineseLunar.default.solarToLunar(new Date(nowTime), 'D'),
        isToday: false,
        otherMonth: 'nextMonth'
      });
    }

    return arr;
  },
  // format日期
  dateFormat: function dateFormat(date) {
    date = typeof date === 'string' ? new Date(date.replace(/\-/g, '/')) : date;
    return date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate();
  },
  // 获取某周的列表不包括上周和下周
  getWeekListNoOther: function getWeekListNoOther(currentDate) {
    var timesStamp = currentDate.getTime();
    var currenDay = currentDate.getDay();
    var toDay = this.dateFormat(new Date());
    var dates = [];

    for (var i = 0; i < 7; i++) {
      var nowDate = new Date(timesStamp + 24 * 60 * 60 * 1000 * (i - (currenDay + (this.sundayStart ? 7 : 6)) % 7));
      var nowTime = this.dateFormat(nowDate);
      dates.push({
        id: nowDate.getDate(),
        date: nowTime,
        lunar: _chineseLunar.default.solarToLunar(nowDate, 'D'),
        isToday: toDay === nowTime
      });
    }

    console.log(dates);
    return dates;
  },
  // 获取某月的列表不包括上月和下月
  getMonthListNoOther: function getMonthListNoOther(date) {
    var arr = [];
    var num = this.getDaysInOneMonth(date);
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var toDay = this.dateFormat(new Date());

    for (var i = 0; i < num; i++) {
      var nowTime = year + '/' + month + '/' + (i + 1);
      arr.push({
        id: i + 1,
        date: nowTime,
        lunar: _chineseLunar.default.solarToLunar(new Date(nowTime), 'D'),
        isToday: toDay === nowTime,
        otherMonth: 'nowMonth'
      });
    }

    console.log(arr);
    return arr;
  },
  // 获取某月的列表 用于渲染
  getMonthList: function getMonthList(date) {
    return this.getLeftArr(date).concat(this.getMonthListNoOther(date), this.getRightArr(date));
  },
  getTextTop: function getTextTop() {
    if (this.sundayStart) {
      return ['日', '一', '二', '三', '四', '五', '六'];
    } else {
      return ['一', '二', '三', '四', '五', '六', '日'];
    }
  },
  // 是否从周日开始
  sundayStart: true
};
exports.default = _default;