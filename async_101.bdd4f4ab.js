(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{352:function(s,C,t){"use strict";t.r(C);var E={created:function(){this.content=unescape("%3Ch2%3EPicker%3C/h2%3E%0A%3Cp%3EThe%20Picker%20component%20is%20usually%20used%20with%20%3Ca%20href%3D%22%23/en-US/popup%22%3EPopup%3C/a%3E%20Component.%3C/p%3E%0A%3Ch3%3EInstall%3C/h3%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-javascript%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%7B%20Picker%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%27vant%27%3C/span%3E%3B%0A%0AVue.use%28Picker%29%3B%0A%3C/code%3E%3C/pre%3E%0A%3Ch3%3EUsage%3C/h3%3E%0A%3Ch4%3EBasic%20Usage%3C/h4%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-picker%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Acolumns%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22columns%22%3C/span%3E%20@%3Cspan%20class%3D%22hljs-attr%22%3Echange%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22onChange%22%3C/span%3E%20/%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-javascript%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eexport%3C/span%3E%20%3Cspan%20class%3D%22hljs-keyword%22%3Edefault%3C/span%3E%20%7B%0A%20%20data%28%29%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C/span%3E%20%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ecolumns%3C/span%3E%3A%20%5B%3Cspan%20class%3D%22hljs-string%22%3E%27Delaware%27%3C/span%3E%2C%20%3Cspan%20class%3D%22hljs-string%22%3E%27Florida%27%3C/span%3E%2C%20%3Cspan%20class%3D%22hljs-string%22%3E%27Georqia%27%3C/span%3E%2C%20%3Cspan%20class%3D%22hljs-string%22%3E%27Indiana%27%3C/span%3E%2C%20%3Cspan%20class%3D%22hljs-string%22%3E%27Maine%27%3C/span%3E%5D%0A%20%20%20%20%7D%3B%0A%20%20%7D%2C%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Emethods%3C/span%3E%3A%20%7B%0A%20%20%20%20onChange%28picker%2C%20value%2C%20index%29%20%7B%0A%20%20%20%20%20%20Toast%28%3Cspan%20class%3D%22hljs-string%22%3E%60Value%3A%20%3Cspan%20class%3D%22hljs-subst%22%3E%24%7Bvalue%7D%3C/span%3E%2C%20Index%3A%20%3Cspan%20class%3D%22hljs-subst%22%3E%24%7Bindex%7D%3C/span%3E%60%3C/span%3E%29%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%3B%0A%3C/code%3E%3C/pre%3E%0A%3Ch4%3EDisable%20option%3C/h4%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-picker%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Acolumns%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22columns%22%3C/span%3E%20/%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-javascript%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eexport%3C/span%3E%20%3Cspan%20class%3D%22hljs-keyword%22%3Edefault%3C/span%3E%20%7B%0A%20%20data%28%29%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C/span%3E%20%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ecolumns%3C/span%3E%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%20%3Cspan%20class%3D%22hljs-attr%22%3Etext%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27Delaware%27%3C/span%3E%2C%20%3Cspan%20class%3D%22hljs-attr%22%3Edisabled%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-literal%22%3Etrue%3C/span%3E%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%20%3Cspan%20class%3D%22hljs-attr%22%3Etext%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27Florida%27%3C/span%3E%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%20%3Cspan%20class%3D%22hljs-attr%22%3Etext%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27Georqia%27%3C/span%3E%20%7D%0A%20%20%20%20%20%20%5D%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D%3B%0A%3C/code%3E%3C/pre%3E%0A%3Ch4%3EShow%20Toolbar%3C/h4%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-picker%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eshow-toolbar%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Etitle%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22Title%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Acolumns%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22columns%22%3C/span%3E%0A%20%20@%3Cspan%20class%3D%22hljs-attr%22%3Ecancel%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22onCancel%22%3C/span%3E%0A%20%20@%3Cspan%20class%3D%22hljs-attr%22%3Econfirm%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22onConfirm%22%3C/span%3E%0A/%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-javascript%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eexport%3C/span%3E%20%3Cspan%20class%3D%22hljs-keyword%22%3Edefault%3C/span%3E%20%7B%0A%20%20data%28%29%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C/span%3E%20%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ecolumns%3C/span%3E%3A%20%5B%3Cspan%20class%3D%22hljs-string%22%3E%27Delaware%27%3C/span%3E%2C%20%3Cspan%20class%3D%22hljs-string%22%3E%27Florida%27%3C/span%3E%2C%20%3Cspan%20class%3D%22hljs-string%22%3E%27Georqia%27%3C/span%3E%2C%20%3Cspan%20class%3D%22hljs-string%22%3E%27Indiana%27%3C/span%3E%2C%20%3Cspan%20class%3D%22hljs-string%22%3E%27Maine%27%3C/span%3E%5D%0A%20%20%20%20%7D%0A%20%20%7D%2C%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Emethods%3C/span%3E%3A%20%7B%0A%20%20%20%20onConfirm%28value%2C%20index%29%20%7B%0A%20%20%20%20%20%20Toast%28%3Cspan%20class%3D%22hljs-string%22%3E%60Value%3A%20%3Cspan%20class%3D%22hljs-subst%22%3E%24%7Bvalue%7D%3C/span%3E%2C%20Index%3A%20%3Cspan%20class%3D%22hljs-subst%22%3E%24%7Bindex%7D%3C/span%3E%60%3C/span%3E%29%3B%0A%20%20%20%20%7D%2C%0A%20%20%20%20onCancel%28%29%20%7B%0A%20%20%20%20%20%20Toast%28%3Cspan%20class%3D%22hljs-string%22%3E%27Cancel%27%3C/span%3E%29%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%3B%0A%3C/code%3E%3C/pre%3E%0A%3Ch4%3EMulti%20columns%3C/h4%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-picker%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Acolumns%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22columns%22%3C/span%3E%20@%3Cspan%20class%3D%22hljs-attr%22%3Echange%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22onChange%22%3C/span%3E%20/%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-javascript%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20states%20%3D%20%7B%0A%20%20%3Cspan%20class%3D%22hljs-string%22%3E%27Group1%27%3C/span%3E%3A%20%5B%3Cspan%20class%3D%22hljs-string%22%3E%27Delaware%27%3C/span%3E%2C%20%3Cspan%20class%3D%22hljs-string%22%3E%27Florida%27%3C/span%3E%2C%20%3Cspan%20class%3D%22hljs-string%22%3E%27Georqia%27%3C/span%3E%2C%20%3Cspan%20class%3D%22hljs-string%22%3E%27Indiana%27%3C/span%3E%2C%20%3Cspan%20class%3D%22hljs-string%22%3E%27Maine%27%3C/span%3E%5D%2C%0A%20%20%3Cspan%20class%3D%22hljs-string%22%3E%27Group2%27%3C/span%3E%3A%20%5B%3Cspan%20class%3D%22hljs-string%22%3E%27Alabama%27%3C/span%3E%2C%20%3Cspan%20class%3D%22hljs-string%22%3E%27Kansas%27%3C/span%3E%2C%20%3Cspan%20class%3D%22hljs-string%22%3E%27Louisiana%27%3C/span%3E%2C%20%3Cspan%20class%3D%22hljs-string%22%3E%27Texas%27%3C/span%3E%5D%0A%7D%3B%0A%0A%3Cspan%20class%3D%22hljs-keyword%22%3Eexport%3C/span%3E%20%3Cspan%20class%3D%22hljs-keyword%22%3Edefault%3C/span%3E%20%7B%0A%20%20data%28%29%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C/span%3E%20%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ecolumns%3C/span%3E%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Evalues%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-built_in%22%3EObject%3C/span%3E.keys%28states%29%2C%0A%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3EclassName%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27column1%27%3C/span%3E%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Evalues%3C/span%3E%3A%20states.Group1%2C%0A%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3EclassName%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27column2%27%3C/span%3E%2C%0A%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3EdefaultIndex%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E2%3C/span%3E%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%5D%0A%20%20%20%20%7D%3B%0A%20%20%7D%2C%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Emethods%3C/span%3E%3A%20%7B%0A%20%20%20%20onChange%28picker%2C%20values%29%20%7B%0A%20%20%20%20%20%20picker.setColumnValues%28%3Cspan%20class%3D%22hljs-number%22%3E1%3C/span%3E%2C%20states%5Bvalues%5B%3Cspan%20class%3D%22hljs-number%22%3E0%3C/span%3E%5D%5D%29%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%3B%0A%3C/code%3E%3C/pre%3E%0A%3Ch4%3ELoading%3C/h4%3E%0A%3Cp%3EWhen%20Picker%20columns%20data%20is%20acquired%20asynchronously%2C%20use%20%3Ccode%3Eloading%3C/code%3E%20prop%20to%20show%20loading%20prompt%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-picker%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Acolumns%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22columns%22%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Eloading%3C/span%3E%20/%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Ch3%3EAPI%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3EAttribute%3C/th%3E%0A%3Cth%3EDescription%3C/th%3E%0A%3Cth%3EType%3C/th%3E%0A%3Cth%3EDefault%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Ecolumns%3C/td%3E%0A%3Ctd%3EColumns%20data%3C/td%3E%0A%3Ctd%3E%3Ccode%3EArray%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E%5B%5D%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eshow-toolbar%3C/td%3E%0A%3Ctd%3EWhether%20to%20show%20toolbar%3C/td%3E%0A%3Ctd%3E%3Ccode%3EBoolean%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Etitle%3C/td%3E%0A%3Ctd%3EToolbar%20title%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E%27%27%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eloading%3C/td%3E%0A%3Ctd%3EWhether%20to%20show%20loading%20prompt%3C/td%3E%0A%3Ctd%3E%3Ccode%3EBoolean%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Evalue-key%3C/td%3E%0A%3Ctd%3EKey%20of%20option%20text%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Etext%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eitem-height%3C/td%3E%0A%3Ctd%3EOption%20height%3C/td%3E%0A%3Ctd%3E%3Ccode%3ENumber%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E44%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Econfirm-button-text%3C/td%3E%0A%3Ctd%3EText%20of%20confirm%20button%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3EConfirm%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Ecancel-button-text%3C/td%3E%0A%3Ctd%3EText%20of%20cancel%20button%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3ECancel%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Evisible-item-count%3C/td%3E%0A%3Ctd%3ECount%20of%20visible%20columns%3C/td%3E%0A%3Ctd%3E%3Ccode%3ENumber%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E5%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3Ch3%3EEvent%3C/h3%3E%0A%3Cp%3EPicker%20events%20will%20pass%20different%20parameters%20according%20to%20the%20columns%20are%20single%20or%20multiple%3C/p%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3EEvent%3C/th%3E%0A%3Cth%3EDescription%3C/th%3E%0A%3Cth%3EArguments%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Econfirm%3C/td%3E%0A%3Ctd%3ETriggered%20when%20click%20confirm%20button%3C/td%3E%0A%3Ctd%3ESingle%20column%uFF1Acurrent%20value%uFF0Ccurrent%20index%3Cbr%3EMultiple%20columns%uFF1Acurrent%20values%uFF0Ccurrent%20indexes%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Ecancel%3C/td%3E%0A%3Ctd%3ETriggered%20when%20click%20cancel%20button%3C/td%3E%0A%3Ctd%3ESingle%20column%uFF1Acurrent%20value%uFF0Ccurrent%20index%3Cbr%3EMultiple%20columns%uFF1Acurrent%20values%uFF0Ccurrent%20indexes%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Echange%3C/td%3E%0A%3Ctd%3ETriggered%20when%20current%20option%20changed%3C/td%3E%0A%3Ctd%3ESingle%20column%uFF1APicker%20instance%2C%20current%20value%uFF0Ccurrent%20index%3Cbr%3EMultiple%20columns%uFF1APicker%20instance%2C%20current%20values%uFF0Ccolumn%20index%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3Ch3%3EData%20struct%20of%20columns%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3Ekey%3C/th%3E%0A%3Cth%3EDescription%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Evalues%3C/td%3E%0A%3Ctd%3EValue%20of%20column%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3EdefaultIndex%3C/td%3E%0A%3Ctd%3EDefault%20value%20index%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3EclassName%3C/td%3E%0A%3Ctd%3EClassName%20for%20this%20column%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3Ch3%3EMethods%3C/h3%3E%0A%3Cp%3EUse%20ref%20to%20get%20picker%20instance%20and%20call%20instance%20methods%3C/p%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3EName%3C/th%3E%0A%3Cth%3EAttribute%3C/th%3E%0A%3Cth%3EReturn%20value%3C/th%3E%0A%3Cth%3EDescription%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3EgetValues%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3Ctd%3Evalues%3C/td%3E%0A%3Ctd%3EGet%20current%20values%20of%20all%20columns%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3EsetValues%3C/td%3E%0A%3Ctd%3Evalues%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3Ctd%3ESet%20current%20values%20of%20all%20columns%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3EgetIndexes%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3Ctd%3Eindexes%3C/td%3E%0A%3Ctd%3EGet%20current%20indexes%20of%20all%20columns%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3EsetIndexes%3C/td%3E%0A%3Ctd%3Eindexes%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3Ctd%3ESet%20current%20indexes%20of%20all%20columns%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3EgetColumnValue%3C/td%3E%0A%3Ctd%3EcolumnIndex%3C/td%3E%0A%3Ctd%3Evalue%3C/td%3E%0A%3Ctd%3EGet%20current%20value%20of%20the%20column%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3EsetColumnValue%3C/td%3E%0A%3Ctd%3EcolumnIndex%2C%20value%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3Ctd%3ESet%20current%20value%20of%20the%20column%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3EgetColumnIndex%3C/td%3E%0A%3Ctd%3EcolumnIndex%3C/td%3E%0A%3Ctd%3EoptionIndex%3C/td%3E%0A%3Ctd%3EGet%20current%20index%20of%20the%20column%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3EsetColumnIndex%3C/td%3E%0A%3Ctd%3EcolumnIndex%2C%20optionIndex%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3Ctd%3ESet%20current%20index%20of%20the%20column%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3EgetColumnValues%3C/td%3E%0A%3Ctd%3EcolumnIndex%3C/td%3E%0A%3Ctd%3Evalues%3C/td%3E%0A%3Ctd%3EGet%20columns%20data%20of%20the%20column%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3EsetColumnValue%3C/td%3E%0A%3Ctd%3EcolumnIndex%2C%20values%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3Ctd%3ESet%20columns%20data%20of%20the%20column%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A")}},a=t(0),n=Object(a.a)(E,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this.$createElement;return(this._self._c||s)("section",{domProps:{innerHTML:this._s(this.content)}})}],!1,null,null,null);C.default=n.exports}}]);