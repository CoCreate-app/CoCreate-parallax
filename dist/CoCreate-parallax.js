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
/******/ 	return __webpack_require__(__webpack_require__.s = "../CoCreate-components/CoCreate-parallax/src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../CoCreate-components/CoCreate-parallax/src/index.js":
/*!*************************************************************!*\
  !*** ../CoCreate-components/CoCreate-parallax/src/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nfunction CoCreateParallax() {\n  var parallaxEls = document.getElementsByClassName(\"parallax\");\n\n  for (var i = 0; i < parallaxEls.length; i++) {\n    var parallaxEl = parallaxEls.item(i);\n    parallaxEl.style.backgroundImage = 'url(' + parallaxEl.getAttribute('data-parallax_src') + ')';\n    parallaxEl.style.height = parallaxEl.getAttribute('data-parallax_height');\n  }\n}\n\nCoCreateParallax();\nvar _default = CoCreateParallax;\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Db0NyZWF0ZS5wYXJhbGxheC8uLi9Db0NyZWF0ZS1jb21wb25lbnRzL0NvQ3JlYXRlLXBhcmFsbGF4L3NyYy9pbmRleC5qcz82MWI0Il0sIm5hbWVzIjpbIkNvQ3JlYXRlUGFyYWxsYXgiLCJwYXJhbGxheEVscyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImkiLCJsZW5ndGgiLCJwYXJhbGxheEVsIiwiaXRlbSIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiZ2V0QXR0cmlidXRlIiwiaGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0EsU0FBU0EsZ0JBQVQsR0FDSTtBQUNFLE1BQUlDLFdBQVcsR0FBR0MsUUFBUSxDQUFDQyxzQkFBVCxDQUFnQyxVQUFoQyxDQUFsQjs7QUFFRixPQUFLLElBQUlDLENBQUMsR0FBQyxDQUFYLEVBQWNBLENBQUMsR0FBQ0gsV0FBVyxDQUFDSSxNQUE1QixFQUFvQ0QsQ0FBQyxFQUFyQyxFQUF5QztBQUNyQyxRQUFJRSxVQUFVLEdBQUdMLFdBQVcsQ0FBQ00sSUFBWixDQUFpQkgsQ0FBakIsQ0FBakI7QUFFQUUsY0FBVSxDQUFDRSxLQUFYLENBQWlCQyxlQUFqQixHQUFtQyxTQUFPSCxVQUFVLENBQUNJLFlBQVgsQ0FBd0IsbUJBQXhCLENBQVAsR0FBb0QsR0FBdkY7QUFDQUosY0FBVSxDQUFDRSxLQUFYLENBQWlCRyxNQUFqQixHQUEwQkwsVUFBVSxDQUFDSSxZQUFYLENBQXdCLHNCQUF4QixDQUExQjtBQUNGO0FBRUQ7O0FBRURWLGdCQUFnQjtlQUNMQSxnQiIsImZpbGUiOiIuLi9Db0NyZWF0ZS1jb21wb25lbnRzL0NvQ3JlYXRlLXBhcmFsbGF4L3NyYy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuZnVuY3Rpb24gQ29DcmVhdGVQYXJhbGxheCgpXG4gICAge1xuICAgICAgdmFyIHBhcmFsbGF4RWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInBhcmFsbGF4XCIpO1xuICAgIFxuICAgIGZvciAodmFyIGk9MDsgaTxwYXJhbGxheEVscy5sZW5ndGg7IGkrKykge1xuICAgIFx0XHQgIHZhciBwYXJhbGxheEVsID0gcGFyYWxsYXhFbHMuaXRlbShpKTtcbiAgICBcdFx0ICBcbiAgICBcdFx0ICBwYXJhbGxheEVsLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoJytwYXJhbGxheEVsLmdldEF0dHJpYnV0ZSgnZGF0YS1wYXJhbGxheF9zcmMnKSsnKSc7XG4gICAgXHRcdCAgcGFyYWxsYXhFbC5zdHlsZS5oZWlnaHQgPSBwYXJhbGxheEVsLmdldEF0dHJpYnV0ZSgnZGF0YS1wYXJhbGxheF9oZWlnaHQnKTtcbiAgICBcdH1cbiAgICBcdFxuICAgIH1cbiAgICBcbiAgICBDb0NyZWF0ZVBhcmFsbGF4KCk7XG5leHBvcnQgZGVmYXVsdCBDb0NyZWF0ZVBhcmFsbGF4OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../CoCreate-components/CoCreate-parallax/src/index.js\n");

/***/ })

/******/ })["default"];
});