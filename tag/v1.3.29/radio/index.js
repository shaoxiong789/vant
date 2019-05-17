"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _create = _interopRequireDefault(require("../utils/create"));

var _findParent = _interopRequireDefault(require("../mixins/find-parent"));

var _default = (0, _create.default)({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.b({
        disabled: _vm.isDisabled
      }),
      on: {
        "click": function click($event) {
          $event.stopPropagation();

          _vm.$emit('click');
        }
      }
    }, [_c('span', {
      class: _vm.b('input')
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.currentValue,
        expression: "currentValue"
      }],
      class: _vm.b('control'),
      attrs: {
        "type": "radio",
        "disabled": _vm.isDisabled
      },
      domProps: {
        "value": _vm.name,
        "checked": _vm._q(_vm.currentValue, _vm.name)
      },
      on: {
        "change": function change($event) {
          _vm.currentValue = _vm.name;
        }
      }
    }), _c('icon', {
      attrs: {
        "name": _vm.checked ? 'checked' : 'check'
      }
    })], 1), _vm.$slots.default ? _c('span', {
      class: _vm.b('label'),
      on: {
        "click": function click($event) {
          $event.stopPropagation();
          return _vm.onClickLabel($event);
        }
      }
    }, [_vm._t("default")], 2) : _vm._e()]);
  },
  name: 'radio',
  mixins: [_findParent.default],
  props: {
    keyName: null,
    name: null,
    value: null,
    disabled: Boolean
  },
  computed: {
    checked: function checked() {
      if (!this.currentValue) {
        return false;
      }

      if (this.keyName) {
        return this.currentValue[this.keyName] === this.name[this.keyName];
      }

      return this.currentValue === this.name;
    },
    currentValue: {
      get: function get() {
        return this.parent ? this.parent.value : this.value;
      },
      set: function set(val) {
        var _this = this;

        (this.parent || this).$emit('input', null);
        this.$nextTick(function () {
          (_this.parent || _this).$emit('input', val);
        });
      }
    },
    isDisabled: function isDisabled() {
      return this.parent ? this.parent.disabled || this.disabled : this.disabled;
    }
  },
  created: function created() {
    this.findParent('van-radio-group');
  },
  methods: {
    onClickLabel: function onClickLabel() {
      if (!this.isDisabled) {
        this.currentValue = this.name;
      }
    }
  }
});

exports.default = _default;