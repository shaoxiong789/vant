<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-employee-field
        company-id="0" company-name="喔趣信息科技" v-model="result"
        :department-request="departmentRequest" :employee-request="employeeRequest"/>
    </demo-block>
  </demo-section>
</template>
<script>
import Mock from 'mockjs';
export default {
  data() {
    return {
      result: []
    };
  },
  methods: {
    departmentRequest({ id = 0, currentPage = 1 }) {
      return new Promise((resolve, reject) => {
        window.setTimeout(() => {
          const { data } = Mock.mock({
            'message': '操作成功',
            'result': 0,
            'data': {
              'list|1-10': [
                {
                  'name': '@cword(4,10)',
                  'id': '@natural'
                }
              ],
              'pageSize': 10,
              'currentPage': currentPage,
              'total': 100
            }
          });
          resolve(data);
        }, 50);
      });
    },
    employeeRequest({ departmentId = 0, currentPage = 1, search }) {
      return new Promise((resolve, reject) => {
        window.setTimeout(() => {
          const { data } = Mock.mock({
            'message': '操作成功',
            'result': 0,
            'data': {
              'list|20': [
                {
                  'name': '@cname',
                  'portrait|0-1': "@image('100x100','@color')",
                  'number': '@natural(100000,999999)',
                  'id': '@natural',
                  'title': '@cword(2,7)'
                }
              ],
              'pageSize': 10,
              'currentPage': currentPage,
              'total': 100
            }
          });
          resolve(data);
        }, 50);
      });
    }
  }
};
</script>

<style>

</style>
