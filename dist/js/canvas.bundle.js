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

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"];

function _regeneratorRuntime() {
  "use strict";
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */

  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return exports;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var exports = {},
      Op = Object.prototype,
      hasOwn = Op.hasOwnProperty,
      $Symbol = "function" == typeof Symbol ? Symbol : {},
      iteratorSymbol = $Symbol.iterator || "@@iterator",
      asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
      toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }

  try {
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
        generator = Object.create(protoGenerator.prototype),
        context = new Context(tryLocsList || []);
    return generator._invoke = function (innerFn, self, context) {
      var state = "suspendedStart";
      return function (method, arg) {
        if ("executing" === state) throw new Error("Generator is already running");

        if ("completed" === state) {
          if ("throw" === method) throw arg;
          return doneResult();
        }

        for (context.method = method, context.arg = arg;;) {
          var delegate = context.delegate;

          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);

            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
            if ("suspendedStart" === state) throw state = "completed", context.arg;
            context.dispatchException(context.arg);
          } else "return" === context.method && context.abrupt("return", context.arg);
          state = "executing";
          var record = tryCatch(innerFn, self, context);

          if ("normal" === record.type) {
            if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
            return {
              value: record.arg,
              done: context.done
            };
          }

          "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
        }
      };
    }(innerFn, self, context), generator;
  }

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

  exports.wrap = wrap;
  var ContinueSentinel = {};

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {}

  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
      NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if ("throw" !== record.type) {
        var result = record.arg,
            value = result.value;
        return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }

      reject(record.arg);
    }

    var previousPromise;

    this._invoke = function (method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    };
  }

  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (undefined === method) {
      if (context.delegate = null, "throw" === context.method) {
        if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel;
        context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }

  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          for (; ++i < iterable.length;) {
            if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
          }

          return next.value = undefined, next.done = !0, next;
        };

        return next.next = next;
      }
    }

    return {
      next: doneResult
    };
  }

  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }

  return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }

      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) {
        "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
      }
    },
    stop: function stop() {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) throw exception;
      var context = this;

      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
            record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
              hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
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

      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      }

      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}

module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}

module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(/*! ../helpers/regeneratorRuntime */ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js")();
module.exports = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./src/img/bigPlatformLeft.png":
/*!*************************************!*\
  !*** ./src/img/bigPlatformLeft.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "9706c06683eb5ec047e8a374217a83c6.png");

/***/ }),

/***/ "./src/img/bigPlatformMiddle.png":
/*!***************************************!*\
  !*** ./src/img/bigPlatformMiddle.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "35201a93c6f5bcf004c8ac3612eb18ab.png");

/***/ }),

/***/ "./src/img/bridge.png":
/*!****************************!*\
  !*** ./src/img/bridge.png ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "d1d7e3035bb2e5deaec6cb96fbee842b.png");

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

/***/ "./src/img/cross1.png":
/*!****************************!*\
  !*** ./src/img/cross1.png ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c93a7501045a05f44e070017c17ca354.png");

/***/ }),

/***/ "./src/img/enemyWalkLeft.png":
/*!***********************************!*\
  !*** ./src/img/enemyWalkLeft.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "4584c5aa7b936db9e63b6fe2002d3aed.png");

/***/ }),

/***/ "./src/img/enemyWalkRight.png":
/*!************************************!*\
  !*** ./src/img/enemyWalkRight.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "59fab4e91c16ba8769a1cb09562b6018.png");

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
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "d03188847b57c9f686f48034bf1ac269.png");

/***/ }),

/***/ "./src/img/floatingPlatform2.png":
/*!***************************************!*\
  !*** ./src/img/floatingPlatform2.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "210c182ec151c7117003cb9b8afec58a.png");

/***/ }),

/***/ "./src/img/floatingPlatform3.png":
/*!***************************************!*\
  !*** ./src/img/floatingPlatform3.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ab9181a524491161c13401d316f1f9ea.png");

/***/ }),

/***/ "./src/img/jumpLeft.png":
/*!******************************!*\
  !*** ./src/img/jumpLeft.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "b60fc42110c5a8f65a1646a74a79339f.png");

/***/ }),

/***/ "./src/img/jumpRight.png":
/*!*******************************!*\
  !*** ./src/img/jumpRight.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "bc545dd0dd209a5105633182894dbd46.png");

/***/ }),

/***/ "./src/img/pillar.png":
/*!****************************!*\
  !*** ./src/img/pillar.png ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ebf9ea0b13d13339d439c30b2c075fca.png");

/***/ }),

/***/ "./src/img/sea.png":
/*!*************************!*\
  !*** ./src/img/sea.png ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "b451537666691a7192484e1204fdeb12.png");

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
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils.js */ "./src/js/utils.js");
/* harmony import */ var _img_floatingPlatform_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/floatingPlatform.png */ "./src/img/floatingPlatform.png");
/* harmony import */ var _img_floatingPlatform2_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/floatingPlatform2.png */ "./src/img/floatingPlatform2.png");
/* harmony import */ var _img_floatingPlatform3_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/floatingPlatform3.png */ "./src/img/floatingPlatform3.png");
/* harmony import */ var _img_bigPlatformLeft_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/bigPlatformLeft.png */ "./src/img/bigPlatformLeft.png");
/* harmony import */ var _img_bigPlatformMiddle_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../img/bigPlatformMiddle.png */ "./src/img/bigPlatformMiddle.png");
/* harmony import */ var _img_bridge_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../img/bridge.png */ "./src/img/bridge.png");
/* harmony import */ var _img_cross1_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../img/cross1.png */ "./src/img/cross1.png");
/* harmony import */ var _img_clouds_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../img/clouds.png */ "./src/img/clouds.png");
/* harmony import */ var _img_sky_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../img/sky.png */ "./src/img/sky.png");
/* harmony import */ var _img_pillar_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../img/pillar.png */ "./src/img/pillar.png");
/* harmony import */ var _img_spriteRunLeft_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../img/spriteRunLeft.png */ "./src/img/spriteRunLeft.png");
/* harmony import */ var _img_spriteRunRight_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../img/spriteRunRight.png */ "./src/img/spriteRunRight.png");
/* harmony import */ var _img_spriteStandLeft_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../img/spriteStandLeft.png */ "./src/img/spriteStandLeft.png");
/* harmony import */ var _img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../img/spriteStandRight.png */ "./src/img/spriteStandRight.png");
/* harmony import */ var _img_jumpRight_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../img/jumpRight.png */ "./src/img/jumpRight.png");
/* harmony import */ var _img_jumpLeft_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../img/jumpLeft.png */ "./src/img/jumpLeft.png");
/* harmony import */ var _img_enemyWalkRight_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../img/enemyWalkRight.png */ "./src/img/enemyWalkRight.png");
/* harmony import */ var _img_enemyWalkLeft_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../img/enemyWalkLeft.png */ "./src/img/enemyWalkLeft.png");
/* harmony import */ var _img_sea_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../img/sea.png */ "./src/img/sea.png");
/* harmony import */ var _img_far_grounds_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../img/far-grounds.png */ "./src/img/far-grounds.png");
/* harmony import */ var _img_tree_png__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../img/tree.png */ "./src/img/tree.png");




// Platform import assets






















var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.width = 900;
canvas.height = 600;
var gravity = 1.5;

var Player = /*#__PURE__*/function () {
  function Player() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Player);

    this.speed = 7;
    this.position = {
      x: 140,
      y: 283
    };
    this.velocity = {
      x: 0,
      y: 0
    };
    this.width = 54;
    this.height = 70;
    this.image = Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_18__["default"]);
    this.frames = 0;
    this.sprites = {
      stand: {
        right: Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_18__["default"]),
        left: Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_spriteStandLeft_png__WEBPACK_IMPORTED_MODULE_17__["default"]),
        cropWidth: 54,
        width: 54
      },
      run: {
        right: Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_spriteRunRight_png__WEBPACK_IMPORTED_MODULE_16__["default"]),
        left: Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_spriteRunLeft_png__WEBPACK_IMPORTED_MODULE_15__["default"]),
        cropWidth: 68,
        width: 68
      },
      jump: {
        right: Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_jumpRight_png__WEBPACK_IMPORTED_MODULE_19__["default"]),
        left: Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_jumpLeft_png__WEBPACK_IMPORTED_MODULE_20__["default"]),
        cropWidth: 49,
        width: 50
      }
    };
    this.currentSprite = this.sprites.stand.right;
    this.currentCropWidth = 54;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Player, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.currentSprite, this.currentCropWidth * this.frames, 0, this.currentCropWidth, 93, this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.frames++;
      if (this.frames > 39 && (this.currentSprite === this.sprites.stand.right || this.currentSprite === this.sprites.stand.left)) this.frames = 0;else if (this.frames > 39 && (this.currentSprite === this.sprites.run.right || this.currentSprite === this.sprites.run.left)) this.frames = 0;else if (this.frames > 7 && (this.currentSprite === this.sprites.jump.right || this.currentSprite === this.sprites.jump.left)) this.frames = 0;
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
        image = _ref.image,
        block = _ref.block;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Platform);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
    this.block = block;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Platform, [{
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

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, GenericObject);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(GenericObject, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return GenericObject;
}();

var Enemy = /*#__PURE__*/function () {
  function Enemy(_ref3) {
    var position = _ref3.position,
        velocity = _ref3.velocity,
        _ref3$distance = _ref3.distance,
        distance = _ref3$distance === void 0 ? {
      limit: 50,
      traveled: 0
    } : _ref3$distance;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Enemy);

    this.position = {
      x: position.x,
      y: position.y
    };
    this.velocity = {
      x: velocity.x,
      y: velocity.y
    };
    this.width = 46;
    this.height = 74;
    this.image = Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_enemyWalkLeft_png__WEBPACK_IMPORTED_MODULE_22__["default"]);
    this.frames = 0;
    this.distance = distance;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Enemy, [{
    key: "draw",
    value: function draw() {
      //c. fillStyle = 'red'
      //c.fillRect(this.position.x, this.position.y, this.width, this.height)
      c.drawImage(this.image, 46 * this.frames, 0, 46, 74, this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.frames++;
      if (this.frames >= 29) this.frames = 0;
      this.draw();
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
      if (this.position.y + this.height + this.velocity.y <= canvas.height) this.velocity.y += gravity; //walk the enemy back and forth

      this.distance.traveled += Math.abs(this.velocity.x);

      if (this.distance.traveled > this.distance.limit) {
        this.distance.traveled = 0;
        this.velocity.x = -this.velocity.x;
      }
    }
  }]);

  return Enemy;
}();

var Particle = /*#__PURE__*/function () {
  function Particle(_ref4) {
    var position = _ref4.position,
        velocity = _ref4.velocity,
        radius = _ref4.radius;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Particle);

    this.position = {
      x: position.x,
      y: position.y
    };
    this.velocity = {
      x: velocity.x,
      y: velocity.y
    };
    this.radius = 3;
    this.ttl = 300;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Particle, [{
    key: "draw",
    value: function draw() {
      c.beginPath();
      c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2, false);
      c.fillStyle = '#BDAB94';
      c.fill();
      c.closePath();
    }
  }, {
    key: "update",
    value: function update() {
      this.ttl--;
      this.draw();
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
      if (this.position.y + this.radius + this.velocity.y <= canvas.height) this.velocity.y += gravity * 0.1;
    }
  }]);

  return Particle;
}();

var bigPlatformLeftImage;
var floatingPlatformImage;
var blockImage;
var floatingPlatform3Image;
var bigplatformMiddleImage;
var bridgeImage;
var crossImage1;
var backgroundImage;
var seaImage;
var cloudImage;
var landImage;
var treeImage;
var pillarImage;
var player = new Player();
var platforms = [];
var genericObject = [];
var enemys = [];
var particles = [];
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
  return _init.apply(this, arguments);
} // Player movement


function _init() {
  _init = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImageAsync"])(_img_floatingPlatform_png__WEBPACK_IMPORTED_MODULE_5__["default"]);

          case 2:
            floatingPlatformImage = _context.sent;
            _context.next = 5;
            return Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImageAsync"])(_img_floatingPlatform2_png__WEBPACK_IMPORTED_MODULE_6__["default"]);

          case 5:
            blockImage = _context.sent;
            _context.next = 8;
            return Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImageAsync"])(_img_floatingPlatform3_png__WEBPACK_IMPORTED_MODULE_7__["default"]);

          case 8:
            floatingPlatform3Image = _context.sent;
            _context.next = 11;
            return Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImageAsync"])(_img_bigPlatformLeft_png__WEBPACK_IMPORTED_MODULE_8__["default"]);

          case 11:
            bigPlatformLeftImage = _context.sent;
            _context.next = 14;
            return Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImageAsync"])(_img_bigPlatformMiddle_png__WEBPACK_IMPORTED_MODULE_9__["default"]);

          case 14:
            bigplatformMiddleImage = _context.sent;
            _context.next = 17;
            return Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImageAsync"])(_img_bridge_png__WEBPACK_IMPORTED_MODULE_10__["default"]);

          case 17:
            bridgeImage = _context.sent;
            _context.next = 20;
            return Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImageAsync"])(_img_cross1_png__WEBPACK_IMPORTED_MODULE_11__["default"]);

          case 20:
            crossImage1 = _context.sent;
            _context.next = 23;
            return Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImageAsync"])(_img_sky_png__WEBPACK_IMPORTED_MODULE_13__["default"]);

          case 23:
            backgroundImage = _context.sent;
            _context.next = 26;
            return Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImageAsync"])(_img_clouds_png__WEBPACK_IMPORTED_MODULE_12__["default"]);

          case 26:
            cloudImage = _context.sent;
            _context.next = 29;
            return Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImageAsync"])(_img_sea_png__WEBPACK_IMPORTED_MODULE_23__["default"]);

          case 29:
            seaImage = _context.sent;
            _context.next = 32;
            return Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImageAsync"])(_img_far_grounds_png__WEBPACK_IMPORTED_MODULE_24__["default"]);

          case 32:
            landImage = _context.sent;
            _context.next = 35;
            return Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImageAsync"])(_img_tree_png__WEBPACK_IMPORTED_MODULE_25__["default"]);

          case 35:
            treeImage = _context.sent;
            _context.next = 38;
            return Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImageAsync"])(_img_pillar_png__WEBPACK_IMPORTED_MODULE_14__["default"]);

          case 38:
            pillarImage = _context.sent;
            player = new Player(); // all enemy placement

            enemys = [new Enemy({
              position: {
                x: 1200,
                y: 100
              },
              velocity: {
                x: -.3,
                y: 0
              },
              distance: {
                limit: 200,
                traveled: 0
              }
            })]; // particle placement

            particles = []; // all platforms

            platforms = [// platforms
            new Platform({
              x: 815,
              y: 0,
              image: pillarImage
            }), new Platform({
              x: 0,
              y: 315,
              image: bigPlatformLeftImage
            }), new Platform({
              x: bigPlatformLeftImage.width + bridgeImage.width - 205,
              y: 315,
              image: bigplatformMiddleImage
            }), new Platform({
              x: bigPlatformLeftImage.width - 40,
              y: 315,
              image: bridgeImage
            }), //floating Platforms 
            new Platform({
              x: 800,
              y: 180,
              image: blockImage,
              block: true
            }), new Platform({
              x: bigPlatformLeftImage.width + bridgeImage.width + bigplatformMiddleImage.width - 20,
              y: 265,
              image: floatingPlatformImage
            }), new Platform({
              x: 2100,
              y: 330,
              image: floatingPlatform3Image
            }), // visual aid
            new Platform({
              x: 20,
              y: 35,
              image: treeImage
            }), new Platform({
              x: 200,
              y: 315,
              image: crossImage1
            })]; // all background object (affected by scroll offset)

            genericObject = [//sky assets
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
              y: 420,
              image: seaImage
            }), new GenericObject({
              x: seaImage.width,
              y: 420,
              image: seaImage
            }), new GenericObject({
              x: seaImage.width * 2,
              y: 420,
              image: seaImage
            }), new GenericObject({
              x: seaImage.width * 3,
              y: 420,
              image: seaImage
            }), new GenericObject({
              x: seaImage.width * 4,
              y: 420,
              image: seaImage
            }), new GenericObject({
              x: seaImage.width * 5,
              y: 420,
              image: seaImage
            }), new GenericObject({
              x: seaImage.width * 6,
              y: 420,
              image: seaImage
            }), new GenericObject({
              x: seaImage.width * 7,
              y: 420,
              image: seaImage
            }), new GenericObject({
              x: seaImage.width * 8,
              y: 420,
              image: seaImage
            }), new GenericObject({
              x: seaImage.width * 9,
              y: 420,
              image: seaImage
            }), // foreground land
            new GenericObject({
              x: 850,
              y: 465,
              image: landImage
            })];
            scrollOffset = 0;

          case 45:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _init.apply(this, arguments);
}

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
  enemys.forEach(function (enemy, index) {
    enemy.update(); // enemy stomp

    if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["collisionTop"])({
      object1: player,
      object2: enemy
    })) {
      for (var i = 0; i < 50; i++) {
        particles.push(new Particle({
          position: {
            x: enemy.position.x + enemy.width / 2,
            y: enemy.position.y + enemy.width / 2
          },
          velocity: {
            x: (Math.random() - 0.5) * 2,
            y: Math.random() - 0.5 * 2
          },
          radius: Math.random() * 3
        }));
      }

      player.velocity.y -= 30;
      setTimeout(function () {
        enemys.splice(index, 1);
      }, 0);
    } else if (player.position.x + player.width >= enemy.position.x && player.position.y + player.height >= enemy.position.y && player.position.x <= enemy.position.x + enemy.width) init();
  });
  particles.forEach(function (particle) {
    particle.update();
  });
  player.update(); // Player movement left & right

  if (keys.right.pressed && player.position.x < 200) {
    player.velocity.x = player.speed;
  } else if (keys.left.pressed && player.position.x > 400 || keys.left.pressed && scrollOffset === 0 && player.position.x > 0) {
    player.velocity.x = -player.speed;
  } else {
    player.velocity.x = 0; // Background scrolling

    if (keys.right.pressed) {
      scrollOffset += player.speed;
      platforms.forEach(function (platform) {
        platform.position.x -= player.speed;
      });
      genericObject.forEach(function (genericObject) {
        genericObject.position.x -= player.speed * .50;
      });
      enemys.forEach(function (enemy) {
        enemy.position.x -= player.speed;
      });
      particles.forEach(function (particle) {
        particle.position.x -= player.speed;
      });
    } else if (keys.left.pressed && scrollOffset > 0) {
      scrollOffset -= player.speed;
      platforms.forEach(function (platform) {
        platform.position.x += player.speed;
      });
      genericObject.forEach(function (genericObject) {
        genericObject.position.x += player.speed * .50;
      });
      enemys.forEach(function (enemy) {
        enemy.position.x += player.speed;
      });
      particles.forEach(function (particle) {
        particle.position.x += player.speed;
      });
    }
  } // platform collision detection


  platforms.forEach(function (platform) {
    if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["isOnTopOfPlatform"])({
      object: player,
      platform: platform
    })) {
      player.velocity.y = 0;
    }

    if (platform.block && Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["hitBottomOfPlatform"])({
      object: player,
      platform: platform
    })) {
      player.velocity.y = -player.velocity.y;
    }

    if (platform.block && Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["hitSideOfPlatform"])({
      object: player,
      platform: platform
    })) {
      player.velocity.x = 0;
    } // particles bounce


    particles.forEach(function (particle, index) {
      if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["isOnTopOfPlatformCircle"])({
        object: particle,
        platform: platform
      })) {
        particle.velocity.y = -particle.velocity.y * .5;
        if (particle.radius - 0.4 < 0) particles.splice(index, 1);else particle.radius -= 0.4;
      }

      if (particle.ttl < 0) particles.splice(index, 1);
    });
    enemys.forEach(function (enemy) {
      if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["isOnTopOfPlatform"])({
        object: enemy,
        platform: platform
      })) enemy.velocity.y = 0;
    });
  }); // sprite switching

  if (player.velocity.y === 0) {
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

window.addEventListener('keydown', function (_ref5) {
  var keyCode = _ref5.keyCode;

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
      console.log('up');
      if (player.velocity.y === 0) player.velocity.y = -20;
      if (lastKey === 'right') player.currentSprite = player.sprites.jump.right;else player.currentSprite = player.sprites.jump.left;
      break;
  }
});
window.addEventListener('keyup', function (_ref6) {
  var keyCode = _ref6.keyCode;

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

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! exports provided: createImage, createImageAsync, isOnTopOfPlatform, collisionTop, isOnTopOfPlatformCircle, hitBottomOfPlatform, hitSideOfPlatform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createImage", function() { return createImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createImageAsync", function() { return createImageAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOnTopOfPlatform", function() { return isOnTopOfPlatform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collisionTop", function() { return collisionTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOnTopOfPlatformCircle", function() { return isOnTopOfPlatformCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hitBottomOfPlatform", function() { return hitBottomOfPlatform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hitSideOfPlatform", function() { return hitSideOfPlatform; });
function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)];
}

function distance(x1, y1, x2, y2) {
  var xDist = x2 - x1;
  var yDist = y2 - y1;
  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
}

function createImage(imageSrc) {
  var image = new Image();
  image.src = imageSrc;
  return image;
}
function createImageAsync(imageSrc) {
  return new Promise(function (resolve) {
    var image = new Image();

    image.onload = function () {
      resolve(image);
    };

    image.src = imageSrc;
  });
} // character collision

function isOnTopOfPlatform(_ref) {
  var object = _ref.object,
      platform = _ref.platform;
  return object.position.y + object.height <= platform.position.y + 40 && object.position.y + object.height + object.velocity.y >= platform.position.y + 40 && object.position.x + object.width >= platform.position.x && object.position.x <= platform.position.x + platform.width;
} // enemy collision

function collisionTop(_ref2) {
  var object1 = _ref2.object1,
      object2 = _ref2.object2;
  return object1.position.y + object1.height <= object2.position.y && object1.position.y + object1.height + object1.velocity.y >= object2.position.y && object1.position.x + object1.width >= object2.position.x && object1.position.x <= object2.position.x + object2.width;
} // particle collision

function isOnTopOfPlatformCircle(_ref3) {
  var object = _ref3.object,
      platform = _ref3.platform;
  return object.position.y + object.radius <= platform.position.y + 40 && object.position.y + object.radius + object.velocity.y >= platform.position.y + 40 && object.position.x + object.radius >= platform.position.x && object.position.x <= platform.position.x + platform.width;
}
function hitBottomOfPlatform(_ref4) {
  var object = _ref4.object,
      platform = _ref4.platform;
  return object.position.y <= platform.position.y + platform.height && object.position.y - object.velocity.y >= platform.position.y + platform.height && object.position.x + object.width >= platform.position.x && object.position.x <= platform.position.x + platform.width;
}
function hitSideOfPlatform(_ref5) {
  var object = _ref5.object,
      platform = _ref5.platform;
  return object.position.x + object.width + object.velocity.x - platform.velocity.x >= platform.position.x && object.position.x + object.velocity.x <= platform.position.x + platform.width && object.position.y <= platform.position.y + platform.height && object.position.y + object.height >= platform.position.y;
}

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map