<template>
  <div :class="b({ disabled: isDisabled })" @click.stop="$emit('click')">
    <span :class="b('input')">
      <input
        :value="name"
        v-model="currentValue"
        type="radio"
        :class="b('control')"
        :disabled="isDisabled"
      >
      <icon :name="checked ? 'checked' : 'check'" />
    </span>
    <span v-if="$slots.default" :class="b('label')" @click.stop="onClickLabel">
      <slot />
    </span>
  </div>
</template>

<script>
import create from '../utils/create';
import findParent from '../mixins/find-parent';

export default create({
  name: 'radio',

  mixins: [findParent],

  props: {
    keyName: null,
    name: null,
    value: null,
    disabled: Boolean
  },

  computed: {
    checked() {
      if (!this.currentValue) {
        return false;
      }
      if (this.keyName) {
        return this.currentValue[this.keyName] === this.name[this.keyName];
      }
      return this.currentValue === this.name;
    },
    currentValue: {
      get() {
        return this.parent ? this.parent.value : this.value;
      },

      set(val) {
        (this.parent || this).$emit('input', val);
      }
    },

    isDisabled() {
      return this.parent
        ? this.parent.disabled || this.disabled
        : this.disabled;
    }
  },

  created() {
    this.findParent('van-radio-group');
  },

  methods: {
    onClickLabel() {
      if (!this.isDisabled) {
        this.currentValue = this.name;
      }
    }
  }
});
</script>
