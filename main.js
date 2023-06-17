/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/about.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/about.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/Restaurant.jpg */ "./src/images/Restaurant.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/main-course.jpg */ "./src/images/main-course.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.content {
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 5px;
    padding: 5px 0px 0px 0px;
}

.image1,
.image2 {
    width: 100%;
    height: 100%;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.image2 {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

.about,
.hours {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 0px 20px 0px 20px;
    background-color: #aebef1a9;
    border-radius: 10px;
}

span {
    font-size: clamp(0.73rem, 1.1vw, 3rem);
}`, "",{"version":3,"sources":["webpack://./src/about.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,aAAa;IACb,qCAAqC;IACrC,kCAAkC;IAClC,QAAQ;IACR,wBAAwB;AAC5B;;AAEA;;IAEI,WAAW;IACX,YAAY;IACZ,yDAA8C;IAC9C,sBAAsB;IACtB,4BAA4B;IAC5B,2BAA2B;IAC3B,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,yDAA+C;AACnD;;AAEA;;IAEI,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,kBAAkB;IAClB,0BAA0B;IAC1B,2BAA2B;IAC3B,mBAAmB;AACvB;;AAEA;IACI,sCAAsC;AAC1C","sourcesContent":[".content {\r\n    height: 100%;\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n    grid-template-rows: repeat(2, 1fr);\r\n    gap: 5px;\r\n    padding: 5px 0px 0px 0px;\r\n}\r\n\r\n.image1,\r\n.image2 {\r\n    width: 100%;\r\n    height: 100%;\r\n    background-image: url(./images/Restaurant.jpg);\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.image2 {\r\n    background-image: url(./images/main-course.jpg);\r\n}\r\n\r\n.about,\r\n.hours {\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    text-align: center;\r\n    padding: 0px 20px 0px 20px;\r\n    background-color: #aebef1a9;\r\n    border-radius: 10px;\r\n}\r\n\r\nspan {\r\n    font-size: clamp(0.73rem, 1.1vw, 3rem);\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/home.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/home.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/home.jpeg */ "./src/images/home.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.content {
    height: 100%;
    background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) center/cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.welcome {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 40%;
    width: 50%;
    color: #f3f3f3;
    background-color: #2dadd486;
    text-shadow: 0px 1px 3px black;
    font-size: clamp(1rem, 6vw, 4rem);
}`, "",{"version":3,"sources":["webpack://./src/home.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,gEAAgD;IAChD,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;IAClB,WAAW;IACX,UAAU;IACV,cAAc;IACd,2BAA2B;IAC3B,8BAA8B;IAC9B,iCAAiC;AACrC","sourcesContent":[".content {\r\n    height: 100%;\r\n    background: url(./images/home.jpeg) center/cover;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.welcome {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    text-align: center;\r\n    height: 40%;\r\n    width: 50%;\r\n    color: #f3f3f3;\r\n    background-color: #2dadd486;\r\n    text-shadow: 0px 1px 3px black;\r\n    font-size: clamp(1rem, 6vw, 4rem);\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/menu.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/menu.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../src/images/main-course.jpg */ "./src/images/main-course.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../src/images/drinks.jpeg */ "./src/images/drinks.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../src/images/desserts.jpg */ "./src/images/desserts.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.content {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.main-course, .dessert, .drinks {    
    height: 85vh;
    width: 75%;
    border-radius: 7px;
    background-position: center;
    background-repeat: repeat;
    background-size: cover;
    margin-bottom: 7px;
    margin-top: 7px;
}

.dessert, .drinks {
    height: 95vh;
    width: 75%;
}

.main-course {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 15px;
    padding: 15px;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

.drinks {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 15px;
    padding: 15px;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

.dessert {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 15px;
    padding: 15px;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
}

.item {
    backdrop-filter: blur(10px) saturate(75%);
    border: 3px solid rgb(0, 0, 0);
    padding-top: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: #15a9ff;
    font-size: clamp(1rem, 3vw, 2rem);
    font-weight: 600;
}

.item > .name {
    text-shadow: 0px 0px 0px rgba(255, 255, 255, 0.685);
    background-color: #00000091;
}

.item > .recepie {
    color: #232ec4e1;
    background-color: #dbeafe60;
    text-shadow: 0px 0px 1px rgb(0, 0, 0);
    font-size: x-large;    
}

.item > .price {
    color: rgb(211, 190, 0);
    font-size: 2rem;
    border: 1px solid yellow;
}`, "",{"version":3,"sources":["webpack://./src/menu.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,UAAU;IACV,kBAAkB;IAClB,2BAA2B;IAC3B,yBAAyB;IACzB,sBAAsB;IACtB,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,UAAU;AACd;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,kCAAkC;IAClC,SAAS;IACT,aAAa;IACb,yDAAoD;AACxD;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,kCAAkC;IAClC,SAAS;IACT,aAAa;IACb,yDAAgD;AACpD;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,kCAAkC;IAClC,SAAS;IACT,aAAa;IACb,yDAAiD;AACrD;;AAEA;IACI,yCAAyC;IACzC,8BAA8B;IAC9B,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,kBAAkB;IAClB,cAAc;IACd,iCAAiC;IACjC,gBAAgB;AACpB;;AAEA;IACI,mDAAmD;IACnD,2BAA2B;AAC/B;;AAEA;IACI,gBAAgB;IAChB,2BAA2B;IAC3B,qCAAqC;IACrC,kBAAkB;AACtB;;AAEA;IACI,uBAAuB;IACvB,eAAe;IACf,wBAAwB;AAC5B","sourcesContent":[".content {\r\n    height: 100%;\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.main-course, .dessert, .drinks {    \r\n    height: 85vh;\r\n    width: 75%;\r\n    border-radius: 7px;\r\n    background-position: center;\r\n    background-repeat: repeat;\r\n    background-size: cover;\r\n    margin-bottom: 7px;\r\n    margin-top: 7px;\r\n}\r\n\r\n.dessert, .drinks {\r\n    height: 95vh;\r\n    width: 75%;\r\n}\r\n\r\n.main-course {\r\n    display: grid;\r\n    grid-template-columns: repeat(3, 1fr);\r\n    grid-template-rows: repeat(2, 1fr);\r\n    gap: 15px;\r\n    padding: 15px;\r\n    background-image: url(../src/images/main-course.jpg);\r\n}\r\n\r\n.drinks {\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n    grid-template-rows: repeat(2, 1fr);\r\n    gap: 15px;\r\n    padding: 15px;\r\n    background-image: url(../src/images/drinks.jpeg);\r\n}\r\n\r\n.dessert {\r\n    display: grid;\r\n    grid-template-columns: repeat(3, 1fr);\r\n    grid-template-rows: repeat(2, 1fr);\r\n    gap: 15px;\r\n    padding: 15px;\r\n    background-image: url(../src/images/desserts.jpg);\r\n}\r\n\r\n.item {\r\n    backdrop-filter: blur(10px) saturate(75%);\r\n    border: 3px solid rgb(0, 0, 0);\r\n    padding-top: 15px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    text-align: center;\r\n    color: #15a9ff;\r\n    font-size: clamp(1rem, 3vw, 2rem);\r\n    font-weight: 600;\r\n}\r\n\r\n.item > .name {\r\n    text-shadow: 0px 0px 0px rgba(255, 255, 255, 0.685);\r\n    background-color: #00000091;\r\n}\r\n\r\n.item > .recepie {\r\n    color: #232ec4e1;\r\n    background-color: #dbeafe60;\r\n    text-shadow: 0px 0px 1px rgb(0, 0, 0);\r\n    font-size: x-large;    \r\n}\r\n\r\n.item > .price {\r\n    color: rgb(211, 190, 0);\r\n    font-size: 2rem;\r\n    border: 1px solid yellow;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/about.css":
/*!***********************!*\
  !*** ./src/about.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./about.css */ "./node_modules/css-loader/dist/cjs.js!./src/about.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/home.css":
/*!**********************!*\
  !*** ./src/home.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./home.css */ "./node_modules/css-loader/dist/cjs.js!./src/home.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/menu.css":
/*!**********************!*\
  !*** ./src/menu.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./menu.css */ "./node_modules/css-loader/dist/cjs.js!./src/menu.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _about_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.css */ "./src/about.css");


function about() {
    const background = document.querySelector('.content');
    background.style.display = 'grid'
    background.innerHTML = '';
    background.style.background = 'unset';
    background.style.height = '100%';
    let about = document.createElement('div');
    about.className = 'about';
    let header_about = document.createElement('h1');
    header_about.innerHTML = 'About us';
    let about_details = document.createElement('span');
    about_details.innerHTML = "Welcome to Odin's Seafood Restaurant, where culinary excellence and oceanic delights converge to create an unforgettable dining experience. Located in the heart of city, Odin's embraces the spirit of the sea, offering a haven for seafood enthusiasts and gastronomes alike. Step into the elegant ambiance of Odin's and be transported to a maritime oasis. The restaurant's decor tastefully blends nautical elements with a contemporary touch, featuring hues of blue reminiscent of the ocean and intricate seashell - inspired patterns.Soft lighting creates an intimate atmosphere, perfect for a romantic dinner or a gathering with friends and family."
    about.appendChild(header_about);
    about.appendChild(about_details);

    let image1 = document.createElement('div');
    image1.className = 'image1';

    let image2 = document.createElement('div');
    image2.className = 'image2';

    let hours = document.createElement('div');
    hours.className = 'hours';
    let header_hours = document.createElement('h1');
    header_hours.innerHTML = 'Hours';
    let schedule = document.createElement('span');
    schedule.innerHTML = "Monday: 5:00 PM - 10:00 PM<br> Tuesday: 5:00 PM - 10:00 PM<br> Wednesday: 5:00 PM - 10:00 PM<br> Thursday: 5:00 PM - 10:00 PM<br> Friday: 5:00 PM - 11:00 PM<br> Saturday: 12:00 PM - 11:00 PM<br> Sunday: 12:00 PM - 10:00 PM<br> <br> Please note that these hours are subject to change, and it's always a good idea to contact the restaurant directly or visit their website for the most up-to-date information.";
    hours.appendChild(header_hours);
    hours.appendChild(schedule);
    
    

    background.appendChild(about);
    background.appendChild(image1);
    background.appendChild(image2);
    background.appendChild(hours);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (about);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.css */ "./src/home.css");


function home() {    
    const background = document.querySelector('.content');    
    background.innerHTML = '';
    background.style.display = 'flex';
    background.style.background = `url(../src/images/home.jpeg) center/cover`;    
    background.style.height = '100%';

    const text = document.createElement('div');
    text.innerHTML = "Welcome to <br>Odin's seafood restaurant!"
    text.className = "welcome";

    background.appendChild(text);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _menu_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.css */ "./src/menu.css");


function menu() {
    const background = document.querySelector('.content');
    background.style.display = 'flex'
    background.innerHTML = '';
    background.style.background = 'unset';
    background.style.height = 'max-content';

    const main_course = document.createElement('div');
    main_course.className = "main-course";

    const drinks = document.createElement('div');
    drinks.className = "drinks";

    const dessert = document.createElement('div');
    dessert.className = "dessert";

    for (let i = 0; i <= 5; i++) {
        if (i == 0) {
            //!Main course
            const main_course_item = document.createElement('div');
            main_course_item.className = "item";

            const main_course_item_name = document.createElement('div');
            main_course_item_name.className = 'name';
            main_course_item_name.innerHTML = 'Grilled Chilean Sea Bass';

            const main_course_item_recepie = document.createElement('p');
            main_course_item_recepie.className = 'recepie';
            main_course_item_recepie.innerHTML = 'Tender and flaky Chilean sea bass marinated with aromatic herbs, grilled to perfection, and served with a zesty citrus glaze.'

            const main_course_item_price = document.createElement('p');
            main_course_item_price.className = 'price';
            main_course_item_price.innerHTML = 'Price: 20$';

            main_course_item.appendChild(main_course_item_name);
            main_course_item.appendChild(main_course_item_recepie);
            main_course_item.appendChild(main_course_item_price);
            main_course.appendChild(main_course_item)

            //!Drinks
            const drinks_item = document.createElement('div');
            drinks_item.className = "item";

            const drinks_item_name = document.createElement('div');
            drinks_item_name.className = 'name';
            drinks_item_name.innerHTML = 'Craft Beer Selection';

            const drinks_item_recepie = document.createElement('p');
            drinks_item_recepie.className = 'recepie';
            drinks_item_recepie.innerHTML = "Odin's offers a curated selection of local and international craft beers that can provide a refreshing and unique accompaniment to your meal."

            const drinks_item_price = document.createElement('p');
            drinks_item_price.className = 'price';
            drinks_item_price.innerHTML = 'Price: 10$';

            drinks_item.appendChild(drinks_item_name);
            drinks_item.appendChild(drinks_item_recepie);
            drinks_item.appendChild(drinks_item_price);
            drinks.appendChild(drinks_item)

            //!Dessert
            const dessert_item = document.createElement('div');
            dessert_item.className = "item";

            const dessert_item_name = document.createElement('div');
            dessert_item_name.className = 'name';
            dessert_item_name.innerHTML = 'Key Lime Pie';

            const dessert_item_recepie = document.createElement('p');
            dessert_item_recepie.className = 'recepie';
            dessert_item_recepie.innerHTML = 'A tangy and creamy Key lime pie served with a graham cracker crust, providing a refreshing end to your seafood feast.'

            const dessert_item_price = document.createElement('p');
            dessert_item_price.className = 'price';
            dessert_item_price.innerHTML = 'Price: 10$';

            dessert_item.appendChild(dessert_item_name);
            dessert_item.appendChild(dessert_item_recepie);
            dessert_item.appendChild(dessert_item_price);
            dessert.appendChild(dessert_item)
            
        }
        else if (i == 1) {
            //!Main course
            const main_course_item = document.createElement('div');
            main_course_item.className = "item";

            const main_course_item_name = document.createElement('div');
            main_course_item_name.className = 'name';
            main_course_item_name.innerHTML = 'Lobster Thermidor';

            const main_course_item_recepie = document.createElement('p');
            main_course_item_recepie.className = 'recepie';
            main_course_item_recepie.innerHTML = 'Indulge in a classic dish featuring succulent lobster tail meat cooked in a rich and creamy sauce, topped with a golden breadcrumb crust and baked to perfection.'

            const main_course_item_price = document.createElement('p');
            main_course_item_price.className = 'price';
            main_course_item_price.innerHTML = 'Price: 55$';

            main_course_item.appendChild(main_course_item_name);
            main_course_item.appendChild(main_course_item_recepie);
            main_course_item.appendChild(main_course_item_price);
            main_course.appendChild(main_course_item)

            //!Drinks
            const drinks_item = document.createElement('div');
            drinks_item.className = "item";

            const drinks_item_name = document.createElement('div');
            drinks_item_name.className = 'name';
            drinks_item_name.innerHTML = 'Chardonnay';

            const drinks_item_recepie = document.createElement('p');
            drinks_item_recepie.className = 'recepie';
            drinks_item_recepie.innerHTML = "A crisp and buttery white wine that pairs well with a variety of seafood dishes, enhancing their flavors."

            const drinks_item_price = document.createElement('p');
            drinks_item_price.className = 'price';
            drinks_item_price.innerHTML = 'Price: 15$';

            drinks_item.appendChild(drinks_item_name);
            drinks_item.appendChild(drinks_item_recepie);
            drinks_item.appendChild(drinks_item_price);
            drinks.appendChild(drinks_item)

            //!Dessert
            const dessert_item = document.createElement('div');
            dessert_item.className = "item";

            const dessert_item_name = document.createElement('div');
            dessert_item_name.className = 'name';
            dessert_item_name.innerHTML = 'Chocolate Lava Cake';

            const dessert_item_recepie = document.createElement('p');
            dessert_item_recepie.className = 'recepie';
            dessert_item_recepie.innerHTML = 'Satisfy your sweet tooth with a decadent chocolate lava cake, featuring a rich, molten center and a scoop of vanilla ice cream.'

            const dessert_item_price = document.createElement('p');
            dessert_item_price.className = 'price';
            dessert_item_price.innerHTML = 'Price: 10$';

            dessert_item.appendChild(dessert_item_name);
            dessert_item.appendChild(dessert_item_recepie);
            dessert_item.appendChild(dessert_item_price);
            dessert.appendChild(dessert_item)
            
        }
        else if (i == 2) {
            //!Main course
            const main_course_item = document.createElement('div');
            main_course_item.className = "item";

            const main_course_item_name = document.createElement('div');
            main_course_item_name.className = 'name';
            main_course_item_name.innerHTML = 'Scallops with Truffle Risotto';

            const main_course_item_recepie = document.createElement('p');
            main_course_item_recepie.className = 'recepie';
            main_course_item_recepie.innerHTML = 'Pan-seared jumbo scallops served on a bed of creamy truffle-infused risotto, creating a harmonious combination of flavors and textures.'

            const main_course_item_price = document.createElement('p');
            main_course_item_price.className = 'price';
            main_course_item_price.innerHTML = 'Price: 65$';

            main_course_item.appendChild(main_course_item_name);
            main_course_item.appendChild(main_course_item_recepie);
            main_course_item.appendChild(main_course_item_price);
            main_course.appendChild(main_course_item)

            //!Drinks
            const drinks_item = document.createElement('div');
            drinks_item.className = "item";

            const drinks_item_name = document.createElement('div');
            drinks_item_name.className = 'name';
            drinks_item_name.innerHTML = 'Pinot Noir';

            const drinks_item_recepie = document.createElement('p');
            drinks_item_recepie.className = 'recepie';
            drinks_item_recepie.innerHTML = "A medium-bodied red wine with soft tannins that can complement heartier seafood dishes, such as grilled swordfish or lobster."

            const drinks_item_price = document.createElement('p');
            drinks_item_price.className = 'price';
            drinks_item_price.innerHTML = 'Price: 20$';

            drinks_item.appendChild(drinks_item_name);
            drinks_item.appendChild(drinks_item_recepie);
            drinks_item.appendChild(drinks_item_price);
            drinks.appendChild(drinks_item)

            //!Dessert
            const dessert_item = document.createElement('div');
            dessert_item.className = "item";

            const dessert_item_name = document.createElement('div');
            dessert_item_name.className = 'name';
            dessert_item_name.innerHTML = 'Fresh Berry Tart';

            const dessert_item_recepie = document.createElement('p');
            dessert_item_recepie.className = 'recepie';
            dessert_item_recepie.innerHTML = 'Enjoy a delightful combination of fresh seasonal berries nestled in a buttery tart shell, topped with a dollop of whipped cream.'

            const dessert_item_price = document.createElement('p');
            dessert_item_price.className = 'price';
            dessert_item_price.innerHTML = 'Price: 10$';

            dessert_item.appendChild(dessert_item_name);
            dessert_item.appendChild(dessert_item_recepie);
            dessert_item.appendChild(dessert_item_price);
            dessert.appendChild(dessert_item)
            
        }
        else if (i == 3) {
            //!Main course
            const main_course_item = document.createElement('div');
            main_course_item.className = "item";

            const main_course_item_name = document.createElement('div');
            main_course_item_name.className = 'name';
            main_course_item_name.innerHTML = 'Alaskan King Crab Legs';

            const main_course_item_recepie = document.createElement('p');
            main_course_item_recepie.className = 'recepie';
            main_course_item_recepie.innerHTML = 'Experience the sweet and delicate meat of Alaskan king crab legs, steamed to perfection and served with drawn butter and lemon wedges.'

            const main_course_item_price = document.createElement('p');
            main_course_item_price.className = 'price';
            main_course_item_price.innerHTML = 'Price: 35$';

            main_course_item.appendChild(main_course_item_name);
            main_course_item.appendChild(main_course_item_recepie);
            main_course_item.appendChild(main_course_item_price);
            main_course.appendChild(main_course_item)

            //!Drinks
            const drinks_item = document.createElement('div');
            drinks_item.className = "item";

            const drinks_item_name = document.createElement('div');
            drinks_item_name.className = 'name';
            drinks_item_name.innerHTML = 'Signature Cocktails';

            const drinks_item_recepie = document.createElement('p');
            drinks_item_recepie.className = 'recepie';
            drinks_item_recepie.innerHTML = "Indulge in handcrafted cocktails inspired by the sea, such as a refreshing Sea Breeze or a classic Mojito with a seafood twist."

            const drinks_item_price = document.createElement('p');
            drinks_item_price.className = 'price';
            drinks_item_price.innerHTML = 'Price: 10$';

            drinks_item.appendChild(drinks_item_name);
            drinks_item.appendChild(drinks_item_recepie);
            drinks_item.appendChild(drinks_item_price);
            drinks.appendChild(drinks_item)           
        }
        else if (i == 4) {
            //!Main course
            const main_course_item = document.createElement('div');
            main_course_item.className = "item";

            const main_course_item_name = document.createElement('div');
            main_course_item_name.className = 'name';
            main_course_item_name.innerHTML = 'Seafood Paella';

            const main_course_item_recepie = document.createElement('p');
            main_course_item_recepie.className = 'recepie';
            main_course_item_recepie.innerHTML = 'Delight in a vibrant and aromatic Spanish-style seafood paella, brimming with a tantalizing medley of shrimp, mussels, clams, and calamari, all nestled in saffron-infused rice.'

            const main_course_item_price = document.createElement('p');
            main_course_item_price.className = 'price';
            main_course_item_price.innerHTML = 'Price: 40$';

            main_course_item.appendChild(main_course_item_name);
            main_course_item.appendChild(main_course_item_recepie);
            main_course_item.appendChild(main_course_item_price);
            main_course.appendChild(main_course_item)           
        }
        else if (i == 5) {
            //!Main course
            const main_course_item = document.createElement('div');
            main_course_item.className = "item";

            const main_course_item_name = document.createElement('div');
            main_course_item_name.className = 'name';
            main_course_item_name.innerHTML = 'Shrimp Scampi';

            const main_course_item_recepie = document.createElement('p');
            main_course_item_recepie.className = 'recepie';
            main_course_item_recepie.innerHTML = 'Dive into a classic Italian favorite featuring plump shrimp sautéed in a garlic-infused butter sauce, served over a bed of linguine and garnished with fresh parsley.'

            const main_course_item_price = document.createElement('p');
            main_course_item_price.className = 'price';
            main_course_item_price.innerHTML = 'Price: 20$';

            main_course_item.appendChild(main_course_item_name);
            main_course_item.appendChild(main_course_item_recepie);
            main_course_item.appendChild(main_course_item_price);
            main_course.appendChild(main_course_item)        
        }
    }
    background.appendChild(main_course)
    background.appendChild(drinks)
    background.appendChild(dessert)
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);

/***/ }),

/***/ "./src/images/Restaurant.jpg":
/*!***********************************!*\
  !*** ./src/images/Restaurant.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "50599a35699b3254204e.jpg";

/***/ }),

/***/ "./src/images/desserts.jpg":
/*!*********************************!*\
  !*** ./src/images/desserts.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "23bba773b0a54c7cb127.jpg";

/***/ }),

/***/ "./src/images/drinks.jpeg":
/*!********************************!*\
  !*** ./src/images/drinks.jpeg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "33cb254adc9169c6c6cc.jpeg";

/***/ }),

/***/ "./src/images/home.jpeg":
/*!******************************!*\
  !*** ./src/images/home.jpeg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b2193088b5c3438a025f.jpeg";

/***/ }),

/***/ "./src/images/main-course.jpg":
/*!************************************!*\
  !*** ./src/images/main-course.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9249148ef314634f46e2.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about */ "./src/about.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");




(0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])()

let aboutButton = document.querySelector('.about_section');
aboutButton.addEventListener('click', _about__WEBPACK_IMPORTED_MODULE_0__["default"]);

let homeButton = document.querySelector('.home_section');
homeButton.addEventListener('click', _home__WEBPACK_IMPORTED_MODULE_1__["default"]);

let menuButton = document.querySelector('.menu_section');
menuButton.addEventListener('click', _menu__WEBPACK_IMPORTED_MODULE_2__["default"]);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDJIQUEwQztBQUN0Riw0Q0FBNEMsNkhBQTJDO0FBQ3ZGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsbUNBQW1DO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG1DQUFtQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksb0NBQW9DLHFCQUFxQixzQkFBc0IsOENBQThDLDJDQUEyQyxpQkFBaUIsaUNBQWlDLEtBQUssNkJBQTZCLG9CQUFvQixxQkFBcUIsdURBQXVELCtCQUErQixxQ0FBcUMsb0NBQW9DLHNCQUFzQiwrQkFBK0IsZ0NBQWdDLDRCQUE0QixLQUFLLGlCQUFpQix3REFBd0QsS0FBSywyQkFBMkIscUJBQXFCLHNCQUFzQiwrQkFBK0IsNEJBQTRCLGdDQUFnQywyQkFBMkIsbUNBQW1DLG9DQUFvQyw0QkFBNEIsS0FBSyxjQUFjLCtDQUErQyxLQUFLLG1CQUFtQjtBQUM3OEM7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdER2QztBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0QyxpSEFBcUM7QUFDakYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixtQ0FBbUM7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLCtFQUErRSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLG9DQUFvQyxxQkFBcUIseURBQXlELHNCQUFzQiwrQkFBK0IsZ0NBQWdDLDRCQUE0QixLQUFLLGtCQUFrQixzQkFBc0IsK0JBQStCLGdDQUFnQyw0QkFBNEIsMkJBQTJCLG9CQUFvQixtQkFBbUIsdUJBQXVCLG9DQUFvQyx1Q0FBdUMsMENBQTBDLEtBQUssbUJBQW1CO0FBQzczQjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQnZDO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLGtJQUFnRDtBQUM1Riw0Q0FBNEMsMEhBQTRDO0FBQ3hGLDRDQUE0Qyw0SEFBNkM7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG1DQUFtQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG1DQUFtQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG1DQUFtQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTywrRUFBK0UsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLG9DQUFvQyxxQkFBcUIsb0JBQW9CLHNCQUFzQiwrQkFBK0IsZ0NBQWdDLDRCQUE0QixLQUFLLDZDQUE2QyxxQkFBcUIsbUJBQW1CLDJCQUEyQixvQ0FBb0Msa0NBQWtDLCtCQUErQiwyQkFBMkIsd0JBQXdCLEtBQUssMkJBQTJCLHFCQUFxQixtQkFBbUIsS0FBSyxzQkFBc0Isc0JBQXNCLDhDQUE4QywyQ0FBMkMsa0JBQWtCLHNCQUFzQiw2REFBNkQsS0FBSyxpQkFBaUIsc0JBQXNCLDhDQUE4QywyQ0FBMkMsa0JBQWtCLHNCQUFzQix5REFBeUQsS0FBSyxrQkFBa0Isc0JBQXNCLDhDQUE4QywyQ0FBMkMsa0JBQWtCLHNCQUFzQiwwREFBMEQsS0FBSyxlQUFlLGtEQUFrRCx1Q0FBdUMsMEJBQTBCLHNCQUFzQiwrQkFBK0IsNEJBQTRCLDJCQUEyQix1QkFBdUIsMENBQTBDLHlCQUF5QixLQUFLLHVCQUF1Qiw0REFBNEQsb0NBQW9DLEtBQUssMEJBQTBCLHlCQUF5QixvQ0FBb0MsOENBQThDLCtCQUErQixLQUFLLHdCQUF3QixnQ0FBZ0Msd0JBQXdCLGlDQUFpQyxLQUFLLG1CQUFtQjtBQUMvdkY7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUMvRjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3pCYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLHNGQUFPLFVBQVUsc0ZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekI3RSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFrRztBQUNsRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHFGQUFPOzs7O0FBSTRDO0FBQ3BFLE9BQU8saUVBQWUscUZBQU8sSUFBSSxxRkFBTyxVQUFVLHFGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCN0UsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBa0c7QUFDbEc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxxRkFBTzs7OztBQUk0QztBQUNwRSxPQUFPLGlFQUFlLHFGQUFPLElBQUkscUZBQU8sVUFBVSxxRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDYm9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLEtBQUs7Ozs7Ozs7Ozs7Ozs7OztBQ3hDQTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7QUNoQkM7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ25UZjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7OztBQ0E0QjtBQUNGO0FBQ0E7QUFDMUI7QUFDQSxpREFBSTtBQUNKO0FBQ0E7QUFDQSxzQ0FBc0MsOENBQUs7QUFDM0M7QUFDQTtBQUNBLHFDQUFxQyw2Q0FBSTtBQUN6QztBQUNBO0FBQ0EscUNBQXFDLDZDQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9hYm91dC5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9ob21lLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21lbnUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2Fib3V0LmNzcz80ODQ4Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaG9tZS5jc3M/N2Y5YyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21lbnUuY3NzPzExMGIiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9SZXN0YXVyYW50LmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL21haW4tY291cnNlLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5jb250ZW50IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcclxuICAgIGdhcDogNXB4O1xyXG4gICAgcGFkZGluZzogNXB4IDBweCAwcHggMHB4O1xyXG59XHJcblxyXG4uaW1hZ2UxLFxyXG4uaW1hZ2UyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmltYWdlMiB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XHJcbn1cclxuXHJcbi5hYm91dCxcclxuLmhvdXJzIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMHB4IDIwcHggMHB4IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWViZWYxYTk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG5zcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMC43M3JlbSwgMS4xdncsIDNyZW0pO1xyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYWJvdXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsa0NBQWtDO0lBQ2xDLFFBQVE7SUFDUix3QkFBd0I7QUFDNUI7O0FBRUE7O0lBRUksV0FBVztJQUNYLFlBQVk7SUFDWix5REFBOEM7SUFDOUMsc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QiwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kseURBQStDO0FBQ25EOztBQUVBOztJQUVJLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQiwyQkFBMkI7SUFDM0IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksc0NBQXNDO0FBQzFDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jb250ZW50IHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xcclxcbiAgICBnYXA6IDVweDtcXHJcXG4gICAgcGFkZGluZzogNXB4IDBweCAwcHggMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW1hZ2UxLFxcclxcbi5pbWFnZTIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWFnZXMvUmVzdGF1cmFudC5qcGcpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1hZ2UyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1hZ2VzL21haW4tY291cnNlLmpwZyk7XFxyXFxufVxcclxcblxcclxcbi5hYm91dCxcXHJcXG4uaG91cnMge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDBweCAyMHB4IDBweCAyMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWViZWYxYTk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbnNwYW4ge1xcclxcbiAgICBmb250LXNpemU6IGNsYW1wKDAuNzNyZW0sIDEuMXZ3LCAzcmVtKTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9ob21lLmpwZWdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5jb250ZW50IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBjZW50ZXIvY292ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLndlbGNvbWUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDQwJTtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBjb2xvcjogI2YzZjNmMztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZGFkZDQ4NjtcclxuICAgIHRleHQtc2hhZG93OiAwcHggMXB4IDNweCBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgNnZ3LCA0cmVtKTtcclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2hvbWUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksWUFBWTtJQUNaLGdFQUFnRDtJQUNoRCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsY0FBYztJQUNkLDJCQUEyQjtJQUMzQiw4QkFBOEI7SUFDOUIsaUNBQWlDO0FBQ3JDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jb250ZW50IHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi9pbWFnZXMvaG9tZS5qcGVnKSBjZW50ZXIvY292ZXI7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ud2VsY29tZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGhlaWdodDogNDAlO1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbiAgICBjb2xvcjogI2YzZjNmMztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJkYWRkNDg2O1xcclxcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDFweCAzcHggYmxhY2s7XFxyXFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgNnZ3LCA0cmVtKTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9zcmMvaW1hZ2VzL21haW4tY291cnNlLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL3NyYy9pbWFnZXMvZHJpbmtzLmpwZWdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9zcmMvaW1hZ2VzL2Rlc3NlcnRzLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubWFpbi1jb3Vyc2UsIC5kZXNzZXJ0LCAuZHJpbmtzIHsgICAgXHJcbiAgICBoZWlnaHQ6IDg1dmg7XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA3cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA3cHg7XHJcbn1cclxuXHJcbi5kZXNzZXJ0LCAuZHJpbmtzIHtcclxuICAgIGhlaWdodDogOTV2aDtcclxuICAgIHdpZHRoOiA3NSU7XHJcbn1cclxuXHJcbi5tYWluLWNvdXJzZSB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDFmcik7XHJcbiAgICBnYXA6IDE1cHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xyXG59XHJcblxyXG4uZHJpbmtzIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcclxuICAgIGdhcDogMTVweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XHJcbn1cclxuXHJcbi5kZXNzZXJ0IHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcclxuICAgIGdhcDogMTVweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XHJcbn1cclxuXHJcbi5pdGVtIHtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KSBzYXR1cmF0ZSg3NSUpO1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgcmdiKDAsIDAsIDApO1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzE1YTlmZjtcclxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgM3Z3LCAycmVtKTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5pdGVtID4gLm5hbWUge1xyXG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42ODUpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDkxO1xyXG59XHJcblxyXG4uaXRlbSA+IC5yZWNlcGllIHtcclxuICAgIGNvbG9yOiAjMjMyZWM0ZTE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGJlYWZlNjA7XHJcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCAxcHggcmdiKDAsIDAsIDApO1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlOyAgICBcclxufVxyXG5cclxuLml0ZW0gPiAucHJpY2Uge1xyXG4gICAgY29sb3I6IHJnYigyMTEsIDE5MCwgMCk7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB5ZWxsb3c7XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9tZW51LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxrQ0FBa0M7SUFDbEMsU0FBUztJQUNULGFBQWE7SUFDYix5REFBb0Q7QUFDeEQ7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLGtDQUFrQztJQUNsQyxTQUFTO0lBQ1QsYUFBYTtJQUNiLHlEQUFnRDtBQUNwRDs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsa0NBQWtDO0lBQ2xDLFNBQVM7SUFDVCxhQUFhO0lBQ2IseURBQWlEO0FBQ3JEOztBQUVBO0lBQ0kseUNBQXlDO0lBQ3pDLDhCQUE4QjtJQUM5QixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxpQ0FBaUM7SUFDakMsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksbURBQW1EO0lBQ25ELDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQiwyQkFBMkI7SUFDM0IscUNBQXFDO0lBQ3JDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2Ysd0JBQXdCO0FBQzVCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jb250ZW50IHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tYWluLWNvdXJzZSwgLmRlc3NlcnQsIC5kcmlua3MgeyAgICBcXHJcXG4gICAgaGVpZ2h0OiA4NXZoO1xcclxcbiAgICB3aWR0aDogNzUlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogN3B4O1xcclxcbiAgICBtYXJnaW4tdG9wOiA3cHg7XFxyXFxufVxcclxcblxcclxcbi5kZXNzZXJ0LCAuZHJpbmtzIHtcXHJcXG4gICAgaGVpZ2h0OiA5NXZoO1xcclxcbiAgICB3aWR0aDogNzUlO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1jb3Vyc2Uge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xcclxcbiAgICBnYXA6IDE1cHg7XFxyXFxuICAgIHBhZGRpbmc6IDE1cHg7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9zcmMvaW1hZ2VzL21haW4tY291cnNlLmpwZyk7XFxyXFxufVxcclxcblxcclxcbi5kcmlua3Mge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xcclxcbiAgICBnYXA6IDE1cHg7XFxyXFxuICAgIHBhZGRpbmc6IDE1cHg7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9zcmMvaW1hZ2VzL2RyaW5rcy5qcGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc3NlcnQge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xcclxcbiAgICBnYXA6IDE1cHg7XFxyXFxuICAgIHBhZGRpbmc6IDE1cHg7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9zcmMvaW1hZ2VzL2Rlc3NlcnRzLmpwZyk7XFxyXFxufVxcclxcblxcclxcbi5pdGVtIHtcXHJcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpIHNhdHVyYXRlKDc1JSk7XFxyXFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHJnYigwLCAwLCAwKTtcXHJcXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6ICMxNWE5ZmY7XFxyXFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgM3Z3LCAycmVtKTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0gPiAubmFtZSB7XFxyXFxuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjg1KTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDkxO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbSA+IC5yZWNlcGllIHtcXHJcXG4gICAgY29sb3I6ICMyMzJlYzRlMTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RiZWFmZTYwO1xcclxcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCAxcHggcmdiKDAsIDAsIDApO1xcclxcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7ICAgIFxcclxcbn1cXHJcXG5cXHJcXG4uaXRlbSA+IC5wcmljZSB7XFxyXFxuICAgIGNvbG9yOiByZ2IoMjExLCAxOTAsIDApO1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHllbGxvdztcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Fib3V0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYWJvdXQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hvbWUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ob21lLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tZW51LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWVudS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9hYm91dC5jc3MnXHJcblxyXG5mdW5jdGlvbiBhYm91dCgpIHtcclxuICAgIGNvbnN0IGJhY2tncm91bmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xyXG4gICAgYmFja2dyb3VuZC5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnXHJcbiAgICBiYWNrZ3JvdW5kLmlubmVySFRNTCA9ICcnO1xyXG4gICAgYmFja2dyb3VuZC5zdHlsZS5iYWNrZ3JvdW5kID0gJ3Vuc2V0JztcclxuICAgIGJhY2tncm91bmQuc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xyXG4gICAgbGV0IGFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBhYm91dC5jbGFzc05hbWUgPSAnYWJvdXQnO1xyXG4gICAgbGV0IGhlYWRlcl9hYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICBoZWFkZXJfYWJvdXQuaW5uZXJIVE1MID0gJ0Fib3V0IHVzJztcclxuICAgIGxldCBhYm91dF9kZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgYWJvdXRfZGV0YWlscy5pbm5lckhUTUwgPSBcIldlbGNvbWUgdG8gT2RpbidzIFNlYWZvb2QgUmVzdGF1cmFudCwgd2hlcmUgY3VsaW5hcnkgZXhjZWxsZW5jZSBhbmQgb2NlYW5pYyBkZWxpZ2h0cyBjb252ZXJnZSB0byBjcmVhdGUgYW4gdW5mb3JnZXR0YWJsZSBkaW5pbmcgZXhwZXJpZW5jZS4gTG9jYXRlZCBpbiB0aGUgaGVhcnQgb2YgY2l0eSwgT2RpbidzIGVtYnJhY2VzIHRoZSBzcGlyaXQgb2YgdGhlIHNlYSwgb2ZmZXJpbmcgYSBoYXZlbiBmb3Igc2VhZm9vZCBlbnRodXNpYXN0cyBhbmQgZ2FzdHJvbm9tZXMgYWxpa2UuIFN0ZXAgaW50byB0aGUgZWxlZ2FudCBhbWJpYW5jZSBvZiBPZGluJ3MgYW5kIGJlIHRyYW5zcG9ydGVkIHRvIGEgbWFyaXRpbWUgb2FzaXMuIFRoZSByZXN0YXVyYW50J3MgZGVjb3IgdGFzdGVmdWxseSBibGVuZHMgbmF1dGljYWwgZWxlbWVudHMgd2l0aCBhIGNvbnRlbXBvcmFyeSB0b3VjaCwgZmVhdHVyaW5nIGh1ZXMgb2YgYmx1ZSByZW1pbmlzY2VudCBvZiB0aGUgb2NlYW4gYW5kIGludHJpY2F0ZSBzZWFzaGVsbCAtIGluc3BpcmVkIHBhdHRlcm5zLlNvZnQgbGlnaHRpbmcgY3JlYXRlcyBhbiBpbnRpbWF0ZSBhdG1vc3BoZXJlLCBwZXJmZWN0IGZvciBhIHJvbWFudGljIGRpbm5lciBvciBhIGdhdGhlcmluZyB3aXRoIGZyaWVuZHMgYW5kIGZhbWlseS5cIlxyXG4gICAgYWJvdXQuYXBwZW5kQ2hpbGQoaGVhZGVyX2Fib3V0KTtcclxuICAgIGFib3V0LmFwcGVuZENoaWxkKGFib3V0X2RldGFpbHMpO1xyXG5cclxuICAgIGxldCBpbWFnZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGltYWdlMS5jbGFzc05hbWUgPSAnaW1hZ2UxJztcclxuXHJcbiAgICBsZXQgaW1hZ2UyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBpbWFnZTIuY2xhc3NOYW1lID0gJ2ltYWdlMic7XHJcblxyXG4gICAgbGV0IGhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBob3Vycy5jbGFzc05hbWUgPSAnaG91cnMnO1xyXG4gICAgbGV0IGhlYWRlcl9ob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICBoZWFkZXJfaG91cnMuaW5uZXJIVE1MID0gJ0hvdXJzJztcclxuICAgIGxldCBzY2hlZHVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIHNjaGVkdWxlLmlubmVySFRNTCA9IFwiTW9uZGF5OiA1OjAwIFBNIC0gMTA6MDAgUE08YnI+IFR1ZXNkYXk6IDU6MDAgUE0gLSAxMDowMCBQTTxicj4gV2VkbmVzZGF5OiA1OjAwIFBNIC0gMTA6MDAgUE08YnI+IFRodXJzZGF5OiA1OjAwIFBNIC0gMTA6MDAgUE08YnI+IEZyaWRheTogNTowMCBQTSAtIDExOjAwIFBNPGJyPiBTYXR1cmRheTogMTI6MDAgUE0gLSAxMTowMCBQTTxicj4gU3VuZGF5OiAxMjowMCBQTSAtIDEwOjAwIFBNPGJyPiA8YnI+IFBsZWFzZSBub3RlIHRoYXQgdGhlc2UgaG91cnMgYXJlIHN1YmplY3QgdG8gY2hhbmdlLCBhbmQgaXQncyBhbHdheXMgYSBnb29kIGlkZWEgdG8gY29udGFjdCB0aGUgcmVzdGF1cmFudCBkaXJlY3RseSBvciB2aXNpdCB0aGVpciB3ZWJzaXRlIGZvciB0aGUgbW9zdCB1cC10by1kYXRlIGluZm9ybWF0aW9uLlwiO1xyXG4gICAgaG91cnMuYXBwZW5kQ2hpbGQoaGVhZGVyX2hvdXJzKTtcclxuICAgIGhvdXJzLmFwcGVuZENoaWxkKHNjaGVkdWxlKTtcclxuICAgIFxyXG4gICAgXHJcblxyXG4gICAgYmFja2dyb3VuZC5hcHBlbmRDaGlsZChhYm91dCk7XHJcbiAgICBiYWNrZ3JvdW5kLmFwcGVuZENoaWxkKGltYWdlMSk7XHJcbiAgICBiYWNrZ3JvdW5kLmFwcGVuZENoaWxkKGltYWdlMik7XHJcbiAgICBiYWNrZ3JvdW5kLmFwcGVuZENoaWxkKGhvdXJzKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWJvdXQ7IiwiaW1wb3J0ICcuL2hvbWUuY3NzJztcclxuXHJcbmZ1bmN0aW9uIGhvbWUoKSB7ICAgIFxyXG4gICAgY29uc3QgYmFja2dyb3VuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7ICAgIFxyXG4gICAgYmFja2dyb3VuZC5pbm5lckhUTUwgPSAnJztcclxuICAgIGJhY2tncm91bmQuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgIGJhY2tncm91bmQuc3R5bGUuYmFja2dyb3VuZCA9IGB1cmwoLi4vc3JjL2ltYWdlcy9ob21lLmpwZWcpIGNlbnRlci9jb3ZlcmA7ICAgIFxyXG4gICAgYmFja2dyb3VuZC5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XHJcblxyXG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGV4dC5pbm5lckhUTUwgPSBcIldlbGNvbWUgdG8gPGJyPk9kaW4ncyBzZWFmb29kIHJlc3RhdXJhbnQhXCJcclxuICAgIHRleHQuY2xhc3NOYW1lID0gXCJ3ZWxjb21lXCI7XHJcblxyXG4gICAgYmFja2dyb3VuZC5hcHBlbmRDaGlsZCh0ZXh0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaG9tZTsiLCJpbXBvcnQgJy4vbWVudS5jc3MnO1xyXG5cclxuZnVuY3Rpb24gbWVudSgpIHtcclxuICAgIGNvbnN0IGJhY2tncm91bmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xyXG4gICAgYmFja2dyb3VuZC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXHJcbiAgICBiYWNrZ3JvdW5kLmlubmVySFRNTCA9ICcnO1xyXG4gICAgYmFja2dyb3VuZC5zdHlsZS5iYWNrZ3JvdW5kID0gJ3Vuc2V0JztcclxuICAgIGJhY2tncm91bmQuc3R5bGUuaGVpZ2h0ID0gJ21heC1jb250ZW50JztcclxuXHJcbiAgICBjb25zdCBtYWluX2NvdXJzZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbWFpbl9jb3Vyc2UuY2xhc3NOYW1lID0gXCJtYWluLWNvdXJzZVwiO1xyXG5cclxuICAgIGNvbnN0IGRyaW5rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZHJpbmtzLmNsYXNzTmFtZSA9IFwiZHJpbmtzXCI7XHJcblxyXG4gICAgY29uc3QgZGVzc2VydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGVzc2VydC5jbGFzc05hbWUgPSBcImRlc3NlcnRcIjtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSA1OyBpKyspIHtcclxuICAgICAgICBpZiAoaSA9PSAwKSB7XHJcbiAgICAgICAgICAgIC8vIU1haW4gY291cnNlXHJcbiAgICAgICAgICAgIGNvbnN0IG1haW5fY291cnNlX2l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgbWFpbl9jb3Vyc2VfaXRlbS5jbGFzc05hbWUgPSBcIml0ZW1cIjtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG1haW5fY291cnNlX2l0ZW1fbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBtYWluX2NvdXJzZV9pdGVtX25hbWUuY2xhc3NOYW1lID0gJ25hbWUnO1xyXG4gICAgICAgICAgICBtYWluX2NvdXJzZV9pdGVtX25hbWUuaW5uZXJIVE1MID0gJ0dyaWxsZWQgQ2hpbGVhbiBTZWEgQmFzcyc7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBtYWluX2NvdXJzZV9pdGVtX3JlY2VwaWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgIG1haW5fY291cnNlX2l0ZW1fcmVjZXBpZS5jbGFzc05hbWUgPSAncmVjZXBpZSc7XHJcbiAgICAgICAgICAgIG1haW5fY291cnNlX2l0ZW1fcmVjZXBpZS5pbm5lckhUTUwgPSAnVGVuZGVyIGFuZCBmbGFreSBDaGlsZWFuIHNlYSBiYXNzIG1hcmluYXRlZCB3aXRoIGFyb21hdGljIGhlcmJzLCBncmlsbGVkIHRvIHBlcmZlY3Rpb24sIGFuZCBzZXJ2ZWQgd2l0aCBhIHplc3R5IGNpdHJ1cyBnbGF6ZS4nXHJcblxyXG4gICAgICAgICAgICBjb25zdCBtYWluX2NvdXJzZV9pdGVtX3ByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICBtYWluX2NvdXJzZV9pdGVtX3ByaWNlLmNsYXNzTmFtZSA9ICdwcmljZSc7XHJcbiAgICAgICAgICAgIG1haW5fY291cnNlX2l0ZW1fcHJpY2UuaW5uZXJIVE1MID0gJ1ByaWNlOiAyMCQnO1xyXG5cclxuICAgICAgICAgICAgbWFpbl9jb3Vyc2VfaXRlbS5hcHBlbmRDaGlsZChtYWluX2NvdXJzZV9pdGVtX25hbWUpO1xyXG4gICAgICAgICAgICBtYWluX2NvdXJzZV9pdGVtLmFwcGVuZENoaWxkKG1haW5fY291cnNlX2l0ZW1fcmVjZXBpZSk7XHJcbiAgICAgICAgICAgIG1haW5fY291cnNlX2l0ZW0uYXBwZW5kQ2hpbGQobWFpbl9jb3Vyc2VfaXRlbV9wcmljZSk7XHJcbiAgICAgICAgICAgIG1haW5fY291cnNlLmFwcGVuZENoaWxkKG1haW5fY291cnNlX2l0ZW0pXHJcblxyXG4gICAgICAgICAgICAvLyFEcmlua3NcclxuICAgICAgICAgICAgY29uc3QgZHJpbmtzX2l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgZHJpbmtzX2l0ZW0uY2xhc3NOYW1lID0gXCJpdGVtXCI7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkcmlua3NfaXRlbV9uYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGRyaW5rc19pdGVtX25hbWUuY2xhc3NOYW1lID0gJ25hbWUnO1xyXG4gICAgICAgICAgICBkcmlua3NfaXRlbV9uYW1lLmlubmVySFRNTCA9ICdDcmFmdCBCZWVyIFNlbGVjdGlvbic7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkcmlua3NfaXRlbV9yZWNlcGllID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICBkcmlua3NfaXRlbV9yZWNlcGllLmNsYXNzTmFtZSA9ICdyZWNlcGllJztcclxuICAgICAgICAgICAgZHJpbmtzX2l0ZW1fcmVjZXBpZS5pbm5lckhUTUwgPSBcIk9kaW4ncyBvZmZlcnMgYSBjdXJhdGVkIHNlbGVjdGlvbiBvZiBsb2NhbCBhbmQgaW50ZXJuYXRpb25hbCBjcmFmdCBiZWVycyB0aGF0IGNhbiBwcm92aWRlIGEgcmVmcmVzaGluZyBhbmQgdW5pcXVlIGFjY29tcGFuaW1lbnQgdG8geW91ciBtZWFsLlwiXHJcblxyXG4gICAgICAgICAgICBjb25zdCBkcmlua3NfaXRlbV9wcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgICAgZHJpbmtzX2l0ZW1fcHJpY2UuY2xhc3NOYW1lID0gJ3ByaWNlJztcclxuICAgICAgICAgICAgZHJpbmtzX2l0ZW1fcHJpY2UuaW5uZXJIVE1MID0gJ1ByaWNlOiAxMCQnO1xyXG5cclxuICAgICAgICAgICAgZHJpbmtzX2l0ZW0uYXBwZW5kQ2hpbGQoZHJpbmtzX2l0ZW1fbmFtZSk7XHJcbiAgICAgICAgICAgIGRyaW5rc19pdGVtLmFwcGVuZENoaWxkKGRyaW5rc19pdGVtX3JlY2VwaWUpO1xyXG4gICAgICAgICAgICBkcmlua3NfaXRlbS5hcHBlbmRDaGlsZChkcmlua3NfaXRlbV9wcmljZSk7XHJcbiAgICAgICAgICAgIGRyaW5rcy5hcHBlbmRDaGlsZChkcmlua3NfaXRlbSlcclxuXHJcbiAgICAgICAgICAgIC8vIURlc3NlcnRcclxuICAgICAgICAgICAgY29uc3QgZGVzc2VydF9pdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGRlc3NlcnRfaXRlbS5jbGFzc05hbWUgPSBcIml0ZW1cIjtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRlc3NlcnRfaXRlbV9uYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGRlc3NlcnRfaXRlbV9uYW1lLmNsYXNzTmFtZSA9ICduYW1lJztcclxuICAgICAgICAgICAgZGVzc2VydF9pdGVtX25hbWUuaW5uZXJIVE1MID0gJ0tleSBMaW1lIFBpZSc7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkZXNzZXJ0X2l0ZW1fcmVjZXBpZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgICAgZGVzc2VydF9pdGVtX3JlY2VwaWUuY2xhc3NOYW1lID0gJ3JlY2VwaWUnO1xyXG4gICAgICAgICAgICBkZXNzZXJ0X2l0ZW1fcmVjZXBpZS5pbm5lckhUTUwgPSAnQSB0YW5neSBhbmQgY3JlYW15IEtleSBsaW1lIHBpZSBzZXJ2ZWQgd2l0aCBhIGdyYWhhbSBjcmFja2VyIGNydXN0LCBwcm92aWRpbmcgYSByZWZyZXNoaW5nIGVuZCB0byB5b3VyIHNlYWZvb2QgZmVhc3QuJ1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZGVzc2VydF9pdGVtX3ByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICBkZXNzZXJ0X2l0ZW1fcHJpY2UuY2xhc3NOYW1lID0gJ3ByaWNlJztcclxuICAgICAgICAgICAgZGVzc2VydF9pdGVtX3ByaWNlLmlubmVySFRNTCA9ICdQcmljZTogMTAkJztcclxuXHJcbiAgICAgICAgICAgIGRlc3NlcnRfaXRlbS5hcHBlbmRDaGlsZChkZXNzZXJ0X2l0ZW1fbmFtZSk7XHJcbiAgICAgICAgICAgIGRlc3NlcnRfaXRlbS5hcHBlbmRDaGlsZChkZXNzZXJ0X2l0ZW1fcmVjZXBpZSk7XHJcbiAgICAgICAgICAgIGRlc3NlcnRfaXRlbS5hcHBlbmRDaGlsZChkZXNzZXJ0X2l0ZW1fcHJpY2UpO1xyXG4gICAgICAgICAgICBkZXNzZXJ0LmFwcGVuZENoaWxkKGRlc3NlcnRfaXRlbSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGkgPT0gMSkge1xyXG4gICAgICAgICAgICAvLyFNYWluIGNvdXJzZVxyXG4gICAgICAgICAgICBjb25zdCBtYWluX2NvdXJzZV9pdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIG1haW5fY291cnNlX2l0ZW0uY2xhc3NOYW1lID0gXCJpdGVtXCI7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBtYWluX2NvdXJzZV9pdGVtX25hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgbWFpbl9jb3Vyc2VfaXRlbV9uYW1lLmNsYXNzTmFtZSA9ICduYW1lJztcclxuICAgICAgICAgICAgbWFpbl9jb3Vyc2VfaXRlbV9uYW1lLmlubmVySFRNTCA9ICdMb2JzdGVyIFRoZXJtaWRvcic7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBtYWluX2NvdXJzZV9pdGVtX3JlY2VwaWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgIG1haW5fY291cnNlX2l0ZW1fcmVjZXBpZS5jbGFzc05hbWUgPSAncmVjZXBpZSc7XHJcbiAgICAgICAgICAgIG1haW5fY291cnNlX2l0ZW1fcmVjZXBpZS5pbm5lckhUTUwgPSAnSW5kdWxnZSBpbiBhIGNsYXNzaWMgZGlzaCBmZWF0dXJpbmcgc3VjY3VsZW50IGxvYnN0ZXIgdGFpbCBtZWF0IGNvb2tlZCBpbiBhIHJpY2ggYW5kIGNyZWFteSBzYXVjZSwgdG9wcGVkIHdpdGggYSBnb2xkZW4gYnJlYWRjcnVtYiBjcnVzdCBhbmQgYmFrZWQgdG8gcGVyZmVjdGlvbi4nXHJcblxyXG4gICAgICAgICAgICBjb25zdCBtYWluX2NvdXJzZV9pdGVtX3ByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICBtYWluX2NvdXJzZV9pdGVtX3ByaWNlLmNsYXNzTmFtZSA9ICdwcmljZSc7XHJcbiAgICAgICAgICAgIG1haW5fY291cnNlX2l0ZW1fcHJpY2UuaW5uZXJIVE1MID0gJ1ByaWNlOiA1NSQnO1xyXG5cclxuICAgICAgICAgICAgbWFpbl9jb3Vyc2VfaXRlbS5hcHBlbmRDaGlsZChtYWluX2NvdXJzZV9pdGVtX25hbWUpO1xyXG4gICAgICAgICAgICBtYWluX2NvdXJzZV9pdGVtLmFwcGVuZENoaWxkKG1haW5fY291cnNlX2l0ZW1fcmVjZXBpZSk7XHJcbiAgICAgICAgICAgIG1haW5fY291cnNlX2l0ZW0uYXBwZW5kQ2hpbGQobWFpbl9jb3Vyc2VfaXRlbV9wcmljZSk7XHJcbiAgICAgICAgICAgIG1haW5fY291cnNlLmFwcGVuZENoaWxkKG1haW5fY291cnNlX2l0ZW0pXHJcblxyXG4gICAgICAgICAgICAvLyFEcmlua3NcclxuICAgICAgICAgICAgY29uc3QgZHJpbmtzX2l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgZHJpbmtzX2l0ZW0uY2xhc3NOYW1lID0gXCJpdGVtXCI7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkcmlua3NfaXRlbV9uYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGRyaW5rc19pdGVtX25hbWUuY2xhc3NOYW1lID0gJ25hbWUnO1xyXG4gICAgICAgICAgICBkcmlua3NfaXRlbV9uYW1lLmlubmVySFRNTCA9ICdDaGFyZG9ubmF5JztcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRyaW5rc19pdGVtX3JlY2VwaWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgIGRyaW5rc19pdGVtX3JlY2VwaWUuY2xhc3NOYW1lID0gJ3JlY2VwaWUnO1xyXG4gICAgICAgICAgICBkcmlua3NfaXRlbV9yZWNlcGllLmlubmVySFRNTCA9IFwiQSBjcmlzcCBhbmQgYnV0dGVyeSB3aGl0ZSB3aW5lIHRoYXQgcGFpcnMgd2VsbCB3aXRoIGEgdmFyaWV0eSBvZiBzZWFmb29kIGRpc2hlcywgZW5oYW5jaW5nIHRoZWlyIGZsYXZvcnMuXCJcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRyaW5rc19pdGVtX3ByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICBkcmlua3NfaXRlbV9wcmljZS5jbGFzc05hbWUgPSAncHJpY2UnO1xyXG4gICAgICAgICAgICBkcmlua3NfaXRlbV9wcmljZS5pbm5lckhUTUwgPSAnUHJpY2U6IDE1JCc7XHJcblxyXG4gICAgICAgICAgICBkcmlua3NfaXRlbS5hcHBlbmRDaGlsZChkcmlua3NfaXRlbV9uYW1lKTtcclxuICAgICAgICAgICAgZHJpbmtzX2l0ZW0uYXBwZW5kQ2hpbGQoZHJpbmtzX2l0ZW1fcmVjZXBpZSk7XHJcbiAgICAgICAgICAgIGRyaW5rc19pdGVtLmFwcGVuZENoaWxkKGRyaW5rc19pdGVtX3ByaWNlKTtcclxuICAgICAgICAgICAgZHJpbmtzLmFwcGVuZENoaWxkKGRyaW5rc19pdGVtKVxyXG5cclxuICAgICAgICAgICAgLy8hRGVzc2VydFxyXG4gICAgICAgICAgICBjb25zdCBkZXNzZXJ0X2l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgZGVzc2VydF9pdGVtLmNsYXNzTmFtZSA9IFwiaXRlbVwiO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZGVzc2VydF9pdGVtX25hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgZGVzc2VydF9pdGVtX25hbWUuY2xhc3NOYW1lID0gJ25hbWUnO1xyXG4gICAgICAgICAgICBkZXNzZXJ0X2l0ZW1fbmFtZS5pbm5lckhUTUwgPSAnQ2hvY29sYXRlIExhdmEgQ2FrZSc7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkZXNzZXJ0X2l0ZW1fcmVjZXBpZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgICAgZGVzc2VydF9pdGVtX3JlY2VwaWUuY2xhc3NOYW1lID0gJ3JlY2VwaWUnO1xyXG4gICAgICAgICAgICBkZXNzZXJ0X2l0ZW1fcmVjZXBpZS5pbm5lckhUTUwgPSAnU2F0aXNmeSB5b3VyIHN3ZWV0IHRvb3RoIHdpdGggYSBkZWNhZGVudCBjaG9jb2xhdGUgbGF2YSBjYWtlLCBmZWF0dXJpbmcgYSByaWNoLCBtb2x0ZW4gY2VudGVyIGFuZCBhIHNjb29wIG9mIHZhbmlsbGEgaWNlIGNyZWFtLidcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRlc3NlcnRfaXRlbV9wcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgICAgZGVzc2VydF9pdGVtX3ByaWNlLmNsYXNzTmFtZSA9ICdwcmljZSc7XHJcbiAgICAgICAgICAgIGRlc3NlcnRfaXRlbV9wcmljZS5pbm5lckhUTUwgPSAnUHJpY2U6IDEwJCc7XHJcblxyXG4gICAgICAgICAgICBkZXNzZXJ0X2l0ZW0uYXBwZW5kQ2hpbGQoZGVzc2VydF9pdGVtX25hbWUpO1xyXG4gICAgICAgICAgICBkZXNzZXJ0X2l0ZW0uYXBwZW5kQ2hpbGQoZGVzc2VydF9pdGVtX3JlY2VwaWUpO1xyXG4gICAgICAgICAgICBkZXNzZXJ0X2l0ZW0uYXBwZW5kQ2hpbGQoZGVzc2VydF9pdGVtX3ByaWNlKTtcclxuICAgICAgICAgICAgZGVzc2VydC5hcHBlbmRDaGlsZChkZXNzZXJ0X2l0ZW0pXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChpID09IDIpIHtcclxuICAgICAgICAgICAgLy8hTWFpbiBjb3Vyc2VcclxuICAgICAgICAgICAgY29uc3QgbWFpbl9jb3Vyc2VfaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBtYWluX2NvdXJzZV9pdGVtLmNsYXNzTmFtZSA9IFwiaXRlbVwiO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbWFpbl9jb3Vyc2VfaXRlbV9uYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIG1haW5fY291cnNlX2l0ZW1fbmFtZS5jbGFzc05hbWUgPSAnbmFtZSc7XHJcbiAgICAgICAgICAgIG1haW5fY291cnNlX2l0ZW1fbmFtZS5pbm5lckhUTUwgPSAnU2NhbGxvcHMgd2l0aCBUcnVmZmxlIFJpc290dG8nO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbWFpbl9jb3Vyc2VfaXRlbV9yZWNlcGllID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICBtYWluX2NvdXJzZV9pdGVtX3JlY2VwaWUuY2xhc3NOYW1lID0gJ3JlY2VwaWUnO1xyXG4gICAgICAgICAgICBtYWluX2NvdXJzZV9pdGVtX3JlY2VwaWUuaW5uZXJIVE1MID0gJ1Bhbi1zZWFyZWQganVtYm8gc2NhbGxvcHMgc2VydmVkIG9uIGEgYmVkIG9mIGNyZWFteSB0cnVmZmxlLWluZnVzZWQgcmlzb3R0bywgY3JlYXRpbmcgYSBoYXJtb25pb3VzIGNvbWJpbmF0aW9uIG9mIGZsYXZvcnMgYW5kIHRleHR1cmVzLidcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG1haW5fY291cnNlX2l0ZW1fcHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgIG1haW5fY291cnNlX2l0ZW1fcHJpY2UuY2xhc3NOYW1lID0gJ3ByaWNlJztcclxuICAgICAgICAgICAgbWFpbl9jb3Vyc2VfaXRlbV9wcmljZS5pbm5lckhUTUwgPSAnUHJpY2U6IDY1JCc7XHJcblxyXG4gICAgICAgICAgICBtYWluX2NvdXJzZV9pdGVtLmFwcGVuZENoaWxkKG1haW5fY291cnNlX2l0ZW1fbmFtZSk7XHJcbiAgICAgICAgICAgIG1haW5fY291cnNlX2l0ZW0uYXBwZW5kQ2hpbGQobWFpbl9jb3Vyc2VfaXRlbV9yZWNlcGllKTtcclxuICAgICAgICAgICAgbWFpbl9jb3Vyc2VfaXRlbS5hcHBlbmRDaGlsZChtYWluX2NvdXJzZV9pdGVtX3ByaWNlKTtcclxuICAgICAgICAgICAgbWFpbl9jb3Vyc2UuYXBwZW5kQ2hpbGQobWFpbl9jb3Vyc2VfaXRlbSlcclxuXHJcbiAgICAgICAgICAgIC8vIURyaW5rc1xyXG4gICAgICAgICAgICBjb25zdCBkcmlua3NfaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBkcmlua3NfaXRlbS5jbGFzc05hbWUgPSBcIml0ZW1cIjtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRyaW5rc19pdGVtX25hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgZHJpbmtzX2l0ZW1fbmFtZS5jbGFzc05hbWUgPSAnbmFtZSc7XHJcbiAgICAgICAgICAgIGRyaW5rc19pdGVtX25hbWUuaW5uZXJIVE1MID0gJ1Bpbm90IE5vaXInO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZHJpbmtzX2l0ZW1fcmVjZXBpZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgICAgZHJpbmtzX2l0ZW1fcmVjZXBpZS5jbGFzc05hbWUgPSAncmVjZXBpZSc7XHJcbiAgICAgICAgICAgIGRyaW5rc19pdGVtX3JlY2VwaWUuaW5uZXJIVE1MID0gXCJBIG1lZGl1bS1ib2RpZWQgcmVkIHdpbmUgd2l0aCBzb2Z0IHRhbm5pbnMgdGhhdCBjYW4gY29tcGxlbWVudCBoZWFydGllciBzZWFmb29kIGRpc2hlcywgc3VjaCBhcyBncmlsbGVkIHN3b3JkZmlzaCBvciBsb2JzdGVyLlwiXHJcblxyXG4gICAgICAgICAgICBjb25zdCBkcmlua3NfaXRlbV9wcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgICAgZHJpbmtzX2l0ZW1fcHJpY2UuY2xhc3NOYW1lID0gJ3ByaWNlJztcclxuICAgICAgICAgICAgZHJpbmtzX2l0ZW1fcHJpY2UuaW5uZXJIVE1MID0gJ1ByaWNlOiAyMCQnO1xyXG5cclxuICAgICAgICAgICAgZHJpbmtzX2l0ZW0uYXBwZW5kQ2hpbGQoZHJpbmtzX2l0ZW1fbmFtZSk7XHJcbiAgICAgICAgICAgIGRyaW5rc19pdGVtLmFwcGVuZENoaWxkKGRyaW5rc19pdGVtX3JlY2VwaWUpO1xyXG4gICAgICAgICAgICBkcmlua3NfaXRlbS5hcHBlbmRDaGlsZChkcmlua3NfaXRlbV9wcmljZSk7XHJcbiAgICAgICAgICAgIGRyaW5rcy5hcHBlbmRDaGlsZChkcmlua3NfaXRlbSlcclxuXHJcbiAgICAgICAgICAgIC8vIURlc3NlcnRcclxuICAgICAgICAgICAgY29uc3QgZGVzc2VydF9pdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGRlc3NlcnRfaXRlbS5jbGFzc05hbWUgPSBcIml0ZW1cIjtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRlc3NlcnRfaXRlbV9uYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGRlc3NlcnRfaXRlbV9uYW1lLmNsYXNzTmFtZSA9ICduYW1lJztcclxuICAgICAgICAgICAgZGVzc2VydF9pdGVtX25hbWUuaW5uZXJIVE1MID0gJ0ZyZXNoIEJlcnJ5IFRhcnQnO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZGVzc2VydF9pdGVtX3JlY2VwaWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgIGRlc3NlcnRfaXRlbV9yZWNlcGllLmNsYXNzTmFtZSA9ICdyZWNlcGllJztcclxuICAgICAgICAgICAgZGVzc2VydF9pdGVtX3JlY2VwaWUuaW5uZXJIVE1MID0gJ0Vuam95IGEgZGVsaWdodGZ1bCBjb21iaW5hdGlvbiBvZiBmcmVzaCBzZWFzb25hbCBiZXJyaWVzIG5lc3RsZWQgaW4gYSBidXR0ZXJ5IHRhcnQgc2hlbGwsIHRvcHBlZCB3aXRoIGEgZG9sbG9wIG9mIHdoaXBwZWQgY3JlYW0uJ1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZGVzc2VydF9pdGVtX3ByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICBkZXNzZXJ0X2l0ZW1fcHJpY2UuY2xhc3NOYW1lID0gJ3ByaWNlJztcclxuICAgICAgICAgICAgZGVzc2VydF9pdGVtX3ByaWNlLmlubmVySFRNTCA9ICdQcmljZTogMTAkJztcclxuXHJcbiAgICAgICAgICAgIGRlc3NlcnRfaXRlbS5hcHBlbmRDaGlsZChkZXNzZXJ0X2l0ZW1fbmFtZSk7XHJcbiAgICAgICAgICAgIGRlc3NlcnRfaXRlbS5hcHBlbmRDaGlsZChkZXNzZXJ0X2l0ZW1fcmVjZXBpZSk7XHJcbiAgICAgICAgICAgIGRlc3NlcnRfaXRlbS5hcHBlbmRDaGlsZChkZXNzZXJ0X2l0ZW1fcHJpY2UpO1xyXG4gICAgICAgICAgICBkZXNzZXJ0LmFwcGVuZENoaWxkKGRlc3NlcnRfaXRlbSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGkgPT0gMykge1xyXG4gICAgICAgICAgICAvLyFNYWluIGNvdXJzZVxyXG4gICAgICAgICAgICBjb25zdCBtYWluX2NvdXJzZV9pdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIG1haW5fY291cnNlX2l0ZW0uY2xhc3NOYW1lID0gXCJpdGVtXCI7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBtYWluX2NvdXJzZV9pdGVtX25hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgbWFpbl9jb3Vyc2VfaXRlbV9uYW1lLmNsYXNzTmFtZSA9ICduYW1lJztcclxuICAgICAgICAgICAgbWFpbl9jb3Vyc2VfaXRlbV9uYW1lLmlubmVySFRNTCA9ICdBbGFza2FuIEtpbmcgQ3JhYiBMZWdzJztcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG1haW5fY291cnNlX2l0ZW1fcmVjZXBpZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgICAgbWFpbl9jb3Vyc2VfaXRlbV9yZWNlcGllLmNsYXNzTmFtZSA9ICdyZWNlcGllJztcclxuICAgICAgICAgICAgbWFpbl9jb3Vyc2VfaXRlbV9yZWNlcGllLmlubmVySFRNTCA9ICdFeHBlcmllbmNlIHRoZSBzd2VldCBhbmQgZGVsaWNhdGUgbWVhdCBvZiBBbGFza2FuIGtpbmcgY3JhYiBsZWdzLCBzdGVhbWVkIHRvIHBlcmZlY3Rpb24gYW5kIHNlcnZlZCB3aXRoIGRyYXduIGJ1dHRlciBhbmQgbGVtb24gd2VkZ2VzLidcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG1haW5fY291cnNlX2l0ZW1fcHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgIG1haW5fY291cnNlX2l0ZW1fcHJpY2UuY2xhc3NOYW1lID0gJ3ByaWNlJztcclxuICAgICAgICAgICAgbWFpbl9jb3Vyc2VfaXRlbV9wcmljZS5pbm5lckhUTUwgPSAnUHJpY2U6IDM1JCc7XHJcblxyXG4gICAgICAgICAgICBtYWluX2NvdXJzZV9pdGVtLmFwcGVuZENoaWxkKG1haW5fY291cnNlX2l0ZW1fbmFtZSk7XHJcbiAgICAgICAgICAgIG1haW5fY291cnNlX2l0ZW0uYXBwZW5kQ2hpbGQobWFpbl9jb3Vyc2VfaXRlbV9yZWNlcGllKTtcclxuICAgICAgICAgICAgbWFpbl9jb3Vyc2VfaXRlbS5hcHBlbmRDaGlsZChtYWluX2NvdXJzZV9pdGVtX3ByaWNlKTtcclxuICAgICAgICAgICAgbWFpbl9jb3Vyc2UuYXBwZW5kQ2hpbGQobWFpbl9jb3Vyc2VfaXRlbSlcclxuXHJcbiAgICAgICAgICAgIC8vIURyaW5rc1xyXG4gICAgICAgICAgICBjb25zdCBkcmlua3NfaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBkcmlua3NfaXRlbS5jbGFzc05hbWUgPSBcIml0ZW1cIjtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRyaW5rc19pdGVtX25hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgZHJpbmtzX2l0ZW1fbmFtZS5jbGFzc05hbWUgPSAnbmFtZSc7XHJcbiAgICAgICAgICAgIGRyaW5rc19pdGVtX25hbWUuaW5uZXJIVE1MID0gJ1NpZ25hdHVyZSBDb2NrdGFpbHMnO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZHJpbmtzX2l0ZW1fcmVjZXBpZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgICAgZHJpbmtzX2l0ZW1fcmVjZXBpZS5jbGFzc05hbWUgPSAncmVjZXBpZSc7XHJcbiAgICAgICAgICAgIGRyaW5rc19pdGVtX3JlY2VwaWUuaW5uZXJIVE1MID0gXCJJbmR1bGdlIGluIGhhbmRjcmFmdGVkIGNvY2t0YWlscyBpbnNwaXJlZCBieSB0aGUgc2VhLCBzdWNoIGFzIGEgcmVmcmVzaGluZyBTZWEgQnJlZXplIG9yIGEgY2xhc3NpYyBNb2ppdG8gd2l0aCBhIHNlYWZvb2QgdHdpc3QuXCJcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRyaW5rc19pdGVtX3ByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICBkcmlua3NfaXRlbV9wcmljZS5jbGFzc05hbWUgPSAncHJpY2UnO1xyXG4gICAgICAgICAgICBkcmlua3NfaXRlbV9wcmljZS5pbm5lckhUTUwgPSAnUHJpY2U6IDEwJCc7XHJcblxyXG4gICAgICAgICAgICBkcmlua3NfaXRlbS5hcHBlbmRDaGlsZChkcmlua3NfaXRlbV9uYW1lKTtcclxuICAgICAgICAgICAgZHJpbmtzX2l0ZW0uYXBwZW5kQ2hpbGQoZHJpbmtzX2l0ZW1fcmVjZXBpZSk7XHJcbiAgICAgICAgICAgIGRyaW5rc19pdGVtLmFwcGVuZENoaWxkKGRyaW5rc19pdGVtX3ByaWNlKTtcclxuICAgICAgICAgICAgZHJpbmtzLmFwcGVuZENoaWxkKGRyaW5rc19pdGVtKSAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGkgPT0gNCkge1xyXG4gICAgICAgICAgICAvLyFNYWluIGNvdXJzZVxyXG4gICAgICAgICAgICBjb25zdCBtYWluX2NvdXJzZV9pdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIG1haW5fY291cnNlX2l0ZW0uY2xhc3NOYW1lID0gXCJpdGVtXCI7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBtYWluX2NvdXJzZV9pdGVtX25hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgbWFpbl9jb3Vyc2VfaXRlbV9uYW1lLmNsYXNzTmFtZSA9ICduYW1lJztcclxuICAgICAgICAgICAgbWFpbl9jb3Vyc2VfaXRlbV9uYW1lLmlubmVySFRNTCA9ICdTZWFmb29kIFBhZWxsYSc7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBtYWluX2NvdXJzZV9pdGVtX3JlY2VwaWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgIG1haW5fY291cnNlX2l0ZW1fcmVjZXBpZS5jbGFzc05hbWUgPSAncmVjZXBpZSc7XHJcbiAgICAgICAgICAgIG1haW5fY291cnNlX2l0ZW1fcmVjZXBpZS5pbm5lckhUTUwgPSAnRGVsaWdodCBpbiBhIHZpYnJhbnQgYW5kIGFyb21hdGljIFNwYW5pc2gtc3R5bGUgc2VhZm9vZCBwYWVsbGEsIGJyaW1taW5nIHdpdGggYSB0YW50YWxpemluZyBtZWRsZXkgb2Ygc2hyaW1wLCBtdXNzZWxzLCBjbGFtcywgYW5kIGNhbGFtYXJpLCBhbGwgbmVzdGxlZCBpbiBzYWZmcm9uLWluZnVzZWQgcmljZS4nXHJcblxyXG4gICAgICAgICAgICBjb25zdCBtYWluX2NvdXJzZV9pdGVtX3ByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICBtYWluX2NvdXJzZV9pdGVtX3ByaWNlLmNsYXNzTmFtZSA9ICdwcmljZSc7XHJcbiAgICAgICAgICAgIG1haW5fY291cnNlX2l0ZW1fcHJpY2UuaW5uZXJIVE1MID0gJ1ByaWNlOiA0MCQnO1xyXG5cclxuICAgICAgICAgICAgbWFpbl9jb3Vyc2VfaXRlbS5hcHBlbmRDaGlsZChtYWluX2NvdXJzZV9pdGVtX25hbWUpO1xyXG4gICAgICAgICAgICBtYWluX2NvdXJzZV9pdGVtLmFwcGVuZENoaWxkKG1haW5fY291cnNlX2l0ZW1fcmVjZXBpZSk7XHJcbiAgICAgICAgICAgIG1haW5fY291cnNlX2l0ZW0uYXBwZW5kQ2hpbGQobWFpbl9jb3Vyc2VfaXRlbV9wcmljZSk7XHJcbiAgICAgICAgICAgIG1haW5fY291cnNlLmFwcGVuZENoaWxkKG1haW5fY291cnNlX2l0ZW0pICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoaSA9PSA1KSB7XHJcbiAgICAgICAgICAgIC8vIU1haW4gY291cnNlXHJcbiAgICAgICAgICAgIGNvbnN0IG1haW5fY291cnNlX2l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgbWFpbl9jb3Vyc2VfaXRlbS5jbGFzc05hbWUgPSBcIml0ZW1cIjtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG1haW5fY291cnNlX2l0ZW1fbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBtYWluX2NvdXJzZV9pdGVtX25hbWUuY2xhc3NOYW1lID0gJ25hbWUnO1xyXG4gICAgICAgICAgICBtYWluX2NvdXJzZV9pdGVtX25hbWUuaW5uZXJIVE1MID0gJ1NocmltcCBTY2FtcGknO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbWFpbl9jb3Vyc2VfaXRlbV9yZWNlcGllID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICBtYWluX2NvdXJzZV9pdGVtX3JlY2VwaWUuY2xhc3NOYW1lID0gJ3JlY2VwaWUnO1xyXG4gICAgICAgICAgICBtYWluX2NvdXJzZV9pdGVtX3JlY2VwaWUuaW5uZXJIVE1MID0gJ0RpdmUgaW50byBhIGNsYXNzaWMgSXRhbGlhbiBmYXZvcml0ZSBmZWF0dXJpbmcgcGx1bXAgc2hyaW1wIHNhdXTDqWVkIGluIGEgZ2FybGljLWluZnVzZWQgYnV0dGVyIHNhdWNlLCBzZXJ2ZWQgb3ZlciBhIGJlZCBvZiBsaW5ndWluZSBhbmQgZ2FybmlzaGVkIHdpdGggZnJlc2ggcGFyc2xleS4nXHJcblxyXG4gICAgICAgICAgICBjb25zdCBtYWluX2NvdXJzZV9pdGVtX3ByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICBtYWluX2NvdXJzZV9pdGVtX3ByaWNlLmNsYXNzTmFtZSA9ICdwcmljZSc7XHJcbiAgICAgICAgICAgIG1haW5fY291cnNlX2l0ZW1fcHJpY2UuaW5uZXJIVE1MID0gJ1ByaWNlOiAyMCQnO1xyXG5cclxuICAgICAgICAgICAgbWFpbl9jb3Vyc2VfaXRlbS5hcHBlbmRDaGlsZChtYWluX2NvdXJzZV9pdGVtX25hbWUpO1xyXG4gICAgICAgICAgICBtYWluX2NvdXJzZV9pdGVtLmFwcGVuZENoaWxkKG1haW5fY291cnNlX2l0ZW1fcmVjZXBpZSk7XHJcbiAgICAgICAgICAgIG1haW5fY291cnNlX2l0ZW0uYXBwZW5kQ2hpbGQobWFpbl9jb3Vyc2VfaXRlbV9wcmljZSk7XHJcbiAgICAgICAgICAgIG1haW5fY291cnNlLmFwcGVuZENoaWxkKG1haW5fY291cnNlX2l0ZW0pICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBiYWNrZ3JvdW5kLmFwcGVuZENoaWxkKG1haW5fY291cnNlKVxyXG4gICAgYmFja2dyb3VuZC5hcHBlbmRDaGlsZChkcmlua3MpXHJcbiAgICBiYWNrZ3JvdW5kLmFwcGVuZENoaWxkKGRlc3NlcnQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lbnUiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBhYm91dCBmcm9tICcuL2Fib3V0JztcclxuaW1wb3J0IGhvbWUgZnJvbSAnLi9ob21lJztcclxuaW1wb3J0IG1lbnUgZnJvbSAnLi9tZW51JztcclxuXHJcbmhvbWUoKVxyXG5cclxubGV0IGFib3V0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFib3V0X3NlY3Rpb24nKTtcclxuYWJvdXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhYm91dCk7XHJcblxyXG5sZXQgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lX3NlY3Rpb24nKTtcclxuaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhvbWUpO1xyXG5cclxubGV0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudV9zZWN0aW9uJyk7XHJcbm1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtZW51KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9