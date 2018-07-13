<template>
  <img :class="b()" v-if="!name || src" :src="src" :style="style">
  <div :class="b()" v-else :style="style">
    {{ formatName(name) }}
  </div>
</template>
<script>
import create from '../utils/create';
export default create({
  name: 'avatar',
  props: {
    colors: {
      type: Array,
      default() {
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
  data() {
    let size;
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
  mounted() {
    if (this.defaultColor) {
      this.style.backgroundColor = this.defaultColor;
      if (console && console.warn) {
        console.warn('Avatar: defaultColor is deprecated, use colors instead.');
      }
    } else if (this.colors.length === 1) {
      this.style.backgroundColor = this.colors[0];
    } else {
      const hashCode = this.hashCode(this.name, this.isLong);
      this.style.backgroundColor = this.colors[Math.abs(hashCode) % this.colors.length];
    }
  },
  methods: {
    hashCode(strKey, isLong) {
      const MAX_VALUE = 0x7fffffff;
      const MIN_VALUE = -0x80000000;
      const intValue = (num) => {
        if (num > MAX_VALUE || num < MIN_VALUE) {
          return num & 0xFFFFFFFF; // eslint-disable-line no-bitwise
        }
        return num;
      };

      let hash = 0;
      if (typeof strKey === 'string') {
        for (let i = 0, l = strKey.length; i < l; i += 1) {
          hash = (hash * 31) + strKey.charCodeAt(i);
          if (!isLong) {
            hash = intValue(hash);
          }
        }
      }
      return hash;
    },
    formatName(name) {
      let formattedName = name;
      const isEnglishName = /^[A-Za-z,. ]+$/.test(formattedName);
      formattedName = formattedName.replace(/[()（）\d]/g, '').replace(/[,. ]+/g, isEnglishName ? ' ' : '');
      if (formattedName.indexOf(' ') !== -1) {
        formattedName = formattedName.split(' ').map(p => p.slice(0, 1)).join('');
      }
      return isEnglishName
        ? formattedName.slice(0, 2)
        : formattedName.slice(formattedName.length - 2, formattedName.length);
    }
  }
});
</script>
