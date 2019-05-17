"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _create = _interopRequireDefault(require("../utils/create"));

var _default2 = (0, _create.default)({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return !_vm.name || _vm.src ? _c('img', {
      class: _vm.b(),
      style: _vm.style,
      attrs: {
        "src": _vm.src
      }
    }) : _c('div', {
      class: _vm.b(),
      style: _vm.style
    }, [_vm._v("\n  " + _vm._s(_vm.formatName(_vm.name)) + "\n")]);
  },
  name: 'avatar',
  props: {
    colors: {
      type: Array,
      default: function _default() {
        return ['#78C06E', '#3BC2B5', '#78919D', '#5EC9F6', '#F6BF26'];
      }
    },
    name: {
      type: String
    },
    src: {
      type: String
    },
    size: {
      type: String,
      default: 'normal'
    },
    fontSize: {
      type: String,
      default: '14px'
    },
    defaultColor: {
      type: String
    },
    isLong: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    var size;

    switch (this.size) {
      case 'normal':
        size = '40px';
        break;

      case 'large':
        size = '48px';
        break;

      default:
        size = this.size;
    }

    return {
      style: {
        width: size,
        height: size,
        lineHeight: size,
        fontSize: this.fontSize,
        position: 'relative',
        backgroundColor: null
      }
    };
  },
  mounted: function mounted() {
    if (this.defaultColor) {
      this.style.backgroundColor = this.defaultColor;

      if (console && console.warn) {
        console.warn('Avatar: defaultColor is deprecated, use colors instead.');
      }
    } else if (this.colors.length === 1) {
      this.style.backgroundColor = this.colors[0];
    } else {
      var hashCode = this.hashCode(this.name, this.isLong);
      this.style.backgroundColor = this.colors[Math.abs(hashCode) % this.colors.length];
    }
  },
  methods: {
    hashCode: function hashCode(strKey, isLong) {
      var MAX_VALUE = 0x7fffffff;
      var MIN_VALUE = -0x80000000;

      var intValue = function intValue(num) {
        if (num > MAX_VALUE || num < MIN_VALUE) {
          return num & 0xFFFFFFFF; // eslint-disable-line no-bitwise
        }

        return num;
      };

      var hash = 0;

      if (typeof strKey === 'string') {
        for (var i = 0, l = strKey.length; i < l; i += 1) {
          hash = hash * 31 + strKey.charCodeAt(i);

          if (!isLong) {
            hash = intValue(hash);
          }
        }
      }

      return hash;
    },
    formatName: function formatName(name) {
      var formattedName = name;
      var isEnglishName = /^[A-Za-z,. ]+$/.test(formattedName);
      formattedName = formattedName.replace(/[()（）\d]/g, '').replace(/[,. ]+/g, isEnglishName ? ' ' : '');

      if (formattedName.indexOf(' ') !== -1) {
        formattedName = formattedName.split(' ').map(function (p) {
          return p.slice(0, 1);
        }).join('');
      }

      return isEnglishName ? formattedName.slice(0, 2) : formattedName.slice(formattedName.length - 2, formattedName.length);
    }
  }
});

exports.default = _default2;