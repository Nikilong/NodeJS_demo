(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueInfiniteLoading"] = factory();
	else
		root["VueInfiniteLoading"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _InfiniteLoading = __webpack_require__(5);
	
	var _InfiniteLoading2 = _interopRequireDefault(_InfiniteLoading);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _InfiniteLoading2.default;
	
	
	if (typeof window !== 'undefined' && window.Vue) {
	  window.Vue.component('infinite-loading', _InfiniteLoading2.default);
	}

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(6)
	__vue_script__ = __webpack_require__(10)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src\\components\\InfiniteLoading.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(11)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-7d73c521/InfiniteLoading.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(7);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/_css-loader@0.23.1@css-loader/index.js?sourceMap!../../node_modules/_vue-loader@8.7.0@vue-loader/lib/style-rewriter.js?id=_v-7d73c521&scoped=true!../../node_modules/_less-loader@2.2.3@less-loader/index.js!../../node_modules/_vue-loader@8.7.0@vue-loader/lib/selector.js?type=style&index=0!./InfiniteLoading.vue", function() {
				var newContent = require("!!../../node_modules/_css-loader@0.23.1@css-loader/index.js?sourceMap!../../node_modules/_vue-loader@8.7.0@vue-loader/lib/style-rewriter.js?id=_v-7d73c521&scoped=true!../../node_modules/_less-loader@2.2.3@less-loader/index.js!../../node_modules/_vue-loader@8.7.0@vue-loader/lib/selector.js?type=style&index=0!./InfiniteLoading.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, ".loading-wave-dots[_v-7d73c521] {\n  position: relative;\n}\n.loading-wave-dots[_v-7d73c521]:before {\n  content: '';\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-left: -4px;\n  margin-top: -4px;\n  width: 8px;\n  height: 8px;\n  background-color: #bbb;\n  border-radius: 50%;\n  -webkit-animation: linear loading-wave-dots 2.8s infinite;\n          animation: linear loading-wave-dots 2.8s infinite;\n}\n@-webkit-keyframes loading-wave-dots {\n  0% {\n    box-shadow: -32px 0 0 #bbb, -16px 0 0 #bbb, 16px 0 0 #bbb, 32px 0 0 #bbb;\n  }\n  5% {\n    box-shadow: -32px -4px 0 #bbb, -16px 0 0 #bbb, 16px 0 0 #bbb, 32px 0 0 #bbb;\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n  10% {\n    box-shadow: -32px -6px 0 #999, -16px -4px 0 #bbb, 16px 0 0 #bbb, 32px 0 0 #bbb;\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n  15% {\n    box-shadow: -32px 2px 0 #bbb, -16px -2px 0 #999, 16px 4px 0 #bbb, 32px 4px 0 #bbb;\n    -webkit-transform: translateY(-4px);\n            transform: translateY(-4px);\n    background-color: #bbb;\n  }\n  20% {\n    box-shadow: -32px 6px 0 #bbb, -16px 4px 0 #bbb, 16px 2px 0 #bbb, 32px 6px 0 #bbb;\n    -webkit-transform: translateY(-6px);\n            transform: translateY(-6px);\n    background-color: #999;\n  }\n  25% {\n    box-shadow: -32px 2px 0 #bbb, -16px 2px 0 #bbb, 16px -4px 0 #999, 32px -2px 0 #bbb;\n    -webkit-transform: translateY(-2px);\n            transform: translateY(-2px);\n    background-color: #bbb;\n  }\n  30% {\n    box-shadow: -32px 0 0 #bbb, -16px 0 0 #bbb, 16px -2px 0 #bbb, 32px -6px 0 #999;\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n  35% {\n    box-shadow: -32px 0 0 #bbb, -16px 0 0 #bbb, 16px 0 0 #bbb, 32px -2px 0 #bbb;\n  }\n  40% {\n    box-shadow: -32px 0 0 #bbb, -16px 0 0 #bbb, 16px 0 0 #bbb, 32px 0 0 #bbb;\n  }\n  100% {\n    box-shadow: -32px 0 0 #bbb, -16px 0 0 #bbb, 16px 0 0 #bbb, 32px 0 0 #bbb;\n  }\n}\n@keyframes loading-wave-dots {\n  0% {\n    box-shadow: -32px 0 0 #bbb, -16px 0 0 #bbb, 16px 0 0 #bbb, 32px 0 0 #bbb;\n  }\n  5% {\n    box-shadow: -32px -4px 0 #bbb, -16px 0 0 #bbb, 16px 0 0 #bbb, 32px 0 0 #bbb;\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n  10% {\n    box-shadow: -32px -6px 0 #999, -16px -4px 0 #bbb, 16px 0 0 #bbb, 32px 0 0 #bbb;\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n  15% {\n    box-shadow: -32px 2px 0 #bbb, -16px -2px 0 #999, 16px 4px 0 #bbb, 32px 4px 0 #bbb;\n    -webkit-transform: translateY(-4px);\n            transform: translateY(-4px);\n    background-color: #bbb;\n  }\n  20% {\n    box-shadow: -32px 6px 0 #bbb, -16px 4px 0 #bbb, 16px 2px 0 #bbb, 32px 6px 0 #bbb;\n    -webkit-transform: translateY(-6px);\n            transform: translateY(-6px);\n    background-color: #999;\n  }\n  25% {\n    box-shadow: -32px 2px 0 #bbb, -16px 2px 0 #bbb, 16px -4px 0 #999, 32px -2px 0 #bbb;\n    -webkit-transform: translateY(-2px);\n            transform: translateY(-2px);\n    background-color: #bbb;\n  }\n  30% {\n    box-shadow: -32px 0 0 #bbb, -16px 0 0 #bbb, 16px -2px 0 #bbb, 32px -6px 0 #999;\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n  35% {\n    box-shadow: -32px 0 0 #bbb, -16px 0 0 #bbb, 16px 0 0 #bbb, 32px -2px 0 #bbb;\n  }\n  40% {\n    box-shadow: -32px 0 0 #bbb, -16px 0 0 #bbb, 16px 0 0 #bbb, 32px 0 0 #bbb;\n  }\n  100% {\n    box-shadow: -32px 0 0 #bbb, -16px 0 0 #bbb, 16px 0 0 #bbb, 32px 0 0 #bbb;\n  }\n}\n.loading-circles[_v-7d73c521] {\n  position: relative;\n}\n.loading-circles[_v-7d73c521]:before {\n  content: '';\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  margin-top: -2.5px;\n  margin-left: -2.5px;\n  width: 5px;\n  height: 5px;\n  border-radius: 50%;\n  -webkit-animation: linear loading-circles 0.75s infinite;\n          animation: linear loading-circles 0.75s infinite;\n}\n@-webkit-keyframes loading-circles {\n  0% {\n    box-shadow: 0 -12px 0 #505050, 8.52px -8.52px 0 #646464, 12px 0 0 #797979, 8.52px 8.52px 0 #8d8d8d, 0 12px 0 #a2a2a2, -8.52px 8.52px 0 #b6b6b6, -12px 0 0 #cacaca, -8.52px -8.52px 0 #dfdfdf;\n  }\n  12.5% {\n    box-shadow: 0 -12px 0 #dfdfdf, 8.52px -8.52px 0 #505050, 12px 0 0 #646464, 8.52px 8.52px 0 #797979, 0 12px 0 #8d8d8d, -8.52px 8.52px 0 #a2a2a2, -12px 0 0 #b6b6b6, -8.52px -8.52px 0 #cacaca;\n  }\n  25% {\n    box-shadow: 0 -12px 0 #cacaca, 8.52px -8.52px 0 #dfdfdf, 12px 0 0 #505050, 8.52px 8.52px 0 #646464, 0 12px 0 #797979, -8.52px 8.52px 0 #8d8d8d, -12px 0 0 #a2a2a2, -8.52px -8.52px 0 #b6b6b6;\n  }\n  37.5% {\n    box-shadow: 0 -12px 0 #b6b6b6, 8.52px -8.52px 0 #cacaca, 12px 0 0 #dfdfdf, 8.52px 8.52px 0 #505050, 0 12px 0 #646464, -8.52px 8.52px 0 #797979, -12px 0 0 #8d8d8d, -8.52px -8.52px 0 #a2a2a2;\n  }\n  50% {\n    box-shadow: 0 -12px 0 #a2a2a2, 8.52px -8.52px 0 #b6b6b6, 12px 0 0 #cacaca, 8.52px 8.52px 0 #dfdfdf, 0 12px 0 #505050, -8.52px 8.52px 0 #646464, -12px 0 0 #797979, -8.52px -8.52px 0 #8d8d8d;\n  }\n  62.5% {\n    box-shadow: 0 -12px 0 #8d8d8d, 8.52px -8.52px 0 #a2a2a2, 12px 0 0 #b6b6b6, 8.52px 8.52px 0 #cacaca, 0 12px 0 #dfdfdf, -8.52px 8.52px 0 #505050, -12px 0 0 #646464, -8.52px -8.52px 0 #797979;\n  }\n  75% {\n    box-shadow: 0 -12px 0 #797979, 8.52px -8.52px 0 #8d8d8d, 12px 0 0 #a2a2a2, 8.52px 8.52px 0 #b6b6b6, 0 12px 0 #cacaca, -8.52px 8.52px 0 #dfdfdf, -12px 0 0 #505050, -8.52px -8.52px 0 #646464;\n  }\n  87.5% {\n    box-shadow: 0 -12px 0 #646464, 8.52px -8.52px 0 #797979, 12px 0 0 #8d8d8d, 8.52px 8.52px 0 #a2a2a2, 0 12px 0 #b6b6b6, -8.52px 8.52px 0 #cacaca, -12px 0 0 #dfdfdf, -8.52px -8.52px 0 #505050;\n  }\n  100% {\n    box-shadow: 0 -12px 0 #505050, 8.52px -8.52px 0 #646464, 12px 0 0 #797979, 8.52px 8.52px 0 #8d8d8d, 0 12px 0 #a2a2a2, -8.52px 8.52px 0 #b6b6b6, -12px 0 0 #cacaca, -8.52px -8.52px 0 #dfdfdf;\n  }\n}\n@keyframes loading-circles {\n  0% {\n    box-shadow: 0 -12px 0 #505050, 8.52px -8.52px 0 #646464, 12px 0 0 #797979, 8.52px 8.52px 0 #8d8d8d, 0 12px 0 #a2a2a2, -8.52px 8.52px 0 #b6b6b6, -12px 0 0 #cacaca, -8.52px -8.52px 0 #dfdfdf;\n  }\n  12.5% {\n    box-shadow: 0 -12px 0 #dfdfdf, 8.52px -8.52px 0 #505050, 12px 0 0 #646464, 8.52px 8.52px 0 #797979, 0 12px 0 #8d8d8d, -8.52px 8.52px 0 #a2a2a2, -12px 0 0 #b6b6b6, -8.52px -8.52px 0 #cacaca;\n  }\n  25% {\n    box-shadow: 0 -12px 0 #cacaca, 8.52px -8.52px 0 #dfdfdf, 12px 0 0 #505050, 8.52px 8.52px 0 #646464, 0 12px 0 #797979, -8.52px 8.52px 0 #8d8d8d, -12px 0 0 #a2a2a2, -8.52px -8.52px 0 #b6b6b6;\n  }\n  37.5% {\n    box-shadow: 0 -12px 0 #b6b6b6, 8.52px -8.52px 0 #cacaca, 12px 0 0 #dfdfdf, 8.52px 8.52px 0 #505050, 0 12px 0 #646464, -8.52px 8.52px 0 #797979, -12px 0 0 #8d8d8d, -8.52px -8.52px 0 #a2a2a2;\n  }\n  50% {\n    box-shadow: 0 -12px 0 #a2a2a2, 8.52px -8.52px 0 #b6b6b6, 12px 0 0 #cacaca, 8.52px 8.52px 0 #dfdfdf, 0 12px 0 #505050, -8.52px 8.52px 0 #646464, -12px 0 0 #797979, -8.52px -8.52px 0 #8d8d8d;\n  }\n  62.5% {\n    box-shadow: 0 -12px 0 #8d8d8d, 8.52px -8.52px 0 #a2a2a2, 12px 0 0 #b6b6b6, 8.52px 8.52px 0 #cacaca, 0 12px 0 #dfdfdf, -8.52px 8.52px 0 #505050, -12px 0 0 #646464, -8.52px -8.52px 0 #797979;\n  }\n  75% {\n    box-shadow: 0 -12px 0 #797979, 8.52px -8.52px 0 #8d8d8d, 12px 0 0 #a2a2a2, 8.52px 8.52px 0 #b6b6b6, 0 12px 0 #cacaca, -8.52px 8.52px 0 #dfdfdf, -12px 0 0 #505050, -8.52px -8.52px 0 #646464;\n  }\n  87.5% {\n    box-shadow: 0 -12px 0 #646464, 8.52px -8.52px 0 #797979, 12px 0 0 #8d8d8d, 8.52px 8.52px 0 #a2a2a2, 0 12px 0 #b6b6b6, -8.52px 8.52px 0 #cacaca, -12px 0 0 #dfdfdf, -8.52px -8.52px 0 #505050;\n  }\n  100% {\n    box-shadow: 0 -12px 0 #505050, 8.52px -8.52px 0 #646464, 12px 0 0 #797979, 8.52px 8.52px 0 #8d8d8d, 0 12px 0 #a2a2a2, -8.52px 8.52px 0 #b6b6b6, -12px 0 0 #cacaca, -8.52px -8.52px 0 #dfdfdf;\n  }\n}\n.loading-bubbles[_v-7d73c521] {\n  position: relative;\n}\n.loading-bubbles[_v-7d73c521]:before {\n  content: '';\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  margin-top: -0.5px;\n  margin-left: -0.5px;\n  width: 1px;\n  height: 1px;\n  border-radius: 50%;\n  -webkit-animation: linear loading-bubbles 0.85s infinite;\n          animation: linear loading-bubbles 0.85s infinite;\n}\n@-webkit-keyframes loading-bubbles {\n  0% {\n    box-shadow: 0 -12px 0 0.4px #666, 8.52px -8.52px 0 0.8px #666, 12px 0 0 1.2px #666, 8.52px 8.52px 0 1.6px #666, 0 12px 0 2px #666, -8.52px 8.52px 0 2.4px #666, -12px 0 0 2.8px #666, -8.52px -8.52px 0 3.2px #666;\n  }\n  12.5% {\n    box-shadow: 0 -12px 0 3.2px #666, 8.52px -8.52px 0 0.4px #666, 12px 0 0 0.8px #666, 8.52px 8.52px 0 1.2px #666, 0 12px 0 1.6px #666, -8.52px 8.52px 0 2px #666, -12px 0 0 2.4px #666, -8.52px -8.52px 0 2.8px #666;\n  }\n  25% {\n    box-shadow: 0 -12px 0 2.8px #666, 8.52px -8.52px 0 3.2px #666, 12px 0 0 0.4px #666, 8.52px 8.52px 0 0.8px #666, 0 12px 0 1.2px #666, -8.52px 8.52px 0 1.6px #666, -12px 0 0 2px #666, -8.52px -8.52px 0 2.4px #666;\n  }\n  37.5% {\n    box-shadow: 0 -12px 0 2.4px #666, 8.52px -8.52px 0 2.8px #666, 12px 0 0 3.2px #666, 8.52px 8.52px 0 0.4px #666, 0 12px 0 0.8px #666, -8.52px 8.52px 0 1.2px #666, -12px 0 0 1.6px #666, -8.52px -8.52px 0 2px #666;\n  }\n  50% {\n    box-shadow: 0 -12px 0 2px #666, 8.52px -8.52px 0 2.4px #666, 12px 0 0 2.8px #666, 8.52px 8.52px 0 3.2px #666, 0 12px 0 0.4px #666, -8.52px 8.52px 0 0.8px #666, -12px 0 0 1.2px #666, -8.52px -8.52px 0 1.6px #666;\n  }\n  62.5% {\n    box-shadow: 0 -12px 0 1.6px #666, 8.52px -8.52px 0 2px #666, 12px 0 0 2.4px #666, 8.52px 8.52px 0 2.8px #666, 0 12px 0 3.2px #666, -8.52px 8.52px 0 0.4px #666, -12px 0 0 0.8px #666, -8.52px -8.52px 0 1.2px #666;\n  }\n  75% {\n    box-shadow: 0 -12px 0 1.2px #666, 8.52px -8.52px 0 1.6px #666, 12px 0 0 2px #666, 8.52px 8.52px 0 2.4px #666, 0 12px 0 2.8px #666, -8.52px 8.52px 0 3.2px #666, -12px 0 0 0.4px #666, -8.52px -8.52px 0 0.8px #666;\n  }\n  87.5% {\n    box-shadow: 0 -12px 0 0.8px #666, 8.52px -8.52px 0 1.2px #666, 12px 0 0 1.6px #666, 8.52px 8.52px 0 2px #666, 0 12px 0 2.4px #666, -8.52px 8.52px 0 2.8px #666, -12px 0 0 3.2px #666, -8.52px -8.52px 0 0.4px #666;\n  }\n  100% {\n    box-shadow: 0 -12px 0 0.4px #666, 8.52px -8.52px 0 0.8px #666, 12px 0 0 1.2px #666, 8.52px 8.52px 0 1.6px #666, 0 12px 0 2px #666, -8.52px 8.52px 0 2.4px #666, -12px 0 0 2.8px #666, -8.52px -8.52px 0 3.2px #666;\n  }\n}\n@keyframes loading-bubbles {\n  0% {\n    box-shadow: 0 -12px 0 0.4px #666, 8.52px -8.52px 0 0.8px #666, 12px 0 0 1.2px #666, 8.52px 8.52px 0 1.6px #666, 0 12px 0 2px #666, -8.52px 8.52px 0 2.4px #666, -12px 0 0 2.8px #666, -8.52px -8.52px 0 3.2px #666;\n  }\n  12.5% {\n    box-shadow: 0 -12px 0 3.2px #666, 8.52px -8.52px 0 0.4px #666, 12px 0 0 0.8px #666, 8.52px 8.52px 0 1.2px #666, 0 12px 0 1.6px #666, -8.52px 8.52px 0 2px #666, -12px 0 0 2.4px #666, -8.52px -8.52px 0 2.8px #666;\n  }\n  25% {\n    box-shadow: 0 -12px 0 2.8px #666, 8.52px -8.52px 0 3.2px #666, 12px 0 0 0.4px #666, 8.52px 8.52px 0 0.8px #666, 0 12px 0 1.2px #666, -8.52px 8.52px 0 1.6px #666, -12px 0 0 2px #666, -8.52px -8.52px 0 2.4px #666;\n  }\n  37.5% {\n    box-shadow: 0 -12px 0 2.4px #666, 8.52px -8.52px 0 2.8px #666, 12px 0 0 3.2px #666, 8.52px 8.52px 0 0.4px #666, 0 12px 0 0.8px #666, -8.52px 8.52px 0 1.2px #666, -12px 0 0 1.6px #666, -8.52px -8.52px 0 2px #666;\n  }\n  50% {\n    box-shadow: 0 -12px 0 2px #666, 8.52px -8.52px 0 2.4px #666, 12px 0 0 2.8px #666, 8.52px 8.52px 0 3.2px #666, 0 12px 0 0.4px #666, -8.52px 8.52px 0 0.8px #666, -12px 0 0 1.2px #666, -8.52px -8.52px 0 1.6px #666;\n  }\n  62.5% {\n    box-shadow: 0 -12px 0 1.6px #666, 8.52px -8.52px 0 2px #666, 12px 0 0 2.4px #666, 8.52px 8.52px 0 2.8px #666, 0 12px 0 3.2px #666, -8.52px 8.52px 0 0.4px #666, -12px 0 0 0.8px #666, -8.52px -8.52px 0 1.2px #666;\n  }\n  75% {\n    box-shadow: 0 -12px 0 1.2px #666, 8.52px -8.52px 0 1.6px #666, 12px 0 0 2px #666, 8.52px 8.52px 0 2.4px #666, 0 12px 0 2.8px #666, -8.52px 8.52px 0 3.2px #666, -12px 0 0 0.4px #666, -8.52px -8.52px 0 0.8px #666;\n  }\n  87.5% {\n    box-shadow: 0 -12px 0 0.8px #666, 8.52px -8.52px 0 1.2px #666, 12px 0 0 1.6px #666, 8.52px 8.52px 0 2px #666, 0 12px 0 2.4px #666, -8.52px 8.52px 0 2.8px #666, -12px 0 0 3.2px #666, -8.52px -8.52px 0 0.4px #666;\n  }\n  100% {\n    box-shadow: 0 -12px 0 0.4px #666, 8.52px -8.52px 0 0.8px #666, 12px 0 0 1.2px #666, 8.52px 8.52px 0 1.6px #666, 0 12px 0 2px #666, -8.52px 8.52px 0 2.4px #666, -12px 0 0 2.8px #666, -8.52px -8.52px 0 3.2px #666;\n  }\n}\n.loading-default[_v-7d73c521] {\n  position: relative;\n  border: 1px solid #999;\n  -webkit-animation: ease loading-rotating 1.5s infinite;\n          animation: ease loading-rotating 1.5s infinite;\n}\n.loading-default[_v-7d73c521]:before {\n  content: '';\n  position: absolute;\n  display: block;\n  top: 0;\n  left: 50%;\n  margin-top: -3px;\n  margin-left: -3px;\n  width: 6px;\n  height: 6px;\n  background-color: #999;\n  border-radius: 50%;\n}\n.loading-spiral[_v-7d73c521] {\n  border: 2px solid #777;\n  border-right-color: transparent;\n  -webkit-animation: linear loading-rotating 0.85s infinite;\n          animation: linear loading-rotating 0.85s infinite;\n}\n@-webkit-keyframes loading-rotating {\n  0% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes loading-rotating {\n  0% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.infinite-loading-container[_v-7d73c521] {\n  clear: both;\n  text-align: center;\n}\n.infinite-loading-container *[class^=loading-][_v-7d73c521] {\n  display: inline-block;\n  margin: 15px 0;\n  width: 28px;\n  height: 28px;\n  font-size: 28px;\n  line-height: 28px;\n  border-radius: 50%;\n}\n.header[_v-7d73c521] {\n  background-color: #99CCFF;\n}\n.down-tip[_v-7d73c521] {\n  height: 50px;\n  display: block;\n  -webkit-animation: showDownTip 1s;\n          animation: showDownTip 1s;\n}\n.refresh-tip[_v-7d73c521] {\n  height: 35px;\n  display: block;\n  -webkit-animation: showRefreshTip 2s;\n          animation: showRefreshTip 2s;\n}\n.refresh-complete[_v-7d73c521] {\n  height: 0px;\n  display: none;\n  -webkit-animation: refreshComplete 1s;\n          animation: refreshComplete 1s;\n}\n.infinite-status-prompt[_v-7d73c521] {\n  color: #666;\n  font-size: 14px;\n  text-align: center;\n  padding: 10px 0;\n}\n@-webkit-keyframes showDownTip {\n  from {\n    height: 0px;\n    display: none;\n  }\n  to {\n    height: 50px;\n    display: block;\n  }\n}\n@keyframes showDownTip {\n  from {\n    height: 0px;\n    display: none;\n  }\n  to {\n    height: 50px;\n    display: block;\n  }\n}\n@-webkit-keyframes showRefreshTip {\n  from {\n    height: 50px;\n  }\n  to {\n    height: 30px;\n  }\n}\n@keyframes showRefreshTip {\n  from {\n    height: 50px;\n  }\n  to {\n    height: 30px;\n  }\n}\n@-webkit-keyframes refreshComplete {\n  from {\n    height: 35px;\n    display: block;\n  }\n  to {\n    height: 0px;\n    display: none;\n  }\n}\n@keyframes refreshComplete {\n  from {\n    height: 35px;\n    display: block;\n  }\n  to {\n    height: 0px;\n    display: none;\n  }\n}\n", "", {"version":3,"sources":["/./src/components/InfiniteLoading.vue"],"names":[],"mappings":"AAAA;EACE,mBAAmB;CACpB;AACD;EACE,YAAY;EACZ,mBAAmB;EACnB,SAAS;EACT,UAAU;EACV,kBAAkB;EAClB,iBAAiB;EACjB,WAAW;EACX,YAAY;EACZ,uBAAuB;EACvB,mBAAmB;EACnB,0DAAkD;UAAlD,kDAAkD;CACnD;AACD;EACE;IACE,yEAAyE;GAC1E;EACD;IACE,4EAA4E;IAC5E,iCAAyB;YAAzB,yBAAyB;GAC1B;EACD;IACE,+EAA+E;IAC/E,iCAAyB;YAAzB,yBAAyB;GAC1B;EACD;IACE,kFAAkF;IAClF,oCAA4B;YAA5B,4BAA4B;IAC5B,uBAAuB;GACxB;EACD;IACE,iFAAiF;IACjF,oCAA4B;YAA5B,4BAA4B;IAC5B,uBAAuB;GACxB;EACD;IACE,mFAAmF;IACnF,oCAA4B;YAA5B,4BAA4B;IAC5B,uBAAuB;GACxB;EACD;IACE,+EAA+E;IAC/E,iCAAyB;YAAzB,yBAAyB;GAC1B;EACD;IACE,4EAA4E;GAC7E;EACD;IACE,yEAAyE;GAC1E;EACD;IACE,yEAAyE;GAC1E;CACF;AAxCD;EACE;IACE,yEAAyE;GAC1E;EACD;IACE,4EAA4E;IAC5E,iCAAyB;YAAzB,yBAAyB;GAC1B;EACD;IACE,+EAA+E;IAC/E,iCAAyB;YAAzB,yBAAyB;GAC1B;EACD;IACE,kFAAkF;IAClF,oCAA4B;YAA5B,4BAA4B;IAC5B,uBAAuB;GACxB;EACD;IACE,iFAAiF;IACjF,oCAA4B;YAA5B,4BAA4B;IAC5B,uBAAuB;GACxB;EACD;IACE,mFAAmF;IACnF,oCAA4B;YAA5B,4BAA4B;IAC5B,uBAAuB;GACxB;EACD;IACE,+EAA+E;IAC/E,iCAAyB;YAAzB,yBAAyB;GAC1B;EACD;IACE,4EAA4E;GAC7E;EACD;IACE,yEAAyE;GAC1E;EACD;IACE,yEAAyE;GAC1E;CACF;AACD;EACE,mBAAmB;CACpB;AACD;EACE,YAAY;EACZ,mBAAmB;EACnB,UAAU;EACV,SAAS;EACT,mBAAmB;EACnB,oBAAoB;EACpB,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,yDAAiD;UAAjD,iDAAiD;CAClD;AACD;EACE;IACE,6LAA6L;GAC9L;EACD;IACE,6LAA6L;GAC9L;EACD;IACE,6LAA6L;GAC9L;EACD;IACE,6LAA6L;GAC9L;EACD;IACE,6LAA6L;GAC9L;EACD;IACE,6LAA6L;GAC9L;EACD;IACE,6LAA6L;GAC9L;EACD;IACE,6LAA6L;GAC9L;EACD;IACE,6LAA6L;GAC9L;CACF;AA5BD;EACE;IACE,6LAA6L;GAC9L;EACD;IACE,6LAA6L;GAC9L;EACD;IACE,6LAA6L;GAC9L;EACD;IACE,6LAA6L;GAC9L;EACD;IACE,6LAA6L;GAC9L;EACD;IACE,6LAA6L;GAC9L;EACD;IACE,6LAA6L;GAC9L;EACD;IACE,6LAA6L;GAC9L;EACD;IACE,6LAA6L;GAC9L;CACF;AACD;EACE,mBAAmB;CACpB;AACD;EACE,YAAY;EACZ,mBAAmB;EACnB,UAAU;EACV,SAAS;EACT,mBAAmB;EACnB,oBAAoB;EACpB,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,yDAAiD;UAAjD,iDAAiD;CAClD;AACD;EACE;IACE,mNAAmN;GACpN;EACD;IACE,mNAAmN;GACpN;EACD;IACE,mNAAmN;GACpN;EACD;IACE,mNAAmN;GACpN;EACD;IACE,mNAAmN;GACpN;EACD;IACE,mNAAmN;GACpN;EACD;IACE,mNAAmN;GACpN;EACD;IACE,mNAAmN;GACpN;EACD;IACE,mNAAmN;GACpN;CACF;AA5BD;EACE;IACE,mNAAmN;GACpN;EACD;IACE,mNAAmN;GACpN;EACD;IACE,mNAAmN;GACpN;EACD;IACE,mNAAmN;GACpN;EACD;IACE,mNAAmN;GACpN;EACD;IACE,mNAAmN;GACpN;EACD;IACE,mNAAmN;GACpN;EACD;IACE,mNAAmN;GACpN;EACD;IACE,mNAAmN;GACpN;CACF;AACD;EACE,mBAAmB;EACnB,uBAAuB;EACvB,uDAA+C;UAA/C,+CAA+C;CAChD;AACD;EACE,YAAY;EACZ,mBAAmB;EACnB,eAAe;EACf,OAAO;EACP,UAAU;EACV,iBAAiB;EACjB,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,uBAAuB;EACvB,mBAAmB;CACpB;AACD;EACE,uBAAuB;EACvB,gCAAgC;EAChC,0DAAkD;UAAlD,kDAAkD;CACnD;AACD;EACE;IACE,6BAAqB;YAArB,qBAAqB;GACtB;EACD;IACE,kCAA0B;YAA1B,0BAA0B;GAC3B;CACF;AAPD;EACE;IACE,6BAAqB;YAArB,qBAAqB;GACtB;EACD;IACE,kCAA0B;YAA1B,0BAA0B;GAC3B;CACF;AACD;EACE,YAAY;EACZ,mBAAmB;CACpB;AACD;EACE,sBAAsB;EACtB,eAAe;EACf,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,kBAAkB;EAClB,mBAAmB;CACpB;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,aAAa;EACb,eAAe;EACf,kCAA0B;UAA1B,0BAA0B;CAC3B;AACD;EACE,aAAa;EACb,eAAe;EACf,qCAA6B;UAA7B,6BAA6B;CAC9B;AACD;EACE,YAAY;EACZ,cAAc;EACd,sCAA8B;UAA9B,8BAA8B;CAC/B;AACD;EACE,YAAY;EACZ,gBAAgB;EAChB,mBAAmB;EACnB,gBAAgB;CACjB;AACD;EACE;IACE,YAAY;IACZ,cAAc;GACf;EACD;IACE,aAAa;IACb,eAAe;GAChB;CACF;AATD;EACE;IACE,YAAY;IACZ,cAAc;GACf;EACD;IACE,aAAa;IACb,eAAe;GAChB;CACF;AACD;EACE;IACE,aAAa;GACd;EACD;IACE,aAAa;GACd;CACF;AAPD;EACE;IACE,aAAa;GACd;EACD;IACE,aAAa;GACd;CACF;AACD;EACE;IACE,aAAa;IACb,eAAe;GAChB;EACD;IACE,YAAY;IACZ,cAAc;GACf;CACF;AATD;EACE;IACE,aAAa;IACb,eAAe;GAChB;EACD;IACE,YAAY;IACZ,cAAc;GACf;CACF","file":"InfiniteLoading.vue","sourcesContent":[".loading-wave-dots {\n  position: relative;\n}\n.loading-wave-dots:before {\n  content: '';\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-left: -4px;\n  margin-top: -4px;\n  width: 8px;\n  height: 8px;\n  background-color: #bbb;\n  border-radius: 50%;\n  animation: linear loading-wave-dots 2.8s infinite;\n}\n@keyframes loading-wave-dots {\n  0% {\n    box-shadow: -32px 0 0 #bbb, -16px 0 0 #bbb, 16px 0 0 #bbb, 32px 0 0 #bbb;\n  }\n  5% {\n    box-shadow: -32px -4px 0 #bbb, -16px 0 0 #bbb, 16px 0 0 #bbb, 32px 0 0 #bbb;\n    transform: translateY(0);\n  }\n  10% {\n    box-shadow: -32px -6px 0 #999, -16px -4px 0 #bbb, 16px 0 0 #bbb, 32px 0 0 #bbb;\n    transform: translateY(0);\n  }\n  15% {\n    box-shadow: -32px 2px 0 #bbb, -16px -2px 0 #999, 16px 4px 0 #bbb, 32px 4px 0 #bbb;\n    transform: translateY(-4px);\n    background-color: #bbb;\n  }\n  20% {\n    box-shadow: -32px 6px 0 #bbb, -16px 4px 0 #bbb, 16px 2px 0 #bbb, 32px 6px 0 #bbb;\n    transform: translateY(-6px);\n    background-color: #999;\n  }\n  25% {\n    box-shadow: -32px 2px 0 #bbb, -16px 2px 0 #bbb, 16px -4px 0 #999, 32px -2px 0 #bbb;\n    transform: translateY(-2px);\n    background-color: #bbb;\n  }\n  30% {\n    box-shadow: -32px 0 0 #bbb, -16px 0 0 #bbb, 16px -2px 0 #bbb, 32px -6px 0 #999;\n    transform: translateY(0);\n  }\n  35% {\n    box-shadow: -32px 0 0 #bbb, -16px 0 0 #bbb, 16px 0 0 #bbb, 32px -2px 0 #bbb;\n  }\n  40% {\n    box-shadow: -32px 0 0 #bbb, -16px 0 0 #bbb, 16px 0 0 #bbb, 32px 0 0 #bbb;\n  }\n  100% {\n    box-shadow: -32px 0 0 #bbb, -16px 0 0 #bbb, 16px 0 0 #bbb, 32px 0 0 #bbb;\n  }\n}\n.loading-circles {\n  position: relative;\n}\n.loading-circles:before {\n  content: '';\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  margin-top: -2.5px;\n  margin-left: -2.5px;\n  width: 5px;\n  height: 5px;\n  border-radius: 50%;\n  animation: linear loading-circles 0.75s infinite;\n}\n@keyframes loading-circles {\n  0% {\n    box-shadow: 0 -12px 0 #505050, 8.52px -8.52px 0 #646464, 12px 0 0 #797979, 8.52px 8.52px 0 #8d8d8d, 0 12px 0 #a2a2a2, -8.52px 8.52px 0 #b6b6b6, -12px 0 0 #cacaca, -8.52px -8.52px 0 #dfdfdf;\n  }\n  12.5% {\n    box-shadow: 0 -12px 0 #dfdfdf, 8.52px -8.52px 0 #505050, 12px 0 0 #646464, 8.52px 8.52px 0 #797979, 0 12px 0 #8d8d8d, -8.52px 8.52px 0 #a2a2a2, -12px 0 0 #b6b6b6, -8.52px -8.52px 0 #cacaca;\n  }\n  25% {\n    box-shadow: 0 -12px 0 #cacaca, 8.52px -8.52px 0 #dfdfdf, 12px 0 0 #505050, 8.52px 8.52px 0 #646464, 0 12px 0 #797979, -8.52px 8.52px 0 #8d8d8d, -12px 0 0 #a2a2a2, -8.52px -8.52px 0 #b6b6b6;\n  }\n  37.5% {\n    box-shadow: 0 -12px 0 #b6b6b6, 8.52px -8.52px 0 #cacaca, 12px 0 0 #dfdfdf, 8.52px 8.52px 0 #505050, 0 12px 0 #646464, -8.52px 8.52px 0 #797979, -12px 0 0 #8d8d8d, -8.52px -8.52px 0 #a2a2a2;\n  }\n  50% {\n    box-shadow: 0 -12px 0 #a2a2a2, 8.52px -8.52px 0 #b6b6b6, 12px 0 0 #cacaca, 8.52px 8.52px 0 #dfdfdf, 0 12px 0 #505050, -8.52px 8.52px 0 #646464, -12px 0 0 #797979, -8.52px -8.52px 0 #8d8d8d;\n  }\n  62.5% {\n    box-shadow: 0 -12px 0 #8d8d8d, 8.52px -8.52px 0 #a2a2a2, 12px 0 0 #b6b6b6, 8.52px 8.52px 0 #cacaca, 0 12px 0 #dfdfdf, -8.52px 8.52px 0 #505050, -12px 0 0 #646464, -8.52px -8.52px 0 #797979;\n  }\n  75% {\n    box-shadow: 0 -12px 0 #797979, 8.52px -8.52px 0 #8d8d8d, 12px 0 0 #a2a2a2, 8.52px 8.52px 0 #b6b6b6, 0 12px 0 #cacaca, -8.52px 8.52px 0 #dfdfdf, -12px 0 0 #505050, -8.52px -8.52px 0 #646464;\n  }\n  87.5% {\n    box-shadow: 0 -12px 0 #646464, 8.52px -8.52px 0 #797979, 12px 0 0 #8d8d8d, 8.52px 8.52px 0 #a2a2a2, 0 12px 0 #b6b6b6, -8.52px 8.52px 0 #cacaca, -12px 0 0 #dfdfdf, -8.52px -8.52px 0 #505050;\n  }\n  100% {\n    box-shadow: 0 -12px 0 #505050, 8.52px -8.52px 0 #646464, 12px 0 0 #797979, 8.52px 8.52px 0 #8d8d8d, 0 12px 0 #a2a2a2, -8.52px 8.52px 0 #b6b6b6, -12px 0 0 #cacaca, -8.52px -8.52px 0 #dfdfdf;\n  }\n}\n.loading-bubbles {\n  position: relative;\n}\n.loading-bubbles:before {\n  content: '';\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  margin-top: -0.5px;\n  margin-left: -0.5px;\n  width: 1px;\n  height: 1px;\n  border-radius: 50%;\n  animation: linear loading-bubbles 0.85s infinite;\n}\n@keyframes loading-bubbles {\n  0% {\n    box-shadow: 0 -12px 0 0.4px #666, 8.52px -8.52px 0 0.8px #666, 12px 0 0 1.2px #666, 8.52px 8.52px 0 1.6px #666, 0 12px 0 2px #666, -8.52px 8.52px 0 2.4px #666, -12px 0 0 2.8px #666, -8.52px -8.52px 0 3.2px #666;\n  }\n  12.5% {\n    box-shadow: 0 -12px 0 3.2px #666, 8.52px -8.52px 0 0.4px #666, 12px 0 0 0.8px #666, 8.52px 8.52px 0 1.2px #666, 0 12px 0 1.6px #666, -8.52px 8.52px 0 2px #666, -12px 0 0 2.4px #666, -8.52px -8.52px 0 2.8px #666;\n  }\n  25% {\n    box-shadow: 0 -12px 0 2.8px #666, 8.52px -8.52px 0 3.2px #666, 12px 0 0 0.4px #666, 8.52px 8.52px 0 0.8px #666, 0 12px 0 1.2px #666, -8.52px 8.52px 0 1.6px #666, -12px 0 0 2px #666, -8.52px -8.52px 0 2.4px #666;\n  }\n  37.5% {\n    box-shadow: 0 -12px 0 2.4px #666, 8.52px -8.52px 0 2.8px #666, 12px 0 0 3.2px #666, 8.52px 8.52px 0 0.4px #666, 0 12px 0 0.8px #666, -8.52px 8.52px 0 1.2px #666, -12px 0 0 1.6px #666, -8.52px -8.52px 0 2px #666;\n  }\n  50% {\n    box-shadow: 0 -12px 0 2px #666, 8.52px -8.52px 0 2.4px #666, 12px 0 0 2.8px #666, 8.52px 8.52px 0 3.2px #666, 0 12px 0 0.4px #666, -8.52px 8.52px 0 0.8px #666, -12px 0 0 1.2px #666, -8.52px -8.52px 0 1.6px #666;\n  }\n  62.5% {\n    box-shadow: 0 -12px 0 1.6px #666, 8.52px -8.52px 0 2px #666, 12px 0 0 2.4px #666, 8.52px 8.52px 0 2.8px #666, 0 12px 0 3.2px #666, -8.52px 8.52px 0 0.4px #666, -12px 0 0 0.8px #666, -8.52px -8.52px 0 1.2px #666;\n  }\n  75% {\n    box-shadow: 0 -12px 0 1.2px #666, 8.52px -8.52px 0 1.6px #666, 12px 0 0 2px #666, 8.52px 8.52px 0 2.4px #666, 0 12px 0 2.8px #666, -8.52px 8.52px 0 3.2px #666, -12px 0 0 0.4px #666, -8.52px -8.52px 0 0.8px #666;\n  }\n  87.5% {\n    box-shadow: 0 -12px 0 0.8px #666, 8.52px -8.52px 0 1.2px #666, 12px 0 0 1.6px #666, 8.52px 8.52px 0 2px #666, 0 12px 0 2.4px #666, -8.52px 8.52px 0 2.8px #666, -12px 0 0 3.2px #666, -8.52px -8.52px 0 0.4px #666;\n  }\n  100% {\n    box-shadow: 0 -12px 0 0.4px #666, 8.52px -8.52px 0 0.8px #666, 12px 0 0 1.2px #666, 8.52px 8.52px 0 1.6px #666, 0 12px 0 2px #666, -8.52px 8.52px 0 2.4px #666, -12px 0 0 2.8px #666, -8.52px -8.52px 0 3.2px #666;\n  }\n}\n.loading-default {\n  position: relative;\n  border: 1px solid #999;\n  animation: ease loading-rotating 1.5s infinite;\n}\n.loading-default:before {\n  content: '';\n  position: absolute;\n  display: block;\n  top: 0;\n  left: 50%;\n  margin-top: -3px;\n  margin-left: -3px;\n  width: 6px;\n  height: 6px;\n  background-color: #999;\n  border-radius: 50%;\n}\n.loading-spiral {\n  border: 2px solid #777;\n  border-right-color: transparent;\n  animation: linear loading-rotating 0.85s infinite;\n}\n@keyframes loading-rotating {\n  0% {\n    transform: rotate(0);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.infinite-loading-container {\n  clear: both;\n  text-align: center;\n}\n.infinite-loading-container *[class^=loading-] {\n  display: inline-block;\n  margin: 15px 0;\n  width: 28px;\n  height: 28px;\n  font-size: 28px;\n  line-height: 28px;\n  border-radius: 50%;\n}\n.header {\n  background-color: #99CCFF;\n}\n.down-tip {\n  height: 50px;\n  display: block;\n  animation: showDownTip 1s;\n}\n.refresh-tip {\n  height: 35px;\n  display: block;\n  animation: showRefreshTip 2s;\n}\n.refresh-complete {\n  height: 0px;\n  display: none;\n  animation: refreshComplete 1s;\n}\n.infinite-status-prompt {\n  color: #666;\n  font-size: 14px;\n  text-align: center;\n  padding: 10px 0;\n}\n@keyframes showDownTip {\n  from {\n    height: 0px;\n    display: none;\n  }\n  to {\n    height: 50px;\n    display: block;\n  }\n}\n@keyframes showRefreshTip {\n  from {\n    height: 50px;\n  }\n  to {\n    height: 30px;\n  }\n}\n@keyframes refreshComplete {\n  from {\n    height: 35px;\n    display: block;\n  }\n  to {\n    height: 0px;\n    display: none;\n  }\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),
/* 8 */
/***/ (function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if (media) {
			styleElement.setAttribute("media", media);
		}
	
		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ }),
/* 10 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var spinnerMapping = {
	  bubbles: 'loading-bubbles',
	  circles: 'loading-circles',
	  default: 'loading-default',
	  spiral: 'loading-spiral',
	  waveDots: 'loading-wave-dots'
	};
	
	function getScrollParent(elm) {
	  if (elm.tagName === 'BODY') {
	    return window;
	  } else if (elm.nodeType == 1 && ['scroll', 'auto'].indexOf(getComputedStyle(elm).overflowY) > -1) {
	    return elm;
	  }
	  return getScrollParent(elm.parentNode);
	}
	
	function getScrollTop(element) {
	  var scrollTop = void 0;
	  if (element.tagName !== 'BODY') {
	    scrollTop = element.scrollTop;
	  } else {
	    scrollTop = document.documentElement.scrollTop;
	  }
	  return scrollTop;
	}
	
	function getScrollHeight(element) {
	  var scrollHeight = void 0;
	  if (element.tagName !== 'BODY') {
	    scrollHeight = element.scrollHeight;
	  } else {
	    scrollHeight = document.documentElement.scrollHeight;
	  }
	  return scrollHeight;
	}
	
	function getVisibleHeight(element) {
	  var offsetHeight = void 0;
	  if (element.tagName !== 'BODY') {
	    offsetHeight = element.offsetHeight;
	  } else {
	    offsetHeight = document.documentElement.offsetHeight;
	  }
	  return offsetHeight;
	}
	
	function isDownTrigger(element) {
	  return getScrollTop(element) + getVisibleHeight(element) + 5 >= getScrollHeight(element);
	}
	
	exports.default = {
	  data: function data() {
	    return {
	      scrollParent: null,
	      scrollHandler: null,
	      isLoading: false,
	      isComplete: false,
	      isFirstLoad: true,
	      isNoData: false,
	      startY: 0,
	      currentY: 0,
	      startScroll: 0,
	      moveY: 0,
	      moveDirection: 'up',
	      pullDownheight: 0,
	      touching: false,
	      downTipMsg: '',
	      disableScrollLoad: false };
	  },
	
	  computed: {
	    spinnerType: function spinnerType() {
	      return spinnerMapping[this.spinner] || spinnerMapping.default;
	    },
	    isPullDown: function isPullDown() {
	      return this.moveDirection === 'down';
	    },
	    hasScrollBar: function hasScrollBar() {
	      return getScrollHeight(this.scrollParent) - getVisibleHeight(this.scrollParent) > 0;
	    }
	  },
	  props: {
	    distance: {
	      type: Number,
	      default: 100
	    },
	    onInfinite: {
	      type: Function,
	      required: true
	    },
	    spinner: String,
	    onRefresh: {
	      type: Function,
	      required: false
	    },
	    pullDownDistance: {
	      type: Number,
	      default: 40
	    }
	  },
	  ready: function ready() {
	    this.scrollParent = getScrollParent(this.$el);
	    this.scrollHandler = function scrollHandlerOriginal() {
	      if (!this.isLoading && !this.disableScrollLoad) {
	        this.attemptLoad();
	      }
	    }.bind(this);
	
	    setTimeout(this.scrollHandler, 1);
	    this.scrollParent.addEventListener('scroll', this.scrollHandler);
	    if (this.onRefresh) {
	      this.scrollParent.addEventListener('touchstart', this.touchStart);
	      this.scrollParent.addEventListener('touchmove', this.touchMove);
	      this.scrollParent.addEventListener('touchend', this.touchEnd);
	    }
	  },
	
	  events: {
	    '$InfiniteLoading:loaded': function loaded() {
	      this.isFirstLoad = false;
	      if (this.isLoading) {
	        this.$nextTick(this.attemptLoad);
	      }
	    },
	    '$InfiniteLoading:complete': function complete() {
	      this.isLoading = false;
	      this.isComplete = true;
	      this.scrollParent.removeEventListener('scroll', this.scrollHandler);
	    },
	    '$InfiniteLoading:reset': function reset() {
	      this.isNoData = false;
	      this.isLoading = false;
	      this.isComplete = false;
	      this.isFirstLoad = true;
	      this.disableScrollLoad = false;
	      this.scrollParent.addEventListener('scroll', this.scrollHandler);
	      if (this.onRefresh) {
	        this.scrollParent.addEventListener('touchstart', this.touchStart);
	        this.scrollParent.addEventListener('touchmove', this.touchMove);
	        this.scrollParent.addEventListener('touchend', this.touchEnd);
	      }
	      setTimeout(this.scrollHandler, 1);
	    },
	    '$InfiniteLoading:refreshComplete': function refreshComplete() {
	      this.isLoading = false;
	      this.moveDirection = 'up';
	      this.isFirstLoad = false;
	      this.isComplete = false;
	      var header = this.scrollParent.querySelector('.header');
	      if (header) {
	        header.style.height = '0px';
	        header.style.display = 'none';
	      }
	      setTimeout(this.scrollHandler, 1);
	      this.scrollParent.addEventListener('scroll', this.scrollHandler);
	    },
	    '$InfiniteLoading:completeButNoData': function complete() {
	      this.isNoData = true;
	      this.isLoading = false;
	      this.isComplete = true;
	      this.scrollParent.removeEventListener('scroll', this.scrollHandler);
	      this.scrollParent.removeEventListener('touchstart', this.touchStart);
	      this.scrollParent.removeEventListener('touchmove', this.touchMove);
	      this.scrollParent.removeEventListener('touchend', this.touchEnd);
	    },
	
	    '$InfiniteLoading:resetStatus': function reset() {
	      this.isNoData = false;
	      this.isLoading = false;
	      this.isComplete = false;
	      this.isFirstLoad = true;
	      this.disableScrollLoad = true;
	      this.scrollParent.removeEventListener('scroll', this.scrollHandler);
	    }
	  },
	  methods: {
	    attemptLoad: function attemptLoad() {
	      if (!this.isComplete && (this.isFirstLoad || isDownTrigger(this.scrollParent))) {
	        this.isLoading = true;
	        this.onInfinite.call();
	      } else {
	        this.isLoading = false;
	      }
	    },
	    touchStart: function touchStart(e) {
	      if (!this.isLoading) {
	        this.startY = e.targetTouches[0].pageY;
	        this.touching = true;
	        this.startScroll = getScrollTop(this.scrollParent);
	      }
	    },
	    touchMove: function touchMove(e) {
	      if (this.isLoading || !this.touching) {
	        return;
	      }
	      this.currentY = e.targetTouches[0].pageY;
	      this.moveY = this.currentY - this.startY;
	      var absMoveY = Math.abs(this.moveY);
	      if (absMoveY < 2) return;
	      if (this.moveY > 0) {
	        this.moveDirection = 'down';
	      } else {
	        this.moveDirection = 'up';
	      }
	
	      if (this.startScroll <= 0 && this.moveDirection === 'down') {
	        e.preventDefault();
	        if (absMoveY >= this.pullDownDistance) {
	          this.downTipMsg = '释放刷新数据';
	        } else if (absMoveY > this.pullDownDistance / 5) {
	          this.downTipMsg = '下拉更新';
	        } else {
	          this.downTipMsg = '';
	        }
	        var header = this.scrollParent.querySelector('.header');
	        if (header) {
	          header.style.height = Math.min(absMoveY, this.pullDownDistance) + 'px';
	          header.style.display = 'block';
	        }
	      }
	    },
	    touchEnd: function touchEnd() {
	      var _this = this;
	
	      if (this.isLoading) return;
	      this.touching = false;
	      if (this.startScroll > 0) {
	        this.moveY = 0;
	        return;
	      }
	      var dy = Math.abs(this.moveY);
	      if (this.moveDirection === 'down' && dy >= this.pullDownDistance) {
	        this.isLoading = true;
	        setTimeout(function () {
	          _this.onRefresh.call();
	        }, 1000);
	      } else {
	        var header = this.scrollParent.querySelector('.header');
	        if (header) {
	          header.style.height = '0px';
	          header.style.display = 'none';
	        }
	      }
	      this.moveY = 0;
	    }
	  },
	  destroyed: function destroyed() {
	    if (!this.isComplete) {
	      this.scrollParent.removeEventListener('scroll', this.scrollHandler);
	    }
	    if (this.onRefresh) {
	      this.scrollParent.removeEventListener('touchstart', this.touchStart);
	      this.scrollParent.removeEventListener('touchmove', this.touchMove);
	      this.scrollParent.removeEventListener('touchend', this.touchEnd);
	    }
	  }
	};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	module.exports = "\n<div _v-7d73c521=\"\">\n  <div class=\"header\" _v-7d73c521=\"\">\n    <div v-show=\"!touching&amp;&amp;isLoading &amp;&amp; isPullDown\" _v-7d73c521=\"\">\n      <slot name=\"spinnerPullDown\" _v-7d73c521=\"\">\n        <i class=\"loading-bubbles\" style=\"top:20px;\" _v-7d73c521=\"\"></i>\n      </slot>\n    </div>\n    <div class=\"infinite-status-prompt\" v-show=\"touching &amp;&amp; isPullDown\" _v-7d73c521=\"\">\n      <slot name=\"pull-refresh\" _v-7d73c521=\"\">{{downTipMsg}}</slot>\n    </div>\n  </div>\n  <slot name=\"content\" _v-7d73c521=\"\"></slot>\n  <div class=\"infinite-loading-container\" _v-7d73c521=\"\">\n    <div v-show=\"isLoading &amp;&amp; !isPullDown\" _v-7d73c521=\"\">\n      <slot name=\"spinner\" _v-7d73c521=\"\">\n        <i :class=\"spinnerType\" _v-7d73c521=\"\"></i>\n      </slot>\n    </div>\n    <div class=\"infinite-status-prompt\" v-show=\"isNoData\" _v-7d73c521=\"\">\n      <slot name=\"no-results\" _v-7d73c521=\"\">没有数据</slot>\n    </div>\n    <div class=\"infinite-status-prompt\" v-show=\"!isLoading &amp;&amp; !isNoData &amp;&amp; isComplete &amp;&amp; hasScrollBar\" _v-7d73c521=\"\">\n      <slot name=\"no-more\" _v-7d73c521=\"\">没有更多数据</slot>\n    </div>\n  </div>\n</div>\n";

/***/ })
/******/ ])
});
;
//# sourceMappingURL=vue-infinite-loading.js.map