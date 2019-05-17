## DateTimeTab 日历选择器

### 使用指南

```javascript
import { DateTimeTab } from "vant";

Vue.use(DateTimeTab);
```

### 代码演示

#### 基础用法

定义一个日历选择器,默认初始化为当前时间

```html
<van-datetime-tab :eid="eid" @sureCallBack="sureCallBack" />
```

```js
export default {
  data() {
    return {
      eid: 1
    };
  },
  methods: {
    sureCallBack(data) {
      console.log(data);
    }
  }
};
```

#### 提供初始值显示班次模式

根据初始值，显示模式渲染日历

```html
<van-datetime-tab
  :current-date="currentDate1"
  :step="step1"
  :eid="eid1"
  :mode="mode1"
  :date-type="dateType1"
  @sureCallBack="sureCallBack1"
/>
```

```js
export default {
  data() {
    return {
      currentDate1: new Date("2019-2-24 11:00"),
      eid1: 1,
      step1: 15,
      dateType1: "hasCalendar",
      mode1: "shiftMode"
    };
  },
  methods: {
    sureCallBack1(data) {
      console.log(data);
    }
  }
};
```

#### 完整示例

显示标识模式，设置步长

```html
<van-datetime-tab
  :current-date="currentDate2"
  :mode="mode1"
  :url="url2"
  :eid="eid2"
  :date-type="dateType2"
  @sureCallBack="sureCallBack2"
/>
```

```javascript
export default {
  data() {
    return {
      currentDate2: new Date("2019-3-03 09:00"),
      dateType2: "hasCalendar",
      mode2: "showPointMode",
      url2:
        "http://rap2api.taobao.org/app/mock/163270/app/employee/myAttendanceData.htm",
      eid2: 1
    };
  },
  methods: {
    sureCallBack2(data) {
      console.log(data);
    }
  }
};
```

### DateTimeTab API

| 参数         | 说明       | 类型     | 默认值       |
| ------------ | ---------- | -------- | ------------ |
| current-date | 初始化时间 | `Date`   | `new Date()` |
| step         | 步长       | `Number` | `1`          |
| params       | 接口参数   | `Object` | `{}`         |

### DateTimeTab Event

| 事件名 | 说明         | 参数 |
| ------ | ------------ | ---- |
| click  | 点击确认触发 |      |
