"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _create = _interopRequireDefault(require("../utils/create"));

var _utils = _interopRequireDefault(require("./utils.js"));

var _fecha = _interopRequireDefault(require("fecha"));

var _default = (0, _create.default)({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      staticClass: "van-calendar"
    }, [_c('van-row', [_c('van-col', {
      staticStyle: {
        "height": "30px"
      },
      attrs: {
        "span": "4"
      }
    }), _c('van-col', {
      staticStyle: {
        "text-align": "center",
        "line-height": "30px"
      },
      attrs: {
        "span": "4"
      },
      nativeOn: {
        "click": function click($event) {
          return _vm.toLastMonth($event);
        }
      }
    }, [_c('i', {
      staticClass: "van-icon"
    }, [_vm._v("")])]), _c('van-col', {
      staticStyle: {
        "text-align": "center",
        "line-height": "30px"
      },
      attrs: {
        "span": "8"
      }
    }, [_vm._v(_vm._s(_vm.currentMonth))]), _c('van-col', {
      staticStyle: {
        "text-align": "center",
        "line-height": "30px"
      },
      attrs: {
        "span": "4"
      },
      nativeOn: {
        "click": function click($event) {
          return _vm.toNextMonth($event);
        }
      }
    }, [_c('i', {
      staticClass: "van-icon"
    }, [_vm._v("")])]), _c('van-col', {
      staticStyle: {
        "height": "30px",
        "text-align": "center"
      },
      attrs: {
        "span": "4"
      }
    }, [_c('div', {
      staticClass: "totoday",
      on: {
        "click": _vm.toToday
      }
    }, [_vm._v("今")])])], 1), _c('div', [_c('van-row', _vm._l(_vm.textTop, function (week, index) {
      return _c('van-col', {
        key: index,
        staticClass: "cell",
        staticStyle: {
          "line-height": "calc( 100vw / 7 - 10px )"
        },
        attrs: {
          "span": "3"
        }
      }, [_vm._v(_vm._s(week))]);
    })), _c('van-swipe', {
      ref: "swipe",
      attrs: {
        "show-indicators": false,
        "initial-swipe": 1
      },
      on: {
        "change": _vm.swipeChange
      }
    }, [_vm.swipingWeek ? _vm._l(_vm.someWeek, function (week, index) {
      return _c('van-swipe-item', {
        key: index
      }, [_c('van-row', _vm._l(_vm.getWeekListNoOther(week), function (day, index) {
        return _c('van-col', {
          key: index,
          staticClass: "cell",
          class: {
            today: day.isToday,
            selectday: _vm.isSelectDay(day)
          },
          attrs: {
            "span": "3"
          },
          nativeOn: {
            "click": function click($event) {
              _vm.clickDay(day);
            }
          }
        }, [_vm._t("default", [_c('div', {
          staticStyle: {
            "line-height": "calc( 100vw / 7 - 10px )"
          }
        }, [_vm._v("\n                  " + _vm._s(day.id) + "\n                ")])], {
          day: day
        })], 2);
      }))], 1);
    }) : _vm._l(_vm.someMonth, function (month, index) {
      return _c('van-swipe-item', {
        key: index
      }, [_c('van-row', [_vm._l(_vm.getLeftArr(month), function (day, index) {
        return _c('van-col', {
          key: index + '_-',
          staticClass: "cell other",
          attrs: {
            "span": "3"
          },
          nativeOn: {
            "click": function click($event) {
              _vm.clickDay(day);
            }
          }
        }, [_vm._t("default", [_c('div', {
          staticStyle: {
            "line-height": "calc( 100vw / 7 - 10px )"
          }
        }, [_vm._v("\n                  " + _vm._s(day.id) + "\n                ")])], {
          day: day
        })], 2);
      }), _vm._l(_vm.getMonthListNoOther(month), function (day, index) {
        return _c('van-col', {
          key: index,
          staticClass: "cell",
          class: {
            today: day.isToday,
            selectday: _vm.isSelectDay(day)
          },
          attrs: {
            "span": "3"
          },
          nativeOn: {
            "click": function click($event) {
              _vm.clickDay(day);
            }
          }
        }, [_vm._t("default", [_c('div', {
          staticStyle: {
            "line-height": "calc( 100vw / 7 - 10px )"
          }
        }, [_vm._v("\n                  " + _vm._s(day.id) + "\n                ")])], {
          day: day
        })], 2);
      }), _vm._l(_vm.getRightArr(month), function (day, index) {
        return _c('van-col', {
          key: index + '_+',
          staticClass: "cell other",
          attrs: {
            "span": "3"
          },
          nativeOn: {
            "click": function click($event) {
              _vm.clickDay(day);
            }
          }
        }, [_vm._t("default", [_c('div', {
          staticStyle: {
            "line-height": "calc( 100vw / 7 - 10px )"
          }
        }, [_vm._v("\n                  " + _vm._s(day.id) + "\n                ")])], {
          day: day
        })], 2);
      })], 2)], 1);
    })], 2), _c('div', {
      staticStyle: {
        "text-align": "center"
      }
    }, [_vm.swipingWeek ? _c('i', {
      staticClass: "van-icon",
      on: {
        "click": _vm.triggerWeek
      }
    }, [_vm._v("")]) : _c('i', {
      staticClass: "van-icon",
      on: {
        "click": _vm.triggerWeek
      }
    }, [_vm._v("")])])], 1)], 1);
  },
  name: 'calendar',
  props: {
    titleFormat: {
      type: String,
      default: 'YYYY年M月'
    }
  },
  data: function data() {
    return {
      // 当前日
      currentDay: null,
      today: new Date(),
      textTop: _utils.default.getTextTop(),
      someMonth: [],
      someWeek: [],
      swipingWeek: false
    };
  },
  watch: {
    currentDay: function currentDay() {
      // if (this.swipingWeek) {
      this.someWeek = [_utils.default.getOtherWeek(this.currentDay, ''), this.currentDay, _utils.default.getOtherWeek(this.currentDay)]; // } else {

      this.someMonth = [_utils.default.getOtherMonth(this.currentDay, ''), this.currentDay, _utils.default.getOtherMonth(this.currentDay)]; // }
    }
  },
  computed: {
    currentMonth: function currentMonth() {
      return this.currentDay ? _fecha.default.format(this.currentDay, this.titleFormat) : '';
    }
  },
  mounted: function mounted() {
    this.currentDay = new Date(); // console.log(this.getLeftArr(new Date()));
  },
  methods: {
    toToday: function toToday() {
      this.currentDay = new Date();
    },
    triggerWeek: function triggerWeek() {
      this.swipingWeek = !this.swipingWeek;
    },
    swipeChange: function swipeChange(index) {
      var _this = this;

      if (this.swipingWeek) {
        this.currentDay = this.someWeek[index];
      } else {
        this.currentDay = this.someMonth[index];
      }

      this.$nextTick(function () {
        _this.$refs.swipe.JumpTo(1);
      });
    },
    // 获取当月所有日期
    getMonthListNoOther: function getMonthListNoOther(date) {
      return _utils.default.getMonthListNoOther(date);
    },
    // 获取当周所有日期
    getWeekListNoOther: function getWeekListNoOther(date) {
      // console.log(date, util.getWeekListNoOther(date));
      return _utils.default.getWeekListNoOther(date);
    },
    isSelectDay: function isSelectDay(day) {
      var nowTime = _fecha.default.format(this.currentDay, 'YYYY/M/D');

      return nowTime == day.date;
    },
    clickDay: function clickDay(day) {
      this.currentDay = new Date(day.date);
    },
    // 前面空出列数
    getMonthweek: function getMonthweek(date) {
      return _utils.default.getMonthweek(date);
    },
    // 获取上个月末尾的一些日期
    getLeftArr: function getLeftArr(date) {
      return _utils.default.getLeftArr(date);
    },
    getRightArr: function getRightArr(date) {
      return _utils.default.getRightArr(date);
    },
    // 去上个月
    toLastMonth: function toLastMonth() {
      console.log(_utils.default.getOtherMonth(this.currentDay, ''));
      this.currentDay = _utils.default.getOtherMonth(this.currentDay, '');
    },
    // 去下个月
    toNextMonth: function toNextMonth() {
      this.currentDay = _utils.default.getOtherMonth(this.currentDay);
    },
    onChange: function onChange() {}
  }
});

exports.default = _default;