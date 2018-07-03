(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{340:function(t,C,E){"use strict";E.r(C);var s={created:function(){this.content=unescape("%3Ch2%3ENavBar%3C/h2%3E%0A%3Ch3%3EInstall%3C/h3%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-javascript%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%7B%20NavBar%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%27vant%27%3C/span%3E%3B%0A%0AVue.use%28NavBar%29%3B%0A%3C/code%3E%3C/pre%3E%0A%3Ch3%3EUsage%3C/h3%3E%0A%3Ch4%3EBasic%20Usage%3C/h4%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-nav-bar%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Etitle%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22Title%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eleft-text%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22Back%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eright-text%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22Button%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eleft-arrow%3C/span%3E%0A%20%20@%3Cspan%20class%3D%22hljs-attr%22%3Eclick-left%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22onClickLeft%22%3C/span%3E%0A%20%20@%3Cspan%20class%3D%22hljs-attr%22%3Eclick-right%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22onClickRight%22%3C/span%3E%0A/%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eexport%3C/span%3E%20%3Cspan%20class%3D%22hljs-keyword%22%3Edefault%3C/span%3E%20%7B%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Emethods%3C/span%3E%3A%20%7B%0A%20%20%20%20onClickLeft%28%29%20%7B%0A%20%20%20%20%20%20Toast%28%3Cspan%20class%3D%22hljs-string%22%3E%27Back%27%3C/span%3E%29%3B%0A%20%20%20%20%7D%2C%0A%20%20%20%20onClickRight%28%29%20%7B%0A%20%20%20%20%20%20Toast%28%3Cspan%20class%3D%22hljs-string%22%3E%27Button%27%3C/span%3E%29%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Ch4%3EAdvanced%20Usage%3C/h4%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-nav-bar%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Etitle%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22Title%22%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Eleft-text%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22Back%22%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Eleft-arrow%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-icon%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Ename%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22search%22%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Eslot%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22right%22%3C/span%3E%20/%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Evan-nav-bar%3C/span%3E%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Ch3%3EAPI%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3EAttribute%3C/th%3E%0A%3Cth%3EDescription%3C/th%3E%0A%3Cth%3EType%3C/th%3E%0A%3Cth%3EDefault%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Etitle%3C/td%3E%0A%3Ctd%3ETitle%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E%27%27%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eleft-text%3C/td%3E%0A%3Ctd%3ELeft%20Text%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E%27%27%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eright-text%3C/td%3E%0A%3Ctd%3ERight%20Text%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E%27%27%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eleft-arrow%3C/td%3E%0A%3Ctd%3EWhether%20to%20show%20left%20arrow%3C/td%3E%0A%3Ctd%3E%3Ccode%3EBoolean%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Efixed%3C/td%3E%0A%3Ctd%3EWhether%20to%20fixed%20top%3C/td%3E%0A%3Ctd%3E%3Ccode%3EBoolean%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Ez-index%3C/td%3E%0A%3Ctd%3EZ-index%3C/td%3E%0A%3Ctd%3E%3Ccode%3ENumber%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E1%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3Ch3%3ESlot%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3Ename%3C/th%3E%0A%3Cth%3EDescription%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Etitle%3C/td%3E%0A%3Ctd%3ECustom%20title%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eleft%3C/td%3E%0A%3Ctd%3ECustom%20left%20side%20content%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eright%3C/td%3E%0A%3Ctd%3ECustom%20right%20side%20content%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3Ch3%3EEvent%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3EEvent%3C/th%3E%0A%3Cth%3EDescription%3C/th%3E%0A%3Cth%3EArguments%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Eclick-left%3C/td%3E%0A%3Ctd%3ETriggered%20when%20click%20left%20button%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eclick-right%3C/td%3E%0A%3Ctd%3ETriggered%20when%20click%20right%20button%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A")}},a=E(0),e=Object(a.a)(s,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement;return(this._self._c||t)("section",{domProps:{innerHTML:this._s(this.content)}})}],!1,null,null,null);C.default=e.exports}}]);