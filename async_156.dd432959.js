(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{231:function(t,e,a){var n=a(295);"string"==typeof n&&(n=[[t.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a(11)(n,o);n.locals&&(t.exports=n.locals)},294:function(t,e,a){"use strict";var n=a(231);a.n(n).a},295:function(t,e,a){(t.exports=a(10)(!1)).push([t.i,"\n.demo-tab {\n  margin-bottom: 300px;\n}\n.demo-tab .van-tab .van-icon {\n    margin-right: 5px;\n    vertical-align: -2px;\n}\n.demo-tab .van-tab__pane {\n    background-color: #fff;\n    padding: 20px;\n}\n.demo-tab .van-tabs--card .van-tab__pane {\n    background-color: transparent;\n}\n.demo-tab .custom-tabwrap .van-tab-active {\n    color: #20a0ff;\n}\n.demo-tab .custom-tabwrap .van-tabs-nav-bar {\n    background: #20a0ff;\n}\n.demo-tab .custom-pane {\n    text-align: center;\n    height: 50px;\n    line-height: 50px;\n}\n.demo-tab .van-doc-demo-block:last-child .van-tab__pane {\n      padding: 50px 20px;\n}\n",""])},490:function(t,e,a){"use strict";a.r(e);var n={i18n:{"zh-CN":{title1:"基础组件",title2:"提供初始值显示班次模式",title3:"完整示例"},"en-US":{title2:"Swipe Tabs",title3:"Disabled Tab",title4:"Card Style",title5:"Click Event",title6:"Sticky",title7:"Custom Tab",title8:"Swipeable",disabled:" is disabled"}},data:function(){return{currentDate1:new Date("2019-2-24 11:00"),currentDate2:new Date("2019-3-03 09:05"),step1:15,eid:1,url:"http://rap2api.taobao.org/app/mock/163270/app/employee/myAttendanceData.htm",dateType1:"hasCalendar",eid1:2,mode1:"shiftMode",url1:"http://rap2api.taobao.org/app/mock/163270/app/employee/myAttendanceData.htm",dateType2:"hasCalendar",scene:"",step2:15,mode2:"showPointMode",url2:"http://rap2api.taobao.org/app/mock/163270/app/employee/myAttendanceData.htm",eid2:3}},methods:{sureCallBack:function(t){console.log(t)},sureCallBack1:function(t){console.log(t)},sureCallBack2:function(t){console.log(t)}}},o=(a(294),a(0)),l=Object(o.a)(n,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("demo-section",[a("demo-block",{attrs:{title:t.$t("title1")}},[a("van-datetime-tab",{attrs:{url:t.url,eid:t.eid},on:{sureCallBack:t.sureCallBack}})],1),a("demo-block",{attrs:{title:t.$t("title2")}},[a("van-datetime-tab",{attrs:{"current-date":t.currentDate1,step:t.step1,url:t.url1,eid:t.eid1,mode:t.mode1,"date-type":t.dateType1},on:{sureCallBack:t.sureCallBack1}})],1),a("demo-block",{attrs:{title:t.$t("title3")}},[a("van-datetime-tab",{attrs:{"current-date":t.currentDate2,step:t.step2,mode:t.mode2,url:t.url2,eid:t.eid2,"date-type":t.dateType2},on:{sureCallBack:t.sureCallBack2}})],1)],1)},[],!1,null,null,null);l.options.__file="index.vue";e.default=l.exports}}]);