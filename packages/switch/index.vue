<template>
  <div
    :class="b({
      on: value === true || value == activeValue,
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
    value: [String, Boolean, Number],
    loading: Boolean,
    disabled: Boolean,
    size: {
      type: String,
      default: '30px'
    },
    activeValue: {
      type: [String, Boolean, Number],
      default: true
    },
    inactiveValue: {
      type: [String, Boolean, Number],
      default: false
    }
  },

  computed: {
    style() {
      return {
        fontSize: this.size
      };
    }
  },

  methods: {
    onClick() {
      if (!this.disabled && !this.loading) {
        if (this.activeValue === this.value) {
          this.$emit('input', this.inactiveValue || !this.value);
          this.$emit('change', this.inactiveValue || !this.value);
          return;
        }
        if (this.inactiveValue === this.value) {
          this.$emit('input', this.activeValue || !this.value);
          this.$emit('change', this.activeValue || !this.value);
          return;
        }
        this.$emit('input', !this.value);
        this.$emit('change', !this.value);
      }
    }
  }
});
</script>
