(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{224:function(e,t,c){var l=c(281);"string"==typeof l&&(l=[[e.i,l,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};c(11)(l,o);l.locals&&(e.exports=l.locals)},280:function(e,t,c){"use strict";var l=c(224);c.n(l).a},281:function(e,t,c){(e.exports=c(10)(!1)).push([e.i,"\n.demo-checkbox .van-checkbox {\n    margin: 10px 0 0 20px;\n}\n.demo-checkbox .van-cell .van-checkbox {\n      margin: 0;\n}\n",""])},513:function(e,t,c){"use strict";c.r(t);var l={i18n:{"zh-CN":{checkbox:"复选框",labelDisabled:"禁用内容部分点击事件",title3:"Checkbox 组",title4:"设置最大可选数",title5:"与 Cell 组件一起使用"},"en-US":{checkbox:"Checkbox",labelDisabled:"Disable Label click event",title3:"Checkbox Group",title4:"Maximum amount of checked options",title5:"Inside a Cell"}},data:function(){return{checkbox1:!0,checkbox2:!0,list:["a","b","c"],result:["a","b"],result2:[],result3:[]}}},o=(c(280),c(0)),n=Object(o.a)(l,function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("demo-section",[c("demo-block",{attrs:{title:e.$t("basicUsage")}},[c("van-checkbox",{model:{value:e.checkbox1,callback:function(t){e.checkbox1=t},expression:"checkbox1"}},[e._v(e._s(e.$t("checkbox")))])],1),c("demo-block",{attrs:{title:e.$t("disabled")}},[c("van-checkbox",{attrs:{value:!1,disabled:""}},[e._v(e._s(e.$t("checkbox")))]),c("van-checkbox",{attrs:{value:!0,disabled:""}},[e._v(e._s(e.$t("checkbox")))])],1),c("demo-block",{attrs:{title:e.$t("labelDisabled")}},[c("van-checkbox",{attrs:{"label-disabled":""},model:{value:e.checkbox2,callback:function(t){e.checkbox2=t},expression:"checkbox2"}},[e._v(e._s(e.$t("checkbox")))])],1),c("demo-block",{attrs:{title:e.$t("title3")}},[c("van-checkbox-group",{model:{value:e.result,callback:function(t){e.result=t},expression:"result"}},e._l(e.list,function(t,l){return c("van-checkbox",{key:l,attrs:{name:t}},[e._v("\n        "+e._s(e.$t("checkbox"))+" "+e._s(t)+"\n      ")])}))],1),c("demo-block",{attrs:{title:e.$t("title4")}},[c("van-checkbox-group",{attrs:{max:2},model:{value:e.result2,callback:function(t){e.result2=t},expression:"result2"}},e._l(e.list,function(t,l){return c("van-checkbox",{key:l,attrs:{name:t}},[e._v("\n        "+e._s(e.$t("checkbox"))+" "+e._s(t)+"\n      ")])}))],1),c("demo-block",{attrs:{title:e.$t("title5")}},[c("van-checkbox-group",{model:{value:e.result3,callback:function(t){e.result3=t},expression:"result3"}},[c("van-cell-group",e._l(e.list,function(t,l){return c("van-cell",{key:l,attrs:{title:e.$t("checkbox")+t}},[c("van-checkbox",{attrs:{name:t}})],1)}))],1)],1)],1)},[],!1,null,null,null);n.options.__file="index.vue";t.default=n.exports}}]);