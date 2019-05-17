## Calendar 日历

### 使用指南

``` javascript
import { Calendar } from 'vant';

Vue.use(Calendar);
```

### 代码演示

#### 基础用法
```html 
<van-calendar/>
```

#### 高级用法
可以通过作用域插槽`slot`定制替换默认内容
```html
<van-calendar>
  <template slot-scope="slotProps">
    {{ slotProps.day.id }}
  </template>
</van-calendar>
```

#### Calendar API

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| title-format | 日历标题格式 | `String` | `YYYY年M月` |

### Slot

| 名称 | 说明 |
|-----------|-----------|
| - | 自定义显示日历单元格 |