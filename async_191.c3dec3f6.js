(window.webpackJsonp=window.webpackJsonp||[]).push([[191],{385:function(t,e,n){"use strict";n.r(e);var o={i18n:{"zh-CN":{title1:"选择完整时间",title2:"选择日期（年月日）",title3:"选择日期（年月）",title4:"选择时间",year:"年",month:"月"},"en-US":{title1:"Choose DateTime",title2:"Choose Date",title3:"Choose Year-Month",title4:"Choose Time",year:" Year",month:" Month"}},data:function(){return{minHour:0,maxHour:23,minMinute:0,maxMinute:59,step:5,currentDate4:"12:00"}},mounted:function(){console.log(typeof this.currentDate4)}},i=n(0),r=Object(i.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("demo-section",[n("demo-block",{attrs:{title:t.$t("title4")}},[t._v("\n    "+t._s(t.currentDate4)+"\n    "),n("van-time-picker",{attrs:{type:"time","min-hour":t.minHour,"max-hour":t.maxHour,step:t.step},model:{value:t.currentDate4,callback:function(e){t.currentDate4=e},expression:"currentDate4"}})],1)],1)},[],!1,null,null,null);r.options.__file="index.vue";e.default=r.exports}}]);