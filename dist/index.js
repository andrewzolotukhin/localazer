/*!
 * banner:
 * localazer: 0.9.9
 * Aleksandrov Sergey <gooddev.sergey@gmail.com> (https://github.com/AlexSergey/localazer)
 * This module can help you organize localization in your application
 * MIT
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("react")):"function"==typeof define&&define.amd?define(["react"],e):"object"==typeof exports?exports.localazer=e(require("react")):t.localazer=e(t.React)}(this,function(t){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=53)}([function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){var r=n(8),i=n(19);t.exports=n(3)?function(t,e,n){return r.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(5)("wks"),i=n(7),o=n(0).Symbol,s="function"==typeof o;(t.exports=function(t){return r[t]||(r[t]=s&&o[t]||(s?o:i)("Symbol."+t))}).store=r},function(t,e,n){t.exports=!n(17)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(6),i=n(0),o=i["__core-js_shared__"]||(i["__core-js_shared__"]={});(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n(16)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,e){var n=t.exports={version:"2.6.9"};"number"==typeof __e&&(__e=n)},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e,n){var r=n(9),i=n(31),o=n(32),s=Object.defineProperty;e.f=n(3)?Object.defineProperty:function(t,e,n){if(r(t),e=o(e,!0),r(n),i)try{return s(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(10);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){t.exports={}},function(t,e,n){var r=n(34),i=n(20);t.exports=function(t){return r(i(t))}},function(t,e,n){var r=n(0),i=n(1),o=n(4),s=n(7)("src"),u=n(38),a=(""+u).split("toString");n(6).inspectSource=function(t){return u.call(t)},(t.exports=function(t,e,n,u){var c="function"==typeof n;c&&(o(n,"name")||i(n,"name",e)),t[e]!==n&&(c&&(o(n,s)||i(n,s,t[e]?""+t[e]:a.join(String(e)))),t===r?t[e]=n:u?t[e]?t[e]=n:i(t,e,n):(delete t[e],i(t,e,n)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[s]||u.call(this)})},function(t,e,n){var r=n(5)("keys"),i=n(7);t.exports=function(t){return r[t]||(r[t]=i(t))}},function(t,e,n){
/*!
 * banner:
 * valid-types: 1.0.2
 * A small JS type checker
 * ISC
 */
t.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=0)}([function(t,e){const n=t=>{let e=typeof t;return"object"==typeof t?null===t?e="null":"undefined"!=typeof window&&t instanceof HTMLElement||"[object HTMLDocument]"===t.toString()?e="[object HTMLDocument]"===t.toString()?"document":"dom":Array.isArray(t)?e="array":t instanceof Date?e="date":"number"==typeof t.length&&"object"==typeof t&&!1===Array.isArray(t)&&(e="arguments"):"number"==typeof t?(e="number",isNaN(t)&&"number"==typeof t&&(e="NaN")):"function"==typeof t&&(e="function",t.toString)&&0===t.toString().indexOf("class")&&(e="class"),e},r=t=>"array"===n(t),i=t=>"string"===n(t),o=t=>"object"===n(t);t.exports={isType:n,isArray:r,isNan:t=>isNaN(t),isString:i,isNumber:t=>"number"===n(t)&&!1===isNaN(t),isBoolean:t=>"boolean"===n(t),isUndefined:t=>"undefined"===n(t),isDefined:t=>void 0!==t,isEmpty:t=>""===t||0===t||"0"===t||null===t||!1===t||!t,isClass:t=>"class"===n(t),isFunction:t=>"function"===n(t),isObject:o,isNull:t=>"null"===n(t),isDOM:t=>"dom"===n(t),isArguments:t=>"arguments"===n(t),isDate:t=>"date"===n(t),isAsync:t=>t instanceof Promise,isUrl:t=>"string"===n(t)&&function(t){return/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(t)}(t),isBase64:t=>i(t)&&t.indexOf("base64")>=0&&0===t.indexOf("data:"),isEmptyObject:t=>!!o(t)&&0===Object.keys(t).length,isEmptyArray:t=>!!r(t)&&0===t.length}}])},function(t,e){t.exports=!1},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var r=n(10),i=n(0).document,o=r(i)&&r(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var r=n(44),i=n(23);t.exports=Object.keys||function(t){return r(t,i)}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var r=n(8).f,i=n(4),o=n(2)("toStringTag");t.exports=function(t,e,n){t&&!i(t=n?t:t.prototype,o)&&r(t,o,{configurable:!0,value:e})}},function(e,n){e.exports=t},function(t,e,n){t.exports=n(51)()},function(t,e,n){!function(n,r){var i=Array.prototype,o=Object.prototype,s=i.slice,u=o.hasOwnProperty,a=i.forEach,c={},l={forEach:function(t,e,n){var r,i,o;if(null!==t)if(a&&t.forEach===a)t.forEach(e,n);else if(t.length===+t.length){for(r=0,i=t.length;r<i;r++)if(r in t&&e.call(n,t[r],r,t)===c)return}else for(o in t)if(u.call(t,o)&&e.call(n,t[o],o,t)===c)return},extend:function(t){return this.forEach(s.call(arguments,1),function(e){for(var n in e)t[n]=e[n]}),t}},p=function(t){if(this.defaults={locale_data:{messages:{"":{domain:"messages",lang:"en",plural_forms:"nplurals=2; plural=(n != 1);"}}},domain:"messages",debug:!1},this.options=l.extend({},this.defaults,t),this.textdomain(this.options.domain),t.domain&&!this.options.locale_data[this.options.domain])throw new Error("Text domain set to non-existent domain: `"+t.domain+"`")};function f(t){return p.PF.compile(t||"nplurals=2; plural=(n != 1);")}function h(t,e){this._key=t,this._i18n=e}p.context_delimiter=String.fromCharCode(4),l.extend(h.prototype,{onDomain:function(t){return this._domain=t,this},withContext:function(t){return this._context=t,this},ifPlural:function(t,e){return this._val=t,this._pkey=e,this},fetch:function(t){return"[object Array]"!={}.toString.call(t)&&(t=[].slice.call(arguments,0)),(t&&t.length?p.sprintf:function(t){return t})(this._i18n.dcnpgettext(this._domain,this._context,this._key,this._pkey,this._val),t)}}),l.extend(p.prototype,{translate:function(t){return new h(t,this)},textdomain:function(t){if(!t)return this._textdomain;this._textdomain=t},gettext:function(t){return this.dcnpgettext.call(this,void 0,void 0,t)},dgettext:function(t,e){return this.dcnpgettext.call(this,t,void 0,e)},dcgettext:function(t,e){return this.dcnpgettext.call(this,t,void 0,e)},ngettext:function(t,e,n){return this.dcnpgettext.call(this,void 0,void 0,t,e,n)},dngettext:function(t,e,n,r){return this.dcnpgettext.call(this,t,void 0,e,n,r)},dcngettext:function(t,e,n,r){return this.dcnpgettext.call(this,t,void 0,e,n,r)},pgettext:function(t,e){return this.dcnpgettext.call(this,void 0,t,e)},dpgettext:function(t,e,n){return this.dcnpgettext.call(this,t,e,n)},dcpgettext:function(t,e,n){return this.dcnpgettext.call(this,t,e,n)},npgettext:function(t,e,n,r){return this.dcnpgettext.call(this,void 0,t,e,n,r)},dnpgettext:function(t,e,n,r,i){return this.dcnpgettext.call(this,t,e,n,r,i)},dcnpgettext:function(t,e,n,r,i){var o;if(r=r||n,t=t||this._textdomain,!this.options)return(o=new p).dcnpgettext.call(o,void 0,void 0,n,r,i);if(!this.options.locale_data)throw new Error("No locale data provided.");if(!this.options.locale_data[t])throw new Error("Domain `"+t+"` was not found.");if(!this.options.locale_data[t][""])throw new Error("No locale meta information provided.");if(!n)throw new Error("No translation key found.");var s,u,a,c=e?e+p.context_delimiter+n:n,l=this.options.locale_data,h=l[t],d=(l.messages||this.defaults.locale_data.messages)[""],y=h[""].plural_forms||h[""]["Plural-Forms"]||h[""]["plural-forms"]||d.plural_forms||d["Plural-Forms"]||d["plural-forms"];if(void 0===i)a=0;else{if("number"!=typeof i&&(i=parseInt(i,10),isNaN(i)))throw new Error("The number that was passed in is not a number.");a=f(y)(i)}if(!h)throw new Error("No domain named `"+t+"` could be found.");return!(s=h[c])||a>s.length?(this.options.missing_key_callback&&this.options.missing_key_callback(c,t),u=[n,r],this.options.debug,u[f()(i)]):(u=s[a])||(u=[n,r])[f()(i)]}});var d,y,g=function(){function t(t){return Object.prototype.toString.call(t).slice(8,-1).toLowerCase()}function e(t,e){for(var n=[];e>0;n[--e]=t);return n.join("")}var n=function(){return n.cache.hasOwnProperty(arguments[0])||(n.cache[arguments[0]]=n.parse(arguments[0])),n.format.call(null,n.cache[arguments[0]],arguments)};return n.format=function(n,r){var i,o,s,u,a,c,l,p=1,f=n.length,h="",d=[];for(o=0;o<f;o++)if("string"===(h=t(n[o])))d.push(n[o]);else if("array"===h){if((u=n[o])[2])for(i=r[p],s=0;s<u[2].length;s++){if(!i.hasOwnProperty(u[2][s]))throw g('[sprintf] property "%s" does not exist',u[2][s]);i=i[u[2][s]]}else i=u[1]?r[u[1]]:r[p++];if(/[^s]/.test(u[8])&&"number"!=t(i))throw g("[sprintf] expecting number but found %s",t(i));switch(null==i&&(i=""),u[8]){case"b":i=i.toString(2);break;case"c":i=String.fromCharCode(i);break;case"d":i=parseInt(i,10);break;case"e":i=u[7]?i.toExponential(u[7]):i.toExponential();break;case"f":i=u[7]?parseFloat(i).toFixed(u[7]):parseFloat(i);break;case"o":i=i.toString(8);break;case"s":i=(i=String(i))&&u[7]?i.substring(0,u[7]):i;break;case"u":i=Math.abs(i);break;case"x":i=i.toString(16);break;case"X":i=i.toString(16).toUpperCase()}i=/[def]/.test(u[8])&&u[3]&&i>=0?"+"+i:i,c=u[4]?"0"==u[4]?"0":u[4].charAt(1):" ",l=u[6]-String(i).length,a=u[6]?e(c,l):"",d.push(u[5]?i+a:a+i)}return d.join("")},n.cache={},n.parse=function(t){for(var e=t,n=[],r=[],i=0;e;){if(null!==(n=/^[^\x25]+/.exec(e)))r.push(n[0]);else if(null!==(n=/^\x25{2}/.exec(e)))r.push("%");else{if(null===(n=/^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(e)))throw"[sprintf] huh?";if(n[2]){i|=1;var o=[],s=n[2],u=[];if(null===(u=/^([a-z_][a-z_\d]*)/i.exec(s)))throw"[sprintf] huh?";for(o.push(u[1]);""!==(s=s.substring(u[0].length));)if(null!==(u=/^\.([a-z_][a-z_\d]*)/i.exec(s)))o.push(u[1]);else{if(null===(u=/^\[(\d+)\]/.exec(s)))throw"[sprintf] huh?";o.push(u[1])}n[2]=o}else i|=2;if(3===i)throw"[sprintf] mixing positional and named placeholders is not (yet) supported";r.push(n)}e=e.substring(n[0].length)}return r},n}();p.parse_plural=function(t,e){return t=t.replace(/n/g,e),p.parse_expression(t)},p.sprintf=function(t,e){return"[object Array]"=={}.toString.call(e)?function(t,e){return e.unshift(t),g.apply(null,e)}(t,[].slice.call(e)):g.apply(this,[].slice.call(arguments))},p.prototype.sprintf=function(){return p.sprintf.apply(this,arguments)},p.PF={},p.PF.parse=function(t){var e=p.PF.extractPluralExpr(t);return p.PF.parser.parse.call(p.PF.parser,e)},p.PF.compile=function(t){var e=p.PF.parse(t);return function(t){return!0===(n=p.PF.interpreter(e)(t))?1:n||0;var n}},p.PF.interpreter=function(t){return function(e){switch(t.type){case"GROUP":return p.PF.interpreter(t.expr)(e);case"TERNARY":return p.PF.interpreter(t.expr)(e)?p.PF.interpreter(t.truthy)(e):p.PF.interpreter(t.falsey)(e);case"OR":return p.PF.interpreter(t.left)(e)||p.PF.interpreter(t.right)(e);case"AND":return p.PF.interpreter(t.left)(e)&&p.PF.interpreter(t.right)(e);case"LT":return p.PF.interpreter(t.left)(e)<p.PF.interpreter(t.right)(e);case"GT":return p.PF.interpreter(t.left)(e)>p.PF.interpreter(t.right)(e);case"LTE":return p.PF.interpreter(t.left)(e)<=p.PF.interpreter(t.right)(e);case"GTE":return p.PF.interpreter(t.left)(e)>=p.PF.interpreter(t.right)(e);case"EQ":return p.PF.interpreter(t.left)(e)==p.PF.interpreter(t.right)(e);case"NEQ":return p.PF.interpreter(t.left)(e)!=p.PF.interpreter(t.right)(e);case"MOD":return p.PF.interpreter(t.left)(e)%p.PF.interpreter(t.right)(e);case"VAR":return e;case"NUM":return t.val;default:throw new Error("Invalid Token found.")}}},p.PF.extractPluralExpr=function(t){t=t.replace(/^\s\s*/,"").replace(/\s\s*$/,""),/;\s*$/.test(t)||(t=t.concat(";"));var e,n=/nplurals\=(\d+);/,r=t.match(n);if(!(r.length>1))throw new Error("nplurals not found in plural_forms string: "+t);if(r[1],!((e=(t=t.replace(n,"")).match(/plural\=(.*);/))&&e.length>1))throw new Error("`plural` expression not found: "+t);return e[1]},p.PF.parser=(d={trace:function(){},yy:{},symbols_:{error:2,expressions:3,e:4,EOF:5,"?":6,":":7,"||":8,"&&":9,"<":10,"<=":11,">":12,">=":13,"!=":14,"==":15,"%":16,"(":17,")":18,n:19,NUMBER:20,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",6:"?",7:":",8:"||",9:"&&",10:"<",11:"<=",12:">",13:">=",14:"!=",15:"==",16:"%",17:"(",18:")",19:"n",20:"NUMBER"},productions_:[0,[3,2],[4,5],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,1],[4,1]],performAction:function(t,e,n,r,i,o,s){var u=o.length-1;switch(i){case 1:return{type:"GROUP",expr:o[u-1]};case 2:this.$={type:"TERNARY",expr:o[u-4],truthy:o[u-2],falsey:o[u]};break;case 3:this.$={type:"OR",left:o[u-2],right:o[u]};break;case 4:this.$={type:"AND",left:o[u-2],right:o[u]};break;case 5:this.$={type:"LT",left:o[u-2],right:o[u]};break;case 6:this.$={type:"LTE",left:o[u-2],right:o[u]};break;case 7:this.$={type:"GT",left:o[u-2],right:o[u]};break;case 8:this.$={type:"GTE",left:o[u-2],right:o[u]};break;case 9:this.$={type:"NEQ",left:o[u-2],right:o[u]};break;case 10:this.$={type:"EQ",left:o[u-2],right:o[u]};break;case 11:this.$={type:"MOD",left:o[u-2],right:o[u]};break;case 12:this.$={type:"GROUP",expr:o[u-1]};break;case 13:this.$={type:"VAR"};break;case 14:this.$={type:"NUM",val:Number(t)}}},table:[{3:1,4:2,17:[1,3],19:[1,4],20:[1,5]},{1:[3]},{5:[1,6],6:[1,7],8:[1,8],9:[1,9],10:[1,10],11:[1,11],12:[1,12],13:[1,13],14:[1,14],15:[1,15],16:[1,16]},{4:17,17:[1,3],19:[1,4],20:[1,5]},{5:[2,13],6:[2,13],7:[2,13],8:[2,13],9:[2,13],10:[2,13],11:[2,13],12:[2,13],13:[2,13],14:[2,13],15:[2,13],16:[2,13],18:[2,13]},{5:[2,14],6:[2,14],7:[2,14],8:[2,14],9:[2,14],10:[2,14],11:[2,14],12:[2,14],13:[2,14],14:[2,14],15:[2,14],16:[2,14],18:[2,14]},{1:[2,1]},{4:18,17:[1,3],19:[1,4],20:[1,5]},{4:19,17:[1,3],19:[1,4],20:[1,5]},{4:20,17:[1,3],19:[1,4],20:[1,5]},{4:21,17:[1,3],19:[1,4],20:[1,5]},{4:22,17:[1,3],19:[1,4],20:[1,5]},{4:23,17:[1,3],19:[1,4],20:[1,5]},{4:24,17:[1,3],19:[1,4],20:[1,5]},{4:25,17:[1,3],19:[1,4],20:[1,5]},{4:26,17:[1,3],19:[1,4],20:[1,5]},{4:27,17:[1,3],19:[1,4],20:[1,5]},{6:[1,7],8:[1,8],9:[1,9],10:[1,10],11:[1,11],12:[1,12],13:[1,13],14:[1,14],15:[1,15],16:[1,16],18:[1,28]},{6:[1,7],7:[1,29],8:[1,8],9:[1,9],10:[1,10],11:[1,11],12:[1,12],13:[1,13],14:[1,14],15:[1,15],16:[1,16]},{5:[2,3],6:[2,3],7:[2,3],8:[2,3],9:[1,9],10:[1,10],11:[1,11],12:[1,12],13:[1,13],14:[1,14],15:[1,15],16:[1,16],18:[2,3]},{5:[2,4],6:[2,4],7:[2,4],8:[2,4],9:[2,4],10:[1,10],11:[1,11],12:[1,12],13:[1,13],14:[1,14],15:[1,15],16:[1,16],18:[2,4]},{5:[2,5],6:[2,5],7:[2,5],8:[2,5],9:[2,5],10:[2,5],11:[2,5],12:[2,5],13:[2,5],14:[2,5],15:[2,5],16:[1,16],18:[2,5]},{5:[2,6],6:[2,6],7:[2,6],8:[2,6],9:[2,6],10:[2,6],11:[2,6],12:[2,6],13:[2,6],14:[2,6],15:[2,6],16:[1,16],18:[2,6]},{5:[2,7],6:[2,7],7:[2,7],8:[2,7],9:[2,7],10:[2,7],11:[2,7],12:[2,7],13:[2,7],14:[2,7],15:[2,7],16:[1,16],18:[2,7]},{5:[2,8],6:[2,8],7:[2,8],8:[2,8],9:[2,8],10:[2,8],11:[2,8],12:[2,8],13:[2,8],14:[2,8],15:[2,8],16:[1,16],18:[2,8]},{5:[2,9],6:[2,9],7:[2,9],8:[2,9],9:[2,9],10:[2,9],11:[2,9],12:[2,9],13:[2,9],14:[2,9],15:[2,9],16:[1,16],18:[2,9]},{5:[2,10],6:[2,10],7:[2,10],8:[2,10],9:[2,10],10:[2,10],11:[2,10],12:[2,10],13:[2,10],14:[2,10],15:[2,10],16:[1,16],18:[2,10]},{5:[2,11],6:[2,11],7:[2,11],8:[2,11],9:[2,11],10:[2,11],11:[2,11],12:[2,11],13:[2,11],14:[2,11],15:[2,11],16:[2,11],18:[2,11]},{5:[2,12],6:[2,12],7:[2,12],8:[2,12],9:[2,12],10:[2,12],11:[2,12],12:[2,12],13:[2,12],14:[2,12],15:[2,12],16:[2,12],18:[2,12]},{4:30,17:[1,3],19:[1,4],20:[1,5]},{5:[2,2],6:[1,7],7:[2,2],8:[1,8],9:[1,9],10:[1,10],11:[1,11],12:[1,12],13:[1,13],14:[1,14],15:[1,15],16:[1,16],18:[2,2]}],defaultActions:{6:[2,1]},parseError:function(t,e){throw new Error(t)},parse:function(t){var e=this,n=[0],r=[null],i=[],o=this.table,s="",u=0,a=0,c=0;this.lexer.setInput(t),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,void 0===this.lexer.yylloc&&(this.lexer.yylloc={});var l=this.lexer.yylloc;function p(){var t;return"number"!=typeof(t=e.lexer.lex()||1)&&(t=e.symbols_[t]||t),t}i.push(l),"function"==typeof this.yy.parseError&&(this.parseError=this.yy.parseError);for(var f,h,d,y,g,m,x,v,b,_,P={};;){if(d=n[n.length-1],this.defaultActions[d]?y=this.defaultActions[d]:(null==f&&(f=p()),y=o[d]&&o[d][f]),void 0===y||!y.length||!y[0]){if(!c){for(m in b=[],o[d])this.terminals_[m]&&m>2&&b.push("'"+this.terminals_[m]+"'");var w="";w=this.lexer.showPosition?"Parse error on line "+(u+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+b.join(", ")+", got '"+this.terminals_[f]+"'":"Parse error on line "+(u+1)+": Unexpected "+(1==f?"end of input":"'"+(this.terminals_[f]||f)+"'"),this.parseError(w,{text:this.lexer.match,token:this.terminals_[f]||f,line:this.lexer.yylineno,loc:l,expected:b})}if(3==c){if(1==f)throw new Error(w||"Parsing halted.");a=this.lexer.yyleng,s=this.lexer.yytext,u=this.lexer.yylineno,l=this.lexer.yylloc,f=p()}for(;!(2..toString()in o[d]);){if(0==d)throw new Error(w||"Parsing halted.");_=1,n.length=n.length-2*_,r.length=r.length-_,i.length=i.length-_,d=n[n.length-1]}h=f,f=2,y=o[d=n[n.length-1]]&&o[d][2],c=3}if(y[0]instanceof Array&&y.length>1)throw new Error("Parse Error: multiple actions possible at state: "+d+", token: "+f);switch(y[0]){case 1:n.push(f),r.push(this.lexer.yytext),i.push(this.lexer.yylloc),n.push(y[1]),f=null,h?(f=h,h=null):(a=this.lexer.yyleng,s=this.lexer.yytext,u=this.lexer.yylineno,l=this.lexer.yylloc,c>0&&c--);break;case 2:if(x=this.productions_[y[1]][1],P.$=r[r.length-x],P._$={first_line:i[i.length-(x||1)].first_line,last_line:i[i.length-1].last_line,first_column:i[i.length-(x||1)].first_column,last_column:i[i.length-1].last_column},void 0!==(g=this.performAction.call(P,s,a,u,this.yy,y[1],r,i)))return g;x&&(n=n.slice(0,-1*x*2),r=r.slice(0,-1*x),i=i.slice(0,-1*x)),n.push(this.productions_[y[1]][0]),r.push(P.$),i.push(P._$),v=o[n[n.length-2]][n[n.length-1]],n.push(v);break;case 3:return!0}}return!0}},y=function(){var t={EOF:1,parseError:function(t,e){if(!this.yy.parseError)throw new Error(t);this.yy.parseError(t,e)},setInput:function(t){return this._input=t,this._more=this._less=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this},input:function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.match+=t,this.matched+=t,t.match(/\n/)&&this.yylineno++,this._input=this._input.slice(1),t},unput:function(t){return this._input=t+this._input,this},more:function(){return this._more=!0,this},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),e=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},next:function(){if(this.done)return this.EOF;var t,e;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var n=this._currentRules(),r=0;r<n.length;r++)if(t=this._input.match(this.rules[n[r]]))return(e=t[0].match(/\n.*/g))&&(this.yylineno+=e.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:e?e[e.length-1].length-1:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this._more=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],this.performAction.call(this,this.yy,this,n[r],this.conditionStack[this.conditionStack.length-1])||void 0;if(""===this._input)return this.EOF;this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var t=this.next();return void 0!==t?t:this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(t){this.begin(t)},performAction:function(t,e,n,r){switch(n){case 0:break;case 1:return 20;case 2:return 19;case 3:return 8;case 4:return 9;case 5:return 6;case 6:return 7;case 7:return 11;case 8:return 13;case 9:return 10;case 10:return 12;case 11:return 14;case 12:return 15;case 13:return 16;case 14:return 17;case 15:return 18;case 16:return 5;case 17:return"INVALID"}},rules:[/^\s+/,/^[0-9]+(\.[0-9]+)?\b/,/^n\b/,/^\|\|/,/^&&/,/^\?/,/^:/,/^<=/,/^>=/,/^</,/^>/,/^!=/,/^==/,/^%/,/^\(/,/^\)/,/^$/,/^./],conditions:{INITIAL:{rules:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],inclusive:!0}}};return t}(),d.lexer=y,d),t.exports&&(e=t.exports=p),e.Jed=p}()},function(t,e,n){for(var r=n(29),i=n(21),o=n(13),s=n(0),u=n(1),a=n(11),c=n(2),l=c("iterator"),p=c("toStringTag"),f=a.Array,h={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},d=i(h),y=0;y<d.length;y++){var g,m=d[y],x=h[m],v=s[m],b=v&&v.prototype;if(b&&(b[l]||u(b,l,f),b[p]||u(b,p,m),a[m]=f,x))for(g in r)b[g]||o(b,g,r[g],!0)}},function(t,e,n){"use strict";var r=n(30),i=n(33),o=n(11),s=n(12);t.exports=n(36)(Array,"Array",function(t,e){this._t=s(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,i(1)):i(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values"),o.Arguments=o.Array,r("keys"),r("values"),r("entries")},function(t,e,n){var r=n(2)("unscopables"),i=Array.prototype;null==i[r]&&n(1)(i,r,{}),t.exports=function(t){i[r][t]=!0}},function(t,e,n){t.exports=!n(3)&&!n(17)(function(){return 7!=Object.defineProperty(n(18)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(10);t.exports=function(t,e){if(!r(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){var r=n(35);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){"use strict";var r=n(16),i=n(37),o=n(13),s=n(1),u=n(11),a=n(41),c=n(24),l=n(49),p=n(2)("iterator"),f=!([].keys&&"next"in[].keys()),h=function(){return this};t.exports=function(t,e,n,d,y,g,m){a(n,e,d);var x,v,b,_=function(t){if(!f&&t in S)return S[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},P=e+" Iterator",w="values"==y,O=!1,S=t.prototype,E=S[p]||S["@@iterator"]||y&&S[y],j=E||_(y),k=y?w?_("entries"):j:void 0,F="Array"==e&&S.entries||E;if(F&&(b=l(F.call(new t)))!==Object.prototype&&b.next&&(c(b,P,!0),r||"function"==typeof b[p]||s(b,p,h)),w&&E&&"values"!==E.name&&(O=!0,j=function(){return E.call(this)}),r&&!m||!f&&!O&&S[p]||s(S,p,j),u[e]=j,u[P]=h,y)if(x={values:w?j:_("values"),keys:g?j:_("keys"),entries:k},m)for(v in x)v in S||o(S,v,x[v]);else i(i.P+i.F*(f||O),e,x);return x}},function(t,e,n){var r=n(0),i=n(6),o=n(1),s=n(13),u=n(39),a=function(t,e,n){var c,l,p,f,h=t&a.F,d=t&a.G,y=t&a.S,g=t&a.P,m=t&a.B,x=d?r:y?r[e]||(r[e]={}):(r[e]||{}).prototype,v=d?i:i[e]||(i[e]={}),b=v.prototype||(v.prototype={});for(c in d&&(n=e),n)p=((l=!h&&x&&void 0!==x[c])?x:n)[c],f=m&&l?u(p,r):g&&"function"==typeof p?u(Function.call,p):p,x&&s(x,c,p,t&a.U),v[c]!=p&&o(v,c,f),g&&b[c]!=p&&(b[c]=p)};r.core=i,a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,e,n){t.exports=n(5)("native-function-to-string",Function.toString)},function(t,e,n){var r=n(40);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){"use strict";var r=n(42),i=n(19),o=n(24),s={};n(1)(s,n(2)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(s,{next:i(1,n)}),o(t,e+" Iterator")}},function(t,e,n){var r=n(9),i=n(43),o=n(23),s=n(14)("IE_PROTO"),u=function(){},a=function(){var t,e=n(18)("iframe"),r=o.length;for(e.style.display="none",n(48).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),a=t.F;r--;)delete a.prototype[o[r]];return a()};t.exports=Object.create||function(t,e){var n;return null!==t?(u.prototype=r(t),n=new u,u.prototype=null,n[s]=t):n=a(),void 0===e?n:i(n,e)}},function(t,e,n){var r=n(8),i=n(9),o=n(21);t.exports=n(3)?Object.defineProperties:function(t,e){i(t);for(var n,s=o(e),u=s.length,a=0;u>a;)r.f(t,n=s[a++],e[n]);return t}},function(t,e,n){var r=n(4),i=n(12),o=n(45)(!1),s=n(14)("IE_PROTO");t.exports=function(t,e){var n,u=i(t),a=0,c=[];for(n in u)n!=s&&r(u,n)&&c.push(n);for(;e.length>a;)r(u,n=e[a++])&&(~o(c,n)||c.push(n));return c}},function(t,e,n){var r=n(12),i=n(46),o=n(47);t.exports=function(t){return function(e,n,s){var u,a=r(e),c=i(a.length),l=o(s,c);if(t&&n!=n){for(;c>l;)if((u=a[l++])!=u)return!0}else for(;c>l;l++)if((t||l in a)&&a[l]===n)return t||l||0;return!t&&-1}}},function(t,e,n){var r=n(22),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},function(t,e,n){var r=n(22),i=Math.max,o=Math.min;t.exports=function(t,e){return(t=r(t))<0?i(t+e,0):o(t,e)}},function(t,e,n){var r=n(0).document;t.exports=r&&r.documentElement},function(t,e,n){var r=n(4),i=n(50),o=n(14)("IE_PROTO"),s=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),r(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?s:null}},function(t,e,n){var r=n(20);t.exports=function(t){return Object(r(t))}},function(t,e,n){"use strict";var r=n(52);function i(){}function o(){}o.resetWarningCache=i,t.exports=function(){function t(t,e,n,i,o,s){if(s!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function e(){return t}t.isRequired=t;var n={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:o,resetWarningCache:i};return n.PropTypes=n,n}},function(t,e,n){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(t,e,n){"use strict";n.r(e);n(28);var r=n(25);n(26);var i=n(15);var o=n(27),s=n.n(o);let u=null;var a=new class{constructor(){if(u)return u;this.jed=new s.a({domain:"messages"})}getJed(){return this.jed}};class c extends r.Component{constructor(t){super(t),c.components={},c.uid=0}changeLocalization(t){t=this.props.languages[t]?t:this.props.defaultLang;let e=this.props.languages[t]?this.props.languages[t]:function(t="en"){return{locale_data:{messages:{"":{domain:"messages",lang:t,plural_forms:"nplurals=2; plural=(n != 1);"}}}}}(this.props.defaultLang);this.updateComponents(e,this.props.languages,t)}updateComponents(t,e){t&&Object(i.isObject)(t.locale_data)&&Object(i.isObject)(t.locale_data.messages)&&(Object(i.isFunction)(this.props.onChange)&&Object(i.isString)(e)&&this.props.onChange(e),a.getJed().options=t,Object.keys(c.components).forEach(t=>{Object(i.isDefined)(c.components[t])&&c.components[t].forceUpdate()}))}componentDidMount(){this.props.active!==this.props.defaultLang&&this.changeLocalization(this.props.active)}componentDidUpdate(t){this.props.active!==t.active&&this.changeLocalization(this.props.active)}render(){return this.props.children?this.props.children:null}}c.defaultProps={active:"en",defaultLang:"en",languages:{}};var l,p=c;var f=class extends r.Component{constructor(t){super(t),this.id=++p.uid,p.components[this.id]=this}componentWillUnmount(){delete p.components[this.id]}render(){return Object(i.isFunction)(this.props.children)?function(t,e,n,r){l||(l="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=t&&t.defaultProps,o=arguments.length-3;if(e||0===o||(e={children:void 0}),1===o)e.children=r;else if(o>1){for(var s=new Array(o),u=0;u<o;u++)s[u]=arguments[u+3];e.children=s}if(e&&i)for(var a in i)void 0===e[a]&&(e[a]=i[a]);else e||(e=i||{});return{$$typeof:l,type:t,key:void 0===n?null:""+n,ref:null,props:e,_owner:null}}("span",{className:"localization-node "+(Object(i.isString)(this.props.className)?this.props.className:""),dangerouslySetInnerHTML:{__html:this.props.children()}}):null}};const h=(t,e)=>(function(){return function(t,e){if(!a.getJed())return!1;return e?a.getJed().pgettext(e,t):a.getJed().gettext(t)}(t,e)}),d=(t,e,n,r)=>(function(){return function(t,e,n,r){if(!Number.isInteger(n))return t;if(!a.getJed())return!1;return r?a.getJed().npgettext(r,t,e,n):a.getJed().ngettext(t,e,n)}(t,e,n,r)}),y=(...t)=>(function(){return function(...t){return s.a.sprintf.apply(this,t)}.apply(null,t.map(t=>Object(i.isFunction)(t)?t():t))});n.d(e,"LocalizationObserver",function(){return p}),n.d(e,"l",function(){return h}),n.d(e,"nl",function(){return d}),n.d(e,"sprintf",function(){return y}),n.d(e,"jed",function(){return a});e.default=f}])});