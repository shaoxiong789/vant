<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-employee-field
        style="height: 400px;"
        company-id="0" company-name="喔趣信息科技" v-model="result" :ajax-request="ajaxRequest"/>
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
        dep: [],
        emp: []
      }
    };
  },
  methods: {
    ajaxRequest(data) {
      return new Promise((resolve, reject) => {
        // const data = api();
        // console.log(data, 121);
        // window.setTimeout(() => {
        //   resolve(data);
        // }, 50);
        // console.log(1, data);
        axios.get('http://rap2api.taobao.org/app/mock/18224//app/chooser/books2.htm', {

        }).then(({ data }) => {
          resolve(data.data);
        });
      });
    }
  }
};
</script>

<style>

</style>
