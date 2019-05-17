"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _create = _interopRequireDefault(require("../utils/create"));

var _betterScroll = _interopRequireDefault(require("better-scroll"));

var _default = (0, _create.default)({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.b()
    }, [_c('div', {
      style: {
        width: _vm.contentWidth + 'px'
      }
    }, [_vm._t("default")], 2)]);
  },
  name: 'crumb',
  data: function data() {
    return {
      contentWidth: 0
    };
  },
  mounted: function mounted() {
    this.initScroll();
  },
  updated: function updated() {
    this.initScroll();
  },
  methods: {
    initScroll: function initScroll() {
      var _this = this;

      this.$nextTick(function () {
        var width = _this.$children.reduce(function (width, $item) {
          return width + $item.$el.offsetWidth + 1;
        }, 0);

        _this.contentWidth = width;

        _this.$nextTick(function () {
          new _betterScroll.default(_this.$el, {
            scrollX: true,
            click: true,
            startX: _this.$el.offsetWidth - width > 0 ? 0 : _this.$el.offsetWidth - width
          });
        });
      });
    }
  }
});

exports.default = _default;