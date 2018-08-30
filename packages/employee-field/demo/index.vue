<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-employee-field
        style="height: calc(100vh - 49px - 46px);"
        company-id="0" type="emp" :radio="radio" company-name="喔趣信息科技" v-model="result"
        :ajax-request="ajaxRequest"/>
    </demo-block>
  </demo-section>
</template>
<script>
import axios from 'axios';
// import api from './api.js';
export default {
  data() {
    return {
      result: {
        dep: null,
        emp: null
      },
      radio: false
    };
  },
  methods: {
    ajaxRequest(data) {
      return new Promise((resolve, reject) => {
        axios.get('http://rap2api.taobao.org/app/mock/18224/app/chooser/members.htm', {

        }).then(({ data }) => {
          resolve(data);
        });
      });
    }
  }
};
</script>

<style>

</style>
