"use strict";

exports.__esModule = true;
exports.default = void 0;

var _event = require("./event");

/**
 * v-clickoutside
 *
 * ```vue
 * <div v-clickoutside="onClose">
 * ```
 */
var context = '@@clickoutsideContext';
var _default = {
  bind: function bind(el, binding) {
    var handler = function handler(event) {
      if (!el.contains(event.target)) {
        el[context].callback();
      }
    };

    el[context] = {
      handler: handler,
      callback: binding.value,
      arg: binding.arg || 'click'
    };
    (0, _event.on)(document, el[context].arg, handler);
  },
  update: function update(el, binding) {
    el[context].callback = binding.value;
  },
  unbind: function unbind(el) {
    (0, _event.off)(document, el[context].arg, el[context].handler);
  },
  install: function install(Vue) {
    Vue.directive('clickoutside', {
      bind: this.bind,
      unbind: this.unbind
    });
  }
};
exports.default = _default;