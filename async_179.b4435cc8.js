(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{208:function(t,e,n){"use strict";var l=n(97);n.n(l).a},209:function(t,e,n){(t.exports=n(8)(!1)).push([t.i,"\n.demo-swipe-cell {\n  -webkit-user-select: none;\n          user-select: none;\n}\n.demo-swipe-cell .van-swipe-cell__left,\n    .demo-swipe-cell .van-swipe-cell__right {\n      color: #fff;\n      font-size: 15px;\n      width: 65px;\n      height: 44px;\n      display: inline-block;\n      text-align: center;\n      line-height: 44px;\n      background-color: #f44;\n}\n",""])},231:function(t,e,n){"use strict";n.r(e);var l={i18n:{"zh-CN":{button1:"选择",button2:"删除",title:"单元格",title2:"异步关闭",confirm:"确定删除吗？",tips:"建议在手机模式下浏览本示例"},"en-US":{button1:"Select",button2:"Delete",title:"Cell",title2:"Async close",confirm:"Are you sure to delete?",tips:"Please try this demo in mobile mode"}},methods:{onClose:function(t,e){switch(t){case"left":case"cell":case"outside":e.close();break;case"right":this.$dialog.confirm({message:this.$t("confirm")}).then(function(){e.close()})}}}},s=(n(208),n(0)),o=Object(s.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("demo-section",[n("van-notice-bar",[t._v(t._s(t.$t("tips")))]),n("demo-block",{attrs:{title:t.$t("basicUsage")}},[n("van-swipe-cell",{attrs:{"right-width":65,"left-width":65}},[n("span",{attrs:{slot:"left"},slot:"left"},[t._v(t._s(t.$t("button1")))]),n("van-cell-group",[n("van-cell",{attrs:{title:t.$t("title"),value:t.$t("content")}})],1),n("span",{attrs:{slot:"right"},slot:"right"},[t._v(t._s(t.$t("button2")))])],1)],1),n("demo-block",{attrs:{title:t.$t("title2")}},[n("van-swipe-cell",{attrs:{"right-width":65,"left-width":65,"on-close":t.onClose}},[n("span",{attrs:{slot:"left"},slot:"left"},[t._v(t._s(t.$t("button1")))]),n("van-cell-group",[n("van-cell",{attrs:{title:t.$t("title"),value:t.$t("content")}})],1),n("span",{attrs:{slot:"right"},slot:"right"},[t._v(t._s(t.$t("button2")))])],1)],1)],1)],1)},[],!1,null,null,null);o.options.__file="index.vue";e.default=o.exports},97:function(t,e,n){var l=n(209);"string"==typeof l&&(l=[[t.i,l,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};n(9)(l,s);l.locals&&(t.exports=l.locals)}}]);