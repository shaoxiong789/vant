## Camera 相机

### 使用指南

``` javascript
import { Camera } from 'vant';

Vue.use(Camera);
```

### 代码演示

#### 基础用法

```html 
<van-camera name="图片上传"></van-camera>
```

#### Camera API

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| name | 标题 | `String` | - |
| placeholder | 描述 | `String` | - |
| envType | 设备类型 | `String` | `pc` |
| edit | 是否可编辑 | `Boolean` | true |
| errorMessage | 校验错误提示语 | `String` | - |
| uploadUrl | 图片上传路径 | `String` | - |
| imgArr | 图片数据 | `Array` | [] |
| iconName | 图标名称 | `String` | `photograph` |
| size | 图标大小 | `String` | `40` |
| color | 图标颜色 | `String` | `#ccc` |
| max | 最大上传张数 | `Number` | `5` |
