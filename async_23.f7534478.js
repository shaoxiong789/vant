(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{429:function(t,n,e){"use strict";e.r(n);var o=e(4),a=e.n(o),l={i18n:{"zh-CN":{area:"标题",title2:"禁用选项",title3:"展示顶部栏",title4:"多列联动",column1:["杭州","宁波","温州","嘉兴","湖州"],column2:[{text:"杭州",disabled:!0},{text:"宁波"},{text:"温州"}],column3:{"浙江":["杭州","宁波","温州","嘉兴","湖州"],"福建":["福州","厦门","莆田","三明","泉州"]},toastContent:function(t,n){return"当前值："+t+", 当前索引："+n}},"en-US":{area:"Title",title2:"Disable Option",title3:"Show Toolbar",title4:"Multi Columns",column1:["Delaware","Florida","Georqia","Indiana","Maine"],column2:[{text:"Delaware",disabled:!0},{text:"Florida"},{text:"Georqia"}],column3:{Group1:["Delaware","Florida","Georqia","Indiana","Maine"],Group2:["Alabama","Kansas","Louisiana","Texas"]},toastContent:function(t,n){return"Value: "+t+", Index："+n}}},computed:{columns:function(){var t=this.$t("column3");return[{values:a()(t),className:"column1"},{values:t[a()(t)[0]],className:"column2",defaultIndex:2}]}},methods:{onChange1:function(t,n,e){this.$toast(this.$t("toastContent",n,e))},onChange2:function(t,n){t.setColumnValues(1,this.$t("column3")[n[0]])},onConfirm:function(t,n){this.$toast(this.$t("toastContent",t,n))},onCancel:function(){this.$toast(this.$t("cancel"))}}},i=e(0),s=Object(i.a)(l,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("demo-section",[e("demo-block",{attrs:{title:t.$t("basicUsage")}},[e("van-picker",{attrs:{columns:t.$t("column1")},on:{change:t.onChange1}})],1),e("demo-block",{attrs:{title:t.$t("title2")}},[e("van-picker",{attrs:{columns:t.$t("column2")}})],1),e("demo-block",{attrs:{title:t.$t("title3")}},[e("van-picker",{attrs:{"show-toolbar":"",title:t.$t("area"),columns:t.$t("column1")},on:{cancel:t.onCancel,confirm:t.onConfirm}})],1),e("demo-block",{attrs:{title:t.$t("title4")}},[e("van-picker",{attrs:{columns:t.columns},on:{change:t.onChange2}})],1),e("demo-block",{attrs:{title:t.$t("loading")}},[e("van-picker",{attrs:{columns:t.columns,loading:""}})],1)],1)},[],!1,null,null,null);n.default=s.exports}}]);