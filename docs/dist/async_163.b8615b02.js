(window.webpackJsonp=window.webpackJsonp||[]).push([[163],{286:function(t,C,E){"use strict";E.r(C);var d={created:function(){this.content=unescape("%3Ch2%3EAddressEdit%3C/h2%3E%0A%3Ch3%3EInstall%3C/h3%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-javascript%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%7B%20AddressEdit%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%27vant%27%3C/span%3E%3B%0A%0AVue.use%28AddressEdit%29%3B%0A%3C/code%3E%3C/pre%3E%0A%3Ch3%3EUsage%3C/h3%3E%0A%3Ch4%3EBasic%20Usage%3C/h4%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-address-edit%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Aarea-list%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22areaList%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eshow-postal%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eshow-delete%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eshow-set-default%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eshow-search-result%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Asearch-result%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22searchResult%22%3C/span%3E%0A%20%20@%3Cspan%20class%3D%22hljs-attr%22%3Esave%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22onSave%22%3C/span%3E%0A%20%20@%3Cspan%20class%3D%22hljs-attr%22%3Edelete%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22onDelete%22%3C/span%3E%0A%20%20@%3Cspan%20class%3D%22hljs-attr%22%3Echange-detail%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22onChangeDetail%22%3C/span%3E%0A/%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-javascript%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eexport%3C/span%3E%20%3Cspan%20class%3D%22hljs-keyword%22%3Edefault%3C/span%3E%20%7B%0A%20%20data%28%29%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C/span%3E%20%7B%0A%20%20%20%20%20%20areaList%2C%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3EsearchResult%3C/span%3E%3A%20%5B%5D%0A%20%20%20%20%7D%0A%20%20%7D%2C%0A%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Emethods%3C/span%3E%3A%20%7B%0A%20%20%20%20onSave%28%29%20%7B%0A%20%20%20%20%20%20Toast%28%3Cspan%20class%3D%22hljs-string%22%3E%27save%27%3C/span%3E%29%3B%0A%20%20%20%20%7D%2C%0A%20%20%20%20onDelete%28%29%20%7B%0A%20%20%20%20%20%20Toast%28%3Cspan%20class%3D%22hljs-string%22%3E%27delete%27%3C/span%3E%29%3B%0A%20%20%20%20%7D%2C%0A%20%20%20%20onChangeDetail%28val%29%20%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Eif%3C/span%3E%20%28val%29%20%7B%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.searchResult%20%3D%20%5B%7B%0A%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ename%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27%u9EC4%u9F99%u4E07%u79D1%u4E2D%u5FC3%27%3C/span%3E%2C%0A%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eaddress%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27%u676D%u5DDE%u5E02%u897F%u6E56%u533A%27%3C/span%3E%0A%20%20%20%20%20%20%20%20%7D%5D%3B%0A%20%20%20%20%20%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Eelse%3C/span%3E%20%7B%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.searchResult%20%3D%20%5B%5D%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Ch3%3EAPI%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3EAttribute%3C/th%3E%0A%3Cth%3EDescription%3C/th%3E%0A%3Cth%3EType%3C/th%3E%0A%3Cth%3EDefault%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Earea-list%3C/td%3E%0A%3Ctd%3EArea%20List%3C/td%3E%0A%3Ctd%3E%3Ccode%3EObject%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eaddress-info%3C/td%3E%0A%3Ctd%3EAddress%20Info%3C/td%3E%0A%3Ctd%3E%3Ccode%3EObject%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E%7B%7D%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Esearch-result%3C/td%3E%0A%3Ctd%3EAddress%20search%20result%3C/td%3E%0A%3Ctd%3E%3Ccode%3EArray%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E%5B%5D%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eshow-postal%3C/td%3E%0A%3Ctd%3EWhether%20to%20show%20postal%20field%3C/td%3E%0A%3Ctd%3E%3Ccode%3EBoolean%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eshow-delete%3C/td%3E%0A%3Ctd%3EWhether%20to%20show%20delete%20button%3C/td%3E%0A%3Ctd%3E%3Ccode%3EBoolean%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eshow-set-default%3C/td%3E%0A%3Ctd%3EWhether%20to%20show%20default%20address%20switch%3C/td%3E%0A%3Ctd%3E%3Ccode%3EBoolean%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eshow-search-result%3C/td%3E%0A%3Ctd%3EWhether%20to%20show%20address%20search%20result%3C/td%3E%0A%3Ctd%3E%3Ccode%3EBoolean%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Esave-button-text%3C/td%3E%0A%3Ctd%3ESave%20button%20text%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3ESave%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Edelete-button-text%3C/td%3E%0A%3Ctd%3EDelete%20button%20text%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3EDelete%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eis-saving%3C/td%3E%0A%3Ctd%3EWhether%20to%20show%20save%20button%20loading%20status%3C/td%3E%0A%3Ctd%3E%3Ccode%3EBoolean%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eis-deleting%3C/td%3E%0A%3Ctd%3EWhether%20to%20show%20delete%20button%20loading%20status%3C/td%3E%0A%3Ctd%3E%3Ccode%3EBoolean%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Etel-validator%3C/td%3E%0A%3Ctd%3EThe%20method%20to%20validate%20tel%3C/td%3E%0A%3Ctd%3E%3Ccode%3E%28tel%3A%20string%29%20%3D%26gt%3B%20boolean%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3Ch3%3EEvent%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3EEvent%3C/th%3E%0A%3Cth%3EDescription%3C/th%3E%0A%3Cth%3EArguments%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Esave%3C/td%3E%0A%3Ctd%3ETriggered%20when%20click%20save%20button%3C/td%3E%0A%3Ctd%3Econtent%uFF1Aform%20content%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Efocus%3C/td%3E%0A%3Ctd%3ETriggered%20when%20focus%20field%3C/td%3E%0A%3Ctd%3Ekey%3A%20field%20name%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Edelete%3C/td%3E%0A%3Ctd%3ETriggered%20when%20confirm%20delete%3C/td%3E%0A%3Ctd%3Econtent%uFF1Aform%20content%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Ecancel-delete%3C/td%3E%0A%3Ctd%3ETriggered%20when%20cancel%20delete%3C/td%3E%0A%3Ctd%3Econtent%uFF1Aform%20content%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eselect-search%3C/td%3E%0A%3Ctd%3ETriggered%20when%20select%20search%20result%3C/td%3E%0A%3Ctd%3Evalue%3A%20search%20content%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Echange-area%3C/td%3E%0A%3Ctd%3ETriggered%20when%20change%20area%3C/td%3E%0A%3Ctd%3Evalues%3A%20area%20values%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Echange-detail%3C/td%3E%0A%3Ctd%3ETriggered%20when%20address%20detail%20changed%3C/td%3E%0A%3Ctd%3Evalue%3A%20address%20detail%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3Ch3%3ESlot%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3EName%3C/th%3E%0A%3Cth%3EDescription%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3E-%3C/td%3E%0A%3Ctd%3ECustom%20content%20below%20postal%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3Ch3%3EData%20Structure%3C/h3%3E%0A%3Ch4%3EaddressInfo%20Data%20Structure%3C/h4%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3Ekey%3C/th%3E%0A%3Cth%3EDescription%3C/th%3E%0A%3Cth%3EType%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Eid%3C/td%3E%0A%3Ctd%3EAddress%20Id%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%20%7C%20Number%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Ename%3C/td%3E%0A%3Ctd%3EName%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Etel%3C/td%3E%0A%3Ctd%3EPhone%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eprovince%3C/td%3E%0A%3Ctd%3EProvince%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Ecity%3C/td%3E%0A%3Ctd%3ECity%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Ecounty%3C/td%3E%0A%3Ctd%3ECounty%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eaddress_detail%3C/td%3E%0A%3Ctd%3EDetailed%20Address%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Earea_code%3C/td%3E%0A%3Ctd%3EArea%20code%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Epostal_code%3C/td%3E%0A%3Ctd%3EPostal%20code%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eis_default%3C/td%3E%0A%3Ctd%3EIs%20default%20address%3C/td%3E%0A%3Ctd%3E%3Ccode%3EBoolean%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3Ch4%3EsearchResult%20Data%20Structure%3C/h4%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3Ekey%3C/th%3E%0A%3Cth%3EDescription%3C/th%3E%0A%3Cth%3EType%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Ename%3C/td%3E%0A%3Ctd%3EName%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eaddress%3C/td%3E%0A%3Ctd%3EAddress%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3Ch4%3EArea%20Data%20Structure%3C/h4%3E%0A%3Cp%3EPlease%20refer%20to%20%3Ca%20href%3D%22%23/en-US/area%22%3EArea%3C/a%3E%20component%u3002%3C/p%3E%0A")}},e=E(0),s=Object(e.a)(d,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement;return(this._self._c||t)("section",{domProps:{innerHTML:this._s(this.content)}})}],!1,null,null,null);C.default=s.exports}}]);