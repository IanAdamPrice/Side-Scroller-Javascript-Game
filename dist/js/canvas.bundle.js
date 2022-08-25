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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/img/bigPlatformLeft.png":
/*!*************************************!*\
  !*** ./src/img/bigPlatformLeft.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "94c3383e356ba29e819e240af452c234.png");

/***/ }),

/***/ "./src/img/bridgeEnd.png":
/*!*******************************!*\
  !*** ./src/img/bridgeEnd.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "cd322bd39f93a309234d36a7eee6a9f8.png");

/***/ }),

/***/ "./src/img/bridgeMiddle.png":
/*!**********************************!*\
  !*** ./src/img/bridgeMiddle.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "6efa805fcf5330b18f5aacd9744962d2.png");

/***/ }),

/***/ "./src/img/bridgeStart.png":
/*!*********************************!*\
  !*** ./src/img/bridgeStart.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "8c32b67d099d4afd0e58d01f99a36f13.png");

/***/ }),

/***/ "./src/img/clouds.png":
/*!****************************!*\
  !*** ./src/img/clouds.png ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "9865abf895009009502cf21ca492c764.png");

/***/ }),

/***/ "./src/img/far-grounds.png":
/*!*********************************!*\
  !*** ./src/img/far-grounds.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ff9c7964863d9522274d9f41cbe5da77.png");

/***/ }),

/***/ "./src/img/floatingPlatform.png":
/*!**************************************!*\
  !*** ./src/img/floatingPlatform.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "db7cc05a1c0119043e17ced076875c0e.png");

/***/ }),

/***/ "./src/img/platform1.png":
/*!*******************************!*\
  !*** ./src/img/platform1.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "efe1b955ade243c8f68e8acad693f8b9.png");

/***/ }),

/***/ "./src/img/platform2.png":
/*!*******************************!*\
  !*** ./src/img/platform2.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "adb8ac1ee57dc02798e2e57092e50e55.png");

/***/ }),

/***/ "./src/img/platformEnd.png":
/*!*********************************!*\
  !*** ./src/img/platformEnd.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0d09ea38aa2a35a7eb5f2a4e7397347d.png");

/***/ }),

/***/ "./src/img/sea.png":
/*!*************************!*\
  !*** ./src/img/sea.png ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "91e9ef28ef13c63293c4fad3fed4fc29.png");

/***/ }),

/***/ "./src/img/sky.png":
/*!*************************!*\
  !*** ./src/img/sky.png ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "dc8daf3a059a8bcb3d0da15bdb36c33e.png");

/***/ }),

/***/ "./src/img/spriteRunLeft.png":
/*!***********************************!*\
  !*** ./src/img/spriteRunLeft.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "64e64f67ede16075c139355c54075698.png");

/***/ }),

/***/ "./src/img/spriteRunRight.png":
/*!************************************!*\
  !*** ./src/img/spriteRunRight.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "b0551a7ce1ff4935b87bf0139e26a0d7.png");

/***/ }),

/***/ "./src/img/spriteStandLeft.png":
/*!*************************************!*\
  !*** ./src/img/spriteStandLeft.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "350f8e518b5d56b2c80281812921da62.png");

/***/ }),

/***/ "./src/img/spriteStandRight.png":
/*!**************************************!*\
  !*** ./src/img/spriteStandRight.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "bef9928d1e58b912d8995a2208e80d66.png");

/***/ }),

/***/ "./src/img/tileset.png":
/*!*****************************!*\
  !*** ./src/img/tileset.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "1003c740013b33a868931e9e980be428.png");

/***/ }),

/***/ "./src/img/tree.png":
/*!**************************!*\
  !*** ./src/img/tree.png ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "118c6ed19702d1a7401d3e970bb5d79f.png");

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_platform1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/platform1.png */ "./src/img/platform1.png");
/* harmony import */ var _img_tileset_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/tileset.png */ "./src/img/tileset.png");
/* harmony import */ var _img_platform2_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/platform2.png */ "./src/img/platform2.png");
/* harmony import */ var _img_platformEnd_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/platformEnd.png */ "./src/img/platformEnd.png");
/* harmony import */ var _img_floatingPlatform_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/floatingPlatform.png */ "./src/img/floatingPlatform.png");
/* harmony import */ var _img_bigPlatformLeft_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/bigPlatformLeft.png */ "./src/img/bigPlatformLeft.png");
/* harmony import */ var _img_bridgeStart_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/bridgeStart.png */ "./src/img/bridgeStart.png");
/* harmony import */ var _img_bridgeMiddle_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/bridgeMiddle.png */ "./src/img/bridgeMiddle.png");
/* harmony import */ var _img_bridgeEnd_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/bridgeEnd.png */ "./src/img/bridgeEnd.png");
/* harmony import */ var _img_clouds_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../img/clouds.png */ "./src/img/clouds.png");
/* harmony import */ var _img_sky_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../img/sky.png */ "./src/img/sky.png");
/* harmony import */ var _img_spriteRunLeft_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../img/spriteRunLeft.png */ "./src/img/spriteRunLeft.png");
/* harmony import */ var _img_spriteRunRight_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../img/spriteRunRight.png */ "./src/img/spriteRunRight.png");
/* harmony import */ var _img_spriteStandLeft_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../img/spriteStandLeft.png */ "./src/img/spriteStandLeft.png");
/* harmony import */ var _img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../img/spriteStandRight.png */ "./src/img/spriteStandRight.png");
/* harmony import */ var _img_sea_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../img/sea.png */ "./src/img/sea.png");
/* harmony import */ var _img_far_grounds_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../img/far-grounds.png */ "./src/img/far-grounds.png");
/* harmony import */ var _img_tree_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../img/tree.png */ "./src/img/tree.png");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Platform import assets


















var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.width = 1300;
canvas.height = 576;
var gravity = 1.5;

var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);

    this.speed = 10;
    this.position = {
      x: 100,
      y: 100
    };
    this.velocity = {
      x: 0,
      y: 0
    };
    this.width = 54;
    this.height = 70;
    this.image = createImage(_img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_14__["default"]);
    this.frames = 0;
    this.sprites = {
      stand: {
        right: createImage(_img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_14__["default"]),
        left: createImage(_img_spriteStandLeft_png__WEBPACK_IMPORTED_MODULE_13__["default"]),
        cropWidth: 54,
        width: 54
      },
      run: {
        right: createImage(_img_spriteRunRight_png__WEBPACK_IMPORTED_MODULE_12__["default"]),
        left: createImage(_img_spriteRunLeft_png__WEBPACK_IMPORTED_MODULE_11__["default"]),
        cropWidth: 68,
        width: 68
      }
    };
    this.currentSprite = this.sprites.stand.right;
    this.currentCropWidth = 54;
  }

  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.currentSprite, this.currentCropWidth * this.frames, 0, this.currentCropWidth, 93, this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.frames++;
      if (this.frames > 39 && (this.currentSprite === this.sprites.stand.right || this.currentSprite === this.sprites.stand.left)) this.frames = 0;else if (this.frames > 39 && (this.currentSprite === this.sprites.run.right || this.currentSprite === this.sprites.run.left)) this.frames = 0;
      this.draw();
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
      if (this.position.y + this.height + this.velocity.y <= canvas.height) this.velocity.y += gravity;
    }
  }]);

  return Player;
}();

var Platform = /*#__PURE__*/function () {
  function Platform(_ref) {
    var x = _ref.x,
        y = _ref.y,
        image = _ref.image;

    _classCallCheck(this, Platform);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(Platform, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return Platform;
}();

var GenericObject = /*#__PURE__*/function () {
  function GenericObject(_ref2) {
    var x = _ref2.x,
        y = _ref2.y,
        image = _ref2.image;

    _classCallCheck(this, GenericObject);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(GenericObject, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return GenericObject;
}();

function createImage(imageSrc) {
  var image = new Image();
  image.src = imageSrc;
  return image;
}

var platformImage = createImage(_img_platform1_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
var platformImageMiddle = createImage(_img_tileset_png__WEBPACK_IMPORTED_MODULE_1__["default"]);
var platformEndImage = createImage(_img_platformEnd_png__WEBPACK_IMPORTED_MODULE_3__["default"]);
var platformSmallImage = createImage(_img_platform2_png__WEBPACK_IMPORTED_MODULE_2__["default"]);
var bigPlatformLeftImage = createImage(_img_bigPlatformLeft_png__WEBPACK_IMPORTED_MODULE_5__["default"]);
var floatingPlatformImage = createImage(_img_floatingPlatform_png__WEBPACK_IMPORTED_MODULE_4__["default"]);
var bridgeStartImage = createImage(_img_bridgeStart_png__WEBPACK_IMPORTED_MODULE_6__["default"]);
var bridgeMiddleImage = createImage(_img_bridgeMiddle_png__WEBPACK_IMPORTED_MODULE_7__["default"]);
var bridgeEndImage = createImage(_img_bridgeEnd_png__WEBPACK_IMPORTED_MODULE_8__["default"]);
var backgroundImage = createImage(_img_sky_png__WEBPACK_IMPORTED_MODULE_10__["default"]);
var seaImage = createImage(_img_sea_png__WEBPACK_IMPORTED_MODULE_15__["default"]);
var cloudImage = createImage(_img_clouds_png__WEBPACK_IMPORTED_MODULE_9__["default"]);
var landImage = createImage(_img_far_grounds_png__WEBPACK_IMPORTED_MODULE_16__["default"]);
var treeImage = createImage(_img_tree_png__WEBPACK_IMPORTED_MODULE_17__["default"]);
var player = new Player();
var platforms = [];
var genericObject = [];
var lastKey;
var keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  }
};
var scrollOffset = 0;

function init() {
  platformImageMiddle = createImage(_img_tileset_png__WEBPACK_IMPORTED_MODULE_1__["default"]);
  platformEndImage = createImage(_img_platformEnd_png__WEBPACK_IMPORTED_MODULE_3__["default"]);
  platformImage = createImage(_img_platform1_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
  platformSmallImage = createImage(_img_platform2_png__WEBPACK_IMPORTED_MODULE_2__["default"]);
  floatingPlatformImage = createImage(_img_floatingPlatform_png__WEBPACK_IMPORTED_MODULE_4__["default"]);
  bigPlatformLeftImage = createImage(_img_bigPlatformLeft_png__WEBPACK_IMPORTED_MODULE_5__["default"]);
  bridgeStartImage = createImage(_img_bridgeStart_png__WEBPACK_IMPORTED_MODULE_6__["default"]);
  bridgeMiddleImage = createImage(_img_bridgeMiddle_png__WEBPACK_IMPORTED_MODULE_7__["default"]);
  bridgeEndImage = createImage(_img_bridgeEnd_png__WEBPACK_IMPORTED_MODULE_8__["default"]);
  backgroundImage = createImage(_img_sky_png__WEBPACK_IMPORTED_MODULE_10__["default"]);
  cloudImage = createImage(_img_clouds_png__WEBPACK_IMPORTED_MODULE_9__["default"]);
  seaImage = createImage(_img_sea_png__WEBPACK_IMPORTED_MODULE_15__["default"]);
  treeImage = createImage(_img_tree_png__WEBPACK_IMPORTED_MODULE_17__["default"]);
  player = new Player();
  platforms = [// platforms
  // new Platform({ x: platformImageMiddle.width * 3 -15, y: 323, image: platformEndImage }),
  // new Platform({ x: -2, y: 323, image: platformImageMiddle }),
  // new Platform({ x: platformImageMiddle.width - 7, y: 323, image: platformSmallImage }),
  // new Platform({ x: platformImageMiddle.width * 2 - 14, y: 323, image: platformImageMiddle }),
  // new Platform({ x: platformImageMiddle.width * 3 , y: 325, image: bridgeStartImage}),
  // new Platform({ x: platformImageMiddle.width * 4 -15, y: 323, image: bridgeMiddleImage}),
  // new Platform({ x: platformImageMiddle.width * 4 +49, y: 323, image: bridgeMiddleImage}),
  // new Platform({ x: platformImageMiddle.width * 5 +10, y: 323, image: bridgeMiddleImage}),
  // new Platform({ x: platformImageMiddle.width * 6 -24, y: 323, image: bridgeMiddleImage}),
  // new Platform({ x: platformImageMiddle.width * 7 -55, y: 325, image: bridgeEndImage}),
  //floating Platforms 
  new Platform({
    x: 700,
    y: 130,
    image: floatingPlatformImage
  }), new Platform({
    x: 20,
    y: -6,
    image: treeImage
  }) //new Platform({ x: -30, y: 399, image: platformImage }), 
  // new Platform({ x: platformImage.width * 2 + 100, y:470, image: platformImage }),
  // new Platform({ x: platformImage.width * 3 + 300, y:470, image: platformImage }),
  // new Platform({ x: platformImage.width * 4 + 300 - 2, y:470, image: platformImage }),
  // new Platform({ x: platformImage.width * 5 + 700 - 2, y:470, image: platformImage })
  ];
  genericObject = [// platform fill
  //sky assets
  new GenericObject({
    x: 0,
    y: -1,
    image: backgroundImage
  }), new GenericObject({
    x: backgroundImage.width,
    y: 0,
    image: backgroundImage
  }), new GenericObject({
    x: backgroundImage.width * 2,
    y: 0,
    image: backgroundImage
  }), new GenericObject({
    x: backgroundImage.width * 3,
    y: 0,
    image: backgroundImage
  }), new GenericObject({
    x: backgroundImage.width * 4,
    y: 0,
    image: backgroundImage
  }), new GenericObject({
    x: backgroundImage.width * 5,
    y: 0,
    image: backgroundImage
  }), new GenericObject({
    x: backgroundImage.width * 6,
    y: 0,
    image: backgroundImage
  }), new GenericObject({
    x: backgroundImage.width * 7,
    y: 0,
    image: backgroundImage
  }), new GenericObject({
    x: backgroundImage.width * 8,
    y: 0,
    image: backgroundImage
  }), new GenericObject({
    x: backgroundImage.width * 9,
    y: 0,
    image: backgroundImage
  }), // Cloud Assets
  new GenericObject({
    x: 0,
    y: 200,
    image: cloudImage
  }), new GenericObject({
    x: cloudImage.width,
    y: 200,
    image: cloudImage
  }), new GenericObject({
    x: cloudImage.width * 2,
    y: 200,
    image: cloudImage
  }), new GenericObject({
    x: cloudImage.width * 3,
    y: 200,
    image: cloudImage
  }), new GenericObject({
    x: cloudImage.width * 4,
    y: 200,
    image: cloudImage
  }), new GenericObject({
    x: cloudImage.width * 5,
    y: 200,
    image: cloudImage
  }), new GenericObject({
    x: cloudImage.width * 6,
    y: 200,
    image: cloudImage
  }), // Sea assets
  new GenericObject({
    x: 0,
    y: 384,
    image: seaImage
  }), new GenericObject({
    x: seaImage.width,
    y: 384,
    image: seaImage
  }), new GenericObject({
    x: seaImage.width * 2,
    y: 384,
    image: seaImage
  }), new GenericObject({
    x: seaImage.width * 3,
    y: 384,
    image: seaImage
  }), new GenericObject({
    x: seaImage.width * 4,
    y: 384,
    image: seaImage
  }), new GenericObject({
    x: seaImage.width * 5,
    y: 384,
    image: seaImage
  }), new GenericObject({
    x: seaImage.width * 6,
    y: 384,
    image: seaImage
  }), new GenericObject({
    x: seaImage.width * 7,
    y: 384,
    image: seaImage
  }), new GenericObject({
    x: seaImage.width * 8,
    y: 384,
    image: seaImage
  }), new GenericObject({
    x: seaImage.width * 9,
    y: 384,
    image: seaImage
  }), // foreground land
  new GenericObject({
    x: 850,
    y: 435,
    image: landImage
  })];
  scrollOffset = 0;
} // Player movement


function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = 'white';
  c.fillRect(0, 0, canvas.width, canvas.height);
  genericObject.forEach(function (genericObject) {
    genericObject.draw();
  });
  platforms.forEach(function (platform) {
    platform.draw();
  });
  player.update(); // Player movement left & right

  if (keys.right.pressed && player.position.x < 400) {
    player.velocity.x = player.speed;
  } else if (keys.left.pressed && player.position.x > 100 || keys.left.pressed && scrollOffset === 0 && player.position.x > 0) {
    player.velocity.x = -player.speed;
  } else {
    player.velocity.x = 0; // Background scrolling

    if (keys.right.pressed) {
      scrollOffset += player.speed;
      platforms.forEach(function (platform) {
        platform.position.x -= player.speed;
      });
      genericObject.forEach(function (genericObject) {
        genericObject.position.x -= player.speed * .60;
      });
    } else if (keys.left.pressed && scrollOffset > 0) {
      scrollOffset -= player.speed;
      platforms.forEach(function (platform) {
        platform.position.x += player.speed;
      });
      genericObject.forEach(function (genericObject) {
        genericObject.position.x += player.speed * .60;
      });
    }
  } // platform collision detection


  platforms.forEach(function (platform) {
    if (player.position.y + player.height <= platform.position.y + 2 && player.position.y + player.height + player.velocity.y >= platform.position.y + 2 && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
      player.velocity.y = 0;
    }
  });

  if (keys.right.pressed && lastKey === 'right' && player.currentSprite !== player.sprites.run.right) {
    player.frames = 1;
    player.currentSprite = player.sprites.run.right;
    player.currentCropWidth = player.sprites.run.cropWidth;
    player.width = player.sprites.run.width;
  } else if (keys.left.pressed && lastKey === 'left' && player.currentSprite !== player.sprites.run.left) {
    player.currentSprite = player.sprites.run.left;
    player.currentCropWidth = player.sprites.run.cropWidth;
    player.width = player.sprites.run.width;
  } else if (!keys.left.pressed && lastKey === 'left' && player.currentSprite !== player.sprites.stand.left) {
    player.currentSprite = player.sprites.stand.left;
    player.currentCropWidth = player.sprites.stand.cropWidth;
    player.width = player.sprites.stand.width;
  } else if (!keys.right.pressed && lastKey === 'right' && player.currentSprite !== player.sprites.stand.right) {
    player.currentSprite = player.sprites.stand.right;
    player.currentCropWidth = player.sprites.stand.cropWidth;
    player.width = player.sprites.stand.width;
  }

  if (scrollOffset > 2000) {
    console.log('you win');
  } // lose condition


  if (player.position.y > canvas.height) {
    init();
  }
}

init();
animate(); // Event listener for movement

window.addEventListener('keydown', function (_ref3) {
  var keyCode = _ref3.keyCode;

  // Action for "A" key
  switch (keyCode) {
    case 65:
      console.log('left');
      keys.left.pressed = true;
      lastKey = 'left';
      break;
    // Action for "S" key

    case 83:
      console.log('down');
      break;
    // Action for "D" key

    case 68:
      console.log('right');
      keys.right.pressed = true;
      lastKey = 'right';
      break;
    // Action for "W" key

    case 87:
      if (event.repeat) {
        return;
      }

      console.log('up');
      player.velocity.y -= 21;
      break;
  }
});
window.addEventListener('keyup', function (_ref4) {
  var keyCode = _ref4.keyCode;

  // Action for "A" key
  switch (keyCode) {
    case 65:
      console.log('left');
      keys.left.pressed = false;
      break;
    // Action for "S" key

    case 83:
      console.log('down');
      break;
    // Action for "D" key

    case 68:
      console.log('right');
      keys.right.pressed = false;
      break;
    // Action for "W" key

    case 87:
      console.log('up');
      break;
  }
});

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map