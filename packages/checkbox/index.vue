<template>
  <div :class="b()">
    <icon
      name="success"
      :class="[
        b('icon'),
        `van-checkbox--${shape}`, {
          'van-checkbox--disabled': isDisabled,
          'van-checkbox--checked': checked
      }]"
      @click.stop="onClick"
    />
    <span v-if="$slots.default" :class="b('label')" @click="onClick('label')">
      <slot />
    </span>
  </div>
</template>

<script>
import create from '../utils/create';
import findParent from '../mixins/find-parent';

export default create({
  name: 'checkbox',

  mixins: [findParent],

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
      get() {
        return this.parent
          ? this.parent.value.findIndex((element) => {
            if (this.keyName) {
              return element[this.keyName] === this.name[this.keyName];
            }
            return element === this.name;
          }) !== -1
          : this.value;
      },

      set(val) {
        const { parent } = this;
        if (parent) {
          const parentValue = this.parent.value.slice();
          if (val) {
            if (parent.max && parentValue.length >= parent.max) {
              return;
            }
            /* istanbul ignore else */
            if (parentValue.findIndex((element) => {
              if (this.keyName) {
                return element[this.keyName] === this.name[this.keyName];
              }
              return element === this.name;
            }) === -1) {
              parentValue.push(this.name);
              parent.$emit('input', parentValue);
            }
          } else {
            const index = parentValue.findIndex((element) => {
              if (this.keyName) {
                return element[this.keyName] === this.name[this.keyName];
              }
              return element === this.name;
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

    isDisabled() {
      return (this.parent && this.parent.disabled) || this.disabled;
    }
  },

  watch: {
    value(val) {
      this.$emit('change', val);
    }
  },

  created() {
    this.findParent('van-checkbox-group');
  },

  methods: {
    onClick(target) {
      if (!this.isDisabled && !(target === 'label' && this.labelDisabled)) {
        this.checked = !this.checked;
      }
    }
  }
});
</script>
