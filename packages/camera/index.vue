<template>
  <div>
    <div class="camera_title" v-if="name != ''">{{name}} {{placeholder}}</div>
    <div class="camera_body">
      <div class="camera_box">
        <div class="camera_img_item list" v-for="(img, index) in imgArr" :key="index" :data-index="index">
          <img :src="img.thumb" @click="previewImg($event, index)" />
          <van-icon v-if="edit" name="clear" style="position:absolute;top:-9px;right:-9px;color:red;font-size:18px;cursor:pointer;" @click="deleteImg(index)"/>
        </div>
        <van-uploader v-if="envType != 'wq' && envType != 'dd' && edit" :after-read="onRead" style="padding:0 12px;float:left;" :style="{marginTop: marginTop}" accept="image/gif, image/jpeg, image/png" multiple>
          <van-icon :size="size+'px'" :name="iconName" :style="{color: color}" />
        </van-uploader>
        <div v-if="(envType == 'wq' || envType == 'dd') && edit" style="padding:0 12px;float:left;" @click="addPic" :style="{marginTop: marginTop}">
          <van-icon :size="size+'px'" :name="iconName" :style="{color: color}" />
        </div>
      </div>
      <div class="van-field__error-message" v-if="errorMessage != ''">{{errorMessage}}</div>
    </div>
  </div>
</template>
<script>
import create from '../utils/create';

import Cell from '../cell';
import Icon from '../icon';
import Toast from '../toast';
import Uploader from '../uploader';
import ImagePreview from '../image-preview';
import fancyBox from 'vue-fancybox';
export default create({
  name: 'camera',
  components: {
    VanCell: Cell,
    VanIcon: Icon,
    VanUploader: Uploader,
    VanImagePreview: ImagePreview
  },
  props: {
    iconName: {
      type: String,
      default: 'photograph'
    },
    max: {
      type: Number,
      default: 5
    },
    size: {
      type: String,
      default: '40'
    },
    color: {
      type: String,
      default: '#ccc'
    },
    envType: {
      type: String,
      default: 'pc'
    },
    edit: {
      type: Boolean,
      default: true
    },
    name: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String
    },
    errorMessage: {
      type: String
    },
    uploadUrl: {
      type: String
    },
    imgArr: {
      type: Array,
      default: []
    }
  },
  data() {
    return {};
  },
  computed: {
    'marginTop': function () {
      return this.imgArr.length == 0 ? '0px' : (40 - this.size) / 2 + 20 + 'px'
    }
  },
  mounted() {
    
  },
  methods: {
    onRead(file) {
      var len = this.imgArr.length;
      var max = this.max - len;
      if (Array.isArray(file)) {
        if (file.length > max) {
          Toast('最多上传' + this.max + '张图片！');
          file = file.slice(0, max);
        }
        this.$emit('chooseImg', file);
      } else {
        if ( max != 0) {
          this.$emit('chooseImg', file);
        }
      }
    },
    addPic() {
      const that = this;
      if (that.envType == 'wq') {
        const success = function(images, uploded, newImage) {
          const imgArr = that.imgArr;
          var len = imgArr.length;
          var max = that.max - len;
          var lastMax = max;
          if (images.length > max) {
            Toast('最多上传' + this.max + '张图片！');
          } else {
            lastMax = images.length;
          }
          for (var i = 0; i < lastMax; i++) {
            imgArr.push(that.getImgByUrl(images[i].url));
          }
          that.$emit('chooseImg', imgArr);
          // that.initByImgArr(imgArr);
        };
        var len = that.imgArr.length;
        var max = that.max - len;
        const params = {
          count: max,
          sourceType: ['album', 'camera'],
          size: {
            cx: 80,
            cy: 80
          }
        };
        params.url = uploadUrl;
        params.success = function(images) {
          success(images, true, true);
        };
        window.nb.pickImage(params);
      }
      if (that.envType == 'dd') {
        var len = that.imgArr.length;
        var max = that.max - len;
        that.dd.biz.util.uploadImage({
          compression: true,
          multiple: false,
          max: max,
          quality: 50,
          resize: 50,
          onSuccess: function(result) {
            var len = that.imgArr.length;
            var max = that.max - len;
            if (result.length > max) {
              Toast('最多上传' + this.max + '张图片！');
              result = result.slice(0, max);
            }
            that.$emit('chooseImg', result);
          }
        });
      }
    },
    getImgByUrl(url) {
      url = url.replace(/\\/g, '/');
      return { thumb: url + '_80.jpg', url: url };
    },
    deleteImg(index) {
      this.$emit('deleteImg', index);
    },
    previewImg(e, index) {
      const arr1 = [];
      const arr2 = [];
      for (const img of this.imgArr) {
        const temp = {};
        temp.width = 80;
        temp.height = 80;
        temp.url = img.url;
        arr1.push(img.url);
        arr2.push(temp);
      }
      if (this.envType == 'wq') {
        ImagePreview({
          images: arr1,
          startPosition: index
        });
      } else if (this.envType == 'dd') {
        this.dd.biz.util.previewImage({
          urls: arr1, // 图片地址列表
          current: arr1[index], // 当前显示的图片链接
          onSuccess: function(result) {
            /**/
          }
        });
      } else {
        fancyBox(e.target, arr2);
      }
    },
  }
});
</script>
