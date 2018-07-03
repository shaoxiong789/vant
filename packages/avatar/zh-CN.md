## Avatar 头像

### 使用指南

``` javascript
import { Avatar } from 'vant';

Vue.use(Avatar);
```

### 代码演示

#### 基础用法
支持`normal` 、`large`两种尺寸，默认为`normal`,可自定义

```html 
<van-avatar name="李明" size="normal"/>
<van-avatar name="李明" size="large"/>
```

#### 自定义颜色合集
```html
<van-avatar :colors="colors" name="李明"/>
<van-avatar :colors="colors" name="天明"/>
<van-avatar :colors="colors" name="夏丹"/>
<van-avatar :colors="colors" name="喔趣"/>
<van-avatar :colors="colors" name="马东"/>
```
```javascript
export default {
  data() {
    return {
      colors: ['#795548', '#673ab7', '#4CAF50', '#5EC9F6', '#795548']
    }
  }
}
```

#### 自定义尺寸大小

```html
<van-avatar name="李明" size="30px"/>
<van-avatar name="李明" size="40px"/>
<van-avatar name="李明" size="50px"/>
```
#### 自定义字体大小
```html
<van-avatar name="马明" size="50px" font-size="12px"/>
<van-avatar name="马明" size="50px" font-size="14px"/>
<van-avatar name="马明" size="50px" font-size="16px"/>
```