(function($) {
  var app = null;
  var methods = {
    init: function(method) {
      var $el = this[0];
      app = new window.Vue({
        el: $el,
        data: {
          show: false,
          result: {
            dep: [],
            emp: []
          }
        },
        methods: {
          ajaxRequest({ key = undefined, url = undefined, urlParams = {}} = {}) {
            return new Promise((resolve, reject) => {
              window.axios.post('http://rap2api.taobao.org/app/mock/18224//app/chooser/books2.htm', {
                key,
                urlParams
              }).then(({ data }) => {
                resolve(data.data);
              });
            });
          },
          open() {
            this.show = true;
          },
          close() {
            this.show = false;
          },
          onFinish(result) {
            if (typeof method === 'function') {
              method(result);
            }
          }

        },
        template: `
          <div>
            <van-popup style="width:100%;height:100%;" v-model="show" position="right" :overlay="false">
                <van-nav-bar
                  title="选择人员"
                  left-arrow
                  @click-left="show = false"
                />
              <van-employee-field style="height: calc(100% - 46px);"
              company-id="0" @finish="onFinish" company-name="喔趣信息科技" v-model="result" :ajax-request="ajaxRequest"/>
            </van-popup>
          </div>
        `
      });
    },
    show: function() {
      app.open();
    },
    hide: function() {
      app.close();
    },
    clear: function() {
      app.result = {
        dep: [],
        emp: []
      };
    }
  };
  $.fn.employeeField = function(method) {
    // Method calling logic
    if (typeof method === 'string' && methods[method]) {
      return methods[ method ].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'function' || typeof method === 'object' || !method) {
      return methods.init.apply(this, arguments);
    } else {
      $.error('Method ' + method + ' does not exist on jQuery.employeeField');
    }
  };
})(window.jQuery);
