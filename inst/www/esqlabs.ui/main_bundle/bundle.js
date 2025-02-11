/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js");

var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var index = Object(_emotion_memoize__WEBPACK_IMPORTED_MODULE_0__["default"])(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */ && prop.charCodeAt(1) === 110
  /* n */ && prop.charCodeAt(2) < 91;
}
/* Z+1 */);
/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@emotion/memoize/dist/memoize.browser.esm.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}
/* harmony default export */ __webpack_exports__["default"] = (memoize);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./srcjs/IntroScreen.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./srcjs/IntroScreen.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*,\r\n*::after,\r\n*::before {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  height: 100vh;\r\n  position: 'absolute';\r\n  width: 100%;\r\n  /*background: linear-gradient(to top right, #007991, #78ffd6)*/\r\n}\r\n.wrapper {\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 50%;\r\n  transform: translate(-50%, -50%);\r\n  width: 128px;\r\n  height: 70px;\r\n}\r\n#dot1,\r\n#dot2,\r\n#dot3,\r\n#dot4,\r\n#dot5,\r\n#dot6,\r\n#dot7,\r\n#dot8,\r\n#dot9,\r\n#dot10 {\r\n  position: absolute;\r\n  width: 10px;\r\n  height: 10px;\r\n  border-radius: 50px 50px;\r\n  background: #000;\r\n  animation: spin 1.5s linear infinite;\r\n  transform-origin: center center;\r\n}\r\n#dot1 {\r\n  background: #43bdcb;\r\n}\r\n#dot2 {\r\n  animation: spin 1.5s -0.75s linear infinite;\r\n  background: #43bdcb;\r\n}\r\n#dot3 {\r\n  left: 30px;\r\n  animation: spin 1.5s -1.3s linear infinite;\r\n  background: #75bb5f;\r\n}\r\n#dot4 {\r\n  left: 30px;\r\n  animation: spin 1.5s -0.55s linear infinite;\r\n  background: #75bb5f;\r\n}\r\n#dot5 {\r\n  left: 60px;\r\n  animation: spin 1.5s -1.1s linear infinite;\r\n  background: #eb605e;\r\n}\r\n#dot6 {\r\n  left: 60px;\r\n  animation: spin 1.5s -0.35s linear infinite;\r\n  background: #eb605e;\r\n}\r\n#dot7 {\r\n  left: 90px;\r\n  animation: spin 1.5s -0.9s linear infinite;\r\n  background: #75bb5f;\r\n}\r\n#dot8 {\r\n  left: 90px;\r\n  animation: spin 1.5s -0.15s linear infinite;\r\n  background: #75bb5f;\r\n}\r\n#dot9 {\r\n  left: 120px;\r\n  animation: spin 1.5s -0.7s linear infinite;\r\n  background: #43bdcb;\r\n}\r\n#dot10 {\r\n  left: 120px;\r\n  animation: spin 1.5s 0.05s linear infinite;\r\n  background: #43bdcb;\r\n}\r\n#base1,\r\n#base2,\r\n#base3,\r\n#base4,\r\n#base5 {\r\n  position: absolute;\r\n  top: 30px;\r\n  left: 5px;\r\n  width: 1px;\r\n  height: 10px;\r\n  background: #000;\r\n  animation: flex 1.5s linear infinite;\r\n  transform-origin: center center;\r\n}\r\n#base1 {\r\n  background: #43bdcb;\r\n}\r\n#base2 {\r\n  left: 35px;\r\n  animation: flex 1.5s -1.3s linear infinite;\r\n  background: #75bb5f;\r\n}\r\n#base3 {\r\n  left: 65px;\r\n  animation: flex 1.5s -1.1s linear infinite;\r\n  background: #eb605e;\r\n}\r\n#base4 {\r\n  left: 95px;\r\n  animation: flex 1.5s -0.9s linear infinite;\r\n  background: #75bb5f;\r\n}\r\n#base5 {\r\n  left: 125px;\r\n  animation: flex 1.5s -0.75s linear infinite;\r\n  background: #43bdcb;\r\n}\r\n@-moz-keyframes spin {\r\n  0%,\r\n  100% {\r\n    transform: translateY(0px) scale(1);\r\n  }\r\n  25% {\r\n    transform: translateY(30px) scale(2);\r\n  }\r\n  50% {\r\n    transform: translateY(60px) scale(1);\r\n  }\r\n  75% {\r\n    transform: translateY(30px) scale(0.3);\r\n  }\r\n}\r\n@-webkit-keyframes spin {\r\n  0%,\r\n  100% {\r\n    transform: translateY(0px) scale(1);\r\n  }\r\n  25% {\r\n    transform: translateY(30px) scale(2);\r\n  }\r\n  50% {\r\n    transform: translateY(60px) scale(1);\r\n  }\r\n  75% {\r\n    transform: translateY(30px) scale(0.3);\r\n  }\r\n}\r\n@-o-keyframes spin {\r\n  0%,\r\n  100% {\r\n    transform: translateY(0px) scale(1);\r\n  }\r\n  25% {\r\n    transform: translateY(30px) scale(2);\r\n  }\r\n  50% {\r\n    transform: translateY(60px) scale(1);\r\n  }\r\n  75% {\r\n    transform: translateY(30px) scale(0.3);\r\n  }\r\n}\r\n@keyframes spin {\r\n  0%,\r\n  100% {\r\n    transform: translateY(0px) scale(1);\r\n  }\r\n  25% {\r\n    transform: translateY(30px) scale(2);\r\n  }\r\n  50% {\r\n    transform: translateY(60px) scale(1);\r\n  }\r\n  75% {\r\n    transform: translateY(30px) scale(0.3);\r\n  }\r\n}\r\n@-moz-keyframes flex {\r\n  0%,\r\n  100% {\r\n    transform: scaleY(5);\r\n  }\r\n  25% {\r\n    transform: scaleY(1);\r\n  }\r\n  50% {\r\n    transform: scaleY(5);\r\n  }\r\n  75% {\r\n    transform: scaleY(1);\r\n  }\r\n}\r\n@-webkit-keyframes flex {\r\n  0%,\r\n  100% {\r\n    transform: scaleY(5);\r\n  }\r\n  25% {\r\n    transform: scaleY(1);\r\n  }\r\n  50% {\r\n    transform: scaleY(5);\r\n  }\r\n  75% {\r\n    transform: scaleY(1);\r\n  }\r\n}\r\n@-o-keyframes flex {\r\n  0%,\r\n  100% {\r\n    transform: scaleY(5);\r\n  }\r\n  25% {\r\n    transform: scaleY(1);\r\n  }\r\n  50% {\r\n    transform: scaleY(5);\r\n  }\r\n  75% {\r\n    transform: scaleY(1);\r\n  }\r\n}\r\n@keyframes flex {\r\n  0%,\r\n  100% {\r\n    transform: scaleY(5);\r\n  }\r\n  25% {\r\n    transform: scaleY(1);\r\n  }\r\n  50% {\r\n    transform: scaleY(5);\r\n  }\r\n  75% {\r\n    transform: scaleY(1);\r\n  }\r\n}\r\n\r\n.logo_container {\r\n  display: flex;\r\n  width: 100%;\r\n  height: 100vh;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.slide-in {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100vh;\r\n  background: #eeeeee;\r\n  transform-origin: bottom;\r\n}\r\n\r\n.slide-out {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100vh;\r\n  background: #eeeeee;\r\n  transform-origin: top;\r\n}\r\n", "",{"version":3,"sources":["webpack://./srcjs/IntroScreen.css"],"names":[],"mappings":"AAAA;;;EAGE,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,oBAAoB;EACpB,WAAW;EACX,8DAA8D;AAChE;AACA;EACE,kBAAkB;EAClB,SAAS;EACT,QAAQ;EACR,gCAAgC;EAChC,YAAY;EACZ,YAAY;AACd;AACA;;;;;;;;;;EAUE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,wBAAwB;EACxB,gBAAgB;EAChB,oCAAoC;EACpC,+BAA+B;AACjC;AACA;EACE,mBAAmB;AACrB;AACA;EACE,2CAA2C;EAC3C,mBAAmB;AACrB;AACA;EACE,UAAU;EACV,0CAA0C;EAC1C,mBAAmB;AACrB;AACA;EACE,UAAU;EACV,2CAA2C;EAC3C,mBAAmB;AACrB;AACA;EACE,UAAU;EACV,0CAA0C;EAC1C,mBAAmB;AACrB;AACA;EACE,UAAU;EACV,2CAA2C;EAC3C,mBAAmB;AACrB;AACA;EACE,UAAU;EACV,0CAA0C;EAC1C,mBAAmB;AACrB;AACA;EACE,UAAU;EACV,2CAA2C;EAC3C,mBAAmB;AACrB;AACA;EACE,WAAW;EACX,0CAA0C;EAC1C,mBAAmB;AACrB;AACA;EACE,WAAW;EACX,0CAA0C;EAC1C,mBAAmB;AACrB;AACA;;;;;EAKE,kBAAkB;EAClB,SAAS;EACT,SAAS;EACT,UAAU;EACV,YAAY;EACZ,gBAAgB;EAChB,oCAAoC;EACpC,+BAA+B;AACjC;AACA;EACE,mBAAmB;AACrB;AACA;EACE,UAAU;EACV,0CAA0C;EAC1C,mBAAmB;AACrB;AACA;EACE,UAAU;EACV,0CAA0C;EAC1C,mBAAmB;AACrB;AACA;EACE,UAAU;EACV,0CAA0C;EAC1C,mBAAmB;AACrB;AACA;EACE,WAAW;EACX,2CAA2C;EAC3C,mBAAmB;AACrB;AACA;EACE;;IAEE,mCAAmC;EACrC;EACA;IACE,oCAAoC;EACtC;EACA;IACE,oCAAoC;EACtC;EACA;IACE,sCAAsC;EACxC;AACF;AACA;EACE;;IAEE,mCAAmC;EACrC;EACA;IACE,oCAAoC;EACtC;EACA;IACE,oCAAoC;EACtC;EACA;IACE,sCAAsC;EACxC;AACF;AACA;EACE;;IAEE,mCAAmC;EACrC;EACA;IACE,oCAAoC;EACtC;EACA;IACE,oCAAoC;EACtC;EACA;IACE,sCAAsC;EACxC;AACF;AACA;EACE;;IAEE,mCAAmC;EACrC;EACA;IACE,oCAAoC;EACtC;EACA;IACE,oCAAoC;EACtC;EACA;IACE,sCAAsC;EACxC;AACF;AACA;EACE;;IAEE,oBAAoB;EACtB;EACA;IACE,oBAAoB;EACtB;EACA;IACE,oBAAoB;EACtB;EACA;IACE,oBAAoB;EACtB;AACF;AACA;EACE;;IAEE,oBAAoB;EACtB;EACA;IACE,oBAAoB;EACtB;EACA;IACE,oBAAoB;EACtB;EACA;IACE,oBAAoB;EACtB;AACF;AACA;EACE;;IAEE,oBAAoB;EACtB;EACA;IACE,oBAAoB;EACtB;EACA;IACE,oBAAoB;EACtB;EACA;IACE,oBAAoB;EACtB;AACF;AACA;EACE;;IAEE,oBAAoB;EACtB;EACA;IACE,oBAAoB;EACtB;EACA;IACE,oBAAoB;EACtB;EACA;IACE,oBAAoB;EACtB;AACF;;AAEA;EACE,aAAa;EACb,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,wBAAwB;AAC1B;;AAEA;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,qBAAqB;AACvB","sourcesContent":["*,\r\n*::after,\r\n*::before {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  height: 100vh;\r\n  position: 'absolute';\r\n  width: 100%;\r\n  /*background: linear-gradient(to top right, #007991, #78ffd6)*/\r\n}\r\n.wrapper {\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 50%;\r\n  transform: translate(-50%, -50%);\r\n  width: 128px;\r\n  height: 70px;\r\n}\r\n#dot1,\r\n#dot2,\r\n#dot3,\r\n#dot4,\r\n#dot5,\r\n#dot6,\r\n#dot7,\r\n#dot8,\r\n#dot9,\r\n#dot10 {\r\n  position: absolute;\r\n  width: 10px;\r\n  height: 10px;\r\n  border-radius: 50px 50px;\r\n  background: #000;\r\n  animation: spin 1.5s linear infinite;\r\n  transform-origin: center center;\r\n}\r\n#dot1 {\r\n  background: #43bdcb;\r\n}\r\n#dot2 {\r\n  animation: spin 1.5s -0.75s linear infinite;\r\n  background: #43bdcb;\r\n}\r\n#dot3 {\r\n  left: 30px;\r\n  animation: spin 1.5s -1.3s linear infinite;\r\n  background: #75bb5f;\r\n}\r\n#dot4 {\r\n  left: 30px;\r\n  animation: spin 1.5s -0.55s linear infinite;\r\n  background: #75bb5f;\r\n}\r\n#dot5 {\r\n  left: 60px;\r\n  animation: spin 1.5s -1.1s linear infinite;\r\n  background: #eb605e;\r\n}\r\n#dot6 {\r\n  left: 60px;\r\n  animation: spin 1.5s -0.35s linear infinite;\r\n  background: #eb605e;\r\n}\r\n#dot7 {\r\n  left: 90px;\r\n  animation: spin 1.5s -0.9s linear infinite;\r\n  background: #75bb5f;\r\n}\r\n#dot8 {\r\n  left: 90px;\r\n  animation: spin 1.5s -0.15s linear infinite;\r\n  background: #75bb5f;\r\n}\r\n#dot9 {\r\n  left: 120px;\r\n  animation: spin 1.5s -0.7s linear infinite;\r\n  background: #43bdcb;\r\n}\r\n#dot10 {\r\n  left: 120px;\r\n  animation: spin 1.5s 0.05s linear infinite;\r\n  background: #43bdcb;\r\n}\r\n#base1,\r\n#base2,\r\n#base3,\r\n#base4,\r\n#base5 {\r\n  position: absolute;\r\n  top: 30px;\r\n  left: 5px;\r\n  width: 1px;\r\n  height: 10px;\r\n  background: #000;\r\n  animation: flex 1.5s linear infinite;\r\n  transform-origin: center center;\r\n}\r\n#base1 {\r\n  background: #43bdcb;\r\n}\r\n#base2 {\r\n  left: 35px;\r\n  animation: flex 1.5s -1.3s linear infinite;\r\n  background: #75bb5f;\r\n}\r\n#base3 {\r\n  left: 65px;\r\n  animation: flex 1.5s -1.1s linear infinite;\r\n  background: #eb605e;\r\n}\r\n#base4 {\r\n  left: 95px;\r\n  animation: flex 1.5s -0.9s linear infinite;\r\n  background: #75bb5f;\r\n}\r\n#base5 {\r\n  left: 125px;\r\n  animation: flex 1.5s -0.75s linear infinite;\r\n  background: #43bdcb;\r\n}\r\n@-moz-keyframes spin {\r\n  0%,\r\n  100% {\r\n    transform: translateY(0px) scale(1);\r\n  }\r\n  25% {\r\n    transform: translateY(30px) scale(2);\r\n  }\r\n  50% {\r\n    transform: translateY(60px) scale(1);\r\n  }\r\n  75% {\r\n    transform: translateY(30px) scale(0.3);\r\n  }\r\n}\r\n@-webkit-keyframes spin {\r\n  0%,\r\n  100% {\r\n    transform: translateY(0px) scale(1);\r\n  }\r\n  25% {\r\n    transform: translateY(30px) scale(2);\r\n  }\r\n  50% {\r\n    transform: translateY(60px) scale(1);\r\n  }\r\n  75% {\r\n    transform: translateY(30px) scale(0.3);\r\n  }\r\n}\r\n@-o-keyframes spin {\r\n  0%,\r\n  100% {\r\n    transform: translateY(0px) scale(1);\r\n  }\r\n  25% {\r\n    transform: translateY(30px) scale(2);\r\n  }\r\n  50% {\r\n    transform: translateY(60px) scale(1);\r\n  }\r\n  75% {\r\n    transform: translateY(30px) scale(0.3);\r\n  }\r\n}\r\n@keyframes spin {\r\n  0%,\r\n  100% {\r\n    transform: translateY(0px) scale(1);\r\n  }\r\n  25% {\r\n    transform: translateY(30px) scale(2);\r\n  }\r\n  50% {\r\n    transform: translateY(60px) scale(1);\r\n  }\r\n  75% {\r\n    transform: translateY(30px) scale(0.3);\r\n  }\r\n}\r\n@-moz-keyframes flex {\r\n  0%,\r\n  100% {\r\n    transform: scaleY(5);\r\n  }\r\n  25% {\r\n    transform: scaleY(1);\r\n  }\r\n  50% {\r\n    transform: scaleY(5);\r\n  }\r\n  75% {\r\n    transform: scaleY(1);\r\n  }\r\n}\r\n@-webkit-keyframes flex {\r\n  0%,\r\n  100% {\r\n    transform: scaleY(5);\r\n  }\r\n  25% {\r\n    transform: scaleY(1);\r\n  }\r\n  50% {\r\n    transform: scaleY(5);\r\n  }\r\n  75% {\r\n    transform: scaleY(1);\r\n  }\r\n}\r\n@-o-keyframes flex {\r\n  0%,\r\n  100% {\r\n    transform: scaleY(5);\r\n  }\r\n  25% {\r\n    transform: scaleY(1);\r\n  }\r\n  50% {\r\n    transform: scaleY(5);\r\n  }\r\n  75% {\r\n    transform: scaleY(1);\r\n  }\r\n}\r\n@keyframes flex {\r\n  0%,\r\n  100% {\r\n    transform: scaleY(5);\r\n  }\r\n  25% {\r\n    transform: scaleY(1);\r\n  }\r\n  50% {\r\n    transform: scaleY(5);\r\n  }\r\n  75% {\r\n    transform: scaleY(1);\r\n  }\r\n}\r\n\r\n.logo_container {\r\n  display: flex;\r\n  width: 100%;\r\n  height: 100vh;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.slide-in {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100vh;\r\n  background: #eeeeee;\r\n  transform-origin: bottom;\r\n}\r\n\r\n.slide-out {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100vh;\r\n  background: #eeeeee;\r\n  transform-origin: top;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);
      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }
      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names

  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }
      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit(arr, i) {
  var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
    content = _item[1],
    cssMapping = _item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/animate.js":
/*!*****************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/animate.js ***!
  \*****************************************************************/
/*! exports provided: animate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animate", function() { return animate; });
/* harmony import */ var _value_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../value/index.js */ "./node_modules/framer-motion/dist/es/value/index.js");
/* harmony import */ var _value_utils_is_motion_value_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../value/utils/is-motion-value.js */ "./node_modules/framer-motion/dist/es/value/utils/is-motion-value.js");
/* harmony import */ var _utils_transitions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/transitions.js */ "./node_modules/framer-motion/dist/es/animation/utils/transitions.js");




/**
 * Animate a single value or a `MotionValue`.
 *
 * The first argument is either a `MotionValue` to animate, or an initial animation value.
 *
 * The second is either a value to animate to, or an array of keyframes to animate through.
 *
 * The third argument can be either tween or spring options, and optional lifecycle methods: `onUpdate`, `onPlay`, `onComplete`, `onRepeat` and `onStop`.
 *
 * Returns `AnimationPlaybackControls`, currently just a `stop` method.
 *
 * ```javascript
 * const x = useMotionValue(0)
 *
 * useEffect(() => {
 *   const controls = animate(x, 100, {
 *     type: "spring",
 *     stiffness: 2000,
 *     onComplete: v => {}
 *   })
 *
 *   return controls.stop
 * })
 * ```
 *
 * @public
 */
function animate(from, to, transition) {
  if (transition === void 0) {
    transition = {};
  }
  var value = Object(_value_utils_is_motion_value_js__WEBPACK_IMPORTED_MODULE_1__["isMotionValue"])(from) ? from : Object(_value_index_js__WEBPACK_IMPORTED_MODULE_0__["motionValue"])(from);
  Object(_utils_transitions_js__WEBPACK_IMPORTED_MODULE_2__["startAnimation"])("", value, to, transition);
  return {
    stop: function stop() {
      return value.stop();
    }
  };
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/animation-controls.js":
/*!****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/animation-controls.js ***!
  \****************************************************************************/
/*! exports provided: animationControls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animationControls", function() { return animationControls; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");
/* harmony import */ var _render_utils_animation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../render/utils/animation.js */ "./node_modules/framer-motion/dist/es/render/utils/animation.js");
/* harmony import */ var _render_utils_setters_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../render/utils/setters.js */ "./node_modules/framer-motion/dist/es/render/utils/setters.js");





/**
 * @public
 */
function animationControls() {
  /**
   * Track whether the host component has mounted.
   */
  var hasMounted = false;
  /**
   * Pending animations that are started before a component is mounted.
   * TODO: Remove this as animations should only run in effects
   */
  var pendingAnimations = [];
  /**
   * A collection of linked component animation controls.
   */
  var subscribers = new Set();
  var controls = {
    subscribe: function subscribe(visualElement) {
      subscribers.add(visualElement);
      return function () {
        return void subscribers["delete"](visualElement);
      };
    },
    start: function start(definition, transitionOverride) {
      /**
       * TODO: We only perform this hasMounted check because in Framer we used to
       * encourage the ability to start an animation within the render phase. This
       * isn't behaviour concurrent-safe so when we make Framer concurrent-safe
       * we can ditch this.
       */
      if (hasMounted) {
        var animations_1 = [];
        subscribers.forEach(function (visualElement) {
          animations_1.push(Object(_render_utils_animation_js__WEBPACK_IMPORTED_MODULE_2__["animateVisualElement"])(visualElement, definition, {
            transitionOverride: transitionOverride
          }));
        });
        return Promise.all(animations_1);
      } else {
        return new Promise(function (resolve) {
          pendingAnimations.push({
            animation: [definition, transitionOverride],
            resolve: resolve
          });
        });
      }
    },
    set: function set(definition) {
      Object(hey_listen__WEBPACK_IMPORTED_MODULE_1__["invariant"])(hasMounted, "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook.");
      return subscribers.forEach(function (visualElement) {
        Object(_render_utils_setters_js__WEBPACK_IMPORTED_MODULE_3__["setValues"])(visualElement, definition);
      });
    },
    stop: function stop() {
      subscribers.forEach(function (visualElement) {
        Object(_render_utils_animation_js__WEBPACK_IMPORTED_MODULE_2__["stopAnimation"])(visualElement);
      });
    },
    mount: function mount() {
      hasMounted = true;
      pendingAnimations.forEach(function (_a) {
        var animation = _a.animation,
          resolve = _a.resolve;
        controls.start.apply(controls, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(animation))).then(resolve);
      });
      return function () {
        hasMounted = false;
        controls.stop();
      };
    }
  };
  return controls;
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/use-animated-state.js":
/*!****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/use-animated-state.js ***!
  \****************************************************************************/
/*! exports provided: useAnimatedState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAnimatedState", function() { return useAnimatedState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_use_constant_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/use-constant.js */ "./node_modules/framer-motion/dist/es/utils/use-constant.js");
/* harmony import */ var _render_utils_setters_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../render/utils/setters.js */ "./node_modules/framer-motion/dist/es/render/utils/setters.js");
/* harmony import */ var _render_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../render/index.js */ "./node_modules/framer-motion/dist/es/render/index.js");
/* harmony import */ var _utils_geometry_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/geometry/index.js */ "./node_modules/framer-motion/dist/es/utils/geometry/index.js");
/* harmony import */ var _render_utils_animation_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../render/utils/animation.js */ "./node_modules/framer-motion/dist/es/render/utils/animation.js");
/* harmony import */ var _motion_utils_use_visual_state_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../motion/utils/use-visual-state.js */ "./node_modules/framer-motion/dist/es/motion/utils/use-visual-state.js");








var createObject = function createObject() {
  return {};
};
var stateVisualElement = Object(_render_index_js__WEBPACK_IMPORTED_MODULE_4__["visualElement"])({
  build: function build() {},
  measureViewportBox: _utils_geometry_index_js__WEBPACK_IMPORTED_MODULE_5__["axisBox"],
  resetTransform: function resetTransform() {},
  restoreTransform: function restoreTransform() {},
  removeValueFromRenderState: function removeValueFromRenderState() {},
  render: function render() {},
  scrapeMotionValuesFromProps: createObject,
  readValueFromInstance: function readValueFromInstance(_state, key, options) {
    return options.initialState[key] || 0;
  },
  makeTargetAnimatable: function makeTargetAnimatable(element, _a) {
    var transition = _a.transition,
      transitionEnd = _a.transitionEnd,
      target = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["transition", "transitionEnd"]);
    var origin = Object(_render_utils_setters_js__WEBPACK_IMPORTED_MODULE_3__["getOrigin"])(target, transition || {}, element);
    Object(_render_utils_setters_js__WEBPACK_IMPORTED_MODULE_3__["checkTargetForNewValues"])(element, target, origin);
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({
      transition: transition,
      transitionEnd: transitionEnd
    }, target);
  }
});
var useVisualState = Object(_motion_utils_use_visual_state_js__WEBPACK_IMPORTED_MODULE_7__["makeUseVisualState"])({
  scrapeMotionValuesFromProps: createObject,
  createRenderState: createObject
});
/**
 * This is not an officially supported API and may be removed
 * on any version.
 * @internal
 */
function useAnimatedState(initialState) {
  var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialState), 2),
    animationState = _a[0],
    setAnimationState = _a[1];
  var visualState = useVisualState({}, false);
  var element = Object(_utils_use_constant_js__WEBPACK_IMPORTED_MODULE_2__["useConstant"])(function () {
    return stateVisualElement({
      props: {},
      visualState: visualState
    }, {
      initialState: initialState
    });
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    element.mount({});
    return element.unmount();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    element.setProps({
      onUpdate: function onUpdate(v) {
        return setAnimationState(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, v));
      }
    });
  });
  var startAnimation = Object(_utils_use_constant_js__WEBPACK_IMPORTED_MODULE_2__["useConstant"])(function () {
    return function (animationDefinition) {
      return Object(_render_utils_animation_js__WEBPACK_IMPORTED_MODULE_6__["animateVisualElement"])(element, animationDefinition);
    };
  });
  return [animationState, startAnimation];
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/use-animation.js":
/*!***********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/use-animation.js ***!
  \***********************************************************************/
/*! exports provided: useAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAnimation", function() { return useAnimation; });
/* harmony import */ var _animation_controls_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation-controls.js */ "./node_modules/framer-motion/dist/es/animation/animation-controls.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_use_constant_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/use-constant.js */ "./node_modules/framer-motion/dist/es/utils/use-constant.js");




/**
 * Creates `AnimationControls`, which can be used to manually start, stop
 * and sequence animations on one or more components.
 *
 * The returned `AnimationControls` should be passed to the `animate` property
 * of the components you want to animate.
 *
 * These components can then be animated with the `start` method.
 *
 * @library
 *
 * ```jsx
 * import * as React from 'react'
 * import { Frame, useAnimation } from 'framer'
 *
 * export function MyComponent(props) {
 *    const controls = useAnimation()
 *
 *    controls.start({
 *        x: 100,
 *        transition: { duration: 0.5 },
 *    })
 *
 *    return <Frame animate={controls} />
 * }
 * ```
 *
 * @motion
 *
 * ```jsx
 * import * as React from 'react'
 * import { motion, useAnimation } from 'framer-motion'
 *
 * export function MyComponent(props) {
 *    const controls = useAnimation()
 *
 *    controls.start({
 *        x: 100,
 *        transition: { duration: 0.5 },
 *    })
 *
 *    return <motion.div animate={controls} />
 * }
 * ```
 *
 * @returns Animation controller with `start` and `stop` methods
 *
 * @public
 */
function useAnimation() {
  var controls = Object(_utils_use_constant_js__WEBPACK_IMPORTED_MODULE_2__["useConstant"])(_animation_controls_js__WEBPACK_IMPORTED_MODULE_0__["animationControls"]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(controls.mount, []);
  return controls;
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/utils/default-transitions.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/utils/default-transitions.js ***!
  \***********************************************************************************/
/*! exports provided: criticallyDampedSpring, getDefaultTransition, linearTween, underDampedSpring */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "criticallyDampedSpring", function() { return criticallyDampedSpring; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultTransition", function() { return getDefaultTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linearTween", function() { return linearTween; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "underDampedSpring", function() { return underDampedSpring; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _is_keyframes_target_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is-keyframes-target.js */ "./node_modules/framer-motion/dist/es/animation/utils/is-keyframes-target.js");


var underDampedSpring = function underDampedSpring() {
  return {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restDelta: 0.5,
    restSpeed: 10
  };
};
var criticallyDampedSpring = function criticallyDampedSpring(to) {
  return {
    type: "spring",
    stiffness: 550,
    damping: to === 0 ? 2 * Math.sqrt(550) : 30,
    restDelta: 0.01,
    restSpeed: 10
  };
};
var linearTween = function linearTween() {
  return {
    type: "keyframes",
    ease: "linear",
    duration: 0.3
  };
};
var keyframes = function keyframes(values) {
  return {
    type: "keyframes",
    duration: 0.8,
    values: values
  };
};
var defaultTransitions = {
  x: underDampedSpring,
  y: underDampedSpring,
  z: underDampedSpring,
  rotate: underDampedSpring,
  rotateX: underDampedSpring,
  rotateY: underDampedSpring,
  rotateZ: underDampedSpring,
  scaleX: criticallyDampedSpring,
  scaleY: criticallyDampedSpring,
  scale: criticallyDampedSpring,
  opacity: linearTween,
  backgroundColor: linearTween,
  color: linearTween,
  "default": criticallyDampedSpring
};
var getDefaultTransition = function getDefaultTransition(valueKey, to) {
  var transitionFactory;
  if (Object(_is_keyframes_target_js__WEBPACK_IMPORTED_MODULE_1__["isKeyframesTarget"])(to)) {
    transitionFactory = keyframes;
  } else {
    transitionFactory = defaultTransitions[valueKey] || defaultTransitions["default"];
  }
  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({
    to: to
  }, transitionFactory(to));
};


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/utils/easing.js":
/*!**********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/utils/easing.js ***!
  \**********************************************************************/
/*! exports provided: easingDefinitionToFunction, isEasingArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easingDefinitionToFunction", function() { return easingDefinitionToFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEasingArray", function() { return isEasingArray; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/index.js");



var easingLookup = {
  linear: popmotion__WEBPACK_IMPORTED_MODULE_2__["linear"],
  easeIn: popmotion__WEBPACK_IMPORTED_MODULE_2__["easeIn"],
  easeInOut: popmotion__WEBPACK_IMPORTED_MODULE_2__["easeInOut"],
  easeOut: popmotion__WEBPACK_IMPORTED_MODULE_2__["easeOut"],
  circIn: popmotion__WEBPACK_IMPORTED_MODULE_2__["circIn"],
  circInOut: popmotion__WEBPACK_IMPORTED_MODULE_2__["circInOut"],
  circOut: popmotion__WEBPACK_IMPORTED_MODULE_2__["circOut"],
  backIn: popmotion__WEBPACK_IMPORTED_MODULE_2__["backIn"],
  backInOut: popmotion__WEBPACK_IMPORTED_MODULE_2__["backInOut"],
  backOut: popmotion__WEBPACK_IMPORTED_MODULE_2__["backOut"],
  anticipate: popmotion__WEBPACK_IMPORTED_MODULE_2__["anticipate"],
  bounceIn: popmotion__WEBPACK_IMPORTED_MODULE_2__["bounceIn"],
  bounceInOut: popmotion__WEBPACK_IMPORTED_MODULE_2__["bounceInOut"],
  bounceOut: popmotion__WEBPACK_IMPORTED_MODULE_2__["bounceOut"]
};
var easingDefinitionToFunction = function easingDefinitionToFunction(definition) {
  if (Array.isArray(definition)) {
    // If cubic bezier definition, create bezier curve
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_1__["invariant"])(definition.length === 4, "Cubic bezier arrays must contain four numerical values.");
    var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(definition, 4),
      x1 = _a[0],
      y1 = _a[1],
      x2 = _a[2],
      y2 = _a[3];
    return Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["cubicBezier"])(x1, y1, x2, y2);
  } else if (typeof definition === "string") {
    // Else lookup from table
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_1__["invariant"])(easingLookup[definition] !== undefined, "Invalid easing type '" + definition + "'");
    return easingLookup[definition];
  }
  return definition;
};
var isEasingArray = function isEasingArray(ease) {
  return Array.isArray(ease) && typeof ease[0] !== "number";
};


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/utils/is-animatable.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/utils/is-animatable.js ***!
  \*****************************************************************************/
/*! exports provided: isAnimatable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAnimatable", function() { return isAnimatable; });
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/index.js");


/**
 * Check if a value is animatable. Examples:
 *
 * ✅: 100, "100px", "#fff"
 * ❌: "block", "url(2.jpg)"
 * @param value
 *
 * @internal
 */
var isAnimatable = function isAnimatable(key, value) {
  // If the list of keys tat might be non-animatable grows, replace with Set
  if (key === "zIndex") return false;
  // If it's a number or a keyframes array, we can animate it. We might at some point
  // need to do a deep isAnimatable check of keyframes, or let Popmotion handle this,
  // but for now lets leave it like this for performance reasons
  if (typeof value === "number" || Array.isArray(value)) return true;
  if (typeof value === "string" &&
  // It's animatable if we have a string
  style_value_types__WEBPACK_IMPORTED_MODULE_0__["complex"].test(value) &&
  // And it contains numbers and/or colors
  !value.startsWith("url(") // Unless it starts with "url("
  ) {
    return true;
  }
  return false;
};


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/utils/is-animation-controls.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/utils/is-animation-controls.js ***!
  \*************************************************************************************/
/*! exports provided: isAnimationControls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAnimationControls", function() { return isAnimationControls; });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function isAnimationControls(v) {
  return _typeof(v) === "object" && typeof v.start === "function";
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/utils/is-keyframes-target.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/utils/is-keyframes-target.js ***!
  \***********************************************************************************/
/*! exports provided: isKeyframesTarget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isKeyframesTarget", function() { return isKeyframesTarget; });
var isKeyframesTarget = function isKeyframesTarget(v) {
  return Array.isArray(v);
};


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/utils/transitions.js":
/*!***************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/utils/transitions.js ***!
  \***************************************************************************/
/*! exports provided: convertTransitionToAnimationOptions, getDelayFromTransition, getPopmotionAnimationOptions, getValueTransition, getZeroUnit, hydrateKeyframes, isTransitionDefined, isZero, startAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertTransitionToAnimationOptions", function() { return convertTransitionToAnimationOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDelayFromTransition", function() { return getDelayFromTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPopmotionAnimationOptions", function() { return getPopmotionAnimationOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValueTransition", function() { return getValueTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getZeroUnit", function() { return getZeroUnit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrateKeyframes", function() { return hydrateKeyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTransitionDefined", function() { return isTransitionDefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isZero", function() { return isZero; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startAnimation", function() { return startAnimation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/index.js");
/* harmony import */ var _utils_time_conversion_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/time-conversion.js */ "./node_modules/framer-motion/dist/es/utils/time-conversion.js");
/* harmony import */ var _easing_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./easing.js */ "./node_modules/framer-motion/dist/es/animation/utils/easing.js");
/* harmony import */ var _is_animatable_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./is-animatable.js */ "./node_modules/framer-motion/dist/es/animation/utils/is-animatable.js");
/* harmony import */ var _default_transitions_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./default-transitions.js */ "./node_modules/framer-motion/dist/es/animation/utils/default-transitions.js");
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");
/* harmony import */ var _render_dom_value_types_animatable_none_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../render/dom/value-types/animatable-none.js */ "./node_modules/framer-motion/dist/es/render/dom/value-types/animatable-none.js");









/**
 * Decide whether a transition is defined on a given Transition.
 * This filters out orchestration options and returns true
 * if any options are left.
 */
function isTransitionDefined(_a) {
  _a.when;
  _a.delay;
  _a.delayChildren;
  _a.staggerChildren;
  _a.staggerDirection;
  _a.repeat;
  _a.repeatType;
  _a.repeatDelay;
  _a.from;
  var transition = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["when", "delay", "delayChildren", "staggerChildren", "staggerDirection", "repeat", "repeatType", "repeatDelay", "from"]);
  return !!Object.keys(transition).length;
}
var legacyRepeatWarning = false;
/**
 * Convert Framer Motion's Transition type into Popmotion-compatible options.
 */
function convertTransitionToAnimationOptions(_a) {
  var ease = _a.ease,
    times = _a.times,
    yoyo = _a.yoyo,
    flip = _a.flip,
    loop = _a.loop,
    transition = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["ease", "times", "yoyo", "flip", "loop"]);
  var options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, transition);
  if (times) options["offset"] = times;
  /**
   * Convert any existing durations from seconds to milliseconds
   */
  if (transition.duration) options["duration"] = Object(_utils_time_conversion_js__WEBPACK_IMPORTED_MODULE_2__["secondsToMilliseconds"])(transition.duration);
  if (transition.repeatDelay) options.repeatDelay = Object(_utils_time_conversion_js__WEBPACK_IMPORTED_MODULE_2__["secondsToMilliseconds"])(transition.repeatDelay);
  /**
   * Map easing names to Popmotion's easing functions
   */
  if (ease) {
    options["ease"] = Object(_easing_js__WEBPACK_IMPORTED_MODULE_3__["isEasingArray"])(ease) ? ease.map(_easing_js__WEBPACK_IMPORTED_MODULE_3__["easingDefinitionToFunction"]) : Object(_easing_js__WEBPACK_IMPORTED_MODULE_3__["easingDefinitionToFunction"])(ease);
  }
  /**
   * Support legacy transition API
   */
  if (transition.type === "tween") options.type = "keyframes";
  /**
   * TODO: These options are officially removed from the API.
   */
  if (yoyo || loop || flip) {
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_6__["warning"])(!legacyRepeatWarning, "yoyo, loop and flip have been removed from the API. Replace with repeat and repeatType options.");
    legacyRepeatWarning = true;
    if (yoyo) {
      options.repeatType = "reverse";
    } else if (loop) {
      options.repeatType = "loop";
    } else if (flip) {
      options.repeatType = "mirror";
    }
    options.repeat = loop || yoyo || flip || transition.repeat;
  }
  /**
   * TODO: Popmotion 9 has the ability to automatically detect whether to use
   * a keyframes or spring animation, but does so by detecting velocity and other spring options.
   * It'd be good to introduce a similar thing here.
   */
  if (transition.type !== "spring") options.type = "keyframes";
  return options;
}
/**
 * Get the delay for a value by checking Transition with decreasing specificity.
 */
function getDelayFromTransition(transition, key) {
  var _a;
  var valueTransition = getValueTransition(transition, key) || {};
  return (_a = valueTransition.delay) !== null && _a !== void 0 ? _a : 0;
}
function hydrateKeyframes(options) {
  if (Array.isArray(options.to) && options.to[0] === null) {
    options.to = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(options.to));
    options.to[0] = options.from;
  }
  return options;
}
function getPopmotionAnimationOptions(transition, options, key) {
  var _a;
  if (Array.isArray(options.to)) {
    (_a = transition.duration) !== null && _a !== void 0 ? _a : transition.duration = 0.8;
  }
  hydrateKeyframes(options);
  /**
   * Get a default transition if none is determined to be defined.
   */
  if (!isTransitionDefined(transition)) {
    transition = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, transition), Object(_default_transitions_js__WEBPACK_IMPORTED_MODULE_5__["getDefaultTransition"])(key, options.to));
  }
  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), convertTransitionToAnimationOptions(transition));
}
/**
 *
 */
function getAnimation(key, value, target, transition, onComplete) {
  var _a;
  var valueTransition = getValueTransition(transition, key);
  var origin = (_a = valueTransition.from) !== null && _a !== void 0 ? _a : value.get();
  var isTargetAnimatable = Object(_is_animatable_js__WEBPACK_IMPORTED_MODULE_4__["isAnimatable"])(key, target);
  if (origin === "none" && isTargetAnimatable && typeof target === "string") {
    /**
     * If we're trying to animate from "none", try and get an animatable version
     * of the target. This could be improved to work both ways.
     */
    origin = Object(_render_dom_value_types_animatable_none_js__WEBPACK_IMPORTED_MODULE_7__["getAnimatableNone"])(key, target);
  } else if (isZero(origin) && typeof target === "string") {
    origin = getZeroUnit(target);
  } else if (!Array.isArray(target) && isZero(target) && typeof origin === "string") {
    target = getZeroUnit(origin);
  }
  var isOriginAnimatable = Object(_is_animatable_js__WEBPACK_IMPORTED_MODULE_4__["isAnimatable"])(key, origin);
  Object(hey_listen__WEBPACK_IMPORTED_MODULE_6__["warning"])(isOriginAnimatable === isTargetAnimatable, "You are trying to animate " + key + " from \"" + origin + "\" to \"" + target + "\". " + origin + " is not an animatable value - to enable this animation set " + origin + " to a value animatable to " + target + " via the `style` property.");
  function start() {
    var options = {
      from: origin,
      to: target,
      velocity: value.getVelocity(),
      onComplete: onComplete,
      onUpdate: function onUpdate(v) {
        return value.set(v);
      }
    };
    return valueTransition.type === "inertia" || valueTransition.type === "decay" ? Object(popmotion__WEBPACK_IMPORTED_MODULE_1__["inertia"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), valueTransition)) : Object(popmotion__WEBPACK_IMPORTED_MODULE_1__["animate"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, getPopmotionAnimationOptions(valueTransition, options, key)), {
      onUpdate: function onUpdate(v) {
        var _a;
        options.onUpdate(v);
        (_a = valueTransition.onUpdate) === null || _a === void 0 ? void 0 : _a.call(valueTransition, v);
      },
      onComplete: function onComplete() {
        var _a;
        options.onComplete();
        (_a = valueTransition.onComplete) === null || _a === void 0 ? void 0 : _a.call(valueTransition);
      }
    }));
  }
  function set() {
    var _a;
    value.set(target);
    onComplete();
    (_a = valueTransition === null || valueTransition === void 0 ? void 0 : valueTransition.onComplete) === null || _a === void 0 ? void 0 : _a.call(valueTransition);
    return {
      stop: function stop() {}
    };
  }
  return !isOriginAnimatable || !isTargetAnimatable || valueTransition.type === false ? set : start;
}
function isZero(value) {
  return value === 0 || typeof value === "string" && parseFloat(value) === 0 && value.indexOf(" ") === -1;
}
function getZeroUnit(potentialUnitType) {
  return typeof potentialUnitType === "number" ? 0 : Object(_render_dom_value_types_animatable_none_js__WEBPACK_IMPORTED_MODULE_7__["getAnimatableNone"])("", potentialUnitType);
}
function getValueTransition(transition, key) {
  return transition[key] || transition["default"] || transition;
}
/**
 * Start animation on a MotionValue. This function is an interface between
 * Framer Motion and Popmotion
 *
 * @internal
 */
function startAnimation(key, value, target, transition) {
  if (transition === void 0) {
    transition = {};
  }
  return value.start(function (onComplete) {
    var delayTimer;
    var controls;
    var animation = getAnimation(key, value, target, transition, onComplete);
    var delay = getDelayFromTransition(transition, key);
    var start = function start() {
      return controls = animation();
    };
    if (delay) {
      delayTimer = setTimeout(start, Object(_utils_time_conversion_js__WEBPACK_IMPORTED_MODULE_2__["secondsToMilliseconds"])(delay));
    } else {
      start();
    }
    return function () {
      clearTimeout(delayTimer);
      controls === null || controls === void 0 ? void 0 : controls.stop();
    };
  });
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/components/AnimatePresence/PresenceChild.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/components/AnimatePresence/PresenceChild.js ***!
  \****************************************************************************************/
/*! exports provided: PresenceChild */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresenceChild", function() { return PresenceChild; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_PresenceContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/PresenceContext.js */ "./node_modules/framer-motion/dist/es/context/PresenceContext.js");
/* harmony import */ var _utils_use_constant_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/use-constant.js */ "./node_modules/framer-motion/dist/es/utils/use-constant.js");




var presenceId = 0;
function getPresenceId() {
  var id = presenceId;
  presenceId++;
  return id;
}
var PresenceChild = function PresenceChild(_a) {
  var children = _a.children,
    initial = _a.initial,
    isPresent = _a.isPresent,
    _onExitComplete = _a.onExitComplete,
    custom = _a.custom,
    presenceAffectsLayout = _a.presenceAffectsLayout;
  var presenceChildren = Object(_utils_use_constant_js__WEBPACK_IMPORTED_MODULE_2__["useConstant"])(newChildrenMap);
  var id = Object(_utils_use_constant_js__WEBPACK_IMPORTED_MODULE_2__["useConstant"])(getPresenceId);
  var context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return {
      id: id,
      initial: initial,
      isPresent: isPresent,
      custom: custom,
      onExitComplete: function onExitComplete(childId) {
        presenceChildren.set(childId, true);
        var allComplete = true;
        presenceChildren.forEach(function (isComplete) {
          if (!isComplete) allComplete = false;
        });
        allComplete && (_onExitComplete === null || _onExitComplete === void 0 ? void 0 : _onExitComplete());
      },
      register: function register(childId) {
        presenceChildren.set(childId, false);
        return function () {
          return presenceChildren["delete"](childId);
        };
      }
    };
  },
  /**
   * If the presence of a child affects the layout of the components around it,
   * we want to make a new context value to ensure they get re-rendered
   * so they can detect that layout change.
   */
  presenceAffectsLayout ? undefined : [isPresent]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    presenceChildren.forEach(function (_, key) {
      return presenceChildren.set(key, false);
    });
  }, [isPresent]);
  /**
   * If there's no `motion` components to fire exit animations, we want to remove this
   * component immediately.
   */
  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
    !isPresent && !presenceChildren.size && (_onExitComplete === null || _onExitComplete === void 0 ? void 0 : _onExitComplete());
  }, [isPresent]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_context_PresenceContext_js__WEBPACK_IMPORTED_MODULE_1__["PresenceContext"].Provider, {
    value: context
  }, children);
};
function newChildrenMap() {
  return new Map();
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/components/AnimatePresence/index.js":
/*!********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/components/AnimatePresence/index.js ***!
  \********************************************************************************/
/*! exports provided: AnimatePresence */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimatePresence", function() { return AnimatePresence; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_use_force_update_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/use-force-update.js */ "./node_modules/framer-motion/dist/es/utils/use-force-update.js");
/* harmony import */ var _PresenceChild_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PresenceChild.js */ "./node_modules/framer-motion/dist/es/components/AnimatePresence/PresenceChild.js");
/* harmony import */ var _context_SharedLayoutContext_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/SharedLayoutContext.js */ "./node_modules/framer-motion/dist/es/context/SharedLayoutContext.js");






function getChildKey(child) {
  return child.key || "";
}
function updateChildLookup(children, allChildren) {
  var seenChildren =  true ? new Set() : undefined;
  children.forEach(function (child) {
    var key = getChildKey(child);
    if ( true && seenChildren) {
      if (seenChildren.has(key)) {
        console.warn("Children of AnimatePresence require unique keys. \"" + key + "\" is a duplicate.");
      }
      seenChildren.add(key);
    }
    allChildren.set(key, child);
  });
}
function onlyElements(children) {
  var filtered = [];
  // We use forEach here instead of map as map mutates the component key by preprending `.$`
  react__WEBPACK_IMPORTED_MODULE_1__["Children"].forEach(children, function (child) {
    if ( /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["isValidElement"])(child)) filtered.push(child);
  });
  return filtered;
}
/**
 * `AnimatePresence` enables the animation of components that have been removed from the tree.
 *
 * When adding/removing more than a single child, every child **must** be given a unique `key` prop.
 *
 * @library
 *
 * Any `Frame` components that have an `exit` property defined will animate out when removed from
 * the tree.
 *
 * ```jsx
 * import { Frame, AnimatePresence } from 'framer'
 *
 * // As items are added and removed from `items`
 * export function Items({ items }) {
 *   return (
 *     <AnimatePresence>
 *       {items.map(item => (
 *         <Frame
 *           key={item.id}
 *           initial={{ opacity: 0 }}
 *           animate={{ opacity: 1 }}
 *           exit={{ opacity: 0 }}
 *         />
 *       ))}
 *     </AnimatePresence>
 *   )
 * }
 * ```
 *
 * You can sequence exit animations throughout a tree using variants.
 *
 * @motion
 *
 * Any `motion` components that have an `exit` property defined will animate out when removed from
 * the tree.
 *
 * ```jsx
 * import { motion, AnimatePresence } from 'framer-motion'
 *
 * export const Items = ({ items }) => (
 *   <AnimatePresence>
 *     {items.map(item => (
 *       <motion.div
 *         key={item.id}
 *         initial={{ opacity: 0 }}
 *         animate={{ opacity: 1 }}
 *         exit={{ opacity: 0 }}
 *       />
 *     ))}
 *   </AnimatePresence>
 * )
 * ```
 *
 * You can sequence exit animations throughout a tree using variants.
 *
 * If a child contains multiple `motion` components with `exit` props, it will only unmount the child
 * once all `motion` components have finished animating out. Likewise, any components using
 * `usePresence` all need to call `safeToRemove`.
 *
 * @public
 */
var AnimatePresence = function AnimatePresence(_a) {
  var children = _a.children,
    custom = _a.custom,
    _b = _a.initial,
    initial = _b === void 0 ? true : _b,
    onExitComplete = _a.onExitComplete,
    exitBeforeEnter = _a.exitBeforeEnter,
    _c = _a.presenceAffectsLayout,
    presenceAffectsLayout = _c === void 0 ? true : _c;
  // We want to force a re-render once all exiting animations have finished. We
  // either use a local forceRender function, or one from a parent context if it exists.
  var forceRender = Object(_utils_use_force_update_js__WEBPACK_IMPORTED_MODULE_2__["useForceUpdate"])();
  var layoutContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_SharedLayoutContext_js__WEBPACK_IMPORTED_MODULE_4__["SharedLayoutContext"]);
  if (Object(_context_SharedLayoutContext_js__WEBPACK_IMPORTED_MODULE_4__["isSharedLayout"])(layoutContext)) {
    forceRender = layoutContext.forceUpdate;
  }
  var isInitialRender = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(true);
  // Filter out any children that aren't ReactElements. We can only track ReactElements with a props.key
  var filteredChildren = onlyElements(children);
  // Keep a living record of the children we're actually rendering so we
  // can diff to figure out which are entering and exiting
  var presentChildren = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(filteredChildren);
  // A lookup table to quickly reference components by key
  var allChildren = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(new Map()).current;
  // A living record of all currently exiting components.
  var exiting = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(new Set()).current;
  updateChildLookup(filteredChildren, allChildren);
  // If this is the initial component render, just deal with logic surrounding whether
  // we play onMount animations or not.
  if (isInitialRender.current) {
    isInitialRender.current = false;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, filteredChildren.map(function (child) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_PresenceChild_js__WEBPACK_IMPORTED_MODULE_3__["PresenceChild"], {
        key: getChildKey(child),
        isPresent: true,
        initial: initial ? undefined : false,
        presenceAffectsLayout: presenceAffectsLayout
      }, child);
    }));
  }
  // If this is a subsequent render, deal with entering and exiting children
  var childrenToRender = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(filteredChildren));
  // Diff the keys of the currently-present and target children to update our
  // exiting list.
  var presentKeys = presentChildren.current.map(getChildKey);
  var targetKeys = filteredChildren.map(getChildKey);
  // Diff the present children with our target children and mark those that are exiting
  var numPresent = presentKeys.length;
  for (var i = 0; i < numPresent; i++) {
    var key = presentKeys[i];
    if (targetKeys.indexOf(key) === -1) {
      exiting.add(key);
    } else {
      // In case this key has re-entered, remove from the exiting list
      exiting["delete"](key);
    }
  }
  // If we currently have exiting children, and we're deferring rendering incoming children
  // until after all current children have exiting, empty the childrenToRender array
  if (exitBeforeEnter && exiting.size) {
    childrenToRender = [];
  }
  // Loop through all currently exiting components and clone them to overwrite `animate`
  // with any `exit` prop they might have defined.
  exiting.forEach(function (key) {
    // If this component is actually entering again, early return
    if (targetKeys.indexOf(key) !== -1) return;
    var child = allChildren.get(key);
    if (!child) return;
    var insertionIndex = presentKeys.indexOf(key);
    var onExit = function onExit() {
      allChildren["delete"](key);
      exiting["delete"](key);
      // Remove this child from the present children
      var removeIndex = presentChildren.current.findIndex(function (presentChild) {
        return presentChild.key === key;
      });
      presentChildren.current.splice(removeIndex, 1);
      // Defer re-rendering until all exiting children have indeed left
      if (!exiting.size) {
        presentChildren.current = filteredChildren;
        forceRender();
        onExitComplete && onExitComplete();
      }
    };
    childrenToRender.splice(insertionIndex, 0, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_PresenceChild_js__WEBPACK_IMPORTED_MODULE_3__["PresenceChild"], {
      key: getChildKey(child),
      isPresent: false,
      onExitComplete: onExit,
      custom: custom,
      presenceAffectsLayout: presenceAffectsLayout
    }, child));
  });
  // Add `MotionContext` even to children that don't need it to ensure we're rendering
  // the same tree between renders
  childrenToRender = childrenToRender.map(function (child) {
    var key = child.key;
    return exiting.has(key) ? child : ( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_PresenceChild_js__WEBPACK_IMPORTED_MODULE_3__["PresenceChild"], {
      key: getChildKey(child),
      isPresent: true,
      presenceAffectsLayout: presenceAffectsLayout
    }, child));
  });
  presentChildren.current = childrenToRender;
  if ( true && exitBeforeEnter && childrenToRender.length > 1) {
    console.warn("You're attempting to animate multiple children within AnimatePresence, but its exitBeforeEnter prop is set to true. This will lead to odd visual behaviour.");
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, exiting.size ? childrenToRender : childrenToRender.map(function (child) {
    return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["cloneElement"])(child);
  }));
};


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.js ***!
  \***************************************************************************************/
/*! exports provided: isPresent, useIsPresent, usePresence */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPresent", function() { return isPresent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useIsPresent", function() { return useIsPresent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePresence", function() { return usePresence; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_PresenceContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/PresenceContext.js */ "./node_modules/framer-motion/dist/es/context/PresenceContext.js");
/* harmony import */ var _utils_use_constant_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/use-constant.js */ "./node_modules/framer-motion/dist/es/utils/use-constant.js");




/**
 * When a component is the child of `AnimatePresence`, it can use `usePresence`
 * to access information about whether it's still present in the React tree.
 *
 * ```jsx
 * import { usePresence } from "framer-motion"
 *
 * export const Component = () => {
 *   const [isPresent, safeToRemove] = usePresence()
 *
 *   useEffect(() => {
 *     !isPresent && setTimeout(safeToRemove, 1000)
 *   }, [isPresent])
 *
 *   return <div />
 * }
 * ```
 *
 * If `isPresent` is `false`, it means that a component has been removed the tree, but
 * `AnimatePresence` won't really remove it until `safeToRemove` has been called.
 *
 * @public
 */
function usePresence() {
  var context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_PresenceContext_js__WEBPACK_IMPORTED_MODULE_1__["PresenceContext"]);
  if (context === null) return [true, null];
  var isPresent = context.isPresent,
    onExitComplete = context.onExitComplete,
    register = context.register;
  // It's safe to call the following hooks conditionally (after an early return) because the context will always
  // either be null or non-null for the lifespan of the component.
  // Replace with useOpaqueId when released in React
  var id = useUniqueId();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return register(id);
  }, []);
  var safeToRemove = function safeToRemove() {
    return onExitComplete === null || onExitComplete === void 0 ? void 0 : onExitComplete(id);
  };
  return !isPresent && onExitComplete ? [false, safeToRemove] : [true];
}
/**
 * Similar to `usePresence`, except `useIsPresent` simply returns whether or not the component is present.
 * There is no `safeToRemove` function.
 *
 * ```jsx
 * import { useIsPresent } from "framer-motion"
 *
 * export const Component = () => {
 *   const isPresent = useIsPresent()
 *
 *   useEffect(() => {
 *     !isPresent && console.log("I've been removed!")
 *   }, [isPresent])
 *
 *   return <div />
 * }
 * ```
 *
 * @public
 */
function useIsPresent() {
  return isPresent(Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_PresenceContext_js__WEBPACK_IMPORTED_MODULE_1__["PresenceContext"]));
}
function isPresent(context) {
  return context === null ? true : context.isPresent;
}
var counter = 0;
var incrementId = function incrementId() {
  return counter++;
};
var useUniqueId = function useUniqueId() {
  return Object(_utils_use_constant_js__WEBPACK_IMPORTED_MODULE_2__["useConstant"])(incrementId);
};


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/components/AnimateSharedLayout/index.js":
/*!************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/components/AnimateSharedLayout/index.js ***!
  \************************************************************************************/
/*! exports provided: AnimateSharedLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimateSharedLayout", function() { return AnimateSharedLayout; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types.js */ "./node_modules/framer-motion/dist/es/components/AnimateSharedLayout/types.js");
/* harmony import */ var _utils_stack_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/stack.js */ "./node_modules/framer-motion/dist/es/components/AnimateSharedLayout/utils/stack.js");
/* harmony import */ var _context_SharedLayoutContext_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/SharedLayoutContext.js */ "./node_modules/framer-motion/dist/es/context/SharedLayoutContext.js");
/* harmony import */ var _context_MotionContext_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../context/MotionContext/index.js */ "./node_modules/framer-motion/dist/es/context/MotionContext/index.js");
/* harmony import */ var _utils_rotate_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/rotate.js */ "./node_modules/framer-motion/dist/es/components/AnimateSharedLayout/utils/rotate.js");
/* harmony import */ var _utils_batcher_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/batcher.js */ "./node_modules/framer-motion/dist/es/components/AnimateSharedLayout/utils/batcher.js");
/* harmony import */ var _render_dom_projection_utils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../render/dom/projection/utils.js */ "./node_modules/framer-motion/dist/es/render/dom/projection/utils.js");










/**
 * @public
 */
var AnimateSharedLayout = /** @class */function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AnimateSharedLayout, _super);
  function AnimateSharedLayout() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    /**
     * A list of all the children in the shared layout
     */
    _this.children = new Set();
    /**
     * As animate components with a defined `layoutId` are added/removed to the tree,
     * we store them in order. When one is added, it will animate out from the
     * previous one, and when it's removed, it'll animate to the previous one.
     */
    _this.stacks = new Map();
    /**
     * Track whether the component has mounted. If it hasn't, the presence of added children
     * are set to Present, whereas if it has they're considered Entering
     */
    _this.hasMounted = false;
    /**
     * Track whether we already have an update scheduled. If we don't, we'll run snapshots
     * and schedule one.
     */
    _this.updateScheduled = false;
    /**
     * Tracks whether we already have a render scheduled. If we don't, we'll force one with this.forceRender
     */
    _this.renderScheduled = false;
    /**
     * The methods provided to all children in the shared layout tree.
     */
    _this.syncContext = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, Object(_utils_batcher_js__WEBPACK_IMPORTED_MODULE_7__["createBatcher"])()), {
      syncUpdate: function syncUpdate(force) {
        return _this.scheduleUpdate(force);
      },
      forceUpdate: function forceUpdate() {
        // By copying syncContext to itself, when this component re-renders it'll also re-render
        // all children subscribed to the SharedLayout context.
        _this.syncContext = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.syncContext);
        _this.scheduleUpdate(true);
      },
      register: function register(child) {
        return _this.addChild(child);
      },
      remove: function remove(child) {
        return _this.removeChild(child);
      }
    });
    return _this;
  }
  AnimateSharedLayout.prototype.componentDidMount = function () {
    this.hasMounted = true;
  };
  AnimateSharedLayout.prototype.componentDidUpdate = function () {
    this.startLayoutAnimation();
  };
  AnimateSharedLayout.prototype.shouldComponentUpdate = function () {
    this.renderScheduled = true;
    return true;
  };
  AnimateSharedLayout.prototype.startLayoutAnimation = function () {
    var _this = this;
    /**
     * Reset update and render scheduled status
     */
    this.renderScheduled = this.updateScheduled = false;
    var type = this.props.type;
    /**
     * Update presence metadata based on the latest AnimatePresence status.
     * This is a kind of goofy way of dealing with this, perhaps there's a better model to find.
     */
    this.children.forEach(function (child) {
      if (!child.isPresent) {
        child.presence = _types_js__WEBPACK_IMPORTED_MODULE_2__["Presence"].Exiting;
      } else if (child.presence !== _types_js__WEBPACK_IMPORTED_MODULE_2__["Presence"].Entering) {
        child.presence = child.presence === _types_js__WEBPACK_IMPORTED_MODULE_2__["Presence"].Exiting ? _types_js__WEBPACK_IMPORTED_MODULE_2__["Presence"].Entering : _types_js__WEBPACK_IMPORTED_MODULE_2__["Presence"].Present;
      }
    });
    this.updateStacks();
    /**
     * Create a handler which we can use to flush the children animations
     */
    var handler = {
      layoutReady: function layoutReady(child) {
        if (child.getLayoutId() !== undefined) {
          var stack = _this.getStack(child);
          stack.animate(child, type === "crossfade");
        } else {
          child.notifyLayoutReady();
        }
      },
      parent: this.context.visualElement
    };
    /**
     * Shared layout animations can be used without the AnimateSharedLayout wrapping component.
     * This requires some co-ordination across components to stop layout thrashing
     * and ensure measurements are taken at the correct time.
     *
     * Here we use that same mechanism of schedule/flush.
     */
    this.children.forEach(function (child) {
      return _this.syncContext.add(child);
    });
    this.syncContext.flush(handler);
    /**
     * Clear snapshots so subsequent rerenders don't retain memory of outgoing components
     */
    this.stacks.forEach(function (stack) {
      return stack.clearSnapshot();
    });
  };
  AnimateSharedLayout.prototype.updateStacks = function () {
    this.stacks.forEach(function (stack) {
      return stack.updateLeadAndFollow();
    });
  };
  AnimateSharedLayout.prototype.scheduleUpdate = function (force) {
    if (force === void 0) {
      force = false;
    }
    if (!(force || !this.updateScheduled)) return;
    /**
     * Flag we've scheduled an update
     */
    this.updateScheduled = true;
    /**
     * Write: Reset transforms so bounding boxes can be accurately measured.
     */
    this.children.forEach(function (child) {
      Object(_utils_rotate_js__WEBPACK_IMPORTED_MODULE_6__["resetRotate"])(child);
      if (child.shouldResetTransform()) child.resetTransform();
    });
    /**
     * Read: Snapshot children
     */
    this.children.forEach(_render_dom_projection_utils_js__WEBPACK_IMPORTED_MODULE_8__["snapshotViewportBox"]);
    /**
     * Every child keeps a local snapshot, but we also want to record
     * snapshots of the visible children as, if they're are being removed
     * in this render, we can still access them.
     *
     * TODO: What would be better here is doing a single loop where we
     * only snapshotViewportBoxes of undefined layoutIds and then one for each stack
     */
    this.stacks.forEach(function (stack) {
      return stack.updateSnapshot();
    });
    /**
     * Force a rerender by setting state if we aren't already going to render.
     */
    if (force || !this.renderScheduled) {
      this.renderScheduled = true;
      this.forceUpdate();
    }
  };
  AnimateSharedLayout.prototype.addChild = function (child) {
    this.children.add(child);
    this.addToStack(child);
    child.presence = this.hasMounted ? _types_js__WEBPACK_IMPORTED_MODULE_2__["Presence"].Entering : _types_js__WEBPACK_IMPORTED_MODULE_2__["Presence"].Present;
  };
  AnimateSharedLayout.prototype.removeChild = function (child) {
    this.scheduleUpdate();
    this.children["delete"](child);
    this.removeFromStack(child);
  };
  AnimateSharedLayout.prototype.addToStack = function (child) {
    var stack = this.getStack(child);
    stack === null || stack === void 0 ? void 0 : stack.add(child);
  };
  AnimateSharedLayout.prototype.removeFromStack = function (child) {
    var stack = this.getStack(child);
    stack === null || stack === void 0 ? void 0 : stack.remove(child);
  };
  /**
   * Return a stack of animate children based on the provided layoutId.
   * Will create a stack if none currently exists with that layoutId.
   */
  AnimateSharedLayout.prototype.getStack = function (child) {
    var id = child.getLayoutId();
    if (id === undefined) return;
    // Create stack if it doesn't already exist
    !this.stacks.has(id) && this.stacks.set(id, Object(_utils_stack_js__WEBPACK_IMPORTED_MODULE_3__["layoutStack"])());
    return this.stacks.get(id);
  };
  AnimateSharedLayout.prototype.render = function () {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_context_SharedLayoutContext_js__WEBPACK_IMPORTED_MODULE_4__["SharedLayoutContext"].Provider, {
      value: this.syncContext
    }, this.props.children);
  };
  AnimateSharedLayout.contextType = _context_MotionContext_index_js__WEBPACK_IMPORTED_MODULE_5__["MotionContext"];
  return AnimateSharedLayout;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/components/AnimateSharedLayout/types.js":
/*!************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/components/AnimateSharedLayout/types.js ***!
  \************************************************************************************/
/*! exports provided: Presence, VisibilityAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Presence", function() { return Presence; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisibilityAction", function() { return VisibilityAction; });
/**
 * @public
 */
var Presence;
(function (Presence) {
  Presence[Presence["Entering"] = 0] = "Entering";
  Presence[Presence["Present"] = 1] = "Present";
  Presence[Presence["Exiting"] = 2] = "Exiting";
})(Presence || (Presence = {}));
/**
 * @public
 */
var VisibilityAction;
(function (VisibilityAction) {
  VisibilityAction[VisibilityAction["Hide"] = 0] = "Hide";
  VisibilityAction[VisibilityAction["Show"] = 1] = "Show";
})(VisibilityAction || (VisibilityAction = {}));


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/components/AnimateSharedLayout/utils/batcher.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/components/AnimateSharedLayout/utils/batcher.js ***!
  \********************************************************************************************/
/*! exports provided: createBatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBatcher", function() { return createBatcher; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var framesync__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framesync */ "./node_modules/framesync/dist/es/index.js");
/* harmony import */ var _render_dom_projection_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../render/dom/projection/utils.js */ "./node_modules/framer-motion/dist/es/render/dom/projection/utils.js");
/* harmony import */ var _render_dom_utils_batch_layout_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../render/dom/utils/batch-layout.js */ "./node_modules/framer-motion/dist/es/render/dom/utils/batch-layout.js");
/* harmony import */ var _render_utils_compare_by_depth_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../render/utils/compare-by-depth.js */ "./node_modules/framer-motion/dist/es/render/utils/compare-by-depth.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../types.js */ "./node_modules/framer-motion/dist/es/components/AnimateSharedLayout/types.js");







/**
 * Default handlers for batching VisualElements
 */
var defaultHandler = {
  layoutReady: function layoutReady(child) {
    return child.notifyLayoutReady();
  }
};
/**
 * Create a batcher to process VisualElements
 */
function createBatcher() {
  var queue = new Set();
  return {
    add: function add(child) {
      return queue.add(child);
    },
    flush: function flush(_a) {
      var _b = _a === void 0 ? defaultHandler : _a,
        layoutReady = _b.layoutReady,
        parent = _b.parent;
      Object(_render_dom_utils_batch_layout_js__WEBPACK_IMPORTED_MODULE_3__["batchLayout"])(function (read, write) {
        var order = Array.from(queue).sort(_render_utils_compare_by_depth_js__WEBPACK_IMPORTED_MODULE_4__["compareByDepth"]);
        var ancestors = parent ? Object(_render_dom_projection_utils_js__WEBPACK_IMPORTED_MODULE_2__["collectProjectingAncestors"])(parent) : [];
        write(function () {
          var allElements = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(ancestors)), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(order));
          allElements.forEach(function (element) {
            return element.resetTransform();
          });
        });
        read(function () {
          order.forEach(_render_dom_projection_utils_js__WEBPACK_IMPORTED_MODULE_2__["updateLayoutMeasurement"]);
        });
        write(function () {
          ancestors.forEach(function (element) {
            return element.restoreTransform();
          });
          order.forEach(layoutReady);
        });
        read(function () {
          /**
           * After all children have started animating, ensure any Entering components are set to Present.
           * If we add deferred animations (set up all animations and then start them in two loops) this
           * could be moved to the start loop. But it needs to happen after all the animations configs
           * are generated in AnimateSharedLayout as this relies on presence data
           */
          order.forEach(function (child) {
            if (child.isPresent) child.presence = _types_js__WEBPACK_IMPORTED_MODULE_5__["Presence"].Present;
          });
        });
        write(function () {
          /**
           * Starting these animations will have queued jobs on the frame loop. In some situations,
           * like when removing an element, these will be processed too late after the DOM is manipulated,
           * leaving a flash of incorrectly-projected content. By manually flushing these jobs
           * we ensure there's no flash.
           */
          framesync__WEBPACK_IMPORTED_MODULE_1__["flushSync"].preRender();
          framesync__WEBPACK_IMPORTED_MODULE_1__["flushSync"].render();
        });
        read(function () {
          /**
           * Schedule a callback at the end of the following frame to assign the latest projection
           * box to the prevViewportBox snapshot. Once global batching is in place this could be run
           * synchronously. But for now it ensures that if any nested `AnimateSharedLayout` top-level
           * child attempts to calculate its previous relative position against a prevViewportBox
           * it will be against its latest projection box instead, as the snapshot is useless beyond this
           * render.
           */
          framesync__WEBPACK_IMPORTED_MODULE_1__["default"].postRender(function () {
            return order.forEach(assignProjectionToSnapshot);
          });
          queue.clear();
        });
      });
      // TODO: Need to find a layout-synchronous way of flushing this
      Object(_render_dom_utils_batch_layout_js__WEBPACK_IMPORTED_MODULE_3__["flushLayout"])();
    }
  };
}
function assignProjectionToSnapshot(child) {
  child.prevViewportBox = child.projection.target;
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/components/AnimateSharedLayout/utils/crossfader.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/components/AnimateSharedLayout/utils/crossfader.js ***!
  \***********************************************************************************************/
/*! exports provided: createCrossfader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCrossfader", function() { return createCrossfader; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var framesync__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framesync */ "./node_modules/framesync/dist/es/index.js");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/index.js");
/* harmony import */ var _animation_animate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../animation/animate.js */ "./node_modules/framer-motion/dist/es/animation/animate.js");
/* harmony import */ var _animation_utils_transitions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../animation/utils/transitions.js */ "./node_modules/framer-motion/dist/es/animation/utils/transitions.js");
/* harmony import */ var _value_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../value/index.js */ "./node_modules/framer-motion/dist/es/value/index.js");






function createCrossfader() {
  /**
   * The current state of the crossfade as a value between 0 and 1
   */
  var progress = Object(_value_index_js__WEBPACK_IMPORTED_MODULE_5__["motionValue"])(1);
  var options = {
    lead: undefined,
    follow: undefined,
    crossfadeOpacity: false,
    preserveFollowOpacity: false
  };
  var prevOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options);
  var leadState = {};
  var followState = {};
  /**
   *
   */
  var _isActive = false;
  /**
   *
   */
  var finalCrossfadeFrame = null;
  /**
   * Framestamp of the last frame we updated values at.
   */
  var prevUpdate = 0;
  function startCrossfadeAnimation(target, transition) {
    var lead = options.lead,
      follow = options.follow;
    _isActive = true;
    finalCrossfadeFrame = null;
    var hasUpdated = false;
    var onUpdate = function onUpdate() {
      hasUpdated = true;
      lead && lead.scheduleRender();
      follow && follow.scheduleRender();
    };
    var _onComplete = function onComplete() {
      _isActive = false;
      /**
       * If the crossfade animation is no longer active, flag a frame
       * that we're still allowed to crossfade
       */
      finalCrossfadeFrame = Object(framesync__WEBPACK_IMPORTED_MODULE_1__["getFrameData"])().timestamp;
    };
    transition = transition && Object(_animation_utils_transitions_js__WEBPACK_IMPORTED_MODULE_4__["getValueTransition"])(transition, "crossfade");
    return Object(_animation_animate_js__WEBPACK_IMPORTED_MODULE_3__["animate"])(progress, target, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, transition), {
      onUpdate: onUpdate,
      onComplete: function onComplete() {
        if (!hasUpdated) {
          progress.set(target);
          /**
           * If we never ran an update, for instance if this was an instant transition, fire a
           * simulated final frame to ensure the crossfade gets applied correctly.
           */
          framesync__WEBPACK_IMPORTED_MODULE_1__["default"].read(_onComplete);
        } else {
          _onComplete();
        }
        onUpdate();
      }
    }));
  }
  function updateCrossfade() {
    var _a, _b;
    /**
     * We only want to compute the crossfade once per frame, so we
     * compare the previous update framestamp with the current frame
     * and early return if they're the same.
     */
    var timestamp = Object(framesync__WEBPACK_IMPORTED_MODULE_1__["getFrameData"])().timestamp;
    var lead = options.lead,
      follow = options.follow;
    if (timestamp === prevUpdate || !lead) return;
    prevUpdate = timestamp;
    /**
     * Merge each component's latest values into our crossfaded state
     * before crossfading.
     */
    var latestLeadValues = lead.getLatestValues();
    Object.assign(leadState, latestLeadValues);
    var latestFollowValues = follow ? follow.getLatestValues() : options.prevValues;
    Object.assign(followState, latestFollowValues);
    var p = progress.get();
    /**
     * Crossfade the opacity between the two components. This will result
     * in a different opacity for each component.
     */
    var leadTargetOpacity = (_a = latestLeadValues.opacity) !== null && _a !== void 0 ? _a : 1;
    var followTargetOpacity = (_b = latestFollowValues === null || latestFollowValues === void 0 ? void 0 : latestFollowValues.opacity) !== null && _b !== void 0 ? _b : 1;
    if (options.crossfadeOpacity && follow) {
      leadState.opacity = Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["mix"])(
      /**
       * If the follow child has been completely hidden we animate
       * this opacity from its previous opacity, but otherwise from completely transparent.
       */
      follow.isVisible !== false ? 0 : followTargetOpacity, leadTargetOpacity, easeCrossfadeIn(p));
      followState.opacity = options.preserveFollowOpacity ? followTargetOpacity : Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["mix"])(followTargetOpacity, 0, easeCrossfadeOut(p));
    } else if (!follow) {
      leadState.opacity = Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["mix"])(followTargetOpacity, leadTargetOpacity, p);
    }
    mixValues(leadState, followState, latestLeadValues, latestFollowValues || {}, Boolean(follow), p);
  }
  return {
    isActive: function isActive() {
      return leadState && (_isActive || Object(framesync__WEBPACK_IMPORTED_MODULE_1__["getFrameData"])().timestamp === finalCrossfadeFrame);
    },
    fromLead: function fromLead(transition) {
      return startCrossfadeAnimation(0, transition);
    },
    toLead: function toLead(transition) {
      var initialProgress = 0;
      if (!options.prevValues && !options.follow) {
        /**
         * If we're not coming from anywhere, start at the end of the animation.
         */
        initialProgress = 1;
      } else if (prevOptions.lead === options.follow && prevOptions.follow === options.lead) {
        /**
         * If we're swapping follow/lead we can reverse the progress
         */
        initialProgress = 1 - progress.get();
      }
      progress.set(initialProgress);
      return startCrossfadeAnimation(1, transition);
    },
    reset: function reset() {
      return progress.set(1);
    },
    stop: function stop() {
      return progress.stop();
    },
    getCrossfadeState: function getCrossfadeState(element) {
      updateCrossfade();
      if (element === options.lead) {
        return leadState;
      } else if (element === options.follow) {
        return followState;
      }
    },
    setOptions: function setOptions(newOptions) {
      prevOptions = options;
      options = newOptions;
      leadState = {};
      followState = {};
    },
    getLatestValues: function getLatestValues() {
      return leadState;
    }
  };
}
var easeCrossfadeIn = compress(0, 0.5, popmotion__WEBPACK_IMPORTED_MODULE_2__["circOut"]);
var easeCrossfadeOut = compress(0.5, 0.95, popmotion__WEBPACK_IMPORTED_MODULE_2__["linear"]);
function compress(min, max, easing) {
  return function (p) {
    // Could replace ifs with clamp
    if (p < min) return 0;
    if (p > max) return 1;
    return easing(Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["progress"])(min, max, p));
  };
}
var borders = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"];
var numBorders = borders.length;
function mixValues(leadState, followState, latestLeadValues, latestFollowValues, hasFollowElement, p) {
  /**
   * Mix border radius
   */
  for (var i = 0; i < numBorders; i++) {
    var borderLabel = "border" + borders[i] + "Radius";
    var followRadius = getRadius(latestFollowValues, borderLabel);
    var leadRadius = getRadius(latestLeadValues, borderLabel);
    if (followRadius === undefined && leadRadius === undefined) continue;
    followRadius || (followRadius = 0);
    leadRadius || (leadRadius = 0);
    /**
     * Currently we're only crossfading between numerical border radius.
     * It would be possible to crossfade between percentages for a little
     * extra bundle size.
     */
    if (typeof followRadius === "number" && typeof leadRadius === "number") {
      var radius = Math.max(Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["mix"])(followRadius, leadRadius, p), 0);
      leadState[borderLabel] = followState[borderLabel] = radius;
    }
  }
  /**
   * Mix rotation
   */
  if (latestFollowValues.rotate || latestLeadValues.rotate) {
    var rotate = Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["mix"])(latestFollowValues.rotate || 0, latestLeadValues.rotate || 0, p);
    leadState.rotate = followState.rotate = rotate;
  }
  /**
   * We only want to mix the background color if there's a follow element
   * that we're not crossfading opacity between. For instance with switch
   * AnimateSharedLayout animations, this helps the illusion of a continuous
   * element being animated but also cuts down on the number of paints triggered
   * for elements where opacity is doing that work for us.
   */
  if (!hasFollowElement && latestLeadValues.backgroundColor && latestFollowValues.backgroundColor) {
    /**
     * This isn't ideal performance-wise as mixColor is creating a new function every frame.
     * We could probably create a mixer that runs at the start of the animation but
     * the idea behind the crossfader is that it runs dynamically between two potentially
     * changing targets (ie opacity or borderRadius may be animating independently via variants)
     */
    leadState.backgroundColor = followState.backgroundColor = Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["mixColor"])(latestFollowValues.backgroundColor, latestLeadValues.backgroundColor)(p);
  }
}
function getRadius(values, radiusName) {
  var _a;
  return (_a = values[radiusName]) !== null && _a !== void 0 ? _a : values.borderRadius;
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/components/AnimateSharedLayout/utils/rotate.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/components/AnimateSharedLayout/utils/rotate.js ***!
  \*******************************************************************************************/
/*! exports provided: resetRotate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetRotate", function() { return resetRotate; });
/* harmony import */ var _render_html_utils_transform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../render/html/utils/transform.js */ "./node_modules/framer-motion/dist/es/render/html/utils/transform.js");

function resetRotate(child) {
  // If there's no detected rotation values, we can early return without a forced render.
  var hasRotate = false;
  // Keep a record of all the values we've reset
  var resetValues = {};
  // Check the rotate value of all axes and reset to 0
  for (var i = 0; i < _render_html_utils_transform_js__WEBPACK_IMPORTED_MODULE_0__["transformAxes"].length; i++) {
    var axis = _render_html_utils_transform_js__WEBPACK_IMPORTED_MODULE_0__["transformAxes"][i];
    var key = "rotate" + axis;
    // If this rotation doesn't exist as a motion value, then we don't
    // need to reset it
    if (!child.hasValue(key) || child.getStaticValue(key) === 0) continue;
    hasRotate = true;
    // Record the rotation and then temporarily set it to 0
    resetValues[key] = child.getStaticValue(key);
    child.setStaticValue(key, 0);
  }
  // If there's no rotation values, we don't need to do any more.
  if (!hasRotate) return;
  // Force a render of this element to apply the transform with all rotations
  // set to 0.
  child.syncRender();
  // Put back all the values we reset
  for (var key in resetValues) {
    child.setStaticValue(key, resetValues[key]);
  }
  // Schedule a render for the next frame. This ensures we won't visually
  // see the element with the reset rotate value applied.
  child.scheduleRender();
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/components/AnimateSharedLayout/utils/stack.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/components/AnimateSharedLayout/utils/stack.js ***!
  \******************************************************************************************/
/*! exports provided: layoutStack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layoutStack", function() { return layoutStack; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types.js */ "./node_modules/framer-motion/dist/es/components/AnimateSharedLayout/types.js");
/* harmony import */ var _gestures_drag_VisualElementDragControls_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../gestures/drag/VisualElementDragControls.js */ "./node_modules/framer-motion/dist/es/gestures/drag/VisualElementDragControls.js");
/* harmony import */ var _crossfader_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./crossfader.js */ "./node_modules/framer-motion/dist/es/components/AnimateSharedLayout/utils/crossfader.js");




function layoutStack() {
  var stack = new Set();
  var state = {
    leadIsExiting: false
  };
  var prevState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state);
  var prevValues;
  var prevViewportBox;
  var prevDragCursor;
  var crossfader = Object(_crossfader_js__WEBPACK_IMPORTED_MODULE_3__["createCrossfader"])();
  var needsCrossfadeAnimation = false;
  function getFollowViewportBox() {
    return state.follow ? state.follow.prevViewportBox : prevViewportBox;
  }
  function getFollowLayout() {
    var _a;
    return (_a = state.follow) === null || _a === void 0 ? void 0 : _a.getLayoutState().layout;
  }
  return {
    add: function add(element) {
      element.setCrossfader(crossfader);
      stack.add(element);
      /**
       * Hydrate new element with previous drag position if we have one
       */
      if (prevDragCursor) element.prevDragCursor = prevDragCursor;
      if (!state.lead) state.lead = element;
    },
    remove: function remove(element) {
      stack["delete"](element);
    },
    getLead: function getLead() {
      return state.lead;
    },
    updateSnapshot: function updateSnapshot() {
      if (!state.lead) return;
      prevValues = crossfader.isActive() ? crossfader.getLatestValues() : state.lead.getLatestValues();
      prevViewportBox = state.lead.prevViewportBox;
      var dragControls = _gestures_drag_VisualElementDragControls_js__WEBPACK_IMPORTED_MODULE_2__["elementDragControls"].get(state.lead);
      if (dragControls && dragControls.isDragging) {
        prevDragCursor = dragControls.cursorProgress;
      }
    },
    clearSnapshot: function clearSnapshot() {
      prevDragCursor = prevViewportBox = undefined;
    },
    updateLeadAndFollow: function updateLeadAndFollow() {
      var _a;
      prevState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state);
      var lead;
      var follow;
      var order = Array.from(stack);
      for (var i = order.length; i--; i >= 0) {
        var element = order[i];
        if (lead) follow !== null && follow !== void 0 ? follow : follow = element;
        lead !== null && lead !== void 0 ? lead : lead = element;
        if (lead && follow) break;
      }
      state.lead = lead;
      state.follow = follow;
      state.leadIsExiting = ((_a = state.lead) === null || _a === void 0 ? void 0 : _a.presence) === _types_js__WEBPACK_IMPORTED_MODULE_1__["Presence"].Exiting;
      crossfader.setOptions({
        lead: lead,
        follow: follow,
        prevValues: prevValues,
        crossfadeOpacity: (follow === null || follow === void 0 ? void 0 : follow.isPresenceRoot) || (lead === null || lead === void 0 ? void 0 : lead.isPresenceRoot)
      });
      if (
      // Don't crossfade if we've just animated back from lead and switched the
      // old follow to the new lead.
      state.lead !== prevState.follow && (prevState.lead !== state.lead || prevState.leadIsExiting !== state.leadIsExiting)) {
        needsCrossfadeAnimation = true;
      }
    },
    animate: function animate(child, shouldCrossfade) {
      var _a;
      if (shouldCrossfade === void 0) {
        shouldCrossfade = false;
      }
      if (child === state.lead) {
        if (shouldCrossfade) {
          /**
           * Point a lead to itself in case it was previously pointing
           * to a different visual element
           */
          child.pointTo(state.lead);
        } else {
          child.setVisibility(true);
        }
        var config = {};
        var prevParent = (_a = state.follow) === null || _a === void 0 ? void 0 : _a.getProjectionParent();
        if (prevParent) {
          /**
           * We'll use this to determine if the element or its layoutId has been reparented.
           */
          config.prevParent = prevParent;
        }
        if (child.presence === _types_js__WEBPACK_IMPORTED_MODULE_1__["Presence"].Entering) {
          config.originBox = getFollowViewportBox();
        } else if (child.presence === _types_js__WEBPACK_IMPORTED_MODULE_1__["Presence"].Exiting) {
          config.targetBox = getFollowLayout();
        }
        if (needsCrossfadeAnimation) {
          needsCrossfadeAnimation = false;
          var transition = child.getDefaultTransition();
          child.presence === _types_js__WEBPACK_IMPORTED_MODULE_1__["Presence"].Entering ? crossfader.toLead(transition) : crossfader.fromLead(transition);
        }
        child.notifyLayoutReady(config);
      } else {
        if (shouldCrossfade) {
          state.lead && child.pointTo(state.lead);
        } else {
          child.setVisibility(false);
        }
      }
    }
  };
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/components/LazyMotion/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/components/LazyMotion/index.js ***!
  \***************************************************************************/
/*! exports provided: LazyMotion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyMotion", function() { return LazyMotion; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_LazyContext_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/LazyContext.js */ "./node_modules/framer-motion/dist/es/context/LazyContext.js");
/* harmony import */ var _motion_features_definitions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../motion/features/definitions.js */ "./node_modules/framer-motion/dist/es/motion/features/definitions.js");






/**
 * Used in conjunction with the `m` component to reduce bundle size.
 *
 * `m` is a version of the `motion` component that only loads functionality
 * critical for the initial render.
 *
 * `LazyMotion` can then be used to either synchronously or asynchronously
 * load animation and gesture support.
 *
 * ```jsx
 * // Synchronous loading
 * import { LazyMotion, m, domAnimations } from "framer-motion"
 *
 * function App() {
 *   return (
 *     <LazyMotion features={domAnimations}>
 *       <m.div animate={{ scale: 2 }} />
 *     </LazyMotion>
 *   )
 * }
 *
 * // Asynchronous loading
 * import { LazyMotion, m } from "framer-motion"
 *
 * function App() {
 *   return (
 *     <LazyMotion features={() => import('./path/to/domAnimations')}>
 *       <m.div animate={{ scale: 2 }} />
 *     </LazyMotion>
 *   )
 * }
 * ```
 *
 * @public
 */
function LazyMotion(_a) {
  var children = _a.children,
    features = _a.features,
    _b = _a.strict,
    strict = _b === void 0 ? false : _b;
  var _c = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(!isLazyBundle(features)), 2),
    setIsLoaded = _c[1];
  var loadedRenderer = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(undefined);
  /**
   * If this is a synchronous load, load features immediately
   */
  if (!isLazyBundle(features)) {
    var renderer = features.renderer,
      loadedFeatures = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(features, ["renderer"]);
    loadedRenderer.current = renderer;
    Object(_motion_features_definitions_js__WEBPACK_IMPORTED_MODULE_3__["loadFeatures"])(loadedFeatures);
  }
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (isLazyBundle(features)) {
      features().then(function (_a) {
        var renderer = _a.renderer,
          loadedFeatures = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["renderer"]);
        Object(_motion_features_definitions_js__WEBPACK_IMPORTED_MODULE_3__["loadFeatures"])(loadedFeatures);
        loadedRenderer.current = renderer;
        setIsLoaded(true);
      });
    }
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_context_LazyContext_js__WEBPACK_IMPORTED_MODULE_2__["LazyContext"].Provider, {
    value: {
      renderer: loadedRenderer.current,
      strict: strict
    }
  }, children);
}
function isLazyBundle(features) {
  return typeof features === "function";
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/components/MotionConfig/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/components/MotionConfig/index.js ***!
  \*****************************************************************************/
/*! exports provided: MotionConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotionConfig", function() { return MotionConfig; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_MotionConfigContext_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/MotionConfigContext.js */ "./node_modules/framer-motion/dist/es/context/MotionConfigContext.js");
/* harmony import */ var _utils_use_constant_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/use-constant.js */ "./node_modules/framer-motion/dist/es/utils/use-constant.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }






/**
 * `MotionConfig` is used to set configuration options for all children `motion` components.
 *
 * ```jsx
 * import { motion, MotionConfig } from "framer-motion"
 *
 * export function App() {
 *   return (
 *     <MotionConfig transition={{ type: "spring" }}>
 *       <motion.div animate={{ x: 100 }} />
 *     </MotionConfig>
 *   )
 * }
 * ```
 *
 * @public
 */
function MotionConfig(_a) {
  var children = _a.children,
    config = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["children"]);
  /**
   * Inherit props from any parent MotionConfig components
   */
  config = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_MotionConfigContext_js__WEBPACK_IMPORTED_MODULE_2__["MotionConfigContext"])), config);
  /**
   * Don't allow isStatic to change between renders as it affects how many hooks
   * motion components fire.
   */
  config.isStatic = Object(_utils_use_constant_js__WEBPACK_IMPORTED_MODULE_3__["useConstant"])(function () {
    return config.isStatic;
  });
  /**
   * Creating a new config context object will re-render every `motion` component
   * every time it renders. So we only want to create a new one sparingly.
   */
  var transitionDependency = _typeof(config.transition) === "object" ? config.transition.toString() : "";
  var context = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return config;
  }, [transitionDependency, config.transformPagePoint]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_context_MotionConfigContext_js__WEBPACK_IMPORTED_MODULE_2__["MotionConfigContext"].Provider, {
    value: context
  }, children);
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/context/LayoutGroupContext.js":
/*!**************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/context/LayoutGroupContext.js ***!
  \**************************************************************************/
/*! exports provided: LayoutGroupContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutGroupContext", function() { return LayoutGroupContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


/**
 * @internal
 */
var LayoutGroupContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null);


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/context/LazyContext.js":
/*!*******************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/context/LazyContext.js ***!
  \*******************************************************************/
/*! exports provided: LazyContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyContext", function() { return LazyContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var LazyContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({
  strict: false
});


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/context/MotionConfigContext.js":
/*!***************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/context/MotionConfigContext.js ***!
  \***************************************************************************/
/*! exports provided: MotionConfigContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotionConfigContext", function() { return MotionConfigContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


/**
 * @public
 */
var MotionConfigContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({
  transformPagePoint: function transformPagePoint(p) {
    return p;
  },
  isStatic: false
});


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/context/MotionContext/create.js":
/*!****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/context/MotionContext/create.js ***!
  \****************************************************************************/
/*! exports provided: useCreateMotionContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCreateMotionContext", function() { return useCreateMotionContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./node_modules/framer-motion/dist/es/context/MotionContext/index.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./node_modules/framer-motion/dist/es/context/MotionContext/utils.js");



function useCreateMotionContext(props, isStatic) {
  var _a = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["getCurrentTreeVariants"])(props, Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_index_js__WEBPACK_IMPORTED_MODULE_1__["MotionContext"])),
    initial = _a.initial,
    animate = _a.animate;
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return {
      initial: initial,
      animate: animate
    };
  },
  /**
   * Only break memoisation in static mode
   */
  isStatic ? [variantLabelsAsDependency(initial), variantLabelsAsDependency(animate)] : []);
}
function variantLabelsAsDependency(prop) {
  return Array.isArray(prop) ? prop.join(" ") : prop;
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/context/MotionContext/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/context/MotionContext/index.js ***!
  \***************************************************************************/
/*! exports provided: MotionContext, useVisualElementContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotionContext", function() { return MotionContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useVisualElementContext", function() { return useVisualElementContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var MotionContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({});
function useVisualElementContext() {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(MotionContext).visualElement;
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/context/MotionContext/utils.js":
/*!***************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/context/MotionContext/utils.js ***!
  \***************************************************************************/
/*! exports provided: getCurrentTreeVariants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentTreeVariants", function() { return getCurrentTreeVariants; });
/* harmony import */ var _render_utils_variants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../render/utils/variants.js */ "./node_modules/framer-motion/dist/es/render/utils/variants.js");

function getCurrentTreeVariants(props, context) {
  if (Object(_render_utils_variants_js__WEBPACK_IMPORTED_MODULE_0__["checkIfControllingVariants"])(props)) {
    var initial = props.initial,
      animate = props.animate;
    return {
      initial: initial === false || Object(_render_utils_variants_js__WEBPACK_IMPORTED_MODULE_0__["isVariantLabel"])(initial) ? initial : undefined,
      animate: Object(_render_utils_variants_js__WEBPACK_IMPORTED_MODULE_0__["isVariantLabel"])(animate) ? animate : undefined
    };
  }
  return props.inherit !== false ? context : {};
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/context/PresenceContext.js":
/*!***********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/context/PresenceContext.js ***!
  \***********************************************************************/
/*! exports provided: PresenceContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresenceContext", function() { return PresenceContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


/**
 * @public
 */
var PresenceContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null);


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/context/SharedLayoutContext.js":
/*!***************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/context/SharedLayoutContext.js ***!
  \***************************************************************************/
/*! exports provided: FramerTreeLayoutContext, SharedLayoutContext, isSharedLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FramerTreeLayoutContext", function() { return FramerTreeLayoutContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedLayoutContext", function() { return SharedLayoutContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSharedLayout", function() { return isSharedLayout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_AnimateSharedLayout_utils_batcher_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/AnimateSharedLayout/utils/batcher.js */ "./node_modules/framer-motion/dist/es/components/AnimateSharedLayout/utils/batcher.js");


var SharedLayoutContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(Object(_components_AnimateSharedLayout_utils_batcher_js__WEBPACK_IMPORTED_MODULE_1__["createBatcher"])());
/**
 * @internal
 */
var FramerTreeLayoutContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(Object(_components_AnimateSharedLayout_utils_batcher_js__WEBPACK_IMPORTED_MODULE_1__["createBatcher"])());
function isSharedLayout(context) {
  return !!context.forceUpdate;
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/events/event-info.js":
/*!*****************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/events/event-info.js ***!
  \*****************************************************************/
/*! exports provided: extractEventInfo, getViewportPointFromEvent, wrapHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractEventInfo", function() { return extractEventInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getViewportPointFromEvent", function() { return getViewportPointFromEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapHandler", function() { return wrapHandler; });
/* harmony import */ var _gestures_utils_event_type_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gestures/utils/event-type.js */ "./node_modules/framer-motion/dist/es/gestures/utils/event-type.js");


/**
 * Filters out events not attached to the primary pointer (currently left mouse button)
 * @param eventHandler
 */
function filterPrimaryPointer(eventHandler) {
  return function (event) {
    var isMouseEvent = event instanceof MouseEvent;
    var isPrimaryPointer = !isMouseEvent || isMouseEvent && event.button === 0;
    if (isPrimaryPointer) {
      eventHandler(event);
    }
  };
}
var defaultPagePoint = {
  pageX: 0,
  pageY: 0
};
function pointFromTouch(e, pointType) {
  if (pointType === void 0) {
    pointType = "page";
  }
  var primaryTouch = e.touches[0] || e.changedTouches[0];
  var point = primaryTouch || defaultPagePoint;
  return {
    x: point[pointType + "X"],
    y: point[pointType + "Y"]
  };
}
function pointFromMouse(point, pointType) {
  if (pointType === void 0) {
    pointType = "page";
  }
  return {
    x: point[pointType + "X"],
    y: point[pointType + "Y"]
  };
}
function extractEventInfo(event, pointType) {
  if (pointType === void 0) {
    pointType = "page";
  }
  return {
    point: Object(_gestures_utils_event_type_js__WEBPACK_IMPORTED_MODULE_0__["isTouchEvent"])(event) ? pointFromTouch(event, pointType) : pointFromMouse(event, pointType)
  };
}
function getViewportPointFromEvent(event) {
  return extractEventInfo(event, "client");
}
var wrapHandler = function wrapHandler(handler, shouldFilterPrimaryPointer) {
  if (shouldFilterPrimaryPointer === void 0) {
    shouldFilterPrimaryPointer = false;
  }
  var listener = function listener(event) {
    return handler(event, extractEventInfo(event));
  };
  return shouldFilterPrimaryPointer ? filterPrimaryPointer(listener) : listener;
};


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/events/use-dom-event.js":
/*!********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/events/use-dom-event.js ***!
  \********************************************************************/
/*! exports provided: addDomEvent, useDomEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addDomEvent", function() { return addDomEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDomEvent", function() { return useDomEvent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function addDomEvent(target, eventName, handler, options) {
  target.addEventListener(eventName, handler, options);
  return function () {
    return target.removeEventListener(eventName, handler, options);
  };
}
/**
 * Attaches an event listener directly to the provided DOM element.
 *
 * Bypassing React's event system can be desirable, for instance when attaching non-passive
 * event handlers.
 *
 * ```jsx
 * const ref = useRef(null)
 *
 * useDomEvent(ref, 'wheel', onWheel, { passive: false })
 *
 * return <div ref={ref} />
 * ```
 *
 * @param ref - React.RefObject that's been provided to the element you want to bind the listener to.
 * @param eventName - Name of the event you want listen for.
 * @param handler - Function to fire when receiving the event.
 * @param options - Options to pass to `Event.addEventListener`.
 *
 * @public
 */
function useDomEvent(ref, eventName, handler, options) {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var element = ref.current;
    if (handler && element) {
      return addDomEvent(element, eventName, handler, options);
    }
  }, [ref, eventName, handler, options]);
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/events/use-pointer-event.js":
/*!************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/events/use-pointer-event.js ***!
  \************************************************************************/
/*! exports provided: addPointerEvent, usePointerEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPointerEvent", function() { return addPointerEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePointerEvent", function() { return usePointerEvent; });
/* harmony import */ var _use_dom_event_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use-dom-event.js */ "./node_modules/framer-motion/dist/es/events/use-dom-event.js");
/* harmony import */ var _event_info_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-info.js */ "./node_modules/framer-motion/dist/es/events/event-info.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./node_modules/framer-motion/dist/es/events/utils.js");



var mouseEventNames = {
  pointerdown: "mousedown",
  pointermove: "mousemove",
  pointerup: "mouseup",
  pointercancel: "mousecancel",
  pointerover: "mouseover",
  pointerout: "mouseout",
  pointerenter: "mouseenter",
  pointerleave: "mouseleave"
};
var touchEventNames = {
  pointerdown: "touchstart",
  pointermove: "touchmove",
  pointerup: "touchend",
  pointercancel: "touchcancel"
};
function getPointerEventName(name) {
  if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["supportsPointerEvents"])()) {
    return name;
  } else if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["supportsTouchEvents"])()) {
    return touchEventNames[name];
  } else if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["supportsMouseEvents"])()) {
    return mouseEventNames[name];
  }
  return name;
}
function addPointerEvent(target, eventName, handler, options) {
  return Object(_use_dom_event_js__WEBPACK_IMPORTED_MODULE_0__["addDomEvent"])(target, getPointerEventName(eventName), Object(_event_info_js__WEBPACK_IMPORTED_MODULE_1__["wrapHandler"])(handler, eventName === "pointerdown"), options);
}
function usePointerEvent(ref, eventName, handler, options) {
  return Object(_use_dom_event_js__WEBPACK_IMPORTED_MODULE_0__["useDomEvent"])(ref, getPointerEventName(eventName), handler && Object(_event_info_js__WEBPACK_IMPORTED_MODULE_1__["wrapHandler"])(handler, eventName === "pointerdown"), options);
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/events/utils.js":
/*!************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/events/utils.js ***!
  \************************************************************/
/*! exports provided: supportsMouseEvents, supportsPointerEvents, supportsTouchEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsMouseEvents", function() { return supportsMouseEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsPointerEvents", function() { return supportsPointerEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsTouchEvents", function() { return supportsTouchEvents; });
/* harmony import */ var _utils_is_browser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/is-browser.js */ "./node_modules/framer-motion/dist/es/utils/is-browser.js");


// We check for event support via functions in case they've been mocked by a testing suite.
var supportsPointerEvents = function supportsPointerEvents() {
  return _utils_is_browser_js__WEBPACK_IMPORTED_MODULE_0__["isBrowser"] && window.onpointerdown === null;
};
var supportsTouchEvents = function supportsTouchEvents() {
  return _utils_is_browser_js__WEBPACK_IMPORTED_MODULE_0__["isBrowser"] && window.ontouchstart === null;
};
var supportsMouseEvents = function supportsMouseEvents() {
  return _utils_is_browser_js__WEBPACK_IMPORTED_MODULE_0__["isBrowser"] && window.onmousedown === null;
};


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/gestures/PanSession.js":
/*!*******************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/gestures/PanSession.js ***!
  \*******************************************************************/
/*! exports provided: PanSession */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanSession", function() { return PanSession; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utils_event_type_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/event-type.js */ "./node_modules/framer-motion/dist/es/gestures/utils/event-type.js");
/* harmony import */ var _events_event_info_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../events/event-info.js */ "./node_modules/framer-motion/dist/es/events/event-info.js");
/* harmony import */ var framesync__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framesync */ "./node_modules/framesync/dist/es/index.js");
/* harmony import */ var _utils_time_conversion_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/time-conversion.js */ "./node_modules/framer-motion/dist/es/utils/time-conversion.js");
/* harmony import */ var _events_use_pointer_event_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../events/use-pointer-event.js */ "./node_modules/framer-motion/dist/es/events/use-pointer-event.js");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/index.js");








/**
 * @internal
 */
var PanSession = /** @class */function () {
  function PanSession(event, handlers, _a) {
    var _this = this;
    var _b = _a === void 0 ? {} : _a,
      transformPagePoint = _b.transformPagePoint;
    /**
     * @internal
     */
    this.startEvent = null;
    /**
     * @internal
     */
    this.lastMoveEvent = null;
    /**
     * @internal
     */
    this.lastMoveEventInfo = null;
    /**
     * @internal
     */
    this.handlers = {};
    this.updatePoint = function () {
      if (!(_this.lastMoveEvent && _this.lastMoveEventInfo)) return;
      var info = getPanInfo(_this.lastMoveEventInfo, _this.history);
      var isPanStarted = _this.startEvent !== null;
      // Only start panning if the offset is larger than 3 pixels. If we make it
      // any larger than this we'll want to reset the pointer history
      // on the first update to avoid visual snapping to the cursoe.
      var isDistancePastThreshold = Object(popmotion__WEBPACK_IMPORTED_MODULE_6__["distance"])(info.offset, {
        x: 0,
        y: 0
      }) >= 3;
      if (!isPanStarted && !isDistancePastThreshold) return;
      var point = info.point;
      var timestamp = Object(framesync__WEBPACK_IMPORTED_MODULE_3__["getFrameData"])().timestamp;
      _this.history.push(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, point), {
        timestamp: timestamp
      }));
      var _a = _this.handlers,
        onStart = _a.onStart,
        onMove = _a.onMove;
      if (!isPanStarted) {
        onStart && onStart(_this.lastMoveEvent, info);
        _this.startEvent = _this.lastMoveEvent;
      }
      onMove && onMove(_this.lastMoveEvent, info);
    };
    this.handlePointerMove = function (event, info) {
      _this.lastMoveEvent = event;
      _this.lastMoveEventInfo = transformPoint(info, _this.transformPagePoint);
      // Because Safari doesn't trigger mouseup events when it's above a `<select>`
      if (Object(_utils_event_type_js__WEBPACK_IMPORTED_MODULE_1__["isMouseEvent"])(event) && event.buttons === 0) {
        _this.handlePointerUp(event, info);
        return;
      }
      // Throttle mouse move event to once per frame
      framesync__WEBPACK_IMPORTED_MODULE_3__["default"].update(_this.updatePoint, true);
    };
    this.handlePointerUp = function (event, info) {
      _this.end();
      var _a = _this.handlers,
        onEnd = _a.onEnd,
        onSessionEnd = _a.onSessionEnd;
      var panInfo = getPanInfo(transformPoint(info, _this.transformPagePoint), _this.history);
      if (_this.startEvent && onEnd) {
        onEnd(event, panInfo);
      }
      onSessionEnd && onSessionEnd(event, panInfo);
    };
    // If we have more than one touch, don't start detecting this gesture
    if (Object(_utils_event_type_js__WEBPACK_IMPORTED_MODULE_1__["isTouchEvent"])(event) && event.touches.length > 1) return;
    this.handlers = handlers;
    this.transformPagePoint = transformPagePoint;
    var info = Object(_events_event_info_js__WEBPACK_IMPORTED_MODULE_2__["extractEventInfo"])(event);
    var initialInfo = transformPoint(info, this.transformPagePoint);
    var point = initialInfo.point;
    var timestamp = Object(framesync__WEBPACK_IMPORTED_MODULE_3__["getFrameData"])().timestamp;
    this.history = [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, point), {
      timestamp: timestamp
    })];
    var onSessionStart = handlers.onSessionStart;
    onSessionStart && onSessionStart(event, getPanInfo(initialInfo, this.history));
    this.removeListeners = Object(popmotion__WEBPACK_IMPORTED_MODULE_6__["pipe"])(Object(_events_use_pointer_event_js__WEBPACK_IMPORTED_MODULE_5__["addPointerEvent"])(window, "pointermove", this.handlePointerMove), Object(_events_use_pointer_event_js__WEBPACK_IMPORTED_MODULE_5__["addPointerEvent"])(window, "pointerup", this.handlePointerUp), Object(_events_use_pointer_event_js__WEBPACK_IMPORTED_MODULE_5__["addPointerEvent"])(window, "pointercancel", this.handlePointerUp));
  }
  PanSession.prototype.updateHandlers = function (handlers) {
    this.handlers = handlers;
  };
  PanSession.prototype.end = function () {
    this.removeListeners && this.removeListeners();
    framesync__WEBPACK_IMPORTED_MODULE_3__["cancelSync"].update(this.updatePoint);
  };
  return PanSession;
}();
function transformPoint(info, transformPagePoint) {
  return transformPagePoint ? {
    point: transformPagePoint(info.point)
  } : info;
}
function subtractPoint(a, b) {
  return {
    x: a.x - b.x,
    y: a.y - b.y
  };
}
function getPanInfo(_a, history) {
  var point = _a.point;
  return {
    point: point,
    delta: subtractPoint(point, lastDevicePoint(history)),
    offset: subtractPoint(point, startDevicePoint(history)),
    velocity: getVelocity(history, 0.1)
  };
}
function startDevicePoint(history) {
  return history[0];
}
function lastDevicePoint(history) {
  return history[history.length - 1];
}
function getVelocity(history, timeDelta) {
  if (history.length < 2) {
    return {
      x: 0,
      y: 0
    };
  }
  var i = history.length - 1;
  var timestampedPoint = null;
  var lastPoint = lastDevicePoint(history);
  while (i >= 0) {
    timestampedPoint = history[i];
    if (lastPoint.timestamp - timestampedPoint.timestamp > Object(_utils_time_conversion_js__WEBPACK_IMPORTED_MODULE_4__["secondsToMilliseconds"])(timeDelta)) {
      break;
    }
    i--;
  }
  if (!timestampedPoint) {
    return {
      x: 0,
      y: 0
    };
  }
  var time = (lastPoint.timestamp - timestampedPoint.timestamp) / 1000;
  if (time === 0) {
    return {
      x: 0,
      y: 0
    };
  }
  var currentVelocity = {
    x: (lastPoint.x - timestampedPoint.x) / time,
    y: (lastPoint.y - timestampedPoint.y) / time
  };
  if (currentVelocity.x === Infinity) {
    currentVelocity.x = 0;
  }
  if (currentVelocity.y === Infinity) {
    currentVelocity.y = 0;
  }
  return currentVelocity;
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/gestures/drag/VisualElementDragControls.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/gestures/drag/VisualElementDragControls.js ***!
  \***************************************************************************************/
/*! exports provided: VisualElementDragControls, elementDragControls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualElementDragControls", function() { return VisualElementDragControls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elementDragControls", function() { return elementDragControls; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");
/* harmony import */ var _PanSession_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../PanSession.js */ "./node_modules/framer-motion/dist/es/gestures/PanSession.js");
/* harmony import */ var _utils_lock_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/lock.js */ "./node_modules/framer-motion/dist/es/gestures/drag/utils/lock.js");
/* harmony import */ var _utils_is_ref_object_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/is-ref-object.js */ "./node_modules/framer-motion/dist/es/utils/is-ref-object.js");
/* harmony import */ var _events_use_pointer_event_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../events/use-pointer-event.js */ "./node_modules/framer-motion/dist/es/events/use-pointer-event.js");
/* harmony import */ var _events_use_dom_event_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../events/use-dom-event.js */ "./node_modules/framer-motion/dist/es/events/use-dom-event.js");
/* harmony import */ var _events_event_info_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../events/event-info.js */ "./node_modules/framer-motion/dist/es/events/event-info.js");
/* harmony import */ var _utils_geometry_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/geometry/index.js */ "./node_modules/framer-motion/dist/es/utils/geometry/index.js");
/* harmony import */ var _utils_each_axis_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/each-axis.js */ "./node_modules/framer-motion/dist/es/utils/each-axis.js");
/* harmony import */ var _utils_constraints_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/constraints.js */ "./node_modules/framer-motion/dist/es/gestures/drag/utils/constraints.js");
/* harmony import */ var _render_dom_projection_measure_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../render/dom/projection/measure.js */ "./node_modules/framer-motion/dist/es/render/dom/projection/measure.js");
/* harmony import */ var _utils_geometry_delta_calc_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils/geometry/delta-calc.js */ "./node_modules/framer-motion/dist/es/utils/geometry/delta-calc.js");
/* harmony import */ var _animation_utils_transitions_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../animation/utils/transitions.js */ "./node_modules/framer-motion/dist/es/animation/utils/transitions.js");
/* harmony import */ var _render_utils_types_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../render/utils/types.js */ "./node_modules/framer-motion/dist/es/render/utils/types.js");
/* harmony import */ var _render_dom_projection_utils_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../render/dom/projection/utils.js */ "./node_modules/framer-motion/dist/es/render/dom/projection/utils.js");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/index.js");
/* harmony import */ var _render_dom_projection_convert_to_relative_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../render/dom/projection/convert-to-relative.js */ "./node_modules/framer-motion/dist/es/render/dom/projection/convert-to-relative.js");
/* harmony import */ var _motion_features_layout_utils_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../motion/features/layout/utils.js */ "./node_modules/framer-motion/dist/es/motion/features/layout/utils.js");
/* harmony import */ var _render_dom_utils_batch_layout_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../render/dom/utils/batch-layout.js */ "./node_modules/framer-motion/dist/es/render/dom/utils/batch-layout.js");
/* harmony import */ var framesync__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! framesync */ "./node_modules/framesync/dist/es/index.js");





















var elementDragControls = new WeakMap();
/**
 *
 */
var lastPointerEvent;
var VisualElementDragControls = /** @class */function () {
  function VisualElementDragControls(_a) {
    var visualElement = _a.visualElement;
    /**
     * Track whether we're currently dragging.
     *
     * @internal
     */
    this.isDragging = false;
    /**
     * The current direction of drag, or `null` if both.
     *
     * @internal
     */
    this.currentDirection = null;
    /**
     * The permitted boundaries of travel, in pixels.
     *
     * @internal
     */
    this.constraints = false;
    /**
     * The per-axis resolved elastic values.
     *
     * @internal
     */
    this.elastic = Object(_utils_geometry_index_js__WEBPACK_IMPORTED_MODULE_8__["axisBox"])();
    /**
     * A reference to the host component's latest props.
     *
     * @internal
     */
    this.props = {};
    /**
     * @internal
     */
    this.hasMutatedConstraints = false;
    /**
     * Track the initial position of the cursor relative to the dragging element
     * when dragging starts as a value of 0-1 on each axis. We then use this to calculate
     * an ideal bounding box for the VisualElement renderer to project into every frame.
     *
     * @internal
     */
    this.cursorProgress = {
      x: 0.5,
      y: 0.5
    };
    // When updating _dragX, or _dragY instead of the VisualElement,
    // persist their values between drag gestures.
    this.originPoint = {};
    // This is a reference to the global drag gesture lock, ensuring only one component
    // can "capture" the drag of one or both axes.
    // TODO: Look into moving this into pansession?
    this.openGlobalLock = null;
    /**
     * @internal
     */
    this.panSession = null;
    this.visualElement = visualElement;
    this.visualElement.enableLayoutProjection();
    elementDragControls.set(visualElement, this);
  }
  /**
   * Instantiate a PanSession for the drag gesture
   *
   * @public
   */
  VisualElementDragControls.prototype.start = function (originEvent, _a) {
    var _this = this;
    var _b = _a === void 0 ? {} : _a,
      _c = _b.snapToCursor,
      snapToCursor = _c === void 0 ? false : _c,
      cursorProgress = _b.cursorProgress;
    var onSessionStart = function onSessionStart(event) {
      var _a;
      // Stop any animations on both axis values immediately. This allows the user to throw and catch
      // the component.
      _this.stopMotion();
      /**
       * Save the initial point. We'll use this to calculate the pointer's position rather
       * than the one we receive when the gesture actually starts. By then, the pointer will
       * have already moved, and the perception will be of the pointer "slipping" across the element
       */
      var initialPoint = Object(_events_event_info_js__WEBPACK_IMPORTED_MODULE_7__["getViewportPointFromEvent"])(event).point;
      (_a = _this.cancelLayout) === null || _a === void 0 ? void 0 : _a.call(_this);
      _this.cancelLayout = Object(_render_dom_utils_batch_layout_js__WEBPACK_IMPORTED_MODULE_19__["batchLayout"])(function (read, write) {
        var ancestors = Object(_render_dom_projection_utils_js__WEBPACK_IMPORTED_MODULE_15__["collectProjectingAncestors"])(_this.visualElement);
        var children = Object(_render_dom_projection_utils_js__WEBPACK_IMPORTED_MODULE_15__["collectProjectingChildren"])(_this.visualElement);
        var tree = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(ancestors)), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(children));
        var hasManuallySetCursorOrigin = false;
        /**
         * Apply a simple lock to the projection target. This ensures no animations
         * can run on the projection box while this lock is active.
         */
        _this.isLayoutDrag() && _this.visualElement.lockProjectionTarget();
        write(function () {
          tree.forEach(function (element) {
            return element.resetTransform();
          });
        });
        read(function () {
          Object(_render_dom_projection_utils_js__WEBPACK_IMPORTED_MODULE_15__["updateLayoutMeasurement"])(_this.visualElement);
          children.forEach(_render_dom_projection_utils_js__WEBPACK_IMPORTED_MODULE_15__["updateLayoutMeasurement"]);
        });
        write(function () {
          tree.forEach(function (element) {
            return element.restoreTransform();
          });
          if (snapToCursor) {
            hasManuallySetCursorOrigin = _this.snapToCursor(initialPoint);
          }
        });
        read(function () {
          var isRelativeDrag = Boolean(_this.getAxisMotionValue("x") && !_this.isExternalDrag());
          if (!isRelativeDrag) {
            _this.visualElement.rebaseProjectionTarget(true, _this.visualElement.measureViewportBox(false));
          }
          _this.visualElement.scheduleUpdateLayoutProjection();
          /**
           * When dragging starts, we want to find where the cursor is relative to the bounding box
           * of the element. Every frame, we calculate a new bounding box using this relative position
           * and let the visualElement renderer figure out how to reproject the element into this bounding
           * box.
           *
           * By doing it this way, rather than applying an x/y transform directly to the element,
           * we can ensure the component always visually sticks to the cursor as we'd expect, even
           * if the DOM element itself changes layout as a result of React updates the user might
           * make based on the drag position.
           */
          var projection = _this.visualElement.projection;
          Object(_utils_each_axis_js__WEBPACK_IMPORTED_MODULE_9__["eachAxis"])(function (axis) {
            if (!hasManuallySetCursorOrigin) {
              var _a = projection.target[axis],
                min = _a.min,
                max = _a.max;
              _this.cursorProgress[axis] = cursorProgress ? cursorProgress[axis] : Object(popmotion__WEBPACK_IMPORTED_MODULE_16__["progress"])(min, max, initialPoint[axis]);
            }
            /**
             * If we have external drag MotionValues, record their origin point. On pointermove
             * we'll apply the pan gesture offset directly to this value.
             */
            var axisValue = _this.getAxisMotionValue(axis);
            if (axisValue) {
              _this.originPoint[axis] = axisValue.get();
            }
          });
        });
        write(function () {
          framesync__WEBPACK_IMPORTED_MODULE_20__["flushSync"].update();
          framesync__WEBPACK_IMPORTED_MODULE_20__["flushSync"].preRender();
          framesync__WEBPACK_IMPORTED_MODULE_20__["flushSync"].render();
          framesync__WEBPACK_IMPORTED_MODULE_20__["flushSync"].postRender();
        });
        read(function () {
          return _this.resolveDragConstraints();
        });
      });
    };
    var onStart = function onStart(event, info) {
      var _a, _b, _c;
      // Attempt to grab the global drag gesture lock - maybe make this part of PanSession
      var _d = _this.props,
        drag = _d.drag,
        dragPropagation = _d.dragPropagation;
      if (drag && !dragPropagation) {
        if (_this.openGlobalLock) _this.openGlobalLock();
        _this.openGlobalLock = Object(_utils_lock_js__WEBPACK_IMPORTED_MODULE_3__["getGlobalLock"])(drag);
        // If we don 't have the lock, don't start dragging
        if (!_this.openGlobalLock) return;
      }
      Object(_render_dom_utils_batch_layout_js__WEBPACK_IMPORTED_MODULE_19__["flushLayout"])();
      // Set current drag status
      _this.isDragging = true;
      _this.currentDirection = null;
      // Fire onDragStart event
      (_b = (_a = _this.props).onDragStart) === null || _b === void 0 ? void 0 : _b.call(_a, event, info);
      (_c = _this.visualElement.animationState) === null || _c === void 0 ? void 0 : _c.setActive(_render_utils_types_js__WEBPACK_IMPORTED_MODULE_14__["AnimationType"].Drag, true);
    };
    var onMove = function onMove(event, info) {
      var _a, _b, _c, _d;
      var _e = _this.props,
        dragPropagation = _e.dragPropagation,
        dragDirectionLock = _e.dragDirectionLock;
      // If we didn't successfully receive the gesture lock, early return.
      if (!dragPropagation && !_this.openGlobalLock) return;
      var offset = info.offset;
      // Attempt to detect drag direction if directionLock is true
      if (dragDirectionLock && _this.currentDirection === null) {
        _this.currentDirection = getCurrentDirection(offset);
        // If we've successfully set a direction, notify listener
        if (_this.currentDirection !== null) {
          (_b = (_a = _this.props).onDirectionLock) === null || _b === void 0 ? void 0 : _b.call(_a, _this.currentDirection);
        }
        return;
      }
      // Update each point with the latest position
      _this.updateAxis("x", info.point, offset);
      _this.updateAxis("y", info.point, offset);
      // Fire onDrag event
      (_d = (_c = _this.props).onDrag) === null || _d === void 0 ? void 0 : _d.call(_c, event, info);
      // Update the last pointer event
      lastPointerEvent = event;
    };
    var onSessionEnd = function onSessionEnd(event, info) {
      return _this.stop(event, info);
    };
    var transformPagePoint = this.props.transformPagePoint;
    this.panSession = new _PanSession_js__WEBPACK_IMPORTED_MODULE_2__["PanSession"](originEvent, {
      onSessionStart: onSessionStart,
      onStart: onStart,
      onMove: onMove,
      onSessionEnd: onSessionEnd
    }, {
      transformPagePoint: transformPagePoint
    });
  };
  VisualElementDragControls.prototype.resolveDragConstraints = function () {
    var _this = this;
    var _a = this.props,
      dragConstraints = _a.dragConstraints,
      dragElastic = _a.dragElastic;
    var layout = this.visualElement.getLayoutState().layoutCorrected;
    if (dragConstraints) {
      this.constraints = Object(_utils_is_ref_object_js__WEBPACK_IMPORTED_MODULE_4__["isRefObject"])(dragConstraints) ? this.resolveRefConstraints(layout, dragConstraints) : Object(_utils_constraints_js__WEBPACK_IMPORTED_MODULE_10__["calcRelativeConstraints"])(layout, dragConstraints);
    } else {
      this.constraints = false;
    }
    this.elastic = Object(_utils_constraints_js__WEBPACK_IMPORTED_MODULE_10__["resolveDragElastic"])(dragElastic);
    /**
     * If we're outputting to external MotionValues, we want to rebase the measured constraints
     * from viewport-relative to component-relative.
     */
    if (this.constraints && !this.hasMutatedConstraints) {
      Object(_utils_each_axis_js__WEBPACK_IMPORTED_MODULE_9__["eachAxis"])(function (axis) {
        if (_this.getAxisMotionValue(axis)) {
          _this.constraints[axis] = Object(_utils_constraints_js__WEBPACK_IMPORTED_MODULE_10__["rebaseAxisConstraints"])(layout[axis], _this.constraints[axis]);
        }
      });
    }
  };
  VisualElementDragControls.prototype.resolveRefConstraints = function (layoutBox, constraints) {
    var _a = this.props,
      onMeasureDragConstraints = _a.onMeasureDragConstraints,
      transformPagePoint = _a.transformPagePoint;
    var constraintsElement = constraints.current;
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_1__["invariant"])(constraintsElement !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    this.constraintsBox = Object(_render_dom_projection_measure_js__WEBPACK_IMPORTED_MODULE_11__["getBoundingBox"])(constraintsElement, transformPagePoint);
    var measuredConstraints = Object(_utils_constraints_js__WEBPACK_IMPORTED_MODULE_10__["calcViewportConstraints"])(layoutBox, this.constraintsBox);
    /**
     * If there's an onMeasureDragConstraints listener we call it and
     * if different constraints are returned, set constraints to that
     */
    if (onMeasureDragConstraints) {
      var userConstraints = onMeasureDragConstraints(Object(_utils_geometry_index_js__WEBPACK_IMPORTED_MODULE_8__["convertAxisBoxToBoundingBox"])(measuredConstraints));
      this.hasMutatedConstraints = !!userConstraints;
      if (userConstraints) {
        measuredConstraints = Object(_utils_geometry_index_js__WEBPACK_IMPORTED_MODULE_8__["convertBoundingBoxToAxisBox"])(userConstraints);
      }
    }
    return measuredConstraints;
  };
  VisualElementDragControls.prototype.cancelDrag = function () {
    var _a, _b;
    this.visualElement.unlockProjectionTarget();
    (_a = this.cancelLayout) === null || _a === void 0 ? void 0 : _a.call(this);
    this.isDragging = false;
    this.panSession && this.panSession.end();
    this.panSession = null;
    if (!this.props.dragPropagation && this.openGlobalLock) {
      this.openGlobalLock();
      this.openGlobalLock = null;
    }
    (_b = this.visualElement.animationState) === null || _b === void 0 ? void 0 : _b.setActive(_render_utils_types_js__WEBPACK_IMPORTED_MODULE_14__["AnimationType"].Drag, false);
  };
  VisualElementDragControls.prototype.stop = function (event, info) {
    var _a, _b, _c;
    (_a = this.panSession) === null || _a === void 0 ? void 0 : _a.end();
    this.panSession = null;
    var isDragging = this.isDragging;
    this.cancelDrag();
    if (!isDragging) return;
    var velocity = info.velocity;
    this.animateDragEnd(velocity);
    (_c = (_b = this.props).onDragEnd) === null || _c === void 0 ? void 0 : _c.call(_b, event, info);
  };
  VisualElementDragControls.prototype.snapToCursor = function (point) {
    var _this = this;
    return Object(_utils_each_axis_js__WEBPACK_IMPORTED_MODULE_9__["eachAxis"])(function (axis) {
      var drag = _this.props.drag;
      // If we're not dragging this axis, do an early return.
      if (!shouldDrag(axis, drag, _this.currentDirection)) return;
      var axisValue = _this.getAxisMotionValue(axis);
      if (axisValue) {
        var box = _this.visualElement.getLayoutState().layout;
        var length_1 = box[axis].max - box[axis].min;
        var center = box[axis].min + length_1 / 2;
        var offset = point[axis] - center;
        _this.originPoint[axis] = point[axis];
        axisValue.set(offset);
      } else {
        _this.cursorProgress[axis] = 0.5;
        return true;
      }
    }).includes(true);
  };
  /**
   * Update the specified axis with the latest pointer information.
   */
  VisualElementDragControls.prototype.updateAxis = function (axis, point, offset) {
    var drag = this.props.drag;
    // If we're not dragging this axis, do an early return.
    if (!shouldDrag(axis, drag, this.currentDirection)) return;
    return this.getAxisMotionValue(axis) ? this.updateAxisMotionValue(axis, offset) : this.updateVisualElementAxis(axis, point);
  };
  VisualElementDragControls.prototype.updateAxisMotionValue = function (axis, offset) {
    var axisValue = this.getAxisMotionValue(axis);
    if (!offset || !axisValue) return;
    var nextValue = this.originPoint[axis] + offset[axis];
    var update = this.constraints ? Object(_utils_constraints_js__WEBPACK_IMPORTED_MODULE_10__["applyConstraints"])(nextValue, this.constraints[axis], this.elastic[axis]) : nextValue;
    axisValue.set(update);
  };
  VisualElementDragControls.prototype.updateVisualElementAxis = function (axis, point) {
    var _a;
    // Get the actual layout bounding box of the element
    var axisLayout = this.visualElement.getLayoutState().layout[axis];
    // Calculate its current length. In the future we might want to lerp this to animate
    // between lengths if the layout changes as we change the DOM
    var axisLength = axisLayout.max - axisLayout.min;
    // Get the initial progress that the pointer sat on this axis on gesture start.
    var axisProgress = this.cursorProgress[axis];
    // Calculate a new min point based on the latest pointer position, constraints and elastic
    var min = Object(_utils_constraints_js__WEBPACK_IMPORTED_MODULE_10__["calcConstrainedMinPoint"])(point[axis], axisLength, axisProgress, (_a = this.constraints) === null || _a === void 0 ? void 0 : _a[axis], this.elastic[axis]);
    // Update the axis viewport target with this new min and the length
    this.visualElement.setProjectionTargetAxis(axis, min, min + axisLength);
  };
  VisualElementDragControls.prototype.setProps = function (_a) {
    var _b = _a.drag,
      drag = _b === void 0 ? false : _b,
      _c = _a.dragDirectionLock,
      dragDirectionLock = _c === void 0 ? false : _c,
      _d = _a.dragPropagation,
      dragPropagation = _d === void 0 ? false : _d,
      _e = _a.dragConstraints,
      dragConstraints = _e === void 0 ? false : _e,
      _f = _a.dragElastic,
      dragElastic = _f === void 0 ? _utils_constraints_js__WEBPACK_IMPORTED_MODULE_10__["defaultElastic"] : _f,
      _g = _a.dragMomentum,
      dragMomentum = _g === void 0 ? true : _g,
      remainingProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["drag", "dragDirectionLock", "dragPropagation", "dragConstraints", "dragElastic", "dragMomentum"]);
    this.props = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({
      drag: drag,
      dragDirectionLock: dragDirectionLock,
      dragPropagation: dragPropagation,
      dragConstraints: dragConstraints,
      dragElastic: dragElastic,
      dragMomentum: dragMomentum
    }, remainingProps);
  };
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - If the component will perform layout animations, we output the gesture to the component's
   *      visual bounding box
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  VisualElementDragControls.prototype.getAxisMotionValue = function (axis) {
    var _a = this.props,
      layout = _a.layout,
      layoutId = _a.layoutId;
    var dragKey = "_drag" + axis.toUpperCase();
    if (this.props[dragKey]) {
      return this.props[dragKey];
    } else if (!layout && layoutId === undefined) {
      return this.visualElement.getValue(axis, 0);
    }
  };
  VisualElementDragControls.prototype.isLayoutDrag = function () {
    return !this.getAxisMotionValue("x");
  };
  VisualElementDragControls.prototype.isExternalDrag = function () {
    var _a = this.props,
      _dragX = _a._dragX,
      _dragY = _a._dragY;
    return _dragX || _dragY;
  };
  VisualElementDragControls.prototype.animateDragEnd = function (velocity) {
    var _this = this;
    var _a = this.props,
      drag = _a.drag,
      dragMomentum = _a.dragMomentum,
      dragElastic = _a.dragElastic,
      dragTransition = _a.dragTransition;
    /**
     * Everything beyond the drag gesture should be performed with
     * relative projection so children stay in sync with their parent element.
     */
    var isRelative = Object(_render_dom_projection_convert_to_relative_js__WEBPACK_IMPORTED_MODULE_17__["convertToRelativeProjection"])(this.visualElement, this.isLayoutDrag() && !this.isExternalDrag());
    /**
     * If we had previously resolved constraints relative to the viewport,
     * we need to also convert those to a relative coordinate space for the animation
     */
    var constraints = this.constraints || {};
    if (isRelative && Object.keys(constraints).length && this.isLayoutDrag()) {
      var projectionParent = this.visualElement.getProjectionParent();
      if (projectionParent) {
        var relativeConstraints_1 = Object(_motion_features_layout_utils_js__WEBPACK_IMPORTED_MODULE_18__["calcRelativeOffset"])(projectionParent.projection.targetFinal, constraints);
        Object(_utils_each_axis_js__WEBPACK_IMPORTED_MODULE_9__["eachAxis"])(function (axis) {
          var _a = relativeConstraints_1[axis],
            min = _a.min,
            max = _a.max;
          constraints[axis] = {
            min: isNaN(min) ? undefined : min,
            max: isNaN(max) ? undefined : max
          };
        });
      }
    }
    var momentumAnimations = Object(_utils_each_axis_js__WEBPACK_IMPORTED_MODULE_9__["eachAxis"])(function (axis) {
      var _a;
      if (!shouldDrag(axis, drag, _this.currentDirection)) {
        return;
      }
      var transition = (_a = constraints === null || constraints === void 0 ? void 0 : constraints[axis]) !== null && _a !== void 0 ? _a : {};
      /**
       * Overdamp the boundary spring if `dragElastic` is disabled. There's still a frame
       * of spring animations so we should look into adding a disable spring option to `inertia`.
       * We could do something here where we affect the `bounceStiffness` and `bounceDamping`
       * using the value of `dragElastic`.
       */
      var bounceStiffness = dragElastic ? 200 : 1000000;
      var bounceDamping = dragElastic ? 40 : 10000000;
      var inertia = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({
        type: "inertia",
        velocity: dragMomentum ? velocity[axis] : 0,
        bounceStiffness: bounceStiffness,
        bounceDamping: bounceDamping,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10
      }, dragTransition), transition);
      // If we're not animating on an externally-provided `MotionValue` we can use the
      // component's animation controls which will handle interactions with whileHover (etc),
      // otherwise we just have to animate the `MotionValue` itself.
      return _this.getAxisMotionValue(axis) ? _this.startAxisValueAnimation(axis, inertia) : _this.visualElement.startLayoutAnimation(axis, inertia, isRelative);
    });
    // Run all animations and then resolve the new drag constraints.
    return Promise.all(momentumAnimations).then(function () {
      var _a, _b;
      (_b = (_a = _this.props).onDragTransitionEnd) === null || _b === void 0 ? void 0 : _b.call(_a);
    });
  };
  VisualElementDragControls.prototype.stopMotion = function () {
    var _this = this;
    Object(_utils_each_axis_js__WEBPACK_IMPORTED_MODULE_9__["eachAxis"])(function (axis) {
      var axisValue = _this.getAxisMotionValue(axis);
      axisValue ? axisValue.stop() : _this.visualElement.stopLayoutAnimation();
    });
  };
  VisualElementDragControls.prototype.startAxisValueAnimation = function (axis, transition) {
    var axisValue = this.getAxisMotionValue(axis);
    if (!axisValue) return;
    var currentValue = axisValue.get();
    axisValue.set(currentValue);
    axisValue.set(currentValue); // Set twice to hard-reset velocity
    return Object(_animation_utils_transitions_js__WEBPACK_IMPORTED_MODULE_13__["startAnimation"])(axis, axisValue, 0, transition);
  };
  VisualElementDragControls.prototype.scalePoint = function () {
    var _this = this;
    var _a = this.props,
      drag = _a.drag,
      dragConstraints = _a.dragConstraints;
    if (!Object(_utils_is_ref_object_js__WEBPACK_IMPORTED_MODULE_4__["isRefObject"])(dragConstraints) || !this.constraintsBox) return;
    // Stop any current animations as there can be some visual glitching if we resize mid animation
    this.stopMotion();
    // Record the relative progress of the targetBox relative to the constraintsBox
    var boxProgress = {
      x: 0,
      y: 0
    };
    Object(_utils_each_axis_js__WEBPACK_IMPORTED_MODULE_9__["eachAxis"])(function (axis) {
      boxProgress[axis] = Object(_utils_geometry_delta_calc_js__WEBPACK_IMPORTED_MODULE_12__["calcOrigin"])(_this.visualElement.projection.target[axis], _this.constraintsBox[axis]);
    });
    /**
     * For each axis, calculate the current progress of the layout axis within the constraints.
     * Then, using the latest layout and constraints measurements, reposition the new layout axis
     * proportionally within the constraints.
     */
    this.updateConstraints(function () {
      Object(_utils_each_axis_js__WEBPACK_IMPORTED_MODULE_9__["eachAxis"])(function (axis) {
        if (!shouldDrag(axis, drag, null)) return;
        // Calculate the position of the targetBox relative to the constraintsBox using the
        // previously calculated progress
        var _a = Object(_utils_constraints_js__WEBPACK_IMPORTED_MODULE_10__["calcPositionFromProgress"])(_this.visualElement.projection.target[axis], _this.constraintsBox[axis], boxProgress[axis]),
          min = _a.min,
          max = _a.max;
        _this.visualElement.setProjectionTargetAxis(axis, min, max);
      });
    });
    /**
     * If any other draggable components are queuing the same tasks synchronously
     * this will wait until they've all been scheduled before flushing.
     */
    setTimeout(_render_dom_utils_batch_layout_js__WEBPACK_IMPORTED_MODULE_19__["flushLayout"], 1);
  };
  VisualElementDragControls.prototype.updateConstraints = function (onReady) {
    var _this = this;
    this.cancelLayout = Object(_render_dom_utils_batch_layout_js__WEBPACK_IMPORTED_MODULE_19__["batchLayout"])(function (read, write) {
      var ancestors = Object(_render_dom_projection_utils_js__WEBPACK_IMPORTED_MODULE_15__["collectProjectingAncestors"])(_this.visualElement);
      write(function () {
        return ancestors.forEach(function (element) {
          return element.resetTransform();
        });
      });
      read(function () {
        return Object(_render_dom_projection_utils_js__WEBPACK_IMPORTED_MODULE_15__["updateLayoutMeasurement"])(_this.visualElement);
      });
      write(function () {
        return ancestors.forEach(function (element) {
          return element.restoreTransform();
        });
      });
      read(function () {
        _this.resolveDragConstraints();
      });
      if (onReady) write(onReady);
    });
  };
  VisualElementDragControls.prototype.mount = function (visualElement) {
    var _this = this;
    var element = visualElement.getInstance();
    /**
     * Attach a pointerdown event listener on this DOM element to initiate drag tracking.
     */
    var stopPointerListener = Object(_events_use_pointer_event_js__WEBPACK_IMPORTED_MODULE_5__["addPointerEvent"])(element, "pointerdown", function (event) {
      var _a = _this.props,
        drag = _a.drag,
        _b = _a.dragListener,
        dragListener = _b === void 0 ? true : _b;
      drag && dragListener && _this.start(event);
    });
    /**
     * Attach a window resize listener to scale the draggable target within its defined
     * constraints as the window resizes.
     */
    var stopResizeListener = Object(_events_use_dom_event_js__WEBPACK_IMPORTED_MODULE_6__["addDomEvent"])(window, "resize", function () {
      _this.scalePoint();
    });
    /**
     * Ensure drag constraints are resolved correctly relative to the dragging element
     * whenever its layout changes.
     */
    var stopLayoutUpdateListener = visualElement.onLayoutUpdate(function () {
      if (_this.isDragging) {
        _this.resolveDragConstraints();
      }
    });
    /**
     * If the previous component with this same layoutId was dragging at the time
     * it was unmounted, we want to continue the same gesture on this component.
     */
    var prevDragCursor = visualElement.prevDragCursor;
    if (prevDragCursor) {
      this.start(lastPointerEvent, {
        cursorProgress: prevDragCursor
      });
    }
    /**
     * Return a function that will teardown the drag gesture
     */
    return function () {
      stopPointerListener === null || stopPointerListener === void 0 ? void 0 : stopPointerListener();
      stopResizeListener === null || stopResizeListener === void 0 ? void 0 : stopResizeListener();
      stopLayoutUpdateListener === null || stopLayoutUpdateListener === void 0 ? void 0 : stopLayoutUpdateListener();
      _this.cancelDrag();
    };
  };
  return VisualElementDragControls;
}();
function shouldDrag(direction, drag, currentDirection) {
  return (drag === true || drag === direction) && (currentDirection === null || currentDirection === direction);
}
/**
 * Based on an x/y offset determine the current drag direction. If both axis' offsets are lower
 * than the provided threshold, return `null`.
 *
 * @param offset - The x/y offset from origin.
 * @param lockThreshold - (Optional) - the minimum absolute offset before we can determine a drag direction.
 */
function getCurrentDirection(offset, lockThreshold) {
  if (lockThreshold === void 0) {
    lockThreshold = 10;
  }
  var direction = null;
  if (Math.abs(offset.y) > lockThreshold) {
    direction = "y";
  } else if (Math.abs(offset.x) > lockThreshold) {
    direction = "x";
  }
  return direction;
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/gestures/drag/use-drag-controls.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/gestures/drag/use-drag-controls.js ***!
  \*******************************************************************************/
/*! exports provided: DragControls, useDragControls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragControls", function() { return DragControls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDragControls", function() { return useDragControls; });
/* harmony import */ var _render_dom_utils_batch_layout_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../render/dom/utils/batch-layout.js */ "./node_modules/framer-motion/dist/es/render/dom/utils/batch-layout.js");
/* harmony import */ var _utils_use_constant_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/use-constant.js */ "./node_modules/framer-motion/dist/es/utils/use-constant.js");



/**
 * Can manually trigger a drag gesture on one or more `drag`-enabled `motion` components.
 *
 * @library
 *
 * ```jsx
 * const dragControls = useDragControls()
 *
 * function startDrag(event) {
 *   dragControls.start(event, { snapToCursor: true })
 * }
 *
 * return (
 *   <>
 *     <Frame onTapStart={startDrag} />
 *     <Frame drag="x" dragControls={dragControls} />
 *   </>
 * )
 * ```
 *
 * @motion
 *
 * ```jsx
 * const dragControls = useDragControls()
 *
 * function startDrag(event) {
 *   dragControls.start(event, { snapToCursor: true })
 * }
 *
 * return (
 *   <>
 *     <div onPointerDown={startDrag} />
 *     <motion.div drag="x" dragControls={dragControls} />
 *   </>
 * )
 * ```
 *
 * @public
 */
var DragControls = /** @class */function () {
  function DragControls() {
    this.componentControls = new Set();
  }
  /**
   * Subscribe a component's internal `VisualElementDragControls` to the user-facing API.
   *
   * @internal
   */
  DragControls.prototype.subscribe = function (controls) {
    var _this = this;
    this.componentControls.add(controls);
    return function () {
      return _this.componentControls["delete"](controls);
    };
  };
  /**
   * Start a drag gesture on every `motion` component that has this set of drag controls
   * passed into it via the `dragControls` prop.
   *
   * ```jsx
   * dragControls.start(e, {
   *   snapToCursor: true
   * })
   * ```
   *
   * @param event - PointerEvent
   * @param options - Options
   *
   * @public
   */
  DragControls.prototype.start = function (event, options) {
    this.componentControls.forEach(function (controls) {
      controls.start(event.nativeEvent || event, options);
    });
  };
  DragControls.prototype.updateConstraints = function (flush) {
    if (flush === void 0) {
      flush = true;
    }
    this.componentControls.forEach(function (controls) {
      controls.updateConstraints();
    });
    flush && Object(_render_dom_utils_batch_layout_js__WEBPACK_IMPORTED_MODULE_0__["flushLayout"])();
  };
  return DragControls;
}();
var createDragControls = function createDragControls() {
  return new DragControls();
};
/**
 * Usually, dragging is initiated by pressing down on a `motion` component with a `drag` prop
 * and moving it. For some use-cases, for instance clicking at an arbitrary point on a video scrubber, we
 * might want to initiate that dragging from a different component than the draggable one.
 *
 * By creating a `dragControls` using the `useDragControls` hook, we can pass this into
 * the draggable component's `dragControls` prop. It exposes a `start` method
 * that can start dragging from pointer events on other components.
 *
 * @library
 *
 * ```jsx
 * const dragControls = useDragControls()
 *
 * function startDrag(event) {
 *   dragControls.start(event, { snapToCursor: true })
 * }
 *
 * return (
 *   <>
 *     <Frame onTapStart={startDrag} />
 *     <Frame drag="x" dragControls={dragControls} />
 *   </>
 * )
 * ```
 *
 * @motion
 *
 * ```jsx
 * const dragControls = useDragControls()
 *
 * function startDrag(event) {
 *   dragControls.start(event, { snapToCursor: true })
 * }
 *
 * return (
 *   <>
 *     <div onPointerDown={startDrag} />
 *     <motion.div drag="x" dragControls={dragControls} />
 *   </>
 * )
 * ```
 *
 * @public
 */
function useDragControls() {
  return Object(_utils_use_constant_js__WEBPACK_IMPORTED_MODULE_1__["useConstant"])(createDragControls);
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/gestures/drag/use-drag.js":
/*!**********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/gestures/drag/use-drag.js ***!
  \**********************************************************************/
/*! exports provided: useDrag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDrag", function() { return useDrag; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_MotionConfigContext_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/MotionConfigContext.js */ "./node_modules/framer-motion/dist/es/context/MotionConfigContext.js");
/* harmony import */ var _VisualElementDragControls_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./VisualElementDragControls.js */ "./node_modules/framer-motion/dist/es/gestures/drag/VisualElementDragControls.js");
/* harmony import */ var _utils_use_constant_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/use-constant.js */ "./node_modules/framer-motion/dist/es/utils/use-constant.js");






/**
 * A hook that allows an element to be dragged.
 *
 * @internal
 */
function useDrag(props) {
  var groupDragControls = props.dragControls,
    visualElement = props.visualElement;
  var transformPagePoint = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_MotionConfigContext_js__WEBPACK_IMPORTED_MODULE_2__["MotionConfigContext"]).transformPagePoint;
  var dragControls = Object(_utils_use_constant_js__WEBPACK_IMPORTED_MODULE_4__["useConstant"])(function () {
    return new _VisualElementDragControls_js__WEBPACK_IMPORTED_MODULE_3__["VisualElementDragControls"]({
      visualElement: visualElement
    });
  });
  dragControls.setProps(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props), {
    transformPagePoint: transformPagePoint
  }));
  // If we've been provided a DragControls for manual control over the drag gesture,
  // subscribe this component to it on mount.
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    return groupDragControls && groupDragControls.subscribe(dragControls);
  }, [dragControls]);
  // Mount the drag controls with the visualElement
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    return dragControls.mount(visualElement);
  }, []);
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/gestures/drag/utils/constraints.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/gestures/drag/utils/constraints.js ***!
  \*******************************************************************************/
/*! exports provided: applyConstraints, calcConstrainedMinPoint, calcPositionFromProgress, calcRelativeAxisConstraints, calcRelativeConstraints, calcViewportAxisConstraints, calcViewportConstraints, defaultElastic, rebaseAxisConstraints, resolveAxisElastic, resolveDragElastic, resolvePointElastic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyConstraints", function() { return applyConstraints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcConstrainedMinPoint", function() { return calcConstrainedMinPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcPositionFromProgress", function() { return calcPositionFromProgress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcRelativeAxisConstraints", function() { return calcRelativeAxisConstraints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcRelativeConstraints", function() { return calcRelativeConstraints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcViewportAxisConstraints", function() { return calcViewportAxisConstraints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcViewportConstraints", function() { return calcViewportConstraints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultElastic", function() { return defaultElastic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rebaseAxisConstraints", function() { return rebaseAxisConstraints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveAxisElastic", function() { return resolveAxisElastic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveDragElastic", function() { return resolveDragElastic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolvePointElastic", function() { return resolvePointElastic; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/index.js");



/**
 * Apply constraints to a point. These constraints are both physical along an
 * axis, and an elastic factor that determines how much to constrain the point
 * by if it does lie outside the defined parameters.
 */
function applyConstraints(point, _a, elastic) {
  var min = _a.min,
    max = _a.max;
  if (min !== undefined && point < min) {
    // If we have a min point defined, and this is outside of that, constrain
    point = elastic ? Object(popmotion__WEBPACK_IMPORTED_MODULE_1__["mix"])(min, point, elastic.min) : Math.max(point, min);
  } else if (max !== undefined && point > max) {
    // If we have a max point defined, and this is outside of that, constrain
    point = elastic ? Object(popmotion__WEBPACK_IMPORTED_MODULE_1__["mix"])(max, point, elastic.max) : Math.min(point, max);
  }
  return point;
}
/**
 * Calculates a min projection point based on a pointer, pointer progress
 * within the drag target, and constraints.
 *
 * For instance if an element was 100px width, we were dragging from 0.25
 * along this axis, the pointer is at 200px, and there were no constraints,
 * we would calculate a min projection point of 175px.
 */
function calcConstrainedMinPoint(point, length, progress, constraints, elastic) {
  // Calculate a min point for this axis and apply it to the current pointer
  var min = point - length * progress;
  return constraints ? applyConstraints(min, constraints, elastic) : min;
}
/**
 * Calculate constraints in terms of the viewport when defined relatively to the
 * measured axis. This is measured from the nearest edge, so a max constraint of 200
 * on an axis with a max value of 300 would return a constraint of 500 - axis length
 */
function calcRelativeAxisConstraints(axis, min, max) {
  return {
    min: min !== undefined ? axis.min + min : undefined,
    max: max !== undefined ? axis.max + max - (axis.max - axis.min) : undefined
  };
}
/**
 * Calculate constraints in terms of the viewport when
 * defined relatively to the measured bounding box.
 */
function calcRelativeConstraints(layoutBox, _a) {
  var top = _a.top,
    left = _a.left,
    bottom = _a.bottom,
    right = _a.right;
  return {
    x: calcRelativeAxisConstraints(layoutBox.x, left, right),
    y: calcRelativeAxisConstraints(layoutBox.y, top, bottom)
  };
}
/**
 * Calculate viewport constraints when defined as another viewport-relative axis
 */
function calcViewportAxisConstraints(layoutAxis, constraintsAxis) {
  var _a;
  var min = constraintsAxis.min - layoutAxis.min;
  var max = constraintsAxis.max - layoutAxis.max;
  // If the constraints axis is actually smaller than the layout axis then we can
  // flip the constraints
  if (constraintsAxis.max - constraintsAxis.min < layoutAxis.max - layoutAxis.min) {
    _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])([max, min], 2), min = _a[0], max = _a[1];
  }
  return {
    min: layoutAxis.min + min,
    max: layoutAxis.min + max
  };
}
/**
 * Calculate viewport constraints when defined as another viewport-relative box
 */
function calcViewportConstraints(layoutBox, constraintsBox) {
  return {
    x: calcViewportAxisConstraints(layoutBox.x, constraintsBox.x),
    y: calcViewportAxisConstraints(layoutBox.y, constraintsBox.y)
  };
}
/**
 * Calculate the an axis position based on two axes and a progress value.
 */
function calcPositionFromProgress(axis, constraints, progress) {
  var axisLength = axis.max - axis.min;
  var min = Object(popmotion__WEBPACK_IMPORTED_MODULE_1__["mix"])(constraints.min, constraints.max - axisLength, progress);
  return {
    min: min,
    max: min + axisLength
  };
}
/**
 * Rebase the calculated viewport constraints relative to the layout.min point.
 */
function rebaseAxisConstraints(layout, constraints) {
  var relativeConstraints = {};
  if (constraints.min !== undefined) {
    relativeConstraints.min = constraints.min - layout.min;
  }
  if (constraints.max !== undefined) {
    relativeConstraints.max = constraints.max - layout.min;
  }
  return relativeConstraints;
}
var defaultElastic = 0.35;
/**
 * Accepts a dragElastic prop and returns resolved elastic values for each axis.
 */
function resolveDragElastic(dragElastic) {
  if (dragElastic === false) {
    dragElastic = 0;
  } else if (dragElastic === true) {
    dragElastic = defaultElastic;
  }
  return {
    x: resolveAxisElastic(dragElastic, "left", "right"),
    y: resolveAxisElastic(dragElastic, "top", "bottom")
  };
}
function resolveAxisElastic(dragElastic, minLabel, maxLabel) {
  return {
    min: resolvePointElastic(dragElastic, minLabel),
    max: resolvePointElastic(dragElastic, maxLabel)
  };
}
function resolvePointElastic(dragElastic, label) {
  var _a;
  return typeof dragElastic === "number" ? dragElastic : (_a = dragElastic[label]) !== null && _a !== void 0 ? _a : 0;
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/gestures/drag/utils/lock.js":
/*!************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/gestures/drag/utils/lock.js ***!
  \************************************************************************/
/*! exports provided: createLock, getGlobalLock, isDragActive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLock", function() { return createLock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGlobalLock", function() { return getGlobalLock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDragActive", function() { return isDragActive; });
function createLock(name) {
  var lock = null;
  return function () {
    var openLock = function openLock() {
      lock = null;
    };
    if (lock === null) {
      lock = name;
      return openLock;
    }
    return false;
  };
}
var globalHorizontalLock = createLock("dragHorizontal");
var globalVerticalLock = createLock("dragVertical");
function getGlobalLock(drag) {
  var lock = false;
  if (drag === "y") {
    lock = globalVerticalLock();
  } else if (drag === "x") {
    lock = globalHorizontalLock();
  } else {
    var openHorizontal_1 = globalHorizontalLock();
    var openVertical_1 = globalVerticalLock();
    if (openHorizontal_1 && openVertical_1) {
      lock = function lock() {
        openHorizontal_1();
        openVertical_1();
      };
    } else {
      // Release the locks because we don't use them
      if (openHorizontal_1) openHorizontal_1();
      if (openVertical_1) openVertical_1();
    }
  }
  return lock;
}
function isDragActive() {
  // Check the gesture lock - if we get it, it means no drag gesture is active
  // and we can safely fire the tap gesture.
  var openGestureLock = getGlobalLock(true);
  if (!openGestureLock) return true;
  openGestureLock();
  return false;
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/gestures/use-focus-gesture.js":
/*!**************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/gestures/use-focus-gesture.js ***!
  \**************************************************************************/
/*! exports provided: useFocusGesture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFocusGesture", function() { return useFocusGesture; });
/* harmony import */ var _render_utils_types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../render/utils/types.js */ "./node_modules/framer-motion/dist/es/render/utils/types.js");
/* harmony import */ var _events_use_dom_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../events/use-dom-event.js */ "./node_modules/framer-motion/dist/es/events/use-dom-event.js");



/**
 *
 * @param props
 * @param ref
 * @internal
 */
function useFocusGesture(_a) {
  var whileFocus = _a.whileFocus,
    visualElement = _a.visualElement;
  var onFocus = function onFocus() {
    var _a;
    (_a = visualElement.animationState) === null || _a === void 0 ? void 0 : _a.setActive(_render_utils_types_js__WEBPACK_IMPORTED_MODULE_0__["AnimationType"].Focus, true);
  };
  var onBlur = function onBlur() {
    var _a;
    (_a = visualElement.animationState) === null || _a === void 0 ? void 0 : _a.setActive(_render_utils_types_js__WEBPACK_IMPORTED_MODULE_0__["AnimationType"].Focus, false);
  };
  Object(_events_use_dom_event_js__WEBPACK_IMPORTED_MODULE_1__["useDomEvent"])(visualElement, "focus", whileFocus ? onFocus : undefined);
  Object(_events_use_dom_event_js__WEBPACK_IMPORTED_MODULE_1__["useDomEvent"])(visualElement, "blur", whileFocus ? onBlur : undefined);
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/gestures/use-hover-gesture.js":
/*!**************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/gestures/use-hover-gesture.js ***!
  \**************************************************************************/
/*! exports provided: useHoverGesture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useHoverGesture", function() { return useHoverGesture; });
/* harmony import */ var _utils_event_type_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/event-type.js */ "./node_modules/framer-motion/dist/es/gestures/utils/event-type.js");
/* harmony import */ var _render_utils_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../render/utils/types.js */ "./node_modules/framer-motion/dist/es/render/utils/types.js");
/* harmony import */ var _events_use_pointer_event_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../events/use-pointer-event.js */ "./node_modules/framer-motion/dist/es/events/use-pointer-event.js");
/* harmony import */ var _drag_utils_lock_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drag/utils/lock.js */ "./node_modules/framer-motion/dist/es/gestures/drag/utils/lock.js");




function createHoverEvent(visualElement, isActive, callback) {
  return function (event, info) {
    var _a;
    if (!Object(_utils_event_type_js__WEBPACK_IMPORTED_MODULE_0__["isMouseEvent"])(event) || Object(_drag_utils_lock_js__WEBPACK_IMPORTED_MODULE_3__["isDragActive"])()) return;
    callback === null || callback === void 0 ? void 0 : callback(event, info);
    (_a = visualElement.animationState) === null || _a === void 0 ? void 0 : _a.setActive(_render_utils_types_js__WEBPACK_IMPORTED_MODULE_1__["AnimationType"].Hover, isActive);
  };
}
function useHoverGesture(_a) {
  var onHoverStart = _a.onHoverStart,
    onHoverEnd = _a.onHoverEnd,
    whileHover = _a.whileHover,
    visualElement = _a.visualElement;
  Object(_events_use_pointer_event_js__WEBPACK_IMPORTED_MODULE_2__["usePointerEvent"])(visualElement, "pointerenter", onHoverStart || whileHover ? createHoverEvent(visualElement, true, onHoverStart) : undefined);
  Object(_events_use_pointer_event_js__WEBPACK_IMPORTED_MODULE_2__["usePointerEvent"])(visualElement, "pointerleave", onHoverEnd || whileHover ? createHoverEvent(visualElement, false, onHoverEnd) : undefined);
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/gestures/use-pan-gesture.js":
/*!************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/gestures/use-pan-gesture.js ***!
  \************************************************************************/
/*! exports provided: usePanGesture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePanGesture", function() { return usePanGesture; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_MotionConfigContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/MotionConfigContext.js */ "./node_modules/framer-motion/dist/es/context/MotionConfigContext.js");
/* harmony import */ var _utils_use_unmount_effect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/use-unmount-effect.js */ "./node_modules/framer-motion/dist/es/utils/use-unmount-effect.js");
/* harmony import */ var _events_use_pointer_event_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../events/use-pointer-event.js */ "./node_modules/framer-motion/dist/es/events/use-pointer-event.js");
/* harmony import */ var _PanSession_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PanSession.js */ "./node_modules/framer-motion/dist/es/gestures/PanSession.js");






/**
 *
 * @param handlers -
 * @param ref -
 *
 * @internalremarks
 * Currently this sets new pan gesture functions every render. The memo route has been explored
 * in the past but ultimately we're still creating new functions every render. An optimisation
 * to explore is creating the pan gestures and loading them into a `ref`.
 *
 * @internal
 */
function usePanGesture(_a) {
  var onPan = _a.onPan,
    onPanStart = _a.onPanStart,
    onPanEnd = _a.onPanEnd,
    onPanSessionStart = _a.onPanSessionStart,
    visualElement = _a.visualElement;
  var hasPanEvents = onPan || onPanStart || onPanEnd || onPanSessionStart;
  var panSession = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var transformPagePoint = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_MotionConfigContext_js__WEBPACK_IMPORTED_MODULE_1__["MotionConfigContext"]).transformPagePoint;
  var handlers = {
    onSessionStart: onPanSessionStart,
    onStart: onPanStart,
    onMove: onPan,
    onEnd: function onEnd(event, info) {
      panSession.current = null;
      onPanEnd && onPanEnd(event, info);
    }
  };
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (panSession.current !== null) {
      panSession.current.updateHandlers(handlers);
    }
  });
  function onPointerDown(event) {
    panSession.current = new _PanSession_js__WEBPACK_IMPORTED_MODULE_4__["PanSession"](event, handlers, {
      transformPagePoint: transformPagePoint
    });
  }
  Object(_events_use_pointer_event_js__WEBPACK_IMPORTED_MODULE_3__["usePointerEvent"])(visualElement, "pointerdown", hasPanEvents && onPointerDown);
  Object(_utils_use_unmount_effect_js__WEBPACK_IMPORTED_MODULE_2__["useUnmountEffect"])(function () {
    return panSession.current && panSession.current.end();
  });
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/gestures/use-tap-gesture.js":
/*!************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/gestures/use-tap-gesture.js ***!
  \************************************************************************/
/*! exports provided: useTapGesture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTapGesture", function() { return useTapGesture; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_is_node_or_child_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/is-node-or-child.js */ "./node_modules/framer-motion/dist/es/gestures/utils/is-node-or-child.js");
/* harmony import */ var _events_use_pointer_event_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../events/use-pointer-event.js */ "./node_modules/framer-motion/dist/es/events/use-pointer-event.js");
/* harmony import */ var _utils_use_unmount_effect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/use-unmount-effect.js */ "./node_modules/framer-motion/dist/es/utils/use-unmount-effect.js");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/index.js");
/* harmony import */ var _render_utils_types_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../render/utils/types.js */ "./node_modules/framer-motion/dist/es/render/utils/types.js");
/* harmony import */ var _drag_utils_lock_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./drag/utils/lock.js */ "./node_modules/framer-motion/dist/es/gestures/drag/utils/lock.js");








/**
 * @param handlers -
 * @internal
 */
function useTapGesture(_a) {
  var onTap = _a.onTap,
    onTapStart = _a.onTapStart,
    onTapCancel = _a.onTapCancel,
    whileTap = _a.whileTap,
    visualElement = _a.visualElement;
  var hasPressListeners = onTap || onTapStart || onTapCancel || whileTap;
  var isPressing = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
  var cancelPointerEndListeners = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  function removePointerEndListener() {
    var _a;
    (_a = cancelPointerEndListeners.current) === null || _a === void 0 ? void 0 : _a.call(cancelPointerEndListeners);
    cancelPointerEndListeners.current = null;
  }
  function checkPointerEnd() {
    var _a;
    removePointerEndListener();
    isPressing.current = false;
    (_a = visualElement.animationState) === null || _a === void 0 ? void 0 : _a.setActive(_render_utils_types_js__WEBPACK_IMPORTED_MODULE_5__["AnimationType"].Tap, false);
    return !Object(_drag_utils_lock_js__WEBPACK_IMPORTED_MODULE_6__["isDragActive"])();
  }
  function onPointerUp(event, info) {
    if (!checkPointerEnd()) return;
    /**
     * We only count this as a tap gesture if the event.target is the same
     * as, or a child of, this component's element
     */
    !Object(_utils_is_node_or_child_js__WEBPACK_IMPORTED_MODULE_1__["isNodeOrChild"])(visualElement.getInstance(), event.target) ? onTapCancel === null || onTapCancel === void 0 ? void 0 : onTapCancel(event, info) : onTap === null || onTap === void 0 ? void 0 : onTap(event, info);
  }
  function onPointerCancel(event, info) {
    if (!checkPointerEnd()) return;
    onTapCancel === null || onTapCancel === void 0 ? void 0 : onTapCancel(event, info);
  }
  function onPointerDown(event, info) {
    var _a;
    removePointerEndListener();
    if (isPressing.current) return;
    isPressing.current = true;
    cancelPointerEndListeners.current = Object(popmotion__WEBPACK_IMPORTED_MODULE_4__["pipe"])(Object(_events_use_pointer_event_js__WEBPACK_IMPORTED_MODULE_2__["addPointerEvent"])(window, "pointerup", onPointerUp), Object(_events_use_pointer_event_js__WEBPACK_IMPORTED_MODULE_2__["addPointerEvent"])(window, "pointercancel", onPointerCancel));
    onTapStart === null || onTapStart === void 0 ? void 0 : onTapStart(event, info);
    (_a = visualElement.animationState) === null || _a === void 0 ? void 0 : _a.setActive(_render_utils_types_js__WEBPACK_IMPORTED_MODULE_5__["AnimationType"].Tap, true);
  }
  Object(_events_use_pointer_event_js__WEBPACK_IMPORTED_MODULE_2__["usePointerEvent"])(visualElement, "pointerdown", hasPressListeners ? onPointerDown : undefined);
  Object(_utils_use_unmount_effect_js__WEBPACK_IMPORTED_MODULE_3__["useUnmountEffect"])(removePointerEndListener);
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/gestures/utils/event-type.js":
/*!*************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/gestures/utils/event-type.js ***!
  \*************************************************************************/
/*! exports provided: isMouseEvent, isTouchEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMouseEvent", function() { return isMouseEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTouchEvent", function() { return isTouchEvent; });
function isMouseEvent(event) {
  // PointerEvent inherits from MouseEvent so we can't use a straight instanceof check.
  if (typeof PointerEvent !== "undefined" && event instanceof PointerEvent) {
    return !!(event.pointerType === "mouse");
  }
  return event instanceof MouseEvent;
}
function isTouchEvent(event) {
  var hasTouches = !!event.touches;
  return hasTouches;
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/gestures/utils/is-node-or-child.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/gestures/utils/is-node-or-child.js ***!
  \*******************************************************************************/
/*! exports provided: isNodeOrChild */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNodeOrChild", function() { return isNodeOrChild; });
/**
 * Recursively traverse up the tree to check whether the provided child node
 * is the parent or a descendant of it.
 *
 * @param parent - Element to find
 * @param child - Element to test against parent
 */
var isNodeOrChild = function isNodeOrChild(parent, child) {
  if (!child) {
    return false;
  } else if (parent === child) {
    return true;
  } else {
    return isNodeOrChild(parent, child.parentElement);
  }
};


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/index.js ***!
  \*****************************************************/
/*! exports provided: createDomMotionComponent, motion, m, AnimatePresence, AnimateSharedLayout, MotionConfig, LazyMotion, domAnimation, domMax, useMotionValue, useMotionTemplate, MotionValue, motionValue, resolveMotionValue, useTransform, useSpring, useVelocity, useElementScroll, useViewportScroll, useReducedMotion, animationControls, useAnimation, animate, animateVisualElement, useCycle, transform, isValidMotionProp, useIsPresent, usePresence, DragControls, useDragControls, useDomEvent, createMotionComponent, addScaleCorrection, snapshotViewportBox, createCrossfader, visualElement, batchLayout, flushLayout, MotionConfigContext, PresenceContext, LayoutGroupContext, VisibilityAction, FramerTreeLayoutContext, SharedLayoutContext, createBatcher, FlatTree, useDeprecatedAnimatedState, useDeprecatedInvertedScale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _render_dom_motion_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render/dom/motion.js */ "./node_modules/framer-motion/dist/es/render/dom/motion.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createDomMotionComponent", function() { return _render_dom_motion_js__WEBPACK_IMPORTED_MODULE_0__["createDomMotionComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "motion", function() { return _render_dom_motion_js__WEBPACK_IMPORTED_MODULE_0__["motion"]; });

/* harmony import */ var _render_dom_motion_minimal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render/dom/motion-minimal.js */ "./node_modules/framer-motion/dist/es/render/dom/motion-minimal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "m", function() { return _render_dom_motion_minimal_js__WEBPACK_IMPORTED_MODULE_1__["m"]; });

/* harmony import */ var _components_AnimatePresence_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/AnimatePresence/index.js */ "./node_modules/framer-motion/dist/es/components/AnimatePresence/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnimatePresence", function() { return _components_AnimatePresence_index_js__WEBPACK_IMPORTED_MODULE_2__["AnimatePresence"]; });

/* harmony import */ var _components_AnimateSharedLayout_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/AnimateSharedLayout/index.js */ "./node_modules/framer-motion/dist/es/components/AnimateSharedLayout/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnimateSharedLayout", function() { return _components_AnimateSharedLayout_index_js__WEBPACK_IMPORTED_MODULE_3__["AnimateSharedLayout"]; });

/* harmony import */ var _components_MotionConfig_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/MotionConfig/index.js */ "./node_modules/framer-motion/dist/es/components/MotionConfig/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MotionConfig", function() { return _components_MotionConfig_index_js__WEBPACK_IMPORTED_MODULE_4__["MotionConfig"]; });

/* harmony import */ var _components_LazyMotion_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/LazyMotion/index.js */ "./node_modules/framer-motion/dist/es/components/LazyMotion/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LazyMotion", function() { return _components_LazyMotion_index_js__WEBPACK_IMPORTED_MODULE_5__["LazyMotion"]; });

/* harmony import */ var _render_dom_features_animation_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./render/dom/features-animation.js */ "./node_modules/framer-motion/dist/es/render/dom/features-animation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "domAnimation", function() { return _render_dom_features_animation_js__WEBPACK_IMPORTED_MODULE_6__["domAnimation"]; });

/* harmony import */ var _render_dom_features_max_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./render/dom/features-max.js */ "./node_modules/framer-motion/dist/es/render/dom/features-max.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "domMax", function() { return _render_dom_features_max_js__WEBPACK_IMPORTED_MODULE_7__["domMax"]; });

/* harmony import */ var _value_use_motion_value_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./value/use-motion-value.js */ "./node_modules/framer-motion/dist/es/value/use-motion-value.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMotionValue", function() { return _value_use_motion_value_js__WEBPACK_IMPORTED_MODULE_8__["useMotionValue"]; });

/* harmony import */ var _value_use_motion_template_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./value/use-motion-template.js */ "./node_modules/framer-motion/dist/es/value/use-motion-template.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMotionTemplate", function() { return _value_use_motion_template_js__WEBPACK_IMPORTED_MODULE_9__["useMotionTemplate"]; });

/* harmony import */ var _value_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./value/index.js */ "./node_modules/framer-motion/dist/es/value/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MotionValue", function() { return _value_index_js__WEBPACK_IMPORTED_MODULE_10__["MotionValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "motionValue", function() { return _value_index_js__WEBPACK_IMPORTED_MODULE_10__["motionValue"]; });

/* harmony import */ var _value_utils_resolve_motion_value_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./value/utils/resolve-motion-value.js */ "./node_modules/framer-motion/dist/es/value/utils/resolve-motion-value.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resolveMotionValue", function() { return _value_utils_resolve_motion_value_js__WEBPACK_IMPORTED_MODULE_11__["resolveMotionValue"]; });

/* harmony import */ var _value_use_transform_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./value/use-transform.js */ "./node_modules/framer-motion/dist/es/value/use-transform.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTransform", function() { return _value_use_transform_js__WEBPACK_IMPORTED_MODULE_12__["useTransform"]; });

/* harmony import */ var _value_use_spring_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./value/use-spring.js */ "./node_modules/framer-motion/dist/es/value/use-spring.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSpring", function() { return _value_use_spring_js__WEBPACK_IMPORTED_MODULE_13__["useSpring"]; });

/* harmony import */ var _value_use_velocity_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./value/use-velocity.js */ "./node_modules/framer-motion/dist/es/value/use-velocity.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useVelocity", function() { return _value_use_velocity_js__WEBPACK_IMPORTED_MODULE_14__["useVelocity"]; });

/* harmony import */ var _value_scroll_use_element_scroll_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./value/scroll/use-element-scroll.js */ "./node_modules/framer-motion/dist/es/value/scroll/use-element-scroll.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useElementScroll", function() { return _value_scroll_use_element_scroll_js__WEBPACK_IMPORTED_MODULE_15__["useElementScroll"]; });

/* harmony import */ var _value_scroll_use_viewport_scroll_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./value/scroll/use-viewport-scroll.js */ "./node_modules/framer-motion/dist/es/value/scroll/use-viewport-scroll.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useViewportScroll", function() { return _value_scroll_use_viewport_scroll_js__WEBPACK_IMPORTED_MODULE_16__["useViewportScroll"]; });

/* harmony import */ var _utils_use_reduced_motion_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./utils/use-reduced-motion.js */ "./node_modules/framer-motion/dist/es/utils/use-reduced-motion.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useReducedMotion", function() { return _utils_use_reduced_motion_js__WEBPACK_IMPORTED_MODULE_17__["useReducedMotion"]; });

/* harmony import */ var _animation_animation_controls_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./animation/animation-controls.js */ "./node_modules/framer-motion/dist/es/animation/animation-controls.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "animationControls", function() { return _animation_animation_controls_js__WEBPACK_IMPORTED_MODULE_18__["animationControls"]; });

/* harmony import */ var _animation_use_animation_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./animation/use-animation.js */ "./node_modules/framer-motion/dist/es/animation/use-animation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAnimation", function() { return _animation_use_animation_js__WEBPACK_IMPORTED_MODULE_19__["useAnimation"]; });

/* harmony import */ var _animation_animate_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./animation/animate.js */ "./node_modules/framer-motion/dist/es/animation/animate.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "animate", function() { return _animation_animate_js__WEBPACK_IMPORTED_MODULE_20__["animate"]; });

/* harmony import */ var _render_utils_animation_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./render/utils/animation.js */ "./node_modules/framer-motion/dist/es/render/utils/animation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "animateVisualElement", function() { return _render_utils_animation_js__WEBPACK_IMPORTED_MODULE_21__["animateVisualElement"]; });

/* harmony import */ var _utils_use_cycle_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./utils/use-cycle.js */ "./node_modules/framer-motion/dist/es/utils/use-cycle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCycle", function() { return _utils_use_cycle_js__WEBPACK_IMPORTED_MODULE_22__["useCycle"]; });

/* harmony import */ var _utils_transform_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./utils/transform.js */ "./node_modules/framer-motion/dist/es/utils/transform.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transform", function() { return _utils_transform_js__WEBPACK_IMPORTED_MODULE_23__["transform"]; });

/* harmony import */ var _motion_utils_valid_prop_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./motion/utils/valid-prop.js */ "./node_modules/framer-motion/dist/es/motion/utils/valid-prop.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isValidMotionProp", function() { return _motion_utils_valid_prop_js__WEBPACK_IMPORTED_MODULE_24__["isValidMotionProp"]; });

/* harmony import */ var _components_AnimatePresence_use_presence_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/AnimatePresence/use-presence.js */ "./node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useIsPresent", function() { return _components_AnimatePresence_use_presence_js__WEBPACK_IMPORTED_MODULE_25__["useIsPresent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePresence", function() { return _components_AnimatePresence_use_presence_js__WEBPACK_IMPORTED_MODULE_25__["usePresence"]; });

/* harmony import */ var _gestures_drag_use_drag_controls_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./gestures/drag/use-drag-controls.js */ "./node_modules/framer-motion/dist/es/gestures/drag/use-drag-controls.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DragControls", function() { return _gestures_drag_use_drag_controls_js__WEBPACK_IMPORTED_MODULE_26__["DragControls"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDragControls", function() { return _gestures_drag_use_drag_controls_js__WEBPACK_IMPORTED_MODULE_26__["useDragControls"]; });

/* harmony import */ var _events_use_dom_event_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./events/use-dom-event.js */ "./node_modules/framer-motion/dist/es/events/use-dom-event.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDomEvent", function() { return _events_use_dom_event_js__WEBPACK_IMPORTED_MODULE_27__["useDomEvent"]; });

/* harmony import */ var _motion_index_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./motion/index.js */ "./node_modules/framer-motion/dist/es/motion/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMotionComponent", function() { return _motion_index_js__WEBPACK_IMPORTED_MODULE_28__["createMotionComponent"]; });

/* harmony import */ var _render_dom_projection_scale_correction_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./render/dom/projection/scale-correction.js */ "./node_modules/framer-motion/dist/es/render/dom/projection/scale-correction.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addScaleCorrection", function() { return _render_dom_projection_scale_correction_js__WEBPACK_IMPORTED_MODULE_29__["addScaleCorrection"]; });

/* harmony import */ var _render_dom_projection_utils_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./render/dom/projection/utils.js */ "./node_modules/framer-motion/dist/es/render/dom/projection/utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "snapshotViewportBox", function() { return _render_dom_projection_utils_js__WEBPACK_IMPORTED_MODULE_30__["snapshotViewportBox"]; });

/* harmony import */ var _components_AnimateSharedLayout_utils_crossfader_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/AnimateSharedLayout/utils/crossfader.js */ "./node_modules/framer-motion/dist/es/components/AnimateSharedLayout/utils/crossfader.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createCrossfader", function() { return _components_AnimateSharedLayout_utils_crossfader_js__WEBPACK_IMPORTED_MODULE_31__["createCrossfader"]; });

/* harmony import */ var _render_index_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./render/index.js */ "./node_modules/framer-motion/dist/es/render/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "visualElement", function() { return _render_index_js__WEBPACK_IMPORTED_MODULE_32__["visualElement"]; });

/* harmony import */ var _render_dom_utils_batch_layout_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./render/dom/utils/batch-layout.js */ "./node_modules/framer-motion/dist/es/render/dom/utils/batch-layout.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "batchLayout", function() { return _render_dom_utils_batch_layout_js__WEBPACK_IMPORTED_MODULE_33__["batchLayout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flushLayout", function() { return _render_dom_utils_batch_layout_js__WEBPACK_IMPORTED_MODULE_33__["flushLayout"]; });

/* harmony import */ var _context_MotionConfigContext_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./context/MotionConfigContext.js */ "./node_modules/framer-motion/dist/es/context/MotionConfigContext.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MotionConfigContext", function() { return _context_MotionConfigContext_js__WEBPACK_IMPORTED_MODULE_34__["MotionConfigContext"]; });

/* harmony import */ var _context_PresenceContext_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./context/PresenceContext.js */ "./node_modules/framer-motion/dist/es/context/PresenceContext.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PresenceContext", function() { return _context_PresenceContext_js__WEBPACK_IMPORTED_MODULE_35__["PresenceContext"]; });

/* harmony import */ var _context_LayoutGroupContext_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./context/LayoutGroupContext.js */ "./node_modules/framer-motion/dist/es/context/LayoutGroupContext.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutGroupContext", function() { return _context_LayoutGroupContext_js__WEBPACK_IMPORTED_MODULE_36__["LayoutGroupContext"]; });

/* harmony import */ var _components_AnimateSharedLayout_types_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/AnimateSharedLayout/types.js */ "./node_modules/framer-motion/dist/es/components/AnimateSharedLayout/types.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisibilityAction", function() { return _components_AnimateSharedLayout_types_js__WEBPACK_IMPORTED_MODULE_37__["VisibilityAction"]; });

/* harmony import */ var _context_SharedLayoutContext_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./context/SharedLayoutContext.js */ "./node_modules/framer-motion/dist/es/context/SharedLayoutContext.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FramerTreeLayoutContext", function() { return _context_SharedLayoutContext_js__WEBPACK_IMPORTED_MODULE_38__["FramerTreeLayoutContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedLayoutContext", function() { return _context_SharedLayoutContext_js__WEBPACK_IMPORTED_MODULE_38__["SharedLayoutContext"]; });

/* harmony import */ var _components_AnimateSharedLayout_utils_batcher_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/AnimateSharedLayout/utils/batcher.js */ "./node_modules/framer-motion/dist/es/components/AnimateSharedLayout/utils/batcher.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createBatcher", function() { return _components_AnimateSharedLayout_utils_batcher_js__WEBPACK_IMPORTED_MODULE_39__["createBatcher"]; });

/* harmony import */ var _render_utils_flat_tree_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./render/utils/flat-tree.js */ "./node_modules/framer-motion/dist/es/render/utils/flat-tree.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlatTree", function() { return _render_utils_flat_tree_js__WEBPACK_IMPORTED_MODULE_40__["FlatTree"]; });

/* harmony import */ var _animation_use_animated_state_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./animation/use-animated-state.js */ "./node_modules/framer-motion/dist/es/animation/use-animated-state.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDeprecatedAnimatedState", function() { return _animation_use_animated_state_js__WEBPACK_IMPORTED_MODULE_41__["useAnimatedState"]; });

/* harmony import */ var _value_use_inverted_scale_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./value/use-inverted-scale.js */ "./node_modules/framer-motion/dist/es/value/use-inverted-scale.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDeprecatedInvertedScale", function() { return _value_use_inverted_scale_js__WEBPACK_IMPORTED_MODULE_42__["useInvertedScale"]; });













































/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/features/animations.js":
/*!**************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/features/animations.js ***!
  \**************************************************************************/
/*! exports provided: animations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animations", function() { return animations; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _animation_utils_is_animation_controls_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../animation/utils/is-animation-controls.js */ "./node_modules/framer-motion/dist/es/animation/utils/is-animation-controls.js");
/* harmony import */ var _components_AnimatePresence_use_presence_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/AnimatePresence/use-presence.js */ "./node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.js");
/* harmony import */ var _context_PresenceContext_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/PresenceContext.js */ "./node_modules/framer-motion/dist/es/context/PresenceContext.js");
/* harmony import */ var _render_utils_animation_state_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../render/utils/animation-state.js */ "./node_modules/framer-motion/dist/es/render/utils/animation-state.js");
/* harmony import */ var _render_utils_types_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../render/utils/types.js */ "./node_modules/framer-motion/dist/es/render/utils/types.js");
/* harmony import */ var _utils_make_renderless_component_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/make-renderless-component.js */ "./node_modules/framer-motion/dist/es/motion/utils/make-renderless-component.js");








var animations = {
  animation: Object(_utils_make_renderless_component_js__WEBPACK_IMPORTED_MODULE_7__["makeRenderlessComponent"])(function (_a) {
    var visualElement = _a.visualElement,
      animate = _a.animate;
    /**
     * We dynamically generate the AnimationState manager as it contains a reference
     * to the underlying animation library. We only want to load that if we load this,
     * so people can optionally code split it out using the `m` component.
     */
    visualElement.animationState || (visualElement.animationState = Object(_render_utils_animation_state_js__WEBPACK_IMPORTED_MODULE_5__["createAnimationState"])(visualElement));
    /**
     * Subscribe any provided AnimationControls to the component's VisualElement
     */
    if (Object(_animation_utils_is_animation_controls_js__WEBPACK_IMPORTED_MODULE_2__["isAnimationControls"])(animate)) {
      Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
        return animate.subscribe(visualElement);
      }, [animate]);
    }
  }),
  exit: Object(_utils_make_renderless_component_js__WEBPACK_IMPORTED_MODULE_7__["makeRenderlessComponent"])(function (props) {
    var custom = props.custom,
      visualElement = props.visualElement;
    var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(_components_AnimatePresence_use_presence_js__WEBPACK_IMPORTED_MODULE_3__["usePresence"])(), 2),
      isPresent = _a[0],
      onExitComplete = _a[1];
    var presenceContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_PresenceContext_js__WEBPACK_IMPORTED_MODULE_4__["PresenceContext"]);
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
      var _a, _b;
      var animation = (_a = visualElement.animationState) === null || _a === void 0 ? void 0 : _a.setActive(_render_utils_types_js__WEBPACK_IMPORTED_MODULE_6__["AnimationType"].Exit, !isPresent, {
        custom: (_b = presenceContext === null || presenceContext === void 0 ? void 0 : presenceContext.custom) !== null && _b !== void 0 ? _b : custom
      });
      !isPresent && (animation === null || animation === void 0 ? void 0 : animation.then(onExitComplete));
    }, [isPresent]);
  })
};


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/features/definitions.js":
/*!***************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/features/definitions.js ***!
  \***************************************************************************/
/*! exports provided: featureDefinitions, loadFeatures */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "featureDefinitions", function() { return featureDefinitions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadFeatures", function() { return loadFeatures; });
var createDefinition = function createDefinition(propNames) {
  return {
    isEnabled: function isEnabled(props) {
      return propNames.some(function (name) {
        return !!props[name];
      });
    }
  };
};
var featureDefinitions = {
  measureLayout: createDefinition(["layout", "layoutId", "drag", "_layoutResetTransform"]),
  animation: createDefinition(["animate", "exit", "variants", "whileHover", "whileTap", "whileFocus", "whileDrag"]),
  exit: createDefinition(["exit"]),
  drag: createDefinition(["drag", "dragControls"]),
  focus: createDefinition(["whileFocus"]),
  hover: createDefinition(["whileHover", "onHoverStart", "onHoverEnd"]),
  tap: createDefinition(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
  pan: createDefinition(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]),
  layoutAnimation: createDefinition(["layout", "layoutId"])
};
function loadFeatures(features) {
  for (var key in features) {
    var Component = features[key];
    if (Component !== null) featureDefinitions[key].Component = Component;
  }
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/features/drag.js":
/*!********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/features/drag.js ***!
  \********************************************************************/
/*! exports provided: drag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drag", function() { return drag; });
/* harmony import */ var _gestures_drag_use_drag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../gestures/drag/use-drag.js */ "./node_modules/framer-motion/dist/es/gestures/drag/use-drag.js");
/* harmony import */ var _gestures_use_pan_gesture_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../gestures/use-pan-gesture.js */ "./node_modules/framer-motion/dist/es/gestures/use-pan-gesture.js");
/* harmony import */ var _utils_make_renderless_component_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/make-renderless-component.js */ "./node_modules/framer-motion/dist/es/motion/utils/make-renderless-component.js");



var drag = {
  pan: Object(_utils_make_renderless_component_js__WEBPACK_IMPORTED_MODULE_2__["makeRenderlessComponent"])(_gestures_use_pan_gesture_js__WEBPACK_IMPORTED_MODULE_1__["usePanGesture"]),
  drag: Object(_utils_make_renderless_component_js__WEBPACK_IMPORTED_MODULE_2__["makeRenderlessComponent"])(_gestures_drag_use_drag_js__WEBPACK_IMPORTED_MODULE_0__["useDrag"])
};


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/features/gestures.js":
/*!************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/features/gestures.js ***!
  \************************************************************************/
/*! exports provided: gestureAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gestureAnimations", function() { return gestureAnimations; });
/* harmony import */ var _gestures_use_focus_gesture_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../gestures/use-focus-gesture.js */ "./node_modules/framer-motion/dist/es/gestures/use-focus-gesture.js");
/* harmony import */ var _gestures_use_hover_gesture_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../gestures/use-hover-gesture.js */ "./node_modules/framer-motion/dist/es/gestures/use-hover-gesture.js");
/* harmony import */ var _gestures_use_tap_gesture_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../gestures/use-tap-gesture.js */ "./node_modules/framer-motion/dist/es/gestures/use-tap-gesture.js");
/* harmony import */ var _utils_make_renderless_component_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/make-renderless-component.js */ "./node_modules/framer-motion/dist/es/motion/utils/make-renderless-component.js");




var gestureAnimations = {
  tap: Object(_utils_make_renderless_component_js__WEBPACK_IMPORTED_MODULE_3__["makeRenderlessComponent"])(_gestures_use_tap_gesture_js__WEBPACK_IMPORTED_MODULE_2__["useTapGesture"]),
  focus: Object(_utils_make_renderless_component_js__WEBPACK_IMPORTED_MODULE_3__["makeRenderlessComponent"])(_gestures_use_focus_gesture_js__WEBPACK_IMPORTED_MODULE_0__["useFocusGesture"]),
  hover: Object(_utils_make_renderless_component_js__WEBPACK_IMPORTED_MODULE_3__["makeRenderlessComponent"])(_gestures_use_hover_gesture_js__WEBPACK_IMPORTED_MODULE_1__["useHoverGesture"])
};


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/features/layout/Animate.js":
/*!******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/features/layout/Animate.js ***!
  \******************************************************************************/
/*! exports provided: AnimateLayoutContextProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimateLayoutContextProvider", function() { return AnimateLayoutContextProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_each_axis_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/each-axis.js */ "./node_modules/framer-motion/dist/es/utils/each-axis.js");
/* harmony import */ var _animation_utils_transitions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../animation/utils/transitions.js */ "./node_modules/framer-motion/dist/es/animation/utils/transitions.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils.js */ "./node_modules/framer-motion/dist/es/motion/features/layout/utils.js");
/* harmony import */ var _components_AnimateSharedLayout_types_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/AnimateSharedLayout/types.js */ "./node_modules/framer-motion/dist/es/components/AnimateSharedLayout/types.js");
/* harmony import */ var _components_AnimatePresence_use_presence_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/AnimatePresence/use-presence.js */ "./node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.js");
/* harmony import */ var _utils_geometry_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utils/geometry/index.js */ "./node_modules/framer-motion/dist/es/utils/geometry/index.js");
/* harmony import */ var _render_dom_projection_scale_correction_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../render/dom/projection/scale-correction.js */ "./node_modules/framer-motion/dist/es/render/dom/projection/scale-correction.js");
/* harmony import */ var _render_dom_projection_default_scale_correctors_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../render/dom/projection/default-scale-correctors.js */ "./node_modules/framer-motion/dist/es/render/dom/projection/default-scale-correctors.js");










var progressTarget = 1000;
var Animate = /** @class */function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Animate, _super);
  function Animate() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    /**
     * A mutable object that tracks the target viewport box
     * for the current animation frame.
     */
    _this.frameTarget = Object(_utils_geometry_index_js__WEBPACK_IMPORTED_MODULE_7__["axisBox"])();
    /**
     * The current animation target, we use this to check whether to start
     * a new animation or continue the existing one.
     */
    _this.currentAnimationTarget = Object(_utils_geometry_index_js__WEBPACK_IMPORTED_MODULE_7__["axisBox"])();
    /**
     * Track whether we're animating this axis.
     */
    _this.isAnimating = {
      x: false,
      y: false
    };
    _this.stopAxisAnimation = {
      x: undefined,
      y: undefined
    };
    _this.isAnimatingTree = false;
    _this.animate = function (target, origin, _a) {
      if (_a === void 0) {
        _a = {};
      }
      var originBox = _a.originBox,
        targetBox = _a.targetBox,
        visibilityAction = _a.visibilityAction,
        shouldStackAnimate = _a.shouldStackAnimate,
        onComplete = _a.onComplete,
        prevParent = _a.prevParent,
        config = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["originBox", "targetBox", "visibilityAction", "shouldStackAnimate", "onComplete", "prevParent"]);
      var _b = _this.props,
        visualElement = _b.visualElement,
        layout = _b.layout;
      /**
       * Early return if we've been instructed not to animate this render.
       */
      if (shouldStackAnimate === false) {
        _this.isAnimatingTree = false;
        return _this.safeToRemove();
      }
      /**
       * Prioritise tree animations
       */
      if (_this.isAnimatingTree && shouldStackAnimate !== true) {
        return;
      } else if (shouldStackAnimate) {
        _this.isAnimatingTree = true;
      }
      /**
       * Allow the measured origin (prev bounding box) and target (actual layout) to be
       * overridden by the provided config.
       */
      origin = originBox || origin;
      target = targetBox || target;
      /**
       * If this element has a projecting parent, there's an opportunity to animate
       * it relatively to that parent rather than relatively to the viewport. This
       * allows us to add orchestrated animations.
       */
      var isRelative = false;
      var projectionParent = visualElement.getProjectionParent();
      if (projectionParent) {
        var prevParentViewportBox = projectionParent.prevViewportBox;
        var parentLayout = projectionParent.getLayoutState().layout;
        /**
         * If we're being provided a previous parent VisualElement by AnimateSharedLayout
         */
        if (prevParent) {
          /**
           * If we've been provided an explicit target box it means we're animating back
           * to this previous parent. So we can make a relative box by comparing to the previous
           * parent's layout
           */
          if (targetBox) {
            parentLayout = prevParent.getLayoutState().layout;
          }
          /**
           * Likewise if we've been provided an explicit origin box it means we're
           * animating out from a different element. So we should figure out where that was
           * on screen relative to the new parent element.
           */
          if (originBox && !Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["checkIfParentHasChanged"])(prevParent, projectionParent) && prevParent.prevViewportBox) {
            prevParentViewportBox = prevParent.prevViewportBox;
          }
        }
        if (prevParentViewportBox && isProvidedCorrectDataForRelativeSharedLayout(prevParent, originBox, targetBox)) {
          isRelative = true;
          origin = Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["calcRelativeOffset"])(prevParentViewportBox, origin);
          target = Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["calcRelativeOffset"])(parentLayout, target);
        }
      }
      var boxHasMoved = hasMoved(origin, target);
      var animations = Object(_utils_each_axis_js__WEBPACK_IMPORTED_MODULE_2__["eachAxis"])(function (axis) {
        var _a, _b;
        /**
         * If layout is set to "position", we can resize the origin box based on the target
         * box and only animate its position.
         */
        if (layout === "position") {
          var targetLength = target[axis].max - target[axis].min;
          origin[axis].max = origin[axis].min + targetLength;
        }
        if (visualElement.projection.isTargetLocked) {
          return;
        } else if (visibilityAction !== undefined) {
          visualElement.setVisibility(visibilityAction === _components_AnimateSharedLayout_types_js__WEBPACK_IMPORTED_MODULE_5__["VisibilityAction"].Show);
        } else if (boxHasMoved) {
          // If the box has moved, animate between it's current visual state and its
          // final state
          return _this.animateAxis(axis, target[axis], origin[axis], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, config), {
            isRelative: isRelative
          }));
        } else {
          (_b = (_a = _this.stopAxisAnimation)[axis]) === null || _b === void 0 ? void 0 : _b.call(_a);
          // If the box has remained in the same place, immediately set the axis target
          // to the final desired state
          return visualElement.setProjectionTargetAxis(axis, target[axis].min, target[axis].max, isRelative);
        }
      });
      // Force a render to ensure there's no flash of uncorrected bounding box.
      visualElement.syncRender();
      /**
       * If this visualElement isn't present (ie it's been removed from the tree by the user but
       * kept in by the tree by AnimatePresence) then call safeToRemove when all axis animations
       * have successfully finished.
       */
      return Promise.all(animations).then(function () {
        _this.isAnimatingTree = false;
        onComplete && onComplete();
        visualElement.notifyLayoutAnimationComplete();
      });
    };
    return _this;
  }
  Animate.prototype.componentDidMount = function () {
    var _this = this;
    var visualElement = this.props.visualElement;
    visualElement.animateMotionValue = _animation_utils_transitions_js__WEBPACK_IMPORTED_MODULE_3__["startAnimation"];
    visualElement.enableLayoutProjection();
    this.unsubLayoutReady = visualElement.onLayoutUpdate(this.animate);
    visualElement.layoutSafeToRemove = function () {
      return _this.safeToRemove();
    };
    Object(_render_dom_projection_scale_correction_js__WEBPACK_IMPORTED_MODULE_8__["addScaleCorrection"])(_render_dom_projection_default_scale_correctors_js__WEBPACK_IMPORTED_MODULE_9__["defaultScaleCorrectors"]);
  };
  Animate.prototype.componentWillUnmount = function () {
    var _this = this;
    this.unsubLayoutReady();
    Object(_utils_each_axis_js__WEBPACK_IMPORTED_MODULE_2__["eachAxis"])(function (axis) {
      var _a, _b;
      return (_b = (_a = _this.stopAxisAnimation)[axis]) === null || _b === void 0 ? void 0 : _b.call(_a);
    });
  };
  /**
   * TODO: This manually performs animations on the visualElement's layout progress
   * values. It'd be preferable to amend the startLayoutAxisAnimation
   * API to accept more custom animations like this.
   */
  Animate.prototype.animateAxis = function (axis, target, origin, _a) {
    var _this = this;
    var _b, _c;
    var _d = _a === void 0 ? {} : _a,
      transition = _d.transition,
      isRelative = _d.isRelative;
    /**
     * If we're not animating to a new target, don't run this animation
     */
    if (this.isAnimating[axis] && axisIsEqual(target, this.currentAnimationTarget[axis])) {
      return;
    }
    (_c = (_b = this.stopAxisAnimation)[axis]) === null || _c === void 0 ? void 0 : _c.call(_b);
    this.isAnimating[axis] = true;
    var visualElement = this.props.visualElement;
    var frameTarget = this.frameTarget[axis];
    var layoutProgress = visualElement.getProjectionAnimationProgress()[axis];
    /**
     * Set layout progress back to 0. We set it twice to hard-reset any velocity that might
     * be re-incoporated into a subsequent spring animation.
     */
    layoutProgress.clearListeners();
    layoutProgress.set(0);
    layoutProgress.set(0);
    /**
     * Create an animation function to run once per frame. This will tween the visual bounding box from
     * origin to target using the latest progress value.
     */
    var frame = function frame() {
      // Convert the latest layoutProgress, which is a value from 0-1000, into a 0-1 progress
      var p = layoutProgress.get() / progressTarget;
      // Tween the axis and update the visualElement with the latest values
      Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["tweenAxis"])(frameTarget, origin, target, p);
      visualElement.setProjectionTargetAxis(axis, frameTarget.min, frameTarget.max, isRelative);
    };
    // Synchronously run a frame to ensure there's no flash of the uncorrected bounding box.
    frame();
    // Create a function to stop animation on this specific axis
    var unsubscribeProgress = layoutProgress.onChange(frame);
    this.stopAxisAnimation[axis] = function () {
      _this.isAnimating[axis] = false;
      layoutProgress.stop();
      unsubscribeProgress();
    };
    this.currentAnimationTarget[axis] = target;
    var layoutTransition = transition || visualElement.getDefaultTransition() || defaultLayoutTransition;
    // Start the animation on this axis
    var animation = Object(_animation_utils_transitions_js__WEBPACK_IMPORTED_MODULE_3__["startAnimation"])(axis === "x" ? "layoutX" : "layoutY", layoutProgress, progressTarget, layoutTransition && Object(_animation_utils_transitions_js__WEBPACK_IMPORTED_MODULE_3__["getValueTransition"])(layoutTransition, "layout")).then(this.stopAxisAnimation[axis]);
    return animation;
  };
  Animate.prototype.safeToRemove = function () {
    var _a, _b;
    (_b = (_a = this.props).safeToRemove) === null || _b === void 0 ? void 0 : _b.call(_a);
  };
  Animate.prototype.render = function () {
    return null;
  };
  return Animate;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);
function AnimateLayoutContextProvider(props) {
  var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(_components_AnimatePresence_use_presence_js__WEBPACK_IMPORTED_MODULE_6__["usePresence"])(), 2),
    safeToRemove = _a[1];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Animate, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props, {
    safeToRemove: safeToRemove
  }));
}
function hasMoved(a, b) {
  return !isZeroBox(a) && !isZeroBox(b) && (!axisIsEqual(a.x, b.x) || !axisIsEqual(a.y, b.y));
}
var zeroAxis = {
  min: 0,
  max: 0
};
function isZeroBox(a) {
  return axisIsEqual(a.x, zeroAxis) && axisIsEqual(a.y, zeroAxis);
}
function axisIsEqual(a, b) {
  return a.min === b.min && a.max === b.max;
}
var defaultLayoutTransition = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
};
function isProvidedCorrectDataForRelativeSharedLayout(prevParent, originBox, targetBox) {
  return prevParent || !prevParent && !(originBox || targetBox);
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/features/layout/Measure.js":
/*!******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/features/layout/Measure.js ***!
  \******************************************************************************/
/*! exports provided: MeasureContextProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeasureContextProvider", function() { return MeasureContextProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_SharedLayoutContext_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../context/SharedLayoutContext.js */ "./node_modules/framer-motion/dist/es/context/SharedLayoutContext.js");
/* harmony import */ var _render_dom_projection_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../render/dom/projection/utils.js */ "./node_modules/framer-motion/dist/es/render/dom/projection/utils.js");





/**
 * This component is responsible for scheduling the measuring of the motion component
 */
var Measure = /** @class */function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Measure, _super);
  function Measure() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  /**
   * If this is a child of a SyncContext, register the VisualElement with it on mount.
   */
  Measure.prototype.componentDidMount = function () {
    var _a = this.props,
      syncLayout = _a.syncLayout,
      framerSyncLayout = _a.framerSyncLayout,
      visualElement = _a.visualElement;
    Object(_context_SharedLayoutContext_js__WEBPACK_IMPORTED_MODULE_2__["isSharedLayout"])(syncLayout) && syncLayout.register(visualElement);
    Object(_context_SharedLayoutContext_js__WEBPACK_IMPORTED_MODULE_2__["isSharedLayout"])(framerSyncLayout) && framerSyncLayout.register(visualElement);
    visualElement.onUnmount(function () {
      if (Object(_context_SharedLayoutContext_js__WEBPACK_IMPORTED_MODULE_2__["isSharedLayout"])(syncLayout)) {
        syncLayout.remove(visualElement);
      }
      if (Object(_context_SharedLayoutContext_js__WEBPACK_IMPORTED_MODULE_2__["isSharedLayout"])(framerSyncLayout)) {
        framerSyncLayout.remove(visualElement);
      }
    });
  };
  /**
   * If this is a child of a SyncContext, notify it that it needs to re-render. It will then
   * handle the snapshotting.
   *
   * If it is stand-alone component, add it to the batcher.
   */
  Measure.prototype.getSnapshotBeforeUpdate = function () {
    var _a = this.props,
      syncLayout = _a.syncLayout,
      visualElement = _a.visualElement;
    if (Object(_context_SharedLayoutContext_js__WEBPACK_IMPORTED_MODULE_2__["isSharedLayout"])(syncLayout)) {
      syncLayout.syncUpdate();
    } else {
      Object(_render_dom_projection_utils_js__WEBPACK_IMPORTED_MODULE_3__["snapshotViewportBox"])(visualElement);
      syncLayout.add(visualElement);
    }
    return null;
  };
  Measure.prototype.componentDidUpdate = function () {
    var syncLayout = this.props.syncLayout;
    if (!Object(_context_SharedLayoutContext_js__WEBPACK_IMPORTED_MODULE_2__["isSharedLayout"])(syncLayout)) syncLayout.flush();
  };
  Measure.prototype.render = function () {
    return null;
  };
  return Measure;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
function MeasureContextProvider(props) {
  var syncLayout = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_SharedLayoutContext_js__WEBPACK_IMPORTED_MODULE_2__["SharedLayoutContext"]);
  var framerSyncLayout = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_SharedLayoutContext_js__WEBPACK_IMPORTED_MODULE_2__["FramerTreeLayoutContext"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Measure, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props, {
    syncLayout: syncLayout,
    framerSyncLayout: framerSyncLayout
  }));
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/features/layout/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/features/layout/index.js ***!
  \****************************************************************************/
/*! exports provided: layoutAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layoutAnimations", function() { return layoutAnimations; });
/* harmony import */ var _Animate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Animate.js */ "./node_modules/framer-motion/dist/es/motion/features/layout/Animate.js");
/* harmony import */ var _Measure_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Measure.js */ "./node_modules/framer-motion/dist/es/motion/features/layout/Measure.js");


var layoutAnimations = {
  measureLayout: _Measure_js__WEBPACK_IMPORTED_MODULE_1__["MeasureContextProvider"],
  layoutAnimation: _Animate_js__WEBPACK_IMPORTED_MODULE_0__["AnimateLayoutContextProvider"]
};


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/features/layout/utils.js":
/*!****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/features/layout/utils.js ***!
  \****************************************************************************/
/*! exports provided: calcRelativeOffset, calcRelativeOffsetAxis, checkIfParentHasChanged, tweenAxis */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcRelativeOffset", function() { return calcRelativeOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcRelativeOffsetAxis", function() { return calcRelativeOffsetAxis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkIfParentHasChanged", function() { return checkIfParentHasChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tweenAxis", function() { return tweenAxis; });
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/index.js");

function tweenAxis(target, prev, next, p) {
  target.min = Object(popmotion__WEBPACK_IMPORTED_MODULE_0__["mix"])(prev.min, next.min, p);
  target.max = Object(popmotion__WEBPACK_IMPORTED_MODULE_0__["mix"])(prev.max, next.max, p);
}
function calcRelativeOffsetAxis(parent, child) {
  return {
    min: child.min - parent.min,
    max: child.max - parent.min
  };
}
function calcRelativeOffset(parent, child) {
  return {
    x: calcRelativeOffsetAxis(parent.x, child.x),
    y: calcRelativeOffsetAxis(parent.y, child.y)
  };
}
function checkIfParentHasChanged(prev, next) {
  var prevId = prev.getLayoutId();
  var nextId = next.getLayoutId();
  return prevId !== nextId || nextId === undefined && prev !== next;
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/features/use-features.js":
/*!****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/features/use-features.js ***!
  \****************************************************************************/
/*! exports provided: useFeatures */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFeatures", function() { return useFeatures; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./definitions.js */ "./node_modules/framer-motion/dist/es/motion/features/definitions.js");
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");
/* harmony import */ var _context_LazyContext_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/LazyContext.js */ "./node_modules/framer-motion/dist/es/context/LazyContext.js");






var featureNames = Object.keys(_definitions_js__WEBPACK_IMPORTED_MODULE_2__["featureDefinitions"]);
var numFeatures = featureNames.length;
/**
 * Load features via renderless components based on the provided MotionProps.
 */
function useFeatures(props, visualElement, preloadedFeatures) {
  var features = [];
  var lazyContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_LazyContext_js__WEBPACK_IMPORTED_MODULE_4__["LazyContext"]);
  if (!visualElement) return null;
  /**
   * If we're in development mode, check to make sure we're not rendering a motion component
   * as a child of LazyMotion, as this will break the file-size benefits of using it.
   */
  if ( true && preloadedFeatures && lazyContext.strict) {
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_3__["invariant"])(false, "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.");
  }
  for (var i = 0; i < numFeatures; i++) {
    var name_1 = featureNames[i];
    var _a = _definitions_js__WEBPACK_IMPORTED_MODULE_2__["featureDefinitions"][name_1],
      isEnabled = _a.isEnabled,
      Component = _a.Component;
    /**
     * It might be possible in the future to use this moment to
     * dynamically request functionality. In initial tests this
     * was producing a lot of duplication amongst bundles.
     */
    if (isEnabled(props) && Component) {
      features.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Component, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({
        key: name_1
      }, props, {
        visualElement: visualElement
      })));
    }
  }
  return features;
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/index.js":
/*!************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/index.js ***!
  \************************************************************/
/*! exports provided: createMotionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMotionComponent", function() { return createMotionComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _features_use_features_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./features/use-features.js */ "./node_modules/framer-motion/dist/es/motion/features/use-features.js");
/* harmony import */ var _context_MotionConfigContext_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/MotionConfigContext.js */ "./node_modules/framer-motion/dist/es/context/MotionConfigContext.js");
/* harmony import */ var _context_MotionContext_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/MotionContext/index.js */ "./node_modules/framer-motion/dist/es/context/MotionContext/index.js");
/* harmony import */ var _utils_use_visual_element_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/use-visual-element.js */ "./node_modules/framer-motion/dist/es/motion/utils/use-visual-element.js");
/* harmony import */ var _utils_use_motion_ref_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/use-motion-ref.js */ "./node_modules/framer-motion/dist/es/motion/utils/use-motion-ref.js");
/* harmony import */ var _context_MotionContext_create_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../context/MotionContext/create.js */ "./node_modules/framer-motion/dist/es/context/MotionContext/create.js");
/* harmony import */ var _features_definitions_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./features/definitions.js */ "./node_modules/framer-motion/dist/es/motion/features/definitions.js");
/* harmony import */ var _utils_is_browser_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/is-browser.js */ "./node_modules/framer-motion/dist/es/utils/is-browser.js");











/**
 * Create a `motion` component.
 *
 * This function accepts a Component argument, which can be either a string (ie "div"
 * for `motion.div`), or an actual React component.
 *
 * Alongside this is a config option which provides a way of rendering the provided
 * component "offline", or outside the React render cycle.
 *
 * @internal
 */
function createMotionComponent(_a) {
  var preloadedFeatures = _a.preloadedFeatures,
    createVisualElement = _a.createVisualElement,
    useRender = _a.useRender,
    useVisualState = _a.useVisualState,
    Component = _a.Component;
  preloadedFeatures && Object(_features_definitions_js__WEBPACK_IMPORTED_MODULE_7__["loadFeatures"])(preloadedFeatures);
  function MotionComponent(props, externalRef) {
    /**
     * If we're rendering in a static environment, we only visually update the component
     * as a result of a React-rerender rather than interactions or animations. This
     * means we don't need to load additional memory structures like VisualElement,
     * or any gesture/animation features.
     */
    var isStatic = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_MotionConfigContext_js__WEBPACK_IMPORTED_MODULE_2__["MotionConfigContext"]).isStatic;
    var features = null;
    /**
     * Create the tree context. This is memoized and will only trigger renders
     * when the current tree variant changes in static mode.
     */
    var context = Object(_context_MotionContext_create_js__WEBPACK_IMPORTED_MODULE_6__["useCreateMotionContext"])(props, isStatic);
    /**
     *
     */
    var visualState = useVisualState(props, isStatic);
    if (!isStatic && _utils_is_browser_js__WEBPACK_IMPORTED_MODULE_8__["isBrowser"]) {
      /**
       * Create a VisualElement for this component. A VisualElement provides a common
       * interface to renderer-specific APIs (ie DOM/Three.js etc) as well as
       * providing a way of rendering to these APIs outside of the React render loop
       * for more performant animations and interactions
       */
      context.visualElement = Object(_utils_use_visual_element_js__WEBPACK_IMPORTED_MODULE_4__["useVisualElement"])(Component, visualState, props, createVisualElement);
      /**
       * Load Motion gesture and animation features. These are rendered as renderless
       * components so each feature can optionally make use of React lifecycle methods.
       *
       * TODO: The intention is to move these away from a React-centric to a
       * VisualElement-centric lifecycle scheme.
       */
      features = Object(_features_use_features_js__WEBPACK_IMPORTED_MODULE_1__["useFeatures"])(props, context.visualElement, preloadedFeatures);
    }
    /**
     * The mount order and hierarchy is specific to ensure our element ref
     * is hydrated by the time features fire their effects.
     */
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_context_MotionContext_index_js__WEBPACK_IMPORTED_MODULE_3__["MotionContext"].Provider, {
      value: context
    }, useRender(Component, props, Object(_utils_use_motion_ref_js__WEBPACK_IMPORTED_MODULE_5__["useMotionRef"])(visualState, context.visualElement, externalRef), visualState, isStatic)), features);
  }
  return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(MotionComponent);
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/utils/is-forced-motion-value.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/utils/is-forced-motion-value.js ***!
  \***********************************************************************************/
/*! exports provided: isForcedMotionValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isForcedMotionValue", function() { return isForcedMotionValue; });
/* harmony import */ var _render_dom_projection_scale_correction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../render/dom/projection/scale-correction.js */ "./node_modules/framer-motion/dist/es/render/dom/projection/scale-correction.js");
/* harmony import */ var _render_html_utils_transform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../render/html/utils/transform.js */ "./node_modules/framer-motion/dist/es/render/html/utils/transform.js");


function isForcedMotionValue(key, _a) {
  var layout = _a.layout,
    layoutId = _a.layoutId;
  return Object(_render_html_utils_transform_js__WEBPACK_IMPORTED_MODULE_1__["isTransformProp"])(key) || Object(_render_html_utils_transform_js__WEBPACK_IMPORTED_MODULE_1__["isTransformOriginProp"])(key) || (layout || layoutId !== undefined) && (!!_render_dom_projection_scale_correction_js__WEBPACK_IMPORTED_MODULE_0__["valueScaleCorrection"][key] || key === "opacity");
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/utils/make-renderless-component.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/utils/make-renderless-component.js ***!
  \**************************************************************************************/
/*! exports provided: makeRenderlessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeRenderlessComponent", function() { return makeRenderlessComponent; });
var makeRenderlessComponent = function makeRenderlessComponent(hook) {
  return function (props) {
    hook(props);
    return null;
  };
};


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/utils/use-motion-ref.js":
/*!***************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/utils/use-motion-ref.js ***!
  \***************************************************************************/
/*! exports provided: useMotionRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMotionRef", function() { return useMotionRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_is_ref_object_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/is-ref-object.js */ "./node_modules/framer-motion/dist/es/utils/is-ref-object.js");



/**
 * Creates a ref function that, when called, hydrates the provided
 * external ref and VisualElement.
 */
function useMotionRef(visualState, visualElement, externalRef) {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (instance) {
    var _a;
    instance && ((_a = visualState.mount) === null || _a === void 0 ? void 0 : _a.call(visualState, instance));
    if (visualElement) {
      instance ? visualElement.mount(instance) : visualElement.unmount();
    }
    if (externalRef) {
      if (typeof externalRef === "function") {
        externalRef(instance);
      } else if (Object(_utils_is_ref_object_js__WEBPACK_IMPORTED_MODULE_1__["isRefObject"])(externalRef)) {
        externalRef.current = instance;
      }
    }
  },
  /**
   * Only pass a new ref callback to React if we've received a visual element
   * factory. Otherwise we'll be mounting/remounting every time externalRef
   * or other dependencies change.
   */
  [visualElement]);
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/utils/use-visual-element.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/utils/use-visual-element.js ***!
  \*******************************************************************************/
/*! exports provided: useVisualElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useVisualElement", function() { return useVisualElement; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_PresenceContext_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/PresenceContext.js */ "./node_modules/framer-motion/dist/es/context/PresenceContext.js");
/* harmony import */ var _components_AnimatePresence_use_presence_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/AnimatePresence/use-presence.js */ "./node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.js");
/* harmony import */ var _context_LayoutGroupContext_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/LayoutGroupContext.js */ "./node_modules/framer-motion/dist/es/context/LayoutGroupContext.js");
/* harmony import */ var _context_MotionContext_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../context/MotionContext/index.js */ "./node_modules/framer-motion/dist/es/context/MotionContext/index.js");
/* harmony import */ var _utils_use_isomorphic_effect_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/use-isomorphic-effect.js */ "./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.js");
/* harmony import */ var _context_MotionConfigContext_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../context/MotionConfigContext.js */ "./node_modules/framer-motion/dist/es/context/MotionConfigContext.js");
/* harmony import */ var _context_LazyContext_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../context/LazyContext.js */ "./node_modules/framer-motion/dist/es/context/LazyContext.js");









function useLayoutId(_a) {
  var layoutId = _a.layoutId;
  var layoutGroupId = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_LayoutGroupContext_js__WEBPACK_IMPORTED_MODULE_4__["LayoutGroupContext"]);
  return layoutGroupId && layoutId !== undefined ? layoutGroupId + "-" + layoutId : layoutId;
}
function useVisualElement(Component, visualState, props, createVisualElement) {
  var config = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_MotionConfigContext_js__WEBPACK_IMPORTED_MODULE_7__["MotionConfigContext"]);
  var lazyContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_LazyContext_js__WEBPACK_IMPORTED_MODULE_8__["LazyContext"]);
  var parent = Object(_context_MotionContext_index_js__WEBPACK_IMPORTED_MODULE_5__["useVisualElementContext"])();
  var presenceContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_PresenceContext_js__WEBPACK_IMPORTED_MODULE_2__["PresenceContext"]);
  var layoutId = useLayoutId(props);
  var visualElementRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(undefined);
  /**
   * If we haven't preloaded a renderer, check to see if we have one lazy-loaded
   */
  if (!createVisualElement) createVisualElement = lazyContext.renderer;
  if (!visualElementRef.current && createVisualElement) {
    visualElementRef.current = createVisualElement(Component, {
      visualState: visualState,
      parent: parent,
      props: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props), {
        layoutId: layoutId
      }),
      presenceId: presenceContext === null || presenceContext === void 0 ? void 0 : presenceContext.id,
      blockInitialAnimation: (presenceContext === null || presenceContext === void 0 ? void 0 : presenceContext.initial) === false
    });
  }
  var visualElement = visualElementRef.current;
  Object(_utils_use_isomorphic_effect_js__WEBPACK_IMPORTED_MODULE_6__["useIsomorphicLayoutEffect"])(function () {
    if (!visualElement) return;
    visualElement.setProps(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, config), props), {
      layoutId: layoutId
    }));
    visualElement.isPresent = Object(_components_AnimatePresence_use_presence_js__WEBPACK_IMPORTED_MODULE_3__["isPresent"])(presenceContext);
    visualElement.isPresenceRoot = !parent || parent.presenceId !== (presenceContext === null || presenceContext === void 0 ? void 0 : presenceContext.id);
    /**
     * Fire a render to ensure the latest state is reflected on-screen.
     */
    visualElement.syncRender();
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var _a;
    if (!visualElement) return;
    /**
     * In a future refactor we can replace the features-as-components and
     * have this loop through them all firing "effect" listeners
     */
    (_a = visualElement.animationState) === null || _a === void 0 ? void 0 : _a.animateChanges();
  });
  Object(_utils_use_isomorphic_effect_js__WEBPACK_IMPORTED_MODULE_6__["useIsomorphicLayoutEffect"])(function () {
    return function () {
      return visualElement === null || visualElement === void 0 ? void 0 : visualElement.notifyUnmount();
    };
  }, []);
  return visualElement;
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/utils/use-visual-state.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/utils/use-visual-state.js ***!
  \*****************************************************************************/
/*! exports provided: makeUseVisualState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeUseVisualState", function() { return makeUseVisualState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _animation_utils_is_animation_controls_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../animation/utils/is-animation-controls.js */ "./node_modules/framer-motion/dist/es/animation/utils/is-animation-controls.js");
/* harmony import */ var _context_PresenceContext_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/PresenceContext.js */ "./node_modules/framer-motion/dist/es/context/PresenceContext.js");
/* harmony import */ var _render_utils_variants_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../render/utils/variants.js */ "./node_modules/framer-motion/dist/es/render/utils/variants.js");
/* harmony import */ var _utils_use_constant_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/use-constant.js */ "./node_modules/framer-motion/dist/es/utils/use-constant.js");
/* harmony import */ var _value_utils_resolve_motion_value_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../value/utils/resolve-motion-value.js */ "./node_modules/framer-motion/dist/es/value/utils/resolve-motion-value.js");
/* harmony import */ var _context_MotionContext_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../context/MotionContext/index.js */ "./node_modules/framer-motion/dist/es/context/MotionContext/index.js");








function makeState(_a, props, context, presenceContext) {
  var scrapeMotionValuesFromProps = _a.scrapeMotionValuesFromProps,
    createRenderState = _a.createRenderState,
    onMount = _a.onMount;
  var state = {
    latestValues: makeLatestValues(props, context, presenceContext, scrapeMotionValuesFromProps),
    renderState: createRenderState()
  };
  if (onMount) {
    state.mount = function (instance) {
      return onMount(props, instance, state);
    };
  }
  return state;
}
var makeUseVisualState = function makeUseVisualState(config) {
  return function (props, isStatic) {
    var context = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_MotionContext_index_js__WEBPACK_IMPORTED_MODULE_7__["MotionContext"]);
    var presenceContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_PresenceContext_js__WEBPACK_IMPORTED_MODULE_3__["PresenceContext"]);
    return isStatic ? makeState(config, props, context, presenceContext) : Object(_utils_use_constant_js__WEBPACK_IMPORTED_MODULE_5__["useConstant"])(function () {
      return makeState(config, props, context, presenceContext);
    });
  };
};
function makeLatestValues(props, context, presenceContext, scrapeMotionValues) {
  var values = {};
  var blockInitialAnimation = (presenceContext === null || presenceContext === void 0 ? void 0 : presenceContext.initial) === false;
  var motionValues = scrapeMotionValues(props);
  for (var key in motionValues) {
    values[key] = Object(_value_utils_resolve_motion_value_js__WEBPACK_IMPORTED_MODULE_6__["resolveMotionValue"])(motionValues[key]);
  }
  var initial = props.initial,
    animate = props.animate;
  var isControllingVariants = Object(_render_utils_variants_js__WEBPACK_IMPORTED_MODULE_4__["checkIfControllingVariants"])(props);
  var isVariantNode = Object(_render_utils_variants_js__WEBPACK_IMPORTED_MODULE_4__["checkIfVariantNode"])(props);
  if (context && isVariantNode && !isControllingVariants && props.inherit !== false) {
    initial !== null && initial !== void 0 ? initial : initial = context.initial;
    animate !== null && animate !== void 0 ? animate : animate = context.animate;
  }
  var variantToSet = blockInitialAnimation || initial === false ? animate : initial;
  if (variantToSet && typeof variantToSet !== "boolean" && !Object(_animation_utils_is_animation_controls_js__WEBPACK_IMPORTED_MODULE_2__["isAnimationControls"])(variantToSet)) {
    var list = Array.isArray(variantToSet) ? variantToSet : [variantToSet];
    list.forEach(function (definition) {
      var resolved = Object(_render_utils_variants_js__WEBPACK_IMPORTED_MODULE_4__["resolveVariantFromProps"])(props, definition);
      if (!resolved) return;
      var transitionEnd = resolved.transitionEnd;
      resolved.transition;
      var target = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(resolved, ["transitionEnd", "transition"]);
      for (var key in target) values[key] = target[key];
      for (var key in transitionEnd) values[key] = transitionEnd[key];
    });
  }
  return values;
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/motion/utils/valid-prop.js":
/*!***********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/motion/utils/valid-prop.js ***!
  \***********************************************************************/
/*! exports provided: isValidMotionProp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidMotionProp", function() { return isValidMotionProp; });
/**
 * A list of all valid MotionProps.
 *
 * @internalremarks
 * This doesn't throw if a `MotionProp` name is missing - it should.
 */
var validMotionProps = new Set(["initial", "animate", "exit", "style", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "layout", "layoutId", "_layoutResetTransform", "onLayoutAnimationComplete", "onViewportBoxUpdate", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "drag", "dragControls", "dragListener", "dragConstraints", "dragDirectionLock", "_dragX", "_dragY", "dragElastic", "dragMomentum", "dragPropagation", "dragTransition", "whileDrag", "onPan", "onPanStart", "onPanEnd", "onPanSessionStart", "onTap", "onTapStart", "onTapCancel", "onHoverStart", "onHoverEnd", "whileFocus", "whileTap", "whileHover"]);
/**
 * Check whether a prop name is a valid `MotionProp` key.
 *
 * @param key - Name of the property to check
 * @returns `true` is key is a valid `MotionProp`.
 *
 * @public
 */
function isValidMotionProp(key) {
  return validMotionProps.has(key);
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/create-visual-element.js":
/*!********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/create-visual-element.js ***!
  \********************************************************************************/
/*! exports provided: createDomVisualElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDomVisualElement", function() { return createDomVisualElement; });
/* harmony import */ var _html_visual_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../html/visual-element.js */ "./node_modules/framer-motion/dist/es/render/html/visual-element.js");
/* harmony import */ var _svg_visual_element_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../svg/visual-element.js */ "./node_modules/framer-motion/dist/es/render/svg/visual-element.js");
/* harmony import */ var _utils_is_svg_component_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/is-svg-component.js */ "./node_modules/framer-motion/dist/es/render/dom/utils/is-svg-component.js");



var createDomVisualElement = function createDomVisualElement(Component, options) {
  return Object(_utils_is_svg_component_js__WEBPACK_IMPORTED_MODULE_2__["isSVGComponent"])(Component) ? Object(_svg_visual_element_js__WEBPACK_IMPORTED_MODULE_1__["svgVisualElement"])(options, {
    enableHardwareAcceleration: false
  }) : Object(_html_visual_element_js__WEBPACK_IMPORTED_MODULE_0__["htmlVisualElement"])(options, {
    enableHardwareAcceleration: true
  });
};


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/features-animation.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/features-animation.js ***!
  \*****************************************************************************/
/*! exports provided: domAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "domAnimation", function() { return domAnimation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _motion_features_animations_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../motion/features/animations.js */ "./node_modules/framer-motion/dist/es/motion/features/animations.js");
/* harmony import */ var _motion_features_gestures_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../motion/features/gestures.js */ "./node_modules/framer-motion/dist/es/motion/features/gestures.js");
/* harmony import */ var _create_visual_element_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-visual-element.js */ "./node_modules/framer-motion/dist/es/render/dom/create-visual-element.js");





/**
 * @public
 */
var domAnimation = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({
  renderer: _create_visual_element_js__WEBPACK_IMPORTED_MODULE_3__["createDomVisualElement"]
}, _motion_features_animations_js__WEBPACK_IMPORTED_MODULE_1__["animations"]), _motion_features_gestures_js__WEBPACK_IMPORTED_MODULE_2__["gestureAnimations"]);


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/features-max.js":
/*!***********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/features-max.js ***!
  \***********************************************************************/
/*! exports provided: domMax */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "domMax", function() { return domMax; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _motion_features_drag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../motion/features/drag.js */ "./node_modules/framer-motion/dist/es/motion/features/drag.js");
/* harmony import */ var _motion_features_layout_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../motion/features/layout/index.js */ "./node_modules/framer-motion/dist/es/motion/features/layout/index.js");
/* harmony import */ var _features_animation_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./features-animation.js */ "./node_modules/framer-motion/dist/es/render/dom/features-animation.js");





/**
 * @public
 */
var domMax = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _features_animation_js__WEBPACK_IMPORTED_MODULE_3__["domAnimation"]), _motion_features_drag_js__WEBPACK_IMPORTED_MODULE_1__["drag"]), _motion_features_layout_index_js__WEBPACK_IMPORTED_MODULE_2__["layoutAnimations"]);


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/motion-minimal.js":
/*!*************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/motion-minimal.js ***!
  \*************************************************************************/
/*! exports provided: m */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return m; });
/* harmony import */ var _motion_proxy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./motion-proxy.js */ "./node_modules/framer-motion/dist/es/render/dom/motion-proxy.js");
/* harmony import */ var _utils_create_config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/create-config.js */ "./node_modules/framer-motion/dist/es/render/dom/utils/create-config.js");



/**
 * @public
 */
var m = Object(_motion_proxy_js__WEBPACK_IMPORTED_MODULE_0__["createMotionProxy"])(_utils_create_config_js__WEBPACK_IMPORTED_MODULE_1__["createDomMotionConfig"]);


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/motion-proxy.js":
/*!***********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/motion-proxy.js ***!
  \***********************************************************************/
/*! exports provided: createMotionProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMotionProxy", function() { return createMotionProxy; });
/* harmony import */ var _motion_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../motion/index.js */ "./node_modules/framer-motion/dist/es/motion/index.js");


/**
 * Convert any React component into a `motion` component. The provided component
 * **must** use `React.forwardRef` to the underlying DOM component you want to animate.
 *
 * ```jsx
 * const Component = React.forwardRef((props, ref) => {
 *   return <div ref={ref} />
 * })
 *
 * const MotionComponent = motion(Component)
 * ```
 *
 * @public
 */
function createMotionProxy(createConfig) {
  function custom(Component, customMotionComponentConfig) {
    if (customMotionComponentConfig === void 0) {
      customMotionComponentConfig = {};
    }
    return Object(_motion_index_js__WEBPACK_IMPORTED_MODULE_0__["createMotionComponent"])(createConfig(Component, customMotionComponentConfig));
  }
  /**
   * A cache of generated `motion` components, e.g `motion.div`, `motion.input` etc.
   * Rather than generating them anew every render.
   */
  var componentCache = new Map();
  return new Proxy(custom, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: function get(_target, key) {
      /**
       * If this element doesn't exist in the component cache, create it and cache.
       */
      if (!componentCache.has(key)) {
        componentCache.set(key, custom(key));
      }
      return componentCache.get(key);
    }
  });
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/motion.js":
/*!*****************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/motion.js ***!
  \*****************************************************************/
/*! exports provided: createDomMotionComponent, motion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDomMotionComponent", function() { return createDomMotionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "motion", function() { return motion; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _motion_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../motion/index.js */ "./node_modules/framer-motion/dist/es/motion/index.js");
/* harmony import */ var _motion_proxy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./motion-proxy.js */ "./node_modules/framer-motion/dist/es/render/dom/motion-proxy.js");
/* harmony import */ var _utils_create_config_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/create-config.js */ "./node_modules/framer-motion/dist/es/render/dom/utils/create-config.js");
/* harmony import */ var _motion_features_gestures_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../motion/features/gestures.js */ "./node_modules/framer-motion/dist/es/motion/features/gestures.js");
/* harmony import */ var _motion_features_animations_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../motion/features/animations.js */ "./node_modules/framer-motion/dist/es/motion/features/animations.js");
/* harmony import */ var _motion_features_drag_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../motion/features/drag.js */ "./node_modules/framer-motion/dist/es/motion/features/drag.js");
/* harmony import */ var _motion_features_layout_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../motion/features/layout/index.js */ "./node_modules/framer-motion/dist/es/motion/features/layout/index.js");
/* harmony import */ var _create_visual_element_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./create-visual-element.js */ "./node_modules/framer-motion/dist/es/render/dom/create-visual-element.js");









var featureBundle = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _motion_features_animations_js__WEBPACK_IMPORTED_MODULE_5__["animations"]), _motion_features_gestures_js__WEBPACK_IMPORTED_MODULE_4__["gestureAnimations"]), _motion_features_drag_js__WEBPACK_IMPORTED_MODULE_6__["drag"]), _motion_features_layout_index_js__WEBPACK_IMPORTED_MODULE_7__["layoutAnimations"]);
/**
 * HTML & SVG components, optimised for use with gestures and animation. These can be used as
 * drop-in replacements for any HTML & SVG component, all CSS & SVG properties are supported.
 *
 * @public
 */
var motion = /*@__PURE__*/Object(_motion_proxy_js__WEBPACK_IMPORTED_MODULE_2__["createMotionProxy"])(function (Component, config) {
  return Object(_utils_create_config_js__WEBPACK_IMPORTED_MODULE_3__["createDomMotionConfig"])(Component, config, featureBundle, _create_visual_element_js__WEBPACK_IMPORTED_MODULE_8__["createDomVisualElement"]);
});
/**
 * Create a DOM `motion` component with the provided string. This is primarily intended
 * as a full alternative to `motion` for consumers who have to support environments that don't
 * support `Proxy`.
 *
 * ```javascript
 * import { createDomMotionComponent } from "framer-motion"
 *
 * const motion = {
 *   div: createDomMotionComponent('div')
 * }
 * ```
 *
 * @public
 */
function createDomMotionComponent(key) {
  return Object(_motion_index_js__WEBPACK_IMPORTED_MODULE_1__["createMotionComponent"])(Object(_utils_create_config_js__WEBPACK_IMPORTED_MODULE_3__["createDomMotionConfig"])(key, {
    forwardMotionProps: false
  }, featureBundle, _create_visual_element_js__WEBPACK_IMPORTED_MODULE_8__["createDomVisualElement"]));
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/projection/convert-to-relative.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/projection/convert-to-relative.js ***!
  \*****************************************************************************************/
/*! exports provided: convertToRelativeProjection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertToRelativeProjection", function() { return convertToRelativeProjection; });
/* harmony import */ var _motion_features_layout_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../motion/features/layout/utils.js */ "./node_modules/framer-motion/dist/es/motion/features/layout/utils.js");
/* harmony import */ var _utils_each_axis_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/each-axis.js */ "./node_modules/framer-motion/dist/es/utils/each-axis.js");
/* harmony import */ var _utils_geometry_delta_apply_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/geometry/delta-apply.js */ "./node_modules/framer-motion/dist/es/utils/geometry/delta-apply.js");




/**
 * Returns a boolean stating whether or not we converted the projection
 * to relative projection.
 */
function convertToRelativeProjection(visualElement, isLayoutDrag) {
  if (isLayoutDrag === void 0) {
    isLayoutDrag = true;
  }
  var projectionParent = visualElement.getProjectionParent();
  if (!projectionParent) return false;
  var offset;
  if (isLayoutDrag) {
    offset = Object(_motion_features_layout_utils_js__WEBPACK_IMPORTED_MODULE_0__["calcRelativeOffset"])(projectionParent.projection.target, visualElement.projection.target);
    Object(_utils_geometry_delta_apply_js__WEBPACK_IMPORTED_MODULE_2__["removeBoxTransforms"])(offset, projectionParent.getLatestValues());
  } else {
    offset = Object(_motion_features_layout_utils_js__WEBPACK_IMPORTED_MODULE_0__["calcRelativeOffset"])(projectionParent.getLayoutState().layout, visualElement.getLayoutState().layout);
  }
  Object(_utils_each_axis_js__WEBPACK_IMPORTED_MODULE_1__["eachAxis"])(function (axis) {
    return visualElement.setProjectionTargetAxis(axis, offset[axis].min, offset[axis].max, true);
  });
  return true;
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/projection/default-scale-correctors.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/projection/default-scale-correctors.js ***!
  \**********************************************************************************************/
/*! exports provided: correctBorderRadius, correctBoxShadow, defaultScaleCorrectors, pixelsToPercent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "correctBorderRadius", function() { return correctBorderRadius; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "correctBoxShadow", function() { return correctBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultScaleCorrectors", function() { return defaultScaleCorrectors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pixelsToPercent", function() { return pixelsToPercent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/index.js");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/index.js");
/* harmony import */ var _utils_css_variables_conversion_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/css-variables-conversion.js */ "./node_modules/framer-motion/dist/es/render/dom/utils/css-variables-conversion.js");




function pixelsToPercent(pixels, axis) {
  return pixels / (axis.max - axis.min) * 100;
}
/**
 * We always correct borderRadius as a percentage rather than pixels to reduce paints.
 * For example, if you are projecting a box that is 100px wide with a 10px borderRadius
 * into a box that is 200px wide with a 20px borderRadius, that is actually a 10%
 * borderRadius in both states. If we animate between the two in pixels that will trigger
 * a paint each time. If we animate between the two in percentage we'll avoid a paint.
 */
function correctBorderRadius(latest, _layoutState, _a) {
  var target = _a.target;
  /**
   * If latest is a string, if it's a percentage we can return immediately as it's
   * going to be stretched appropriately. Otherwise, if it's a pixel, convert it to a number.
   */
  if (typeof latest === "string") {
    if (style_value_types__WEBPACK_IMPORTED_MODULE_1__["px"].test(latest)) {
      latest = parseFloat(latest);
    } else {
      return latest;
    }
  }
  /**
   * If latest is a number, it's a pixel value. We use the current viewportBox to calculate that
   * pixel value as a percentage of each axis
   */
  var x = pixelsToPercent(latest, target.x);
  var y = pixelsToPercent(latest, target.y);
  return x + "% " + y + "%";
}
var varToken = "_$css";
function correctBoxShadow(latest, _a) {
  var delta = _a.delta,
    treeScale = _a.treeScale;
  var original = latest;
  /**
   * We need to first strip and store CSS variables from the string.
   */
  var containsCSSVariables = latest.includes("var(");
  var cssVariables = [];
  if (containsCSSVariables) {
    latest = latest.replace(_utils_css_variables_conversion_js__WEBPACK_IMPORTED_MODULE_3__["cssVariableRegex"], function (match) {
      cssVariables.push(match);
      return varToken;
    });
  }
  var shadow = style_value_types__WEBPACK_IMPORTED_MODULE_1__["complex"].parse(latest);
  // TODO: Doesn't support multiple shadows
  if (shadow.length > 5) return original;
  var template = style_value_types__WEBPACK_IMPORTED_MODULE_1__["complex"].createTransformer(latest);
  var offset = typeof shadow[0] !== "number" ? 1 : 0;
  // Calculate the overall context scale
  var xScale = delta.x.scale * treeScale.x;
  var yScale = delta.y.scale * treeScale.y;
  shadow[0 + offset] /= xScale;
  shadow[1 + offset] /= yScale;
  /**
   * Ideally we'd correct x and y scales individually, but because blur and
   * spread apply to both we have to take a scale average and apply that instead.
   * We could potentially improve the outcome of this by incorporating the ratio between
   * the two scales.
   */
  var averageScale = Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["mix"])(xScale, yScale, 0.5);
  // Blur
  if (typeof shadow[2 + offset] === "number") shadow[2 + offset] /= averageScale;
  // Spread
  if (typeof shadow[3 + offset] === "number") shadow[3 + offset] /= averageScale;
  var output = template(shadow);
  if (containsCSSVariables) {
    var i_1 = 0;
    output = output.replace(varToken, function () {
      var cssVariable = cssVariables[i_1];
      i_1++;
      return cssVariable;
    });
  }
  return output;
}
var borderCorrectionDefinition = {
  process: correctBorderRadius
};
var defaultScaleCorrectors = {
  borderRadius: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, borderCorrectionDefinition), {
    applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
  }),
  borderTopLeftRadius: borderCorrectionDefinition,
  borderTopRightRadius: borderCorrectionDefinition,
  borderBottomLeftRadius: borderCorrectionDefinition,
  borderBottomRightRadius: borderCorrectionDefinition,
  boxShadow: {
    process: correctBoxShadow
  }
};


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/projection/measure.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/projection/measure.js ***!
  \*****************************************************************************/
/*! exports provided: getBoundingBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBoundingBox", function() { return getBoundingBox; });
/* harmony import */ var _utils_geometry_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/geometry/index.js */ "./node_modules/framer-motion/dist/es/utils/geometry/index.js");


/**
 * Measure and return the element bounding box.
 *
 * We convert the box into an AxisBox2D to make it easier to work with each axis
 * individually and programmatically.
 *
 * This function optionally accepts a transformPagePoint function which allows us to compensate
 * for, for instance, measuring the element within a scaled plane like a Framer devivce preview component.
 */
function getBoundingBox(element, transformPagePoint) {
  var box = element.getBoundingClientRect();
  return Object(_utils_geometry_index_js__WEBPACK_IMPORTED_MODULE_0__["convertBoundingBoxToAxisBox"])(Object(_utils_geometry_index_js__WEBPACK_IMPORTED_MODULE_0__["transformBoundingBox"])(box, transformPagePoint));
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/projection/relative-set.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/projection/relative-set.js ***!
  \**********************************************************************************/
/*! exports provided: setCurrentViewportBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCurrentViewportBox", function() { return setCurrentViewportBox; });
/* harmony import */ var _motion_features_layout_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../motion/features/layout/utils.js */ "./node_modules/framer-motion/dist/es/motion/features/layout/utils.js");
/* harmony import */ var _utils_each_axis_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/each-axis.js */ "./node_modules/framer-motion/dist/es/utils/each-axis.js");


function setCurrentViewportBox(visualElement) {
  var projectionParent = visualElement.getProjectionParent();
  if (!projectionParent) {
    visualElement.rebaseProjectionTarget();
    return;
  }
  var relativeOffset = Object(_motion_features_layout_utils_js__WEBPACK_IMPORTED_MODULE_0__["calcRelativeOffset"])(projectionParent.getLayoutState().layout, visualElement.getLayoutState().layout);
  Object(_utils_each_axis_js__WEBPACK_IMPORTED_MODULE_1__["eachAxis"])(function (axis) {
    visualElement.setProjectionTargetAxis(axis, relativeOffset[axis].min, relativeOffset[axis].max, true);
  });
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/projection/scale-correction.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/projection/scale-correction.js ***!
  \**************************************************************************************/
/*! exports provided: addScaleCorrection, valueScaleCorrection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addScaleCorrection", function() { return addScaleCorrection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "valueScaleCorrection", function() { return valueScaleCorrection; });
var valueScaleCorrection = {};
/**
 * @internal
 */
function addScaleCorrection(correctors) {
  for (var key in correctors) {
    valueScaleCorrection[key] = correctors[key];
  }
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/projection/utils.js":
/*!***************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/projection/utils.js ***!
  \***************************************************************************/
/*! exports provided: collectProjectingAncestors, collectProjectingChildren, snapshotViewportBox, updateLayoutMeasurement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collectProjectingAncestors", function() { return collectProjectingAncestors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collectProjectingChildren", function() { return collectProjectingChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "snapshotViewportBox", function() { return snapshotViewportBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateLayoutMeasurement", function() { return updateLayoutMeasurement; });
/* harmony import */ var framesync__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! framesync */ "./node_modules/framesync/dist/es/index.js");
/* harmony import */ var _utils_geometry_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/geometry/index.js */ "./node_modules/framer-motion/dist/es/utils/geometry/index.js");
/* harmony import */ var _utils_compare_by_depth_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/compare-by-depth.js */ "./node_modules/framer-motion/dist/es/render/utils/compare-by-depth.js");



function isProjecting(visualElement) {
  var isEnabled = visualElement.projection.isEnabled;
  return isEnabled || visualElement.shouldResetTransform();
}
function collectProjectingAncestors(visualElement, ancestors) {
  if (ancestors === void 0) {
    ancestors = [];
  }
  var parent = visualElement.parent;
  if (parent) collectProjectingAncestors(parent, ancestors);
  if (isProjecting(visualElement)) ancestors.push(visualElement);
  return ancestors;
}
function collectProjectingChildren(visualElement) {
  var children = [];
  var addChild = function addChild(child) {
    if (isProjecting(child)) children.push(child);
    child.children.forEach(addChild);
  };
  visualElement.children.forEach(addChild);
  return children.sort(_utils_compare_by_depth_js__WEBPACK_IMPORTED_MODULE_2__["compareByDepth"]);
}
/**
 * Update the layoutState by measuring the DOM layout. This
 * should be called after resetting any layout-affecting transforms.
 */
function updateLayoutMeasurement(visualElement) {
  if (visualElement.shouldResetTransform()) return;
  var layoutState = visualElement.getLayoutState();
  visualElement.notifyBeforeLayoutMeasure(layoutState.layout);
  layoutState.isHydrated = true;
  layoutState.layout = visualElement.measureViewportBox();
  layoutState.layoutCorrected = Object(_utils_geometry_index_js__WEBPACK_IMPORTED_MODULE_1__["copyAxisBox"])(layoutState.layout);
  visualElement.notifyLayoutMeasure(layoutState.layout, visualElement.prevViewportBox || layoutState.layout);
  framesync__WEBPACK_IMPORTED_MODULE_0__["default"].update(function () {
    return visualElement.rebaseProjectionTarget();
  });
}
/**
 * Record the viewport box as it was before an expected mutation/re-render
 */
function snapshotViewportBox(visualElement) {
  if (visualElement.shouldResetTransform()) return;
  visualElement.prevViewportBox = visualElement.measureViewportBox(false);
  /**
   * Update targetBox to match the prevViewportBox. This is just to ensure
   * that targetBox is affected by scroll in the same way as the measured box
   */
  visualElement.rebaseProjectionTarget(false, visualElement.prevViewportBox);
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/use-render.js":
/*!*********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/use-render.js ***!
  \*********************************************************************/
/*! exports provided: createUseRender */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUseRender", function() { return createUseRender; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _html_use_props_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../html/use-props.js */ "./node_modules/framer-motion/dist/es/render/html/use-props.js");
/* harmony import */ var _utils_filter_props_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/filter-props.js */ "./node_modules/framer-motion/dist/es/render/dom/utils/filter-props.js");
/* harmony import */ var _utils_is_svg_component_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/is-svg-component.js */ "./node_modules/framer-motion/dist/es/render/dom/utils/is-svg-component.js");
/* harmony import */ var _svg_use_props_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../svg/use-props.js */ "./node_modules/framer-motion/dist/es/render/svg/use-props.js");






function createUseRender(forwardMotionProps) {
  if (forwardMotionProps === void 0) {
    forwardMotionProps = false;
  }
  var useRender = function useRender(Component, props, ref, _a, isStatic) {
    var latestValues = _a.latestValues;
    var useVisualProps = Object(_utils_is_svg_component_js__WEBPACK_IMPORTED_MODULE_4__["isSVGComponent"])(Component) ? _svg_use_props_js__WEBPACK_IMPORTED_MODULE_5__["useSVGProps"] : _html_use_props_js__WEBPACK_IMPORTED_MODULE_2__["useHTMLProps"];
    var visualProps = useVisualProps(props, latestValues, isStatic);
    var filteredProps = Object(_utils_filter_props_js__WEBPACK_IMPORTED_MODULE_3__["filterProps"])(props, typeof Component === "string", forwardMotionProps);
    var elementProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, filteredProps), visualProps), {
      ref: ref
    });
    return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Component, elementProps);
  };
  return useRender;
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/utils/batch-layout.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/utils/batch-layout.js ***!
  \*****************************************************************************/
/*! exports provided: batchLayout, flushLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "batchLayout", function() { return batchLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flushLayout", function() { return flushLayout; });
var unresolvedJobs = new Set();
function pushJob(stack, job, pointer) {
  if (!stack[pointer]) stack[pointer] = [];
  stack[pointer].push(job);
}
function batchLayout(callback) {
  unresolvedJobs.add(callback);
  return function () {
    return unresolvedJobs["delete"](callback);
  };
}
function flushLayout() {
  if (!unresolvedJobs.size) return;
  var pointer = 0;
  var reads = [[]];
  var writes = [];
  var setRead = function setRead(job) {
    return pushJob(reads, job, pointer);
  };
  var setWrite = function setWrite(job) {
    pushJob(writes, job, pointer);
    pointer++;
  };
  /**
   * Resolve jobs into their array stacks
   */
  unresolvedJobs.forEach(function (callback) {
    callback(setRead, setWrite);
    pointer = 0;
  });
  unresolvedJobs.clear();
  /**
   * Execute jobs
   */
  var numStacks = writes.length;
  for (var i = 0; i <= numStacks; i++) {
    reads[i] && reads[i].forEach(executeJob);
    writes[i] && writes[i].forEach(executeJob);
  }
}
var executeJob = function executeJob(job) {
  return job();
};


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/utils/camel-to-dash.js":
/*!******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/utils/camel-to-dash.js ***!
  \******************************************************************************/
/*! exports provided: camelToDash */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "camelToDash", function() { return camelToDash; });
var CAMEL_CASE_PATTERN = /([a-z])([A-Z])/g;
var REPLACE_TEMPLATE = "$1-$2";
/**
 * Convert camelCase to dash-case properties.
 */
var camelToDash = function camelToDash(str) {
  return str.replace(CAMEL_CASE_PATTERN, REPLACE_TEMPLATE).toLowerCase();
};


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/utils/create-config.js":
/*!******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/utils/create-config.js ***!
  \******************************************************************************/
/*! exports provided: createDomMotionConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDomMotionConfig", function() { return createDomMotionConfig; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _is_svg_component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is-svg-component.js */ "./node_modules/framer-motion/dist/es/render/dom/utils/is-svg-component.js");
/* harmony import */ var _use_render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../use-render.js */ "./node_modules/framer-motion/dist/es/render/dom/use-render.js");
/* harmony import */ var _svg_config_motion_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../svg/config-motion.js */ "./node_modules/framer-motion/dist/es/render/svg/config-motion.js");
/* harmony import */ var _html_config_motion_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../html/config-motion.js */ "./node_modules/framer-motion/dist/es/render/html/config-motion.js");





function createDomMotionConfig(Component, _a, preloadedFeatures, createVisualElement) {
  var _b = _a.forwardMotionProps,
    forwardMotionProps = _b === void 0 ? false : _b;
  var baseConfig = Object(_is_svg_component_js__WEBPACK_IMPORTED_MODULE_1__["isSVGComponent"])(Component) ? _svg_config_motion_js__WEBPACK_IMPORTED_MODULE_3__["svgMotionConfig"] : _html_config_motion_js__WEBPACK_IMPORTED_MODULE_4__["htmlMotionConfig"];
  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, baseConfig), {
    preloadedFeatures: preloadedFeatures,
    useRender: Object(_use_render_js__WEBPACK_IMPORTED_MODULE_2__["createUseRender"])(forwardMotionProps),
    createVisualElement: createVisualElement,
    Component: Component
  });
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/utils/css-variables-conversion.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/utils/css-variables-conversion.js ***!
  \*****************************************************************************************/
/*! exports provided: cssVariableRegex, parseCSSVariable, resolveCSSVariables */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssVariableRegex", function() { return cssVariableRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseCSSVariable", function() { return parseCSSVariable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveCSSVariables", function() { return resolveCSSVariables; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");


function isCSSVariable(value) {
  return typeof value === "string" && value.startsWith("var(--");
}
/**
 * Parse Framer's special CSS variable format into a CSS token and a fallback.
 *
 * ```
 * `var(--foo, #fff)` => [`--foo`, '#fff']
 * ```
 *
 * @param current
 */
var cssVariableRegex = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function parseCSSVariable(current) {
  var match = cssVariableRegex.exec(current);
  if (!match) return [,];
  var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(match, 3),
    token = _a[1],
    fallback = _a[2];
  return [token, fallback];
}
var maxDepth = 4;
function getVariableValue(current, element, depth) {
  if (depth === void 0) {
    depth = 1;
  }
  Object(hey_listen__WEBPACK_IMPORTED_MODULE_1__["invariant"])(depth <= maxDepth, "Max CSS variable fallback depth detected in property \"" + current + "\". This may indicate a circular fallback dependency.");
  var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(parseCSSVariable(current), 2),
    token = _a[0],
    fallback = _a[1];
  // No CSS variable detected
  if (!token) return;
  // Attempt to read this CSS variable off the element
  var resolved = window.getComputedStyle(element).getPropertyValue(token);
  if (resolved) {
    return resolved.trim();
  } else if (isCSSVariable(fallback)) {
    // The fallback might itself be a CSS variable, in which case we attempt to resolve it too.
    return getVariableValue(fallback, element, depth + 1);
  } else {
    return fallback;
  }
}
/**
 * Resolve CSS variables from
 *
 * @internal
 */
function resolveCSSVariables(visualElement, _a, transitionEnd) {
  var _b;
  var target = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, []);
  var element = visualElement.getInstance();
  if (!(element instanceof HTMLElement)) return {
    target: target,
    transitionEnd: transitionEnd
  };
  // If `transitionEnd` isn't `undefined`, clone it. We could clone `target` and `transitionEnd`
  // only if they change but I think this reads clearer and this isn't a performance-critical path.
  if (transitionEnd) {
    transitionEnd = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, transitionEnd);
  }
  // Go through existing `MotionValue`s and ensure any existing CSS variables are resolved
  visualElement.forEachValue(function (value) {
    var current = value.get();
    if (!isCSSVariable(current)) return;
    var resolved = getVariableValue(current, element);
    if (resolved) value.set(resolved);
  });
  // Cycle through every target property and resolve CSS variables. Currently
  // we only read single-var properties like `var(--foo)`, not `calc(var(--foo) + 20px)`
  for (var key in target) {
    var current = target[key];
    if (!isCSSVariable(current)) continue;
    var resolved = getVariableValue(current, element);
    if (!resolved) continue;
    // Clone target if it hasn't already been
    target[key] = resolved;
    // If the user hasn't already set this key on `transitionEnd`, set it to the unresolved
    // CSS variable. This will ensure that after the animation the component will reflect
    // changes in the value of the CSS variable.
    if (transitionEnd) (_b = transitionEnd[key]) !== null && _b !== void 0 ? _b : transitionEnd[key] = current;
  }
  return {
    target: target,
    transitionEnd: transitionEnd
  };
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/utils/filter-props.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/utils/filter-props.js ***!
  \*****************************************************************************/
/*! exports provided: filterProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterProps", function() { return filterProps; });
/* harmony import */ var _motion_utils_valid_prop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../motion/utils/valid-prop.js */ "./node_modules/framer-motion/dist/es/motion/utils/valid-prop.js");

var shouldForward = function shouldForward(key) {
  return !Object(_motion_utils_valid_prop_js__WEBPACK_IMPORTED_MODULE_0__["isValidMotionProp"])(key);
};
/**
 * Emotion and Styled Components both allow users to pass through arbitrary props to their components
 * to dynamically generate CSS. They both use the `@emotion/is-prop-valid` package to determine which
 * of these should be passed to the underlying DOM node.
 *
 * However, when styling a Motion component `styled(motion.div)`, both packages pass through *all* props
 * as it's seen as an arbitrary component rather than a DOM node. Motion only allows arbitrary props
 * passed through the `custom` prop so it doesn't *need* the payload or computational overhead of
 * `@emotion/is-prop-valid`, however to fix this problem we need to use it.
 *
 * By making it an optionalDependency we can offer this functionality only in the situations where it's
 * actually required.
 */
try {
  var emotionIsPropValid_1 = __webpack_require__(/*! @emotion/is-prop-valid */ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js")["default"];
  shouldForward = function shouldForward(key) {
    // Handle events explicitly as Emotion validates them all as true
    if (key.startsWith("on")) {
      return !Object(_motion_utils_valid_prop_js__WEBPACK_IMPORTED_MODULE_0__["isValidMotionProp"])(key);
    } else {
      return emotionIsPropValid_1(key);
    }
  };
} catch (_a) {
  // We don't need to actually do anything here - the fallback is the existing `isPropValid`.
}
function filterProps(props, isDom, forwardMotionProps) {
  var filteredProps = {};
  for (var key in props) {
    if (shouldForward(key) || forwardMotionProps === true && Object(_motion_utils_valid_prop_js__WEBPACK_IMPORTED_MODULE_0__["isValidMotionProp"])(key) || !isDom && !Object(_motion_utils_valid_prop_js__WEBPACK_IMPORTED_MODULE_0__["isValidMotionProp"])(key)) {
      filteredProps[key] = props[key];
    }
  }
  return filteredProps;
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/utils/is-css-variable.js":
/*!********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/utils/is-css-variable.js ***!
  \********************************************************************************/
/*! exports provided: isCSSVariable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCSSVariable", function() { return isCSSVariable; });
/**
 * Returns true if the provided key is a CSS variable
 */
function isCSSVariable(key) {
  return key.startsWith("--");
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/utils/is-svg-component.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/utils/is-svg-component.js ***!
  \*********************************************************************************/
/*! exports provided: isSVGComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSVGComponent", function() { return isSVGComponent; });
/* harmony import */ var _svg_lowercase_elements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../svg/lowercase-elements.js */ "./node_modules/framer-motion/dist/es/render/svg/lowercase-elements.js");

function isSVGComponent(Component) {
  if (
  /**
   * If it's not a string, it's a custom React component. Currently we only support
   * HTML custom React components.
   */
  typeof Component !== "string" ||
  /**
   * If it contains a dash, the element is a custom HTML webcomponent.
   */
  Component.includes("-")) {
    return false;
  } else if (
  /**
   * If it's in our list of lowercase SVG tags, it's an SVG component
   */
  _svg_lowercase_elements_js__WEBPACK_IMPORTED_MODULE_0__["lowercaseSVGElements"].indexOf(Component) > -1 ||
  /**
   * If it contains a capital letter, it's an SVG component
   */
  /[A-Z]/.test(Component)) {
    return true;
  }
  return false;
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/utils/parse-dom-variant.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/utils/parse-dom-variant.js ***!
  \**********************************************************************************/
/*! exports provided: parseDomVariant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseDomVariant", function() { return parseDomVariant; });
/* harmony import */ var _css_variables_conversion_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css-variables-conversion.js */ "./node_modules/framer-motion/dist/es/render/dom/utils/css-variables-conversion.js");
/* harmony import */ var _unit_conversion_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unit-conversion.js */ "./node_modules/framer-motion/dist/es/render/dom/utils/unit-conversion.js");



/**
 * Parse a DOM variant to make it animatable. This involves resolving CSS variables
 * and ensuring animations like "20%" => "calc(50vw)" are performed in pixels.
 */
var parseDomVariant = function parseDomVariant(visualElement, target, origin, transitionEnd) {
  var resolved = Object(_css_variables_conversion_js__WEBPACK_IMPORTED_MODULE_0__["resolveCSSVariables"])(visualElement, target, transitionEnd);
  target = resolved.target;
  transitionEnd = resolved.transitionEnd;
  return Object(_unit_conversion_js__WEBPACK_IMPORTED_MODULE_1__["unitConversion"])(visualElement, target, origin, transitionEnd);
};


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/utils/unit-conversion.js":
/*!********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/utils/unit-conversion.js ***!
  \********************************************************************************/
/*! exports provided: BoundingBoxDimension, unitConversion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoundingBoxDimension", function() { return BoundingBoxDimension; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unitConversion", function() { return unitConversion; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/index.js");
/* harmony import */ var _animation_utils_is_keyframes_target_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../animation/utils/is-keyframes-target.js */ "./node_modules/framer-motion/dist/es/animation/utils/is-keyframes-target.js");
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");
/* harmony import */ var _html_utils_transform_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../html/utils/transform.js */ "./node_modules/framer-motion/dist/es/render/html/utils/transform.js");
/* harmony import */ var _value_types_dimensions_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../value-types/dimensions.js */ "./node_modules/framer-motion/dist/es/render/dom/value-types/dimensions.js");






var positionalKeys = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y"]);
var isPositionalKey = function isPositionalKey(key) {
  return positionalKeys.has(key);
};
var hasPositionalKey = function hasPositionalKey(target) {
  return Object.keys(target).some(isPositionalKey);
};
var setAndResetVelocity = function setAndResetVelocity(value, to) {
  // Looks odd but setting it twice doesn't render, it'll just
  // set both prev and current to the latest value
  value.set(to, false);
  value.set(to);
};
var isNumOrPxType = function isNumOrPxType(v) {
  return v === style_value_types__WEBPACK_IMPORTED_MODULE_1__["number"] || v === style_value_types__WEBPACK_IMPORTED_MODULE_1__["px"];
};
var BoundingBoxDimension;
(function (BoundingBoxDimension) {
  BoundingBoxDimension["width"] = "width";
  BoundingBoxDimension["height"] = "height";
  BoundingBoxDimension["left"] = "left";
  BoundingBoxDimension["right"] = "right";
  BoundingBoxDimension["top"] = "top";
  BoundingBoxDimension["bottom"] = "bottom";
})(BoundingBoxDimension || (BoundingBoxDimension = {}));
var getPosFromMatrix = function getPosFromMatrix(matrix, pos) {
  return parseFloat(matrix.split(", ")[pos]);
};
var getTranslateFromMatrix = function getTranslateFromMatrix(pos2, pos3) {
  return function (_bbox, _a) {
    var transform = _a.transform;
    if (transform === "none" || !transform) return 0;
    var matrix3d = transform.match(/^matrix3d\((.+)\)$/);
    if (matrix3d) {
      return getPosFromMatrix(matrix3d[1], pos3);
    } else {
      var matrix = transform.match(/^matrix\((.+)\)$/);
      if (matrix) {
        return getPosFromMatrix(matrix[1], pos2);
      } else {
        return 0;
      }
    }
  };
};
var transformKeys = new Set(["x", "y", "z"]);
var nonTranslationalTransformKeys = _html_utils_transform_js__WEBPACK_IMPORTED_MODULE_4__["transformProps"].filter(function (key) {
  return !transformKeys.has(key);
});
function removeNonTranslationalTransform(visualElement) {
  var removedTransforms = [];
  nonTranslationalTransformKeys.forEach(function (key) {
    var value = visualElement.getValue(key);
    if (value !== undefined) {
      removedTransforms.push([key, value.get()]);
      value.set(key.startsWith("scale") ? 1 : 0);
    }
  });
  // Apply changes to element before measurement
  if (removedTransforms.length) visualElement.syncRender();
  return removedTransforms;
}
var positionalValues = {
  // Dimensions
  width: function width(_a) {
    var x = _a.x;
    return x.max - x.min;
  },
  height: function height(_a) {
    var y = _a.y;
    return y.max - y.min;
  },
  top: function top(_bbox, _a) {
    var top = _a.top;
    return parseFloat(top);
  },
  left: function left(_bbox, _a) {
    var left = _a.left;
    return parseFloat(left);
  },
  bottom: function bottom(_a, _b) {
    var y = _a.y;
    var top = _b.top;
    return parseFloat(top) + (y.max - y.min);
  },
  right: function right(_a, _b) {
    var x = _a.x;
    var left = _b.left;
    return parseFloat(left) + (x.max - x.min);
  },
  // Transform
  x: getTranslateFromMatrix(4, 13),
  y: getTranslateFromMatrix(5, 14)
};
var convertChangedValueTypes = function convertChangedValueTypes(target, visualElement, changedKeys) {
  var originBbox = visualElement.measureViewportBox();
  var element = visualElement.getInstance();
  var elementComputedStyle = getComputedStyle(element);
  var display = elementComputedStyle.display,
    top = elementComputedStyle.top,
    left = elementComputedStyle.left,
    bottom = elementComputedStyle.bottom,
    right = elementComputedStyle.right,
    transform = elementComputedStyle.transform;
  var originComputedStyle = {
    top: top,
    left: left,
    bottom: bottom,
    right: right,
    transform: transform
  };
  // If the element is currently set to display: "none", make it visible before
  // measuring the target bounding box
  if (display === "none") {
    visualElement.setStaticValue("display", target.display || "block");
  }
  // Apply the latest values (as set in checkAndConvertChangedValueTypes)
  visualElement.syncRender();
  var targetBbox = visualElement.measureViewportBox();
  changedKeys.forEach(function (key) {
    // Restore styles to their **calculated computed style**, not their actual
    // originally set style. This allows us to animate between equivalent pixel units.
    var value = visualElement.getValue(key);
    setAndResetVelocity(value, positionalValues[key](originBbox, originComputedStyle));
    target[key] = positionalValues[key](targetBbox, elementComputedStyle);
  });
  return target;
};
var checkAndConvertChangedValueTypes = function checkAndConvertChangedValueTypes(visualElement, target, origin, transitionEnd) {
  if (origin === void 0) {
    origin = {};
  }
  if (transitionEnd === void 0) {
    transitionEnd = {};
  }
  target = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, target);
  transitionEnd = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, transitionEnd);
  var targetPositionalKeys = Object.keys(target).filter(isPositionalKey);
  // We want to remove any transform values that could affect the element's bounding box before
  // it's measured. We'll reapply these later.
  var removedTransformValues = [];
  var hasAttemptedToRemoveTransformValues = false;
  var changedValueTypeKeys = [];
  targetPositionalKeys.forEach(function (key) {
    var value = visualElement.getValue(key);
    if (!visualElement.hasValue(key)) return;
    var from = origin[key];
    var to = target[key];
    var fromType = Object(_value_types_dimensions_js__WEBPACK_IMPORTED_MODULE_5__["findDimensionValueType"])(from);
    var toType;
    // TODO: The current implementation of this basically throws an error
    // if you try and do value conversion via keyframes. There's probably
    // a way of doing this but the performance implications would need greater scrutiny,
    // as it'd be doing multiple resize-remeasure operations.
    if (Object(_animation_utils_is_keyframes_target_js__WEBPACK_IMPORTED_MODULE_2__["isKeyframesTarget"])(to)) {
      var numKeyframes = to.length;
      for (var i = to[0] === null ? 1 : 0; i < numKeyframes; i++) {
        if (!toType) {
          toType = Object(_value_types_dimensions_js__WEBPACK_IMPORTED_MODULE_5__["findDimensionValueType"])(to[i]);
          Object(hey_listen__WEBPACK_IMPORTED_MODULE_3__["invariant"])(toType === fromType || isNumOrPxType(fromType) && isNumOrPxType(toType), "Keyframes must be of the same dimension as the current value");
        } else {
          Object(hey_listen__WEBPACK_IMPORTED_MODULE_3__["invariant"])(Object(_value_types_dimensions_js__WEBPACK_IMPORTED_MODULE_5__["findDimensionValueType"])(to[i]) === toType, "All keyframes must be of the same type");
        }
      }
    } else {
      toType = Object(_value_types_dimensions_js__WEBPACK_IMPORTED_MODULE_5__["findDimensionValueType"])(to);
    }
    if (fromType !== toType) {
      // If they're both just number or px, convert them both to numbers rather than
      // relying on resize/remeasure to convert (which is wasteful in this situation)
      if (isNumOrPxType(fromType) && isNumOrPxType(toType)) {
        var current = value.get();
        if (typeof current === "string") {
          value.set(parseFloat(current));
        }
        if (typeof to === "string") {
          target[key] = parseFloat(to);
        } else if (Array.isArray(to) && toType === style_value_types__WEBPACK_IMPORTED_MODULE_1__["px"]) {
          target[key] = to.map(parseFloat);
        }
      } else if ((fromType === null || fromType === void 0 ? void 0 : fromType.transform) && (toType === null || toType === void 0 ? void 0 : toType.transform) && (from === 0 || to === 0)) {
        // If one or the other value is 0, it's safe to coerce it to the
        // type of the other without measurement
        if (from === 0) {
          value.set(toType.transform(from));
        } else {
          target[key] = fromType.transform(to);
        }
      } else {
        // If we're going to do value conversion via DOM measurements, we first
        // need to remove non-positional transform values that could affect the bbox measurements.
        if (!hasAttemptedToRemoveTransformValues) {
          removedTransformValues = removeNonTranslationalTransform(visualElement);
          hasAttemptedToRemoveTransformValues = true;
        }
        changedValueTypeKeys.push(key);
        transitionEnd[key] = transitionEnd[key] !== undefined ? transitionEnd[key] : target[key];
        setAndResetVelocity(value, to);
      }
    }
  });
  if (changedValueTypeKeys.length) {
    var convertedTarget = convertChangedValueTypes(target, visualElement, changedValueTypeKeys);
    // If we removed transform values, reapply them before the next render
    if (removedTransformValues.length) {
      removedTransformValues.forEach(function (_a) {
        var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2),
          key = _b[0],
          value = _b[1];
        visualElement.getValue(key).set(value);
      });
    }
    // Reapply original values
    visualElement.syncRender();
    return {
      target: convertedTarget,
      transitionEnd: transitionEnd
    };
  } else {
    return {
      target: target,
      transitionEnd: transitionEnd
    };
  }
};
/**
 * Convert value types for x/y/width/height/top/left/bottom/right
 *
 * Allows animation between `'auto'` -> `'100%'` or `0` -> `'calc(50% - 10vw)'`
 *
 * @internal
 */
function unitConversion(visualElement, target, origin, transitionEnd) {
  return hasPositionalKey(target) ? checkAndConvertChangedValueTypes(visualElement, target, origin, transitionEnd) : {
    target: target,
    transitionEnd: transitionEnd
  };
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/value-types/animatable-none.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/value-types/animatable-none.js ***!
  \**************************************************************************************/
/*! exports provided: getAnimatableNone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAnimatableNone", function() { return getAnimatableNone; });
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/index.js");
/* harmony import */ var _defaults_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defaults.js */ "./node_modules/framer-motion/dist/es/render/dom/value-types/defaults.js");


function getAnimatableNone(key, value) {
  var _a;
  var defaultValueType = Object(_defaults_js__WEBPACK_IMPORTED_MODULE_1__["getDefaultValueType"])(key);
  if (defaultValueType !== style_value_types__WEBPACK_IMPORTED_MODULE_0__["filter"]) defaultValueType = style_value_types__WEBPACK_IMPORTED_MODULE_0__["complex"];
  // If value is not recognised as animatable, ie "none", create an animatable version origin based on the target
  return (_a = defaultValueType.getAnimatableNone) === null || _a === void 0 ? void 0 : _a.call(defaultValueType, value);
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/value-types/defaults.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/value-types/defaults.js ***!
  \*******************************************************************************/
/*! exports provided: defaultValueTypes, getDefaultValueType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultValueTypes", function() { return defaultValueTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultValueType", function() { return getDefaultValueType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/index.js");
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./number.js */ "./node_modules/framer-motion/dist/es/render/dom/value-types/number.js");




/**
 * A map of default value types for common values
 */
var defaultValueTypes = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _number_js__WEBPACK_IMPORTED_MODULE_2__["numberValueTypes"]), {
  // Color props
  color: style_value_types__WEBPACK_IMPORTED_MODULE_1__["color"],
  backgroundColor: style_value_types__WEBPACK_IMPORTED_MODULE_1__["color"],
  outlineColor: style_value_types__WEBPACK_IMPORTED_MODULE_1__["color"],
  fill: style_value_types__WEBPACK_IMPORTED_MODULE_1__["color"],
  stroke: style_value_types__WEBPACK_IMPORTED_MODULE_1__["color"],
  // Border props
  borderColor: style_value_types__WEBPACK_IMPORTED_MODULE_1__["color"],
  borderTopColor: style_value_types__WEBPACK_IMPORTED_MODULE_1__["color"],
  borderRightColor: style_value_types__WEBPACK_IMPORTED_MODULE_1__["color"],
  borderBottomColor: style_value_types__WEBPACK_IMPORTED_MODULE_1__["color"],
  borderLeftColor: style_value_types__WEBPACK_IMPORTED_MODULE_1__["color"],
  filter: style_value_types__WEBPACK_IMPORTED_MODULE_1__["filter"],
  WebkitFilter: style_value_types__WEBPACK_IMPORTED_MODULE_1__["filter"]
});
/**
 * Gets the default ValueType for the provided value key
 */
var getDefaultValueType = function getDefaultValueType(key) {
  return defaultValueTypes[key];
};


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/value-types/dimensions.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/value-types/dimensions.js ***!
  \*********************************************************************************/
/*! exports provided: dimensionValueTypes, findDimensionValueType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dimensionValueTypes", function() { return dimensionValueTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findDimensionValueType", function() { return findDimensionValueType; });
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/index.js");
/* harmony import */ var _test_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test.js */ "./node_modules/framer-motion/dist/es/render/dom/value-types/test.js");
/* harmony import */ var _type_auto_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./type-auto.js */ "./node_modules/framer-motion/dist/es/render/dom/value-types/type-auto.js");




/**
 * A list of value types commonly used for dimensions
 */
var dimensionValueTypes = [style_value_types__WEBPACK_IMPORTED_MODULE_0__["number"], style_value_types__WEBPACK_IMPORTED_MODULE_0__["px"], style_value_types__WEBPACK_IMPORTED_MODULE_0__["percent"], style_value_types__WEBPACK_IMPORTED_MODULE_0__["degrees"], style_value_types__WEBPACK_IMPORTED_MODULE_0__["vw"], style_value_types__WEBPACK_IMPORTED_MODULE_0__["vh"], _type_auto_js__WEBPACK_IMPORTED_MODULE_2__["auto"]];
/**
 * Tests a dimensional value against the list of dimension ValueTypes
 */
var findDimensionValueType = function findDimensionValueType(v) {
  return dimensionValueTypes.find(Object(_test_js__WEBPACK_IMPORTED_MODULE_1__["testValueType"])(v));
};


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/value-types/find.js":
/*!***************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/value-types/find.js ***!
  \***************************************************************************/
/*! exports provided: findValueType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findValueType", function() { return findValueType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/index.js");
/* harmony import */ var _dimensions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dimensions.js */ "./node_modules/framer-motion/dist/es/render/dom/value-types/dimensions.js");
/* harmony import */ var _test_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./test.js */ "./node_modules/framer-motion/dist/es/render/dom/value-types/test.js");





/**
 * A list of all ValueTypes
 */
var valueTypes = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_dimensions_js__WEBPACK_IMPORTED_MODULE_2__["dimensionValueTypes"])), [style_value_types__WEBPACK_IMPORTED_MODULE_1__["color"], style_value_types__WEBPACK_IMPORTED_MODULE_1__["complex"]]);
/**
 * Tests a value against the list of ValueTypes
 */
var findValueType = function findValueType(v) {
  return valueTypes.find(Object(_test_js__WEBPACK_IMPORTED_MODULE_3__["testValueType"])(v));
};


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/value-types/get-as-type.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/value-types/get-as-type.js ***!
  \**********************************************************************************/
/*! exports provided: getValueAsType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValueAsType", function() { return getValueAsType; });
/**
 * Provided a value and a ValueType, returns the value as that value type.
 */
var getValueAsType = function getValueAsType(value, type) {
  return type && typeof value === "number" ? type.transform(value) : value;
};


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/value-types/number.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/value-types/number.js ***!
  \*****************************************************************************/
/*! exports provided: numberValueTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberValueTypes", function() { return numberValueTypes; });
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/index.js");
/* harmony import */ var _type_int_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./type-int.js */ "./node_modules/framer-motion/dist/es/render/dom/value-types/type-int.js");


var numberValueTypes = {
  // Border props
  borderWidth: style_value_types__WEBPACK_IMPORTED_MODULE_0__["px"],
  borderTopWidth: style_value_types__WEBPACK_IMPORTED_MODULE_0__["px"],
  borderRightWidth: style_value_types__WEBPACK_IMPORTED_MODULE_0__["px"],
  borderBottomWidth: style_value_types__WEBPACK_IMPORTED_MODULE_0__["px"],
  borderLeftWidth: style_value_types__WEBPACK_IMPORTED_MODULE_0__["px"],
  borderRadius: style_value_types__WEBPACK_IMPORTED_MODULE_0__["px"],
  radius: style_value_types__WEBPACK_IMPORTED_MODULE_0__["px"],
  borderTopLeftRadius: style_value_types__WEBPACK_IMPORTED_MODULE_0__["px"],
  borderTopRightRadius: style_value_types__WEBPACK_IMPORTED_MODULE_0__["px"],
  borderBottomRightRadius: style_value_types__WEBPACK_IMPORTED_MODULE_0__["px"],
  borderBottomLeftRadius: style_value_types__WEBPACK_IMPORTED_MODULE_0__["px"],
  // Positioning props
  width: style_value_types__WEBPACK_IMPORTED_MODULE_0__["px"],
  maxWidth: style_value_types__WEBPACK_IMPORTED_MODULE_0__["px"],
  height: style_value_types__WEBPACK_IMPORTED_MODULE_0__["px"],
  maxHeight: style_value_types__WEBPACK_IMPORTED_MODULE_0__["px"],
  size: style_value_types__WEBPACK_IMPORTED_MODULE_0__["px"],
  top: style_value_types__WEBPACK_IMPORTED_MODULE_0__["px"],
  right: style_value_types__WEBPACK_IMPORTED_MODULE_0__["px"],
  bottom: style_value_types__WEBPACK_IMPORTED_MODULE_0__["px"],
  left: style_value_types__WEBPACK_IMPORTED_MODULE_0__["px"],
  // Spacing props
  padding: style_value_types__WEBPACK_IMPORTED_MODULE_0__["px"],
  paddingTop: style_value_types__WEBPACK_IMPORTED_MODULE_0__["px"],
  paddingRight: style_value_types__WEBPACK_IMPORTED_MODULE_0__["px"],
  paddingBottom: style_value_types__WEBPACK_IMPORTED_MODULE_0__["px"],
  paddingLeft: style_value_types__WEBPACK_IMPORTED_MODULE_0__["px"],
  margin: style_value_types__WEBPACK_IMPORTED_MODULE_0__["px"],
  marginTop: style_value_types__WEBPACK_IMPORTED_MODULE_0__["px"],
  marginRight: style_value_types__WEBPACK_IMPORTED_MODULE_0__["px"],
  marginBottom: style_value_types__WEBPACK_IMPORTED_MODULE_0__["px"],
  marginLeft: style_value_types__WEBPACK_IMPORTED_MODULE_0__["px"],
  // Transform props
  rotate: style_value_types__WEBPACK_IMPORTED_MODULE_0__["degrees"],
  rotateX: style_value_types__WEBPACK_IMPORTED_MODULE_0__["degrees"],
  rotateY: style_value_types__WEBPACK_IMPORTED_MODULE_0__["degrees"],
  rotateZ: style_value_types__WEBPACK_IMPORTED_MODULE_0__["degrees"],
  scale: style_value_types__WEBPACK_IMPORTED_MODULE_0__["scale"],
  scaleX: style_value_types__WEBPACK_IMPORTED_MODULE_0__["scale"],
  scaleY: style_value_types__WEBPACK_IMPORTED_MODULE_0__["scale"],
  scaleZ: style_value_types__WEBPACK_IMPORTED_MODULE_0__["scale"],
  skew: style_value_types__WEBPACK_IMPORTED_MODULE_0__["degrees"],
  skewX: style_value_types__WEBPACK_IMPORTED_MODULE_0__["degrees"],
  skewY: style_value_types__WEBPACK_IMPORTED_MODULE_0__["degrees"],
  distance: style_value_types__WEBPACK_IMPORTED_MODULE_0__["px"],
  translateX: style_value_types__WEBPACK_IMPORTED_MODULE_0__["px"],
  translateY: style_value_types__WEBPACK_IMPORTED_MODULE_0__["px"],
  translateZ: style_value_types__WEBPACK_IMPORTED_MODULE_0__["px"],
  x: style_value_types__WEBPACK_IMPORTED_MODULE_0__["px"],
  y: style_value_types__WEBPACK_IMPORTED_MODULE_0__["px"],
  z: style_value_types__WEBPACK_IMPORTED_MODULE_0__["px"],
  perspective: style_value_types__WEBPACK_IMPORTED_MODULE_0__["px"],
  transformPerspective: style_value_types__WEBPACK_IMPORTED_MODULE_0__["px"],
  opacity: style_value_types__WEBPACK_IMPORTED_MODULE_0__["alpha"],
  originX: style_value_types__WEBPACK_IMPORTED_MODULE_0__["progressPercentage"],
  originY: style_value_types__WEBPACK_IMPORTED_MODULE_0__["progressPercentage"],
  originZ: style_value_types__WEBPACK_IMPORTED_MODULE_0__["px"],
  // Misc
  zIndex: _type_int_js__WEBPACK_IMPORTED_MODULE_1__["int"],
  // SVG
  fillOpacity: style_value_types__WEBPACK_IMPORTED_MODULE_0__["alpha"],
  strokeOpacity: style_value_types__WEBPACK_IMPORTED_MODULE_0__["alpha"],
  numOctaves: _type_int_js__WEBPACK_IMPORTED_MODULE_1__["int"]
};


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/value-types/test.js":
/*!***************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/value-types/test.js ***!
  \***************************************************************************/
/*! exports provided: testValueType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testValueType", function() { return testValueType; });
/**
 * Tests a provided value against a ValueType
 */
var testValueType = function testValueType(v) {
  return function (type) {
    return type.test(v);
  };
};


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/value-types/type-auto.js":
/*!********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/value-types/type-auto.js ***!
  \********************************************************************************/
/*! exports provided: auto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auto", function() { return auto; });
/**
 * ValueType for "auto"
 */
var auto = {
  test: function test(v) {
    return v === "auto";
  },
  parse: function parse(v) {
    return v;
  }
};


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/dom/value-types/type-int.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/value-types/type-int.js ***!
  \*******************************************************************************/
/*! exports provided: int */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "int", function() { return _int; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/index.js");


var _int = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, style_value_types__WEBPACK_IMPORTED_MODULE_1__["number"]), {
  transform: Math.round
});


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/html/config-motion.js":
/*!*************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/html/config-motion.js ***!
  \*************************************************************************/
/*! exports provided: htmlMotionConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "htmlMotionConfig", function() { return htmlMotionConfig; });
/* harmony import */ var _motion_utils_use_visual_state_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../motion/utils/use-visual-state.js */ "./node_modules/framer-motion/dist/es/motion/utils/use-visual-state.js");
/* harmony import */ var _utils_scrape_motion_values_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/scrape-motion-values.js */ "./node_modules/framer-motion/dist/es/render/html/utils/scrape-motion-values.js");
/* harmony import */ var _utils_create_render_state_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/create-render-state.js */ "./node_modules/framer-motion/dist/es/render/html/utils/create-render-state.js");



var htmlMotionConfig = {
  useVisualState: Object(_motion_utils_use_visual_state_js__WEBPACK_IMPORTED_MODULE_0__["makeUseVisualState"])({
    scrapeMotionValuesFromProps: _utils_scrape_motion_values_js__WEBPACK_IMPORTED_MODULE_1__["scrapeMotionValuesFromProps"],
    createRenderState: _utils_create_render_state_js__WEBPACK_IMPORTED_MODULE_2__["createHtmlRenderState"]
  })
};


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/html/use-props.js":
/*!*********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/html/use-props.js ***!
  \*********************************************************************/
/*! exports provided: copyRawValuesOnly, useHTMLProps, useStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyRawValuesOnly", function() { return copyRawValuesOnly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useHTMLProps", function() { return useHTMLProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStyle", function() { return useStyle; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _motion_utils_is_forced_motion_value_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../motion/utils/is-forced-motion-value.js */ "./node_modules/framer-motion/dist/es/motion/utils/is-forced-motion-value.js");
/* harmony import */ var _value_utils_is_motion_value_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../value/utils/is-motion-value.js */ "./node_modules/framer-motion/dist/es/value/utils/is-motion-value.js");
/* harmony import */ var _utils_build_styles_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/build-styles.js */ "./node_modules/framer-motion/dist/es/render/html/utils/build-styles.js");
/* harmony import */ var _utils_create_render_state_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/create-render-state.js */ "./node_modules/framer-motion/dist/es/render/html/utils/create-render-state.js");






function copyRawValuesOnly(target, source, props) {
  for (var key in source) {
    if (!Object(_value_utils_is_motion_value_js__WEBPACK_IMPORTED_MODULE_3__["isMotionValue"])(source[key]) && !Object(_motion_utils_is_forced_motion_value_js__WEBPACK_IMPORTED_MODULE_2__["isForcedMotionValue"])(key, props)) {
      target[key] = source[key];
    }
  }
}
function useInitialMotionValues(_a, visualState, isStatic) {
  var transformTemplate = _a.transformTemplate;
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    var state = Object(_utils_create_render_state_js__WEBPACK_IMPORTED_MODULE_5__["createHtmlRenderState"])();
    Object(_utils_build_styles_js__WEBPACK_IMPORTED_MODULE_4__["buildHTMLStyles"])(state, visualState, undefined, undefined, {
      enableHardwareAcceleration: !isStatic
    }, transformTemplate);
    var vars = state.vars,
      style = state.style;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, vars), style);
  }, [visualState]);
}
function useStyle(props, visualState, isStatic) {
  var styleProp = props.style || {};
  var style = {};
  /**
   * Copy non-Motion Values straight into style
   */
  copyRawValuesOnly(style, styleProp, props);
  Object.assign(style, useInitialMotionValues(props, visualState, isStatic));
  if (props.transformValues) {
    style = props.transformValues(style);
  }
  return style;
}
function useHTMLProps(props, visualState, isStatic) {
  // The `any` isn't ideal but it is the type of createElement props argument
  var htmlProps = {};
  var style = useStyle(props, visualState, isStatic);
  if (Boolean(props.drag)) {
    // Disable the ghost element when a user drags
    htmlProps.draggable = false;
    // Disable text selection
    style.userSelect = style.WebkitUserSelect = style.WebkitTouchCallout = "none";
    // Disable scrolling on the draggable direction
    style.touchAction = props.drag === true ? "none" : "pan-" + (props.drag === "x" ? "y" : "x");
  }
  htmlProps.style = style;
  return htmlProps;
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/html/utils/build-projection-transform.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/html/utils/build-projection-transform.js ***!
  \********************************************************************************************/
/*! exports provided: buildLayoutProjectionTransform, buildLayoutProjectionTransformOrigin, identityProjection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildLayoutProjectionTransform", function() { return buildLayoutProjectionTransform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildLayoutProjectionTransformOrigin", function() { return buildLayoutProjectionTransformOrigin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identityProjection", function() { return identityProjection; });
/* harmony import */ var _utils_state_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/state.js */ "./node_modules/framer-motion/dist/es/render/utils/state.js");


/**
 * Build a transform style that takes a calculated delta between the element's current
 * space on screen and projects it into the desired space.
 */
function buildLayoutProjectionTransform(_a, treeScale, latestTransform) {
  var x = _a.x,
    y = _a.y;
  /**
   * The translations we use to calculate are always relative to the viewport coordinate space.
   * But when we apply scales, we also scale the coordinate space of an element and its children.
   * For instance if we have a treeScale (the culmination of all parent scales) of 0.5 and we need
   * to move an element 100 pixels, we actually need to move it 200 in within that scaled space.
   */
  var xTranslate = x.translate / treeScale.x;
  var yTranslate = y.translate / treeScale.y;
  var transform = "translate3d(" + xTranslate + "px, " + yTranslate + "px, 0) ";
  if (latestTransform) {
    var rotate = latestTransform.rotate,
      rotateX = latestTransform.rotateX,
      rotateY = latestTransform.rotateY;
    if (rotate) transform += "rotate(" + rotate + ") ";
    if (rotateX) transform += "rotateX(" + rotateX + ") ";
    if (rotateY) transform += "rotateY(" + rotateY + ") ";
  }
  transform += "scale(" + x.scale + ", " + y.scale + ")";
  return !latestTransform && transform === identityProjection ? "" : transform;
}
/**
 * Take the calculated delta origin and apply it as a transform string.
 */
function buildLayoutProjectionTransformOrigin(_a) {
  var deltaFinal = _a.deltaFinal;
  return deltaFinal.x.origin * 100 + "% " + deltaFinal.y.origin * 100 + "% 0";
}
var identityProjection = buildLayoutProjectionTransform(_utils_state_js__WEBPACK_IMPORTED_MODULE_0__["zeroLayout"].delta, _utils_state_js__WEBPACK_IMPORTED_MODULE_0__["zeroLayout"].treeScale, {
  x: 1,
  y: 1
});


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/html/utils/build-styles.js":
/*!******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/html/utils/build-styles.js ***!
  \******************************************************************************/
/*! exports provided: buildHTMLStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildHTMLStyles", function() { return buildHTMLStyles; });
/* harmony import */ var _dom_projection_scale_correction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dom/projection/scale-correction.js */ "./node_modules/framer-motion/dist/es/render/dom/projection/scale-correction.js");
/* harmony import */ var _build_transform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./build-transform.js */ "./node_modules/framer-motion/dist/es/render/html/utils/build-transform.js");
/* harmony import */ var _dom_utils_is_css_variable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dom/utils/is-css-variable.js */ "./node_modules/framer-motion/dist/es/render/dom/utils/is-css-variable.js");
/* harmony import */ var _transform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transform.js */ "./node_modules/framer-motion/dist/es/render/html/utils/transform.js");
/* harmony import */ var _dom_value_types_get_as_type_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../dom/value-types/get-as-type.js */ "./node_modules/framer-motion/dist/es/render/dom/value-types/get-as-type.js");
/* harmony import */ var _dom_value_types_number_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../dom/value-types/number.js */ "./node_modules/framer-motion/dist/es/render/dom/value-types/number.js");






function buildHTMLStyles(state, latestValues, projection, layoutState, options, transformTemplate, buildProjectionTransform, buildProjectionTransformOrigin) {
  var _a;
  var style = state.style,
    vars = state.vars,
    transform = state.transform,
    transformKeys = state.transformKeys,
    transformOrigin = state.transformOrigin;
  // Empty the transformKeys array. As we're throwing out refs to its items
  // this might not be as cheap as suspected. Maybe using the array as a buffer
  // with a manual incrementation would be better.
  transformKeys.length = 0;
  // Track whether we encounter any transform or transformOrigin values.
  var hasTransform = false;
  var hasTransformOrigin = false;
  // Does the calculated transform essentially equal "none"?
  var transformIsNone = true;
  /**
   * Loop over all our latest animated values and decide whether to handle them
   * as a style or CSS variable.
   *
   * Transforms and transform origins are kept seperately for further processing.
   */
  for (var key in latestValues) {
    var value = latestValues[key];
    /**
     * If this is a CSS variable we don't do any further processing.
     */
    if (Object(_dom_utils_is_css_variable_js__WEBPACK_IMPORTED_MODULE_2__["isCSSVariable"])(key)) {
      vars[key] = value;
      continue;
    }
    // Convert the value to its default value type, ie 0 -> "0px"
    var valueType = _dom_value_types_number_js__WEBPACK_IMPORTED_MODULE_5__["numberValueTypes"][key];
    var valueAsType = Object(_dom_value_types_get_as_type_js__WEBPACK_IMPORTED_MODULE_4__["getValueAsType"])(value, valueType);
    if (Object(_transform_js__WEBPACK_IMPORTED_MODULE_3__["isTransformProp"])(key)) {
      // If this is a transform, flag to enable further transform processing
      hasTransform = true;
      transform[key] = valueAsType;
      transformKeys.push(key);
      // If we already know we have a non-default transform, early return
      if (!transformIsNone) continue;
      // Otherwise check to see if this is a default transform
      if (value !== ((_a = valueType["default"]) !== null && _a !== void 0 ? _a : 0)) transformIsNone = false;
    } else if (Object(_transform_js__WEBPACK_IMPORTED_MODULE_3__["isTransformOriginProp"])(key)) {
      transformOrigin[key] = valueAsType;
      // If this is a transform origin, flag and enable further transform-origin processing
      hasTransformOrigin = true;
    } else {
      /**
       * If layout projection is on, and we need to perform scale correction for this
       * value type, perform it.
       */
      if ((projection === null || projection === void 0 ? void 0 : projection.isHydrated) && (layoutState === null || layoutState === void 0 ? void 0 : layoutState.isHydrated) && _dom_projection_scale_correction_js__WEBPACK_IMPORTED_MODULE_0__["valueScaleCorrection"][key]) {
        var correctedValue = _dom_projection_scale_correction_js__WEBPACK_IMPORTED_MODULE_0__["valueScaleCorrection"][key].process(value, layoutState, projection);
        /**
         * Scale-correctable values can define a number of other values to break
         * down into. For instance borderRadius needs applying to borderBottomLeftRadius etc
         */
        var applyTo = _dom_projection_scale_correction_js__WEBPACK_IMPORTED_MODULE_0__["valueScaleCorrection"][key].applyTo;
        if (applyTo) {
          var num = applyTo.length;
          for (var i = 0; i < num; i++) {
            style[applyTo[i]] = correctedValue;
          }
        } else {
          style[key] = correctedValue;
        }
      } else {
        style[key] = valueAsType;
      }
    }
  }
  if (layoutState && projection && buildProjectionTransform && buildProjectionTransformOrigin) {
    style.transform = buildProjectionTransform(layoutState.deltaFinal, layoutState.treeScale, hasTransform ? transform : undefined);
    if (transformTemplate) {
      style.transform = transformTemplate(transform, style.transform);
    }
    style.transformOrigin = buildProjectionTransformOrigin(layoutState);
  } else {
    if (hasTransform) {
      style.transform = Object(_build_transform_js__WEBPACK_IMPORTED_MODULE_1__["buildTransform"])(state, options, transformIsNone, transformTemplate);
    }
    if (hasTransformOrigin) {
      style.transformOrigin = Object(_build_transform_js__WEBPACK_IMPORTED_MODULE_1__["buildTransformOrigin"])(transformOrigin);
    }
  }
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/html/utils/build-transform.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/html/utils/build-transform.js ***!
  \*********************************************************************************/
/*! exports provided: buildTransform, buildTransformOrigin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildTransform", function() { return buildTransform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildTransformOrigin", function() { return buildTransformOrigin; });
/* harmony import */ var _transform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transform.js */ "./node_modules/framer-motion/dist/es/render/html/utils/transform.js");

var translateAlias = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
};
/**
 * Build a CSS transform style from individual x/y/scale etc properties.
 *
 * This outputs with a default order of transforms/scales/rotations, this can be customised by
 * providing a transformTemplate function.
 */
function buildTransform(_a, _b, transformIsDefault, transformTemplate) {
  var transform = _a.transform,
    transformKeys = _a.transformKeys;
  var _c = _b.enableHardwareAcceleration,
    enableHardwareAcceleration = _c === void 0 ? true : _c,
    _d = _b.allowTransformNone,
    allowTransformNone = _d === void 0 ? true : _d;
  // The transform string we're going to build into.
  var transformString = "";
  // Transform keys into their default order - this will determine the output order.
  transformKeys.sort(_transform_js__WEBPACK_IMPORTED_MODULE_0__["sortTransformProps"]);
  // Track whether the defined transform has a defined z so we don't add a
  // second to enable hardware acceleration
  var transformHasZ = false;
  // Loop over each transform and build them into transformString
  var numTransformKeys = transformKeys.length;
  for (var i = 0; i < numTransformKeys; i++) {
    var key = transformKeys[i];
    transformString += (translateAlias[key] || key) + "(" + transform[key] + ") ";
    if (key === "z") transformHasZ = true;
  }
  if (!transformHasZ && enableHardwareAcceleration) {
    transformString += "translateZ(0)";
  } else {
    transformString = transformString.trim();
  }
  // If we have a custom `transform` template, pass our transform values and
  // generated transformString to that before returning
  if (transformTemplate) {
    transformString = transformTemplate(transform, transformIsDefault ? "" : transformString);
  } else if (allowTransformNone && transformIsDefault) {
    transformString = "none";
  }
  return transformString;
}
/**
 * Build a transformOrigin style. Uses the same defaults as the browser for
 * undefined origins.
 */
function buildTransformOrigin(_a) {
  var _b = _a.originX,
    originX = _b === void 0 ? "50%" : _b,
    _c = _a.originY,
    originY = _c === void 0 ? "50%" : _c,
    _d = _a.originZ,
    originZ = _d === void 0 ? 0 : _d;
  return originX + " " + originY + " " + originZ;
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/html/utils/create-render-state.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/html/utils/create-render-state.js ***!
  \*************************************************************************************/
/*! exports provided: createHtmlRenderState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createHtmlRenderState", function() { return createHtmlRenderState; });
var createHtmlRenderState = function createHtmlRenderState() {
  return {
    style: {},
    transform: {},
    transformKeys: [],
    transformOrigin: {},
    vars: {}
  };
};


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/html/utils/render.js":
/*!************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/html/utils/render.js ***!
  \************************************************************************/
/*! exports provided: renderHTML */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderHTML", function() { return renderHTML; });
function renderHTML(element, _a) {
  var style = _a.style,
    vars = _a.vars;
  // Directly assign style into the Element's style prop. In tests Object.assign is the
  // fastest way to assign styles.
  Object.assign(element.style, style);
  // Loop over any CSS variables and assign those.
  for (var key in vars) {
    element.style.setProperty(key, vars[key]);
  }
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/html/utils/scrape-motion-values.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/html/utils/scrape-motion-values.js ***!
  \**************************************************************************************/
/*! exports provided: scrapeMotionValuesFromProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrapeMotionValuesFromProps", function() { return scrapeMotionValuesFromProps; });
/* harmony import */ var _motion_utils_is_forced_motion_value_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../motion/utils/is-forced-motion-value.js */ "./node_modules/framer-motion/dist/es/motion/utils/is-forced-motion-value.js");
/* harmony import */ var _value_utils_is_motion_value_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../value/utils/is-motion-value.js */ "./node_modules/framer-motion/dist/es/value/utils/is-motion-value.js");


function scrapeMotionValuesFromProps(props) {
  var style = props.style;
  var newValues = {};
  for (var key in style) {
    if (Object(_value_utils_is_motion_value_js__WEBPACK_IMPORTED_MODULE_1__["isMotionValue"])(style[key]) || Object(_motion_utils_is_forced_motion_value_js__WEBPACK_IMPORTED_MODULE_0__["isForcedMotionValue"])(key, props)) {
      newValues[key] = style[key];
    }
  }
  return newValues;
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/html/utils/transform.js":
/*!***************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/html/utils/transform.js ***!
  \***************************************************************************/
/*! exports provided: isTransformOriginProp, isTransformProp, sortTransformProps, transformAxes, transformProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTransformOriginProp", function() { return isTransformOriginProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTransformProp", function() { return isTransformProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortTransformProps", function() { return sortTransformProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformAxes", function() { return transformAxes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformProps", function() { return transformProps; });
/**
 * A list of all transformable axes. We'll use this list to generated a version
 * of each axes for each transform.
 */
var transformAxes = ["", "X", "Y", "Z"];
/**
 * An ordered array of each transformable value. By default, transform values
 * will be sorted to this order.
 */
var order = ["translate", "scale", "rotate", "skew"];
/**
 * Generate a list of every possible transform key.
 */
var transformProps = ["transformPerspective", "x", "y", "z"];
order.forEach(function (operationKey) {
  return transformAxes.forEach(function (axesKey) {
    return transformProps.push(operationKey + axesKey);
  });
});
/**
 * A function to use with Array.sort to sort transform keys by their default order.
 */
function sortTransformProps(a, b) {
  return transformProps.indexOf(a) - transformProps.indexOf(b);
}
/**
 * A quick lookup for transform props.
 */
var transformPropSet = new Set(transformProps);
function isTransformProp(key) {
  return transformPropSet.has(key);
}
/**
 * A quick lookup for transform origin props
 */
var transformOriginProps = new Set(["originX", "originY", "originZ"]);
function isTransformOriginProp(key) {
  return transformOriginProps.has(key);
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/html/visual-element.js":
/*!**************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/html/visual-element.js ***!
  \**************************************************************************/
/*! exports provided: getComputedStyle, htmlConfig, htmlVisualElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getComputedStyle", function() { return getComputedStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "htmlConfig", function() { return htmlConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "htmlVisualElement", function() { return htmlVisualElement; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.js */ "./node_modules/framer-motion/dist/es/render/index.js");
/* harmony import */ var _utils_setters_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/setters.js */ "./node_modules/framer-motion/dist/es/render/utils/setters.js");
/* harmony import */ var _dom_projection_measure_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom/projection/measure.js */ "./node_modules/framer-motion/dist/es/render/dom/projection/measure.js");
/* harmony import */ var _utils_build_styles_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/build-styles.js */ "./node_modules/framer-motion/dist/es/render/html/utils/build-styles.js");
/* harmony import */ var _dom_utils_is_css_variable_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dom/utils/is-css-variable.js */ "./node_modules/framer-motion/dist/es/render/dom/utils/is-css-variable.js");
/* harmony import */ var _dom_utils_parse_dom_variant_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dom/utils/parse-dom-variant.js */ "./node_modules/framer-motion/dist/es/render/dom/utils/parse-dom-variant.js");
/* harmony import */ var _utils_transform_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/transform.js */ "./node_modules/framer-motion/dist/es/render/html/utils/transform.js");
/* harmony import */ var _utils_scrape_motion_values_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/scrape-motion-values.js */ "./node_modules/framer-motion/dist/es/render/html/utils/scrape-motion-values.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/render.js */ "./node_modules/framer-motion/dist/es/render/html/utils/render.js");
/* harmony import */ var _dom_value_types_defaults_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../dom/value-types/defaults.js */ "./node_modules/framer-motion/dist/es/render/dom/value-types/defaults.js");
/* harmony import */ var _utils_build_projection_transform_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/build-projection-transform.js */ "./node_modules/framer-motion/dist/es/render/html/utils/build-projection-transform.js");












function getComputedStyle(element) {
  return window.getComputedStyle(element);
}
var htmlConfig = {
  treeType: "dom",
  readValueFromInstance: function readValueFromInstance(domElement, key) {
    if (Object(_utils_transform_js__WEBPACK_IMPORTED_MODULE_7__["isTransformProp"])(key)) {
      var defaultType = Object(_dom_value_types_defaults_js__WEBPACK_IMPORTED_MODULE_10__["getDefaultValueType"])(key);
      return defaultType ? defaultType["default"] || 0 : 0;
    } else {
      var computedStyle = getComputedStyle(domElement);
      return (Object(_dom_utils_is_css_variable_js__WEBPACK_IMPORTED_MODULE_5__["isCSSVariable"])(key) ? computedStyle.getPropertyValue(key) : computedStyle[key]) || 0;
    }
  },
  sortNodePosition: function sortNodePosition(a, b) {
    /**
     * compareDocumentPosition returns a bitmask, by using the bitwise &
     * we're returning true if 2 in that bitmask is set to true. 2 is set
     * to true if b preceeds a.
     */
    return a.compareDocumentPosition(b) & 2 ? 1 : -1;
  },
  getBaseTarget: function getBaseTarget(props, key) {
    var _a;
    return (_a = props.style) === null || _a === void 0 ? void 0 : _a[key];
  },
  measureViewportBox: function measureViewportBox(element, _a) {
    var transformPagePoint = _a.transformPagePoint;
    return Object(_dom_projection_measure_js__WEBPACK_IMPORTED_MODULE_3__["getBoundingBox"])(element, transformPagePoint);
  },
  /**
   * Reset the transform on the current Element. This is called as part
   * of a batched process across the entire layout tree. To remove this write
   * cycle it'd be interesting to see if it's possible to "undo" all the current
   * layout transforms up the tree in the same way this.getBoundingBoxWithoutTransforms
   * works
   */
  resetTransform: function resetTransform(element, domElement, props) {
    var transformTemplate = props.transformTemplate;
    domElement.style.transform = transformTemplate ? transformTemplate({}, "") : "none";
    // Ensure that whatever happens next, we restore our transform on the next frame
    element.scheduleRender();
  },
  restoreTransform: function restoreTransform(instance, mutableState) {
    instance.style.transform = mutableState.style.transform;
  },
  removeValueFromRenderState: function removeValueFromRenderState(key, _a) {
    var vars = _a.vars,
      style = _a.style;
    delete vars[key];
    delete style[key];
  },
  /**
   * Ensure that HTML and Framer-specific value types like `px`->`%` and `Color`
   * can be animated by Motion.
   */
  makeTargetAnimatable: function makeTargetAnimatable(element, _a, _b, isMounted) {
    var transformValues = _b.transformValues;
    if (isMounted === void 0) {
      isMounted = true;
    }
    var transition = _a.transition,
      transitionEnd = _a.transitionEnd,
      target = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["transition", "transitionEnd"]);
    var origin = Object(_utils_setters_js__WEBPACK_IMPORTED_MODULE_2__["getOrigin"])(target, transition || {}, element);
    /**
     * If Framer has provided a function to convert `Color` etc value types, convert them
     */
    if (transformValues) {
      if (transitionEnd) transitionEnd = transformValues(transitionEnd);
      if (target) target = transformValues(target);
      if (origin) origin = transformValues(origin);
    }
    if (isMounted) {
      Object(_utils_setters_js__WEBPACK_IMPORTED_MODULE_2__["checkTargetForNewValues"])(element, target, origin);
      var parsed = Object(_dom_utils_parse_dom_variant_js__WEBPACK_IMPORTED_MODULE_6__["parseDomVariant"])(element, target, origin, transitionEnd);
      transitionEnd = parsed.transitionEnd;
      target = parsed.target;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({
      transition: transition,
      transitionEnd: transitionEnd
    }, target);
  },
  scrapeMotionValuesFromProps: _utils_scrape_motion_values_js__WEBPACK_IMPORTED_MODULE_8__["scrapeMotionValuesFromProps"],
  build: function build(element, renderState, latestValues, projection, layoutState, options, props) {
    if (element.isVisible !== undefined) {
      renderState.style.visibility = element.isVisible ? "visible" : "hidden";
    }
    var isProjectionTranform = projection.isEnabled && layoutState.isHydrated;
    Object(_utils_build_styles_js__WEBPACK_IMPORTED_MODULE_4__["buildHTMLStyles"])(renderState, latestValues, projection, layoutState, options, props.transformTemplate, isProjectionTranform ? _utils_build_projection_transform_js__WEBPACK_IMPORTED_MODULE_11__["buildLayoutProjectionTransform"] : undefined, isProjectionTranform ? _utils_build_projection_transform_js__WEBPACK_IMPORTED_MODULE_11__["buildLayoutProjectionTransformOrigin"] : undefined);
  },
  render: _utils_render_js__WEBPACK_IMPORTED_MODULE_9__["renderHTML"]
};
var htmlVisualElement = Object(_index_js__WEBPACK_IMPORTED_MODULE_1__["visualElement"])(htmlConfig);


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/index.js":
/*!************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/index.js ***!
  \************************************************************/
/*! exports provided: visualElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visualElement", function() { return visualElement; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var framesync__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framesync */ "./node_modules/framesync/dist/es/index.js");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/index.js");
/* harmony import */ var _components_AnimateSharedLayout_types_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AnimateSharedLayout/types.js */ "./node_modules/framer-motion/dist/es/components/AnimateSharedLayout/types.js");
/* harmony import */ var _utils_each_axis_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/each-axis.js */ "./node_modules/framer-motion/dist/es/utils/each-axis.js");
/* harmony import */ var _utils_geometry_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/geometry/index.js */ "./node_modules/framer-motion/dist/es/utils/geometry/index.js");
/* harmony import */ var _utils_geometry_delta_apply_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/geometry/delta-apply.js */ "./node_modules/framer-motion/dist/es/utils/geometry/delta-apply.js");
/* harmony import */ var _utils_geometry_delta_calc_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/geometry/delta-calc.js */ "./node_modules/framer-motion/dist/es/utils/geometry/delta-calc.js");
/* harmony import */ var _value_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../value/index.js */ "./node_modules/framer-motion/dist/es/value/index.js");
/* harmony import */ var _value_utils_is_motion_value_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../value/utils/is-motion-value.js */ "./node_modules/framer-motion/dist/es/value/utils/is-motion-value.js");
/* harmony import */ var _html_utils_build_projection_transform_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./html/utils/build-projection-transform.js */ "./node_modules/framer-motion/dist/es/render/html/utils/build-projection-transform.js");
/* harmony import */ var _utils_animation_state_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/animation-state.js */ "./node_modules/framer-motion/dist/es/render/utils/animation-state.js");
/* harmony import */ var _utils_lifecycles_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils/lifecycles.js */ "./node_modules/framer-motion/dist/es/render/utils/lifecycles.js");
/* harmony import */ var _utils_motion_values_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utils/motion-values.js */ "./node_modules/framer-motion/dist/es/render/utils/motion-values.js");
/* harmony import */ var _utils_projection_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./utils/projection.js */ "./node_modules/framer-motion/dist/es/render/utils/projection.js");
/* harmony import */ var _utils_state_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./utils/state.js */ "./node_modules/framer-motion/dist/es/render/utils/state.js");
/* harmony import */ var _utils_flat_tree_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./utils/flat-tree.js */ "./node_modules/framer-motion/dist/es/render/utils/flat-tree.js");
/* harmony import */ var _utils_variants_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./utils/variants.js */ "./node_modules/framer-motion/dist/es/render/utils/variants.js");
/* harmony import */ var _dom_projection_relative_set_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./dom/projection/relative-set.js */ "./node_modules/framer-motion/dist/es/render/dom/projection/relative-set.js");
/* harmony import */ var _utils_is_draggable_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./utils/is-draggable.js */ "./node_modules/framer-motion/dist/es/render/utils/is-draggable.js");




















var visualElement = function visualElement(_a) {
  var _b = _a.treeType,
    treeType = _b === void 0 ? "" : _b,
    build = _a.build,
    _getBaseTarget = _a.getBaseTarget,
    _makeTargetAnimatable = _a.makeTargetAnimatable,
    _measureViewportBox = _a.measureViewportBox,
    renderInstance = _a.render,
    readValueFromInstance = _a.readValueFromInstance,
    _resetTransform = _a.resetTransform,
    _restoreTransform = _a.restoreTransform,
    removeValueFromRenderState = _a.removeValueFromRenderState,
    _sortNodePosition = _a.sortNodePosition,
    scrapeMotionValuesFromProps = _a.scrapeMotionValuesFromProps;
  return function (_a, options) {
    var parent = _a.parent,
      props = _a.props,
      presenceId = _a.presenceId,
      blockInitialAnimation = _a.blockInitialAnimation,
      visualState = _a.visualState;
    if (options === void 0) {
      options = {};
    }
    var latestValues = visualState.latestValues,
      renderState = visualState.renderState;
    /**
     * The instance of the render-specific node that will be hydrated by the
     * exposed React ref. So for example, this visual element can host a
     * HTMLElement, plain object, or Three.js object. The functions provided
     * in VisualElementConfig allow us to interface with this instance.
     */
    var instance;
    /**
     * Manages the subscriptions for a visual element's lifecycle, for instance
     * onRender and onViewportBoxUpdate.
     */
    var lifecycles = Object(_utils_lifecycles_js__WEBPACK_IMPORTED_MODULE_12__["createLifecycles"])();
    /**
     *
     */
    var projection = Object(_utils_state_js__WEBPACK_IMPORTED_MODULE_15__["createProjectionState"])();
    /**
     * A reference to the nearest projecting parent. This is either
     * undefined if we haven't looked for the nearest projecting parent,
     * false if there is no parent performing layout projection, or a reference
     * to the projecting parent.
     */
    var projectionParent;
    /**
     * This is a reference to the visual state of the "lead" visual element.
     * Usually, this will be this visual element. But if it shares a layoutId
     * with other visual elements, only one of them will be designated lead by
     * AnimateSharedLayout. All the other visual elements will take on the visual
     * appearance of the lead while they crossfade to it.
     */
    var leadProjection = projection;
    var leadLatestValues = latestValues;
    var unsubscribeFromLeadVisualElement;
    /**
     * The latest layout measurements and calculated projections. This
     * is seperate from the target projection data in visualState as
     * many visual elements might point to the same piece of visualState as
     * a target, whereas they might each have different layouts and thus
     * projection calculations needed to project into the same viewport box.
     */
    var layoutState = Object(_utils_state_js__WEBPACK_IMPORTED_MODULE_15__["createLayoutState"])();
    /**
     *
     */
    var crossfader;
    /**
     * Keep track of whether the viewport box has been updated since the
     * last time the layout projection was re-calculated.
     */
    var hasViewportBoxUpdated = false;
    /**
     * A map of all motion values attached to this visual element. Motion
     * values are source of truth for any given animated value. A motion
     * value might be provided externally by the component via props.
     */
    var values = new Map();
    /**
     * A map of every subscription that binds the provided or generated
     * motion values onChange listeners to this visual element.
     */
    var valueSubscriptions = new Map();
    /**
     * A reference to the previously-provided motion values as returned
     * from scrapeMotionValuesFromProps. We use the keys in here to determine
     * if any motion values need to be removed after props are updated.
     */
    var prevMotionValues = {};
    /**
     * x/y motion values that track the progress of initiated layout
     * animations.
     *
     * TODO: Target for removal
     */
    var projectionTargetProgress;
    /**
     * When values are removed from all animation props we need to search
     * for a fallback value to animate to. These values are tracked in baseTarget.
     */
    var baseTarget = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, latestValues);
    // Internal methods ========================
    /**
     * On mount, this will be hydrated with a callback to disconnect
     * this visual element from its parent on unmount.
     */
    var removeFromVariantTree;
    /**
     *
     */
    function render() {
      if (!instance) return;
      if (element.isProjectionReady()) {
        /**
         * Apply the latest user-set transforms to the targetBox to produce the targetBoxFinal.
         * This is the final box that we will then project into by calculating a transform delta and
         * applying it to the corrected box.
         */
        Object(_utils_geometry_delta_apply_js__WEBPACK_IMPORTED_MODULE_6__["applyBoxTransforms"])(leadProjection.targetFinal, leadProjection.target, leadLatestValues);
        /**
         * Update the delta between the corrected box and the final target box, after
         * user-set transforms are applied to it. This will be used by the renderer to
         * create a transform style that will reproject the element from its actual layout
         * into the desired bounding box.
         */
        Object(_utils_geometry_delta_calc_js__WEBPACK_IMPORTED_MODULE_7__["updateBoxDelta"])(layoutState.deltaFinal, layoutState.layoutCorrected, leadProjection.targetFinal, latestValues);
      }
      triggerBuild();
      renderInstance(instance, renderState);
    }
    function triggerBuild() {
      var valuesToRender = latestValues;
      if (crossfader && crossfader.isActive()) {
        var crossfadedValues = crossfader.getCrossfadeState(element);
        if (crossfadedValues) valuesToRender = crossfadedValues;
      }
      build(element, renderState, valuesToRender, leadProjection, layoutState, options, props);
    }
    function update() {
      lifecycles.notifyUpdate(latestValues);
    }
    function updateLayoutProjection() {
      if (!element.isProjectionReady()) return;
      var delta = layoutState.delta,
        treeScale = layoutState.treeScale;
      var prevTreeScaleX = treeScale.x;
      var prevTreeScaleY = treeScale.y;
      var prevDeltaTransform = layoutState.deltaTransform;
      Object(_utils_projection_js__WEBPACK_IMPORTED_MODULE_14__["updateLayoutDeltas"])(layoutState, leadProjection, element.path, latestValues);
      hasViewportBoxUpdated && element.notifyViewportBoxUpdate(leadProjection.target, delta);
      hasViewportBoxUpdated = false;
      var deltaTransform = Object(_html_utils_build_projection_transform_js__WEBPACK_IMPORTED_MODULE_10__["buildLayoutProjectionTransform"])(delta, treeScale);
      if (deltaTransform !== prevDeltaTransform ||
      // Also compare calculated treeScale, for values that rely on this only for scale correction
      prevTreeScaleX !== treeScale.x || prevTreeScaleY !== treeScale.y) {
        element.scheduleRender();
      }
      layoutState.deltaTransform = deltaTransform;
    }
    function _updateTreeLayoutProjection() {
      element.layoutTree.forEach(fireUpdateLayoutProjection);
    }
    /**
     *
     */
    function bindToMotionValue(key, value) {
      var removeOnChange = value.onChange(function (latestValue) {
        latestValues[key] = latestValue;
        props.onUpdate && framesync__WEBPACK_IMPORTED_MODULE_1__["default"].update(update, false, true);
      });
      var removeOnRenderRequest = value.onRenderRequest(element.scheduleRender);
      valueSubscriptions.set(key, function () {
        removeOnChange();
        removeOnRenderRequest();
      });
    }
    /**
     * Any motion values that are provided to the element when created
     * aren't yet bound to the element, as this would technically be impure.
     * However, we iterate through the motion values and set them to the
     * initial values for this component.
     *
     * TODO: This is impure and we should look at changing this to run on mount.
     * Doing so will break some tests but this isn't neccessarily a breaking change,
     * more a reflection of the test.
     */
    var initialMotionValues = scrapeMotionValuesFromProps(props);
    for (var key in initialMotionValues) {
      var value = initialMotionValues[key];
      if (latestValues[key] !== undefined && Object(_value_utils_is_motion_value_js__WEBPACK_IMPORTED_MODULE_9__["isMotionValue"])(value)) {
        value.set(latestValues[key], false);
      }
    }
    /**
     * Determine what role this visual element should take in the variant tree.
     */
    var isControllingVariants = Object(_utils_variants_js__WEBPACK_IMPORTED_MODULE_17__["checkIfControllingVariants"])(props);
    var isVariantNode = Object(_utils_variants_js__WEBPACK_IMPORTED_MODULE_17__["checkIfVariantNode"])(props);
    var element = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({
      treeType: treeType,
      /**
       * This is a mirror of the internal instance prop, which keeps
       * VisualElement type-compatible with React's RefObject.
       */
      current: null,
      /**
       * The depth of this visual element within the visual element tree.
       */
      depth: parent ? parent.depth + 1 : 0,
      parent: parent,
      children: new Set(),
      /**
       * An ancestor path back to the root visual element. This is used
       * by layout projection to quickly recurse back up the tree.
       */
      path: parent ? Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(parent.path)), [parent]) : [],
      layoutTree: parent ? parent.layoutTree : new _utils_flat_tree_js__WEBPACK_IMPORTED_MODULE_16__["FlatTree"](),
      /**
       *
       */
      presenceId: presenceId,
      projection: projection,
      /**
       * If this component is part of the variant tree, it should track
       * any children that are also part of the tree. This is essentially
       * a shadow tree to simplify logic around how to stagger over children.
       */
      variantChildren: isVariantNode ? new Set() : undefined,
      /**
       * Whether this instance is visible. This can be changed imperatively
       * by AnimateSharedLayout, is analogous to CSS's visibility in that
       * hidden elements should take up layout, and needs enacting by the configured
       * render function.
       */
      isVisible: undefined,
      /**
       * Normally, if a component is controlled by a parent's variants, it can
       * rely on that ancestor to trigger animations further down the tree.
       * However, if a component is created after its parent is mounted, the parent
       * won't trigger that mount animation so the child needs to.
       *
       * TODO: This might be better replaced with a method isParentMounted
       */
      manuallyAnimateOnMount: Boolean(parent === null || parent === void 0 ? void 0 : parent.isMounted()),
      /**
       * This can be set by AnimatePresence to force components that mount
       * at the same time as it to mount as if they have initial={false} set.
       */
      blockInitialAnimation: blockInitialAnimation,
      /**
       * Determine whether this component has mounted yet. This is mostly used
       * by variant children to determine whether they need to trigger their
       * own animations on mount.
       */
      isMounted: function isMounted() {
        return Boolean(instance);
      },
      mount: function mount(newInstance) {
        instance = element.current = newInstance;
        element.pointTo(element);
        if (isVariantNode && parent && !isControllingVariants) {
          removeFromVariantTree = parent === null || parent === void 0 ? void 0 : parent.addVariantChild(element);
        }
        parent === null || parent === void 0 ? void 0 : parent.children.add(element);
      },
      /**
       *
       */
      unmount: function unmount() {
        framesync__WEBPACK_IMPORTED_MODULE_1__["cancelSync"].update(update);
        framesync__WEBPACK_IMPORTED_MODULE_1__["cancelSync"].render(render);
        framesync__WEBPACK_IMPORTED_MODULE_1__["cancelSync"].preRender(element.updateLayoutProjection);
        valueSubscriptions.forEach(function (remove) {
          return remove();
        });
        element.stopLayoutAnimation();
        element.layoutTree.remove(element);
        removeFromVariantTree === null || removeFromVariantTree === void 0 ? void 0 : removeFromVariantTree();
        parent === null || parent === void 0 ? void 0 : parent.children["delete"](element);
        unsubscribeFromLeadVisualElement === null || unsubscribeFromLeadVisualElement === void 0 ? void 0 : unsubscribeFromLeadVisualElement();
        lifecycles.clearAllListeners();
      },
      /**
       * Add a child visual element to our set of children.
       */
      addVariantChild: function addVariantChild(child) {
        var _a;
        var closestVariantNode = element.getClosestVariantNode();
        if (closestVariantNode) {
          (_a = closestVariantNode.variantChildren) === null || _a === void 0 ? void 0 : _a.add(child);
          return function () {
            return closestVariantNode.variantChildren["delete"](child);
          };
        }
      },
      sortNodePosition: function sortNodePosition(other) {
        /**
         * If these nodes aren't even of the same type we can't compare their depth.
         */
        if (!_sortNodePosition || treeType !== other.treeType) return 0;
        return _sortNodePosition(element.getInstance(), other.getInstance());
      },
      /**
       * Returns the closest variant node in the tree starting from
       * this visual element.
       */
      getClosestVariantNode: function getClosestVariantNode() {
        return isVariantNode ? element : parent === null || parent === void 0 ? void 0 : parent.getClosestVariantNode();
      },
      /**
       * A method that schedules an update to layout projections throughout
       * the tree. We inherit from the parent so there's only ever one
       * job scheduled on the next frame - that of the root visual element.
       */
      scheduleUpdateLayoutProjection: parent ? parent.scheduleUpdateLayoutProjection : function () {
        return framesync__WEBPACK_IMPORTED_MODULE_1__["default"].preRender(element.updateTreeLayoutProjection, false, true);
      },
      /**
       * Expose the latest layoutId prop.
       */
      getLayoutId: function getLayoutId() {
        return props.layoutId;
      },
      /**
       * Returns the current instance.
       */
      getInstance: function getInstance() {
        return instance;
      },
      /**
       * Get/set the latest static values.
       */
      getStaticValue: function getStaticValue(key) {
        return latestValues[key];
      },
      setStaticValue: function setStaticValue(key, value) {
        return latestValues[key] = value;
      },
      /**
       * Returns the latest motion value state. Currently only used to take
       * a snapshot of the visual element - perhaps this can return the whole
       * visual state
       */
      getLatestValues: function getLatestValues() {
        return latestValues;
      },
      /**
       * Set the visiblity of the visual element. If it's changed, schedule
       * a render to reflect these changes.
       */
      setVisibility: function setVisibility(visibility) {
        if (element.isVisible === visibility) return;
        element.isVisible = visibility;
        element.scheduleRender();
      },
      /**
       * Make a target animatable by Popmotion. For instance, if we're
       * trying to animate width from 100px to 100vw we need to measure 100vw
       * in pixels to determine what we really need to animate to. This is also
       * pluggable to support Framer's custom value types like Color,
       * and CSS variables.
       */
      makeTargetAnimatable: function makeTargetAnimatable(target, canMutate) {
        if (canMutate === void 0) {
          canMutate = true;
        }
        return _makeTargetAnimatable(element, target, props, canMutate);
      },
      // Motion values ========================
      /**
       * Add a motion value and bind it to this visual element.
       */
      addValue: function addValue(key, value) {
        // Remove existing value if it exists
        if (element.hasValue(key)) element.removeValue(key);
        values.set(key, value);
        latestValues[key] = value.get();
        bindToMotionValue(key, value);
      },
      /**
       * Remove a motion value and unbind any active subscriptions.
       */
      removeValue: function removeValue(key) {
        var _a;
        values["delete"](key);
        (_a = valueSubscriptions.get(key)) === null || _a === void 0 ? void 0 : _a();
        valueSubscriptions["delete"](key);
        delete latestValues[key];
        removeValueFromRenderState(key, renderState);
      },
      /**
       * Check whether we have a motion value for this key
       */
      hasValue: function hasValue(key) {
        return values.has(key);
      },
      /**
       * Get a motion value for this key. If called with a default
       * value, we'll create one if none exists.
       */
      getValue: function getValue(key, defaultValue) {
        var value = values.get(key);
        if (value === undefined && defaultValue !== undefined) {
          value = Object(_value_index_js__WEBPACK_IMPORTED_MODULE_8__["motionValue"])(defaultValue);
          element.addValue(key, value);
        }
        return value;
      },
      /**
       * Iterate over our motion values.
       */
      forEachValue: function forEachValue(callback) {
        return values.forEach(callback);
      },
      /**
       * If we're trying to animate to a previously unencountered value,
       * we need to check for it in our state and as a last resort read it
       * directly from the instance (which might have performance implications).
       */
      readValue: function readValue(key) {
        var _a;
        return (_a = latestValues[key]) !== null && _a !== void 0 ? _a : readValueFromInstance(instance, key, options);
      },
      /**
       * Set the base target to later animate back to. This is currently
       * only hydrated on creation and when we first read a value.
       */
      setBaseTarget: function setBaseTarget(key, value) {
        baseTarget[key] = value;
      },
      /**
       * Find the base target for a value thats been removed from all animation
       * props.
       */
      getBaseTarget: function getBaseTarget(key) {
        if (_getBaseTarget) {
          var target = _getBaseTarget(props, key);
          if (target !== undefined && !Object(_value_utils_is_motion_value_js__WEBPACK_IMPORTED_MODULE_9__["isMotionValue"])(target)) return target;
        }
        return baseTarget[key];
      }
    }, lifecycles), {
      /**
       * Build the renderer state based on the latest visual state.
       */
      build: function build() {
        triggerBuild();
        return renderState;
      },
      /**
       * Schedule a render on the next animation frame.
       */
      scheduleRender: function scheduleRender() {
        framesync__WEBPACK_IMPORTED_MODULE_1__["default"].render(render, false, true);
      },
      /**
       * Synchronously fire render. It's prefered that we batch renders but
       * in many circumstances, like layout measurement, we need to run this
       * synchronously. However in those instances other measures should be taken
       * to batch reads/writes.
       */
      syncRender: render,
      /**
       * Update the provided props. Ensure any newly-added motion values are
       * added to our map, old ones removed, and listeners updated.
       */
      setProps: function setProps(newProps) {
        props = newProps;
        lifecycles.updatePropListeners(newProps);
        prevMotionValues = Object(_utils_motion_values_js__WEBPACK_IMPORTED_MODULE_13__["updateMotionValuesFromProps"])(element, scrapeMotionValuesFromProps(props), prevMotionValues);
      },
      getProps: function getProps() {
        return props;
      },
      // Variants ==============================
      /**
       * Returns the variant definition with a given name.
       */
      getVariant: function getVariant(name) {
        var _a;
        return (_a = props.variants) === null || _a === void 0 ? void 0 : _a[name];
      },
      /**
       * Returns the defined default transition on this component.
       */
      getDefaultTransition: function getDefaultTransition() {
        return props.transition;
      },
      /**
       * Used by child variant nodes to get the closest ancestor variant props.
       */
      getVariantContext: function getVariantContext(startAtParent) {
        if (startAtParent === void 0) {
          startAtParent = false;
        }
        if (startAtParent) return parent === null || parent === void 0 ? void 0 : parent.getVariantContext();
        if (!isControllingVariants) {
          var context_1 = (parent === null || parent === void 0 ? void 0 : parent.getVariantContext()) || {};
          if (props.initial !== undefined) {
            context_1.initial = props.initial;
          }
          return context_1;
        }
        var context = {};
        for (var i = 0; i < numVariantProps; i++) {
          var name_1 = variantProps[i];
          var prop = props[name_1];
          if (Object(_utils_variants_js__WEBPACK_IMPORTED_MODULE_17__["isVariantLabel"])(prop) || prop === false) {
            context[name_1] = prop;
          }
        }
        return context;
      },
      // Layout projection ==============================
      /**
       * Enable layout projection for this visual element. Won't actually
       * occur until we also have hydrated layout measurements.
       */
      enableLayoutProjection: function enableLayoutProjection() {
        projection.isEnabled = true;
        element.layoutTree.add(element);
      },
      /**
       * Lock the projection target, for instance when dragging, so
       * nothing else can try and animate it.
       */
      lockProjectionTarget: function lockProjectionTarget() {
        projection.isTargetLocked = true;
      },
      unlockProjectionTarget: function unlockProjectionTarget() {
        element.stopLayoutAnimation();
        projection.isTargetLocked = false;
      },
      getLayoutState: function getLayoutState() {
        return layoutState;
      },
      setCrossfader: function setCrossfader(newCrossfader) {
        crossfader = newCrossfader;
      },
      isProjectionReady: function isProjectionReady() {
        return projection.isEnabled && projection.isHydrated && layoutState.isHydrated;
      },
      /**
       * Start a layout animation on a given axis.
       */
      startLayoutAnimation: function startLayoutAnimation(axis, transition, isRelative) {
        if (isRelative === void 0) {
          isRelative = false;
        }
        var progress = element.getProjectionAnimationProgress()[axis];
        var _a = isRelative ? projection.relativeTarget[axis] : projection.target[axis],
          min = _a.min,
          max = _a.max;
        var length = max - min;
        progress.clearListeners();
        progress.set(min);
        progress.set(min); // Set twice to hard-reset velocity
        progress.onChange(function (v) {
          element.setProjectionTargetAxis(axis, v, v + length, isRelative);
        });
        return element.animateMotionValue(axis, progress, 0, transition);
      },
      /**
       * Stop layout animations.
       */
      stopLayoutAnimation: function stopLayoutAnimation() {
        Object(_utils_each_axis_js__WEBPACK_IMPORTED_MODULE_4__["eachAxis"])(function (axis) {
          return element.getProjectionAnimationProgress()[axis].stop();
        });
      },
      /**
       * Measure the current viewport box with or without transforms.
       * Only measures axis-aligned boxes, rotate and skew must be manually
       * removed with a re-render to work.
       */
      measureViewportBox: function measureViewportBox(withTransform) {
        if (withTransform === void 0) {
          withTransform = true;
        }
        var viewportBox = _measureViewportBox(instance, options);
        if (!withTransform) Object(_utils_geometry_delta_apply_js__WEBPACK_IMPORTED_MODULE_6__["removeBoxTransforms"])(viewportBox, latestValues);
        return viewportBox;
      },
      /**
       * Get the motion values tracking the layout animations on each
       * axis. Lazy init if not already created.
       */
      getProjectionAnimationProgress: function getProjectionAnimationProgress() {
        projectionTargetProgress || (projectionTargetProgress = {
          x: Object(_value_index_js__WEBPACK_IMPORTED_MODULE_8__["motionValue"])(0),
          y: Object(_value_index_js__WEBPACK_IMPORTED_MODULE_8__["motionValue"])(0)
        });
        return projectionTargetProgress;
      },
      /**
       * Update the projection of a single axis. Schedule an update to
       * the tree layout projection.
       */
      setProjectionTargetAxis: function setProjectionTargetAxis(axis, min, max, isRelative) {
        if (isRelative === void 0) {
          isRelative = false;
        }
        var target;
        if (isRelative) {
          if (!projection.relativeTarget) {
            projection.relativeTarget = Object(_utils_geometry_index_js__WEBPACK_IMPORTED_MODULE_5__["axisBox"])();
          }
          target = projection.relativeTarget[axis];
        } else {
          projection.relativeTarget = undefined;
          target = projection.target[axis];
        }
        projection.isHydrated = true;
        target.min = min;
        target.max = max;
        // Flag that we want to fire the onViewportBoxUpdate event handler
        hasViewportBoxUpdated = true;
        lifecycles.notifySetAxisTarget();
      },
      /**
       * Rebase the projection target on top of the provided viewport box
       * or the measured layout. This ensures that non-animating elements
       * don't fall out of sync differences in measurements vs projections
       * after a page scroll or other relayout.
       */
      rebaseProjectionTarget: function rebaseProjectionTarget(force, box) {
        if (box === void 0) {
          box = layoutState.layout;
        }
        var _a = element.getProjectionAnimationProgress(),
          x = _a.x,
          y = _a.y;
        var shouldRebase = !projection.relativeTarget && !projection.isTargetLocked && !x.isAnimating() && !y.isAnimating();
        if (force || shouldRebase) {
          Object(_utils_each_axis_js__WEBPACK_IMPORTED_MODULE_4__["eachAxis"])(function (axis) {
            var _a = box[axis],
              min = _a.min,
              max = _a.max;
            element.setProjectionTargetAxis(axis, min, max);
          });
        }
      },
      /**
       * Notify the visual element that its layout is up-to-date.
       * Currently Animate.tsx uses this to check whether a layout animation
       * needs to be performed.
       */
      notifyLayoutReady: function notifyLayoutReady(config) {
        Object(_dom_projection_relative_set_js__WEBPACK_IMPORTED_MODULE_18__["setCurrentViewportBox"])(element);
        element.notifyLayoutUpdate(layoutState.layout, element.prevViewportBox || layoutState.layout, config);
      },
      /**
       * Temporarily reset the transform of the instance.
       */
      resetTransform: function resetTransform() {
        return _resetTransform(element, instance, props);
      },
      restoreTransform: function restoreTransform() {
        return _restoreTransform(instance, renderState);
      },
      updateLayoutProjection: updateLayoutProjection,
      updateTreeLayoutProjection: function updateTreeLayoutProjection() {
        element.layoutTree.forEach(fireResolveRelativeTargetBox);
        /**
         * Schedule the projection updates at the end of the current preRender
         * step. This will ensure that all layout trees will first resolve
         * relative projection boxes into viewport boxes, and *then*
         * update projections.
         */
        framesync__WEBPACK_IMPORTED_MODULE_1__["default"].preRender(_updateTreeLayoutProjection, false, true);
        // sync.postRender(() => element.scheduleUpdateLayoutProjection())
      },
      getProjectionParent: function getProjectionParent() {
        if (projectionParent === undefined) {
          var foundParent = false;
          // Search backwards through the tree path
          for (var i = element.path.length - 1; i >= 0; i--) {
            var ancestor = element.path[i];
            if (ancestor.projection.isEnabled) {
              foundParent = ancestor;
              break;
            }
          }
          projectionParent = foundParent;
        }
        return projectionParent;
      },
      resolveRelativeTargetBox: function resolveRelativeTargetBox() {
        var relativeParent = element.getProjectionParent();
        if (!projection.relativeTarget || !relativeParent) return;
        Object(_utils_geometry_delta_calc_js__WEBPACK_IMPORTED_MODULE_7__["calcRelativeBox"])(projection, relativeParent.projection);
        if (Object(_utils_is_draggable_js__WEBPACK_IMPORTED_MODULE_19__["isDraggable"])(relativeParent)) {
          var target = projection.target;
          Object(_utils_geometry_delta_apply_js__WEBPACK_IMPORTED_MODULE_6__["applyBoxTransforms"])(target, target, relativeParent.getLatestValues());
        }
      },
      shouldResetTransform: function shouldResetTransform() {
        return Boolean(props._layoutResetTransform);
      },
      /**
       *
       */
      pointTo: function pointTo(newLead) {
        leadProjection = newLead.projection;
        leadLatestValues = newLead.getLatestValues();
        /**
         * Subscribe to lead component's layout animations
         */
        unsubscribeFromLeadVisualElement === null || unsubscribeFromLeadVisualElement === void 0 ? void 0 : unsubscribeFromLeadVisualElement();
        unsubscribeFromLeadVisualElement = Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["pipe"])(newLead.onSetAxisTarget(element.scheduleUpdateLayoutProjection), newLead.onLayoutAnimationComplete(function () {
          var _a;
          if (element.isPresent) {
            element.presence = _components_AnimateSharedLayout_types_js__WEBPACK_IMPORTED_MODULE_3__["Presence"].Present;
          } else {
            (_a = element.layoutSafeToRemove) === null || _a === void 0 ? void 0 : _a.call(element);
          }
        }));
      },
      // TODO: Clean this up
      isPresent: true,
      presence: _components_AnimateSharedLayout_types_js__WEBPACK_IMPORTED_MODULE_3__["Presence"].Entering
    });
    return element;
  };
};
function fireResolveRelativeTargetBox(child) {
  child.resolveRelativeTargetBox();
}
function fireUpdateLayoutProjection(child) {
  child.updateLayoutProjection();
}
var variantProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])(["initial"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_utils_animation_state_js__WEBPACK_IMPORTED_MODULE_11__["variantPriorityOrder"]));
var numVariantProps = variantProps.length;


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/svg/config-motion.js":
/*!************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/svg/config-motion.js ***!
  \************************************************************************/
/*! exports provided: svgMotionConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "svgMotionConfig", function() { return svgMotionConfig; });
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/render.js */ "./node_modules/framer-motion/dist/es/render/svg/utils/render.js");
/* harmony import */ var _utils_scrape_motion_values_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/scrape-motion-values.js */ "./node_modules/framer-motion/dist/es/render/svg/utils/scrape-motion-values.js");
/* harmony import */ var _motion_utils_use_visual_state_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../motion/utils/use-visual-state.js */ "./node_modules/framer-motion/dist/es/motion/utils/use-visual-state.js");
/* harmony import */ var _utils_create_render_state_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/create-render-state.js */ "./node_modules/framer-motion/dist/es/render/svg/utils/create-render-state.js");
/* harmony import */ var _utils_build_attrs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/build-attrs.js */ "./node_modules/framer-motion/dist/es/render/svg/utils/build-attrs.js");





var svgMotionConfig = {
  useVisualState: Object(_motion_utils_use_visual_state_js__WEBPACK_IMPORTED_MODULE_2__["makeUseVisualState"])({
    scrapeMotionValuesFromProps: _utils_scrape_motion_values_js__WEBPACK_IMPORTED_MODULE_1__["scrapeMotionValuesFromProps"],
    createRenderState: _utils_create_render_state_js__WEBPACK_IMPORTED_MODULE_3__["createSvgRenderState"],
    onMount: function onMount(props, instance, _a) {
      var renderState = _a.renderState,
        latestValues = _a.latestValues;
      try {
        renderState.dimensions = typeof instance.getBBox === "function" ? instance.getBBox() : instance.getBoundingClientRect();
      } catch (e) {
        // Most likely trying to measure an unrendered element under Firefox
        renderState.dimensions = {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        };
      }
      if (isPath(instance)) {
        renderState.totalPathLength = instance.getTotalLength();
      }
      Object(_utils_build_attrs_js__WEBPACK_IMPORTED_MODULE_4__["buildSVGAttrs"])(renderState, latestValues, undefined, undefined, {
        enableHardwareAcceleration: false
      }, props.transformTemplate);
      // TODO: Replace with direct assignment
      Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_0__["renderSVG"])(instance, renderState);
    }
  })
};
function isPath(element) {
  return element.tagName === "path";
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/svg/lowercase-elements.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/svg/lowercase-elements.js ***!
  \*****************************************************************************/
/*! exports provided: lowercaseSVGElements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lowercaseSVGElements", function() { return lowercaseSVGElements; });
/**
 * We keep these listed seperately as we use the lowercase tag names as part
 * of the runtime bundle to detect SVG components
 */
var lowercaseSVGElements = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "svg", "switch", "symbol", "text", "tspan", "use", "view"];


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/svg/use-props.js":
/*!********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/svg/use-props.js ***!
  \********************************************************************/
/*! exports provided: useSVGProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSVGProps", function() { return useSVGProps; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _html_use_props_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../html/use-props.js */ "./node_modules/framer-motion/dist/es/render/html/use-props.js");
/* harmony import */ var _utils_build_attrs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/build-attrs.js */ "./node_modules/framer-motion/dist/es/render/svg/utils/build-attrs.js");
/* harmony import */ var _utils_create_render_state_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/create-render-state.js */ "./node_modules/framer-motion/dist/es/render/svg/utils/create-render-state.js");





function useSVGProps(props, visualState) {
  var visualProps = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    var state = Object(_utils_create_render_state_js__WEBPACK_IMPORTED_MODULE_4__["createSvgRenderState"])();
    Object(_utils_build_attrs_js__WEBPACK_IMPORTED_MODULE_3__["buildSVGAttrs"])(state, visualState, undefined, undefined, {
      enableHardwareAcceleration: false
    }, props.transformTemplate);
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state.attrs), {
      style: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state.style)
    });
  }, [visualState]);
  if (props.style) {
    var rawStyles = {};
    Object(_html_use_props_js__WEBPACK_IMPORTED_MODULE_2__["copyRawValuesOnly"])(rawStyles, props.style, props);
    visualProps.style = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, rawStyles), visualProps.style);
  }
  return visualProps;
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/svg/utils/build-attrs.js":
/*!****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/svg/utils/build-attrs.js ***!
  \****************************************************************************/
/*! exports provided: buildSVGAttrs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildSVGAttrs", function() { return buildSVGAttrs; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _html_utils_build_styles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../html/utils/build-styles.js */ "./node_modules/framer-motion/dist/es/render/html/utils/build-styles.js");
/* harmony import */ var _transform_origin_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transform-origin.js */ "./node_modules/framer-motion/dist/es/render/svg/utils/transform-origin.js");
/* harmony import */ var _path_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./path.js */ "./node_modules/framer-motion/dist/es/render/svg/utils/path.js");





/**
 * Build SVG visual attrbutes, like cx and style.transform
 */
function buildSVGAttrs(state, _a, projection, layoutState, options, transformTemplate, buildProjectionTransform, buildProjectionTransformOrigin) {
  var attrX = _a.attrX,
    attrY = _a.attrY,
    originX = _a.originX,
    originY = _a.originY,
    pathLength = _a.pathLength,
    _b = _a.pathSpacing,
    pathSpacing = _b === void 0 ? 1 : _b,
    _c = _a.pathOffset,
    pathOffset = _c === void 0 ? 0 : _c,
    // This is object creation, which we try to avoid per-frame.
    latest = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["attrX", "attrY", "originX", "originY", "pathLength", "pathSpacing", "pathOffset"]);
  Object(_html_utils_build_styles_js__WEBPACK_IMPORTED_MODULE_1__["buildHTMLStyles"])(state, latest, projection, layoutState, options, transformTemplate, buildProjectionTransform, buildProjectionTransformOrigin);
  state.attrs = state.style;
  state.style = {};
  var attrs = state.attrs,
    style = state.style,
    dimensions = state.dimensions,
    totalPathLength = state.totalPathLength;
  /**
   * However, we apply transforms as CSS transforms. So if we detect a transform we take it from attrs
   * and copy it into style.
   */
  if (attrs.transform) {
    if (dimensions) style.transform = attrs.transform;
    delete attrs.transform;
  }
  // Parse transformOrigin
  if (dimensions && (originX !== undefined || originY !== undefined || style.transform)) {
    style.transformOrigin = Object(_transform_origin_js__WEBPACK_IMPORTED_MODULE_2__["calcSVGTransformOrigin"])(dimensions, originX !== undefined ? originX : 0.5, originY !== undefined ? originY : 0.5);
  }
  // Treat x/y not as shortcuts but as actual attributes
  if (attrX !== undefined) attrs.x = attrX;
  if (attrY !== undefined) attrs.y = attrY;
  // Build SVG path if one has been measured
  if (totalPathLength !== undefined && pathLength !== undefined) {
    Object(_path_js__WEBPACK_IMPORTED_MODULE_3__["buildSVGPath"])(attrs, totalPathLength, pathLength, pathSpacing, pathOffset, false);
  }
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/svg/utils/camel-case-attrs.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/svg/utils/camel-case-attrs.js ***!
  \*********************************************************************************/
/*! exports provided: camelCaseAttributes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "camelCaseAttributes", function() { return camelCaseAttributes; });
/**
 * A set of attribute names that are always read/written as camel case.
 */
var camelCaseAttributes = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform"]);


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/svg/utils/create-render-state.js":
/*!************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/svg/utils/create-render-state.js ***!
  \************************************************************************************/
/*! exports provided: createSvgRenderState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSvgRenderState", function() { return createSvgRenderState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _html_utils_create_render_state_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../html/utils/create-render-state.js */ "./node_modules/framer-motion/dist/es/render/html/utils/create-render-state.js");


var createSvgRenderState = function createSvgRenderState() {
  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, Object(_html_utils_create_render_state_js__WEBPACK_IMPORTED_MODULE_1__["createHtmlRenderState"])()), {
    attrs: {}
  });
};


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/svg/utils/path.js":
/*!*********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/svg/utils/path.js ***!
  \*********************************************************************/
/*! exports provided: buildSVGPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildSVGPath", function() { return buildSVGPath; });
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/index.js");


// Convert a progress 0-1 to a pixels value based on the provided length
var progressToPixels = function progressToPixels(progress, length) {
  return style_value_types__WEBPACK_IMPORTED_MODULE_0__["px"].transform(progress * length);
};
var dashKeys = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
};
var camelKeys = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
/**
 * Build SVG path properties. Uses the path's measured length to convert
 * our custom pathLength, pathSpacing and pathOffset into stroke-dashoffset
 * and stroke-dasharray attributes.
 *
 * This function is mutative to reduce per-frame GC.
 */
function buildSVGPath(attrs, totalLength, length, spacing, offset, useDashCase) {
  if (spacing === void 0) {
    spacing = 1;
  }
  if (offset === void 0) {
    offset = 0;
  }
  if (useDashCase === void 0) {
    useDashCase = true;
  }
  // We use dash case when setting attributes directly to the DOM node and camel case
  // when defining props on a React component.
  var keys = useDashCase ? dashKeys : camelKeys;
  // Build the dash offset
  attrs[keys.offset] = progressToPixels(-offset, totalLength);
  // Build the dash array
  var pathLength = progressToPixels(length, totalLength);
  var pathSpacing = progressToPixels(spacing, totalLength);
  attrs[keys.array] = pathLength + " " + pathSpacing;
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/svg/utils/render.js":
/*!***********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/svg/utils/render.js ***!
  \***********************************************************************/
/*! exports provided: renderSVG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderSVG", function() { return renderSVG; });
/* harmony import */ var _dom_utils_camel_to_dash_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dom/utils/camel-to-dash.js */ "./node_modules/framer-motion/dist/es/render/dom/utils/camel-to-dash.js");
/* harmony import */ var _html_utils_render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../html/utils/render.js */ "./node_modules/framer-motion/dist/es/render/html/utils/render.js");
/* harmony import */ var _camel_case_attrs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./camel-case-attrs.js */ "./node_modules/framer-motion/dist/es/render/svg/utils/camel-case-attrs.js");



function renderSVG(element, renderState) {
  Object(_html_utils_render_js__WEBPACK_IMPORTED_MODULE_1__["renderHTML"])(element, renderState);
  for (var key in renderState.attrs) {
    element.setAttribute(!_camel_case_attrs_js__WEBPACK_IMPORTED_MODULE_2__["camelCaseAttributes"].has(key) ? Object(_dom_utils_camel_to_dash_js__WEBPACK_IMPORTED_MODULE_0__["camelToDash"])(key) : key, renderState.attrs[key]);
  }
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/svg/utils/scrape-motion-values.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/svg/utils/scrape-motion-values.js ***!
  \*************************************************************************************/
/*! exports provided: scrapeMotionValuesFromProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrapeMotionValuesFromProps", function() { return scrapeMotionValuesFromProps; });
/* harmony import */ var _value_utils_is_motion_value_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../value/utils/is-motion-value.js */ "./node_modules/framer-motion/dist/es/value/utils/is-motion-value.js");
/* harmony import */ var _html_utils_scrape_motion_values_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../html/utils/scrape-motion-values.js */ "./node_modules/framer-motion/dist/es/render/html/utils/scrape-motion-values.js");


function scrapeMotionValuesFromProps(props) {
  var newValues = Object(_html_utils_scrape_motion_values_js__WEBPACK_IMPORTED_MODULE_1__["scrapeMotionValuesFromProps"])(props);
  for (var key in props) {
    if (Object(_value_utils_is_motion_value_js__WEBPACK_IMPORTED_MODULE_0__["isMotionValue"])(props[key])) {
      var targetKey = key === "x" || key === "y" ? "attr" + key.toUpperCase() : key;
      newValues[targetKey] = props[key];
    }
  }
  return newValues;
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/svg/utils/transform-origin.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/svg/utils/transform-origin.js ***!
  \*********************************************************************************/
/*! exports provided: calcSVGTransformOrigin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcSVGTransformOrigin", function() { return calcSVGTransformOrigin; });
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/index.js");

function calcOrigin(origin, offset, size) {
  return typeof origin === "string" ? origin : style_value_types__WEBPACK_IMPORTED_MODULE_0__["px"].transform(offset + size * origin);
}
/**
 * The SVG transform origin defaults are different to CSS and is less intuitive,
 * so we use the measured dimensions of the SVG to reconcile these.
 */
function calcSVGTransformOrigin(dimensions, originX, originY) {
  var pxOriginX = calcOrigin(originX, dimensions.x, dimensions.width);
  var pxOriginY = calcOrigin(originY, dimensions.y, dimensions.height);
  return pxOriginX + " " + pxOriginY;
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/svg/visual-element.js":
/*!*************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/svg/visual-element.js ***!
  \*************************************************************************/
/*! exports provided: svgVisualElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "svgVisualElement", function() { return svgVisualElement; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.js */ "./node_modules/framer-motion/dist/es/render/index.js");
/* harmony import */ var _utils_scrape_motion_values_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/scrape-motion-values.js */ "./node_modules/framer-motion/dist/es/render/svg/utils/scrape-motion-values.js");
/* harmony import */ var _html_visual_element_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../html/visual-element.js */ "./node_modules/framer-motion/dist/es/render/html/visual-element.js");
/* harmony import */ var _utils_build_attrs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/build-attrs.js */ "./node_modules/framer-motion/dist/es/render/svg/utils/build-attrs.js");
/* harmony import */ var _dom_utils_camel_to_dash_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dom/utils/camel-to-dash.js */ "./node_modules/framer-motion/dist/es/render/dom/utils/camel-to-dash.js");
/* harmony import */ var _utils_camel_case_attrs_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/camel-case-attrs.js */ "./node_modules/framer-motion/dist/es/render/svg/utils/camel-case-attrs.js");
/* harmony import */ var _html_utils_transform_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../html/utils/transform.js */ "./node_modules/framer-motion/dist/es/render/html/utils/transform.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/render.js */ "./node_modules/framer-motion/dist/es/render/svg/utils/render.js");
/* harmony import */ var _dom_value_types_defaults_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../dom/value-types/defaults.js */ "./node_modules/framer-motion/dist/es/render/dom/value-types/defaults.js");
/* harmony import */ var _html_utils_build_projection_transform_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../html/utils/build-projection-transform.js */ "./node_modules/framer-motion/dist/es/render/html/utils/build-projection-transform.js");











var svgVisualElement = Object(_index_js__WEBPACK_IMPORTED_MODULE_1__["visualElement"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _html_visual_element_js__WEBPACK_IMPORTED_MODULE_3__["htmlConfig"]), {
  getBaseTarget: function getBaseTarget(props, key) {
    return props[key];
  },
  readValueFromInstance: function readValueFromInstance(domElement, key) {
    var _a;
    if (Object(_html_utils_transform_js__WEBPACK_IMPORTED_MODULE_7__["isTransformProp"])(key)) {
      return ((_a = Object(_dom_value_types_defaults_js__WEBPACK_IMPORTED_MODULE_9__["getDefaultValueType"])(key)) === null || _a === void 0 ? void 0 : _a["default"]) || 0;
    }
    key = !_utils_camel_case_attrs_js__WEBPACK_IMPORTED_MODULE_6__["camelCaseAttributes"].has(key) ? Object(_dom_utils_camel_to_dash_js__WEBPACK_IMPORTED_MODULE_5__["camelToDash"])(key) : key;
    return domElement.getAttribute(key);
  },
  scrapeMotionValuesFromProps: _utils_scrape_motion_values_js__WEBPACK_IMPORTED_MODULE_2__["scrapeMotionValuesFromProps"],
  build: function build(_element, renderState, latestValues, projection, layoutState, options, props) {
    var isProjectionTranform = projection.isEnabled && layoutState.isHydrated;
    Object(_utils_build_attrs_js__WEBPACK_IMPORTED_MODULE_4__["buildSVGAttrs"])(renderState, latestValues, projection, layoutState, options, props.transformTemplate, isProjectionTranform ? _html_utils_build_projection_transform_js__WEBPACK_IMPORTED_MODULE_10__["buildLayoutProjectionTransform"] : undefined, isProjectionTranform ? _html_utils_build_projection_transform_js__WEBPACK_IMPORTED_MODULE_10__["buildLayoutProjectionTransformOrigin"] : undefined);
  },
  render: _utils_render_js__WEBPACK_IMPORTED_MODULE_8__["renderSVG"]
}));


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/utils/animation-state.js":
/*!****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/utils/animation-state.js ***!
  \****************************************************************************/
/*! exports provided: createAnimationState, variantPriorityOrder, variantsHaveChanged */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAnimationState", function() { return createAnimationState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "variantPriorityOrder", function() { return variantPriorityOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "variantsHaveChanged", function() { return variantsHaveChanged; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _animation_utils_is_animation_controls_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../animation/utils/is-animation-controls.js */ "./node_modules/framer-motion/dist/es/animation/utils/is-animation-controls.js");
/* harmony import */ var _animation_utils_is_keyframes_target_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../animation/utils/is-keyframes-target.js */ "./node_modules/framer-motion/dist/es/animation/utils/is-keyframes-target.js");
/* harmony import */ var _utils_shallow_compare_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/shallow-compare.js */ "./node_modules/framer-motion/dist/es/utils/shallow-compare.js");
/* harmony import */ var _animation_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./animation.js */ "./node_modules/framer-motion/dist/es/render/utils/animation.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./types.js */ "./node_modules/framer-motion/dist/es/render/utils/types.js");
/* harmony import */ var _variants_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./variants.js */ "./node_modules/framer-motion/dist/es/render/utils/variants.js");







var variantPriorityOrder = [_types_js__WEBPACK_IMPORTED_MODULE_5__["AnimationType"].Animate, _types_js__WEBPACK_IMPORTED_MODULE_5__["AnimationType"].Hover, _types_js__WEBPACK_IMPORTED_MODULE_5__["AnimationType"].Tap, _types_js__WEBPACK_IMPORTED_MODULE_5__["AnimationType"].Drag, _types_js__WEBPACK_IMPORTED_MODULE_5__["AnimationType"].Focus, _types_js__WEBPACK_IMPORTED_MODULE_5__["AnimationType"].Exit];
var reversePriorityOrder = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(variantPriorityOrder)).reverse();
var numAnimationTypes = variantPriorityOrder.length;
function animateList(visualElement) {
  return function (animations) {
    return Promise.all(animations.map(function (_a) {
      var animation = _a.animation,
        options = _a.options;
      return Object(_animation_js__WEBPACK_IMPORTED_MODULE_4__["animateVisualElement"])(visualElement, animation, options);
    }));
  };
}
function createAnimationState(visualElement) {
  var animate = animateList(visualElement);
  var state = createState();
  var allAnimatedKeys = {};
  var isInitialRender = true;
  /**
   * This function will be used to reduce the animation definitions for
   * each active animation type into an object of resolved values for it.
   */
  var buildResolvedTypeValues = function buildResolvedTypeValues(acc, definition) {
    var resolved = Object(_variants_js__WEBPACK_IMPORTED_MODULE_6__["resolveVariant"])(visualElement, definition);
    if (resolved) {
      resolved.transition;
      var transitionEnd = resolved.transitionEnd,
        target = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(resolved, ["transition", "transitionEnd"]);
      acc = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, acc), target), transitionEnd);
    }
    return acc;
  };
  function isAnimated(key) {
    return allAnimatedKeys[key] !== undefined;
  }
  /**
   * This just allows us to inject mocked animation functions
   * @internal
   */
  function setAnimateFunction(makeAnimator) {
    animate = makeAnimator(visualElement);
  }
  /**
   * When we receive new props, we need to:
   * 1. Create a list of protected keys for each type. This is a directory of
   *    value keys that are currently being "handled" by types of a higher priority
   *    so that whenever an animation is played of a given type, these values are
   *    protected from being animated.
   * 2. Determine if an animation type needs animating.
   * 3. Determine if any values have been removed from a type and figure out
   *    what to animate those to.
   */
  function animateChanges(options, changedActiveType) {
    var _a;
    var props = visualElement.getProps();
    var context = visualElement.getVariantContext(true) || {};
    /**
     * A list of animations that we'll build into as we iterate through the animation
     * types. This will get executed at the end of the function.
     */
    var animations = [];
    /**
     * Keep track of which values have been removed. Then, as we hit lower priority
     * animation types, we can check if they contain removed values and animate to that.
     */
    var removedKeys = new Set();
    /**
     * A dictionary of all encountered keys. This is an object to let us build into and
     * copy it without iteration. Each time we hit an animation type we set its protected
     * keys - the keys its not allowed to animate - to the latest version of this object.
     */
    var encounteredKeys = {};
    /**
     * If a variant has been removed at a given index, and this component is controlling
     * variant animations, we want to ensure lower-priority variants are forced to animate.
     */
    var removedVariantIndex = Infinity;
    var _loop_1 = function _loop_1(i) {
      var type = reversePriorityOrder[i];
      var typeState = state[type];
      var prop = (_a = props[type]) !== null && _a !== void 0 ? _a : context[type];
      var propIsVariant = Object(_variants_js__WEBPACK_IMPORTED_MODULE_6__["isVariantLabel"])(prop);
      /**
       * If this type has *just* changed isActive status, set activeDelta
       * to that status. Otherwise set to null.
       */
      var activeDelta = type === changedActiveType ? typeState.isActive : null;
      if (activeDelta === false) removedVariantIndex = i;
      /**
       * If this prop is an inherited variant, rather than been set directly on the
       * component itself, we want to make sure we allow the parent to trigger animations.
       *
       * TODO: Can probably change this to a !isControllingVariants check
       */
      var isInherited = prop === context[type] && prop !== props[type] && propIsVariant;
      /**
       *
       */
      if (isInherited && isInitialRender && visualElement.manuallyAnimateOnMount) {
        isInherited = false;
      }
      /**
       * Set all encountered keys so far as the protected keys for this type. This will
       * be any key that has been animated or otherwise handled by active, higher-priortiy types.
       */
      typeState.protectedKeys = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, encounteredKeys);
      // Check if we can skip analysing this prop early
      if (
      // If it isn't active and hasn't *just* been set as inactive
      !typeState.isActive && activeDelta === null ||
      // If we didn't and don't have any defined prop for this animation type
      !prop && !typeState.prevProp ||
      // Or if the prop doesn't define an animation
      Object(_animation_utils_is_animation_controls_js__WEBPACK_IMPORTED_MODULE_1__["isAnimationControls"])(prop) || typeof prop === "boolean") {
        return "continue";
      }
      /**
       * As we go look through the values defined on this type, if we detect
       * a changed value or a value that was removed in a higher priority, we set
       * this to true and add this prop to the animation list.
       */
      var shouldAnimateType = variantsHaveChanged(typeState.prevProp, prop) ||
      // If we're making this variant active, we want to always make it active
      type === changedActiveType && typeState.isActive && !isInherited && propIsVariant ||
      // If we removed a higher-priority variant (i is in reverse order)
      i > removedVariantIndex && propIsVariant;
      /**
       * As animations can be set as variant lists, variants or target objects, we
       * coerce everything to an array if it isn't one already
       */
      var definitionList = Array.isArray(prop) ? prop : [prop];
      /**
       * Build an object of all the resolved values. We'll use this in the subsequent
       * animateChanges calls to determine whether a value has changed.
       */
      var resolvedValues = definitionList.reduce(buildResolvedTypeValues, {});
      if (activeDelta === false) resolvedValues = {};
      /**
       * Now we need to loop through all the keys in the prev prop and this prop,
       * and decide:
       * 1. If the value has changed, and needs animating
       * 2. If it has been removed, and needs adding to the removedKeys set
       * 3. If it has been removed in a higher priority type and needs animating
       * 4. If it hasn't been removed in a higher priority but hasn't changed, and
       *    needs adding to the type's protectedKeys list.
       */
      var _b = typeState.prevResolvedValues,
        prevResolvedValues = _b === void 0 ? {} : _b;
      var allKeys = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, prevResolvedValues), resolvedValues);
      var markToAnimate = function markToAnimate(key) {
        shouldAnimateType = true;
        removedKeys["delete"](key);
        typeState.needsAnimating[key] = true;
      };
      for (var key in allKeys) {
        var next = resolvedValues[key];
        var prev = prevResolvedValues[key];
        // If we've already handled this we can just skip ahead
        if (encounteredKeys.hasOwnProperty(key)) continue;
        /**
         * If the value has changed, we probably want to animate it.
         */
        if (next !== prev) {
          /**
           * If both values are keyframes, we need to shallow compare them to
           * detect whether any value has changed. If it has, we animate it.
           */
          if (Object(_animation_utils_is_keyframes_target_js__WEBPACK_IMPORTED_MODULE_2__["isKeyframesTarget"])(next) && Object(_animation_utils_is_keyframes_target_js__WEBPACK_IMPORTED_MODULE_2__["isKeyframesTarget"])(prev)) {
            if (!Object(_utils_shallow_compare_js__WEBPACK_IMPORTED_MODULE_3__["shallowCompare"])(next, prev)) {
              markToAnimate(key);
            } else {
              /**
               * If it hasn't changed, we want to ensure it doesn't animate by
               * adding it to the list of protected keys.
               */
              typeState.protectedKeys[key] = true;
            }
          } else if (next !== undefined) {
            // If next is defined and doesn't equal prev, it needs animating
            markToAnimate(key);
          } else {
            // If it's undefined, it's been removed.
            removedKeys.add(key);
          }
        } else if (next !== undefined && removedKeys.has(key)) {
          /**
           * If next hasn't changed and it isn't undefined, we want to check if it's
           * been removed by a higher priority
           */
          markToAnimate(key);
        } else {
          /**
           * If it hasn't changed, we add it to the list of protected values
           * to ensure it doesn't get animated.
           */
          typeState.protectedKeys[key] = true;
        }
      }
      /**
       * Update the typeState so next time animateChanges is called we can compare the
       * latest prop and resolvedValues to these.
       */
      typeState.prevProp = prop;
      typeState.prevResolvedValues = resolvedValues;
      /**
       *
       */
      if (typeState.isActive) {
        encounteredKeys = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, encounteredKeys), resolvedValues);
      }
      if (isInitialRender && visualElement.blockInitialAnimation) {
        shouldAnimateType = false;
      }
      /**
       * If this is an inherited prop we want to hard-block animations
       * TODO: Test as this should probably still handle animations triggered
       * by removed values?
       */
      if (shouldAnimateType && !isInherited) {
        animations.push.apply(animations, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(definitionList.map(function (animation) {
          return {
            animation: animation,
            options: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({
              type: type
            }, options)
          };
        }))));
      }
    };
    /**
     * Iterate through all animation types in reverse priority order. For each, we want to
     * detect which values it's handling and whether or not they've changed (and therefore
     * need to be animated). If any values have been removed, we want to detect those in
     * lower priority props and flag for animation.
     */
    for (var i = 0; i < numAnimationTypes; i++) {
      _loop_1(i);
    }
    allAnimatedKeys = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, encounteredKeys);
    /**
     * If there are some removed value that haven't been dealt with,
     * we need to create a new animation that falls back either to the value
     * defined in the style prop, or the last read value.
     */
    if (removedKeys.size) {
      var fallbackAnimation_1 = {};
      removedKeys.forEach(function (key) {
        var fallbackTarget = visualElement.getBaseTarget(key);
        if (fallbackTarget !== undefined) {
          fallbackAnimation_1[key] = fallbackTarget;
        }
      });
      animations.push({
        animation: fallbackAnimation_1
      });
    }
    var shouldAnimate = Boolean(animations.length);
    if (isInitialRender && props.initial === false && !visualElement.manuallyAnimateOnMount) {
      shouldAnimate = false;
    }
    isInitialRender = false;
    return shouldAnimate ? animate(animations) : Promise.resolve();
  }
  /**
   * Change whether a certain animation type is active.
   */
  function setActive(type, isActive, options) {
    var _a;
    // If the active state hasn't changed, we can safely do nothing here
    if (state[type].isActive === isActive) return Promise.resolve();
    // Propagate active change to children
    (_a = visualElement.variantChildren) === null || _a === void 0 ? void 0 : _a.forEach(function (child) {
      var _a;
      return (_a = child.animationState) === null || _a === void 0 ? void 0 : _a.setActive(type, isActive);
    });
    state[type].isActive = isActive;
    return animateChanges(options, type);
  }
  return {
    isAnimated: isAnimated,
    animateChanges: animateChanges,
    setActive: setActive,
    setAnimateFunction: setAnimateFunction,
    getState: function getState() {
      return state;
    }
  };
}
function variantsHaveChanged(prev, next) {
  if (typeof next === "string") {
    return next !== prev;
  } else if (Object(_variants_js__WEBPACK_IMPORTED_MODULE_6__["isVariantLabels"])(next)) {
    return !Object(_utils_shallow_compare_js__WEBPACK_IMPORTED_MODULE_3__["shallowCompare"])(next, prev);
  }
  return false;
}
function createTypeState(isActive) {
  if (isActive === void 0) {
    isActive = false;
  }
  return {
    isActive: isActive,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function createState() {
  var _a;
  return _a = {}, _a[_types_js__WEBPACK_IMPORTED_MODULE_5__["AnimationType"].Animate] = createTypeState(true), _a[_types_js__WEBPACK_IMPORTED_MODULE_5__["AnimationType"].Hover] = createTypeState(), _a[_types_js__WEBPACK_IMPORTED_MODULE_5__["AnimationType"].Tap] = createTypeState(), _a[_types_js__WEBPACK_IMPORTED_MODULE_5__["AnimationType"].Drag] = createTypeState(), _a[_types_js__WEBPACK_IMPORTED_MODULE_5__["AnimationType"].Focus] = createTypeState(), _a[_types_js__WEBPACK_IMPORTED_MODULE_5__["AnimationType"].Exit] = createTypeState(), _a;
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/utils/animation.js":
/*!**********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/utils/animation.js ***!
  \**********************************************************************/
/*! exports provided: animateVisualElement, sortByTreeOrder, stopAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animateVisualElement", function() { return animateVisualElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortByTreeOrder", function() { return sortByTreeOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopAnimation", function() { return stopAnimation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _animation_utils_transitions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../animation/utils/transitions.js */ "./node_modules/framer-motion/dist/es/animation/utils/transitions.js");
/* harmony import */ var _setters_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setters.js */ "./node_modules/framer-motion/dist/es/render/utils/setters.js");
/* harmony import */ var _variants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./variants.js */ "./node_modules/framer-motion/dist/es/render/utils/variants.js");





/**
 * @internal
 */
function animateVisualElement(visualElement, definition, options) {
  if (options === void 0) {
    options = {};
  }
  visualElement.notifyAnimationStart();
  var animation;
  if (Array.isArray(definition)) {
    var animations = definition.map(function (variant) {
      return animateVariant(visualElement, variant, options);
    });
    animation = Promise.all(animations);
  } else if (typeof definition === "string") {
    animation = animateVariant(visualElement, definition, options);
  } else {
    var resolvedDefinition = typeof definition === "function" ? Object(_variants_js__WEBPACK_IMPORTED_MODULE_3__["resolveVariant"])(visualElement, definition, options.custom) : definition;
    animation = animateTarget(visualElement, resolvedDefinition, options);
  }
  return animation.then(function () {
    return visualElement.notifyAnimationComplete(definition);
  });
}
function animateVariant(visualElement, variant, options) {
  var _a;
  if (options === void 0) {
    options = {};
  }
  var resolved = Object(_variants_js__WEBPACK_IMPORTED_MODULE_3__["resolveVariant"])(visualElement, variant, options.custom);
  var _b = (resolved || {}).transition,
    transition = _b === void 0 ? visualElement.getDefaultTransition() || {} : _b;
  if (options.transitionOverride) {
    transition = options.transitionOverride;
  }
  /**
   * If we have a variant, create a callback that runs it as an animation.
   * Otherwise, we resolve a Promise immediately for a composable no-op.
   */
  var getAnimation = resolved ? function () {
    return animateTarget(visualElement, resolved, options);
  } : function () {
    return Promise.resolve();
  };
  /**
   * If we have children, create a callback that runs all their animations.
   * Otherwise, we resolve a Promise immediately for a composable no-op.
   */
  var getChildAnimations = ((_a = visualElement.variantChildren) === null || _a === void 0 ? void 0 : _a.size) ? function (forwardDelay) {
    if (forwardDelay === void 0) {
      forwardDelay = 0;
    }
    var _a = transition.delayChildren,
      delayChildren = _a === void 0 ? 0 : _a,
      staggerChildren = transition.staggerChildren,
      staggerDirection = transition.staggerDirection;
    return animateChildren(visualElement, variant, delayChildren + forwardDelay, staggerChildren, staggerDirection, options);
  } : function () {
    return Promise.resolve();
  };
  /**
   * If the transition explicitly defines a "when" option, we need to resolve either
   * this animation or all children animations before playing the other.
   */
  var when = transition.when;
  if (when) {
    var _c = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(when === "beforeChildren" ? [getAnimation, getChildAnimations] : [getChildAnimations, getAnimation], 2),
      first = _c[0],
      last = _c[1];
    return first().then(last);
  } else {
    return Promise.all([getAnimation(), getChildAnimations(options.delay)]);
  }
}
/**
 * @internal
 */
function animateTarget(visualElement, definition, _a) {
  var _b;
  var _c = _a === void 0 ? {} : _a,
    _d = _c.delay,
    delay = _d === void 0 ? 0 : _d,
    transitionOverride = _c.transitionOverride,
    type = _c.type;
  var _e = visualElement.makeTargetAnimatable(definition),
    _f = _e.transition,
    transition = _f === void 0 ? visualElement.getDefaultTransition() : _f,
    transitionEnd = _e.transitionEnd,
    target = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_e, ["transition", "transitionEnd"]);
  if (transitionOverride) transition = transitionOverride;
  var animations = [];
  var animationTypeState = type && ((_b = visualElement.animationState) === null || _b === void 0 ? void 0 : _b.getState()[type]);
  for (var key in target) {
    var value = visualElement.getValue(key);
    var valueTarget = target[key];
    if (!value || valueTarget === undefined || animationTypeState && shouldBlockAnimation(animationTypeState, key)) {
      continue;
    }
    var animation = Object(_animation_utils_transitions_js__WEBPACK_IMPORTED_MODULE_1__["startAnimation"])(key, value, valueTarget, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({
      delay: delay
    }, transition));
    animations.push(animation);
  }
  return Promise.all(animations).then(function () {
    transitionEnd && Object(_setters_js__WEBPACK_IMPORTED_MODULE_2__["setTarget"])(visualElement, transitionEnd);
  });
}
function animateChildren(visualElement, variant, delayChildren, staggerChildren, staggerDirection, options) {
  if (delayChildren === void 0) {
    delayChildren = 0;
  }
  if (staggerChildren === void 0) {
    staggerChildren = 0;
  }
  if (staggerDirection === void 0) {
    staggerDirection = 1;
  }
  var animations = [];
  var maxStaggerDuration = (visualElement.variantChildren.size - 1) * staggerChildren;
  var generateStaggerDuration = staggerDirection === 1 ? function (i) {
    if (i === void 0) {
      i = 0;
    }
    return i * staggerChildren;
  } : function (i) {
    if (i === void 0) {
      i = 0;
    }
    return maxStaggerDuration - i * staggerChildren;
  };
  Array.from(visualElement.variantChildren).sort(sortByTreeOrder).forEach(function (child, i) {
    animations.push(animateVariant(child, variant, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), {
      delay: delayChildren + generateStaggerDuration(i)
    })).then(function () {
      return child.notifyAnimationComplete(variant);
    }));
  });
  return Promise.all(animations);
}
function stopAnimation(visualElement) {
  visualElement.forEachValue(function (value) {
    return value.stop();
  });
}
function sortByTreeOrder(a, b) {
  return a.sortNodePosition(b);
}
/**
 * Decide whether we should block this animation. Previously, we achieved this
 * just by checking whether the key was listed in protectedKeys, but this
 * posed problems if an animation was triggered by afterChildren and protectedKeys
 * had been set to true in the meantime.
 */
function shouldBlockAnimation(_a, key) {
  var protectedKeys = _a.protectedKeys,
    needsAnimating = _a.needsAnimating;
  var shouldBlock = protectedKeys.hasOwnProperty(key) && needsAnimating[key] !== true;
  needsAnimating[key] = false;
  return shouldBlock;
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/utils/compare-by-depth.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/utils/compare-by-depth.js ***!
  \*****************************************************************************/
/*! exports provided: compareByDepth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareByDepth", function() { return compareByDepth; });
var compareByDepth = function compareByDepth(a, b) {
  return a.depth - b.depth;
};


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/utils/flat-tree.js":
/*!**********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/utils/flat-tree.js ***!
  \**********************************************************************/
/*! exports provided: FlatTree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlatTree", function() { return FlatTree; });
/* harmony import */ var _utils_array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/array.js */ "./node_modules/framer-motion/dist/es/utils/array.js");
/* harmony import */ var _compare_by_depth_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compare-by-depth.js */ "./node_modules/framer-motion/dist/es/render/utils/compare-by-depth.js");


var FlatTree = /** @class */function () {
  function FlatTree() {
    this.children = [];
    this.isDirty = false;
  }
  FlatTree.prototype.add = function (child) {
    Object(_utils_array_js__WEBPACK_IMPORTED_MODULE_0__["addUniqueItem"])(this.children, child);
    this.isDirty = true;
  };
  FlatTree.prototype.remove = function (child) {
    Object(_utils_array_js__WEBPACK_IMPORTED_MODULE_0__["removeItem"])(this.children, child);
    this.isDirty = true;
  };
  FlatTree.prototype.forEach = function (callback) {
    this.isDirty && this.children.sort(_compare_by_depth_js__WEBPACK_IMPORTED_MODULE_1__["compareByDepth"]);
    this.isDirty = false;
    this.children.forEach(callback);
  };
  return FlatTree;
}();


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/utils/is-draggable.js":
/*!*************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/utils/is-draggable.js ***!
  \*************************************************************************/
/*! exports provided: isDraggable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDraggable", function() { return isDraggable; });
function isDraggable(visualElement) {
  var _a = visualElement.getProps(),
    drag = _a.drag,
    _dragX = _a._dragX;
  return drag && !_dragX;
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/utils/lifecycles.js":
/*!***********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/utils/lifecycles.js ***!
  \***********************************************************************/
/*! exports provided: createLifecycles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLifecycles", function() { return createLifecycles; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utils_subscription_manager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/subscription-manager.js */ "./node_modules/framer-motion/dist/es/utils/subscription-manager.js");


var names = ["LayoutMeasure", "BeforeLayoutMeasure", "LayoutUpdate", "ViewportBoxUpdate", "Update", "Render", "AnimationComplete", "LayoutAnimationComplete", "AnimationStart", "SetAxisTarget", "Unmount"];
function createLifecycles() {
  var managers = names.map(function () {
    return new _utils_subscription_manager_js__WEBPACK_IMPORTED_MODULE_1__["SubscriptionManager"]();
  });
  var propSubscriptions = {};
  var lifecycles = {
    clearAllListeners: function clearAllListeners() {
      return managers.forEach(function (manager) {
        return manager.clear();
      });
    },
    updatePropListeners: function updatePropListeners(props) {
      return names.forEach(function (name) {
        var _a;
        (_a = propSubscriptions[name]) === null || _a === void 0 ? void 0 : _a.call(propSubscriptions);
        var on = "on" + name;
        var propListener = props[on];
        if (propListener) {
          propSubscriptions[name] = lifecycles[on](propListener);
        }
      });
    }
  };
  managers.forEach(function (manager, i) {
    lifecycles["on" + names[i]] = function (handler) {
      return manager.add(handler);
    };
    lifecycles["notify" + names[i]] = function () {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return manager.notify.apply(manager, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(args)));
    };
  });
  return lifecycles;
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/utils/motion-values.js":
/*!**************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/utils/motion-values.js ***!
  \**************************************************************************/
/*! exports provided: updateMotionValuesFromProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateMotionValuesFromProps", function() { return updateMotionValuesFromProps; });
/* harmony import */ var _value_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../value/index.js */ "./node_modules/framer-motion/dist/es/value/index.js");
/* harmony import */ var _value_utils_is_motion_value_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../value/utils/is-motion-value.js */ "./node_modules/framer-motion/dist/es/value/utils/is-motion-value.js");


function updateMotionValuesFromProps(element, next, prev) {
  var _a;
  for (var key in next) {
    var nextValue = next[key];
    var prevValue = prev[key];
    if (Object(_value_utils_is_motion_value_js__WEBPACK_IMPORTED_MODULE_1__["isMotionValue"])(nextValue)) {
      /**
       * If this is a motion value found in props or style, we want to add it
       * to our visual element's motion value map.
       */
      element.addValue(key, nextValue);
    } else if (Object(_value_utils_is_motion_value_js__WEBPACK_IMPORTED_MODULE_1__["isMotionValue"])(prevValue)) {
      /**
       * If we're swapping to a new motion value, create a new motion value
       * from that
       */
      element.addValue(key, Object(_value_index_js__WEBPACK_IMPORTED_MODULE_0__["motionValue"])(nextValue));
    } else if (prevValue !== nextValue) {
      /**
       * If this is a flat value that has changed, update the motion value
       * or create one if it doesn't exist. We only want to do this if we're
       * not handling the value with our animation state.
       */
      if (element.hasValue(key)) {
        var existingValue = element.getValue(key);
        // TODO: Only update values that aren't being animated or even looked at
        !existingValue.hasAnimated && existingValue.set(nextValue);
      } else {
        element.addValue(key, Object(_value_index_js__WEBPACK_IMPORTED_MODULE_0__["motionValue"])((_a = element.getStaticValue(key)) !== null && _a !== void 0 ? _a : nextValue));
      }
    }
  }
  // Handle removed values
  for (var key in prev) {
    if (next[key] === undefined) element.removeValue(key);
  }
  return next;
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/utils/projection.js":
/*!***********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/utils/projection.js ***!
  \***********************************************************************/
/*! exports provided: updateLayoutDeltas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateLayoutDeltas", function() { return updateLayoutDeltas; });
/* harmony import */ var _utils_geometry_delta_apply_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/geometry/delta-apply.js */ "./node_modules/framer-motion/dist/es/utils/geometry/delta-apply.js");
/* harmony import */ var _utils_geometry_delta_calc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/geometry/delta-calc.js */ "./node_modules/framer-motion/dist/es/utils/geometry/delta-calc.js");


function updateLayoutDeltas(_a, _b, treePath, transformOrigin) {
  var delta = _a.delta,
    layout = _a.layout,
    layoutCorrected = _a.layoutCorrected,
    treeScale = _a.treeScale;
  var target = _b.target;
  /**
   * Reset the corrected box with the latest values from box, as we're then going
   * to perform mutative operations on it.
   */
  Object(_utils_geometry_delta_apply_js__WEBPACK_IMPORTED_MODULE_0__["resetBox"])(layoutCorrected, layout);
  /**
   * Apply all the parent deltas to this box to produce the corrected box. This
   * is the layout box, as it will appear on screen as a result of the transforms of its parents.
   */
  Object(_utils_geometry_delta_apply_js__WEBPACK_IMPORTED_MODULE_0__["applyTreeDeltas"])(layoutCorrected, treeScale, treePath);
  /**
   * Update the delta between the corrected box and the target box before user-set transforms were applied.
   * This will allow us to calculate the corrected borderRadius and boxShadow to compensate
   * for our layout reprojection, but still allow them to be scaled correctly by the user.
   * It might be that to simplify this we may want to accept that user-set scale is also corrected
   * and we wouldn't have to keep and calc both deltas, OR we could support a user setting
   * to allow people to choose whether these styles are corrected based on just the
   * layout reprojection or the final bounding box.
   */
  Object(_utils_geometry_delta_calc_js__WEBPACK_IMPORTED_MODULE_1__["updateBoxDelta"])(delta, layoutCorrected, target, transformOrigin);
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/utils/setters.js":
/*!********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/utils/setters.js ***!
  \********************************************************************/
/*! exports provided: checkTargetForNewValues, getOrigin, getOriginFromTransition, setTarget, setValues */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkTargetForNewValues", function() { return checkTargetForNewValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrigin", function() { return getOrigin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOriginFromTransition", function() { return getOriginFromTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTarget", function() { return setTarget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setValues", function() { return setValues; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/index.js");
/* harmony import */ var _utils_is_numerical_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/is-numerical-string.js */ "./node_modules/framer-motion/dist/es/utils/is-numerical-string.js");
/* harmony import */ var _utils_resolve_value_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/resolve-value.js */ "./node_modules/framer-motion/dist/es/utils/resolve-value.js");
/* harmony import */ var _value_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../value/index.js */ "./node_modules/framer-motion/dist/es/value/index.js");
/* harmony import */ var _dom_value_types_animatable_none_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dom/value-types/animatable-none.js */ "./node_modules/framer-motion/dist/es/render/dom/value-types/animatable-none.js");
/* harmony import */ var _dom_value_types_find_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dom/value-types/find.js */ "./node_modules/framer-motion/dist/es/render/dom/value-types/find.js");
/* harmony import */ var _variants_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./variants.js */ "./node_modules/framer-motion/dist/es/render/utils/variants.js");









/**
 * Set VisualElement's MotionValue, creating a new MotionValue for it if
 * it doesn't exist.
 */
function setMotionValue(visualElement, key, value) {
  if (visualElement.hasValue(key)) {
    visualElement.getValue(key).set(value);
  } else {
    visualElement.addValue(key, Object(_value_index_js__WEBPACK_IMPORTED_MODULE_4__["motionValue"])(value));
  }
}
function setTarget(visualElement, definition) {
  var resolved = Object(_variants_js__WEBPACK_IMPORTED_MODULE_7__["resolveVariant"])(visualElement, definition);
  var _a = resolved ? visualElement.makeTargetAnimatable(resolved, false) : {},
    _b = _a.transitionEnd,
    transitionEnd = _b === void 0 ? {} : _b;
  _a.transition;
  var target = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["transitionEnd", "transition"]);
  target = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, target), transitionEnd);
  for (var key in target) {
    var value = Object(_utils_resolve_value_js__WEBPACK_IMPORTED_MODULE_3__["resolveFinalValueInKeyframes"])(target[key]);
    setMotionValue(visualElement, key, value);
  }
}
function setVariants(visualElement, variantLabels) {
  var reversedLabels = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(variantLabels)).reverse();
  reversedLabels.forEach(function (key) {
    var _a;
    var variant = visualElement.getVariant(key);
    variant && setTarget(visualElement, variant);
    (_a = visualElement.variantChildren) === null || _a === void 0 ? void 0 : _a.forEach(function (child) {
      setVariants(child, variantLabels);
    });
  });
}
function setValues(visualElement, definition) {
  if (Array.isArray(definition)) {
    return setVariants(visualElement, definition);
  } else if (typeof definition === "string") {
    return setVariants(visualElement, [definition]);
  } else {
    setTarget(visualElement, definition);
  }
}
function checkTargetForNewValues(visualElement, target, origin) {
  var _a, _b, _c;
  var _d;
  var newValueKeys = Object.keys(target).filter(function (key) {
    return !visualElement.hasValue(key);
  });
  var numNewValues = newValueKeys.length;
  if (!numNewValues) return;
  for (var i = 0; i < numNewValues; i++) {
    var key = newValueKeys[i];
    var targetValue = target[key];
    var value = null;
    /**
     * If the target is a series of keyframes, we can use the first value
     * in the array. If this first value is null, we'll still need to read from the DOM.
     */
    if (Array.isArray(targetValue)) {
      value = targetValue[0];
    }
    /**
     * If the target isn't keyframes, or the first keyframe was null, we need to
     * first check if an origin value was explicitly defined in the transition as "from",
     * if not read the value from the DOM. As an absolute fallback, take the defined target value.
     */
    if (value === null) {
      value = (_b = (_a = origin[key]) !== null && _a !== void 0 ? _a : visualElement.readValue(key)) !== null && _b !== void 0 ? _b : target[key];
    }
    /**
     * If value is still undefined or null, ignore it. Preferably this would throw,
     * but this was causing issues in Framer.
     */
    if (value === undefined || value === null) continue;
    if (typeof value === "string" && Object(_utils_is_numerical_string_js__WEBPACK_IMPORTED_MODULE_2__["isNumericalString"])(value)) {
      // If this is a number read as a string, ie "0" or "200", convert it to a number
      value = parseFloat(value);
    } else if (!Object(_dom_value_types_find_js__WEBPACK_IMPORTED_MODULE_6__["findValueType"])(value) && style_value_types__WEBPACK_IMPORTED_MODULE_1__["complex"].test(targetValue)) {
      value = Object(_dom_value_types_animatable_none_js__WEBPACK_IMPORTED_MODULE_5__["getAnimatableNone"])(key, targetValue);
    }
    visualElement.addValue(key, Object(_value_index_js__WEBPACK_IMPORTED_MODULE_4__["motionValue"])(value));
    (_c = (_d = origin)[key]) !== null && _c !== void 0 ? _c : _d[key] = value;
    visualElement.setBaseTarget(key, value);
  }
}
function getOriginFromTransition(key, transition) {
  if (!transition) return;
  var valueTransition = transition[key] || transition["default"] || transition;
  return valueTransition.from;
}
function getOrigin(target, transition, visualElement) {
  var _a, _b;
  var origin = {};
  for (var key in target) {
    origin[key] = (_a = getOriginFromTransition(key, transition)) !== null && _a !== void 0 ? _a : (_b = visualElement.getValue(key)) === null || _b === void 0 ? void 0 : _b.get();
  }
  return origin;
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/utils/state.js":
/*!******************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/utils/state.js ***!
  \******************************************************************/
/*! exports provided: createLayoutState, createProjectionState, zeroLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLayoutState", function() { return createLayoutState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createProjectionState", function() { return createProjectionState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zeroLayout", function() { return zeroLayout; });
/* harmony import */ var _utils_geometry_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/geometry/index.js */ "./node_modules/framer-motion/dist/es/utils/geometry/index.js");

var createProjectionState = function createProjectionState() {
  return {
    isEnabled: false,
    isHydrated: false,
    isTargetLocked: false,
    target: Object(_utils_geometry_index_js__WEBPACK_IMPORTED_MODULE_0__["axisBox"])(),
    targetFinal: Object(_utils_geometry_index_js__WEBPACK_IMPORTED_MODULE_0__["axisBox"])()
  };
};
function createLayoutState() {
  return {
    isHydrated: false,
    layout: Object(_utils_geometry_index_js__WEBPACK_IMPORTED_MODULE_0__["axisBox"])(),
    layoutCorrected: Object(_utils_geometry_index_js__WEBPACK_IMPORTED_MODULE_0__["axisBox"])(),
    treeScale: {
      x: 1,
      y: 1
    },
    delta: Object(_utils_geometry_index_js__WEBPACK_IMPORTED_MODULE_0__["delta"])(),
    deltaFinal: Object(_utils_geometry_index_js__WEBPACK_IMPORTED_MODULE_0__["delta"])(),
    deltaTransform: ""
  };
}
var zeroLayout = createLayoutState();


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/utils/types.js":
/*!******************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/utils/types.js ***!
  \******************************************************************/
/*! exports provided: AnimationType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationType", function() { return AnimationType; });
var AnimationType;
(function (AnimationType) {
  AnimationType["Animate"] = "animate";
  AnimationType["Hover"] = "whileHover";
  AnimationType["Tap"] = "whileTap";
  AnimationType["Drag"] = "whileDrag";
  AnimationType["Focus"] = "whileFocus";
  AnimationType["Exit"] = "exit";
})(AnimationType || (AnimationType = {}));


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/render/utils/variants.js":
/*!*********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/utils/variants.js ***!
  \*********************************************************************/
/*! exports provided: checkIfControllingVariants, checkIfVariantNode, isVariantLabel, isVariantLabels, resolveVariant, resolveVariantFromProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkIfControllingVariants", function() { return checkIfControllingVariants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkIfVariantNode", function() { return checkIfVariantNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isVariantLabel", function() { return isVariantLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isVariantLabels", function() { return isVariantLabels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveVariant", function() { return resolveVariant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveVariantFromProps", function() { return resolveVariantFromProps; });
/**
 * Decides if the supplied variable is an array of variant labels
 */
function isVariantLabels(v) {
  return Array.isArray(v);
}
/**
 * Decides if the supplied variable is variant label
 */
function isVariantLabel(v) {
  return typeof v === "string" || isVariantLabels(v);
}
/**
 * Creates an object containing the latest state of every MotionValue on a VisualElement
 */
function getCurrent(visualElement) {
  var current = {};
  visualElement.forEachValue(function (value, key) {
    return current[key] = value.get();
  });
  return current;
}
/**
 * Creates an object containing the latest velocity of every MotionValue on a VisualElement
 */
function getVelocity(visualElement) {
  var velocity = {};
  visualElement.forEachValue(function (value, key) {
    return velocity[key] = value.getVelocity();
  });
  return velocity;
}
function resolveVariantFromProps(props, definition, custom, currentValues, currentVelocity) {
  var _a;
  if (currentValues === void 0) {
    currentValues = {};
  }
  if (currentVelocity === void 0) {
    currentVelocity = {};
  }
  if (typeof definition === "string") {
    definition = (_a = props.variants) === null || _a === void 0 ? void 0 : _a[definition];
  }
  return typeof definition === "function" ? definition(custom !== null && custom !== void 0 ? custom : props.custom, currentValues, currentVelocity) : definition;
}
function resolveVariant(visualElement, definition, custom) {
  var props = visualElement.getProps();
  return resolveVariantFromProps(props, definition, custom !== null && custom !== void 0 ? custom : props.custom, getCurrent(visualElement), getVelocity(visualElement));
}
function checkIfControllingVariants(props) {
  var _a;
  return typeof ((_a = props.animate) === null || _a === void 0 ? void 0 : _a.start) === "function" || isVariantLabel(props.initial) || isVariantLabel(props.animate) || isVariantLabel(props.whileHover) || isVariantLabel(props.whileDrag) || isVariantLabel(props.whileTap) || isVariantLabel(props.whileFocus) || isVariantLabel(props.exit);
}
function checkIfVariantNode(props) {
  return Boolean(checkIfControllingVariants(props) || props.variants);
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/array.js":
/*!***********************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/array.js ***!
  \***********************************************************/
/*! exports provided: addUniqueItem, removeItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addUniqueItem", function() { return addUniqueItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeItem", function() { return removeItem; });
function addUniqueItem(arr, item) {
  arr.indexOf(item) === -1 && arr.push(item);
}
function removeItem(arr, item) {
  var index = arr.indexOf(item);
  index > -1 && arr.splice(index, 1);
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/each-axis.js":
/*!***************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/each-axis.js ***!
  \***************************************************************/
/*! exports provided: eachAxis */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eachAxis", function() { return eachAxis; });
// Call a handler once for each axis
function eachAxis(handler) {
  return [handler("x"), handler("y")];
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/geometry/delta-apply.js":
/*!**************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/geometry/delta-apply.js ***!
  \**************************************************************************/
/*! exports provided: applyAxisDelta, applyAxisTransforms, applyBoxDelta, applyBoxTransforms, applyPointDelta, applyTreeDeltas, removeAxisDelta, removeAxisTransforms, removeBoxTransforms, removePointDelta, resetAxis, resetBox, scalePoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyAxisDelta", function() { return applyAxisDelta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyAxisTransforms", function() { return applyAxisTransforms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyBoxDelta", function() { return applyBoxDelta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyBoxTransforms", function() { return applyBoxTransforms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyPointDelta", function() { return applyPointDelta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyTreeDeltas", function() { return applyTreeDeltas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeAxisDelta", function() { return removeAxisDelta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeAxisTransforms", function() { return removeAxisTransforms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeBoxTransforms", function() { return removeBoxTransforms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removePointDelta", function() { return removePointDelta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetAxis", function() { return resetAxis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetBox", function() { return resetBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scalePoint", function() { return scalePoint; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/index.js");
/* harmony import */ var _render_utils_is_draggable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../render/utils/is-draggable.js */ "./node_modules/framer-motion/dist/es/render/utils/is-draggable.js");




/**
 * Reset an axis to the provided origin box.
 *
 * This is a mutative operation.
 */
function resetAxis(axis, originAxis) {
  axis.min = originAxis.min;
  axis.max = originAxis.max;
}
/**
 * Reset a box to the provided origin box.
 *
 * This is a mutative operation.
 */
function resetBox(box, originBox) {
  resetAxis(box.x, originBox.x);
  resetAxis(box.y, originBox.y);
}
/**
 * Scales a point based on a factor and an originPoint
 */
function scalePoint(point, scale, originPoint) {
  var distanceFromOrigin = point - originPoint;
  var scaled = scale * distanceFromOrigin;
  return originPoint + scaled;
}
/**
 * Applies a translate/scale delta to a point
 */
function applyPointDelta(point, translate, scale, originPoint, boxScale) {
  if (boxScale !== undefined) {
    point = scalePoint(point, boxScale, originPoint);
  }
  return scalePoint(point, scale, originPoint) + translate;
}
/**
 * Applies a translate/scale delta to an axis
 */
function applyAxisDelta(axis, translate, scale, originPoint, boxScale) {
  if (translate === void 0) {
    translate = 0;
  }
  if (scale === void 0) {
    scale = 1;
  }
  axis.min = applyPointDelta(axis.min, translate, scale, originPoint, boxScale);
  axis.max = applyPointDelta(axis.max, translate, scale, originPoint, boxScale);
}
/**
 * Applies a translate/scale delta to a box
 */
function applyBoxDelta(box, _a) {
  var x = _a.x,
    y = _a.y;
  applyAxisDelta(box.x, x.translate, x.scale, x.originPoint);
  applyAxisDelta(box.y, y.translate, y.scale, y.originPoint);
}
/**
 * Apply a transform to an axis from the latest resolved motion values.
 * This function basically acts as a bridge between a flat motion value map
 * and applyAxisDelta
 */
function applyAxisTransforms(_final, axis, transforms, _a) {
  var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 3),
    key = _b[0],
    scaleKey = _b[1],
    originKey = _b[2];
  // Copy the current axis to the final axis before mutation
  _final.min = axis.min;
  _final.max = axis.max;
  var axisOrigin = transforms[originKey] !== undefined ? transforms[originKey] : 0.5;
  var originPoint = Object(popmotion__WEBPACK_IMPORTED_MODULE_1__["mix"])(axis.min, axis.max, axisOrigin);
  // Apply the axis delta to the final axis
  applyAxisDelta(_final, transforms[key], transforms[scaleKey], originPoint, transforms.scale);
}
/**
 * The names of the motion values we want to apply as translation, scale and origin.
 */
var xKeys = ["x", "scaleX", "originX"];
var yKeys = ["y", "scaleY", "originY"];
/**
 * Apply a transform to a box from the latest resolved motion values.
 */
function applyBoxTransforms(finalBox, box, transforms) {
  applyAxisTransforms(finalBox.x, box.x, transforms, xKeys);
  applyAxisTransforms(finalBox.y, box.y, transforms, yKeys);
}
/**
 * Remove a delta from a point. This is essentially the steps of applyPointDelta in reverse
 */
function removePointDelta(point, translate, scale, originPoint, boxScale) {
  point -= translate;
  point = scalePoint(point, 1 / scale, originPoint);
  if (boxScale !== undefined) {
    point = scalePoint(point, 1 / boxScale, originPoint);
  }
  return point;
}
/**
 * Remove a delta from an axis. This is essentially the steps of applyAxisDelta in reverse
 */
function removeAxisDelta(axis, translate, scale, origin, boxScale) {
  if (translate === void 0) {
    translate = 0;
  }
  if (scale === void 0) {
    scale = 1;
  }
  if (origin === void 0) {
    origin = 0.5;
  }
  var originPoint = Object(popmotion__WEBPACK_IMPORTED_MODULE_1__["mix"])(axis.min, axis.max, origin) - translate;
  axis.min = removePointDelta(axis.min, translate, scale, originPoint, boxScale);
  axis.max = removePointDelta(axis.max, translate, scale, originPoint, boxScale);
}
/**
 * Remove a transforms from an axis. This is essentially the steps of applyAxisTransforms in reverse
 * and acts as a bridge between motion values and removeAxisDelta
 */
function removeAxisTransforms(axis, transforms, _a) {
  var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 3),
    key = _b[0],
    scaleKey = _b[1],
    originKey = _b[2];
  removeAxisDelta(axis, transforms[key], transforms[scaleKey], transforms[originKey], transforms.scale);
}
/**
 * Remove a transforms from an box. This is essentially the steps of applyAxisBox in reverse
 * and acts as a bridge between motion values and removeAxisDelta
 */
function removeBoxTransforms(box, transforms) {
  removeAxisTransforms(box.x, transforms, xKeys);
  removeAxisTransforms(box.y, transforms, yKeys);
}
/**
 * Apply a tree of deltas to a box. We do this to calculate the effect of all the transforms
 * in a tree upon our box before then calculating how to project it into our desired viewport-relative box
 *
 * This is the final nested loop within updateLayoutDelta for future refactoring
 */
function applyTreeDeltas(box, treeScale, treePath) {
  var treeLength = treePath.length;
  if (!treeLength) return;
  // Reset the treeScale
  treeScale.x = treeScale.y = 1;
  var node;
  var delta;
  for (var i = 0; i < treeLength; i++) {
    node = treePath[i];
    delta = node.getLayoutState().delta;
    // Incoporate each ancestor's scale into a culmulative treeScale for this component
    treeScale.x *= delta.x.scale;
    treeScale.y *= delta.y.scale;
    // Apply each ancestor's calculated delta into this component's recorded layout box
    applyBoxDelta(box, delta);
    // If this is a draggable ancestor, also incorporate the node's transform to the layout box
    if (Object(_render_utils_is_draggable_js__WEBPACK_IMPORTED_MODULE_2__["isDraggable"])(node)) {
      applyBoxTransforms(box, box, node.getLatestValues());
    }
  }
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/geometry/delta-calc.js":
/*!*************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/geometry/delta-calc.js ***!
  \*************************************************************************/
/*! exports provided: calcOrigin, calcRelativeAxis, calcRelativeBox, isNear, updateAxisDelta, updateBoxDelta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcOrigin", function() { return calcOrigin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcRelativeAxis", function() { return calcRelativeAxis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcRelativeBox", function() { return calcRelativeBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNear", function() { return isNear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateAxisDelta", function() { return updateAxisDelta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateBoxDelta", function() { return updateBoxDelta; });
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/index.js");

var clampProgress = function clampProgress(v) {
  return Object(popmotion__WEBPACK_IMPORTED_MODULE_0__["clamp"])(0, 1, v);
};
/**
 * Returns true if the provided value is within maxDistance of the provided target
 */
function isNear(value, target, maxDistance) {
  if (target === void 0) {
    target = 0;
  }
  if (maxDistance === void 0) {
    maxDistance = 0.01;
  }
  return Object(popmotion__WEBPACK_IMPORTED_MODULE_0__["distance"])(value, target) < maxDistance;
}
function calcLength(axis) {
  return axis.max - axis.min;
}
/**
 * Calculate a transform origin relative to the source axis, between 0-1, that results
 * in an asthetically pleasing scale/transform needed to project from source to target.
 */
function calcOrigin(source, target) {
  var origin = 0.5;
  var sourceLength = calcLength(source);
  var targetLength = calcLength(target);
  if (targetLength > sourceLength) {
    origin = Object(popmotion__WEBPACK_IMPORTED_MODULE_0__["progress"])(target.min, target.max - sourceLength, source.min);
  } else if (sourceLength > targetLength) {
    origin = Object(popmotion__WEBPACK_IMPORTED_MODULE_0__["progress"])(source.min, source.max - targetLength, target.min);
  }
  return clampProgress(origin);
}
/**
 * Update the AxisDelta with a transform that projects source into target.
 *
 * The transform `origin` is optional. If not provided, it'll be automatically
 * calculated based on the relative positions of the two bounding boxes.
 */
function updateAxisDelta(delta, source, target, origin) {
  if (origin === void 0) {
    origin = 0.5;
  }
  delta.origin = origin;
  delta.originPoint = Object(popmotion__WEBPACK_IMPORTED_MODULE_0__["mix"])(source.min, source.max, delta.origin);
  delta.scale = calcLength(target) / calcLength(source);
  if (isNear(delta.scale, 1, 0.0001)) delta.scale = 1;
  delta.translate = Object(popmotion__WEBPACK_IMPORTED_MODULE_0__["mix"])(target.min, target.max, delta.origin) - delta.originPoint;
  if (isNear(delta.translate)) delta.translate = 0;
}
/**
 * Update the BoxDelta with a transform that projects the source into the target.
 *
 * The transform `origin` is optional. If not provided, it'll be automatically
 * calculated based on the relative positions of the two bounding boxes.
 */
function updateBoxDelta(delta, source, target, origin) {
  updateAxisDelta(delta.x, source.x, target.x, defaultOrigin(origin.originX));
  updateAxisDelta(delta.y, source.y, target.y, defaultOrigin(origin.originY));
}
/**
 * Currently this only accepts numerical origins, measured as 0-1, but could
 * accept pixel values by comparing to the target axis.
 */
function defaultOrigin(origin) {
  return typeof origin === "number" ? origin : 0.5;
}
function calcRelativeAxis(target, relative, parent) {
  target.min = parent.min + relative.min;
  target.max = target.min + calcLength(relative);
}
function calcRelativeBox(projection, parentProjection) {
  calcRelativeAxis(projection.target.x, projection.relativeTarget.x, parentProjection.target.x);
  calcRelativeAxis(projection.target.y, projection.relativeTarget.y, parentProjection.target.y);
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/geometry/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/geometry/index.js ***!
  \********************************************************************/
/*! exports provided: axisBox, convertAxisBoxToBoundingBox, convertBoundingBoxToAxisBox, copyAxisBox, delta, transformBoundingBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "axisBox", function() { return axisBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertAxisBoxToBoundingBox", function() { return convertAxisBoxToBoundingBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertBoundingBoxToAxisBox", function() { return convertBoundingBoxToAxisBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyAxisBox", function() { return copyAxisBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delta", function() { return delta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformBoundingBox", function() { return transformBoundingBox; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _noop_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../noop.js */ "./node_modules/framer-motion/dist/es/utils/noop.js");



/**
 * Bounding boxes tend to be defined as top, left, right, bottom. For various operations
 * it's easier to consider each axis individually. This function returns a bounding box
 * as a map of single-axis min/max values.
 */
function convertBoundingBoxToAxisBox(_a) {
  var top = _a.top,
    left = _a.left,
    right = _a.right,
    bottom = _a.bottom;
  return {
    x: {
      min: left,
      max: right
    },
    y: {
      min: top,
      max: bottom
    }
  };
}
function convertAxisBoxToBoundingBox(_a) {
  var x = _a.x,
    y = _a.y;
  return {
    top: y.min,
    bottom: y.max,
    left: x.min,
    right: x.max
  };
}
/**
 * Applies a TransformPoint function to a bounding box. TransformPoint is usually a function
 * provided by Framer to allow measured points to be corrected for device scaling. This is used
 * when measuring DOM elements and DOM event points.
 */
function transformBoundingBox(_a, transformPoint) {
  var top = _a.top,
    left = _a.left,
    bottom = _a.bottom,
    right = _a.right;
  if (transformPoint === void 0) {
    transformPoint = _noop_js__WEBPACK_IMPORTED_MODULE_1__["noop"];
  }
  var topLeft = transformPoint({
    x: left,
    y: top
  });
  var bottomRight = transformPoint({
    x: right,
    y: bottom
  });
  return {
    top: topLeft.y,
    left: topLeft.x,
    bottom: bottomRight.y,
    right: bottomRight.x
  };
}
/**
 * Create an empty axis box of zero size
 */
function axisBox() {
  return {
    x: {
      min: 0,
      max: 1
    },
    y: {
      min: 0,
      max: 1
    }
  };
}
function copyAxisBox(box) {
  return {
    x: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, box.x),
    y: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, box.y)
  };
}
/**
 * Create an empty box delta
 */
var zeroDelta = {
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
};
function delta() {
  return {
    x: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, zeroDelta),
    y: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, zeroDelta)
  };
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/is-browser.js":
/*!****************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/is-browser.js ***!
  \****************************************************************/
/*! exports provided: isBrowser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBrowser", function() { return isBrowser; });
var isBrowser = typeof window !== "undefined";


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/is-numerical-string.js":
/*!*************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/is-numerical-string.js ***!
  \*************************************************************************/
/*! exports provided: isNumericalString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumericalString", function() { return isNumericalString; });
/**
 * Check if value is a numerical string, ie a string that is purely a number eg "100" or "-100.1"
 */
var isNumericalString = function isNumericalString(v) {
  return /^\-?\d*\.?\d+$/.test(v);
};


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/is-ref-object.js":
/*!*******************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/is-ref-object.js ***!
  \*******************************************************************/
/*! exports provided: isRefObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRefObject", function() { return isRefObject; });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function isRefObject(ref) {
  return _typeof(ref) === "object" && Object.prototype.hasOwnProperty.call(ref, "current");
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/noop.js":
/*!**********************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/noop.js ***!
  \**********************************************************/
/*! exports provided: noop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
function noop(any) {
  return any;
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/resolve-value.js":
/*!*******************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/resolve-value.js ***!
  \*******************************************************************/
/*! exports provided: isCustomValue, resolveFinalValueInKeyframes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCustomValue", function() { return isCustomValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveFinalValueInKeyframes", function() { return resolveFinalValueInKeyframes; });
/* harmony import */ var _animation_utils_is_keyframes_target_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../animation/utils/is-keyframes-target.js */ "./node_modules/framer-motion/dist/es/animation/utils/is-keyframes-target.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }

var isCustomValue = function isCustomValue(v) {
  return Boolean(v && _typeof(v) === "object" && v.mix && v.toValue);
};
var resolveFinalValueInKeyframes = function resolveFinalValueInKeyframes(v) {
  // TODO maybe throw if v.length - 1 is placeholder token?
  return Object(_animation_utils_is_keyframes_target_js__WEBPACK_IMPORTED_MODULE_0__["isKeyframesTarget"])(v) ? v[v.length - 1] || 0 : v;
};


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/shallow-compare.js":
/*!*********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/shallow-compare.js ***!
  \*********************************************************************/
/*! exports provided: shallowCompare */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shallowCompare", function() { return shallowCompare; });
function shallowCompare(next, prev) {
  if (!Array.isArray(prev)) return false;
  var prevLength = prev.length;
  if (prevLength !== next.length) return false;
  for (var i = 0; i < prevLength; i++) {
    if (prev[i] !== next[i]) return false;
  }
  return true;
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/subscription-manager.js":
/*!**************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/subscription-manager.js ***!
  \**************************************************************************/
/*! exports provided: SubscriptionManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionManager", function() { return SubscriptionManager; });
/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array.js */ "./node_modules/framer-motion/dist/es/utils/array.js");

var SubscriptionManager = /** @class */function () {
  function SubscriptionManager() {
    this.subscriptions = [];
  }
  SubscriptionManager.prototype.add = function (handler) {
    var _this = this;
    Object(_array_js__WEBPACK_IMPORTED_MODULE_0__["addUniqueItem"])(this.subscriptions, handler);
    return function () {
      return Object(_array_js__WEBPACK_IMPORTED_MODULE_0__["removeItem"])(_this.subscriptions, handler);
    };
  };
  SubscriptionManager.prototype.notify = function (a, b, c) {
    var numSubscriptions = this.subscriptions.length;
    if (!numSubscriptions) return;
    if (numSubscriptions === 1) {
      /**
       * If there's only a single handler we can just call it without invoking a loop.
       */
      this.subscriptions[0](a, b, c);
    } else {
      for (var i = 0; i < numSubscriptions; i++) {
        /**
         * Check whether the handler exists before firing as it's possible
         * the subscriptions were modified during this loop running.
         */
        var handler = this.subscriptions[i];
        handler && handler(a, b, c);
      }
    }
  };
  SubscriptionManager.prototype.getSize = function () {
    return this.subscriptions.length;
  };
  SubscriptionManager.prototype.clear = function () {
    this.subscriptions.length = 0;
  };
  return SubscriptionManager;
}();


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/time-conversion.js":
/*!*********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/time-conversion.js ***!
  \*********************************************************************/
/*! exports provided: secondsToMilliseconds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "secondsToMilliseconds", function() { return secondsToMilliseconds; });
/**
 * Converts seconds to milliseconds
 *
 * @param seconds - Time in seconds.
 * @return milliseconds - Converted time in milliseconds.
 */
var secondsToMilliseconds = function secondsToMilliseconds(seconds) {
  return seconds * 1000;
};


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/transform.js":
/*!***************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/transform.js ***!
  \***************************************************************/
/*! exports provided: transform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transform", function() { return transform; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }


var isCustomValueType = function isCustomValueType(v) {
  return _typeof(v) === "object" && v.mix;
};
var getMixer = function getMixer(v) {
  return isCustomValueType(v) ? v.mix : undefined;
};
function transform() {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  var useImmediate = !Array.isArray(args[0]);
  var argOffset = useImmediate ? 0 : -1;
  var inputValue = args[0 + argOffset];
  var inputRange = args[1 + argOffset];
  var outputRange = args[2 + argOffset];
  var options = args[3 + argOffset];
  var interpolator = Object(popmotion__WEBPACK_IMPORTED_MODULE_1__["interpolate"])(inputRange, outputRange, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({
    mixer: getMixer(outputRange[0])
  }, options));
  return useImmediate ? interpolator(inputValue) : interpolator;
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/use-constant.js":
/*!******************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/use-constant.js ***!
  \******************************************************************/
/*! exports provided: useConstant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useConstant", function() { return useConstant; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Creates a constant value over the lifecycle of a component.
 *
 * Even if `useMemo` is provided an empty array as its final argument, it doesn't offer
 * a guarantee that it won't re-run for performance reasons later on. By using `useConstant`
 * you can ensure that initialisers don't execute twice or more.
 */
function useConstant(init) {
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  if (ref.current === null) {
    ref.current = init();
  }
  return ref.current;
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/use-cycle.js":
/*!***************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/use-cycle.js ***!
  \***************************************************************/
/*! exports provided: useCycle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCycle", function() { return useCycle; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/index.js");




/**
 * Cycles through a series of visual properties. Can be used to toggle between or cycle through animations. It works similar to `useState` in React. It is provided an initial array of possible states, and returns an array of two arguments.
 *
 * @library
 *
 * ```jsx
 * import * as React from "react"
 * import { Frame, useCycle } from "framer"
 *
 * export function MyComponent() {
 *   const [x, cycleX] = useCycle(0, 50, 100)
 *
 *   return (
 *     <Frame
 *       animate={{ x: x }}
 *       onTap={() => cycleX()}
 *      />
 *    )
 * }
 * ```
 *
 * @motion
 *
 * An index value can be passed to the returned `cycle` function to cycle to a specific index.
 *
 * ```jsx
 * import * as React from "react"
 * import { motion, useCycle } from "framer-motion"
 *
 * export const MyComponent = () => {
 *   const [x, cycleX] = useCycle(0, 50, 100)
 *
 *   return (
 *     <motion.div
 *       animate={{ x: x }}
 *       onTap={() => cycleX()}
 *      />
 *    )
 * }
 * ```
 *
 * @param items - items to cycle through
 * @returns [currentState, cycleState]
 *
 * @public
 */
function useCycle() {
  var items = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    items[_i] = arguments[_i];
  }
  var index = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(0);
  var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(items[index.current]), 2),
    item = _a[0],
    setItem = _a[1];
  return [item, function (next) {
    index.current = typeof next !== "number" ? Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["wrap"])(0, items.length, index.current + 1) : next;
    setItem(items[index.current]);
  }];
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/use-force-update.js":
/*!**********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/use-force-update.js ***!
  \**********************************************************************/
/*! exports provided: useForceUpdate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useForceUpdate", function() { return useForceUpdate; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _use_unmount_effect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-unmount-effect.js */ "./node_modules/framer-motion/dist/es/utils/use-unmount-effect.js");



function useForceUpdate() {
  var unloadingRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(false);
  var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0), 2),
    forcedRenderCount = _a[0],
    setForcedRenderCount = _a[1];
  Object(_use_unmount_effect_js__WEBPACK_IMPORTED_MODULE_2__["useUnmountEffect"])(function () {
    return unloadingRef.current = true;
  });
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    !unloadingRef.current && setForcedRenderCount(forcedRenderCount + 1);
  }, [forcedRenderCount]);
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.js":
/*!***************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.js ***!
  \***************************************************************************/
/*! exports provided: useIsomorphicLayoutEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useIsomorphicLayoutEffect", function() { return useIsomorphicLayoutEffect; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _is_browser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is-browser.js */ "./node_modules/framer-motion/dist/es/utils/is-browser.js");


var useIsomorphicLayoutEffect = _is_browser_js__WEBPACK_IMPORTED_MODULE_1__["isBrowser"] ? react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"] : react__WEBPACK_IMPORTED_MODULE_0__["useEffect"];


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/use-reduced-motion.js":
/*!************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/use-reduced-motion.js ***!
  \************************************************************************/
/*! exports provided: useReducedMotion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReducedMotion", function() { return useReducedMotion; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _value_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../value/index.js */ "./node_modules/framer-motion/dist/es/value/index.js");
/* harmony import */ var _value_use_on_change_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../value/use-on-change.js */ "./node_modules/framer-motion/dist/es/value/use-on-change.js");





// Does this device prefer reduced motion? Returns `null` server-side.
var prefersReducedMotion;
function initPrefersReducedMotion() {
  prefersReducedMotion = Object(_value_index_js__WEBPACK_IMPORTED_MODULE_2__["motionValue"])(null);
  if (typeof window === "undefined") return;
  if (window.matchMedia) {
    var motionMediaQuery_1 = window.matchMedia("(prefers-reduced-motion)");
    var setReducedMotionPreferences = function setReducedMotionPreferences() {
      return prefersReducedMotion.set(motionMediaQuery_1.matches);
    };
    motionMediaQuery_1.addListener(setReducedMotionPreferences);
    setReducedMotionPreferences();
  } else {
    prefersReducedMotion.set(false);
  }
}
/**
 * A hook that returns `true` if we should be using reduced motion based on the current device's Reduced Motion setting.
 *
 * This can be used to implement changes to your UI based on Reduced Motion. For instance, replacing motion-sickness inducing
 * `x`/`y` animations with `opacity`, disabling the autoplay of background videos, or turning off parallax motion.
 *
 * It will actively respond to changes and re-render your components with the latest setting.
 *
 * ```jsx
 * export function Sidebar({ isOpen }) {
 *   const shouldReduceMotion = useReducedMotion()
 *   const closedX = shouldReduceMotion ? 0 : "-100%"
 *
 *   return (
 *     <motion.div animate={{
 *       opacity: isOpen ? 1 : 0,
 *       x: isOpen ? 0 : closedX
 *     }} />
 *   )
 * }
 * ```
 *
 * @return boolean
 *
 * @public
 */
function useReducedMotion() {
  /**
   * Lazy initialisation of prefersReducedMotion
   */
  !prefersReducedMotion && initPrefersReducedMotion();
  var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(prefersReducedMotion.get()), 2),
    shouldReduceMotion = _a[0],
    setShouldReduceMotion = _a[1];
  Object(_value_use_on_change_js__WEBPACK_IMPORTED_MODULE_3__["useOnChange"])(prefersReducedMotion, setShouldReduceMotion);
  return shouldReduceMotion;
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/utils/use-unmount-effect.js":
/*!************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/use-unmount-effect.js ***!
  \************************************************************************/
/*! exports provided: useUnmountEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUnmountEffect", function() { return useUnmountEffect; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useUnmountEffect(callback) {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return function () {
      return callback();
    };
  }, []);
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/value/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/value/index.js ***!
  \***********************************************************/
/*! exports provided: MotionValue, motionValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotionValue", function() { return MotionValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "motionValue", function() { return motionValue; });
/* harmony import */ var framesync__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! framesync */ "./node_modules/framesync/dist/es/index.js");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/index.js");
/* harmony import */ var _utils_subscription_manager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/subscription-manager.js */ "./node_modules/framer-motion/dist/es/utils/subscription-manager.js");



var isFloat = function isFloat(value) {
  return !isNaN(parseFloat(value));
};
/**
 * `MotionValue` is used to track the state and velocity of motion values.
 *
 * @public
 */
var MotionValue = /** @class */function () {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   *
   * @internal
   */
  function MotionValue(init) {
    var _this = this;
    /**
     * Duration, in milliseconds, since last updating frame.
     *
     * @internal
     */
    this.timeDelta = 0;
    /**
     * Timestamp of the last time this `MotionValue` was updated.
     *
     * @internal
     */
    this.lastUpdated = 0;
    /**
     * Functions to notify when the `MotionValue` updates.
     *
     * @internal
     */
    this.updateSubscribers = new _utils_subscription_manager_js__WEBPACK_IMPORTED_MODULE_2__["SubscriptionManager"]();
    /**
     * Functions to notify when the velocity updates.
     *
     * @internal
     */
    this.velocityUpdateSubscribers = new _utils_subscription_manager_js__WEBPACK_IMPORTED_MODULE_2__["SubscriptionManager"]();
    /**
     * Functions to notify when the `MotionValue` updates and `render` is set to `true`.
     *
     * @internal
     */
    this.renderSubscribers = new _utils_subscription_manager_js__WEBPACK_IMPORTED_MODULE_2__["SubscriptionManager"]();
    /**
     * Tracks whether this value can output a velocity. Currently this is only true
     * if the value is numerical, but we might be able to widen the scope here and support
     * other value types.
     *
     * @internal
     */
    this.canTrackVelocity = false;
    this.updateAndNotify = function (v, render) {
      if (render === void 0) {
        render = true;
      }
      _this.prev = _this.current;
      _this.current = v;
      // Update timestamp
      var _a = Object(framesync__WEBPACK_IMPORTED_MODULE_0__["getFrameData"])(),
        delta = _a.delta,
        timestamp = _a.timestamp;
      if (_this.lastUpdated !== timestamp) {
        _this.timeDelta = delta;
        _this.lastUpdated = timestamp;
        framesync__WEBPACK_IMPORTED_MODULE_0__["default"].postRender(_this.scheduleVelocityCheck);
      }
      // Update update subscribers
      if (_this.prev !== _this.current) {
        _this.updateSubscribers.notify(_this.current);
      }
      // Update velocity subscribers
      if (_this.velocityUpdateSubscribers.getSize()) {
        _this.velocityUpdateSubscribers.notify(_this.getVelocity());
      }
      // Update render subscribers
      if (render) {
        _this.renderSubscribers.notify(_this.current);
      }
    };
    /**
     * Schedule a velocity check for the next frame.
     *
     * This is an instanced and bound function to prevent generating a new
     * function once per frame.
     *
     * @internal
     */
    this.scheduleVelocityCheck = function () {
      return framesync__WEBPACK_IMPORTED_MODULE_0__["default"].postRender(_this.velocityCheck);
    };
    /**
     * Updates `prev` with `current` if the value hasn't been updated this frame.
     * This ensures velocity calculations return `0`.
     *
     * This is an instanced and bound function to prevent generating a new
     * function once per frame.
     *
     * @internal
     */
    this.velocityCheck = function (_a) {
      var timestamp = _a.timestamp;
      if (timestamp !== _this.lastUpdated) {
        _this.prev = _this.current;
        _this.velocityUpdateSubscribers.notify(_this.getVelocity());
      }
    };
    this.hasAnimated = false;
    this.prev = this.current = init;
    this.canTrackVelocity = isFloat(this.current);
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * @library
   *
   * ```jsx
   * function MyComponent() {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.onChange(updateOpacity)
   *     const unsubscribeY = y.onChange(updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <Frame x={x} />
   * }
   * ```
   *
   * @motion
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.onChange(updateOpacity)
   *     const unsubscribeY = y.onChange(updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @internalremarks
   *
   * We could look into a `useOnChange` hook if the above lifecycle management proves confusing.
   *
   * ```jsx
   * useOnChange(x, () => {})
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @public
   */
  MotionValue.prototype.onChange = function (subscription) {
    return this.updateSubscribers.add(subscription);
  };
  MotionValue.prototype.clearListeners = function () {
    this.updateSubscribers.clear();
  };
  /**
   * Adds a function that will be notified when the `MotionValue` requests a render.
   *
   * @param subscriber - A function that's provided the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @internal
   */
  MotionValue.prototype.onRenderRequest = function (subscription) {
    // Render immediately
    subscription(this.get());
    return this.renderSubscribers.add(subscription);
  };
  /**
   * Attaches a passive effect to the `MotionValue`.
   *
   * @internal
   */
  MotionValue.prototype.attach = function (passiveEffect) {
    this.passiveEffect = passiveEffect;
  };
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  MotionValue.prototype.set = function (v, render) {
    if (render === void 0) {
      render = true;
    }
    if (!render || !this.passiveEffect) {
      this.updateAndNotify(v, render);
    } else {
      this.passiveEffect(v, this.updateAndNotify);
    }
  };
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  MotionValue.prototype.get = function () {
    return this.current;
  };
  /**
   * @public
   */
  MotionValue.prototype.getPrevious = function () {
    return this.prev;
  };
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  MotionValue.prototype.getVelocity = function () {
    // This could be isFloat(this.prev) && isFloat(this.current), but that would be wasteful
    return this.canTrackVelocity ?
    // These casts could be avoided if parseFloat would be typed better
    Object(popmotion__WEBPACK_IMPORTED_MODULE_1__["velocityPerSecond"])(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0;
  };
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   *
   * @internal
   */
  MotionValue.prototype.start = function (animation) {
    var _this = this;
    this.stop();
    return new Promise(function (resolve) {
      _this.hasAnimated = true;
      _this.stopAnimation = animation(resolve);
    }).then(function () {
      return _this.clearAnimation();
    });
  };
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  MotionValue.prototype.stop = function () {
    if (this.stopAnimation) this.stopAnimation();
    this.clearAnimation();
  };
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  MotionValue.prototype.isAnimating = function () {
    return !!this.stopAnimation;
  };
  MotionValue.prototype.clearAnimation = function () {
    this.stopAnimation = null;
  };
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  MotionValue.prototype.destroy = function () {
    this.updateSubscribers.clear();
    this.renderSubscribers.clear();
    this.stop();
  };
  return MotionValue;
}();
/**
 * @internal
 */
function motionValue(init) {
  return new MotionValue(init);
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/value/scroll/use-element-scroll.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/value/scroll/use-element-scroll.js ***!
  \*******************************************************************************/
/*! exports provided: useElementScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useElementScroll", function() { return useElementScroll; });
/* harmony import */ var _utils_use_constant_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/use-constant.js */ "./node_modules/framer-motion/dist/es/utils/use-constant.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./node_modules/framer-motion/dist/es/value/scroll/utils.js");
/* harmony import */ var _events_use_dom_event_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../events/use-dom-event.js */ "./node_modules/framer-motion/dist/es/events/use-dom-event.js");
/* harmony import */ var _utils_use_isomorphic_effect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/use-isomorphic-effect.js */ "./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.js");
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");





var getElementScrollOffsets = function getElementScrollOffsets(element) {
  return function () {
    return {
      xOffset: element.scrollLeft,
      yOffset: element.scrollTop,
      xMaxOffset: element.scrollWidth - element.offsetWidth,
      yMaxOffset: element.scrollHeight - element.offsetHeight
    };
  };
};
/**
 * Returns MotionValues that update when the provided element scrolls:
 *
 * - `scrollX` — Horizontal scroll distance in pixels.
 * - `scrollY` — Vertical scroll distance in pixels.
 * - `scrollXProgress` — Horizontal scroll progress between `0` and `1`.
 * - `scrollYProgress` — Vertical scroll progress between `0` and `1`.
 *
 * This element must be set to `overflow: scroll` on either or both axes to report scroll offset.
 *
 * @library
 *
 * ```jsx
 * import * as React from "react"
 * import {
 *   Frame,
 *   useElementScroll,
 *   useTransform
 * } from "framer"
 *
 * export function MyComponent() {
 *   const ref = React.useRef()
 *   const { scrollYProgress } = useElementScroll(ref)
 *
 *   return (
 *     <Frame ref={ref}>
 *       <Frame scaleX={scrollYProgress} />
 *     </Frame>
 *   )
 * }
 * ```
 *
 * @motion
 *
 * ```jsx
 * export const MyComponent = () => {
 *   const ref = useRef()
 *   const { scrollYProgress } = useElementScroll(ref)
 *
 *   return (
 *     <div ref={ref}>
 *       <motion.div style={{ scaleX: scrollYProgress }} />
 *     </div>
 *   )
 * }
 * ```
 *
 * @public
 */
function useElementScroll(ref) {
  var values = Object(_utils_use_constant_js__WEBPACK_IMPORTED_MODULE_0__["useConstant"])(_utils_js__WEBPACK_IMPORTED_MODULE_1__["createScrollMotionValues"]);
  Object(_utils_use_isomorphic_effect_js__WEBPACK_IMPORTED_MODULE_3__["useIsomorphicLayoutEffect"])(function () {
    var element = ref.current;
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_4__["invariant"])(!!element, "ref provided to useScroll must be passed into a HTML element.");
    if (!element) return;
    var updateScrollValues = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["createScrollUpdater"])(values, getElementScrollOffsets(element));
    var scrollListener = Object(_events_use_dom_event_js__WEBPACK_IMPORTED_MODULE_2__["addDomEvent"])(element, "scroll", updateScrollValues, {
      passive: true
    });
    var resizeListener = Object(_events_use_dom_event_js__WEBPACK_IMPORTED_MODULE_2__["addDomEvent"])(element, "resize", updateScrollValues);
    return function () {
      scrollListener && scrollListener();
      resizeListener && resizeListener();
    };
  }, []);
  return values;
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/value/scroll/use-viewport-scroll.js":
/*!********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/value/scroll/use-viewport-scroll.js ***!
  \********************************************************************************/
/*! exports provided: useViewportScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useViewportScroll", function() { return useViewportScroll; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./node_modules/framer-motion/dist/es/value/scroll/utils.js");
/* harmony import */ var _events_use_dom_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../events/use-dom-event.js */ "./node_modules/framer-motion/dist/es/events/use-dom-event.js");
/* harmony import */ var _utils_use_isomorphic_effect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/use-isomorphic-effect.js */ "./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.js");



var viewportScrollValues;
function getViewportScrollOffsets() {
  return {
    xOffset: window.pageXOffset,
    yOffset: window.pageYOffset,
    xMaxOffset: document.body.clientWidth - window.innerWidth,
    yMaxOffset: document.body.clientHeight - window.innerHeight
  };
}
var hasListeners = false;
function addEventListeners() {
  hasListeners = true;
  if (typeof window === "undefined") return;
  var updateScrollValues = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["createScrollUpdater"])(viewportScrollValues, getViewportScrollOffsets);
  Object(_events_use_dom_event_js__WEBPACK_IMPORTED_MODULE_1__["addDomEvent"])(window, "scroll", updateScrollValues, {
    passive: true
  });
  Object(_events_use_dom_event_js__WEBPACK_IMPORTED_MODULE_1__["addDomEvent"])(window, "resize", updateScrollValues);
}
/**
 * Returns MotionValues that update when the viewport scrolls:
 *
 * - `scrollX` — Horizontal scroll distance in pixels.
 * - `scrollY` — Vertical scroll distance in pixels.
 * - `scrollXProgress` — Horizontal scroll progress between `0` and `1`.
 * - `scrollYProgress` — Vertical scroll progress between `0` and `1`.
 *
 * **Warning:** Setting `body` or `html` to `height: 100%` or similar will break the `Progress`
 * values as this breaks the browser's capability to accurately measure the page length.
 *
 * @library
 *
 * ```jsx
 * import * as React from "react"
 * import {
 *   Frame,
 *   useViewportScroll,
 *   useTransform
 * } from "framer"
 *
 * export function MyComponent() {
 *   const { scrollYProgress } = useViewportScroll()
 *   return <Frame scaleX={scrollYProgress} />
 * }
 * ```
 *
 * @motion
 *
 * ```jsx
 * export const MyComponent = () => {
 *   const { scrollYProgress } = useViewportScroll()
 *   return <motion.div style={{ scaleX: scrollYProgress }} />
 * }
 * ```
 *
 * @public
 */
function useViewportScroll() {
  /**
   * Lazy-initialise the viewport scroll values
   */
  if (!viewportScrollValues) {
    viewportScrollValues = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["createScrollMotionValues"])();
  }
  Object(_utils_use_isomorphic_effect_js__WEBPACK_IMPORTED_MODULE_2__["useIsomorphicLayoutEffect"])(function () {
    !hasListeners && addEventListeners();
  }, []);
  return viewportScrollValues;
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/value/scroll/utils.js":
/*!******************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/value/scroll/utils.js ***!
  \******************************************************************/
/*! exports provided: createScrollMotionValues, createScrollUpdater */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createScrollMotionValues", function() { return createScrollMotionValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createScrollUpdater", function() { return createScrollUpdater; });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./node_modules/framer-motion/dist/es/value/index.js");

function createScrollMotionValues() {
  return {
    scrollX: Object(_index_js__WEBPACK_IMPORTED_MODULE_0__["motionValue"])(0),
    scrollY: Object(_index_js__WEBPACK_IMPORTED_MODULE_0__["motionValue"])(0),
    scrollXProgress: Object(_index_js__WEBPACK_IMPORTED_MODULE_0__["motionValue"])(0),
    scrollYProgress: Object(_index_js__WEBPACK_IMPORTED_MODULE_0__["motionValue"])(0)
  };
}
function setProgress(offset, maxOffset, value) {
  value.set(!offset || !maxOffset ? 0 : offset / maxOffset);
}
function createScrollUpdater(values, getOffsets) {
  var update = function update() {
    var _a = getOffsets(),
      xOffset = _a.xOffset,
      yOffset = _a.yOffset,
      xMaxOffset = _a.xMaxOffset,
      yMaxOffset = _a.yMaxOffset;
    // Set absolute positions
    values.scrollX.set(xOffset);
    values.scrollY.set(yOffset);
    // Set 0-1 progress
    setProgress(xOffset, xMaxOffset, values.scrollXProgress);
    setProgress(yOffset, yMaxOffset, values.scrollYProgress);
  };
  update();
  return update;
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/value/use-combine-values.js":
/*!************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/value/use-combine-values.js ***!
  \************************************************************************/
/*! exports provided: useCombineMotionValues */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCombineMotionValues", function() { return useCombineMotionValues; });
/* harmony import */ var _use_motion_value_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use-motion-value.js */ "./node_modules/framer-motion/dist/es/value/use-motion-value.js");
/* harmony import */ var _use_on_change_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-on-change.js */ "./node_modules/framer-motion/dist/es/value/use-on-change.js");
/* harmony import */ var framesync__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framesync */ "./node_modules/framesync/dist/es/index.js");



function useCombineMotionValues(values, combineValues) {
  /**
   * Initialise the returned motion value. This remains the same between renders.
   */
  var value = Object(_use_motion_value_js__WEBPACK_IMPORTED_MODULE_0__["useMotionValue"])(combineValues());
  /**
   * Create a function that will update the template motion value with the latest values.
   * This is pre-bound so whenever a motion value updates it can schedule its
   * execution in Framesync. If it's already been scheduled it won't be fired twice
   * in a single frame.
   */
  var updateValue = function updateValue() {
    return value.set(combineValues());
  };
  /**
   * Synchronously update the motion value with the latest values during the render.
   * This ensures that within a React render, the styles applied to the DOM are up-to-date.
   */
  updateValue();
  /**
   * Subscribe to all motion values found within the template. Whenever any of them change,
   * schedule an update.
   */
  Object(_use_on_change_js__WEBPACK_IMPORTED_MODULE_1__["useMultiOnChange"])(values, function () {
    return framesync__WEBPACK_IMPORTED_MODULE_2__["default"].update(updateValue, false, true);
  });
  return value;
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/value/use-inverted-scale.js":
/*!************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/value/use-inverted-scale.js ***!
  \************************************************************************/
/*! exports provided: invertScale, useInvertedScale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invertScale", function() { return invertScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useInvertedScale", function() { return useInvertedScale; });
/* harmony import */ var _use_transform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use-transform.js */ "./node_modules/framer-motion/dist/es/value/use-transform.js");
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");
/* harmony import */ var _use_motion_value_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-motion-value.js */ "./node_modules/framer-motion/dist/es/value/use-motion-value.js");
/* harmony import */ var _context_MotionContext_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/MotionContext/index.js */ "./node_modules/framer-motion/dist/es/context/MotionContext/index.js");





// Keep things reasonable and avoid scale: Infinity. In practise we might need
// to add another value, opacity, that could interpolate scaleX/Y [0,0.01] => [0,1]
// to simply hide content at unreasonable scales.
var maxScale = 100000;
var invertScale = function invertScale(scale) {
  return scale > 0.001 ? 1 / scale : maxScale;
};
var hasWarned = false;
/**
 * Returns a `MotionValue` each for `scaleX` and `scaleY` that update with the inverse
 * of their respective parent scales.
 *
 * This is useful for undoing the distortion of content when scaling a parent component.
 *
 * By default, `useInvertedScale` will automatically fetch `scaleX` and `scaleY` from the nearest parent.
 * By passing other `MotionValue`s in as `useInvertedScale({ scaleX, scaleY })`, it will invert the output
 * of those instead.
 *
 * @motion
 *
 * ```jsx
 * const MyComponent = () => {
 *   const { scaleX, scaleY } = useInvertedScale()
 *   return <motion.div style={{ scaleX, scaleY }} />
 * }
 * ```
 *
 * @library
 *
 * ```jsx
 * function MyComponent() {
 *   const { scaleX, scaleY } = useInvertedScale()
 *   return <Frame scaleX={scaleX} scaleY={scaleY} />
 * }
 * ```
 *
 * @deprecated
 * @internal
 */
function useInvertedScale(scale) {
  var parentScaleX = Object(_use_motion_value_js__WEBPACK_IMPORTED_MODULE_2__["useMotionValue"])(1);
  var parentScaleY = Object(_use_motion_value_js__WEBPACK_IMPORTED_MODULE_2__["useMotionValue"])(1);
  var visualElement = Object(_context_MotionContext_index_js__WEBPACK_IMPORTED_MODULE_3__["useVisualElementContext"])();
  Object(hey_listen__WEBPACK_IMPORTED_MODULE_1__["invariant"])(!!(scale || visualElement), "If no scale values are provided, useInvertedScale must be used within a child of another motion component.");
  Object(hey_listen__WEBPACK_IMPORTED_MODULE_1__["warning"])(hasWarned, "useInvertedScale is deprecated and will be removed in 3.0. Use the layout prop instead.");
  hasWarned = true;
  if (scale) {
    parentScaleX = scale.scaleX || parentScaleX;
    parentScaleY = scale.scaleY || parentScaleY;
  } else if (visualElement) {
    parentScaleX = visualElement.getValue("scaleX", 1);
    parentScaleY = visualElement.getValue("scaleY", 1);
  }
  var scaleX = Object(_use_transform_js__WEBPACK_IMPORTED_MODULE_0__["useTransform"])(parentScaleX, invertScale);
  var scaleY = Object(_use_transform_js__WEBPACK_IMPORTED_MODULE_0__["useTransform"])(parentScaleY, invertScale);
  return {
    scaleX: scaleX,
    scaleY: scaleY
  };
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/value/use-motion-template.js":
/*!*************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/value/use-motion-template.js ***!
  \*************************************************************************/
/*! exports provided: useMotionTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMotionTemplate", function() { return useMotionTemplate; });
/* harmony import */ var _use_combine_values_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use-combine-values.js */ "./node_modules/framer-motion/dist/es/value/use-combine-values.js");


/**
 * Combine multiple motion values into a new one using a string template literal.
 *
 * ```jsx
 * import {
 *   motion,
 *   useSpring,
 *   useMotionValue,
 *   useMotionTemplate
 * } from "framer-motion"
 *
 * function Component() {
 *   const shadowX = useSpring(0)
 *   const shadowY = useMotionValue(0)
 *   const shadow = useMotionTemplate`drop-shadow(${shadowX}px ${shadowY}px 20px rgba(0,0,0,0.3))`
 *
 *   return <motion.div style={{ filter: shadow }} />
 * }
 * ```
 *
 * @public
 */
function useMotionTemplate(fragments) {
  var values = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    values[_i - 1] = arguments[_i];
  }
  /**
   * Create a function that will build a string from the latest motion values.
   */
  var numFragments = fragments.length;
  function buildValue() {
    var output = "";
    for (var i = 0; i < numFragments; i++) {
      output += fragments[i];
      var value = values[i];
      if (value) output += values[i].get();
    }
    return output;
  }
  return Object(_use_combine_values_js__WEBPACK_IMPORTED_MODULE_0__["useCombineMotionValues"])(values, buildValue);
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/value/use-motion-value.js":
/*!**********************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/value/use-motion-value.js ***!
  \**********************************************************************/
/*! exports provided: useMotionValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMotionValue", function() { return useMotionValue; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.js */ "./node_modules/framer-motion/dist/es/value/index.js");
/* harmony import */ var _context_MotionConfigContext_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/MotionConfigContext.js */ "./node_modules/framer-motion/dist/es/context/MotionConfigContext.js");
/* harmony import */ var _utils_use_constant_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/use-constant.js */ "./node_modules/framer-motion/dist/es/utils/use-constant.js");






/**
 * Creates a `MotionValue` to track the state and velocity of a value.
 *
 * Usually, these are created automatically. For advanced use-cases, like use with `useTransform`, you can create `MotionValue`s externally and pass them into the animated component via the `style` prop.
 *
 * @library
 *
 * ```jsx
 * export function MyComponent() {
 *   const scale = useMotionValue(1)
 *
 *   return <Frame scale={scale} />
 * }
 * ```
 *
 * @motion
 *
 * ```jsx
 * export const MyComponent = () => {
 *   const scale = useMotionValue(1)
 *
 *   return <motion.div style={{ scale }} />
 * }
 * ```
 *
 * @param initial - The initial state.
 *
 * @public
 */
function useMotionValue(initial) {
  var value = Object(_utils_use_constant_js__WEBPACK_IMPORTED_MODULE_4__["useConstant"])(function () {
    return Object(_index_js__WEBPACK_IMPORTED_MODULE_2__["motionValue"])(initial);
  });
  /**
   * If this motion value is being used in static mode, like on
   * the Framer canvas, force components to rerender when the motion
   * value is updated.
   */
  var isStatic = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_MotionConfigContext_js__WEBPACK_IMPORTED_MODULE_3__["MotionConfigContext"]).isStatic;
  if (isStatic) {
    var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initial), 2),
      setLatest_1 = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
      return value.onChange(setLatest_1);
    }, []);
  }
  return value;
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/value/use-on-change.js":
/*!*******************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/value/use-on-change.js ***!
  \*******************************************************************/
/*! exports provided: useMultiOnChange, useOnChange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMultiOnChange", function() { return useMultiOnChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useOnChange", function() { return useOnChange; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_is_motion_value_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/is-motion-value.js */ "./node_modules/framer-motion/dist/es/value/utils/is-motion-value.js");


function useOnChange(value, callback) {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (Object(_utils_is_motion_value_js__WEBPACK_IMPORTED_MODULE_1__["isMotionValue"])(value)) return value.onChange(callback);
  }, [callback]);
}
function useMultiOnChange(values, handler) {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var subscriptions = values.map(function (value) {
      return value.onChange(handler);
    });
    return function () {
      return subscriptions.forEach(function (unsubscribe) {
        return unsubscribe();
      });
    };
  });
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/value/use-spring.js":
/*!****************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/value/use-spring.js ***!
  \****************************************************************/
/*! exports provided: useSpring */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSpring", function() { return useSpring; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/es/index.js");
/* harmony import */ var _utils_is_motion_value_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/is-motion-value.js */ "./node_modules/framer-motion/dist/es/value/utils/is-motion-value.js");
/* harmony import */ var _use_motion_value_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./use-motion-value.js */ "./node_modules/framer-motion/dist/es/value/use-motion-value.js");
/* harmony import */ var _use_on_change_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./use-on-change.js */ "./node_modules/framer-motion/dist/es/value/use-on-change.js");
/* harmony import */ var _context_MotionConfigContext_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../context/MotionConfigContext.js */ "./node_modules/framer-motion/dist/es/context/MotionConfigContext.js");








/**
 * Creates a `MotionValue` that, when `set`, will use a spring animation to animate to its new state.
 *
 * It can either work as a stand-alone `MotionValue` by initialising it with a value, or as a subscriber
 * to another `MotionValue`.
 *
 * @remarks
 *
 * ```jsx
 * const x = useSpring(0, { stiffness: 300 })
 * const y = useSpring(x, { damping: 10 })
 * ```
 *
 * @param inputValue - `MotionValue` or number. If provided a `MotionValue`, when the input `MotionValue` changes, the created `MotionValue` will spring towards that value.
 * @param springConfig - Configuration options for the spring.
 * @returns `MotionValue`
 *
 * @public
 */
function useSpring(source, config) {
  if (config === void 0) {
    config = {};
  }
  var isStatic = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_MotionConfigContext_js__WEBPACK_IMPORTED_MODULE_6__["MotionConfigContext"]).isStatic;
  var activeSpringAnimation = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  var value = Object(_use_motion_value_js__WEBPACK_IMPORTED_MODULE_4__["useMotionValue"])(Object(_utils_is_motion_value_js__WEBPACK_IMPORTED_MODULE_3__["isMotionValue"])(source) ? source.get() : source);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return value.attach(function (v, set) {
      /**
       * A more hollistic approach to this might be to use isStatic to fix VisualElement animations
       * at that level, but this will work for now
       */
      if (isStatic) return set(v);
      if (activeSpringAnimation.current) {
        activeSpringAnimation.current.stop();
      }
      activeSpringAnimation.current = Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["animate"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({
        from: value.get(),
        to: v,
        velocity: value.getVelocity()
      }, config), {
        onUpdate: set
      }));
      return value.get();
    });
  }, Object.values(config));
  Object(_use_on_change_js__WEBPACK_IMPORTED_MODULE_5__["useOnChange"])(source, function (v) {
    return value.set(parseFloat(v));
  });
  return value;
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/value/use-transform.js":
/*!*******************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/value/use-transform.js ***!
  \*******************************************************************/
/*! exports provided: useTransform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTransform", function() { return useTransform; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utils_transform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/transform.js */ "./node_modules/framer-motion/dist/es/utils/transform.js");
/* harmony import */ var _use_combine_values_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-combine-values.js */ "./node_modules/framer-motion/dist/es/value/use-combine-values.js");
/* harmony import */ var _utils_use_constant_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/use-constant.js */ "./node_modules/framer-motion/dist/es/utils/use-constant.js");




function useTransform(input, inputRangeOrTransformer, outputRange, options) {
  var transformer = typeof inputRangeOrTransformer === "function" ? inputRangeOrTransformer : Object(_utils_transform_js__WEBPACK_IMPORTED_MODULE_1__["transform"])(inputRangeOrTransformer, outputRange, options);
  return Array.isArray(input) ? useListTransform(input, transformer) : useListTransform([input], function (_a) {
    var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 1),
      latest = _b[0];
    return transformer(latest);
  });
}
function useListTransform(values, transformer) {
  var latest = Object(_utils_use_constant_js__WEBPACK_IMPORTED_MODULE_3__["useConstant"])(function () {
    return [];
  });
  return Object(_use_combine_values_js__WEBPACK_IMPORTED_MODULE_2__["useCombineMotionValues"])(values, function () {
    latest.length = 0;
    var numValues = values.length;
    for (var i = 0; i < numValues; i++) {
      latest[i] = values[i].get();
    }
    return transformer(latest);
  });
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/value/use-velocity.js":
/*!******************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/value/use-velocity.js ***!
  \******************************************************************/
/*! exports provided: useVelocity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useVelocity", function() { return useVelocity; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _use_motion_value_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-motion-value.js */ "./node_modules/framer-motion/dist/es/value/use-motion-value.js");



/**
 * Creates a `MotionValue` that updates when the velocity of the provided `MotionValue` changes.
 *
 * ```javascript
 * const x = useMotionValue(0)
 * const xVelocity = useVelocity(x)
 * const xAcceleration = useVelocity(xVelocity)
 * ```
 *
 * @public
 */
function useVelocity(value) {
  var velocity = Object(_use_motion_value_js__WEBPACK_IMPORTED_MODULE_1__["useMotionValue"])(value.getVelocity());
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return value.velocityUpdateSubscribers.add(function (newVelocity) {
      velocity.set(newVelocity);
    });
  }, [value]);
  return velocity;
}


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/value/utils/is-motion-value.js":
/*!***************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/value/utils/is-motion-value.js ***!
  \***************************************************************************/
/*! exports provided: isMotionValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMotionValue", function() { return isMotionValue; });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var isMotionValue = function isMotionValue(value) {
  return value !== null && _typeof(value) === "object" && value.getVelocity;
};


/***/ }),

/***/ "./node_modules/framer-motion/dist/es/value/utils/resolve-motion-value.js":
/*!********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/value/utils/resolve-motion-value.js ***!
  \********************************************************************************/
/*! exports provided: resolveMotionValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveMotionValue", function() { return resolveMotionValue; });
/* harmony import */ var _utils_resolve_value_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/resolve-value.js */ "./node_modules/framer-motion/dist/es/utils/resolve-value.js");
/* harmony import */ var _is_motion_value_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is-motion-value.js */ "./node_modules/framer-motion/dist/es/value/utils/is-motion-value.js");



/**
 * If the provided value is a MotionValue, this returns the actual value, otherwise just the value itself
 *
 * TODO: Remove and move to library
 *
 * @internal
 */
function resolveMotionValue(value) {
  var unwrappedValue = Object(_is_motion_value_js__WEBPACK_IMPORTED_MODULE_1__["isMotionValue"])(value) ? value.get() : value;
  return Object(_utils_resolve_value_js__WEBPACK_IMPORTED_MODULE_0__["isCustomValue"])(unwrappedValue) ? unwrappedValue.toValue() : unwrappedValue;
}


/***/ }),

/***/ "./node_modules/framesync/dist/es/create-render-step.js":
/*!**************************************************************!*\
  !*** ./node_modules/framesync/dist/es/create-render-step.js ***!
  \**************************************************************/
/*! exports provided: createRenderStep */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRenderStep", function() { return createRenderStep; });
function createRenderStep(runNextFrame) {
  var toRun = [];
  var toRunNextFrame = [];
  var numToRun = 0;
  var isProcessing = false;
  var toKeepAlive = new WeakSet();
  var step = {
    schedule: function schedule(callback, keepAlive, immediate) {
      if (keepAlive === void 0) {
        keepAlive = false;
      }
      if (immediate === void 0) {
        immediate = false;
      }
      var addToCurrentFrame = immediate && isProcessing;
      var buffer = addToCurrentFrame ? toRun : toRunNextFrame;
      if (keepAlive) toKeepAlive.add(callback);
      if (buffer.indexOf(callback) === -1) {
        buffer.push(callback);
        if (addToCurrentFrame && isProcessing) numToRun = toRun.length;
      }
      return callback;
    },
    cancel: function cancel(callback) {
      var index = toRunNextFrame.indexOf(callback);
      if (index !== -1) toRunNextFrame.splice(index, 1);
      toKeepAlive["delete"](callback);
    },
    process: function process(frameData) {
      var _a;
      isProcessing = true;
      _a = [toRunNextFrame, toRun], toRun = _a[0], toRunNextFrame = _a[1];
      toRunNextFrame.length = 0;
      numToRun = toRun.length;
      if (numToRun) {
        for (var i = 0; i < numToRun; i++) {
          var callback = toRun[i];
          callback(frameData);
          if (toKeepAlive.has(callback)) {
            step.schedule(callback);
            runNextFrame();
          }
        }
      }
      isProcessing = false;
    }
  };
  return step;
}


/***/ }),

/***/ "./node_modules/framesync/dist/es/index.js":
/*!*************************************************!*\
  !*** ./node_modules/framesync/dist/es/index.js ***!
  \*************************************************/
/*! exports provided: default, cancelSync, flushSync, getFrameData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancelSync", function() { return cancelSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flushSync", function() { return flushSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFrameData", function() { return getFrameData; });
/* harmony import */ var _on_next_frame_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./on-next-frame.js */ "./node_modules/framesync/dist/es/on-next-frame.js");
/* harmony import */ var _create_render_step_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-render-step.js */ "./node_modules/framesync/dist/es/create-render-step.js");


var maxElapsed = 40;
var useDefaultElapsed = true;
var runNextFrame = false;
var isProcessing = false;
var frame = {
  delta: 0,
  timestamp: 0
};
var stepsOrder = ["read", "update", "preRender", "render", "postRender"];
var steps = /*#__PURE__*/stepsOrder.reduce(function (acc, key) {
  acc[key] = Object(_create_render_step_js__WEBPACK_IMPORTED_MODULE_1__["createRenderStep"])(function () {
    return runNextFrame = true;
  });
  return acc;
}, {});
var sync = /*#__PURE__*/stepsOrder.reduce(function (acc, key) {
  var step = steps[key];
  acc[key] = function (process, keepAlive, immediate) {
    if (keepAlive === void 0) {
      keepAlive = false;
    }
    if (immediate === void 0) {
      immediate = false;
    }
    if (!runNextFrame) startLoop();
    return step.schedule(process, keepAlive, immediate);
  };
  return acc;
}, {});
var cancelSync = /*#__PURE__*/stepsOrder.reduce(function (acc, key) {
  acc[key] = steps[key].cancel;
  return acc;
}, {});
var flushSync = /*#__PURE__*/stepsOrder.reduce(function (acc, key) {
  acc[key] = function () {
    return steps[key].process(frame);
  };
  return acc;
}, {});
var processStep = function processStep(stepId) {
  return steps[stepId].process(frame);
};
var processFrame = function processFrame(timestamp) {
  runNextFrame = false;
  frame.delta = useDefaultElapsed ? _on_next_frame_js__WEBPACK_IMPORTED_MODULE_0__["defaultTimestep"] : Math.max(Math.min(timestamp - frame.timestamp, maxElapsed), 1);
  frame.timestamp = timestamp;
  isProcessing = true;
  stepsOrder.forEach(processStep);
  isProcessing = false;
  if (runNextFrame) {
    useDefaultElapsed = false;
    Object(_on_next_frame_js__WEBPACK_IMPORTED_MODULE_0__["onNextFrame"])(processFrame);
  }
};
var startLoop = function startLoop() {
  runNextFrame = true;
  useDefaultElapsed = true;
  if (!isProcessing) Object(_on_next_frame_js__WEBPACK_IMPORTED_MODULE_0__["onNextFrame"])(processFrame);
};
var getFrameData = function getFrameData() {
  return frame;
};
/* harmony default export */ __webpack_exports__["default"] = (sync);


/***/ }),

/***/ "./node_modules/framesync/dist/es/on-next-frame.js":
/*!*********************************************************!*\
  !*** ./node_modules/framesync/dist/es/on-next-frame.js ***!
  \*********************************************************/
/*! exports provided: defaultTimestep, onNextFrame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultTimestep", function() { return defaultTimestep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onNextFrame", function() { return onNextFrame; });
var defaultTimestep = 1 / 60 * 1000;
var getCurrentTime = typeof performance !== "undefined" ? function () {
  return performance.now();
} : function () {
  return Date.now();
};
var onNextFrame = typeof window !== "undefined" ? function (callback) {
  return window.requestAnimationFrame(callback);
} : function (callback) {
  return setTimeout(function () {
    return callback(getCurrentTime());
  }, defaultTimestep);
};


/***/ }),

/***/ "./node_modules/hey-listen/dist/hey-listen.es.js":
/*!*******************************************************!*\
  !*** ./node_modules/hey-listen/dist/hey-listen.es.js ***!
  \*******************************************************/
/*! exports provided: invariant, warning */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invariant", function() { return invariant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warning", function() { return warning; });
var warning = function warning() {};
var invariant = function invariant() {};
if (true) {
  warning = function warning(check, message) {
    if (!check && typeof console !== 'undefined') {
      console.warn(message);
    }
  };
  invariant = function invariant(check, message) {
    if (!check) {
      throw new Error(message);
    }
  };
}


/***/ }),

/***/ "./node_modules/popmotion/dist/es/animations/generators/decay.js":
/*!***********************************************************************!*\
  !*** ./node_modules/popmotion/dist/es/animations/generators/decay.js ***!
  \***********************************************************************/
/*! exports provided: decay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decay", function() { return decay; });
function decay(_a) {
  var _b = _a.velocity,
    velocity = _b === void 0 ? 0 : _b,
    _c = _a.from,
    from = _c === void 0 ? 0 : _c,
    _d = _a.power,
    power = _d === void 0 ? 0.8 : _d,
    _e = _a.timeConstant,
    timeConstant = _e === void 0 ? 350 : _e,
    _f = _a.restDelta,
    restDelta = _f === void 0 ? 0.5 : _f,
    modifyTarget = _a.modifyTarget;
  var state = {
    done: false,
    value: from
  };
  var amplitude = power * velocity;
  var ideal = from + amplitude;
  var target = modifyTarget === undefined ? ideal : modifyTarget(ideal);
  if (target !== ideal) amplitude = target - from;
  return {
    next: function next(t) {
      var delta = -amplitude * Math.exp(-t / timeConstant);
      state.done = !(delta > restDelta || delta < -restDelta);
      state.value = state.done ? target : target + delta;
      return state;
    },
    flipTarget: function flipTarget() {}
  };
}


/***/ }),

/***/ "./node_modules/popmotion/dist/es/animations/generators/keyframes.js":
/*!***************************************************************************!*\
  !*** ./node_modules/popmotion/dist/es/animations/generators/keyframes.js ***!
  \***************************************************************************/
/*! exports provided: convertOffsetToTimes, defaultEasing, defaultOffset, keyframes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertOffsetToTimes", function() { return convertOffsetToTimes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultEasing", function() { return defaultEasing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultOffset", function() { return defaultOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return keyframes; });
/* harmony import */ var _utils_interpolate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/interpolate.js */ "./node_modules/popmotion/dist/es/utils/interpolate.js");
/* harmony import */ var _easing_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../easing/index.js */ "./node_modules/popmotion/dist/es/easing/index.js");


function defaultEasing(values, easing) {
  return values.map(function () {
    return easing || _easing_index_js__WEBPACK_IMPORTED_MODULE_1__["easeInOut"];
  }).splice(0, values.length - 1);
}
function defaultOffset(values) {
  var numValues = values.length;
  return values.map(function (_value, i) {
    return i !== 0 ? i / (numValues - 1) : 0;
  });
}
function convertOffsetToTimes(offset, duration) {
  return offset.map(function (o) {
    return o * duration;
  });
}
function keyframes(_a) {
  var _b = _a.from,
    from = _b === void 0 ? 0 : _b,
    _c = _a.to,
    to = _c === void 0 ? 1 : _c,
    ease = _a.ease,
    offset = _a.offset,
    _d = _a.duration,
    duration = _d === void 0 ? 300 : _d;
  var state = {
    done: false,
    value: from
  };
  var values = Array.isArray(to) ? to : [from, to];
  var times = convertOffsetToTimes(offset && offset.length === values.length ? offset : defaultOffset(values), duration);
  function createInterpolator() {
    return Object(_utils_interpolate_js__WEBPACK_IMPORTED_MODULE_0__["interpolate"])(times, values, {
      ease: Array.isArray(ease) ? ease : defaultEasing(values, ease)
    });
  }
  var interpolator = createInterpolator();
  return {
    next: function next(t) {
      state.value = interpolator(t);
      state.done = t >= duration;
      return state;
    },
    flipTarget: function flipTarget() {
      values.reverse();
      interpolator = createInterpolator();
    }
  };
}


/***/ }),

/***/ "./node_modules/popmotion/dist/es/animations/generators/spring.js":
/*!************************************************************************!*\
  !*** ./node_modules/popmotion/dist/es/animations/generators/spring.js ***!
  \************************************************************************/
/*! exports provided: spring */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spring", function() { return spring; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utils_find_spring_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/find-spring.js */ "./node_modules/popmotion/dist/es/animations/utils/find-spring.js");


var durationKeys = ["duration", "bounce"];
var physicsKeys = ["stiffness", "damping", "mass"];
function isSpringType(options, keys) {
  return keys.some(function (key) {
    return options[key] !== undefined;
  });
}
function getSpringOptions(options) {
  var springOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({
    velocity: 0.0,
    stiffness: 100,
    damping: 10,
    mass: 1.0,
    isResolvedFromDuration: false
  }, options);
  if (!isSpringType(options, physicsKeys) && isSpringType(options, durationKeys)) {
    var derived = Object(_utils_find_spring_js__WEBPACK_IMPORTED_MODULE_1__["findSpring"])(options);
    springOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, springOptions), derived), {
      velocity: 0.0,
      mass: 1.0
    });
    springOptions.isResolvedFromDuration = true;
  }
  return springOptions;
}
function spring(_a) {
  var _b = _a.from,
    from = _b === void 0 ? 0.0 : _b,
    _c = _a.to,
    to = _c === void 0 ? 1.0 : _c,
    _d = _a.restSpeed,
    restSpeed = _d === void 0 ? 2 : _d,
    restDelta = _a.restDelta,
    options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["from", "to", "restSpeed", "restDelta"]);
  var state = {
    done: false,
    value: from
  };
  var _e = getSpringOptions(options),
    stiffness = _e.stiffness,
    damping = _e.damping,
    mass = _e.mass,
    velocity = _e.velocity,
    duration = _e.duration,
    isResolvedFromDuration = _e.isResolvedFromDuration;
  var resolveSpring = zero;
  var resolveVelocity = zero;
  function createSpring() {
    var initialVelocity = velocity ? -(velocity / 1000) : 0.0;
    var initialDelta = to - from;
    var dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
    var undampedAngularFreq = Math.sqrt(stiffness / mass) / 1000;
    restDelta !== null && restDelta !== void 0 ? restDelta : restDelta = Math.abs(to - from) <= 1 ? 0.01 : 0.4;
    if (dampingRatio < 1) {
      var angularFreq_1 = Object(_utils_find_spring_js__WEBPACK_IMPORTED_MODULE_1__["calcAngularFreq"])(undampedAngularFreq, dampingRatio);
      resolveSpring = function resolveSpring(t) {
        var envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
        return to - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) / angularFreq_1 * Math.sin(angularFreq_1 * t) + initialDelta * Math.cos(angularFreq_1 * t));
      };
      resolveVelocity = function resolveVelocity(t) {
        var envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
        return dampingRatio * undampedAngularFreq * envelope * (Math.sin(angularFreq_1 * t) * (initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) / angularFreq_1 + initialDelta * Math.cos(angularFreq_1 * t)) - envelope * (Math.cos(angularFreq_1 * t) * (initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) - angularFreq_1 * initialDelta * Math.sin(angularFreq_1 * t));
      };
    } else if (dampingRatio === 1) {
      resolveSpring = function resolveSpring(t) {
        return to - Math.exp(-undampedAngularFreq * t) * (initialDelta + (initialVelocity + undampedAngularFreq * initialDelta) * t);
      };
    } else {
      var dampedAngularFreq_1 = undampedAngularFreq * Math.sqrt(dampingRatio * dampingRatio - 1);
      resolveSpring = function resolveSpring(t) {
        var envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
        var freqForT = Math.min(dampedAngularFreq_1 * t, 300);
        return to - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) * Math.sinh(freqForT) + dampedAngularFreq_1 * initialDelta * Math.cosh(freqForT)) / dampedAngularFreq_1;
      };
    }
  }
  createSpring();
  return {
    next: function next(t) {
      var current = resolveSpring(t);
      if (!isResolvedFromDuration) {
        var currentVelocity = resolveVelocity(t) * 1000;
        var isBelowVelocityThreshold = Math.abs(currentVelocity) <= restSpeed;
        var isBelowDisplacementThreshold = Math.abs(to - current) <= restDelta;
        state.done = isBelowVelocityThreshold && isBelowDisplacementThreshold;
      } else {
        state.done = t >= duration;
      }
      state.value = state.done ? to : current;
      return state;
    },
    flipTarget: function flipTarget() {
      var _a;
      velocity = -velocity;
      _a = [to, from], from = _a[0], to = _a[1];
      createSpring();
    }
  };
}
spring.needsInterpolation = function (a, b) {
  return typeof a === "string" || typeof b === "string";
};
var zero = function zero(_t) {
  return 0;
};


/***/ }),

/***/ "./node_modules/popmotion/dist/es/animations/index.js":
/*!************************************************************!*\
  !*** ./node_modules/popmotion/dist/es/animations/index.js ***!
  \************************************************************/
/*! exports provided: animate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animate", function() { return animate; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utils_detect_animation_from_options_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/detect-animation-from-options.js */ "./node_modules/popmotion/dist/es/animations/utils/detect-animation-from-options.js");
/* harmony import */ var framesync__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framesync */ "./node_modules/framesync/dist/es/index.js");
/* harmony import */ var _utils_interpolate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/interpolate.js */ "./node_modules/popmotion/dist/es/utils/interpolate.js");
/* harmony import */ var _utils_elapsed_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/elapsed.js */ "./node_modules/popmotion/dist/es/animations/utils/elapsed.js");





var framesync = function framesync(update) {
  var passTimestamp = function passTimestamp(_a) {
    var delta = _a.delta;
    return update(delta);
  };
  return {
    start: function start() {
      return framesync__WEBPACK_IMPORTED_MODULE_2__["default"].update(passTimestamp, true);
    },
    stop: function stop() {
      return framesync__WEBPACK_IMPORTED_MODULE_2__["cancelSync"].update(passTimestamp);
    }
  };
};
function animate(_a) {
  var _b, _c;
  var from = _a.from,
    _d = _a.autoplay,
    autoplay = _d === void 0 ? true : _d,
    _e = _a.driver,
    driver = _e === void 0 ? framesync : _e,
    _f = _a.elapsed,
    elapsed = _f === void 0 ? 0 : _f,
    _g = _a.repeat,
    repeatMax = _g === void 0 ? 0 : _g,
    _h = _a.repeatType,
    repeatType = _h === void 0 ? "loop" : _h,
    _j = _a.repeatDelay,
    repeatDelay = _j === void 0 ? 0 : _j,
    onPlay = _a.onPlay,
    onStop = _a.onStop,
    onComplete = _a.onComplete,
    onRepeat = _a.onRepeat,
    onUpdate = _a.onUpdate,
    options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["from", "autoplay", "driver", "elapsed", "repeat", "repeatType", "repeatDelay", "onPlay", "onStop", "onComplete", "onRepeat", "onUpdate"]);
  var to = options.to;
  var driverControls;
  var repeatCount = 0;
  var computedDuration = options.duration;
  var latest;
  var isComplete = false;
  var isForwardPlayback = true;
  var interpolateFromNumber;
  var animator = Object(_utils_detect_animation_from_options_js__WEBPACK_IMPORTED_MODULE_1__["detectAnimationFromOptions"])(options);
  if ((_c = (_b = animator).needsInterpolation) === null || _c === void 0 ? void 0 : _c.call(_b, from, to)) {
    interpolateFromNumber = Object(_utils_interpolate_js__WEBPACK_IMPORTED_MODULE_3__["interpolate"])([0, 100], [from, to], {
      clamp: false
    });
    from = 0;
    to = 100;
  }
  var animation = animator(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), {
    from: from,
    to: to
  }));
  function repeat() {
    repeatCount++;
    if (repeatType === "reverse") {
      isForwardPlayback = repeatCount % 2 === 0;
      elapsed = Object(_utils_elapsed_js__WEBPACK_IMPORTED_MODULE_4__["reverseElapsed"])(elapsed, computedDuration, repeatDelay, isForwardPlayback);
    } else {
      elapsed = Object(_utils_elapsed_js__WEBPACK_IMPORTED_MODULE_4__["loopElapsed"])(elapsed, computedDuration, repeatDelay);
      if (repeatType === "mirror") animation.flipTarget();
    }
    isComplete = false;
    onRepeat && onRepeat();
  }
  function complete() {
    driverControls.stop();
    onComplete && onComplete();
  }
  function update(delta) {
    if (!isForwardPlayback) delta = -delta;
    elapsed += delta;
    if (!isComplete) {
      var state = animation.next(Math.max(0, elapsed));
      latest = state.value;
      if (interpolateFromNumber) latest = interpolateFromNumber(latest);
      isComplete = isForwardPlayback ? state.done : elapsed <= 0;
    }
    onUpdate === null || onUpdate === void 0 ? void 0 : onUpdate(latest);
    if (isComplete) {
      if (repeatCount === 0) computedDuration !== null && computedDuration !== void 0 ? computedDuration : computedDuration = elapsed;
      if (repeatCount < repeatMax) {
        Object(_utils_elapsed_js__WEBPACK_IMPORTED_MODULE_4__["hasRepeatDelayElapsed"])(elapsed, computedDuration, repeatDelay, isForwardPlayback) && repeat();
      } else {
        complete();
      }
    }
  }
  function play() {
    onPlay === null || onPlay === void 0 ? void 0 : onPlay();
    driverControls = driver(update);
    driverControls.start();
  }
  autoplay && play();
  return {
    stop: function stop() {
      onStop === null || onStop === void 0 ? void 0 : onStop();
      driverControls.stop();
    }
  };
}


/***/ }),

/***/ "./node_modules/popmotion/dist/es/animations/inertia.js":
/*!**************************************************************!*\
  !*** ./node_modules/popmotion/dist/es/animations/inertia.js ***!
  \**************************************************************/
/*! exports provided: inertia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inertia", function() { return inertia; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./node_modules/popmotion/dist/es/animations/index.js");
/* harmony import */ var _utils_velocity_per_second_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/velocity-per-second.js */ "./node_modules/popmotion/dist/es/utils/velocity-per-second.js");
/* harmony import */ var framesync__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framesync */ "./node_modules/framesync/dist/es/index.js");




function inertia(_a) {
  var _b = _a.from,
    from = _b === void 0 ? 0 : _b,
    _c = _a.velocity,
    velocity = _c === void 0 ? 0 : _c,
    min = _a.min,
    max = _a.max,
    _d = _a.power,
    power = _d === void 0 ? 0.8 : _d,
    _e = _a.timeConstant,
    timeConstant = _e === void 0 ? 750 : _e,
    _f = _a.bounceStiffness,
    bounceStiffness = _f === void 0 ? 500 : _f,
    _g = _a.bounceDamping,
    bounceDamping = _g === void 0 ? 10 : _g,
    _h = _a.restDelta,
    restDelta = _h === void 0 ? 1 : _h,
    modifyTarget = _a.modifyTarget,
    driver = _a.driver,
    _onUpdate = _a.onUpdate,
    onComplete = _a.onComplete;
  var currentAnimation;
  function isOutOfBounds(v) {
    return min !== undefined && v < min || max !== undefined && v > max;
  }
  function boundaryNearest(v) {
    if (min === undefined) return max;
    if (max === undefined) return min;
    return Math.abs(min - v) < Math.abs(max - v) ? min : max;
  }
  function startAnimation(options) {
    currentAnimation === null || currentAnimation === void 0 ? void 0 : currentAnimation.stop();
    currentAnimation = Object(_index_js__WEBPACK_IMPORTED_MODULE_1__["animate"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), {
      driver: driver,
      onUpdate: function onUpdate(v) {
        var _a;
        _onUpdate === null || _onUpdate === void 0 ? void 0 : _onUpdate(v);
        (_a = options.onUpdate) === null || _a === void 0 ? void 0 : _a.call(options, v);
      },
      onComplete: onComplete
    }));
  }
  function startSpring(options) {
    startAnimation(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({
      type: "spring",
      stiffness: bounceStiffness,
      damping: bounceDamping,
      restDelta: restDelta
    }, options));
  }
  if (isOutOfBounds(from)) {
    startSpring({
      from: from,
      velocity: velocity,
      to: boundaryNearest(from)
    });
  } else {
    var target = power * velocity + from;
    if (typeof modifyTarget !== "undefined") target = modifyTarget(target);
    var boundary_1 = boundaryNearest(target);
    var heading_1 = boundary_1 === min ? -1 : 1;
    var prev_1;
    var current_1;
    var checkBoundary = function checkBoundary(v) {
      prev_1 = current_1;
      current_1 = v;
      velocity = Object(_utils_velocity_per_second_js__WEBPACK_IMPORTED_MODULE_2__["velocityPerSecond"])(v - prev_1, Object(framesync__WEBPACK_IMPORTED_MODULE_3__["getFrameData"])().delta);
      if (heading_1 === 1 && v > boundary_1 || heading_1 === -1 && v < boundary_1) {
        startSpring({
          from: v,
          to: boundary_1,
          velocity: velocity
        });
      }
    };
    startAnimation({
      type: "decay",
      from: from,
      velocity: velocity,
      timeConstant: timeConstant,
      power: power,
      restDelta: restDelta,
      modifyTarget: modifyTarget,
      onUpdate: isOutOfBounds(target) ? checkBoundary : undefined
    });
  }
  return {
    stop: function stop() {
      return currentAnimation === null || currentAnimation === void 0 ? void 0 : currentAnimation.stop();
    }
  };
}


/***/ }),

/***/ "./node_modules/popmotion/dist/es/animations/utils/detect-animation-from-options.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/popmotion/dist/es/animations/utils/detect-animation-from-options.js ***!
  \******************************************************************************************/
/*! exports provided: detectAnimationFromOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detectAnimationFromOptions", function() { return detectAnimationFromOptions; });
/* harmony import */ var _generators_spring_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../generators/spring.js */ "./node_modules/popmotion/dist/es/animations/generators/spring.js");
/* harmony import */ var _generators_keyframes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../generators/keyframes.js */ "./node_modules/popmotion/dist/es/animations/generators/keyframes.js");
/* harmony import */ var _generators_decay_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../generators/decay.js */ "./node_modules/popmotion/dist/es/animations/generators/decay.js");



var types = {
  keyframes: _generators_keyframes_js__WEBPACK_IMPORTED_MODULE_1__["keyframes"],
  spring: _generators_spring_js__WEBPACK_IMPORTED_MODULE_0__["spring"],
  decay: _generators_decay_js__WEBPACK_IMPORTED_MODULE_2__["decay"]
};
function detectAnimationFromOptions(config) {
  if (Array.isArray(config.to)) {
    return _generators_keyframes_js__WEBPACK_IMPORTED_MODULE_1__["keyframes"];
  } else if (types[config.type]) {
    return types[config.type];
  }
  var keys = new Set(Object.keys(config));
  if (keys.has("ease") || keys.has("duration") && !keys.has("dampingRatio")) {
    return _generators_keyframes_js__WEBPACK_IMPORTED_MODULE_1__["keyframes"];
  } else if (keys.has("dampingRatio") || keys.has("stiffness") || keys.has("mass") || keys.has("damping") || keys.has("restSpeed") || keys.has("restDelta")) {
    return _generators_spring_js__WEBPACK_IMPORTED_MODULE_0__["spring"];
  }
  return _generators_keyframes_js__WEBPACK_IMPORTED_MODULE_1__["keyframes"];
}


/***/ }),

/***/ "./node_modules/popmotion/dist/es/animations/utils/elapsed.js":
/*!********************************************************************!*\
  !*** ./node_modules/popmotion/dist/es/animations/utils/elapsed.js ***!
  \********************************************************************/
/*! exports provided: hasRepeatDelayElapsed, loopElapsed, reverseElapsed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasRepeatDelayElapsed", function() { return hasRepeatDelayElapsed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loopElapsed", function() { return loopElapsed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reverseElapsed", function() { return reverseElapsed; });
function loopElapsed(elapsed, duration, delay) {
  if (delay === void 0) {
    delay = 0;
  }
  return elapsed - duration - delay;
}
function reverseElapsed(elapsed, duration, delay, isForwardPlayback) {
  if (delay === void 0) {
    delay = 0;
  }
  if (isForwardPlayback === void 0) {
    isForwardPlayback = true;
  }
  return isForwardPlayback ? loopElapsed(duration + -elapsed, duration, delay) : duration - (elapsed - duration) + delay;
}
function hasRepeatDelayElapsed(elapsed, duration, delay, isForwardPlayback) {
  return isForwardPlayback ? elapsed >= duration + delay : elapsed <= -delay;
}


/***/ }),

/***/ "./node_modules/popmotion/dist/es/animations/utils/find-spring.js":
/*!************************************************************************!*\
  !*** ./node_modules/popmotion/dist/es/animations/utils/find-spring.js ***!
  \************************************************************************/
/*! exports provided: calcAngularFreq, findSpring, maxDamping, maxDuration, minDamping, minDuration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcAngularFreq", function() { return calcAngularFreq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findSpring", function() { return findSpring; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxDamping", function() { return maxDamping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxDuration", function() { return maxDuration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minDamping", function() { return minDamping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minDuration", function() { return minDuration; });
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");
/* harmony import */ var _utils_clamp_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/clamp.js */ "./node_modules/popmotion/dist/es/utils/clamp.js");


var safeMin = 0.001;
var minDuration = 0.01;
var maxDuration = 10.0;
var minDamping = 0.05;
var maxDamping = 1;
function findSpring(_a) {
  var _b = _a.duration,
    duration = _b === void 0 ? 800 : _b,
    _c = _a.bounce,
    bounce = _c === void 0 ? 0.25 : _c,
    _d = _a.velocity,
    velocity = _d === void 0 ? 0 : _d,
    _e = _a.mass,
    mass = _e === void 0 ? 1 : _e;
  var envelope;
  var derivative;
  Object(hey_listen__WEBPACK_IMPORTED_MODULE_0__["warning"])(duration <= maxDuration * 1000, "Spring duration must be 10 seconds or less");
  var dampingRatio = 1 - bounce;
  dampingRatio = Object(_utils_clamp_js__WEBPACK_IMPORTED_MODULE_1__["clamp"])(minDamping, maxDamping, dampingRatio);
  duration = Object(_utils_clamp_js__WEBPACK_IMPORTED_MODULE_1__["clamp"])(minDuration, maxDuration, duration / 1000);
  if (dampingRatio < 1) {
    envelope = function envelope(undampedFreq) {
      var exponentialDecay = undampedFreq * dampingRatio;
      var delta = exponentialDecay * duration;
      var a = exponentialDecay - velocity;
      var b = calcAngularFreq(undampedFreq, dampingRatio);
      var c = Math.exp(-delta);
      return safeMin - a / b * c;
    };
    derivative = function derivative(undampedFreq) {
      var exponentialDecay = undampedFreq * dampingRatio;
      var delta = exponentialDecay * duration;
      var d = delta * velocity + velocity;
      var e = Math.pow(dampingRatio, 2) * Math.pow(undampedFreq, 2) * duration;
      var f = Math.exp(-delta);
      var g = calcAngularFreq(Math.pow(undampedFreq, 2), dampingRatio);
      var factor = -envelope(undampedFreq) + safeMin > 0 ? -1 : 1;
      return factor * ((d - e) * f) / g;
    };
  } else {
    envelope = function envelope(undampedFreq) {
      var a = Math.exp(-undampedFreq * duration);
      var b = (undampedFreq - velocity) * duration + 1;
      return -safeMin + a * b;
    };
    derivative = function derivative(undampedFreq) {
      var a = Math.exp(-undampedFreq * duration);
      var b = (velocity - undampedFreq) * (duration * duration);
      return a * b;
    };
  }
  var initialGuess = 5 / duration;
  var undampedFreq = approximateRoot(envelope, derivative, initialGuess);
  duration = duration * 1000;
  if (isNaN(undampedFreq)) {
    return {
      stiffness: 100,
      damping: 10,
      duration: duration
    };
  } else {
    var stiffness = Math.pow(undampedFreq, 2) * mass;
    return {
      stiffness: stiffness,
      damping: dampingRatio * 2 * Math.sqrt(mass * stiffness),
      duration: duration
    };
  }
}
var rootIterations = 12;
function approximateRoot(envelope, derivative, initialGuess) {
  var result = initialGuess;
  for (var i = 1; i < rootIterations; i++) {
    result = result - envelope(result) / derivative(result);
  }
  return result;
}
function calcAngularFreq(undampedFreq, dampingRatio) {
  return undampedFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
}


/***/ }),

/***/ "./node_modules/popmotion/dist/es/easing/cubic-bezier.js":
/*!***************************************************************!*\
  !*** ./node_modules/popmotion/dist/es/easing/cubic-bezier.js ***!
  \***************************************************************/
/*! exports provided: cubicBezier */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cubicBezier", function() { return cubicBezier; });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/popmotion/dist/es/easing/index.js");

var a = function a(a1, a2) {
  return 1.0 - 3.0 * a2 + 3.0 * a1;
};
var b = function b(a1, a2) {
  return 3.0 * a2 - 6.0 * a1;
};
var c = function c(a1) {
  return 3.0 * a1;
};
var calcBezier = function calcBezier(t, a1, a2) {
  return ((a(a1, a2) * t + b(a1, a2)) * t + c(a1)) * t;
};
var getSlope = function getSlope(t, a1, a2) {
  return 3.0 * a(a1, a2) * t * t + 2.0 * b(a1, a2) * t + c(a1);
};
var subdivisionPrecision = 0.0000001;
var subdivisionMaxIterations = 10;
function binarySubdivide(aX, aA, aB, mX1, mX2) {
  var currentX;
  var currentT;
  var i = 0;
  do {
    currentT = aA + (aB - aA) / 2.0;
    currentX = calcBezier(currentT, mX1, mX2) - aX;
    if (currentX > 0.0) {
      aB = currentT;
    } else {
      aA = currentT;
    }
  } while (Math.abs(currentX) > subdivisionPrecision && ++i < subdivisionMaxIterations);
  return currentT;
}
var newtonIterations = 8;
var newtonMinSlope = 0.001;
function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
  for (var i = 0; i < newtonIterations; ++i) {
    var currentSlope = getSlope(aGuessT, mX1, mX2);
    if (currentSlope === 0.0) {
      return aGuessT;
    }
    var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
    aGuessT -= currentX / currentSlope;
  }
  return aGuessT;
}
var kSplineTableSize = 11;
var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);
function cubicBezier(mX1, mY1, mX2, mY2) {
  if (mX1 === mY1 && mX2 === mY2) return _index_js__WEBPACK_IMPORTED_MODULE_0__["linear"];
  var sampleValues = new Float32Array(kSplineTableSize);
  for (var i = 0; i < kSplineTableSize; ++i) {
    sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
  }
  function getTForX(aX) {
    var intervalStart = 0.0;
    var currentSample = 1;
    var lastSample = kSplineTableSize - 1;
    for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
      intervalStart += kSampleStepSize;
    }
    --currentSample;
    var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
    var guessForT = intervalStart + dist * kSampleStepSize;
    var initialSlope = getSlope(guessForT, mX1, mX2);
    if (initialSlope >= newtonMinSlope) {
      return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
    } else if (initialSlope === 0.0) {
      return guessForT;
    } else {
      return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
    }
  }
  return function (t) {
    return t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
  };
}


/***/ }),

/***/ "./node_modules/popmotion/dist/es/easing/index.js":
/*!********************************************************!*\
  !*** ./node_modules/popmotion/dist/es/easing/index.js ***!
  \********************************************************/
/*! exports provided: anticipate, backIn, backInOut, backOut, bounceIn, bounceInOut, bounceOut, circIn, circInOut, circOut, easeIn, easeInOut, easeOut, linear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "anticipate", function() { return anticipate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backIn", function() { return backIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backInOut", function() { return backInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backOut", function() { return backOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceIn", function() { return bounceIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceInOut", function() { return bounceInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceOut", function() { return bounceOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circIn", function() { return circIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circInOut", function() { return circInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circOut", function() { return circOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeIn", function() { return easeIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInOut", function() { return easeInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeOut", function() { return easeOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linear", function() { return linear; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./node_modules/popmotion/dist/es/easing/utils.js");

var DEFAULT_OVERSHOOT_STRENGTH = 1.525;
var BOUNCE_FIRST_THRESHOLD = 4.0 / 11.0;
var BOUNCE_SECOND_THRESHOLD = 8.0 / 11.0;
var BOUNCE_THIRD_THRESHOLD = 9.0 / 10.0;
var linear = function linear(p) {
  return p;
};
var easeIn = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["createExpoIn"])(2);
var easeOut = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["reverseEasing"])(easeIn);
var easeInOut = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["mirrorEasing"])(easeIn);
var circIn = function circIn(p) {
  return 1 - Math.sin(Math.acos(p));
};
var circOut = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["reverseEasing"])(circIn);
var circInOut = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["mirrorEasing"])(circOut);
var backIn = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["createBackIn"])(DEFAULT_OVERSHOOT_STRENGTH);
var backOut = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["reverseEasing"])(backIn);
var backInOut = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["mirrorEasing"])(backIn);
var anticipate = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["createAnticipate"])(DEFAULT_OVERSHOOT_STRENGTH);
var ca = 4356.0 / 361.0;
var cb = 35442.0 / 1805.0;
var cc = 16061.0 / 1805.0;
var bounceOut = function bounceOut(p) {
  if (p === 1 || p === 0) return p;
  var p2 = p * p;
  return p < BOUNCE_FIRST_THRESHOLD ? 7.5625 * p2 : p < BOUNCE_SECOND_THRESHOLD ? 9.075 * p2 - 9.9 * p + 3.4 : p < BOUNCE_THIRD_THRESHOLD ? ca * p2 - cb * p + cc : 10.8 * p * p - 20.52 * p + 10.72;
};
var bounceIn = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["reverseEasing"])(bounceOut);
var bounceInOut = function bounceInOut(p) {
  return p < 0.5 ? 0.5 * (1.0 - bounceOut(1.0 - p * 2.0)) : 0.5 * bounceOut(p * 2.0 - 1.0) + 0.5;
};


/***/ }),

/***/ "./node_modules/popmotion/dist/es/easing/steps.js":
/*!********************************************************!*\
  !*** ./node_modules/popmotion/dist/es/easing/steps.js ***!
  \********************************************************/
/*! exports provided: steps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "steps", function() { return steps; });
/* harmony import */ var _utils_clamp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/clamp.js */ "./node_modules/popmotion/dist/es/utils/clamp.js");

var steps = function steps(_steps, direction) {
  if (direction === void 0) {
    direction = 'end';
  }
  return function (progress) {
    progress = direction === 'end' ? Math.min(progress, 0.999) : Math.max(progress, 0.001);
    var expanded = progress * _steps;
    var rounded = direction === 'end' ? Math.floor(expanded) : Math.ceil(expanded);
    return Object(_utils_clamp_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])(0, 1, rounded / _steps);
  };
};


/***/ }),

/***/ "./node_modules/popmotion/dist/es/easing/utils.js":
/*!********************************************************!*\
  !*** ./node_modules/popmotion/dist/es/easing/utils.js ***!
  \********************************************************/
/*! exports provided: createAnticipate, createBackIn, createExpoIn, mirrorEasing, reverseEasing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAnticipate", function() { return createAnticipate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBackIn", function() { return createBackIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createExpoIn", function() { return createExpoIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mirrorEasing", function() { return mirrorEasing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reverseEasing", function() { return reverseEasing; });
var reverseEasing = function reverseEasing(easing) {
  return function (p) {
    return 1 - easing(1 - p);
  };
};
var mirrorEasing = function mirrorEasing(easing) {
  return function (p) {
    return p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;
  };
};
var createExpoIn = function createExpoIn(power) {
  return function (p) {
    return Math.pow(p, power);
  };
};
var createBackIn = function createBackIn(power) {
  return function (p) {
    return p * p * ((power + 1) * p - power);
  };
};
var createAnticipate = function createAnticipate(power) {
  var backEasing = createBackIn(power);
  return function (p) {
    return (p *= 2) < 1 ? 0.5 * backEasing(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));
  };
};


/***/ }),

/***/ "./node_modules/popmotion/dist/es/index.js":
/*!*************************************************!*\
  !*** ./node_modules/popmotion/dist/es/index.js ***!
  \*************************************************/
/*! exports provided: animate, inertia, decay, spring, keyframes, angle, applyOffset, attract, attractExpo, createAttractor, clamp, degreesToRadians, distance, interpolate, isPoint3D, isPoint, mixColor, mixComplex, mix, pipe, pointFromVector, progress, radiansToDegrees, smoothFrame, smooth, snap, toDecimal, velocityPerFrame, velocityPerSecond, wrap, anticipate, backIn, backInOut, backOut, bounceIn, bounceInOut, bounceOut, circIn, circInOut, circOut, easeIn, easeInOut, easeOut, linear, cubicBezier, steps, createAnticipate, createBackIn, createExpoIn, mirrorEasing, reverseEasing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _animations_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animations/index.js */ "./node_modules/popmotion/dist/es/animations/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "animate", function() { return _animations_index_js__WEBPACK_IMPORTED_MODULE_0__["animate"]; });

/* harmony import */ var _animations_inertia_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animations/inertia.js */ "./node_modules/popmotion/dist/es/animations/inertia.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inertia", function() { return _animations_inertia_js__WEBPACK_IMPORTED_MODULE_1__["inertia"]; });

/* harmony import */ var _animations_generators_decay_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animations/generators/decay.js */ "./node_modules/popmotion/dist/es/animations/generators/decay.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "decay", function() { return _animations_generators_decay_js__WEBPACK_IMPORTED_MODULE_2__["decay"]; });

/* harmony import */ var _animations_generators_spring_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animations/generators/spring.js */ "./node_modules/popmotion/dist/es/animations/generators/spring.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "spring", function() { return _animations_generators_spring_js__WEBPACK_IMPORTED_MODULE_3__["spring"]; });

/* harmony import */ var _animations_generators_keyframes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./animations/generators/keyframes.js */ "./node_modules/popmotion/dist/es/animations/generators/keyframes.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return _animations_generators_keyframes_js__WEBPACK_IMPORTED_MODULE_4__["keyframes"]; });

/* harmony import */ var _utils_angle_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/angle.js */ "./node_modules/popmotion/dist/es/utils/angle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "angle", function() { return _utils_angle_js__WEBPACK_IMPORTED_MODULE_5__["angle"]; });

/* harmony import */ var _utils_apply_offset_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/apply-offset.js */ "./node_modules/popmotion/dist/es/utils/apply-offset.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyOffset", function() { return _utils_apply_offset_js__WEBPACK_IMPORTED_MODULE_6__["applyOffset"]; });

/* harmony import */ var _utils_attract_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/attract.js */ "./node_modules/popmotion/dist/es/utils/attract.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "attract", function() { return _utils_attract_js__WEBPACK_IMPORTED_MODULE_7__["attract"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "attractExpo", function() { return _utils_attract_js__WEBPACK_IMPORTED_MODULE_7__["attractExpo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAttractor", function() { return _utils_attract_js__WEBPACK_IMPORTED_MODULE_7__["createAttractor"]; });

/* harmony import */ var _utils_clamp_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/clamp.js */ "./node_modules/popmotion/dist/es/utils/clamp.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clamp", function() { return _utils_clamp_js__WEBPACK_IMPORTED_MODULE_8__["clamp"]; });

/* harmony import */ var _utils_degrees_to_radians_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/degrees-to-radians.js */ "./node_modules/popmotion/dist/es/utils/degrees-to-radians.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "degreesToRadians", function() { return _utils_degrees_to_radians_js__WEBPACK_IMPORTED_MODULE_9__["degreesToRadians"]; });

/* harmony import */ var _utils_distance_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/distance.js */ "./node_modules/popmotion/dist/es/utils/distance.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "distance", function() { return _utils_distance_js__WEBPACK_IMPORTED_MODULE_10__["distance"]; });

/* harmony import */ var _utils_interpolate_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/interpolate.js */ "./node_modules/popmotion/dist/es/utils/interpolate.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolate", function() { return _utils_interpolate_js__WEBPACK_IMPORTED_MODULE_11__["interpolate"]; });

/* harmony import */ var _utils_is_point_3d_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils/is-point-3d.js */ "./node_modules/popmotion/dist/es/utils/is-point-3d.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPoint3D", function() { return _utils_is_point_3d_js__WEBPACK_IMPORTED_MODULE_12__["isPoint3D"]; });

/* harmony import */ var _utils_is_point_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utils/is-point.js */ "./node_modules/popmotion/dist/es/utils/is-point.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPoint", function() { return _utils_is_point_js__WEBPACK_IMPORTED_MODULE_13__["isPoint"]; });

/* harmony import */ var _utils_mix_color_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./utils/mix-color.js */ "./node_modules/popmotion/dist/es/utils/mix-color.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mixColor", function() { return _utils_mix_color_js__WEBPACK_IMPORTED_MODULE_14__["mixColor"]; });

/* harmony import */ var _utils_mix_complex_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./utils/mix-complex.js */ "./node_modules/popmotion/dist/es/utils/mix-complex.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mixComplex", function() { return _utils_mix_complex_js__WEBPACK_IMPORTED_MODULE_15__["mixComplex"]; });

/* harmony import */ var _utils_mix_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./utils/mix.js */ "./node_modules/popmotion/dist/es/utils/mix.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mix", function() { return _utils_mix_js__WEBPACK_IMPORTED_MODULE_16__["mix"]; });

/* harmony import */ var _utils_pipe_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./utils/pipe.js */ "./node_modules/popmotion/dist/es/utils/pipe.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pipe", function() { return _utils_pipe_js__WEBPACK_IMPORTED_MODULE_17__["pipe"]; });

/* harmony import */ var _utils_point_from_vector_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./utils/point-from-vector.js */ "./node_modules/popmotion/dist/es/utils/point-from-vector.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pointFromVector", function() { return _utils_point_from_vector_js__WEBPACK_IMPORTED_MODULE_18__["pointFromVector"]; });

/* harmony import */ var _utils_progress_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./utils/progress.js */ "./node_modules/popmotion/dist/es/utils/progress.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "progress", function() { return _utils_progress_js__WEBPACK_IMPORTED_MODULE_19__["progress"]; });

/* harmony import */ var _utils_radians_to_degrees_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./utils/radians-to-degrees.js */ "./node_modules/popmotion/dist/es/utils/radians-to-degrees.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "radiansToDegrees", function() { return _utils_radians_to_degrees_js__WEBPACK_IMPORTED_MODULE_20__["radiansToDegrees"]; });

/* harmony import */ var _utils_smooth_frame_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./utils/smooth-frame.js */ "./node_modules/popmotion/dist/es/utils/smooth-frame.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "smoothFrame", function() { return _utils_smooth_frame_js__WEBPACK_IMPORTED_MODULE_21__["smoothFrame"]; });

/* harmony import */ var _utils_smooth_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./utils/smooth.js */ "./node_modules/popmotion/dist/es/utils/smooth.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "smooth", function() { return _utils_smooth_js__WEBPACK_IMPORTED_MODULE_22__["smooth"]; });

/* harmony import */ var _utils_snap_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./utils/snap.js */ "./node_modules/popmotion/dist/es/utils/snap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "snap", function() { return _utils_snap_js__WEBPACK_IMPORTED_MODULE_23__["snap"]; });

/* harmony import */ var _utils_to_decimal_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./utils/to-decimal.js */ "./node_modules/popmotion/dist/es/utils/to-decimal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toDecimal", function() { return _utils_to_decimal_js__WEBPACK_IMPORTED_MODULE_24__["toDecimal"]; });

/* harmony import */ var _utils_velocity_per_frame_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./utils/velocity-per-frame.js */ "./node_modules/popmotion/dist/es/utils/velocity-per-frame.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "velocityPerFrame", function() { return _utils_velocity_per_frame_js__WEBPACK_IMPORTED_MODULE_25__["velocityPerFrame"]; });

/* harmony import */ var _utils_velocity_per_second_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./utils/velocity-per-second.js */ "./node_modules/popmotion/dist/es/utils/velocity-per-second.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "velocityPerSecond", function() { return _utils_velocity_per_second_js__WEBPACK_IMPORTED_MODULE_26__["velocityPerSecond"]; });

/* harmony import */ var _utils_wrap_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./utils/wrap.js */ "./node_modules/popmotion/dist/es/utils/wrap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return _utils_wrap_js__WEBPACK_IMPORTED_MODULE_27__["wrap"]; });

/* harmony import */ var _easing_index_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./easing/index.js */ "./node_modules/popmotion/dist/es/easing/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "anticipate", function() { return _easing_index_js__WEBPACK_IMPORTED_MODULE_28__["anticipate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "backIn", function() { return _easing_index_js__WEBPACK_IMPORTED_MODULE_28__["backIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "backInOut", function() { return _easing_index_js__WEBPACK_IMPORTED_MODULE_28__["backInOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "backOut", function() { return _easing_index_js__WEBPACK_IMPORTED_MODULE_28__["backOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bounceIn", function() { return _easing_index_js__WEBPACK_IMPORTED_MODULE_28__["bounceIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bounceInOut", function() { return _easing_index_js__WEBPACK_IMPORTED_MODULE_28__["bounceInOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bounceOut", function() { return _easing_index_js__WEBPACK_IMPORTED_MODULE_28__["bounceOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "circIn", function() { return _easing_index_js__WEBPACK_IMPORTED_MODULE_28__["circIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "circInOut", function() { return _easing_index_js__WEBPACK_IMPORTED_MODULE_28__["circInOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "circOut", function() { return _easing_index_js__WEBPACK_IMPORTED_MODULE_28__["circOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeIn", function() { return _easing_index_js__WEBPACK_IMPORTED_MODULE_28__["easeIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeInOut", function() { return _easing_index_js__WEBPACK_IMPORTED_MODULE_28__["easeInOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeOut", function() { return _easing_index_js__WEBPACK_IMPORTED_MODULE_28__["easeOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "linear", function() { return _easing_index_js__WEBPACK_IMPORTED_MODULE_28__["linear"]; });

/* harmony import */ var _easing_cubic_bezier_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./easing/cubic-bezier.js */ "./node_modules/popmotion/dist/es/easing/cubic-bezier.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cubicBezier", function() { return _easing_cubic_bezier_js__WEBPACK_IMPORTED_MODULE_29__["cubicBezier"]; });

/* harmony import */ var _easing_steps_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./easing/steps.js */ "./node_modules/popmotion/dist/es/easing/steps.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "steps", function() { return _easing_steps_js__WEBPACK_IMPORTED_MODULE_30__["steps"]; });

/* harmony import */ var _easing_utils_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./easing/utils.js */ "./node_modules/popmotion/dist/es/easing/utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAnticipate", function() { return _easing_utils_js__WEBPACK_IMPORTED_MODULE_31__["createAnticipate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createBackIn", function() { return _easing_utils_js__WEBPACK_IMPORTED_MODULE_31__["createBackIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createExpoIn", function() { return _easing_utils_js__WEBPACK_IMPORTED_MODULE_31__["createExpoIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mirrorEasing", function() { return _easing_utils_js__WEBPACK_IMPORTED_MODULE_31__["mirrorEasing"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reverseEasing", function() { return _easing_utils_js__WEBPACK_IMPORTED_MODULE_31__["reverseEasing"]; });


































/***/ }),

/***/ "./node_modules/popmotion/dist/es/utils/angle.js":
/*!*******************************************************!*\
  !*** ./node_modules/popmotion/dist/es/utils/angle.js ***!
  \*******************************************************/
/*! exports provided: angle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "angle", function() { return angle; });
/* harmony import */ var _radians_to_degrees_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./radians-to-degrees.js */ "./node_modules/popmotion/dist/es/utils/radians-to-degrees.js");
/* harmony import */ var _inc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inc.js */ "./node_modules/popmotion/dist/es/utils/inc.js");


var angle = function angle(a, b) {
  if (b === void 0) {
    b = _inc_js__WEBPACK_IMPORTED_MODULE_1__["zeroPoint"];
  }
  return Object(_radians_to_degrees_js__WEBPACK_IMPORTED_MODULE_0__["radiansToDegrees"])(Math.atan2(b.y - a.y, b.x - a.x));
};


/***/ }),

/***/ "./node_modules/popmotion/dist/es/utils/apply-offset.js":
/*!**************************************************************!*\
  !*** ./node_modules/popmotion/dist/es/utils/apply-offset.js ***!
  \**************************************************************/
/*! exports provided: applyOffset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyOffset", function() { return applyOffset; });
var applyOffset = function applyOffset(from, to) {
  var hasReceivedFrom = true;
  if (to === undefined) {
    to = from;
    hasReceivedFrom = false;
  }
  return function (v) {
    if (hasReceivedFrom) {
      return v - from + to;
    } else {
      from = v;
      hasReceivedFrom = true;
      return to;
    }
  };
};


/***/ }),

/***/ "./node_modules/popmotion/dist/es/utils/attract.js":
/*!*********************************************************!*\
  !*** ./node_modules/popmotion/dist/es/utils/attract.js ***!
  \*********************************************************/
/*! exports provided: attract, attractExpo, createAttractor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attract", function() { return attract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attractExpo", function() { return attractExpo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAttractor", function() { return createAttractor; });
var identity = function identity(v) {
  return v;
};
var createAttractor = function createAttractor(alterDisplacement) {
  if (alterDisplacement === void 0) {
    alterDisplacement = identity;
  }
  return function (constant, origin, v) {
    var displacement = origin - v;
    var springModifiedDisplacement = -(0 - constant + 1) * (0 - alterDisplacement(Math.abs(displacement)));
    return displacement <= 0 ? origin + springModifiedDisplacement : origin - springModifiedDisplacement;
  };
};
var attract = createAttractor();
var attractExpo = createAttractor(Math.sqrt);


/***/ }),

/***/ "./node_modules/popmotion/dist/es/utils/clamp.js":
/*!*******************************************************!*\
  !*** ./node_modules/popmotion/dist/es/utils/clamp.js ***!
  \*******************************************************/
/*! exports provided: clamp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clamp", function() { return clamp; });
var clamp = function clamp(min, max, v) {
  return Math.min(Math.max(v, min), max);
};


/***/ }),

/***/ "./node_modules/popmotion/dist/es/utils/degrees-to-radians.js":
/*!********************************************************************!*\
  !*** ./node_modules/popmotion/dist/es/utils/degrees-to-radians.js ***!
  \********************************************************************/
/*! exports provided: degreesToRadians */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "degreesToRadians", function() { return degreesToRadians; });
var degreesToRadians = function degreesToRadians(degrees) {
  return degrees * Math.PI / 180;
};


/***/ }),

/***/ "./node_modules/popmotion/dist/es/utils/distance.js":
/*!**********************************************************!*\
  !*** ./node_modules/popmotion/dist/es/utils/distance.js ***!
  \**********************************************************/
/*! exports provided: distance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distance", function() { return distance; });
/* harmony import */ var _is_point_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-point.js */ "./node_modules/popmotion/dist/es/utils/is-point.js");
/* harmony import */ var _is_point_3d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is-point-3d.js */ "./node_modules/popmotion/dist/es/utils/is-point-3d.js");
/* harmony import */ var _inc_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inc.js */ "./node_modules/popmotion/dist/es/utils/inc.js");



var distance1D = function distance1D(a, b) {
  return Math.abs(a - b);
};
function distance(a, b) {
  if (Object(_inc_js__WEBPACK_IMPORTED_MODULE_2__["isNum"])(a) && Object(_inc_js__WEBPACK_IMPORTED_MODULE_2__["isNum"])(b)) {
    return distance1D(a, b);
  } else if (Object(_is_point_js__WEBPACK_IMPORTED_MODULE_0__["isPoint"])(a) && Object(_is_point_js__WEBPACK_IMPORTED_MODULE_0__["isPoint"])(b)) {
    var xDelta = distance1D(a.x, b.x);
    var yDelta = distance1D(a.y, b.y);
    var zDelta = Object(_is_point_3d_js__WEBPACK_IMPORTED_MODULE_1__["isPoint3D"])(a) && Object(_is_point_3d_js__WEBPACK_IMPORTED_MODULE_1__["isPoint3D"])(b) ? distance1D(a.z, b.z) : 0;
    return Math.sqrt(Math.pow(xDelta, 2) + Math.pow(yDelta, 2) + Math.pow(zDelta, 2));
  }
}


/***/ }),

/***/ "./node_modules/popmotion/dist/es/utils/inc.js":
/*!*****************************************************!*\
  !*** ./node_modules/popmotion/dist/es/utils/inc.js ***!
  \*****************************************************/
/*! exports provided: isNum, zeroPoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNum", function() { return isNum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zeroPoint", function() { return zeroPoint; });
var zeroPoint = {
  x: 0,
  y: 0,
  z: 0
};
var isNum = function isNum(v) {
  return typeof v === 'number';
};


/***/ }),

/***/ "./node_modules/popmotion/dist/es/utils/interpolate.js":
/*!*************************************************************!*\
  !*** ./node_modules/popmotion/dist/es/utils/interpolate.js ***!
  \*************************************************************/
/*! exports provided: interpolate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interpolate", function() { return interpolate; });
/* harmony import */ var _progress_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./progress.js */ "./node_modules/popmotion/dist/es/utils/progress.js");
/* harmony import */ var _mix_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mix.js */ "./node_modules/popmotion/dist/es/utils/mix.js");
/* harmony import */ var _mix_color_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mix-color.js */ "./node_modules/popmotion/dist/es/utils/mix-color.js");
/* harmony import */ var _mix_complex_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mix-complex.js */ "./node_modules/popmotion/dist/es/utils/mix-complex.js");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/index.js");
/* harmony import */ var _clamp_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clamp.js */ "./node_modules/popmotion/dist/es/utils/clamp.js");
/* harmony import */ var _pipe_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipe.js */ "./node_modules/popmotion/dist/es/utils/pipe.js");
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }








var mixNumber = function mixNumber(from, to) {
  return function (p) {
    return Object(_mix_js__WEBPACK_IMPORTED_MODULE_1__["mix"])(from, to, p);
  };
};
function detectMixerFactory(v) {
  if (typeof v === 'number') {
    return mixNumber;
  } else if (typeof v === 'string') {
    if (style_value_types__WEBPACK_IMPORTED_MODULE_4__["color"].test(v)) {
      return _mix_color_js__WEBPACK_IMPORTED_MODULE_2__["mixColor"];
    } else {
      return _mix_complex_js__WEBPACK_IMPORTED_MODULE_3__["mixComplex"];
    }
  } else if (Array.isArray(v)) {
    return _mix_complex_js__WEBPACK_IMPORTED_MODULE_3__["mixArray"];
  } else if (_typeof(v) === 'object') {
    return _mix_complex_js__WEBPACK_IMPORTED_MODULE_3__["mixObject"];
  }
}
function createMixers(output, ease, customMixer) {
  var mixers = [];
  var mixerFactory = customMixer || detectMixerFactory(output[0]);
  var numMixers = output.length - 1;
  for (var i = 0; i < numMixers; i++) {
    var mixer = mixerFactory(output[i], output[i + 1]);
    if (ease) {
      var easingFunction = Array.isArray(ease) ? ease[i] : ease;
      mixer = Object(_pipe_js__WEBPACK_IMPORTED_MODULE_6__["pipe"])(easingFunction, mixer);
    }
    mixers.push(mixer);
  }
  return mixers;
}
function fastInterpolate(_a, _b) {
  var from = _a[0],
    to = _a[1];
  var mixer = _b[0];
  return function (v) {
    return mixer(Object(_progress_js__WEBPACK_IMPORTED_MODULE_0__["progress"])(from, to, v));
  };
}
function slowInterpolate(input, mixers) {
  var inputLength = input.length;
  var lastInputIndex = inputLength - 1;
  return function (v) {
    var mixerIndex = 0;
    var foundMixerIndex = false;
    if (v <= input[0]) {
      foundMixerIndex = true;
    } else if (v >= input[lastInputIndex]) {
      mixerIndex = lastInputIndex - 1;
      foundMixerIndex = true;
    }
    if (!foundMixerIndex) {
      var i = 1;
      for (; i < inputLength; i++) {
        if (input[i] > v || i === lastInputIndex) {
          break;
        }
      }
      mixerIndex = i - 1;
    }
    var progressInRange = Object(_progress_js__WEBPACK_IMPORTED_MODULE_0__["progress"])(input[mixerIndex], input[mixerIndex + 1], v);
    return mixers[mixerIndex](progressInRange);
  };
}
function interpolate(input, output, _a) {
  var _b = _a === void 0 ? {} : _a,
    _c = _b.clamp,
    isClamp = _c === void 0 ? true : _c,
    ease = _b.ease,
    mixer = _b.mixer;
  var inputLength = input.length;
  Object(hey_listen__WEBPACK_IMPORTED_MODULE_7__["invariant"])(inputLength === output.length, 'Both input and output ranges must be the same length');
  Object(hey_listen__WEBPACK_IMPORTED_MODULE_7__["invariant"])(!ease || !Array.isArray(ease) || ease.length === inputLength - 1, 'Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values.');
  if (input[0] > input[inputLength - 1]) {
    input = [].concat(input);
    output = [].concat(output);
    input.reverse();
    output.reverse();
  }
  var mixers = createMixers(output, ease, mixer);
  var interpolator = inputLength === 2 ? fastInterpolate(input, mixers) : slowInterpolate(input, mixers);
  return isClamp ? function (v) {
    return interpolator(Object(_clamp_js__WEBPACK_IMPORTED_MODULE_5__["clamp"])(input[0], input[inputLength - 1], v));
  } : interpolator;
}


/***/ }),

/***/ "./node_modules/popmotion/dist/es/utils/is-point-3d.js":
/*!*************************************************************!*\
  !*** ./node_modules/popmotion/dist/es/utils/is-point-3d.js ***!
  \*************************************************************/
/*! exports provided: isPoint3D */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPoint3D", function() { return isPoint3D; });
/* harmony import */ var _is_point_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-point.js */ "./node_modules/popmotion/dist/es/utils/is-point.js");

var isPoint3D = function isPoint3D(point) {
  return Object(_is_point_js__WEBPACK_IMPORTED_MODULE_0__["isPoint"])(point) && point.hasOwnProperty('z');
};


/***/ }),

/***/ "./node_modules/popmotion/dist/es/utils/is-point.js":
/*!**********************************************************!*\
  !*** ./node_modules/popmotion/dist/es/utils/is-point.js ***!
  \**********************************************************/
/*! exports provided: isPoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPoint", function() { return isPoint; });
var isPoint = function isPoint(point) {
  return point.hasOwnProperty('x') && point.hasOwnProperty('y');
};


/***/ }),

/***/ "./node_modules/popmotion/dist/es/utils/mix-color.js":
/*!***********************************************************!*\
  !*** ./node_modules/popmotion/dist/es/utils/mix-color.js ***!
  \***********************************************************/
/*! exports provided: mixColor, mixLinearColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixColor", function() { return mixColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixLinearColor", function() { return mixLinearColor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _mix_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mix.js */ "./node_modules/popmotion/dist/es/utils/mix.js");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/index.js");
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");




var mixLinearColor = function mixLinearColor(from, to, v) {
  var fromExpo = from * from;
  var toExpo = to * to;
  return Math.sqrt(Math.max(0, v * (toExpo - fromExpo) + fromExpo));
};
var colorTypes = [style_value_types__WEBPACK_IMPORTED_MODULE_2__["hex"], style_value_types__WEBPACK_IMPORTED_MODULE_2__["rgba"], style_value_types__WEBPACK_IMPORTED_MODULE_2__["hsla"]];
var getColorType = function getColorType(v) {
  return colorTypes.find(function (type) {
    return type.test(v);
  });
};
var notAnimatable = function notAnimatable(color) {
  return "'" + color + "' is not an animatable color. Use the equivalent color code instead.";
};
var mixColor = function mixColor(from, to) {
  var fromColorType = getColorType(from);
  var toColorType = getColorType(to);
  Object(hey_listen__WEBPACK_IMPORTED_MODULE_3__["invariant"])(!!fromColorType, notAnimatable(from));
  Object(hey_listen__WEBPACK_IMPORTED_MODULE_3__["invariant"])(!!toColorType, notAnimatable(to));
  Object(hey_listen__WEBPACK_IMPORTED_MODULE_3__["invariant"])(fromColorType.transform === toColorType.transform, "Both colors must be hex/RGBA, OR both must be HSLA.");
  var fromColor = fromColorType.parse(from);
  var toColor = toColorType.parse(to);
  var blended = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, fromColor);
  var mixFunc = fromColorType === style_value_types__WEBPACK_IMPORTED_MODULE_2__["hsla"] ? _mix_js__WEBPACK_IMPORTED_MODULE_1__["mix"] : mixLinearColor;
  return function (v) {
    for (var key in blended) {
      if (key !== "alpha") {
        blended[key] = mixFunc(fromColor[key], toColor[key], v);
      }
    }
    blended.alpha = Object(_mix_js__WEBPACK_IMPORTED_MODULE_1__["mix"])(fromColor.alpha, toColor.alpha, v);
    return fromColorType.transform(blended);
  };
};


/***/ }),

/***/ "./node_modules/popmotion/dist/es/utils/mix-complex.js":
/*!*************************************************************!*\
  !*** ./node_modules/popmotion/dist/es/utils/mix-complex.js ***!
  \*************************************************************/
/*! exports provided: mixArray, mixComplex, mixObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixArray", function() { return mixArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixComplex", function() { return mixComplex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixObject", function() { return mixObject; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/es/index.js");
/* harmony import */ var _mix_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mix.js */ "./node_modules/popmotion/dist/es/utils/mix.js");
/* harmony import */ var _mix_color_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mix-color.js */ "./node_modules/popmotion/dist/es/utils/mix-color.js");
/* harmony import */ var _inc_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inc.js */ "./node_modules/popmotion/dist/es/utils/inc.js");
/* harmony import */ var _pipe_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipe.js */ "./node_modules/popmotion/dist/es/utils/pipe.js");
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");







function getMixer(origin, target) {
  if (Object(_inc_js__WEBPACK_IMPORTED_MODULE_4__["isNum"])(origin)) {
    return function (v) {
      return Object(_mix_js__WEBPACK_IMPORTED_MODULE_2__["mix"])(origin, target, v);
    };
  } else if (style_value_types__WEBPACK_IMPORTED_MODULE_1__["color"].test(origin)) {
    return Object(_mix_color_js__WEBPACK_IMPORTED_MODULE_3__["mixColor"])(origin, target);
  } else {
    return mixComplex(origin, target);
  }
}
var mixArray = function mixArray(from, to) {
  var output = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], from);
  var numValues = output.length;
  var blendValue = from.map(function (fromThis, i) {
    return getMixer(fromThis, to[i]);
  });
  return function (v) {
    for (var i = 0; i < numValues; i++) {
      output[i] = blendValue[i](v);
    }
    return output;
  };
};
var mixObject = function mixObject(origin, target) {
  var output = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, origin), target);
  var blendValue = {};
  for (var key in output) {
    if (origin[key] !== undefined && target[key] !== undefined) {
      blendValue[key] = getMixer(origin[key], target[key]);
    }
  }
  return function (v) {
    for (var key in blendValue) {
      output[key] = blendValue[key](v);
    }
    return output;
  };
};
function analyse(value) {
  var parsed = style_value_types__WEBPACK_IMPORTED_MODULE_1__["complex"].parse(value);
  var numValues = parsed.length;
  var numNumbers = 0;
  var numRGB = 0;
  var numHSL = 0;
  for (var i = 0; i < numValues; i++) {
    if (numNumbers || typeof parsed[i] === "number") {
      numNumbers++;
    } else {
      if (parsed[i].hue !== undefined) {
        numHSL++;
      } else {
        numRGB++;
      }
    }
  }
  return {
    parsed: parsed,
    numNumbers: numNumbers,
    numRGB: numRGB,
    numHSL: numHSL
  };
}
var mixComplex = function mixComplex(origin, target) {
  var template = style_value_types__WEBPACK_IMPORTED_MODULE_1__["complex"].createTransformer(target);
  var originStats = analyse(origin);
  var targetStats = analyse(target);
  Object(hey_listen__WEBPACK_IMPORTED_MODULE_6__["invariant"])(originStats.numHSL === targetStats.numHSL && originStats.numRGB === targetStats.numRGB && originStats.numNumbers >= targetStats.numNumbers, "Complex values '" + origin + "' and '" + target + "' too different to mix. Ensure all colors are of the same type.");
  return Object(_pipe_js__WEBPACK_IMPORTED_MODULE_5__["pipe"])(mixArray(originStats.parsed, targetStats.parsed), template);
};


/***/ }),

/***/ "./node_modules/popmotion/dist/es/utils/mix.js":
/*!*****************************************************!*\
  !*** ./node_modules/popmotion/dist/es/utils/mix.js ***!
  \*****************************************************/
/*! exports provided: mix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mix", function() { return mix; });
var mix = function mix(from, to, progress) {
  return -progress * from + progress * to + from;
};


/***/ }),

/***/ "./node_modules/popmotion/dist/es/utils/pipe.js":
/*!******************************************************!*\
  !*** ./node_modules/popmotion/dist/es/utils/pipe.js ***!
  \******************************************************/
/*! exports provided: pipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pipe", function() { return pipe; });
var combineFunctions = function combineFunctions(a, b) {
  return function (v) {
    return b(a(v));
  };
};
var pipe = function pipe() {
  var transformers = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    transformers[_i] = arguments[_i];
  }
  return transformers.reduce(combineFunctions);
};


/***/ }),

/***/ "./node_modules/popmotion/dist/es/utils/point-from-vector.js":
/*!*******************************************************************!*\
  !*** ./node_modules/popmotion/dist/es/utils/point-from-vector.js ***!
  \*******************************************************************/
/*! exports provided: pointFromVector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pointFromVector", function() { return pointFromVector; });
/* harmony import */ var _degrees_to_radians_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./degrees-to-radians.js */ "./node_modules/popmotion/dist/es/utils/degrees-to-radians.js");

var pointFromVector = function pointFromVector(origin, angle, distance) {
  angle = Object(_degrees_to_radians_js__WEBPACK_IMPORTED_MODULE_0__["degreesToRadians"])(angle);
  return {
    x: distance * Math.cos(angle) + origin.x,
    y: distance * Math.sin(angle) + origin.y
  };
};


/***/ }),

/***/ "./node_modules/popmotion/dist/es/utils/progress.js":
/*!**********************************************************!*\
  !*** ./node_modules/popmotion/dist/es/utils/progress.js ***!
  \**********************************************************/
/*! exports provided: progress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "progress", function() { return progress; });
var progress = function progress(from, to, value) {
  var toFromDifference = to - from;
  return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
};


/***/ }),

/***/ "./node_modules/popmotion/dist/es/utils/radians-to-degrees.js":
/*!********************************************************************!*\
  !*** ./node_modules/popmotion/dist/es/utils/radians-to-degrees.js ***!
  \********************************************************************/
/*! exports provided: radiansToDegrees */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "radiansToDegrees", function() { return radiansToDegrees; });
var radiansToDegrees = function radiansToDegrees(radians) {
  return radians * 180 / Math.PI;
};


/***/ }),

/***/ "./node_modules/popmotion/dist/es/utils/smooth-frame.js":
/*!**************************************************************!*\
  !*** ./node_modules/popmotion/dist/es/utils/smooth-frame.js ***!
  \**************************************************************/
/*! exports provided: smoothFrame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "smoothFrame", function() { return smoothFrame; });
/* harmony import */ var _to_decimal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./to-decimal.js */ "./node_modules/popmotion/dist/es/utils/to-decimal.js");

var smoothFrame = function smoothFrame(prevValue, nextValue, duration, smoothing) {
  if (smoothing === void 0) {
    smoothing = 0;
  }
  return Object(_to_decimal_js__WEBPACK_IMPORTED_MODULE_0__["toDecimal"])(prevValue + duration * (nextValue - prevValue) / Math.max(smoothing, duration));
};


/***/ }),

/***/ "./node_modules/popmotion/dist/es/utils/smooth.js":
/*!********************************************************!*\
  !*** ./node_modules/popmotion/dist/es/utils/smooth.js ***!
  \********************************************************/
/*! exports provided: smooth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "smooth", function() { return smooth; });
/* harmony import */ var _smooth_frame_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./smooth-frame.js */ "./node_modules/popmotion/dist/es/utils/smooth-frame.js");
/* harmony import */ var framesync__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framesync */ "./node_modules/framesync/dist/es/index.js");


var smooth = function smooth(strength) {
  if (strength === void 0) {
    strength = 50;
  }
  var previousValue = 0;
  var lastUpdated = 0;
  return function (v) {
    var currentFramestamp = Object(framesync__WEBPACK_IMPORTED_MODULE_1__["getFrameData"])().timestamp;
    var timeDelta = currentFramestamp !== lastUpdated ? currentFramestamp - lastUpdated : 0;
    var newValue = timeDelta ? Object(_smooth_frame_js__WEBPACK_IMPORTED_MODULE_0__["smoothFrame"])(previousValue, v, timeDelta, strength) : previousValue;
    lastUpdated = currentFramestamp;
    previousValue = newValue;
    return newValue;
  };
};


/***/ }),

/***/ "./node_modules/popmotion/dist/es/utils/snap.js":
/*!******************************************************!*\
  !*** ./node_modules/popmotion/dist/es/utils/snap.js ***!
  \******************************************************/
/*! exports provided: snap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "snap", function() { return snap; });
var snap = function snap(points) {
  if (typeof points === 'number') {
    return function (v) {
      return Math.round(v / points) * points;
    };
  } else {
    var i_1 = 0;
    var numPoints_1 = points.length;
    return function (v) {
      var lastDistance = Math.abs(points[0] - v);
      for (i_1 = 1; i_1 < numPoints_1; i_1++) {
        var point = points[i_1];
        var distance = Math.abs(point - v);
        if (distance === 0) return point;
        if (distance > lastDistance) return points[i_1 - 1];
        if (i_1 === numPoints_1 - 1) return point;
        lastDistance = distance;
      }
    };
  }
};


/***/ }),

/***/ "./node_modules/popmotion/dist/es/utils/to-decimal.js":
/*!************************************************************!*\
  !*** ./node_modules/popmotion/dist/es/utils/to-decimal.js ***!
  \************************************************************/
/*! exports provided: toDecimal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toDecimal", function() { return toDecimal; });
var toDecimal = function toDecimal(num, precision) {
  if (precision === void 0) {
    precision = 2;
  }
  precision = Math.pow(10, precision);
  return Math.round(num * precision) / precision;
};


/***/ }),

/***/ "./node_modules/popmotion/dist/es/utils/velocity-per-frame.js":
/*!********************************************************************!*\
  !*** ./node_modules/popmotion/dist/es/utils/velocity-per-frame.js ***!
  \********************************************************************/
/*! exports provided: velocityPerFrame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "velocityPerFrame", function() { return velocityPerFrame; });
function velocityPerFrame(xps, frameDuration) {
  return xps / (1000 / frameDuration);
}


/***/ }),

/***/ "./node_modules/popmotion/dist/es/utils/velocity-per-second.js":
/*!*********************************************************************!*\
  !*** ./node_modules/popmotion/dist/es/utils/velocity-per-second.js ***!
  \*********************************************************************/
/*! exports provided: velocityPerSecond */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "velocityPerSecond", function() { return velocityPerSecond; });
function velocityPerSecond(velocity, frameDuration) {
  return frameDuration ? velocity * (1000 / frameDuration) : 0;
}


/***/ }),

/***/ "./node_modules/popmotion/dist/es/utils/wrap.js":
/*!******************************************************!*\
  !*** ./node_modules/popmotion/dist/es/utils/wrap.js ***!
  \******************************************************/
/*! exports provided: wrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return wrap; });
var wrap = function wrap(min, max, v) {
  var rangeSize = max - min;
  return ((v - min) % rangeSize + rangeSize) % rangeSize + min;
};


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var defineProperty = Object.defineProperty || function (obj, key, desc) {
    obj[key] = desc.value;
  };
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self, context)
    });
    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: true
  });
  defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: true
  });
  GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction");

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction ||
    // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };
  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function (arg) {
    return {
      __await: arg
    };
  };
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value && _typeof(value) === "object" && hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }
        return PromiseImpl.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }
    var previousPromise;
    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }
      return previousPromise =
      // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg,
      // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    defineProperty(this, "_invoke", {
      value: enqueue
    });
  }
  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };
  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;
    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }
      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per GeneratorResume behavior specified since ES2015:
        // ES2015 spec, step 3: https://262.ecma-international.org/6.0/#sec-generatorresume
        // Latest spec, step 2: https://tc39.es/ecma262/#sec-generatorresume
        return doneResult();
      }
      context.method = method;
      context.arg = arg;
      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }
          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }
        state = GenStateExecuting;
        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;
          if (record.arg === ContinueSentinel) {
            continue;
          }
          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method;
    var method = delegate.iterator[methodName];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method, or a missing .next method, always terminate the
      // yield* loop.
      context.delegate = null;

      // Note: ["return"] must be used for ES3 parsing compatibility.
      if (methodName === "throw" && delegate.iterator["return"]) {
        // If the delegate iterator has a return method, give it a
        // chance to clean up.
        context.method = "return";
        context.arg = undefined;
        maybeInvokeDelegate(delegate, context);
        if (context.method === "throw") {
          // If maybeInvokeDelegate(context) changed context.method from
          // "return" to "throw", let that override the TypeError below.
          return ContinueSentinel;
        }
      }
      if (methodName !== "return") {
        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method");
      }
      return ContinueSentinel;
    }
    var record = tryCatch(method, delegate.iterator, context.arg);
    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }
    var info = record.arg;
    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }
    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }
    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);
  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function () {
    return this;
  });
  define(Gp, "toString", function () {
    return "[object Generator]";
  });
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    if (1 in locs) {
      entry.catchLoc = locs[1];
    }
    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }
    this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }
  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{
      tryLoc: "root"
    }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }
  exports.keys = function (val) {
    var object = Object(val);
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };
  function values(iterable) {
    if (iterable != null) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }
      if (typeof iterable.next === "function") {
        return iterable;
      }
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            while (++i < iterable.length) {
              if (hasOwn.call(iterable, i)) {
                next.value = iterable[i];
                next.done = false;
                return next;
              }
            }
            next.value = undefined;
            next.done = true;
            return next;
          };
        return next.next = next;
      }
    }
    throw new TypeError(_typeof(iterable) + " is not iterable");
  }
  exports.values = values;
  function doneResult() {
    return {
      value: undefined,
      done: true
    };
  }
  Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = undefined;
      this.tryEntries.forEach(resetTryEntry);
      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },
    stop: function stop() {
      this.done = true;
      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }
      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }
      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;
        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }
        return !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;
        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }
      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;
      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }
      return this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }
      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }
      return ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };
      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }
      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;
}(
// If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
( false ? undefined : _typeof(module)) === "object" ? module.exports : {});
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if ((typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-value-types/dist/es/color/hex.js":
/*!*************************************************************!*\
  !*** ./node_modules/style-value-types/dist/es/color/hex.js ***!
  \*************************************************************/
/*! exports provided: hex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hex", function() { return hex; });
/* harmony import */ var _rgba_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rgba.js */ "./node_modules/style-value-types/dist/es/color/rgba.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./node_modules/style-value-types/dist/es/color/utils.js");


function parseHex(v) {
  var r = '';
  var g = '';
  var b = '';
  var a = '';
  if (v.length > 5) {
    r = v.substr(1, 2);
    g = v.substr(3, 2);
    b = v.substr(5, 2);
    a = v.substr(7, 2);
  } else {
    r = v.substr(1, 1);
    g = v.substr(2, 1);
    b = v.substr(3, 1);
    a = v.substr(4, 1);
    r += r;
    g += g;
    b += b;
    a += a;
  }
  return {
    red: parseInt(r, 16),
    green: parseInt(g, 16),
    blue: parseInt(b, 16),
    alpha: a ? parseInt(a, 16) / 255 : 1
  };
}
var hex = {
  test: Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["isColorString"])('#'),
  parse: parseHex,
  transform: _rgba_js__WEBPACK_IMPORTED_MODULE_0__["rgba"].transform
};


/***/ }),

/***/ "./node_modules/style-value-types/dist/es/color/hsla.js":
/*!**************************************************************!*\
  !*** ./node_modules/style-value-types/dist/es/color/hsla.js ***!
  \**************************************************************/
/*! exports provided: hsla */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hsla", function() { return hsla; });
/* harmony import */ var _numbers_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../numbers/index.js */ "./node_modules/style-value-types/dist/es/numbers/index.js");
/* harmony import */ var _numbers_units_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../numbers/units.js */ "./node_modules/style-value-types/dist/es/numbers/units.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./node_modules/style-value-types/dist/es/utils.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils.js */ "./node_modules/style-value-types/dist/es/color/utils.js");




var hsla = {
  test: Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isColorString"])('hsl', 'hue'),
  parse: Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["splitColor"])('hue', 'saturation', 'lightness'),
  transform: function transform(_a) {
    var hue = _a.hue,
      saturation = _a.saturation,
      lightness = _a.lightness,
      _b = _a.alpha,
      alpha$1 = _b === void 0 ? 1 : _b;
    return 'hsla(' + Math.round(hue) + ', ' + _numbers_units_js__WEBPACK_IMPORTED_MODULE_1__["percent"].transform(Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["sanitize"])(saturation)) + ', ' + _numbers_units_js__WEBPACK_IMPORTED_MODULE_1__["percent"].transform(Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["sanitize"])(lightness)) + ', ' + Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["sanitize"])(_numbers_index_js__WEBPACK_IMPORTED_MODULE_0__["alpha"].transform(alpha$1)) + ')';
  }
};


/***/ }),

/***/ "./node_modules/style-value-types/dist/es/color/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-value-types/dist/es/color/index.js ***!
  \***************************************************************/
/*! exports provided: color */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color", function() { return color; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/style-value-types/dist/es/utils.js");
/* harmony import */ var _hex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hex.js */ "./node_modules/style-value-types/dist/es/color/hex.js");
/* harmony import */ var _hsla_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hsla.js */ "./node_modules/style-value-types/dist/es/color/hsla.js");
/* harmony import */ var _rgba_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rgba.js */ "./node_modules/style-value-types/dist/es/color/rgba.js");




var color = {
  test: function test(v) {
    return _rgba_js__WEBPACK_IMPORTED_MODULE_3__["rgba"].test(v) || _hex_js__WEBPACK_IMPORTED_MODULE_1__["hex"].test(v) || _hsla_js__WEBPACK_IMPORTED_MODULE_2__["hsla"].test(v);
  },
  parse: function parse(v) {
    if (_rgba_js__WEBPACK_IMPORTED_MODULE_3__["rgba"].test(v)) {
      return _rgba_js__WEBPACK_IMPORTED_MODULE_3__["rgba"].parse(v);
    } else if (_hsla_js__WEBPACK_IMPORTED_MODULE_2__["hsla"].test(v)) {
      return _hsla_js__WEBPACK_IMPORTED_MODULE_2__["hsla"].parse(v);
    } else {
      return _hex_js__WEBPACK_IMPORTED_MODULE_1__["hex"].parse(v);
    }
  },
  transform: function transform(v) {
    return Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["isString"])(v) ? v : v.hasOwnProperty('red') ? _rgba_js__WEBPACK_IMPORTED_MODULE_3__["rgba"].transform(v) : _hsla_js__WEBPACK_IMPORTED_MODULE_2__["hsla"].transform(v);
  }
};


/***/ }),

/***/ "./node_modules/style-value-types/dist/es/color/rgba.js":
/*!**************************************************************!*\
  !*** ./node_modules/style-value-types/dist/es/color/rgba.js ***!
  \**************************************************************/
/*! exports provided: rgbUnit, rgba */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbUnit", function() { return rgbUnit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgba", function() { return rgba; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _numbers_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../numbers/index.js */ "./node_modules/style-value-types/dist/es/numbers/index.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./node_modules/style-value-types/dist/es/utils.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils.js */ "./node_modules/style-value-types/dist/es/color/utils.js");




var clampRgbUnit = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["clamp"])(0, 255);
var rgbUnit = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _numbers_index_js__WEBPACK_IMPORTED_MODULE_1__["number"]), {
  transform: function transform(v) {
    return Math.round(clampRgbUnit(v));
  }
});
var rgba = {
  test: Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isColorString"])('rgb', 'red'),
  parse: Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["splitColor"])('red', 'green', 'blue'),
  transform: function transform(_a) {
    var red = _a.red,
      green = _a.green,
      blue = _a.blue,
      _b = _a.alpha,
      alpha$1 = _b === void 0 ? 1 : _b;
    return 'rgba(' + rgbUnit.transform(red) + ', ' + rgbUnit.transform(green) + ', ' + rgbUnit.transform(blue) + ', ' + Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["sanitize"])(_numbers_index_js__WEBPACK_IMPORTED_MODULE_1__["alpha"].transform(alpha$1)) + ')';
  }
};


/***/ }),

/***/ "./node_modules/style-value-types/dist/es/color/utils.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-value-types/dist/es/color/utils.js ***!
  \***************************************************************/
/*! exports provided: isColorString, splitColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isColorString", function() { return isColorString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splitColor", function() { return splitColor; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/style-value-types/dist/es/utils.js");

var isColorString = function isColorString(type, testProp) {
  return function (v) {
    return Boolean(Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["isString"])(v) && _utils_js__WEBPACK_IMPORTED_MODULE_0__["singleColorRegex"].test(v) && v.startsWith(type) || testProp && Object.prototype.hasOwnProperty.call(v, testProp));
  };
};
var splitColor = function splitColor(aName, bName, cName) {
  return function (v) {
    var _a;
    if (!Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["isString"])(v)) return v;
    var _b = v.match(_utils_js__WEBPACK_IMPORTED_MODULE_0__["floatRegex"]),
      a = _b[0],
      b = _b[1],
      c = _b[2],
      alpha = _b[3];
    return _a = {}, _a[aName] = parseFloat(a), _a[bName] = parseFloat(b), _a[cName] = parseFloat(c), _a.alpha = alpha !== undefined ? parseFloat(alpha) : 1, _a;
  };
};


/***/ }),

/***/ "./node_modules/style-value-types/dist/es/complex/filter.js":
/*!******************************************************************!*\
  !*** ./node_modules/style-value-types/dist/es/complex/filter.js ***!
  \******************************************************************/
/*! exports provided: filter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./node_modules/style-value-types/dist/es/complex/index.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./node_modules/style-value-types/dist/es/utils.js");



var maxDefaults = new Set(['brightness', 'contrast', 'saturate', 'opacity']);
function applyDefaultFilter(v) {
  var _a = v.slice(0, -1).split('('),
    name = _a[0],
    value = _a[1];
  if (name === 'drop-shadow') return v;
  var number = (value.match(_utils_js__WEBPACK_IMPORTED_MODULE_2__["floatRegex"]) || [])[0];
  if (!number) return v;
  var unit = value.replace(number, '');
  var defaultValue = maxDefaults.has(name) ? 1 : 0;
  if (number !== value) defaultValue *= 100;
  return name + '(' + defaultValue + unit + ')';
}
var functionRegex = /([a-z-]*)\(.*?\)/g;
var filter = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _index_js__WEBPACK_IMPORTED_MODULE_1__["complex"]), {
  getAnimatableNone: function getAnimatableNone(v) {
    var functions = v.match(functionRegex);
    return functions ? functions.map(applyDefaultFilter).join(' ') : v;
  }
});


/***/ }),

/***/ "./node_modules/style-value-types/dist/es/complex/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/style-value-types/dist/es/complex/index.js ***!
  \*****************************************************************/
/*! exports provided: complex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "complex", function() { return complex; });
/* harmony import */ var _color_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../color/index.js */ "./node_modules/style-value-types/dist/es/color/index.js");
/* harmony import */ var _numbers_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../numbers/index.js */ "./node_modules/style-value-types/dist/es/numbers/index.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./node_modules/style-value-types/dist/es/utils.js");



var colorToken = '${c}';
var numberToken = '${n}';
function test(v) {
  var _a, _b, _c, _d;
  return isNaN(v) && Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isString"])(v) && ((_b = (_a = v.match(_utils_js__WEBPACK_IMPORTED_MODULE_2__["floatRegex"])) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0) + ((_d = (_c = v.match(_utils_js__WEBPACK_IMPORTED_MODULE_2__["colorRegex"])) === null || _c === void 0 ? void 0 : _c.length) !== null && _d !== void 0 ? _d : 0) > 0;
}
function analyse(v) {
  var values = [];
  var numColors = 0;
  var colors = v.match(_utils_js__WEBPACK_IMPORTED_MODULE_2__["colorRegex"]);
  if (colors) {
    numColors = colors.length;
    v = v.replace(_utils_js__WEBPACK_IMPORTED_MODULE_2__["colorRegex"], colorToken);
    values.push.apply(values, colors.map(_color_index_js__WEBPACK_IMPORTED_MODULE_0__["color"].parse));
  }
  var numbers = v.match(_utils_js__WEBPACK_IMPORTED_MODULE_2__["floatRegex"]);
  if (numbers) {
    v = v.replace(_utils_js__WEBPACK_IMPORTED_MODULE_2__["floatRegex"], numberToken);
    values.push.apply(values, numbers.map(_numbers_index_js__WEBPACK_IMPORTED_MODULE_1__["number"].parse));
  }
  return {
    values: values,
    numColors: numColors,
    tokenised: v
  };
}
function parse(v) {
  return analyse(v).values;
}
function createTransformer(v) {
  var _a = analyse(v),
    values = _a.values,
    numColors = _a.numColors,
    tokenised = _a.tokenised;
  var numValues = values.length;
  return function (v) {
    var output = tokenised;
    for (var i = 0; i < numValues; i++) {
      output = output.replace(i < numColors ? colorToken : numberToken, i < numColors ? _color_index_js__WEBPACK_IMPORTED_MODULE_0__["color"].transform(v[i]) : Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["sanitize"])(v[i]));
    }
    return output;
  };
}
var convertNumbersToZero = function convertNumbersToZero(v) {
  return typeof v === 'number' ? 0 : v;
};
function getAnimatableNone(v) {
  var parsed = parse(v);
  var transformer = createTransformer(v);
  return transformer(parsed.map(convertNumbersToZero));
}
var complex = {
  test: test,
  parse: parse,
  createTransformer: createTransformer,
  getAnimatableNone: getAnimatableNone
};


/***/ }),

/***/ "./node_modules/style-value-types/dist/es/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/style-value-types/dist/es/index.js ***!
  \*********************************************************/
/*! exports provided: alpha, number, scale, degrees, percent, progressPercentage, px, vh, vw, hsla, rgbUnit, rgba, hex, color, complex, filter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _numbers_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./numbers/index.js */ "./node_modules/style-value-types/dist/es/numbers/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "alpha", function() { return _numbers_index_js__WEBPACK_IMPORTED_MODULE_0__["alpha"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "number", function() { return _numbers_index_js__WEBPACK_IMPORTED_MODULE_0__["number"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return _numbers_index_js__WEBPACK_IMPORTED_MODULE_0__["scale"]; });

/* harmony import */ var _numbers_units_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./numbers/units.js */ "./node_modules/style-value-types/dist/es/numbers/units.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "degrees", function() { return _numbers_units_js__WEBPACK_IMPORTED_MODULE_1__["degrees"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "percent", function() { return _numbers_units_js__WEBPACK_IMPORTED_MODULE_1__["percent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "progressPercentage", function() { return _numbers_units_js__WEBPACK_IMPORTED_MODULE_1__["progressPercentage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "px", function() { return _numbers_units_js__WEBPACK_IMPORTED_MODULE_1__["px"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vh", function() { return _numbers_units_js__WEBPACK_IMPORTED_MODULE_1__["vh"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vw", function() { return _numbers_units_js__WEBPACK_IMPORTED_MODULE_1__["vw"]; });

/* harmony import */ var _color_hsla_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./color/hsla.js */ "./node_modules/style-value-types/dist/es/color/hsla.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hsla", function() { return _color_hsla_js__WEBPACK_IMPORTED_MODULE_2__["hsla"]; });

/* harmony import */ var _color_rgba_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./color/rgba.js */ "./node_modules/style-value-types/dist/es/color/rgba.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rgbUnit", function() { return _color_rgba_js__WEBPACK_IMPORTED_MODULE_3__["rgbUnit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rgba", function() { return _color_rgba_js__WEBPACK_IMPORTED_MODULE_3__["rgba"]; });

/* harmony import */ var _color_hex_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./color/hex.js */ "./node_modules/style-value-types/dist/es/color/hex.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hex", function() { return _color_hex_js__WEBPACK_IMPORTED_MODULE_4__["hex"]; });

/* harmony import */ var _color_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./color/index.js */ "./node_modules/style-value-types/dist/es/color/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "color", function() { return _color_index_js__WEBPACK_IMPORTED_MODULE_5__["color"]; });

/* harmony import */ var _complex_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./complex/index.js */ "./node_modules/style-value-types/dist/es/complex/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "complex", function() { return _complex_index_js__WEBPACK_IMPORTED_MODULE_6__["complex"]; });

/* harmony import */ var _complex_filter_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./complex/filter.js */ "./node_modules/style-value-types/dist/es/complex/filter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return _complex_filter_js__WEBPACK_IMPORTED_MODULE_7__["filter"]; });










/***/ }),

/***/ "./node_modules/style-value-types/dist/es/numbers/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/style-value-types/dist/es/numbers/index.js ***!
  \*****************************************************************/
/*! exports provided: alpha, number, scale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alpha", function() { return alpha; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "number", function() { return number; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "./node_modules/style-value-types/dist/es/utils.js");


var number = {
  test: function test(v) {
    return typeof v === 'number';
  },
  parse: parseFloat,
  transform: function transform(v) {
    return v;
  }
};
var alpha = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, number), {
  transform: Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["clamp"])(0, 1)
});
var scale = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, number), {
  "default": 1
});


/***/ }),

/***/ "./node_modules/style-value-types/dist/es/numbers/units.js":
/*!*****************************************************************!*\
  !*** ./node_modules/style-value-types/dist/es/numbers/units.js ***!
  \*****************************************************************/
/*! exports provided: degrees, percent, progressPercentage, px, vh, vw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "degrees", function() { return degrees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "percent", function() { return percent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "progressPercentage", function() { return progressPercentage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "px", function() { return px; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vh", function() { return vh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vw", function() { return vw; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "./node_modules/style-value-types/dist/es/utils.js");


var createUnitType = function createUnitType(unit) {
  return {
    test: function test(v) {
      return Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["isString"])(v) && v.endsWith(unit) && v.split(' ').length === 1;
    },
    parse: parseFloat,
    transform: function transform(v) {
      return "" + v + unit;
    }
  };
};
var degrees = createUnitType('deg');
var percent = createUnitType('%');
var px = createUnitType('px');
var vh = createUnitType('vh');
var vw = createUnitType('vw');
var progressPercentage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, percent), {
  parse: function parse(v) {
    return percent.parse(v) / 100;
  },
  transform: function transform(v) {
    return percent.transform(v * 100);
  }
});


/***/ }),

/***/ "./node_modules/style-value-types/dist/es/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/style-value-types/dist/es/utils.js ***!
  \*********************************************************/
/*! exports provided: clamp, colorRegex, floatRegex, isString, sanitize, singleColorRegex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clamp", function() { return clamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorRegex", function() { return colorRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "floatRegex", function() { return floatRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sanitize", function() { return sanitize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleColorRegex", function() { return singleColorRegex; });
var clamp = function clamp(min, max) {
  return function (v) {
    return Math.max(Math.min(v, max), min);
  };
};
var sanitize = function sanitize(v) {
  return v % 1 ? Number(v.toFixed(5)) : v;
};
var floatRegex = /(-)?([\d]*\.?[\d])+/g;
var colorRegex = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi;
var singleColorRegex = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;
function isString(v) {
  return typeof v === 'string';
}


/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __esDecorate, __runInitializers, __propKey, __setFunctionName, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __spreadArray, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet, __classPrivateFieldIn, __addDisposableResource, __disposeResources, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return _assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__esDecorate", function() { return __esDecorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__runInitializers", function() { return __runInitializers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__propKey", function() { return __propKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__setFunctionName", function() { return __setFunctionName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArray", function() { return __spreadArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldIn", function() { return __classPrivateFieldIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__addDisposableResource", function() { return __addDisposableResource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__disposeResources", function() { return __disposeResources; });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */

var _extendStatics = function extendStatics(d, b) {
  _extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
  };
  return _extendStatics(d, b);
};
function __extends(d, b) {
  if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  _extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var _assign = function __assign() {
  _assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return _assign.apply(this, arguments);
};

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}
function __decorate(decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
  return function (target, key) {
    decorator(target, key, paramIndex);
  };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind,
    key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _,
    done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access) context.access[p] = contextIn.access[p];
    context.addInitializer = function (f) {
      if (done) throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? {
      get: descriptor.get,
      set: descriptor.set
    } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0) continue;
      if (result === null || _typeof(result) !== "object") throw new TypeError("Object expected");
      if (_ = accept(result.get)) descriptor.get = _;
      if (_ = accept(result.set)) descriptor.set = _;
      if (_ = accept(result.init)) initializers.unshift(_);
    } else if (_ = accept(result)) {
      if (kind === "field") initializers.unshift(_);else descriptor[key] = _;
    }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
}
;
function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
}
;
function __propKey(x) {
  return _typeof(x) === "symbol" ? x : "".concat(x);
}
;
function __setFunctionName(f, name, prefix) {
  if (_typeof(name) === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", {
    configurable: true,
    value: prefix ? "".concat(prefix, " ", name) : name
  });
}
;
function __metadata(metadataKey, metadataValue) {
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = {
      label: 0,
      sent: function sent() {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
    f,
    y,
    t,
    g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
}
var __createBinding = Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
};
function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
    m = s && o[s],
    i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function next() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
    r,
    ar = [],
    e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
}

/** @deprecated */
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
  return ar;
}

/** @deprecated */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];
  return r;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []),
    i,
    q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i;
  function verb(n) {
    if (g[n]) i[n] = function (v) {
      return new Promise(function (a, b) {
        q.push([n, v, a, b]) > 1 || resume(n, v);
      });
    };
  }
  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }
  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }
  function fulfill(value) {
    resume("next", value);
  }
  function reject(value) {
    resume("throw", value);
  }
  function settle(f, v) {
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
}
function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) {
    throw e;
  }), verb("return"), i[Symbol.iterator] = function () {
    return this;
  }, i;
  function verb(n, f) {
    i[n] = o[n] ? function (v) {
      return (p = !p) ? {
        value: __await(o[n](v)),
        done: false
      } : f ? f(v) : v;
    } : f;
  }
}
function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator],
    i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i);
  function verb(n) {
    i[n] = o[n] && function (v) {
      return new Promise(function (resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }
  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function (v) {
      resolve({
        value: v,
        done: d
      });
    }, reject);
  }
}
function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }
  return cooked;
}
;
var __setModuleDefault = Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
};
function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
}
function __importDefault(mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || _typeof(receiver) !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}
function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (_typeof(value) !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose;
    if (async) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    env.stack.push({
      value: value,
      dispose: dispose,
      async: async
    });
  } else if (async) {
    env.stack.push({
      async: true
    });
  }
  return value;
}
var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  function next() {
    while (env.stack.length) {
      var rec = env.stack.pop();
      try {
        var result = rec.dispose && rec.dispose.call(rec.value);
        if (rec.async) return Promise.resolve(result).then(next, function (e) {
          fail(e);
          return next();
        });
      } catch (e) {
        fail(e);
      }
    }
    if (env.hasError) throw env.error;
  }
  return next();
}
/* harmony default export */ __webpack_exports__["default"] = ({
  __extends: __extends,
  __assign: _assign,
  __rest: __rest,
  __decorate: __decorate,
  __param: __param,
  __metadata: __metadata,
  __awaiter: __awaiter,
  __generator: __generator,
  __createBinding: __createBinding,
  __exportStar: __exportStar,
  __values: __values,
  __read: __read,
  __spread: __spread,
  __spreadArrays: __spreadArrays,
  __spreadArray: __spreadArray,
  __await: __await,
  __asyncGenerator: __asyncGenerator,
  __asyncDelegator: __asyncDelegator,
  __asyncValues: __asyncValues,
  __makeTemplateObject: __makeTemplateObject,
  __importStar: __importStar,
  __importDefault: __importDefault,
  __classPrivateFieldGet: __classPrivateFieldGet,
  __classPrivateFieldSet: __classPrivateFieldSet,
  __classPrivateFieldIn: __classPrivateFieldIn,
  __addDisposableResource: __addDisposableResource,
  __disposeResources: __disposeResources
});

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};
    module.paths = [];
    // module.parent = undefined by default
    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }
  return module;
};

/***/ }),

/***/ "./srcjs/IntroScreen.css":
/*!*******************************!*\
  !*** ./srcjs/IntroScreen.css ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_IntroScreen_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./IntroScreen.css */ "./node_modules/css-loader/dist/cjs.js!./srcjs/IntroScreen.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_IntroScreen_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_IntroScreen_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./srcjs/IntroScreen.js":
/*!******************************!*\
  !*** ./srcjs/IntroScreen.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _IntroScreen_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IntroScreen.css */ "./srcjs/IntroScreen.css");
/* harmony import */ var _assets_img_esqlabs_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/img/esqlabs_logo.png */ "./srcjs/assets/img/esqlabs_logo.png");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function LoaderESQlabs() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    "class": "wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "dot1"
  }, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "dot2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "dot3"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "dot4"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "dot5"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "dot6"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "dot7"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "dot8"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "dot9"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "dot10"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "base1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "base2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "base3"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "base4"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "base5"
  }));
}
function LogoComponent(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "logo_container",
    initial: {
      opacity: 0,
      scale: 0.5
    },
    animate: {
      opacity: 1,
      scale: 1
    },
    transition: {
      duration: 0.5,
      ease: [0, 0.71, 0.2, 1.01],
      scale: {
        type: "spring",
        damping: 5,
        stiffness: 100,
        restDelta: 0.001
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    width: "35%",
    src: props.logoPath
  }));
}
function Slider() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].div, {
    className: "slide-in",
    initial: {
      scaleY: 0
    },
    animate: {
      scaleY: 0
    },
    exit: {
      scaleY: 1
    },
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1]
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].div, {
    className: "slide-out",
    initial: {
      scaleY: 1
    },
    animate: {
      scaleY: 0
    },
    exit: {
      scaleY: 0
    },
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1]
    }
  }));
}
function IntroScreen(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
    _useState2 = _slicedToArray(_useState, 2),
    currentComponentIndex = _useState2[0],
    setCurrentComponentIndex = _useState2[1];
  var components = [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LoaderESQlabs, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LogoComponent, {
    logoPath: props.img_path
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Slider, null)];
  var updateCSS = function updateCSS(isHidden) {
    var styleElement = document.createElement('style');
    styleElement.innerHTML = "html { overflow: ".concat(isHidden ? 'hidden' : 'auto', "; } .intro_screen { height: ").concat(isHidden ? '100%' : '0px !important', "; }");
    document.head.appendChild(styleElement);
  };
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var timer = setTimeout(function () {
      setCurrentComponentIndex(function (prevIndex) {
        return prevIndex < components.length - 1 ? prevIndex + 1 : prevIndex;
      });
    }, 1000);
    currentComponentIndex === 2 ? updateCSS(false) : updateCSS(true);
    return function () {
      return clearTimeout(timer);
    };
  }, [currentComponentIndex]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: currentComponentIndex === 2 ? {
      height: "0vh",
      width: "0%"
    } : {
      height: "100vh",
      width: "100%",
      overflow: "hidden",
      position: "absolute",
      background: "#ffffff"
    }
  }, components[currentComponentIndex]);
}
/* harmony default export */ __webpack_exports__["default"] = (IntroScreen);

/***/ }),

/***/ "./srcjs/assets/img/esqlabs_logo.png":
/*!*******************************************!*\
  !*** ./srcjs/assets/img/esqlabs_logo.png ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "/img/esqlabs_logo.png");

/***/ }),

/***/ "./srcjs/main.jsx":
/*!************************!*\
  !*** ./srcjs/main.jsx ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactR__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactR */ "reactR");
/* harmony import */ var reactR__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactR__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _IntroScreen_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IntroScreen.js */ "./srcjs/IntroScreen.js");




// Widgets
Object(reactR__WEBPACK_IMPORTED_MODULE_1__["reactWidget"])('intro_screen', 'output', {
  IntroductionScreen: _IntroScreen_js__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi regenerator-runtime/runtime.js ./srcjs/main.jsx ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! regenerator-runtime/runtime.js */"./node_modules/regenerator-runtime/runtime.js");
module.exports = __webpack_require__(/*! D:\esqlabs.ui\srcjs\main.jsx */"./srcjs/main.jsx");


/***/ }),

/***/ "react":
/*!*******************************!*\
  !*** external "window.React" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = window.React;

/***/ }),

/***/ "reactR":
/*!********************************!*\
  !*** external "window.reactR" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = window.reactR;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map