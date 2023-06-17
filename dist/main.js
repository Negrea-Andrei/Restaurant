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
    font-size: minmax(1rem, 2rem);
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
    font-size: clamp(0.73rem, 1.2vw, 3rem);
}`, "",{"version":3,"sources":["webpack://./src/about.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,aAAa;IACb,qCAAqC;IACrC,kCAAkC;IAClC,QAAQ;IACR,wBAAwB;AAC5B;;AAEA;;IAEI,WAAW;IACX,YAAY;IACZ,yDAA8C;IAC9C,sBAAsB;IACtB,4BAA4B;IAC5B,2BAA2B;IAC3B,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,yDAA+C;AACnD;;AAEA;;IAEI,YAAY;IACZ,6BAA6B;IAC7B,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,kBAAkB;IAClB,0BAA0B;IAC1B,2BAA2B;IAC3B,mBAAmB;AACvB;;AAEA;IACI,sCAAsC;AAC1C","sourcesContent":[".content {\r\n    height: 100%;\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n    grid-template-rows: repeat(2, 1fr);\r\n    gap: 5px;\r\n    padding: 5px 0px 0px 0px;\r\n}\r\n\r\n.image1,\r\n.image2 {\r\n    width: 100%;\r\n    height: 100%;\r\n    background-image: url(./images/Restaurant.jpg);\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.image2 {\r\n    background-image: url(./images/main-course.jpg);\r\n}\r\n\r\n.about,\r\n.hours {\r\n    height: 100%;\r\n    font-size: minmax(1rem, 2rem);\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    text-align: center;\r\n    padding: 0px 20px 0px 20px;\r\n    background-color: #aebef1a9;\r\n    border-radius: 10px;\r\n}\r\n\r\nspan {\r\n    font-size: clamp(0.73rem, 1.2vw, 3rem);\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/contact.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/contact.css ***!
  \***************************************************************/
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../src/images/chef.jpg */ "./src/images/chef.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.content {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.contact {
    padding: 25px 0px 25px 0px;
    height: 100%;
    width: 75%;    
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 25px;
}

.picture {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 15px;
}

.info {
    border: #1e40af solid 3px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
}

.contact_p {
    font-size: clamp(1rem, 1.5vw, 2rem);
}

.contact_header {
    font-size: clamp(1rem, 4vw, 3rem);
}`, "",{"version":3,"sources":["webpack://./src/contact.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,0BAA0B;IAC1B,YAAY;IACZ,UAAU;IACV,aAAa;IACb,8BAA8B;IAC9B,uBAAuB;IACvB,SAAS;AACb;;AAEA;IACI,yDAA6C;IAC7C,sBAAsB;IACtB,2BAA2B;IAC3B,4BAA4B;IAC5B,mBAAmB;AACvB;;AAEA;IACI,yBAAyB;IACzB,mBAAmB;IACnB,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,iCAAiC;AACrC","sourcesContent":[".content {\r\n    height: 100%;\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.contact {\r\n    padding: 25px 0px 25px 0px;\r\n    height: 100%;\r\n    width: 75%;    \r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    grid-template-rows: 1fr;\r\n    gap: 25px;\r\n}\r\n\r\n.picture {\r\n    background-image: url(../src/images/chef.jpg);\r\n    background-size: cover;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    border-radius: 15px;\r\n}\r\n\r\n.info {\r\n    border: #1e40af solid 3px;\r\n    border-radius: 15px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    text-align: center;\r\n}\r\n\r\n.contact_p {\r\n    font-size: clamp(1rem, 1.5vw, 2rem);\r\n}\r\n\r\n.contact_header {\r\n    font-size: clamp(1rem, 4vw, 3rem);\r\n}"],"sourceRoot":""}]);
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
    height: max-content;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.main-course, .dessert, .drinks {
    width: 75%;
    border-radius: 7px;
    background-position: center;
    background-repeat: repeat;
    background-size: cover;
    margin-bottom: 7px;
    margin-top: 7px;
}

.dessert, .drinks {
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
    font-size: clamp(0.5rem, 1.8vw, 1.5rem);    
}

.item > .price {
    color: rgb(41, 139, 41);
    background-color: gold;
    font-size: clamp(0.5rem, 1.8vw, 3rem); 
}`, "",{"version":3,"sources":["webpack://./src/menu.css"],"names":[],"mappings":"AAAA;IACI,mBAAmB;IACnB,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,UAAU;IACV,kBAAkB;IAClB,2BAA2B;IAC3B,yBAAyB;IACzB,sBAAsB;IACtB,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,kCAAkC;IAClC,SAAS;IACT,aAAa;IACb,yDAAoD;AACxD;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,kCAAkC;IAClC,SAAS;IACT,aAAa;IACb,yDAAgD;AACpD;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,kCAAkC;IAClC,SAAS;IACT,aAAa;IACb,yDAAiD;AACrD;;AAEA;IACI,yCAAyC;IACzC,8BAA8B;IAC9B,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,kBAAkB;IAClB,cAAc;IACd,iCAAiC;IACjC,gBAAgB;AACpB;;AAEA;IACI,mDAAmD;IACnD,2BAA2B;AAC/B;;AAEA;IACI,gBAAgB;IAChB,2BAA2B;IAC3B,qCAAqC;IACrC,uCAAuC;AAC3C;;AAEA;IACI,uBAAuB;IACvB,sBAAsB;IACtB,qCAAqC;AACzC","sourcesContent":[".content {\r\n    height: max-content;\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.main-course, .dessert, .drinks {\r\n    width: 75%;\r\n    border-radius: 7px;\r\n    background-position: center;\r\n    background-repeat: repeat;\r\n    background-size: cover;\r\n    margin-bottom: 7px;\r\n    margin-top: 7px;\r\n}\r\n\r\n.dessert, .drinks {\r\n    width: 75%;\r\n}\r\n\r\n.main-course {\r\n    display: grid;\r\n    grid-template-columns: repeat(3, 1fr);\r\n    grid-template-rows: repeat(2, 1fr);\r\n    gap: 15px;\r\n    padding: 15px;\r\n    background-image: url(../src/images/main-course.jpg);\r\n}\r\n\r\n.drinks {\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n    grid-template-rows: repeat(2, 1fr);\r\n    gap: 15px;\r\n    padding: 15px;\r\n    background-image: url(../src/images/drinks.jpeg);\r\n}\r\n\r\n.dessert {\r\n    display: grid;\r\n    grid-template-columns: repeat(3, 1fr);\r\n    grid-template-rows: repeat(2, 1fr);\r\n    gap: 15px;\r\n    padding: 15px;\r\n    background-image: url(../src/images/desserts.jpg);\r\n}\r\n\r\n.item {\r\n    backdrop-filter: blur(10px) saturate(75%);\r\n    border: 3px solid rgb(0, 0, 0);\r\n    padding-top: 15px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    text-align: center;\r\n    color: #15a9ff;\r\n    font-size: clamp(1rem, 3vw, 2rem);\r\n    font-weight: 600;\r\n}\r\n\r\n.item > .name {\r\n    text-shadow: 0px 0px 0px rgba(255, 255, 255, 0.685);\r\n    background-color: #00000091;\r\n}\r\n\r\n.item > .recepie {\r\n    color: #232ec4e1;\r\n    background-color: #dbeafe60;\r\n    text-shadow: 0px 0px 1px rgb(0, 0, 0);\r\n    font-size: clamp(0.5rem, 1.8vw, 1.5rem);    \r\n}\r\n\r\n.item > .price {\r\n    color: rgb(41, 139, 41);\r\n    background-color: gold;\r\n    font-size: clamp(0.5rem, 1.8vw, 3rem); \r\n}"],"sourceRoot":""}]);
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

/***/ "./src/contact.css":
/*!*************************!*\
  !*** ./src/contact.css ***!
  \*************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_contact_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./contact.css */ "./node_modules/css-loader/dist/cjs.js!./src/contact.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_contact_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_contact_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_contact_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_contact_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _contact_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact.css */ "./src/contact.css");


function contact() {
    const background = document.querySelector('.content');
    background.style.display = 'flex'
    background.innerHTML = '';
    background.style.background = 'unset';
    background.style.height = '100%';

    const container = document.createElement('div');
    container.className = "contact";

    const picture = document.createElement('div');
    picture.className = 'picture';    

    const info = document.createElement('div');
    info.className = 'info';

    const header_contact = document.createElement('h1');
    header_contact.className = 'contact_header';
    header_contact.innerHTML = 'Please contact us at:'

    const p_contact = document.createElement('p');
    p_contact.className = 'contact_p';
    p_contact.innerHTML = "<b>Restaurant Name</b>: Odin's Seafood Restaurant<br> <b>Address</b>: 123 Main Street, City, State, ZIP Code<br> <b>Phone</b>: +1 (555) 123-4567 (not a real phone)<br> <b>Email</b>: info@odinsseafood.com (not a real email)<br> <b>Website</b>: www.odinsseafood.com (not a real website)<br>"

    info.appendChild(header_contact);
    info.appendChild(p_contact);
    container.appendChild(picture);
    container.appendChild(info)
    background.appendChild(container);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);

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

/***/ "./src/images/chef.jpg":
/*!*****************************!*\
  !*** ./src/images/chef.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ba673d1052faac3e89e4.jpg";

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
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/contact.js");





(0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])()

let aboutButton = document.querySelector('.about_section');
aboutButton.addEventListener('click', _about__WEBPACK_IMPORTED_MODULE_0__["default"]);

let homeButton = document.querySelector('.home_section');
homeButton.addEventListener('click', _home__WEBPACK_IMPORTED_MODULE_1__["default"]);

let menuButton = document.querySelector('.menu_section');
menuButton.addEventListener('click', _menu__WEBPACK_IMPORTED_MODULE_2__["default"]);

let contactButton = document.querySelector('.contact_section');
contactButton.addEventListener('click', _contact__WEBPACK_IMPORTED_MODULE_3__["default"]);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDJIQUEwQztBQUN0Riw0Q0FBNEMsNkhBQTJDO0FBQ3ZGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsbUNBQW1DO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG1DQUFtQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLG9DQUFvQyxxQkFBcUIsc0JBQXNCLDhDQUE4QywyQ0FBMkMsaUJBQWlCLGlDQUFpQyxLQUFLLDZCQUE2QixvQkFBb0IscUJBQXFCLHVEQUF1RCwrQkFBK0IscUNBQXFDLG9DQUFvQyxzQkFBc0IsK0JBQStCLGdDQUFnQyw0QkFBNEIsS0FBSyxpQkFBaUIsd0RBQXdELEtBQUssMkJBQTJCLHFCQUFxQixzQ0FBc0Msc0JBQXNCLCtCQUErQiw0QkFBNEIsZ0NBQWdDLDJCQUEyQixtQ0FBbUMsb0NBQW9DLDRCQUE0QixLQUFLLGNBQWMsK0NBQStDLEtBQUssbUJBQW1CO0FBQ2hnRDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RHZDO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLG9IQUF5QztBQUNyRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG1DQUFtQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sa0ZBQWtGLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLG9DQUFvQyxxQkFBcUIsb0JBQW9CLHNCQUFzQiwrQkFBK0IsZ0NBQWdDLDRCQUE0QixLQUFLLGtCQUFrQixtQ0FBbUMscUJBQXFCLHVCQUF1QixzQkFBc0IsdUNBQXVDLGdDQUFnQyxrQkFBa0IsS0FBSyxrQkFBa0Isc0RBQXNELCtCQUErQixvQ0FBb0MscUNBQXFDLDRCQUE0QixLQUFLLGVBQWUsa0NBQWtDLDRCQUE0QixzQkFBc0IsK0JBQStCLGdDQUFnQywyQkFBMkIsS0FBSyxvQkFBb0IsNENBQTRDLEtBQUsseUJBQXlCLDBDQUEwQyxLQUFLLG1CQUFtQjtBQUNyNUM7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcER2QztBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0QyxpSEFBcUM7QUFDakYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixtQ0FBbUM7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLCtFQUErRSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLG9DQUFvQyxxQkFBcUIseURBQXlELHNCQUFzQiwrQkFBK0IsZ0NBQWdDLDRCQUE0QixLQUFLLGtCQUFrQixzQkFBc0IsK0JBQStCLGdDQUFnQyw0QkFBNEIsMkJBQTJCLG9CQUFvQixtQkFBbUIsdUJBQXVCLG9DQUFvQyx1Q0FBdUMsMENBQTBDLEtBQUssbUJBQW1CO0FBQzczQjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQnZDO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLGtJQUFnRDtBQUM1Riw0Q0FBNEMsMEhBQTRDO0FBQ3hGLDRDQUE0Qyw0SEFBNkM7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsbUNBQW1DO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsbUNBQW1DO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsbUNBQW1DO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLCtFQUErRSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxvQ0FBb0MsNEJBQTRCLG9CQUFvQixzQkFBc0IsK0JBQStCLGdDQUFnQyw0QkFBNEIsS0FBSyx5Q0FBeUMsbUJBQW1CLDJCQUEyQixvQ0FBb0Msa0NBQWtDLCtCQUErQiwyQkFBMkIsd0JBQXdCLEtBQUssMkJBQTJCLG1CQUFtQixLQUFLLHNCQUFzQixzQkFBc0IsOENBQThDLDJDQUEyQyxrQkFBa0Isc0JBQXNCLDZEQUE2RCxLQUFLLGlCQUFpQixzQkFBc0IsOENBQThDLDJDQUEyQyxrQkFBa0Isc0JBQXNCLHlEQUF5RCxLQUFLLGtCQUFrQixzQkFBc0IsOENBQThDLDJDQUEyQyxrQkFBa0Isc0JBQXNCLDBEQUEwRCxLQUFLLGVBQWUsa0RBQWtELHVDQUF1QywwQkFBMEIsc0JBQXNCLCtCQUErQiw0QkFBNEIsMkJBQTJCLHVCQUF1QiwwQ0FBMEMseUJBQXlCLEtBQUssdUJBQXVCLDREQUE0RCxvQ0FBb0MsS0FBSywwQkFBMEIseUJBQXlCLG9DQUFvQyw4Q0FBOEMsb0RBQW9ELEtBQUssd0JBQXdCLGdDQUFnQywrQkFBK0IsK0NBQStDLEtBQUssbUJBQW1CO0FBQ3B2RjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQzdGMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDekJhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksc0ZBQU8sVUFBVSxzRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QjdFLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQXFHO0FBQ3JHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsd0ZBQU87Ozs7QUFJK0M7QUFDdkUsT0FBTyxpRUFBZSx3RkFBTyxJQUFJLHdGQUFPLFVBQVUsd0ZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekI3RSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFrRztBQUNsRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHFGQUFPOzs7O0FBSTRDO0FBQ3BFLE9BQU8saUVBQWUscUZBQU8sSUFBSSxxRkFBTyxVQUFVLHFGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCN0UsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBa0c7QUFDbEc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxxRkFBTzs7OztBQUk0QztBQUNwRSxPQUFPLGlFQUFlLHFGQUFPLElBQUkscUZBQU8sVUFBVSxxRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDYm9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLEtBQUs7Ozs7Ozs7Ozs7Ozs7OztBQ3hDRztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsT0FBTzs7Ozs7Ozs7Ozs7Ozs7O0FDakNGO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLElBQUk7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ25UZjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7QUNBNEI7QUFDRjtBQUNBO0FBQ007QUFDaEM7QUFDQSxpREFBSTtBQUNKO0FBQ0E7QUFDQSxzQ0FBc0MsOENBQUs7QUFDM0M7QUFDQTtBQUNBLHFDQUFxQyw2Q0FBSTtBQUN6QztBQUNBO0FBQ0EscUNBQXFDLDZDQUFJO0FBQ3pDO0FBQ0E7QUFDQSx3Q0FBd0MsZ0RBQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2Fib3V0LmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2NvbnRhY3QuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaG9tZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9tZW51LmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9hYm91dC5jc3M/NDg0OCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2NvbnRhY3QuY3NzPzMxM2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9ob21lLmNzcz83ZjljIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbWVudS5jc3M/MTEwYiIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9SZXN0YXVyYW50LmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL21haW4tY291cnNlLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5jb250ZW50IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcclxuICAgIGdhcDogNXB4O1xyXG4gICAgcGFkZGluZzogNXB4IDBweCAwcHggMHB4O1xyXG59XHJcblxyXG4uaW1hZ2UxLFxyXG4uaW1hZ2UyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmltYWdlMiB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XHJcbn1cclxuXHJcbi5hYm91dCxcclxuLmhvdXJzIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogbWlubWF4KDFyZW0sIDJyZW0pO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwcHggMjBweCAwcHggMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhZWJlZjFhOTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbnNwYW4ge1xyXG4gICAgZm9udC1zaXplOiBjbGFtcCgwLjczcmVtLCAxLjJ2dywgM3JlbSk7XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hYm91dC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxrQ0FBa0M7SUFDbEMsUUFBUTtJQUNSLHdCQUF3QjtBQUM1Qjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHlEQUE4QztJQUM5QyxzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx5REFBK0M7QUFDbkQ7O0FBRUE7O0lBRUksWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQiwyQkFBMkI7SUFDM0IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksc0NBQXNDO0FBQzFDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jb250ZW50IHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xcclxcbiAgICBnYXA6IDVweDtcXHJcXG4gICAgcGFkZGluZzogNXB4IDBweCAwcHggMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW1hZ2UxLFxcclxcbi5pbWFnZTIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWFnZXMvUmVzdGF1cmFudC5qcGcpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1hZ2UyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1hZ2VzL21haW4tY291cnNlLmpwZyk7XFxyXFxufVxcclxcblxcclxcbi5hYm91dCxcXHJcXG4uaG91cnMge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGZvbnQtc2l6ZTogbWlubWF4KDFyZW0sIDJyZW0pO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAwcHggMjBweCAwcHggMjBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FlYmVmMWE5O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5zcGFuIHtcXHJcXG4gICAgZm9udC1zaXplOiBjbGFtcCgwLjczcmVtLCAxLjJ2dywgM3JlbSk7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vc3JjL2ltYWdlcy9jaGVmLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbnRhY3Qge1xyXG4gICAgcGFkZGluZzogMjVweCAwcHggMjVweCAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogNzUlOyAgICBcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcclxuICAgIGdhcDogMjVweDtcclxufVxyXG5cclxuLnBpY3R1cmUge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcblxyXG4uaW5mbyB7XHJcbiAgICBib3JkZXI6ICMxZTQwYWYgc29saWQgM3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb250YWN0X3Age1xyXG4gICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAxLjV2dywgMnJlbSk7XHJcbn1cclxuXHJcbi5jb250YWN0X2hlYWRlciB7XHJcbiAgICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDR2dywgM3JlbSk7XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb250YWN0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLFlBQVk7SUFDWixVQUFVO0lBQ1YsYUFBYTtJQUNiLDhCQUE4QjtJQUM5Qix1QkFBdUI7SUFDdkIsU0FBUztBQUNiOztBQUVBO0lBQ0kseURBQTZDO0lBQzdDLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jb250ZW50IHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0IHtcXHJcXG4gICAgcGFkZGluZzogMjVweCAwcHggMjVweCAwcHg7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDc1JTsgICAgXFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxyXFxuICAgIGdhcDogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBpY3R1cmUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vc3JjL2ltYWdlcy9jaGVmLmpwZyk7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmluZm8ge1xcclxcbiAgICBib3JkZXI6ICMxZTQwYWYgc29saWQgM3B4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdF9wIHtcXHJcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAxLjV2dywgMnJlbSk7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0X2hlYWRlciB7XFxyXFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgNHZ3LCAzcmVtKTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9ob21lLmpwZWdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5jb250ZW50IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBjZW50ZXIvY292ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLndlbGNvbWUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDQwJTtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBjb2xvcjogI2YzZjNmMztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZGFkZDQ4NjtcclxuICAgIHRleHQtc2hhZG93OiAwcHggMXB4IDNweCBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgNnZ3LCA0cmVtKTtcclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2hvbWUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksWUFBWTtJQUNaLGdFQUFnRDtJQUNoRCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsY0FBYztJQUNkLDJCQUEyQjtJQUMzQiw4QkFBOEI7SUFDOUIsaUNBQWlDO0FBQ3JDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jb250ZW50IHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi9pbWFnZXMvaG9tZS5qcGVnKSBjZW50ZXIvY292ZXI7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ud2VsY29tZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGhlaWdodDogNDAlO1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbiAgICBjb2xvcjogI2YzZjNmMztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJkYWRkNDg2O1xcclxcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDFweCAzcHggYmxhY2s7XFxyXFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgNnZ3LCA0cmVtKTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9zcmMvaW1hZ2VzL21haW4tY291cnNlLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL3NyYy9pbWFnZXMvZHJpbmtzLmpwZWdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9zcmMvaW1hZ2VzL2Rlc3NlcnRzLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm1haW4tY291cnNlLCAuZGVzc2VydCwgLmRyaW5rcyB7XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA3cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA3cHg7XHJcbn1cclxuXHJcbi5kZXNzZXJ0LCAuZHJpbmtzIHtcclxuICAgIHdpZHRoOiA3NSU7XHJcbn1cclxuXHJcbi5tYWluLWNvdXJzZSB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDFmcik7XHJcbiAgICBnYXA6IDE1cHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xyXG59XHJcblxyXG4uZHJpbmtzIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcclxuICAgIGdhcDogMTVweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XHJcbn1cclxuXHJcbi5kZXNzZXJ0IHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcclxuICAgIGdhcDogMTVweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XHJcbn1cclxuXHJcbi5pdGVtIHtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KSBzYXR1cmF0ZSg3NSUpO1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgcmdiKDAsIDAsIDApO1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzE1YTlmZjtcclxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgM3Z3LCAycmVtKTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5pdGVtID4gLm5hbWUge1xyXG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42ODUpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDkxO1xyXG59XHJcblxyXG4uaXRlbSA+IC5yZWNlcGllIHtcclxuICAgIGNvbG9yOiAjMjMyZWM0ZTE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGJlYWZlNjA7XHJcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCAxcHggcmdiKDAsIDAsIDApO1xyXG4gICAgZm9udC1zaXplOiBjbGFtcCgwLjVyZW0sIDEuOHZ3LCAxLjVyZW0pOyAgICBcclxufVxyXG5cclxuLml0ZW0gPiAucHJpY2Uge1xyXG4gICAgY29sb3I6IHJnYig0MSwgMTM5LCA0MSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkO1xyXG4gICAgZm9udC1zaXplOiBjbGFtcCgwLjVyZW0sIDEuOHZ3LCAzcmVtKTsgXHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9tZW51LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtJQUNsQiwyQkFBMkI7SUFDM0IseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsa0NBQWtDO0lBQ2xDLFNBQVM7SUFDVCxhQUFhO0lBQ2IseURBQW9EO0FBQ3hEOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxrQ0FBa0M7SUFDbEMsU0FBUztJQUNULGFBQWE7SUFDYix5REFBZ0Q7QUFDcEQ7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLGtDQUFrQztJQUNsQyxTQUFTO0lBQ1QsYUFBYTtJQUNiLHlEQUFpRDtBQUNyRDs7QUFFQTtJQUNJLHlDQUF5QztJQUN6Qyw4QkFBOEI7SUFDOUIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsaUNBQWlDO0lBQ2pDLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG1EQUFtRDtJQUNuRCwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsMkJBQTJCO0lBQzNCLHFDQUFxQztJQUNyQyx1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLHFDQUFxQztBQUN6Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY29udGVudCB7XFxyXFxuICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tY291cnNlLCAuZGVzc2VydCwgLmRyaW5rcyB7XFxyXFxuICAgIHdpZHRoOiA3NSU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA3cHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDdweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc3NlcnQsIC5kcmlua3Mge1xcclxcbiAgICB3aWR0aDogNzUlO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1jb3Vyc2Uge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xcclxcbiAgICBnYXA6IDE1cHg7XFxyXFxuICAgIHBhZGRpbmc6IDE1cHg7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9zcmMvaW1hZ2VzL21haW4tY291cnNlLmpwZyk7XFxyXFxufVxcclxcblxcclxcbi5kcmlua3Mge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xcclxcbiAgICBnYXA6IDE1cHg7XFxyXFxuICAgIHBhZGRpbmc6IDE1cHg7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9zcmMvaW1hZ2VzL2RyaW5rcy5qcGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc3NlcnQge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xcclxcbiAgICBnYXA6IDE1cHg7XFxyXFxuICAgIHBhZGRpbmc6IDE1cHg7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9zcmMvaW1hZ2VzL2Rlc3NlcnRzLmpwZyk7XFxyXFxufVxcclxcblxcclxcbi5pdGVtIHtcXHJcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpIHNhdHVyYXRlKDc1JSk7XFxyXFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHJnYigwLCAwLCAwKTtcXHJcXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6ICMxNWE5ZmY7XFxyXFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgM3Z3LCAycmVtKTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0gPiAubmFtZSB7XFxyXFxuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjg1KTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDkxO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbSA+IC5yZWNlcGllIHtcXHJcXG4gICAgY29sb3I6ICMyMzJlYzRlMTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RiZWFmZTYwO1xcclxcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCAxcHggcmdiKDAsIDAsIDApO1xcclxcbiAgICBmb250LXNpemU6IGNsYW1wKDAuNXJlbSwgMS44dncsIDEuNXJlbSk7ICAgIFxcclxcbn1cXHJcXG5cXHJcXG4uaXRlbSA+IC5wcmljZSB7XFxyXFxuICAgIGNvbG9yOiByZ2IoNDEsIDEzOSwgNDEpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkO1xcclxcbiAgICBmb250LXNpemU6IGNsYW1wKDAuNXJlbSwgMS44dncsIDNyZW0pOyBcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Fib3V0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYWJvdXQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbnRhY3QuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb250YWN0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ob21lLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaG9tZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWVudS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21lbnUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vYWJvdXQuY3NzJ1xyXG5cclxuZnVuY3Rpb24gYWJvdXQoKSB7XHJcbiAgICBjb25zdCBiYWNrZ3JvdW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcclxuICAgIGJhY2tncm91bmQuc3R5bGUuZGlzcGxheSA9ICdncmlkJ1xyXG4gICAgYmFja2dyb3VuZC5pbm5lckhUTUwgPSAnJztcclxuICAgIGJhY2tncm91bmQuc3R5bGUuYmFja2dyb3VuZCA9ICd1bnNldCc7XHJcbiAgICBiYWNrZ3JvdW5kLnN0eWxlLmhlaWdodCA9ICcxMDAlJztcclxuICAgIGxldCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYWJvdXQuY2xhc3NOYW1lID0gJ2Fib3V0JztcclxuICAgIGxldCBoZWFkZXJfYWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgaGVhZGVyX2Fib3V0LmlubmVySFRNTCA9ICdBYm91dCB1cyc7XHJcbiAgICBsZXQgYWJvdXRfZGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIGFib3V0X2RldGFpbHMuaW5uZXJIVE1MID0gXCJXZWxjb21lIHRvIE9kaW4ncyBTZWFmb29kIFJlc3RhdXJhbnQsIHdoZXJlIGN1bGluYXJ5IGV4Y2VsbGVuY2UgYW5kIG9jZWFuaWMgZGVsaWdodHMgY29udmVyZ2UgdG8gY3JlYXRlIGFuIHVuZm9yZ2V0dGFibGUgZGluaW5nIGV4cGVyaWVuY2UuIExvY2F0ZWQgaW4gdGhlIGhlYXJ0IG9mIGNpdHksIE9kaW4ncyBlbWJyYWNlcyB0aGUgc3Bpcml0IG9mIHRoZSBzZWEsIG9mZmVyaW5nIGEgaGF2ZW4gZm9yIHNlYWZvb2QgZW50aHVzaWFzdHMgYW5kIGdhc3Ryb25vbWVzIGFsaWtlLiBTdGVwIGludG8gdGhlIGVsZWdhbnQgYW1iaWFuY2Ugb2YgT2RpbidzIGFuZCBiZSB0cmFuc3BvcnRlZCB0byBhIG1hcml0aW1lIG9hc2lzLiBUaGUgcmVzdGF1cmFudCdzIGRlY29yIHRhc3RlZnVsbHkgYmxlbmRzIG5hdXRpY2FsIGVsZW1lbnRzIHdpdGggYSBjb250ZW1wb3JhcnkgdG91Y2gsIGZlYXR1cmluZyBodWVzIG9mIGJsdWUgcmVtaW5pc2NlbnQgb2YgdGhlIG9jZWFuIGFuZCBpbnRyaWNhdGUgc2Vhc2hlbGwgLSBpbnNwaXJlZCBwYXR0ZXJucy5Tb2Z0IGxpZ2h0aW5nIGNyZWF0ZXMgYW4gaW50aW1hdGUgYXRtb3NwaGVyZSwgcGVyZmVjdCBmb3IgYSByb21hbnRpYyBkaW5uZXIgb3IgYSBnYXRoZXJpbmcgd2l0aCBmcmllbmRzIGFuZCBmYW1pbHkuXCJcclxuICAgIGFib3V0LmFwcGVuZENoaWxkKGhlYWRlcl9hYm91dCk7XHJcbiAgICBhYm91dC5hcHBlbmRDaGlsZChhYm91dF9kZXRhaWxzKTtcclxuXHJcbiAgICBsZXQgaW1hZ2UxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBpbWFnZTEuY2xhc3NOYW1lID0gJ2ltYWdlMSc7XHJcblxyXG4gICAgbGV0IGltYWdlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaW1hZ2UyLmNsYXNzTmFtZSA9ICdpbWFnZTInO1xyXG5cclxuICAgIGxldCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaG91cnMuY2xhc3NOYW1lID0gJ2hvdXJzJztcclxuICAgIGxldCBoZWFkZXJfaG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgaGVhZGVyX2hvdXJzLmlubmVySFRNTCA9ICdIb3Vycyc7XHJcbiAgICBsZXQgc2NoZWR1bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBzY2hlZHVsZS5pbm5lckhUTUwgPSBcIk1vbmRheTogNTowMCBQTSAtIDEwOjAwIFBNPGJyPiBUdWVzZGF5OiA1OjAwIFBNIC0gMTA6MDAgUE08YnI+IFdlZG5lc2RheTogNTowMCBQTSAtIDEwOjAwIFBNPGJyPiBUaHVyc2RheTogNTowMCBQTSAtIDEwOjAwIFBNPGJyPiBGcmlkYXk6IDU6MDAgUE0gLSAxMTowMCBQTTxicj4gU2F0dXJkYXk6IDEyOjAwIFBNIC0gMTE6MDAgUE08YnI+IFN1bmRheTogMTI6MDAgUE0gLSAxMDowMCBQTTxicj4gPGJyPiBQbGVhc2Ugbm90ZSB0aGF0IHRoZXNlIGhvdXJzIGFyZSBzdWJqZWN0IHRvIGNoYW5nZSwgYW5kIGl0J3MgYWx3YXlzIGEgZ29vZCBpZGVhIHRvIGNvbnRhY3QgdGhlIHJlc3RhdXJhbnQgZGlyZWN0bHkgb3IgdmlzaXQgdGhlaXIgd2Vic2l0ZSBmb3IgdGhlIG1vc3QgdXAtdG8tZGF0ZSBpbmZvcm1hdGlvbi5cIjtcclxuICAgIGhvdXJzLmFwcGVuZENoaWxkKGhlYWRlcl9ob3Vycyk7XHJcbiAgICBob3Vycy5hcHBlbmRDaGlsZChzY2hlZHVsZSk7XHJcbiAgICBcclxuICAgIFxyXG5cclxuICAgIGJhY2tncm91bmQuYXBwZW5kQ2hpbGQoYWJvdXQpO1xyXG4gICAgYmFja2dyb3VuZC5hcHBlbmRDaGlsZChpbWFnZTEpO1xyXG4gICAgYmFja2dyb3VuZC5hcHBlbmRDaGlsZChpbWFnZTIpO1xyXG4gICAgYmFja2dyb3VuZC5hcHBlbmRDaGlsZChob3Vycyk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFib3V0OyIsImltcG9ydCAnLi9jb250YWN0LmNzcyc7XHJcblxyXG5mdW5jdGlvbiBjb250YWN0KCkge1xyXG4gICAgY29uc3QgYmFja2dyb3VuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XHJcbiAgICBiYWNrZ3JvdW5kLnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcclxuICAgIGJhY2tncm91bmQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBiYWNrZ3JvdW5kLnN0eWxlLmJhY2tncm91bmQgPSAndW5zZXQnO1xyXG4gICAgYmFja2dyb3VuZC5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XHJcblxyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250YWluZXIuY2xhc3NOYW1lID0gXCJjb250YWN0XCI7XHJcblxyXG4gICAgY29uc3QgcGljdHVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcGljdHVyZS5jbGFzc05hbWUgPSAncGljdHVyZSc7ICAgIFxyXG5cclxuICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGluZm8uY2xhc3NOYW1lID0gJ2luZm8nO1xyXG5cclxuICAgIGNvbnN0IGhlYWRlcl9jb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgIGhlYWRlcl9jb250YWN0LmNsYXNzTmFtZSA9ICdjb250YWN0X2hlYWRlcic7XHJcbiAgICBoZWFkZXJfY29udGFjdC5pbm5lckhUTUwgPSAnUGxlYXNlIGNvbnRhY3QgdXMgYXQ6J1xyXG5cclxuICAgIGNvbnN0IHBfY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHBfY29udGFjdC5jbGFzc05hbWUgPSAnY29udGFjdF9wJztcclxuICAgIHBfY29udGFjdC5pbm5lckhUTUwgPSBcIjxiPlJlc3RhdXJhbnQgTmFtZTwvYj46IE9kaW4ncyBTZWFmb29kIFJlc3RhdXJhbnQ8YnI+IDxiPkFkZHJlc3M8L2I+OiAxMjMgTWFpbiBTdHJlZXQsIENpdHksIFN0YXRlLCBaSVAgQ29kZTxicj4gPGI+UGhvbmU8L2I+OiArMSAoNTU1KSAxMjMtNDU2NyAobm90IGEgcmVhbCBwaG9uZSk8YnI+IDxiPkVtYWlsPC9iPjogaW5mb0BvZGluc3NlYWZvb2QuY29tIChub3QgYSByZWFsIGVtYWlsKTxicj4gPGI+V2Vic2l0ZTwvYj46IHd3dy5vZGluc3NlYWZvb2QuY29tIChub3QgYSByZWFsIHdlYnNpdGUpPGJyPlwiXHJcblxyXG4gICAgaW5mby5hcHBlbmRDaGlsZChoZWFkZXJfY29udGFjdCk7XHJcbiAgICBpbmZvLmFwcGVuZENoaWxkKHBfY29udGFjdCk7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocGljdHVyZSk7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5mbylcclxuICAgIGJhY2tncm91bmQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29udGFjdDsiLCJpbXBvcnQgJy4vaG9tZS5jc3MnO1xyXG5cclxuZnVuY3Rpb24gaG9tZSgpIHsgICAgXHJcbiAgICBjb25zdCBiYWNrZ3JvdW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTsgICAgXHJcbiAgICBiYWNrZ3JvdW5kLmlubmVySFRNTCA9ICcnO1xyXG4gICAgYmFja2dyb3VuZC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgYmFja2dyb3VuZC5zdHlsZS5iYWNrZ3JvdW5kID0gYHVybCguLi9zcmMvaW1hZ2VzL2hvbWUuanBlZykgY2VudGVyL2NvdmVyYDsgICAgXHJcbiAgICBiYWNrZ3JvdW5kLnN0eWxlLmhlaWdodCA9ICcxMDAlJztcclxuXHJcbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0ZXh0LmlubmVySFRNTCA9IFwiV2VsY29tZSB0byA8YnI+T2RpbidzIHNlYWZvb2QgcmVzdGF1cmFudCFcIlxyXG4gICAgdGV4dC5jbGFzc05hbWUgPSBcIndlbGNvbWVcIjtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLmFwcGVuZENoaWxkKHRleHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBob21lOyIsImltcG9ydCAnLi9tZW51LmNzcyc7XHJcblxyXG5mdW5jdGlvbiBtZW51KCkge1xyXG4gICAgY29uc3QgYmFja2dyb3VuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XHJcbiAgICBiYWNrZ3JvdW5kLnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcclxuICAgIGJhY2tncm91bmQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBiYWNrZ3JvdW5kLnN0eWxlLmJhY2tncm91bmQgPSAndW5zZXQnO1xyXG4gICAgYmFja2dyb3VuZC5zdHlsZS5oZWlnaHQgPSAnbWF4LWNvbnRlbnQnO1xyXG5cclxuICAgIGNvbnN0IG1haW5fY291cnNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtYWluX2NvdXJzZS5jbGFzc05hbWUgPSBcIm1haW4tY291cnNlXCI7XHJcblxyXG4gICAgY29uc3QgZHJpbmtzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkcmlua3MuY2xhc3NOYW1lID0gXCJkcmlua3NcIjtcclxuXHJcbiAgICBjb25zdCBkZXNzZXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkZXNzZXJ0LmNsYXNzTmFtZSA9IFwiZGVzc2VydFwiO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IDU7IGkrKykge1xyXG4gICAgICAgIGlmIChpID09IDApIHtcclxuICAgICAgICAgICAgLy8hTWFpbiBjb3Vyc2VcclxuICAgICAgICAgICAgY29uc3QgbWFpbl9jb3Vyc2VfaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBtYWluX2NvdXJzZV9pdGVtLmNsYXNzTmFtZSA9IFwiaXRlbVwiO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbWFpbl9jb3Vyc2VfaXRlbV9uYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIG1haW5fY291cnNlX2l0ZW1fbmFtZS5jbGFzc05hbWUgPSAnbmFtZSc7XHJcbiAgICAgICAgICAgIG1haW5fY291cnNlX2l0ZW1fbmFtZS5pbm5lckhUTUwgPSAnR3JpbGxlZCBDaGlsZWFuIFNlYSBCYXNzJztcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG1haW5fY291cnNlX2l0ZW1fcmVjZXBpZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgICAgbWFpbl9jb3Vyc2VfaXRlbV9yZWNlcGllLmNsYXNzTmFtZSA9ICdyZWNlcGllJztcclxuICAgICAgICAgICAgbWFpbl9jb3Vyc2VfaXRlbV9yZWNlcGllLmlubmVySFRNTCA9ICdUZW5kZXIgYW5kIGZsYWt5IENoaWxlYW4gc2VhIGJhc3MgbWFyaW5hdGVkIHdpdGggYXJvbWF0aWMgaGVyYnMsIGdyaWxsZWQgdG8gcGVyZmVjdGlvbiwgYW5kIHNlcnZlZCB3aXRoIGEgemVzdHkgY2l0cnVzIGdsYXplLidcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG1haW5fY291cnNlX2l0ZW1fcHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgIG1haW5fY291cnNlX2l0ZW1fcHJpY2UuY2xhc3NOYW1lID0gJ3ByaWNlJztcclxuICAgICAgICAgICAgbWFpbl9jb3Vyc2VfaXRlbV9wcmljZS5pbm5lckhUTUwgPSAnUHJpY2U6IDIwJCc7XHJcblxyXG4gICAgICAgICAgICBtYWluX2NvdXJzZV9pdGVtLmFwcGVuZENoaWxkKG1haW5fY291cnNlX2l0ZW1fbmFtZSk7XHJcbiAgICAgICAgICAgIG1haW5fY291cnNlX2l0ZW0uYXBwZW5kQ2hpbGQobWFpbl9jb3Vyc2VfaXRlbV9yZWNlcGllKTtcclxuICAgICAgICAgICAgbWFpbl9jb3Vyc2VfaXRlbS5hcHBlbmRDaGlsZChtYWluX2NvdXJzZV9pdGVtX3ByaWNlKTtcclxuICAgICAgICAgICAgbWFpbl9jb3Vyc2UuYXBwZW5kQ2hpbGQobWFpbl9jb3Vyc2VfaXRlbSlcclxuXHJcbiAgICAgICAgICAgIC8vIURyaW5rc1xyXG4gICAgICAgICAgICBjb25zdCBkcmlua3NfaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBkcmlua3NfaXRlbS5jbGFzc05hbWUgPSBcIml0ZW1cIjtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRyaW5rc19pdGVtX25hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgZHJpbmtzX2l0ZW1fbmFtZS5jbGFzc05hbWUgPSAnbmFtZSc7XHJcbiAgICAgICAgICAgIGRyaW5rc19pdGVtX25hbWUuaW5uZXJIVE1MID0gJ0NyYWZ0IEJlZXIgU2VsZWN0aW9uJztcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRyaW5rc19pdGVtX3JlY2VwaWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgIGRyaW5rc19pdGVtX3JlY2VwaWUuY2xhc3NOYW1lID0gJ3JlY2VwaWUnO1xyXG4gICAgICAgICAgICBkcmlua3NfaXRlbV9yZWNlcGllLmlubmVySFRNTCA9IFwiT2RpbidzIG9mZmVycyBhIGN1cmF0ZWQgc2VsZWN0aW9uIG9mIGxvY2FsIGFuZCBpbnRlcm5hdGlvbmFsIGNyYWZ0IGJlZXJzIHRoYXQgY2FuIHByb3ZpZGUgYSByZWZyZXNoaW5nIGFuZCB1bmlxdWUgYWNjb21wYW5pbWVudCB0byB5b3VyIG1lYWwuXCJcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRyaW5rc19pdGVtX3ByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICBkcmlua3NfaXRlbV9wcmljZS5jbGFzc05hbWUgPSAncHJpY2UnO1xyXG4gICAgICAgICAgICBkcmlua3NfaXRlbV9wcmljZS5pbm5lckhUTUwgPSAnUHJpY2U6IDEwJCc7XHJcblxyXG4gICAgICAgICAgICBkcmlua3NfaXRlbS5hcHBlbmRDaGlsZChkcmlua3NfaXRlbV9uYW1lKTtcclxuICAgICAgICAgICAgZHJpbmtzX2l0ZW0uYXBwZW5kQ2hpbGQoZHJpbmtzX2l0ZW1fcmVjZXBpZSk7XHJcbiAgICAgICAgICAgIGRyaW5rc19pdGVtLmFwcGVuZENoaWxkKGRyaW5rc19pdGVtX3ByaWNlKTtcclxuICAgICAgICAgICAgZHJpbmtzLmFwcGVuZENoaWxkKGRyaW5rc19pdGVtKVxyXG5cclxuICAgICAgICAgICAgLy8hRGVzc2VydFxyXG4gICAgICAgICAgICBjb25zdCBkZXNzZXJ0X2l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgZGVzc2VydF9pdGVtLmNsYXNzTmFtZSA9IFwiaXRlbVwiO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZGVzc2VydF9pdGVtX25hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgZGVzc2VydF9pdGVtX25hbWUuY2xhc3NOYW1lID0gJ25hbWUnO1xyXG4gICAgICAgICAgICBkZXNzZXJ0X2l0ZW1fbmFtZS5pbm5lckhUTUwgPSAnS2V5IExpbWUgUGllJztcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRlc3NlcnRfaXRlbV9yZWNlcGllID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICBkZXNzZXJ0X2l0ZW1fcmVjZXBpZS5jbGFzc05hbWUgPSAncmVjZXBpZSc7XHJcbiAgICAgICAgICAgIGRlc3NlcnRfaXRlbV9yZWNlcGllLmlubmVySFRNTCA9ICdBIHRhbmd5IGFuZCBjcmVhbXkgS2V5IGxpbWUgcGllIHNlcnZlZCB3aXRoIGEgZ3JhaGFtIGNyYWNrZXIgY3J1c3QsIHByb3ZpZGluZyBhIHJlZnJlc2hpbmcgZW5kIHRvIHlvdXIgc2VhZm9vZCBmZWFzdC4nXHJcblxyXG4gICAgICAgICAgICBjb25zdCBkZXNzZXJ0X2l0ZW1fcHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgIGRlc3NlcnRfaXRlbV9wcmljZS5jbGFzc05hbWUgPSAncHJpY2UnO1xyXG4gICAgICAgICAgICBkZXNzZXJ0X2l0ZW1fcHJpY2UuaW5uZXJIVE1MID0gJ1ByaWNlOiAxMCQnO1xyXG5cclxuICAgICAgICAgICAgZGVzc2VydF9pdGVtLmFwcGVuZENoaWxkKGRlc3NlcnRfaXRlbV9uYW1lKTtcclxuICAgICAgICAgICAgZGVzc2VydF9pdGVtLmFwcGVuZENoaWxkKGRlc3NlcnRfaXRlbV9yZWNlcGllKTtcclxuICAgICAgICAgICAgZGVzc2VydF9pdGVtLmFwcGVuZENoaWxkKGRlc3NlcnRfaXRlbV9wcmljZSk7XHJcbiAgICAgICAgICAgIGRlc3NlcnQuYXBwZW5kQ2hpbGQoZGVzc2VydF9pdGVtKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoaSA9PSAxKSB7XHJcbiAgICAgICAgICAgIC8vIU1haW4gY291cnNlXHJcbiAgICAgICAgICAgIGNvbnN0IG1haW5fY291cnNlX2l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgbWFpbl9jb3Vyc2VfaXRlbS5jbGFzc05hbWUgPSBcIml0ZW1cIjtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG1haW5fY291cnNlX2l0ZW1fbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBtYWluX2NvdXJzZV9pdGVtX25hbWUuY2xhc3NOYW1lID0gJ25hbWUnO1xyXG4gICAgICAgICAgICBtYWluX2NvdXJzZV9pdGVtX25hbWUuaW5uZXJIVE1MID0gJ0xvYnN0ZXIgVGhlcm1pZG9yJztcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG1haW5fY291cnNlX2l0ZW1fcmVjZXBpZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgICAgbWFpbl9jb3Vyc2VfaXRlbV9yZWNlcGllLmNsYXNzTmFtZSA9ICdyZWNlcGllJztcclxuICAgICAgICAgICAgbWFpbl9jb3Vyc2VfaXRlbV9yZWNlcGllLmlubmVySFRNTCA9ICdJbmR1bGdlIGluIGEgY2xhc3NpYyBkaXNoIGZlYXR1cmluZyBzdWNjdWxlbnQgbG9ic3RlciB0YWlsIG1lYXQgY29va2VkIGluIGEgcmljaCBhbmQgY3JlYW15IHNhdWNlLCB0b3BwZWQgd2l0aCBhIGdvbGRlbiBicmVhZGNydW1iIGNydXN0IGFuZCBiYWtlZCB0byBwZXJmZWN0aW9uLidcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG1haW5fY291cnNlX2l0ZW1fcHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgIG1haW5fY291cnNlX2l0ZW1fcHJpY2UuY2xhc3NOYW1lID0gJ3ByaWNlJztcclxuICAgICAgICAgICAgbWFpbl9jb3Vyc2VfaXRlbV9wcmljZS5pbm5lckhUTUwgPSAnUHJpY2U6IDU1JCc7XHJcblxyXG4gICAgICAgICAgICBtYWluX2NvdXJzZV9pdGVtLmFwcGVuZENoaWxkKG1haW5fY291cnNlX2l0ZW1fbmFtZSk7XHJcbiAgICAgICAgICAgIG1haW5fY291cnNlX2l0ZW0uYXBwZW5kQ2hpbGQobWFpbl9jb3Vyc2VfaXRlbV9yZWNlcGllKTtcclxuICAgICAgICAgICAgbWFpbl9jb3Vyc2VfaXRlbS5hcHBlbmRDaGlsZChtYWluX2NvdXJzZV9pdGVtX3ByaWNlKTtcclxuICAgICAgICAgICAgbWFpbl9jb3Vyc2UuYXBwZW5kQ2hpbGQobWFpbl9jb3Vyc2VfaXRlbSlcclxuXHJcbiAgICAgICAgICAgIC8vIURyaW5rc1xyXG4gICAgICAgICAgICBjb25zdCBkcmlua3NfaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBkcmlua3NfaXRlbS5jbGFzc05hbWUgPSBcIml0ZW1cIjtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRyaW5rc19pdGVtX25hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgZHJpbmtzX2l0ZW1fbmFtZS5jbGFzc05hbWUgPSAnbmFtZSc7XHJcbiAgICAgICAgICAgIGRyaW5rc19pdGVtX25hbWUuaW5uZXJIVE1MID0gJ0NoYXJkb25uYXknO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZHJpbmtzX2l0ZW1fcmVjZXBpZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgICAgZHJpbmtzX2l0ZW1fcmVjZXBpZS5jbGFzc05hbWUgPSAncmVjZXBpZSc7XHJcbiAgICAgICAgICAgIGRyaW5rc19pdGVtX3JlY2VwaWUuaW5uZXJIVE1MID0gXCJBIGNyaXNwIGFuZCBidXR0ZXJ5IHdoaXRlIHdpbmUgdGhhdCBwYWlycyB3ZWxsIHdpdGggYSB2YXJpZXR5IG9mIHNlYWZvb2QgZGlzaGVzLCBlbmhhbmNpbmcgdGhlaXIgZmxhdm9ycy5cIlxyXG5cclxuICAgICAgICAgICAgY29uc3QgZHJpbmtzX2l0ZW1fcHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgIGRyaW5rc19pdGVtX3ByaWNlLmNsYXNzTmFtZSA9ICdwcmljZSc7XHJcbiAgICAgICAgICAgIGRyaW5rc19pdGVtX3ByaWNlLmlubmVySFRNTCA9ICdQcmljZTogMTUkJztcclxuXHJcbiAgICAgICAgICAgIGRyaW5rc19pdGVtLmFwcGVuZENoaWxkKGRyaW5rc19pdGVtX25hbWUpO1xyXG4gICAgICAgICAgICBkcmlua3NfaXRlbS5hcHBlbmRDaGlsZChkcmlua3NfaXRlbV9yZWNlcGllKTtcclxuICAgICAgICAgICAgZHJpbmtzX2l0ZW0uYXBwZW5kQ2hpbGQoZHJpbmtzX2l0ZW1fcHJpY2UpO1xyXG4gICAgICAgICAgICBkcmlua3MuYXBwZW5kQ2hpbGQoZHJpbmtzX2l0ZW0pXHJcblxyXG4gICAgICAgICAgICAvLyFEZXNzZXJ0XHJcbiAgICAgICAgICAgIGNvbnN0IGRlc3NlcnRfaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBkZXNzZXJ0X2l0ZW0uY2xhc3NOYW1lID0gXCJpdGVtXCI7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkZXNzZXJ0X2l0ZW1fbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBkZXNzZXJ0X2l0ZW1fbmFtZS5jbGFzc05hbWUgPSAnbmFtZSc7XHJcbiAgICAgICAgICAgIGRlc3NlcnRfaXRlbV9uYW1lLmlubmVySFRNTCA9ICdDaG9jb2xhdGUgTGF2YSBDYWtlJztcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRlc3NlcnRfaXRlbV9yZWNlcGllID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICBkZXNzZXJ0X2l0ZW1fcmVjZXBpZS5jbGFzc05hbWUgPSAncmVjZXBpZSc7XHJcbiAgICAgICAgICAgIGRlc3NlcnRfaXRlbV9yZWNlcGllLmlubmVySFRNTCA9ICdTYXRpc2Z5IHlvdXIgc3dlZXQgdG9vdGggd2l0aCBhIGRlY2FkZW50IGNob2NvbGF0ZSBsYXZhIGNha2UsIGZlYXR1cmluZyBhIHJpY2gsIG1vbHRlbiBjZW50ZXIgYW5kIGEgc2Nvb3Agb2YgdmFuaWxsYSBpY2UgY3JlYW0uJ1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZGVzc2VydF9pdGVtX3ByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICBkZXNzZXJ0X2l0ZW1fcHJpY2UuY2xhc3NOYW1lID0gJ3ByaWNlJztcclxuICAgICAgICAgICAgZGVzc2VydF9pdGVtX3ByaWNlLmlubmVySFRNTCA9ICdQcmljZTogMTAkJztcclxuXHJcbiAgICAgICAgICAgIGRlc3NlcnRfaXRlbS5hcHBlbmRDaGlsZChkZXNzZXJ0X2l0ZW1fbmFtZSk7XHJcbiAgICAgICAgICAgIGRlc3NlcnRfaXRlbS5hcHBlbmRDaGlsZChkZXNzZXJ0X2l0ZW1fcmVjZXBpZSk7XHJcbiAgICAgICAgICAgIGRlc3NlcnRfaXRlbS5hcHBlbmRDaGlsZChkZXNzZXJ0X2l0ZW1fcHJpY2UpO1xyXG4gICAgICAgICAgICBkZXNzZXJ0LmFwcGVuZENoaWxkKGRlc3NlcnRfaXRlbSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGkgPT0gMikge1xyXG4gICAgICAgICAgICAvLyFNYWluIGNvdXJzZVxyXG4gICAgICAgICAgICBjb25zdCBtYWluX2NvdXJzZV9pdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIG1haW5fY291cnNlX2l0ZW0uY2xhc3NOYW1lID0gXCJpdGVtXCI7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBtYWluX2NvdXJzZV9pdGVtX25hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgbWFpbl9jb3Vyc2VfaXRlbV9uYW1lLmNsYXNzTmFtZSA9ICduYW1lJztcclxuICAgICAgICAgICAgbWFpbl9jb3Vyc2VfaXRlbV9uYW1lLmlubmVySFRNTCA9ICdTY2FsbG9wcyB3aXRoIFRydWZmbGUgUmlzb3R0byc7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBtYWluX2NvdXJzZV9pdGVtX3JlY2VwaWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgIG1haW5fY291cnNlX2l0ZW1fcmVjZXBpZS5jbGFzc05hbWUgPSAncmVjZXBpZSc7XHJcbiAgICAgICAgICAgIG1haW5fY291cnNlX2l0ZW1fcmVjZXBpZS5pbm5lckhUTUwgPSAnUGFuLXNlYXJlZCBqdW1ibyBzY2FsbG9wcyBzZXJ2ZWQgb24gYSBiZWQgb2YgY3JlYW15IHRydWZmbGUtaW5mdXNlZCByaXNvdHRvLCBjcmVhdGluZyBhIGhhcm1vbmlvdXMgY29tYmluYXRpb24gb2YgZmxhdm9ycyBhbmQgdGV4dHVyZXMuJ1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbWFpbl9jb3Vyc2VfaXRlbV9wcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgICAgbWFpbl9jb3Vyc2VfaXRlbV9wcmljZS5jbGFzc05hbWUgPSAncHJpY2UnO1xyXG4gICAgICAgICAgICBtYWluX2NvdXJzZV9pdGVtX3ByaWNlLmlubmVySFRNTCA9ICdQcmljZTogNjUkJztcclxuXHJcbiAgICAgICAgICAgIG1haW5fY291cnNlX2l0ZW0uYXBwZW5kQ2hpbGQobWFpbl9jb3Vyc2VfaXRlbV9uYW1lKTtcclxuICAgICAgICAgICAgbWFpbl9jb3Vyc2VfaXRlbS5hcHBlbmRDaGlsZChtYWluX2NvdXJzZV9pdGVtX3JlY2VwaWUpO1xyXG4gICAgICAgICAgICBtYWluX2NvdXJzZV9pdGVtLmFwcGVuZENoaWxkKG1haW5fY291cnNlX2l0ZW1fcHJpY2UpO1xyXG4gICAgICAgICAgICBtYWluX2NvdXJzZS5hcHBlbmRDaGlsZChtYWluX2NvdXJzZV9pdGVtKVxyXG5cclxuICAgICAgICAgICAgLy8hRHJpbmtzXHJcbiAgICAgICAgICAgIGNvbnN0IGRyaW5rc19pdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGRyaW5rc19pdGVtLmNsYXNzTmFtZSA9IFwiaXRlbVwiO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZHJpbmtzX2l0ZW1fbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBkcmlua3NfaXRlbV9uYW1lLmNsYXNzTmFtZSA9ICduYW1lJztcclxuICAgICAgICAgICAgZHJpbmtzX2l0ZW1fbmFtZS5pbm5lckhUTUwgPSAnUGlub3QgTm9pcic7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkcmlua3NfaXRlbV9yZWNlcGllID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICBkcmlua3NfaXRlbV9yZWNlcGllLmNsYXNzTmFtZSA9ICdyZWNlcGllJztcclxuICAgICAgICAgICAgZHJpbmtzX2l0ZW1fcmVjZXBpZS5pbm5lckhUTUwgPSBcIkEgbWVkaXVtLWJvZGllZCByZWQgd2luZSB3aXRoIHNvZnQgdGFubmlucyB0aGF0IGNhbiBjb21wbGVtZW50IGhlYXJ0aWVyIHNlYWZvb2QgZGlzaGVzLCBzdWNoIGFzIGdyaWxsZWQgc3dvcmRmaXNoIG9yIGxvYnN0ZXIuXCJcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRyaW5rc19pdGVtX3ByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICBkcmlua3NfaXRlbV9wcmljZS5jbGFzc05hbWUgPSAncHJpY2UnO1xyXG4gICAgICAgICAgICBkcmlua3NfaXRlbV9wcmljZS5pbm5lckhUTUwgPSAnUHJpY2U6IDIwJCc7XHJcblxyXG4gICAgICAgICAgICBkcmlua3NfaXRlbS5hcHBlbmRDaGlsZChkcmlua3NfaXRlbV9uYW1lKTtcclxuICAgICAgICAgICAgZHJpbmtzX2l0ZW0uYXBwZW5kQ2hpbGQoZHJpbmtzX2l0ZW1fcmVjZXBpZSk7XHJcbiAgICAgICAgICAgIGRyaW5rc19pdGVtLmFwcGVuZENoaWxkKGRyaW5rc19pdGVtX3ByaWNlKTtcclxuICAgICAgICAgICAgZHJpbmtzLmFwcGVuZENoaWxkKGRyaW5rc19pdGVtKVxyXG5cclxuICAgICAgICAgICAgLy8hRGVzc2VydFxyXG4gICAgICAgICAgICBjb25zdCBkZXNzZXJ0X2l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgZGVzc2VydF9pdGVtLmNsYXNzTmFtZSA9IFwiaXRlbVwiO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZGVzc2VydF9pdGVtX25hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgZGVzc2VydF9pdGVtX25hbWUuY2xhc3NOYW1lID0gJ25hbWUnO1xyXG4gICAgICAgICAgICBkZXNzZXJ0X2l0ZW1fbmFtZS5pbm5lckhUTUwgPSAnRnJlc2ggQmVycnkgVGFydCc7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkZXNzZXJ0X2l0ZW1fcmVjZXBpZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgICAgZGVzc2VydF9pdGVtX3JlY2VwaWUuY2xhc3NOYW1lID0gJ3JlY2VwaWUnO1xyXG4gICAgICAgICAgICBkZXNzZXJ0X2l0ZW1fcmVjZXBpZS5pbm5lckhUTUwgPSAnRW5qb3kgYSBkZWxpZ2h0ZnVsIGNvbWJpbmF0aW9uIG9mIGZyZXNoIHNlYXNvbmFsIGJlcnJpZXMgbmVzdGxlZCBpbiBhIGJ1dHRlcnkgdGFydCBzaGVsbCwgdG9wcGVkIHdpdGggYSBkb2xsb3Agb2Ygd2hpcHBlZCBjcmVhbS4nXHJcblxyXG4gICAgICAgICAgICBjb25zdCBkZXNzZXJ0X2l0ZW1fcHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgIGRlc3NlcnRfaXRlbV9wcmljZS5jbGFzc05hbWUgPSAncHJpY2UnO1xyXG4gICAgICAgICAgICBkZXNzZXJ0X2l0ZW1fcHJpY2UuaW5uZXJIVE1MID0gJ1ByaWNlOiAxMCQnO1xyXG5cclxuICAgICAgICAgICAgZGVzc2VydF9pdGVtLmFwcGVuZENoaWxkKGRlc3NlcnRfaXRlbV9uYW1lKTtcclxuICAgICAgICAgICAgZGVzc2VydF9pdGVtLmFwcGVuZENoaWxkKGRlc3NlcnRfaXRlbV9yZWNlcGllKTtcclxuICAgICAgICAgICAgZGVzc2VydF9pdGVtLmFwcGVuZENoaWxkKGRlc3NlcnRfaXRlbV9wcmljZSk7XHJcbiAgICAgICAgICAgIGRlc3NlcnQuYXBwZW5kQ2hpbGQoZGVzc2VydF9pdGVtKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoaSA9PSAzKSB7XHJcbiAgICAgICAgICAgIC8vIU1haW4gY291cnNlXHJcbiAgICAgICAgICAgIGNvbnN0IG1haW5fY291cnNlX2l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgbWFpbl9jb3Vyc2VfaXRlbS5jbGFzc05hbWUgPSBcIml0ZW1cIjtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG1haW5fY291cnNlX2l0ZW1fbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBtYWluX2NvdXJzZV9pdGVtX25hbWUuY2xhc3NOYW1lID0gJ25hbWUnO1xyXG4gICAgICAgICAgICBtYWluX2NvdXJzZV9pdGVtX25hbWUuaW5uZXJIVE1MID0gJ0FsYXNrYW4gS2luZyBDcmFiIExlZ3MnO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbWFpbl9jb3Vyc2VfaXRlbV9yZWNlcGllID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICBtYWluX2NvdXJzZV9pdGVtX3JlY2VwaWUuY2xhc3NOYW1lID0gJ3JlY2VwaWUnO1xyXG4gICAgICAgICAgICBtYWluX2NvdXJzZV9pdGVtX3JlY2VwaWUuaW5uZXJIVE1MID0gJ0V4cGVyaWVuY2UgdGhlIHN3ZWV0IGFuZCBkZWxpY2F0ZSBtZWF0IG9mIEFsYXNrYW4ga2luZyBjcmFiIGxlZ3MsIHN0ZWFtZWQgdG8gcGVyZmVjdGlvbiBhbmQgc2VydmVkIHdpdGggZHJhd24gYnV0dGVyIGFuZCBsZW1vbiB3ZWRnZXMuJ1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbWFpbl9jb3Vyc2VfaXRlbV9wcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgICAgbWFpbl9jb3Vyc2VfaXRlbV9wcmljZS5jbGFzc05hbWUgPSAncHJpY2UnO1xyXG4gICAgICAgICAgICBtYWluX2NvdXJzZV9pdGVtX3ByaWNlLmlubmVySFRNTCA9ICdQcmljZTogMzUkJztcclxuXHJcbiAgICAgICAgICAgIG1haW5fY291cnNlX2l0ZW0uYXBwZW5kQ2hpbGQobWFpbl9jb3Vyc2VfaXRlbV9uYW1lKTtcclxuICAgICAgICAgICAgbWFpbl9jb3Vyc2VfaXRlbS5hcHBlbmRDaGlsZChtYWluX2NvdXJzZV9pdGVtX3JlY2VwaWUpO1xyXG4gICAgICAgICAgICBtYWluX2NvdXJzZV9pdGVtLmFwcGVuZENoaWxkKG1haW5fY291cnNlX2l0ZW1fcHJpY2UpO1xyXG4gICAgICAgICAgICBtYWluX2NvdXJzZS5hcHBlbmRDaGlsZChtYWluX2NvdXJzZV9pdGVtKVxyXG5cclxuICAgICAgICAgICAgLy8hRHJpbmtzXHJcbiAgICAgICAgICAgIGNvbnN0IGRyaW5rc19pdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGRyaW5rc19pdGVtLmNsYXNzTmFtZSA9IFwiaXRlbVwiO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZHJpbmtzX2l0ZW1fbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBkcmlua3NfaXRlbV9uYW1lLmNsYXNzTmFtZSA9ICduYW1lJztcclxuICAgICAgICAgICAgZHJpbmtzX2l0ZW1fbmFtZS5pbm5lckhUTUwgPSAnU2lnbmF0dXJlIENvY2t0YWlscyc7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkcmlua3NfaXRlbV9yZWNlcGllID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICBkcmlua3NfaXRlbV9yZWNlcGllLmNsYXNzTmFtZSA9ICdyZWNlcGllJztcclxuICAgICAgICAgICAgZHJpbmtzX2l0ZW1fcmVjZXBpZS5pbm5lckhUTUwgPSBcIkluZHVsZ2UgaW4gaGFuZGNyYWZ0ZWQgY29ja3RhaWxzIGluc3BpcmVkIGJ5IHRoZSBzZWEsIHN1Y2ggYXMgYSByZWZyZXNoaW5nIFNlYSBCcmVlemUgb3IgYSBjbGFzc2ljIE1vaml0byB3aXRoIGEgc2VhZm9vZCB0d2lzdC5cIlxyXG5cclxuICAgICAgICAgICAgY29uc3QgZHJpbmtzX2l0ZW1fcHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgIGRyaW5rc19pdGVtX3ByaWNlLmNsYXNzTmFtZSA9ICdwcmljZSc7XHJcbiAgICAgICAgICAgIGRyaW5rc19pdGVtX3ByaWNlLmlubmVySFRNTCA9ICdQcmljZTogMTAkJztcclxuXHJcbiAgICAgICAgICAgIGRyaW5rc19pdGVtLmFwcGVuZENoaWxkKGRyaW5rc19pdGVtX25hbWUpO1xyXG4gICAgICAgICAgICBkcmlua3NfaXRlbS5hcHBlbmRDaGlsZChkcmlua3NfaXRlbV9yZWNlcGllKTtcclxuICAgICAgICAgICAgZHJpbmtzX2l0ZW0uYXBwZW5kQ2hpbGQoZHJpbmtzX2l0ZW1fcHJpY2UpO1xyXG4gICAgICAgICAgICBkcmlua3MuYXBwZW5kQ2hpbGQoZHJpbmtzX2l0ZW0pICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoaSA9PSA0KSB7XHJcbiAgICAgICAgICAgIC8vIU1haW4gY291cnNlXHJcbiAgICAgICAgICAgIGNvbnN0IG1haW5fY291cnNlX2l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgbWFpbl9jb3Vyc2VfaXRlbS5jbGFzc05hbWUgPSBcIml0ZW1cIjtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG1haW5fY291cnNlX2l0ZW1fbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBtYWluX2NvdXJzZV9pdGVtX25hbWUuY2xhc3NOYW1lID0gJ25hbWUnO1xyXG4gICAgICAgICAgICBtYWluX2NvdXJzZV9pdGVtX25hbWUuaW5uZXJIVE1MID0gJ1NlYWZvb2QgUGFlbGxhJztcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG1haW5fY291cnNlX2l0ZW1fcmVjZXBpZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgICAgbWFpbl9jb3Vyc2VfaXRlbV9yZWNlcGllLmNsYXNzTmFtZSA9ICdyZWNlcGllJztcclxuICAgICAgICAgICAgbWFpbl9jb3Vyc2VfaXRlbV9yZWNlcGllLmlubmVySFRNTCA9ICdEZWxpZ2h0IGluIGEgdmlicmFudCBhbmQgYXJvbWF0aWMgU3BhbmlzaC1zdHlsZSBzZWFmb29kIHBhZWxsYSwgYnJpbW1pbmcgd2l0aCBhIHRhbnRhbGl6aW5nIG1lZGxleSBvZiBzaHJpbXAsIG11c3NlbHMsIGNsYW1zLCBhbmQgY2FsYW1hcmksIGFsbCBuZXN0bGVkIGluIHNhZmZyb24taW5mdXNlZCByaWNlLidcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG1haW5fY291cnNlX2l0ZW1fcHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgIG1haW5fY291cnNlX2l0ZW1fcHJpY2UuY2xhc3NOYW1lID0gJ3ByaWNlJztcclxuICAgICAgICAgICAgbWFpbl9jb3Vyc2VfaXRlbV9wcmljZS5pbm5lckhUTUwgPSAnUHJpY2U6IDQwJCc7XHJcblxyXG4gICAgICAgICAgICBtYWluX2NvdXJzZV9pdGVtLmFwcGVuZENoaWxkKG1haW5fY291cnNlX2l0ZW1fbmFtZSk7XHJcbiAgICAgICAgICAgIG1haW5fY291cnNlX2l0ZW0uYXBwZW5kQ2hpbGQobWFpbl9jb3Vyc2VfaXRlbV9yZWNlcGllKTtcclxuICAgICAgICAgICAgbWFpbl9jb3Vyc2VfaXRlbS5hcHBlbmRDaGlsZChtYWluX2NvdXJzZV9pdGVtX3ByaWNlKTtcclxuICAgICAgICAgICAgbWFpbl9jb3Vyc2UuYXBwZW5kQ2hpbGQobWFpbl9jb3Vyc2VfaXRlbSkgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChpID09IDUpIHtcclxuICAgICAgICAgICAgLy8hTWFpbiBjb3Vyc2VcclxuICAgICAgICAgICAgY29uc3QgbWFpbl9jb3Vyc2VfaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBtYWluX2NvdXJzZV9pdGVtLmNsYXNzTmFtZSA9IFwiaXRlbVwiO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbWFpbl9jb3Vyc2VfaXRlbV9uYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIG1haW5fY291cnNlX2l0ZW1fbmFtZS5jbGFzc05hbWUgPSAnbmFtZSc7XHJcbiAgICAgICAgICAgIG1haW5fY291cnNlX2l0ZW1fbmFtZS5pbm5lckhUTUwgPSAnU2hyaW1wIFNjYW1waSc7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBtYWluX2NvdXJzZV9pdGVtX3JlY2VwaWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgIG1haW5fY291cnNlX2l0ZW1fcmVjZXBpZS5jbGFzc05hbWUgPSAncmVjZXBpZSc7XHJcbiAgICAgICAgICAgIG1haW5fY291cnNlX2l0ZW1fcmVjZXBpZS5pbm5lckhUTUwgPSAnRGl2ZSBpbnRvIGEgY2xhc3NpYyBJdGFsaWFuIGZhdm9yaXRlIGZlYXR1cmluZyBwbHVtcCBzaHJpbXAgc2F1dMOpZWQgaW4gYSBnYXJsaWMtaW5mdXNlZCBidXR0ZXIgc2F1Y2UsIHNlcnZlZCBvdmVyIGEgYmVkIG9mIGxpbmd1aW5lIGFuZCBnYXJuaXNoZWQgd2l0aCBmcmVzaCBwYXJzbGV5LidcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG1haW5fY291cnNlX2l0ZW1fcHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgIG1haW5fY291cnNlX2l0ZW1fcHJpY2UuY2xhc3NOYW1lID0gJ3ByaWNlJztcclxuICAgICAgICAgICAgbWFpbl9jb3Vyc2VfaXRlbV9wcmljZS5pbm5lckhUTUwgPSAnUHJpY2U6IDIwJCc7XHJcblxyXG4gICAgICAgICAgICBtYWluX2NvdXJzZV9pdGVtLmFwcGVuZENoaWxkKG1haW5fY291cnNlX2l0ZW1fbmFtZSk7XHJcbiAgICAgICAgICAgIG1haW5fY291cnNlX2l0ZW0uYXBwZW5kQ2hpbGQobWFpbl9jb3Vyc2VfaXRlbV9yZWNlcGllKTtcclxuICAgICAgICAgICAgbWFpbl9jb3Vyc2VfaXRlbS5hcHBlbmRDaGlsZChtYWluX2NvdXJzZV9pdGVtX3ByaWNlKTtcclxuICAgICAgICAgICAgbWFpbl9jb3Vyc2UuYXBwZW5kQ2hpbGQobWFpbl9jb3Vyc2VfaXRlbSkgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGJhY2tncm91bmQuYXBwZW5kQ2hpbGQobWFpbl9jb3Vyc2UpXHJcbiAgICBiYWNrZ3JvdW5kLmFwcGVuZENoaWxkKGRyaW5rcylcclxuICAgIGJhY2tncm91bmQuYXBwZW5kQ2hpbGQoZGVzc2VydClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWVudSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IGFib3V0IGZyb20gJy4vYWJvdXQnO1xyXG5pbXBvcnQgaG9tZSBmcm9tICcuL2hvbWUnO1xyXG5pbXBvcnQgbWVudSBmcm9tICcuL21lbnUnO1xyXG5pbXBvcnQgY29udGFjdCBmcm9tICcuL2NvbnRhY3QnO1xyXG5cclxuaG9tZSgpXHJcblxyXG5sZXQgYWJvdXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWJvdXRfc2VjdGlvbicpO1xyXG5hYm91dEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFib3V0KTtcclxuXHJcbmxldCBob21lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWVfc2VjdGlvbicpO1xyXG5ob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaG9tZSk7XHJcblxyXG5sZXQgbWVudUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51X3NlY3Rpb24nKTtcclxubWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1lbnUpO1xyXG5cclxubGV0IGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdF9zZWN0aW9uJyk7XHJcbmNvbnRhY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjb250YWN0KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9