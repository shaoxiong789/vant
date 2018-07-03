(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{334:function(s,t,a){"use strict";a.r(t);var C={created:function(){this.content=unescape("%3Ch2%3EList%3C/h2%3E%0A%3Cp%3EA%20list%20component%20to%20show%20items%20and%20control%20loading%20status.%3C/p%3E%0A%3Ch3%3EInstall%3C/h3%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-javascript%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%7B%20List%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%27vant%27%3C/span%3E%3B%0A%0AVue.use%28List%29%3B%0A%3C/code%3E%3C/pre%3E%0A%3Ch3%3EUsage%3C/h3%3E%0A%3Ch4%3EBasic%20Usage%3C/h4%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-list%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22loading%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Afinished%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22finished%22%3C/span%3E%0A%20%20@%3Cspan%20class%3D%22hljs-attr%22%3Eload%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22onLoad%22%3C/span%3E%0A%26gt%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-cell%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-for%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22item%20in%20list%22%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Akey%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22item%22%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Atitle%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22item%20+%20%27%27%22%3C/span%3E%20/%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Evan-list%3C/span%3E%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eexport%3C/span%3E%20%3Cspan%20class%3D%22hljs-keyword%22%3Edefault%3C/span%3E%20%7B%0A%20%20data%28%29%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C/span%3E%20%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Elist%3C/span%3E%3A%20%5B%5D%2C%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eloading%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-literal%22%3Efalse%3C/span%3E%2C%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Efinished%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-literal%22%3Efalse%3C/span%3E%0A%20%20%20%20%7D%3B%0A%20%20%7D%2C%0A%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Emethods%3C/span%3E%3A%20%7B%0A%20%20%20%20onLoad%28%29%20%7B%0A%20%20%20%20%20%20setTimeout%28%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-params%22%3E%28%29%3C/span%3E%20%3D%26gt%3B%3C/span%3E%20%7B%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Efor%3C/span%3E%20%28%3Cspan%20class%3D%22hljs-keyword%22%3Elet%3C/span%3E%20i%20%3D%20%3Cspan%20class%3D%22hljs-number%22%3E0%3C/span%3E%3B%20i%20%26lt%3B%20%3Cspan%20class%3D%22hljs-number%22%3E10%3C/span%3E%3B%20i++%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.list.push%28%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.list.length%20+%20%3Cspan%20class%3D%22hljs-number%22%3E1%3C/span%3E%29%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.loading%20%3D%20%3Cspan%20class%3D%22hljs-literal%22%3Efalse%3C/span%3E%3B%0A%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Eif%3C/span%3E%20%28%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.list.length%20%26gt%3B%3D%20%3Cspan%20class%3D%22hljs-number%22%3E40%3C/span%3E%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.finished%20%3D%20%3Cspan%20class%3D%22hljs-literal%22%3Etrue%3C/span%3E%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%2C%20%3Cspan%20class%3D%22hljs-number%22%3E500%3C/span%3E%29%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Ch3%3EAPI%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3EAttribute%3C/th%3E%0A%3Cth%3EDescription%3C/th%3E%0A%3Cth%3EType%3C/th%3E%0A%3Cth%3EDefault%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Eloading%3C/td%3E%0A%3Ctd%3EWhether%20to%20show%20loading%20info%uFF0Cthe%20%3Ccode%3Eload%3C/code%3E%20event%20will%20not%20be%20triggered%20when%20loading%3C/td%3E%0A%3Ctd%3E%3Ccode%3EBoolean%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Efinished%3C/td%3E%0A%3Ctd%3EWhether%20loading%20is%20finished%uFF0Cthe%20%3Ccode%3Eload%3C/code%3E%20event%20will%20not%20be%20triggered%20when%20finished%3C/td%3E%0A%3Ctd%3E%3Ccode%3EBoolean%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eoffset%3C/td%3E%0A%3Ctd%3EThe%20load%20event%20will%20be%20triggered%20when%20the%20distance%20between%20the%20scrollbar%20and%20the%20bottom%20is%20less%20than%20offset%3C/td%3E%0A%3Ctd%3E%3Ccode%3ENumber%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E300%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eloading-text%3C/td%3E%0A%3Ctd%3ELoading%20text%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3ELoading...%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eimmediate-check%3C/td%3E%0A%3Ctd%3EWhether%20to%20check%20loading%20position%20immediately%20after%20mounted%3C/td%3E%0A%3Ctd%3E%3Ccode%3EBoolean%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Etrue%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3Ch3%3EEvent%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3EEvent%3C/th%3E%0A%3Cth%3EDescription%3C/th%3E%0A%3Cth%3EArguments%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Eload%3C/td%3E%0A%3Ctd%3ETriggered%20when%20the%20distance%20between%20the%20scrollbar%20and%20the%20bottom%20is%20less%20than%20offset%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A")}},E=a(0),e=Object(E.a)(C,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this.$createElement;return(this._self._c||s)("section",{domProps:{innerHTML:this._s(this.content)}})}],!1,null,null,null);t.default=e.exports}}]);