(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{338:function(s,t,C){"use strict";C.r(t);var E={created:function(){this.content=unescape("%3Ch2%3ELazyload%3C/h2%3E%0A%3Ch3%3EInstall%3C/h3%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20Vue%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%27vue%27%3C/span%3E%3B%0A%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%7B%20Lazyload%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%27vant%27%3C/span%3E%3B%0A%0AVue.use%28Lazyload%2C%20options%29%3B%0A%3C/code%3E%3C/pre%3E%0A%3Ch3%3EUsage%3C/h3%3E%0A%3Ch4%3EBasic%20Usage%3C/h4%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Eimg%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-for%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22img%20in%20imageList%22%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-lazy%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22img%22%3C/span%3E%20%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-javascript%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eexport%3C/span%3E%20%3Cspan%20class%3D%22hljs-keyword%22%3Edefault%3C/span%3E%20%7B%0A%20%20data%28%29%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C/span%3E%20%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3EimageList%3C/span%3E%3A%20%5B%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-string%22%3E%27https%3A//img.yzcdn.cn/1.jpg%27%3C/span%3E%2C%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-string%22%3E%27https%3A//img.yzcdn.cn/2.jpg%27%3C/span%3E%0A%20%20%20%20%20%20%5D%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Ch4%3ELazyload%20Background%20Image%3C/h4%3E%0A%3Cp%3EUse%20%3Ccode%3Ev-lazy%3Abackground-image%3C/code%3E%20to%20set%20background%20url%2C%20and%20declare%20the%20height%20of%20the%20container.%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Ediv%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-for%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22img%20in%20imageList%22%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-lazy%3Abackground-image%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22img%22%3C/span%3E%20/%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Ch4%3ELazyload%20Component%3C/h4%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Elazy-component%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Eimg%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-for%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22img%20in%20imageList%22%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-lazy%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22img%22%3C/span%3E%20%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Elazy-component%3C/span%3E%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Ch3%3EOptions%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3EAttribute%3C/th%3E%0A%3Cth%3EDescription%3C/th%3E%0A%3Cth%3EType%3C/th%3E%0A%3Cth%3EDefault%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Eloading%3C/td%3E%0A%3Ctd%3ESrc%20of%20the%20image%20while%20loading%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eerror%3C/td%3E%0A%3Ctd%3ESrc%20of%20the%20image%20upon%20load%20fail%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Epreload%3C/td%3E%0A%3Ctd%3EProportion%20of%20pre-loading%20height%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eattempt%3C/td%3E%0A%3Ctd%3EAttempts%20count%3C/td%3E%0A%3Ctd%3E%3Ccode%3ENumber%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E3%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3ElistenEvents%3C/td%3E%0A%3Ctd%3EEvents%20that%20you%20want%20vue%20listen%20for%3C/td%3E%0A%3Ctd%3E%3Ccode%3EArray%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Escroll%3C/code%3E...%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eadapter%3C/td%3E%0A%3Ctd%3EDynamically%20modify%20the%20attribute%20of%20element%3C/td%3E%0A%3Ctd%3E%3Ccode%3EObject%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Efilter%3C/td%3E%0A%3Ctd%3EThe%20image%27s%20listener%20filter%3C/td%3E%0A%3Ctd%3E%3Ccode%3EObject%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3ElazyComponent%3C/td%3E%0A%3Ctd%3ELazyload%20component%3C/td%3E%0A%3Ctd%3E%3Ccode%3EBoolean%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3Cp%3ESee%20more%uFF1A%3Ca%20href%3D%22https%3A//github.com/hilongjw/vue-lazyload%22%3E%20vue-lazyload%20%3C/a%3E%3C/p%3E%0A")}},a=C(0),n=Object(a.a)(E,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this.$createElement;return(this._self._c||s)("section",{domProps:{innerHTML:this._s(this.content)}})}],!1,null,null,null);n.options.__file="en-US.md";t.default=n.exports}}]);