<template>
  <div
    :class="b({
      on: open,
      disabled
    })"
    :style="style"
    @click="onClick"
  >
    <div :class="b('node')">
      <loading v-if="loading" :class="b('loading')" />
    </div>
  </div>
</template>

<script>
import create from '../utils/create';

export default create({
  name: 'switch',

  props: {
    value: [Boolean, String],
    loading: Boolean,
    disabled: Boolean,
    size: {
      type: String,
      default: '30px'
    },
    activeValue: {
      type: String
    },
    inactiveValue: {
      type: String
    }
  },

  computed: {
    style() {
      return {
        fontSize: this.size
      };
    },
    open: {
      get() {
        if (this.activeValue && this.inactiveValue) {
          if (this.value === this.activeValue) {
            return true;
          }
          if (this.value === this.inactiveValue) {
            return false;
          }
        }
        return this.value;
      },
      set(value) {
        let open;
        if (value) {
          open = this.activeValue ? this.activeValue : value;
        } else {
          open = this.inactiveValue ? this.inactiveValue : value;
        }
        this.$emit('input', open);
        this.$emit('change', open);
      }
    }
  },

  methods: {
    onClick() {
      if (!this.disabled && !this.loading) {
        this.open = !this.open;
      }
    }
  }
});
</script>
