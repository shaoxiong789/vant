<template>
  <div :class="b()">
    <slot/>
  </div>
</template>
<script>
import create from '../utils/create';

export default create({
  name: 'crumb-item',
  methods: {
    click() {
      this.$emit('click');
    }
  }
});
</script>
<style>
.van-crumb-item{
  float: left;
  color: #3c99d8;
}
.van-crumb-item:after{
  content: '>';
  color: #ccc;
  line-height: 1.8;
  padding: 0 10px;
}
</style>
