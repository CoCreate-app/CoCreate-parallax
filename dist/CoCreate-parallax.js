(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["parallax"] = factory();
	else
		root["CoCreate"] = root["CoCreate"] || {}, root["CoCreate"]["parallax"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../CoCreate-components/CoCreate-parallax/src/CoCreate-parallax.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../CoCreate-components/CoCreate-parallax/src/CoCreate-parallax.js":
/*!*************************************************************************!*\
  !*** ../CoCreate-components/CoCreate-parallax/src/CoCreate-parallax.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction CoCreateParallax() {\n  var parallaxEls = document.getElementsByClassName(\"parallax\");\n\n  for (var i = 0; i < parallaxEls.length; i++) {\n    var parallaxEl = parallaxEls.item(i);\n    parallaxEl.style.backgroundImage = 'url(' + parallaxEl.getAttribute('data-parallax_src') + ')';\n    parallaxEl.style.height = parallaxEl.getAttribute('data-parallax_height');\n  }\n}\n\nCoCreateParallax();\n/* harmony default export */ __webpack_exports__[\"default\"] = (CoCreateParallax);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Db0NyZWF0ZS5wYXJhbGxheC8uLi9Db0NyZWF0ZS1jb21wb25lbnRzL0NvQ3JlYXRlLXBhcmFsbGF4L3NyYy9Db0NyZWF0ZS1wYXJhbGxheC5qcz80MjNmIl0sIm5hbWVzIjpbIkNvQ3JlYXRlUGFyYWxsYXgiLCJwYXJhbGxheEVscyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImkiLCJsZW5ndGgiLCJwYXJhbGxheEVsIiwiaXRlbSIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiZ2V0QXR0cmlidXRlIiwiaGVpZ2h0Il0sIm1hcHBpbmdzIjoiQUFDQTtBQUFBLFNBQVNBLGdCQUFULEdBQ0k7QUFDRSxNQUFJQyxXQUFXLEdBQUdDLFFBQVEsQ0FBQ0Msc0JBQVQsQ0FBZ0MsVUFBaEMsQ0FBbEI7O0FBRUYsT0FBSyxJQUFJQyxDQUFDLEdBQUMsQ0FBWCxFQUFjQSxDQUFDLEdBQUNILFdBQVcsQ0FBQ0ksTUFBNUIsRUFBb0NELENBQUMsRUFBckMsRUFBeUM7QUFDckMsUUFBSUUsVUFBVSxHQUFHTCxXQUFXLENBQUNNLElBQVosQ0FBaUJILENBQWpCLENBQWpCO0FBRUFFLGNBQVUsQ0FBQ0UsS0FBWCxDQUFpQkMsZUFBakIsR0FBbUMsU0FBT0gsVUFBVSxDQUFDSSxZQUFYLENBQXdCLG1CQUF4QixDQUFQLEdBQW9ELEdBQXZGO0FBQ0FKLGNBQVUsQ0FBQ0UsS0FBWCxDQUFpQkcsTUFBakIsR0FBMEJMLFVBQVUsQ0FBQ0ksWUFBWCxDQUF3QixzQkFBeEIsQ0FBMUI7QUFDRjtBQUVEOztBQUVEVixnQkFBZ0I7QUFDTEEsK0VBQWYiLCJmaWxlIjoiLi4vQ29DcmVhdGUtY29tcG9uZW50cy9Db0NyZWF0ZS1wYXJhbGxheC9zcmMvQ29DcmVhdGUtcGFyYWxsYXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmZ1bmN0aW9uIENvQ3JlYXRlUGFyYWxsYXgoKVxuICAgIHtcbiAgICAgIHZhciBwYXJhbGxheEVscyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwYXJhbGxheFwiKTtcbiAgICBcbiAgICBmb3IgKHZhciBpPTA7IGk8cGFyYWxsYXhFbHMubGVuZ3RoOyBpKyspIHtcbiAgICBcdFx0ICB2YXIgcGFyYWxsYXhFbCA9IHBhcmFsbGF4RWxzLml0ZW0oaSk7XG4gICAgXHRcdCAgXG4gICAgXHRcdCAgcGFyYWxsYXhFbC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKCcrcGFyYWxsYXhFbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcGFyYWxsYXhfc3JjJykrJyknO1xuICAgIFx0XHQgIHBhcmFsbGF4RWwuc3R5bGUuaGVpZ2h0ID0gcGFyYWxsYXhFbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcGFyYWxsYXhfaGVpZ2h0Jyk7XG4gICAgXHR9XG4gICAgXHRcbiAgICB9XG4gICAgXG4gICAgQ29DcmVhdGVQYXJhbGxheCgpO1xuZXhwb3J0IGRlZmF1bHQgQ29DcmVhdGVQYXJhbGxheDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../CoCreate-components/CoCreate-parallax/src/CoCreate-parallax.js\n");

/***/ })

/******/ })["default"];
});