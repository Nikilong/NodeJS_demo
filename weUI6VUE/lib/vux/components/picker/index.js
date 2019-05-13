/*!
 * Vux v0.1.3-rc10 (https://vux.li)
 * Licensed under the MIT license
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.vuxPicker=e():t.vuxPicker=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){t.exports=n(92)},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){t.exports=!n(10)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(9),o=n(31),i=n(25),u=Object.defineProperty;e.f=n(2)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return u(t,e,n)}catch(a){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(63),o=n(15);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(4),o=n(13);t.exports=n(2)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(23)("wks"),o=n(14),i=n(1).Symbol,u="function"==typeof i,a=t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))};a.store=r},function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},function(t,e,n){var r=n(11);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var r=n(36),o=n(16);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var r=n(1),o=n(8),i=n(60),u=n(6),a="prototype",l=function(t,e,n){var c,s,f,p=t&l.F,_=t&l.G,d=t&l.S,h=t&l.P,v=t&l.B,m=t&l.W,g=_?o:o[e]||(o[e]={}),y=g[a],x=_?r:d?r[e]:(r[e]||{})[a];_&&(n=e);for(c in n)s=!p&&x&&void 0!==x[c],s&&c in g||(f=s?x[c]:n[c],g[c]=_&&"function"!=typeof x[c]?n[c]:v&&s?i(f,r):m&&x[c]==f?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e[a]=t[a],e}(f):h&&"function"==typeof f?i(Function.call,f):f,h&&((g.virtual||(g.virtual={}))[c]=f,t&l.R&&y&&!y[c]&&u(y,c,f)))};l.F=1,l.G=2,l.S=4,l.P=8,l.B=16,l.W=32,l.U=64,l.R=128,t.exports=l},function(t,e){t.exports={}},function(t,e){t.exports=!0},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){var r=n(4).f,o=n(3),i=n(7)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e,n){var r=n(23)("keys"),o=n(14);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e,n){var r=n(1),o="__core-js_shared__",i=r[o]||(r[o]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(11);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r=n(1),o=n(8),i=n(19),u=n(27),a=n(4).f;t.exports=function(t){var e=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||a(e,t,{value:u.f(t)})}},function(t,e,n){e.f=n(7)},function(t,e,n){t.exports={"default":n(53),__esModule:!0}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(11),o=n(1).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,n){t.exports=!n(2)&&!n(10)(function(){return 7!=Object.defineProperty(n(30)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){"use strict";var r=n(19),o=n(17),i=n(37),u=n(6),a=n(3),l=n(18),c=n(65),s=n(21),f=n(72),p=n(7)("iterator"),_=!([].keys&&"next"in[].keys()),d="@@iterator",h="keys",v="values",m=function(){return this};t.exports=function(t,e,n,g,y,x,b){c(n,e,g);var S,T,w,O=function(t){if(!_&&t in k)return k[t];switch(t){case h:return function(){return new n(this,t)};case v:return function(){return new n(this,t)}}return function(){return new n(this,t)}},M=e+" Iterator",C=y==v,j=!1,k=t.prototype,D=k[p]||k[d]||y&&k[y],E=D||O(y),P=y?C?O("entries"):E:void 0,A="Array"==e?k.entries||D:D;if(A&&(w=f(A.call(new t)),w!==Object.prototype&&(s(w,M,!0),r||a(w,p)||u(w,p,m))),C&&D&&D.name!==v&&(j=!0,E=function(){return D.call(this)}),r&&!b||!_&&!j&&k[p]||u(k,p,E),l[e]=E,l[M]=m,y)if(S={values:C?E:O(v),keys:x?E:O(h),entries:P},b)for(T in S)T in k||i(k,T,S[T]);else o(o.P+o.F*(_||j),e,S);return S}},function(t,e,n){var r=n(9),o=n(69),i=n(16),u=n(22)("IE_PROTO"),a=function(){},l="prototype",c=function(){var t,e=n(30)("iframe"),r=i.length,o=">";for(e.style.display="none",n(62).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write("<script>document.F=Object</script"+o),t.close(),c=t.F;r--;)delete c[l][i[r]];return c()};t.exports=Object.create||function(t,e){var n;return null!==t?(a[l]=r(t),n=new a,a[l]=null,n[u]=t):n=c(),void 0===e?n:o(n,e)}},function(t,e,n){var r=n(36),o=n(16).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(3),o=n(5),i=n(59)(!1),u=n(22)("IE_PROTO");t.exports=function(t,e){var n,a=o(t),l=0,c=[];for(n in a)n!=u&&r(a,n)&&c.push(n);for(;e.length>l;)r(a,n=e[l++])&&(~i(c,n)||c.push(n));return c}},function(t,e,n){t.exports=n(6)},function(t,e){t.exports=function(t,e,r){if(t.filter)return t.filter(e,r);if(void 0===t||null===t)throw new TypeError;if("function"!=typeof e)throw new TypeError;for(var o=[],i=0;i<t.length;i++)if(n.call(t,i)){var u=t[i];e.call(r,u,i,t)&&o.push(u)}return o};var n=Object.prototype.hasOwnProperty},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=["-moz-box-","-webkit-box-",""];e["default"]={props:{span:[Number,String],order:[Number,String]},methods:{buildWidth:function(t){return"number"==typeof t?1>t?t:t/12:"string"==typeof t?t.replace("px","")/this.bodyWidth:void 0}},computed:{style:function(){var t={},e="horizontal"===this.$parent.orient?"marginLeft":"marginTop";if(t[e]=this.$parent.gutter+"px",this.span)for(var r=0;r<n.length;r++)t[n[r]+"flex"]="0 0 "+100*this.buildWidth(this.span)+"%";return"undefined"!=typeof this.order&&(t.order=this.order),t}},data:function(){return{bodyWidth:document.documentElement.offsetWidth}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={props:{gutter:{type:Number,"default":8},orient:{type:String,"default":"horizontal"},justify:String,align:String,wrap:String,direction:String},computed:{styles:function(){return{"justify-content":this.justify,"align-items":this.align,"flex-wrap":this.wrap,"flex-direction":this.direction}}}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(28),i=r(o),u=n(52),a=r(u),l=n(45),c=r(l),s=n(42),f=n(44),p=r(f);e["default"]={components:{Flexbox:s.Flexbox,FlexboxItem:s.FlexboxItem},created:function(){if(0!==this.columns){var t=this.columns;this.store=new p["default"](this.data,t,this.fixedColumns),this.data=this.store.getColumns(this.value)}},ready:function(){var t=this;this.$nextTick(function(){t.render(t.data,t.value)})},props:{data:{type:Array},columns:{type:Number,"default":0},fixedColumns:{type:Number,"default":0},value:{type:Array,twoWay:!0},itemClass:{type:String,"default":"scroller-item"}},methods:{getId:function(t){return"#vux-picker-"+this.uuid+"-"+t},render:function(t,e){this.count=this.data.length;var n=this;if(t&&t.length){var r=this.data.length;if(e.length<r)for(var o=0;r>o;o++)n.value.$set(o,t[o][0].value||t[o][0]);for(var i=function(r){return document.querySelector(n.getId(r))?(n.scroller[r]&&n.scroller[r].destroy(),n.scroller[r]=new c["default"](n.getId(r),{data:t[r],defaultValue:e[r]||t[r][0].value,itemClass:n.item_class,onSelect:function(t){n.value.$set(r,t),(!this.columns||this.columns&&n.getValue().length===n.store.count)&&n.$emit("on-change",n.getValue()),0!==n.columns&&n.renderChain(r+1)}}),void(n.value&&n.scroller[r].select(e[r]))):{v:void 0}},u=0;u<t.length;u++){var l=i(u);if("object"===("undefined"==typeof l?"undefined":(0,a["default"])(l)))return l.v}}},renderChain:function(t){if(this.columns&&!(t>this.count-1)){var e=this,n=this.getId(t);this.scroller[t].destroy();var r=this.store.getChildren(e.getValue()[t-1]);this.scroller[t]=new c["default"](n,{data:r,itemClass:e.item_class,onSelect:function(n){e.value.$set(t,n),e.$emit("on-change",e.getValue()),e.renderChain(t+1)}}),this.value.$set(t,r[0].value),this.renderChain(t+1)}},getValue:function(){for(var t=[],e=0;e<this.data.length;e++){if(!this.scroller[e])return[];t.push(this.scroller[e].value)}return t},emitValueChange:function(t){(!this.columns||this.columns&&t.length===this.store.count)&&this.$emit("on-change",t)}},data:function(){return{scroller:[],count:0,uuid:Math.random().toString(36).substring(3,8)}},watch:{value:function(t,e){if(0!==this.columns)t.length>0&&(0,i["default"])(t)!==(0,i["default"])(e)&&(this.data=this.store.getColumns(t),this.$nextTick(function(){this.render(this.data,t)}));else for(var n=0;n<t.length;n++)this.scroller[n].value!==t[n]&&this.scroller[n].select(t[n])},data:function(t){var e=this;if("[object Array]"===Object.prototype.toString.call(t[0]))this.$nextTick(function(){e.render(t,e.value),e.$nextTick(function(){e.emitValueChange(e.getValue()),(0,i["default"])(e.getValue())!==(0,i["default"])(e.value)&&(!e.columns||e.columns&&e.getValue().length===e.store.count)&&(e.value=e.getValue())})});else if(0!==this.columns){if(!t.length)return;var n=this.columns;this.store=new p["default"](t,n,this.fixedColumns),this.data=this.store.getColumns(this.value)}}},beforeDestroy:function(){for(var t=0;t<this.count;t++)this.scroller[t].destroy(),this.scroller[t]=null}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e.FlexboxItem=e.Flexbox=void 0;var o=n(91),i=r(o),u=n(90),a=r(u);e.Flexbox=i["default"],e.FlexboxItem=a["default"]},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=Date.now||function(){return+new Date},r={},o=1,i=60,u=1e3;e["default"]={requestAnimationFrame:function(){var t=window.requestAnimationFrame||window.webkitRequestAnimationFrame;return function(e,n){t(e,n)}}(),stop:function(t){var e=null!=r[t];return e&&(r[t]=null),e},isRunning:function(t){return null!=r[t]},start:function a(t,e,l,c,s,f){var p=this,a=n(),_=a,d=0,h=0,v=o++;if(f||(f=document.body),v%20===0){var m={};for(var g in r)m[g]=!0;r=m}var y=function x(o){var m=o!==!0,g=n();if(!r[v]||e&&!e(v))return r[v]=null,void(l&&l(i-h/((g-a)/u),v,!1));if(m)for(var y=Math.round((g-_)/(u/i))-1,b=0;b<Math.min(y,4);b++)x(!0),h++;c&&(d=(g-a)/c,d>1&&(d=1));var S=s?s(d):d;t(S,g,m)!==!1&&1!==d||!m?m&&(_=g,p.requestAnimationFrame(x,f)):(r[v]=null,l&&l(i-h/((g-a)/u),v,1===d||null==c))};return r[v]=!0,p.requestAnimationFrame(y,f),v}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(28),i=r(o),u=n(50),a=r(u),l=n(51),c=r(l),s=n(38),f=r(s),p=function(){function t(e,n,r){(0,a["default"])(this,t),this.data=e,this.count=n,r&&(this.fixedColumns=r)}return(0,c["default"])(t,[{key:"getChildren",value:function(t){return(0,f["default"])(this.data,function(e){return e.parent===t})}},{key:"getFirstColumn",value:function(){return(0,f["default"])(this.data,function(t){return!t.parent||0===t.parent})}},{key:"getPure",value:function(t){return JSON.parse((0,i["default"])(t))}},{key:"getColumns",value:function(t){var e=this;if(t.length>0){var n=this.getPure(this.data).filter(function(n){return e.getPure(t).indexOf(n.value)>-1}).length;n<this.getPure(t).length&&(t=[])}for(var r=[],o=this.fixedColumns||8,i=0;o>i;i++)if(0===i)r.push(this.getFirstColumn());else if(t[i])r.push(this.getChildren(t[i-1]));else{if("undefined"==typeof r[i-1][0])break;var u=r[i-1][0].value;r.push(this.getChildren(u))}var a=r.filter(function(t){return t.length>0});return this.count=a.length,a}}]),t}();e["default"]=p},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}var o=n(43),i=r(o),u=n(46),a='\n<div class="scroller-component" data-role="component">\n  <div class="scroller-mask" data-role="mask"></div>\n  <div class="scroller-indicator" data-role="indicator"></div>\n  <div class="scroller-content" data-role="content"></div>\n</div>\n',l=function(t,e){var n=this;e=e||{},n.options={itemClass:"scroller-item",onSelect:function(){},defaultValue:0,data:[]};for(var r in e)void 0!==e[r]&&(n.options[r]=e[r]);n.__container=(0,u.getElement)(t);var o=document.createElement("div");o.innerHTML=e.template||a;var i=n.__component=o.querySelector("[data-role=component]"),l=n.__content=i.querySelector("[data-role=content]"),c=i.querySelector("[data-role=indicator]"),s=n.options.data,f="";s.length&&s[0].constructor===Object?s.forEach(function(t){f+='<div class="'+n.options.itemClass+'" data-value="'+t.value+'">'+t.name+"</div>"}):s.forEach(function(t){f+='<div class="'+n.options.itemClass+'" data-value="'+t+'">'+t+"</div>"}),l.innerHTML=f,n.__container.appendChild(i),n.__itemHeight=parseInt((0,u.getComputedStyle)(c,"height"),10),n.__callback=e.callback||function(t){l.style.webkitTransform="translate3d(0, "+-t+"px, 0)"};var p=i.getBoundingClientRect();n.__clientTop=p.top+i.clientTop||0,n.__setDimensions(i.clientHeight,l.offsetHeight),0===i.clientHeight&&n.__setDimensions(parseInt((0,u.getComputedStyle)(i,"height"),10),204),n.select(n.options.defaultValue,!1),i.addEventListener("touchstart",function(t){t.target.tagName.match(/input|textarea|select/i)||(t.preventDefault(),n.__doTouchStart(t.touches,t.timeStamp))},!1),i.addEventListener("touchmove",function(t){n.__doTouchMove(t.touches,t.timeStamp)},!1),i.addEventListener("touchend",function(t){n.__doTouchEnd(t.timeStamp)},!1)},c={value:null,__prevValue:null,__isSingleTouch:!1,__isTracking:!1,__didDecelerationComplete:!1,__isGesturing:!1,__isDragging:!1,__isDecelerating:!1,__isAnimating:!1,__clientTop:0,__clientHeight:0,__contentHeight:0,__itemHeight:0,__scrollTop:0,__minScrollTop:0,__maxScrollTop:0,__scheduledTop:0,__lastTouchTop:null,__lastTouchMove:null,__positions:null,__minDecelerationScrollTop:null,__maxDecelerationScrollTop:null,__decelerationVelocityY:null,__setDimensions:function(t,e){var n=this;n.__clientHeight=t,n.__contentHeight=e;var r=n.options.data.length,o=Math.round(n.__clientHeight/n.__itemHeight);n.__minScrollTop=-n.__itemHeight*(o/2),n.__maxScrollTop=n.__minScrollTop+r*n.__itemHeight-.1},selectByIndex:function(t,e){var n=this;0>t||t>n.__content.childElementCount-1||(n.__scrollTop=n.__minScrollTop+t*n.__itemHeight,n.scrollTo(n.__scrollTop,e),n.__selectItem(n.__content.children[t]))},select:function(t,e){for(var n=this,r=n.__content.children,o=0,i=r.length;i>o;o++)if(r[o].dataset.value===t)return void n.selectByIndex(o,e);n.selectByIndex(0,e)},getValue:function(){return this.value},scrollTo:function(t,e){var n=this;return e=void 0===e?!0:e,n.__isDecelerating&&(i["default"].stop(n.__isDecelerating),n.__isDecelerating=!1),t=Math.round(t/n.__itemHeight)*n.__itemHeight,t=Math.max(Math.min(n.__maxScrollTop,t),n.__minScrollTop),t!==n.__scrollTop&&e?void n.__publish(t,250):(n.__publish(t),void n.__scrollingComplete())},destroy:function(){this.__component.parentNode&&this.__component.parentNode.removeChild(this.__component)},__selectItem:function(t){var e=this,n=e.options.itemClass+"-selected",r=e.__content.querySelector("."+n);r&&r.classList.remove(n),t.classList.add(n),null!==e.value&&(e.__prevValue=e.value),e.value=t.dataset.value},__scrollingComplete:function(){var t=this,e=Math.round((t.__scrollTop-t.__minScrollTop-t.__itemHeight/2)/t.__itemHeight);t.__selectItem(t.__content.children[e]),null!==t.__prevValue&&t.__prevValue!==t.value&&t.options.onSelect(t.value)},__doTouchStart:function(t,e){var n=this;if(null==t.length)throw new Error("Invalid touch list: "+t);if(e instanceof Date&&(e=e.valueOf()),"number"!=typeof e)throw new Error("Invalid timestamp value: "+e);n.__interruptedAnimation=!0,n.__isDecelerating&&(i["default"].stop(n.__isDecelerating),n.__isDecelerating=!1,n.__interruptedAnimation=!0),n.__isAnimating&&(i["default"].stop(n.__isAnimating),n.__isAnimating=!1,n.__interruptedAnimation=!0);var r,o=1===t.length;r=o?t[0].pageY:Math.abs(t[0].pageY+t[1].pageY)/2,n.__initialTouchTop=r,n.__lastTouchTop=r,n.__lastTouchMove=e,n.__lastScale=1,n.__enableScrollY=!o,n.__isTracking=!0,n.__didDecelerationComplete=!1,n.__isDragging=!o,n.__isSingleTouch=o,n.__positions=[]},__doTouchMove:function(t,e,n){var r=this;if(null==t.length)throw new Error("Invalid touch list: "+t);if(e instanceof Date&&(e=e.valueOf()),"number"!=typeof e)throw new Error("Invalid timestamp value: "+e);if(r.__isTracking){var o;o=2===t.length?Math.abs(t[0].pageY+t[1].pageY)/2:t[0].pageY;var i=r.__positions;if(r.__isDragging){var u=o-r.__lastTouchTop,a=r.__scrollTop;if(r.__enableScrollY){a-=u;var l=r.__minScrollTop,c=r.__maxScrollTop;(a>c||l>a)&&(a=a>c?c:l)}i.length>40&&i.splice(0,20),i.push(a,e),r.__publish(a)}else{var s=0,f=5,p=Math.abs(o-r.__initialTouchTop);r.__enableScrollY=p>=s,i.push(r.__scrollTop,e),r.__isDragging=r.__enableScrollY&&p>=f,r.__isDragging&&(r.__interruptedAnimation=!1)}r.__lastTouchTop=o,r.__lastTouchMove=e,r.__lastScale=n}},__doTouchEnd:function(t){var e=this;if(t instanceof Date&&(t=t.valueOf()),"number"!=typeof t)throw new Error("Invalid timestamp value: "+t);if(e.__isTracking){if(e.__isTracking=!1,e.__isDragging&&(e.__isDragging=!1,e.__isSingleTouch&&t-e.__lastTouchMove<=100)){for(var n=e.__positions,r=n.length-1,o=r,i=r;i>0&&n[i]>e.__lastTouchMove-100;i-=2)o=i;if(o!==r){var u=n[r]-n[o],a=e.__scrollTop-n[o-1];e.__decelerationVelocityY=a/u*(1e3/60);var l=4;Math.abs(e.__decelerationVelocityY)>l&&e.__startDeceleration(t)}}e.__isDecelerating||e.scrollTo(e.__scrollTop),e.__positions.length=0}},__publish:function(t,e){var n=this,r=n.__isAnimating;if(r&&(i["default"].stop(r),n.__isAnimating=!1),e){n.__scheduledTop=t;var o=n.__scrollTop,a=t-o,l=function(t,e,r){n.__scrollTop=o+a*t,n.__callback&&n.__callback(n.__scrollTop)},c=function(t){return n.__isAnimating===t},s=function(t,e,r){e===n.__isAnimating&&(n.__isAnimating=!1),(n.__didDecelerationComplete||r)&&n.__scrollingComplete()};n.__isAnimating=i["default"].start(l,c,s,e,r?u.easeOutCubic:u.easeInOutCubic)}else n.__scheduledTop=n.__scrollTop=t,n.__callback&&n.__callback(t)},__startDeceleration:function(t){var e=this;e.__minDecelerationScrollTop=e.__minScrollTop,e.__maxDecelerationScrollTop=e.__maxScrollTop;var n=function(t,n,r){e.__stepThroughDeceleration(r)},r=.5,o=function(){var t=Math.abs(e.__decelerationVelocityY)>=r;return t||(e.__didDecelerationComplete=!0),t},u=function(t,n,r){return e.__isDecelerating=!1,e.__scrollTop<=e.__minScrollTop||e.__scrollTop>=e.__maxScrollTop?void e.scrollTo(e.__scrollTop):void(e.__didDecelerationComplete&&e.__scrollingComplete())};e.__isDecelerating=i["default"].start(n,o,u)},__stepThroughDeceleration:function(t){var e=this,n=e.__scrollTop+e.__decelerationVelocityY,r=Math.max(Math.min(e.__maxDecelerationScrollTop,n),e.__minDecelerationScrollTop);r!==n&&(n=r,e.__decelerationVelocityY=0),Math.abs(e.__decelerationVelocityY)<=1?Math.abs(n%e.__itemHeight)<1&&(e.__decelerationVelocityY=0):e.__decelerationVelocityY*=.95,e.__publish(n)}};for(var s in c)l.prototype[s]=c[s];t.exports=l},function(t,e){"use strict";function n(t){return"string"==typeof t?document.querySelector(t):t}function r(t,e){var n=window.getComputedStyle(t);return n[e]||""}function o(t){return Math.pow(t-1,3)+1}function i(t){return(t/=.5)<1?.5*Math.pow(t,3):.5*(Math.pow(t-2,3)+2)}Object.defineProperty(e,"__esModule",{value:!0}),e.getElement=n,e.getComputedStyle=r,e.easeOutCubic=o,e.easeInOutCubic=i},function(t,e,n){t.exports={"default":n(54),__esModule:!0}},function(t,e,n){t.exports={"default":n(55),__esModule:!0}},function(t,e,n){t.exports={"default":n(56),__esModule:!0}},function(t,e){"use strict";e.__esModule=!0,e["default"]=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var o=n(47),i=r(o);e["default"]=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,i["default"])(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var o=n(49),i=r(o),u=n(48),a=r(u),l="function"==typeof a["default"]&&"symbol"==typeof i["default"]?function(t){return typeof t}:function(t){return t&&"function"==typeof a["default"]&&t.constructor===a["default"]?"symbol":typeof t};e["default"]="function"==typeof a["default"]&&"symbol"===l(i["default"])?function(t){return"undefined"==typeof t?"undefined":l(t)}:function(t){return t&&"function"==typeof a["default"]&&t.constructor===a["default"]?"symbol":"undefined"==typeof t?"undefined":l(t)}},function(t,e,n){var r=n(8),o=r.JSON||(r.JSON={stringify:JSON.stringify});t.exports=function(t){return o.stringify.apply(o,arguments)}},function(t,e,n){n(78);var r=n(8).Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},function(t,e,n){n(81),n(79),n(82),n(83),t.exports=n(8).Symbol},function(t,e,n){n(80),n(84),t.exports=n(27).f("iterator")},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e){t.exports=function(){}},function(t,e,n){var r=n(5),o=n(75),i=n(74);t.exports=function(t){return function(e,n,u){var a,l=r(e),c=o(l.length),s=i(u,c);if(t&&n!=n){for(;c>s;)if(a=l[s++],a!=a)return!0}else for(;c>s;s++)if((t||s in l)&&l[s]===n)return t||s||0;return!t&&-1}}},function(t,e,n){var r=n(57);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(12),o=n(35),i=n(20);t.exports=function(t){var e=r(t),n=o.f;if(n)for(var u,a=n(t),l=i.f,c=0;a.length>c;)l.call(t,u=a[c++])&&e.push(u);return e}},function(t,e,n){t.exports=n(1).document&&document.documentElement},function(t,e,n){var r=n(29);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var r=n(29);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){"use strict";var r=n(33),o=n(13),i=n(21),u={};n(6)(u,n(7)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(u,{next:o(1,n)}),i(t,e+" Iterator")}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){var r=n(12),o=n(5);t.exports=function(t,e){for(var n,i=o(t),u=r(i),a=u.length,l=0;a>l;)if(i[n=u[l++]]===e)return n}},function(t,e,n){var r=n(14)("meta"),o=n(11),i=n(3),u=n(4).f,a=0,l=Object.isExtensible||function(){return!0},c=!n(10)(function(){return l(Object.preventExtensions({}))}),s=function(t){u(t,r,{value:{i:"O"+ ++a,w:{}}})},f=function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!l(t))return"F";if(!e)return"E";s(t)}return t[r].i},p=function(t,e){if(!i(t,r)){if(!l(t))return!0;if(!e)return!1;s(t)}return t[r].w},_=function(t){return c&&d.NEED&&l(t)&&!i(t,r)&&s(t),t},d=t.exports={KEY:r,NEED:!1,fastKey:f,getWeak:p,onFreeze:_}},function(t,e,n){var r=n(4),o=n(9),i=n(12);t.exports=n(2)?Object.defineProperties:function(t,e){o(t);for(var n,u=i(e),a=u.length,l=0;a>l;)r.f(t,n=u[l++],e[n]);return t}},function(t,e,n){var r=n(20),o=n(13),i=n(5),u=n(25),a=n(3),l=n(31),c=Object.getOwnPropertyDescriptor;e.f=n(2)?c:function(t,e){if(t=i(t),e=u(e,!0),l)try{return c(t,e)}catch(n){}return a(t,e)?o(!r.f.call(t,e),t[e]):void 0}},function(t,e,n){var r=n(5),o=n(34).f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return o(t)}catch(e){return u.slice()}};t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?a(t):o(r(t))}},function(t,e,n){var r=n(3),o=n(76),i=n(22)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,e,n){var r=n(24),o=n(15);t.exports=function(t){return function(e,n){var i,u,a=String(o(e)),l=r(n),c=a.length;return 0>l||l>=c?t?"":void 0:(i=a.charCodeAt(l),55296>i||i>56319||l+1===c||(u=a.charCodeAt(l+1))<56320||u>57343?t?a.charAt(l):i:t?a.slice(l,l+2):(i-55296<<10)+(u-56320)+65536)}}},function(t,e,n){var r=n(24),o=Math.max,i=Math.min;t.exports=function(t,e){return t=r(t),0>t?o(t+e,0):i(t,e)}},function(t,e,n){var r=n(24),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(15);t.exports=function(t){return Object(r(t))}},function(t,e,n){"use strict";var r=n(58),o=n(66),i=n(18),u=n(5);t.exports=n(32)(Array,"Array",function(t,e){this._t=u(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):"keys"==e?o(0,n):"values"==e?o(0,t[n]):o(0,[n,t[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,e,n){var r=n(17);r(r.S+r.F*!n(2),"Object",{defineProperty:n(4).f})},function(t,e){},function(t,e,n){"use strict";var r=n(73)(!0);n(32)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){"use strict";var r=n(1),o=n(3),i=n(2),u=n(17),a=n(37),l=n(68).KEY,c=n(10),s=n(23),f=n(21),p=n(14),_=n(7),d=n(27),h=n(26),v=n(67),m=n(61),g=n(64),y=n(9),x=n(5),b=n(25),S=n(13),T=n(33),w=n(71),O=n(70),M=n(4),C=n(12),j=O.f,k=M.f,D=w.f,E=r.Symbol,P=r.JSON,A=P&&P.stringify,I="prototype",F=_("_hidden"),V=_("toPrimitive"),N={}.propertyIsEnumerable,H=s("symbol-registry"),Y=s("symbols"),L=s("op-symbols"),$=Object[I],W="function"==typeof E,q=r.QObject,R=!q||!q[I]||!q[I].findChild,J=i&&c(function(){return 7!=T(k({},"a",{get:function(){return k(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=j($,e);r&&delete $[e],k(t,e,n),r&&t!==$&&k($,e,r)}:k,z=function(t){var e=Y[t]=T(E[I]);return e._k=t,e},B=W&&"symbol"==typeof E.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof E},G=function(t,e,n){return t===$&&G(L,e,n),y(t),e=b(e,!0),y(n),o(Y,e)?(n.enumerable?(o(t,F)&&t[F][e]&&(t[F][e]=!1),n=T(n,{enumerable:S(0,!1)})):(o(t,F)||k(t,F,S(1,{})),t[F][e]=!0),J(t,e,n)):k(t,e,n)},K=function(t,e){y(t);for(var n,r=m(e=x(e)),o=0,i=r.length;i>o;)G(t,n=r[o++],e[n]);return t},Q=function(t,e){return void 0===e?T(t):K(T(t),e)},U=function(t){var e=N.call(this,t=b(t,!0));return this===$&&o(Y,t)&&!o(L,t)?!1:e||!o(this,t)||!o(Y,t)||o(this,F)&&this[F][t]?e:!0},X=function(t,e){if(t=x(t),e=b(e,!0),t!==$||!o(Y,e)||o(L,e)){var n=j(t,e);return!n||!o(Y,e)||o(t,F)&&t[F][e]||(n.enumerable=!0),n}},Z=function(t){for(var e,n=D(x(t)),r=[],i=0;n.length>i;)o(Y,e=n[i++])||e==F||e==l||r.push(e);return r},tt=function(t){for(var e,n=t===$,r=D(n?L:x(t)),i=[],u=0;r.length>u;)o(Y,e=r[u++])&&(n?o($,e):!0)&&i.push(Y[e]);return i};W||(E=function(){if(this instanceof E)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),e=function(n){this===$&&e.call(L,n),o(this,F)&&o(this[F],t)&&(this[F][t]=!1),J(this,t,S(1,n))};return i&&R&&J($,t,{configurable:!0,set:e}),z(t)},a(E[I],"toString",function(){return this._k}),O.f=X,M.f=G,n(34).f=w.f=Z,n(20).f=U,n(35).f=tt,i&&!n(19)&&a($,"propertyIsEnumerable",U,!0),d.f=function(t){return z(_(t))}),u(u.G+u.W+u.F*!W,{Symbol:E});for(var et="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),nt=0;et.length>nt;)_(et[nt++]);for(var et=C(_.store),nt=0;et.length>nt;)h(et[nt++]);u(u.S+u.F*!W,"Symbol",{"for":function(t){return o(H,t+="")?H[t]:H[t]=E(t)},keyFor:function(t){if(B(t))return v(H,t);throw TypeError(t+" is not a symbol!")},useSetter:function(){R=!0},useSimple:function(){R=!1}}),u(u.S+u.F*!W,"Object",{create:Q,defineProperty:G,defineProperties:K,getOwnPropertyDescriptor:X,getOwnPropertyNames:Z,getOwnPropertySymbols:tt}),P&&u(u.S+u.F*(!W||c(function(){var t=E();return"[null]"!=A([t])||"{}"!=A({a:t})||"{}"!=A(Object(t))})),"JSON",{stringify:function(t){if(void 0!==t&&!B(t)){for(var e,n,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);return e=r[1],"function"==typeof e&&(n=e),!n&&g(e)||(e=function(t,e){return n&&(e=n.call(this,t,e)),B(e)?void 0:e}),r[1]=e,A.apply(P,r)}}}),E[I][V]||n(6)(E[I],V,E[I].valueOf),f(E,"Symbol"),f(Math,"Math",!0),f(r.JSON,"JSON",!0)},function(t,e,n){n(26)("asyncIterator")},function(t,e,n){n(26)("observable")},function(t,e,n){n(77);for(var r=n(1),o=n(6),i=n(18),u=n(7)("toStringTag"),a=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],l=0;5>l;l++){var c=a[l],s=r[c],f=s&&s.prototype;f&&!f[u]&&o(f,u,c),i[c]=i.Array}},function(t,e){},function(t,e){},function(t,e){t.exports="<div class=vux-flexbox-item :style=style> <slot></slot> </div>"},function(t,e){t.exports="<div class=vux-flexbox :class=\"{'vux-flex-col': orient === 'vertical', 'vux-flex-row': orient === 'horizontal'}\" :style=styles> <slot></slot> </div>"},function(t,e){t.exports="<div class=vux-picker> <flexbox :gutter=0> <flexbox-item v-for=\"(index, one) in data\" style=margin-left:0> <div class=vux-picker-item :id=\"'vux-picker-' + uuid + '-' + index\"></div> </flexbox-item> </flexbox> </div>"},function(t,e,n){var r,o;r=n(39),o=n(87),t.exports=r||{},t.exports.__esModule&&(t.exports=t.exports["default"]),o&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=o)},function(t,e,n){var r,o;n(85),r=n(40),o=n(88),t.exports=r||{},t.exports.__esModule&&(t.exports=t.exports["default"]),o&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=o)},function(t,e,n){var r,o;n(86),r=n(41),o=n(89),t.exports=r||{},t.exports.__esModule&&(t.exports=t.exports["default"]),o&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=o)}])});