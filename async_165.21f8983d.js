(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{289:function(t,s,C){"use strict";C.r(s);var E={created:function(){this.content=unescape("%3Ch2%3EActionsheet%3C/h2%3E%0A%3Ch3%3EInstall%3C/h3%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-javascript%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%7B%20Actionsheet%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%27vant%27%3C/span%3E%3B%0A%0AVue.use%28Actionsheet%29%3B%0A%3C/code%3E%3C/pre%3E%0A%3Ch3%3EUsage%3C/h3%3E%0A%3Ch4%3EBasic%20Usage%3C/h4%3E%0A%3Cp%3EUse%20%3Ccode%3Eactions%3C/code%3E%20prop%20to%20set%20options%20of%20actionsheet.%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-actionsheet%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22show%22%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Aactions%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22actions%22%3C/span%3E%20/%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-javascript%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eexport%3C/span%3E%20%3Cspan%20class%3D%22hljs-keyword%22%3Edefault%3C/span%3E%20%7B%0A%20%20data%28%29%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C/span%3E%20%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eshow%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-literal%22%3Efalse%3C/span%3E%2C%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eactions%3C/span%3E%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ename%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27Option%27%3C/span%3E%2C%0A%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ecallback%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.onClick%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ename%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27Option%27%3C/span%3E%2C%0A%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Edescription%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27Description%27%3C/span%3E%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ename%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27Option%27%3C/span%3E%2C%0A%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eloading%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-literal%22%3Etrue%3C/span%3E%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ename%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27Disabled%20Option%27%3C/span%3E%2C%0A%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Edisabled%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-literal%22%3Etrue%3C/span%3E%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%5D%0A%20%20%20%20%7D%3B%0A%20%20%7D%2C%0A%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Emethods%3C/span%3E%3A%20%7B%0A%20%20%20%20onClick%28item%29%20%7B%0A%20%20%20%20%20%20Toast%28item.name%29%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Ch4%3EActionsheet%20with%20cancel%20button%3C/h4%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-actionsheet%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22show%22%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Aactions%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22actions%22%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Ecancel-text%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22Cancel%22%3C/span%3E%20/%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Ch4%3EActionsheet%20with%20title%3C/h4%3E%0A%3Cp%3EActionsheet%20will%20get%20another%20style%20if%20there%20is%20a%20%3Ccode%3Etitle%3C/code%3E%20prop.%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-actionsheet%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22show%22%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Etitle%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22Title%22%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Ep%3C/span%3E%26gt%3B%3C/span%3EContent%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Ep%3C/span%3E%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Evan-actionsheet%3C/span%3E%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Ch3%3EAPI%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3EAttribute%3C/th%3E%0A%3Cth%3EDescription%3C/th%3E%0A%3Cth%3EType%3C/th%3E%0A%3Cth%3EDefault%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Eactions%3C/td%3E%0A%3Ctd%3EOptions%3C/td%3E%0A%3Ctd%3E%3Ccode%3EArray%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E%5B%5D%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Etitle%3C/td%3E%0A%3Ctd%3ETitle%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Ecancel-text%3C/td%3E%0A%3Ctd%3EText%20of%20cancel%20button%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eoverlay%3C/td%3E%0A%3Ctd%3EWhether%20to%20show%20overlay%3C/td%3E%0A%3Ctd%3E%3Ccode%3EBoolean%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eclose-on-click-overlay%3C/td%3E%0A%3Ctd%3EWhether%20to%20close%20when%20click%20overlay%3C/td%3E%0A%3Ctd%3E%3Ccode%3EBoolean%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Elazy-render%3C/td%3E%0A%3Ctd%3EWhether%20to%20lazy%20render%20util%20appeared%3C/td%3E%0A%3Ctd%3E%3Ccode%3EBoolean%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Etrue%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eget-container%3C/td%3E%0A%3Ctd%3EReturn%20the%20mount%20node%20for%20actionsheet%3C/td%3E%0A%3Ctd%3E%3Ccode%3E%28%29%20%3D%26gt%3B%20HTMLElement%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3Ch3%3EEvent%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3EEvent%3C/th%3E%0A%3Cth%3EDescription%3C/th%3E%0A%3Cth%3EArguments%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Ecancel%3C/td%3E%0A%3Ctd%3ETriggered%20when%20cancel%20click%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3Ch3%3EData%20struct%20of%20actions%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3Ekey%3C/th%3E%0A%3Cth%3EDescription%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Ename%3C/td%3E%0A%3Ctd%3ETitle%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Esubname%3C/td%3E%0A%3Ctd%3ESubtitle%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3EclassName%3C/td%3E%0A%3Ctd%3EclassName%20for%20the%20option%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eloading%3C/td%3E%0A%3Ctd%3EWhether%20to%20be%20loading%20status%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Edisabled%3C/td%3E%0A%3Ctd%3EWhether%20to%20be%20disabled%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Ecallback%3C/td%3E%0A%3Ctd%3ETriggered%20when%20click%20option%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A")}},a=C(0),n=Object(a.a)(E,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement;return(this._self._c||t)("section",{domProps:{innerHTML:this._s(this.content)}})}],!1,null,null,null);s.default=n.exports}}]);