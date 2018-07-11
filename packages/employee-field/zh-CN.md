## employee-field 人员选择器


### 使用指南
``` javascript
import { EmployeeField } from 'vant';

Vue.use(EmployeeField);
```

### 代码演示

#### 基础用法
```html
<van-employee-field company-id="0" company-name="喔趣信息科技" v-model="result"
  :department-request="departmentRequest" :employee-request="employeeRequest"/>
```

```javascript
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
}
```

### API


| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|-------------|
| value | 当前选中的人员或部门 | `Object` | 0 |
| company-id | 首次调用所使用的企业ID | `String` | 0 |
| company-name | 初始化的公司名称 | `String` | 全公司 |
| department-request | 请求部门的钩子，必须返回promise | `Function` | - |
| employee-request | 请求人员的钩子,必须返回promise | `Function` | - |