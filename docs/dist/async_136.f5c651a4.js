(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{111:function(t,e,n){"use strict";var r=n(53);n.n(r).a},112:function(t,e,n){(t.exports=n(10)(!1)).push([t.i,"\n.demo-circle .van-circle {\n    margin-left: 15px;\n}\n.demo-circle .van-button {\n    margin: 15px 0 0 10px\n}\n.demo-circle .van-button:first-of-type {\n    margin-left: 15px;\n}\n",""])},250:function(t,e,n){"use strict";n.r(e);var r=function(t){return Math.min(Math.max(t,0),100)},a={i18n:{"zh-CN":{title2:"样式定制"},"en-US":{title2:"Custom Style"}},data:function(){return{rate:30,currentRate1:0,currentRate2:0}},methods:{add:function(){this.rate=r(this.rate+20)},reduce:function(){this.rate=r(this.rate-20)}}},c=(n(111),n(0)),i=Object(c.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("demo-section",[n("demo-block",{attrs:{title:t.$t("basicUsage")}},[n("van-circle",{attrs:{rate:t.rate,speed:100,size:"120px",text:t.currentRate1.toFixed(0)+"%"},model:{value:t.currentRate1,callback:function(e){t.currentRate1=e},expression:"currentRate1"}}),n("van-circle",{attrs:{color:"#13ce66",fill:"#fff",rate:t.rate,size:"120px","layer-color":"#eee",speed:100,"stroke-width":60,clockwise:!1,text:t.currentRate2.toFixed(0)+"%"},model:{value:t.currentRate2,callback:function(e){t.currentRate2=e},expression:"currentRate2"}}),n("div",[n("van-button",{attrs:{text:t.$t("add"),type:"primary",size:"small"},on:{click:t.add}}),n("van-button",{attrs:{text:t.$t("decrease"),type:"danger",size:"small"},on:{click:t.reduce}})],1)],1)],1)},[],!1,null,null,null);i.options.__file="index.vue";e.default=i.exports},53:function(t,e,n){var r=n(112);"string"==typeof r&&(r=[[t.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(11)(r,a);r.locals&&(t.exports=r.locals)}}]);