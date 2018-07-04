## crumb 面包屑

### 使用指南

``` javascript
import { Crumb, CrumbItem } from 'vant';

Vue.use(Crumb).
use(CrumbItem)
```


### 代码演示
#### 基础用法

```html
<van-crumb>
  <van-crumb-item @click.native="onClick(crumb)" :key="index" v-for="(crumb,index) in crumbs">
    {{ crumb.text }}
  </van-crumb-item>
</van-crumb>
```

```javascript
export default {
  data() {
    return {
      crumb: '',
      crumbs: [
        { text: '刘一' },
        { text: '陈二' },
        { text: '张三' },
        { text: '李四' },
        { text: '王五' },
        { text: '赵六' },
        { text: '孙七' },
        { text: '周八' },
        { text: '吴九' },
        { text: '郑十' }
      ]
    };
  },
  methods: {
    onClick(crumb) {
      this.crumb = crumb;
    }
  }
}
```