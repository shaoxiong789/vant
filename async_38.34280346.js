(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{168:function(t,e,o){var n=o(247);"string"==typeof n&&(n=[[t.i,n,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};o(13)(n,l);n.locals&&(t.exports=n.locals)},247:function(t,e,o){(t.exports=o(14)(!1)).push([t.i,"\n.demo-dialog .van-doc-demo-block > .van-button {\n    margin: 15px;\n}\n",""])},248:function(t,e,o){"use strict";var n=o(168);o.n(n).a},414:function(t,e,o){"use strict";o.r(e);var n={i18n:{"zh-CN":{title1:"消息提示",title2:"消息确认",alert2:"无标题 Alert"},"en-US":{title1:"Alert dialog",title2:"Confirm dialog",alert2:"Alert without title"}},data:function(){return{show:!1,username:"",password:""}},methods:{onClickAlert:function(){this.$dialog.alert({title:this.$t("title"),message:this.$t("content")})},onClickAlert2:function(){this.$dialog.alert({message:this.$t("content")})},onClickConfirm:function(){this.$dialog.confirm({title:this.$t("title"),message:this.$t("content")})},beforeClose:function(t,e){"confirm"===t?setTimeout(e,1e3):e()}}},l=(o(248),o(0)),a=Object(l.a)(n,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("demo-section",[o("demo-block",{attrs:{title:t.$t("title1")}},[o("van-button",{on:{click:t.onClickAlert}},[t._v("Alert")]),o("van-button",{on:{click:t.onClickAlert2}},[t._v(t._s(t.$t("alert2")))])],1),o("demo-block",{attrs:{title:t.$t("title2")}},[o("van-button",{on:{click:t.onClickConfirm}},[t._v("Confirm")])],1),o("demo-block",{attrs:{title:t.$t("advancedUsage")}},[o("van-button",{on:{click:function(e){t.show=!0}}},[t._v(t._s(t.$t("advancedUsage")))]),o("van-dialog",{attrs:{"show-cancel-button":"","before-close":t.beforeClose},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[o("van-field",{attrs:{label:t.$t("username"),placeholder:t.$t("usernamePlaceholder")},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),o("van-field",{attrs:{type:"password",label:t.$t("password"),placeholder:t.$t("passwordPlaceholder")},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1)],1)},[],!1,null,null,null);e.default=a.exports}}]);