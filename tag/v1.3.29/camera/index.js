"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _create = _interopRequireDefault(require("../utils/create"));

var _cell = _interopRequireDefault(require("../cell"));

var _icon = _interopRequireDefault(require("../icon"));

var _toast = _interopRequireDefault(require("../toast"));

var _uploader = _interopRequireDefault(require("../uploader"));

var _imagePreview = _interopRequireDefault(require("../image-preview"));

var _vueFancybox = _interopRequireDefault(require("vue-fancybox"));

var _default = (0, _create.default)({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', [_vm.name != '' ? _c('div', {
      staticClass: "camera_title"
    }, [_vm._v(_vm._s(_vm.name) + " " + _vm._s(_vm.placeholder))]) : _vm._e(), _c('div', {
      staticClass: "camera_body"
    }, [_c('div', {
      staticClass: "camera_box"
    }, [_vm._l(_vm.imgArr, function (img, index) {
      return _c('div', {
        key: index,
        staticClass: "camera_img_item list",
        attrs: {
          "data-index": index
        }
      }, [_c('img', {
        attrs: {
          "src": img.thumb
        },
        on: {
          "click": function click($event) {
            _vm.previewImg($event, index);
          }
        }
      }), _vm.edit ? _c('van-icon', {
        staticStyle: {
          "position": "absolute",
          "top": "-9px",
          "right": "-9px",
          "color": "red",
          "font-size": "18px",
          "cursor": "pointer"
        },
        attrs: {
          "name": "clear"
        },
        on: {
          "click": function click($event) {
            _vm.deleteImg(index);
          }
        }
      }) : _vm._e()], 1);
    }), _vm.envType != 'wq' && _vm.envType != 'dd' && _vm.edit ? _c('van-uploader', {
      staticStyle: {
        "padding": "0 12px",
        "float": "left"
      },
      style: {
        marginTop: _vm.marginTop
      },
      attrs: {
        "after-read": _vm.onRead,
        "accept": "image/gif, image/jpeg, image/png",
        "multiple": ""
      }
    }, [_c('van-icon', {
      style: {
        color: _vm.color
      },
      attrs: {
        "size": _vm.size + 'px',
        "name": _vm.iconName
      }
    })], 1) : _vm._e(), (_vm.envType == 'wq' || _vm.envType == 'dd') && _vm.edit ? _c('div', {
      staticStyle: {
        "padding": "0 12px",
        "float": "left"
      },
      style: {
        marginTop: _vm.marginTop
      },
      on: {
        "click": _vm.addPic
      }
    }, [_c('van-icon', {
      style: {
        color: _vm.color
      },
      attrs: {
        "size": _vm.size + 'px',
        "name": _vm.iconName
      }
    })], 1) : _vm._e()], 2), _vm.errorMessage != '' ? _c('div', {
      staticClass: "van-field__error-message"
    }, [_vm._v(_vm._s(_vm.errorMessage))]) : _vm._e()])]);
  },
  name: 'camera',
  components: {
    VanCell: _cell.default,
    VanIcon: _icon.default,
    VanUploader: _uploader.default,
    VanImagePreview: _imagePreview.default
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
  data: function data() {
    return {};
  },
  computed: {
    'marginTop': function marginTop() {
      return this.imgArr.length === 0 ? '0px' : (40 - this.size) / 2 + 20 + 'px';
    }
  },
  mounted: function mounted() {},
  methods: {
    onRead: function onRead(file) {
      var len = this.imgArr.length;
      var max = this.max - len;

      if (Array.isArray(file)) {
        if (file.length > max) {
          (0, _toast.default)('最多上传' + this.max + '张图片！');
          file = file.slice(0, max);
        }

        this.$emit('chooseImg', file);
      } else {
        if (max !== 0) {
          this.$emit('chooseImg', file);
        }
      }
    },
    addPic: function addPic() {
      var that = this;

      if (that.envType === 'wq') {
        var success = function success(images, uploded, newImage) {
          var imgArr = that.imgArr;
          var len = imgArr.length;
          var max = that.max - len;
          var lastMax = max;

          if (images.length > max) {
            (0, _toast.default)('最多上传' + this.max + '张图片！');
          } else {
            lastMax = images.length;
          }

          for (var i = 0; i < lastMax; i++) {
            imgArr.push(that.getImgByUrl(images[i].url));
          }

          that.$emit('chooseImg', imgArr); // that.initByImgArr(imgArr);
        };

        var len = that.imgArr.length;
        var max = that.max - len;
        var params = {
          count: max,
          sourceType: ['album', 'camera'],
          size: {
            cx: 80,
            cy: 80
          }
        };
        params.url = uploadUrl;

        params.success = function (images) {
          success(images, true, true);
        };

        window.nb.pickImage(params);
      }

      if (that.envType === 'dd') {
        var len = that.imgArr.length;
        var max = that.max - len;
        that.dd.biz.util.uploadImage({
          compression: true,
          multiple: false,
          max: max,
          quality: 50,
          resize: 50,
          onSuccess: function onSuccess(result) {
            var len = that.imgArr.length;
            var max = that.max - len;

            if (result.length > max) {
              (0, _toast.default)('最多上传' + this.max + '张图片！');
              result = result.slice(0, max);
            }

            that.$emit('chooseImg', result);
          }
        });
      }
    },
    getImgByUrl: function getImgByUrl(url) {
      url = url.replace(/\\/g, '/');
      return {
        thumb: url + '_80.jpg',
        url: url
      };
    },
    deleteImg: function deleteImg(index) {
      this.$emit('deleteImg', index);
    },
    previewImg: function previewImg(e, index) {
      var arr1 = [];
      var arr2 = [];

      for (var _iterator = this.imgArr, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }

        var img = _ref;
        var temp = {};
        temp.width = 80;
        temp.height = 80;
        temp.url = img.url;
        arr1.push(img.url);
        arr2.push(temp);
      }

      if (this.envType === 'wq') {
        (0, _imagePreview.default)({
          images: arr1,
          startPosition: index
        });
      } else if (this.envType === 'dd') {
        this.dd.biz.util.previewImage({
          urls: arr1,
          // 图片地址列表
          current: arr1[index],
          // 当前显示的图片链接
          onSuccess: function onSuccess(result) {
            /**/
          }
        });
      } else {
        (0, _vueFancybox.default)(e.target, arr2);
      }
    }
  }
});

exports.default = _default;