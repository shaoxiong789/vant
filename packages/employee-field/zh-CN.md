## employee-field 人员选择器


### 使用指南
``` javascript
import { EmployeeField } from 'vant';

Vue.use(EmployeeField);
```

### 代码演示

#### 基础用法
```html
<van-employee-field
        company-id="0" type="dep,emp" company-name="喔趣信息科技" v-model="result" :ajax-request="ajaxRequest"/>
```

```javascript
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
        axios.get('http://rap2api.taobao.org/app/mock/18224/app/chooser/members.htm', {

        }).then(({ data }) => {
          resolve(data);
        });
      });
    }
  }
};
```

### API


| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|-------------|
| value | 当前选中的人员或部门 | `Object` | 0 |
| company-id | 首次调用所使用的企业ID | `String` | 0 |
| company-name | 初始化的公司名称 | `String` | 全公司 |
| department-request | 请求部门的钩子，必须返回promise | `Function` | - |
| employee-request | 请求人员的钩子,必须返回promise | `Function` | - |
| type | 选择模式是否支持部门或者人员 | `String` | dev,emp |
| radio | 是否是单选 | `Boolean` | false |