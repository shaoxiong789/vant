(window.webpackJsonp=window.webpackJsonp||[]).push([[176],{248:function(a,t,o){var i=o(330);"string"==typeof i&&(i=[[a.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};o(11)(i,r);i.locals&&(a.exports=i.locals)},329:function(a,t,o){"use strict";var i=o(248);o.n(i).a},330:function(a,t,o){(a.exports=o(10)(!1)).push([a.i,"\n.demo-radio-group {\n    padding: 0 17px;\n}\n.demo-radio-group .van-radio {\n      margin-bottom: 10px;\n}\n",""])},430:function(a,t,o){"use strict";o.r(t);var i={i18n:{"zh-CN":{radio:"单选框",text1:"未选中禁用",text2:"选中且禁用",title3:"与 Cell 组件一起使用"},"en-US":{radio:"Radio",text1:"Disabled",text2:"Disabled and checked",title:"Inside a Cell"}},data:function(){return{radio1:"1",radio2:"2",radio3:"1"}}},r=(o(329),o(0)),n=Object(r.a)(i,function(){var a=this,t=a.$createElement,o=a._self._c||t;return o("demo-section",[o("demo-block",{attrs:{title:a.$t("basicUsage")}},[o("van-radio-group",{staticClass:"demo-radio-group",model:{value:a.radio1,callback:function(t){a.radio1=t},expression:"radio1"}},[o("van-radio",{attrs:{name:"1"}},[a._v(a._s(a.$t("radio"))+" 1")]),o("van-radio",{attrs:{name:"2"}},[a._v(a._s(a.$t("radio"))+" 2")])],1)],1),o("demo-block",{attrs:{title:a.$t("disabled")}},[o("van-radio-group",{staticClass:"demo-radio-group",attrs:{disabled:""},model:{value:a.radio2,callback:function(t){a.radio2=t},expression:"radio2"}},[o("van-radio",{attrs:{name:"1"}},[a._v(a._s(a.$t("radio"))+" 1")]),o("van-radio",{attrs:{name:"2"}},[a._v(a._s(a.$t("radio"))+" 2")])],1)],1),o("demo-block",{attrs:{title:a.$t("title3")}},[o("van-radio-group",{model:{value:a.radio3,callback:function(t){a.radio3=t},expression:"radio3"}},[o("van-cell-group",[o("van-cell",{attrs:{title:a.$t("radio")+1,clickable:""},on:{click:function(t){a.radio3="1"}}},[o("van-radio",{attrs:{name:"1"}})],1),o("van-cell",{attrs:{title:a.$t("radio")+2,clickable:""},on:{click:function(t){a.radio3="2"}}},[o("van-radio",{attrs:{name:"2"}})],1)],1)],1)],1)],1)},[],!1,null,null,null);n.options.__file="index.vue";t.default=n.exports}}]);