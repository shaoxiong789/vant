"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _create = _interopRequireDefault(require("../utils/create"));

var _findParent = _interopRequireDefault(require("../mixins/find-parent"));

// eslint-disable-next-line no-extend-native
Array.prototype.fakeFindIndex = function (cb, context) {
  var array = this;

  for (var i = 0; i < array.length; i++) {
    var element = array[i];

    if (cb.call(context, element, i, array)) {
      return i;
    }
  }

  return -1;
};

var _default = (0, _create.default)({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.b()
    }, [_c('icon', {
      class: [_vm.b('icon'), "van-checkbox--" + _vm.shape, {
        'van-checkbox--disabled': _vm.isDisabled,
        'van-checkbox--checked': _vm.checked
      }],
      attrs: {
        "name": "success"
      },
      on: {
        "click": function click($event) {
          $event.stopPropagation();
          return _vm.onClick($event);
        }
      }
    }), _vm.$slots.default ? _c('span', {
      class: _vm.b('label'),
      on: {
        "click": function click($event) {
          _vm.onClick('label');
        }
      }
    }, [_vm._t("default")], 2) : _vm._e()], 1);
  },
  name: 'checkbox',
  mixins: [_findParent.default],
  props: {
    name: null,
    value: null,
    keyName: null,
    disabled: Boolean,
    labelDisabled: {
      type: Boolean,
      default: false
    },
    shape: {
      type: String,
      default: 'round'
    }
  },
  computed: {
    checked: {
      get: function get() {
        var _this = this;

        return this.parent ? (this.parent.value ? this.parent.value : []).fakeFindIndex(function (element) {
          if (_this.keyName) {
            return element[_this.keyName] === _this.name[_this.keyName];
          }

          return element === _this.name;
        }) !== -1 : this.value;
      },
      set: function set(val) {
        var _this2 = this;

        var parent = this.parent;

        if (parent) {
          var parentValue = this.parent.value ? this.parent.value : [].slice();

          if (val) {
            if (parent.max && parentValue.length >= parent.max) {
              return;
            }
            /* istanbul ignore else */


            if (parentValue.fakeFindIndex(function (element) {
              if (_this2.keyName) {
                return element[_this2.keyName] === _this2.name[_this2.keyName];
              }

              return element === _this2.name;
            }) === -1) {
              parentValue.push(this.name);
              parent.$emit('input', parentValue);
            }
          } else {
            var index = parentValue.fakeFindIndex(function (element) {
              if (_this2.keyName) {
                return element[_this2.keyName] === _this2.name[_this2.keyName];
              }

              return element === _this2.name;
            });
            /* istanbul ignore else */

            if (index !== -1) {
              parentValue.splice(index, 1);
              parent.$emit('input', parentValue);
            }
          }
        } else {
          this.$emit('input', val);
        }
      }
    },
    isDisabled: function isDisabled() {
      return this.parent && this.parent.disabled || this.disabled;
    }
  },
  watch: {
    value: function value(val) {
      this.$emit('change', val);
    }
  },
  created: function created() {
    this.findParent('van-checkbox-group');
  },
  methods: {
    onClick: function onClick(target) {
      if (!this.isDisabled && !(target === 'label' && this.labelDisabled)) {
        this.checked = !this.checked;
      }
    }
  }
});

exports.default = _default;