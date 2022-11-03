(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define("strange Components", ["vue"], factory);
	else if(typeof exports === 'object')
		exports["strange Components"] = factory(require("vue"));
	else
		root["strange Components"] = factory(root["Vue"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE__55__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 94);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(28)('wks');
var uid = __webpack_require__(14);
var Symbol = __webpack_require__(2).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(8)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 2 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(4);
var createDesc = __webpack_require__(18);
module.exports = __webpack_require__(1) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(6);
var IE8_DOM_DEFINE = __webpack_require__(37);
var toPrimitive = __webpack_require__(27);
var dP = Object.defineProperty;

exports.f = __webpack_require__(1) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(7);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(13);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var hide = __webpack_require__(3);
var has = __webpack_require__(11);
var SRC = __webpack_require__(14)('src');
var $toString = __webpack_require__(61);
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(16).inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),
/* 11 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(19);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(41);
var defined = __webpack_require__(19);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.11' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var core = __webpack_require__(16);
var hide = __webpack_require__(3);
var redefine = __webpack_require__(10);
var ctx = __webpack_require__(30);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(7);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(13);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(16);
var global = __webpack_require__(2);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(17) ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 29 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(42);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(44);
var enumBugKeys = __webpack_require__(33);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(28)('keys');
var uid = __webpack_require__(14);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 33 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(4).f;
var has = __webpack_require__(11);
var TAG = __webpack_require__(0)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__(6);
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(29);
var TAG = __webpack_require__(0)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(1) && !__webpack_require__(8)(function () {
  return Object.defineProperty(__webpack_require__(38)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(13);
var document = __webpack_require__(2).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(40);
var getKeys = __webpack_require__(31);
var redefine = __webpack_require__(10);
var global = __webpack_require__(2);
var hide = __webpack_require__(3);
var Iterators = __webpack_require__(9);
var wks = __webpack_require__(0);
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(58);
var step = __webpack_require__(59);
var Iterators = __webpack_require__(9);
var toIObject = __webpack_require__(15);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(60)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(29);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(6);
var dPs = __webpack_require__(63);
var enumBugKeys = __webpack_require__(33);
var IE_PROTO = __webpack_require__(32)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(38)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(64).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(11);
var toIObject = __webpack_require__(15);
var arrayIndexOf = __webpack_require__(45)(false);
var IE_PROTO = __webpack_require__(32)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(15);
var toLength = __webpack_require__(5);
var toAbsoluteIndex = __webpack_require__(21);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(11);
var toObject = __webpack_require__(12);
var IE_PROTO = __webpack_require__(32)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 47 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpFlags = __webpack_require__(35);

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var hide = __webpack_require__(3);
var uid = __webpack_require__(14);
var TYPED = uid('typed_array');
var VIEW = uid('view');
var ABV = !!(global.ArrayBuffer && global.DataView);
var CONSTR = ABV;
var i = 0;
var l = 9;
var Typed;

var TypedArrayConstructors = (
  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
).split(',');

while (i < l) {
  if (Typed = global[TypedArrayConstructors[i++]]) {
    hide(Typed.prototype, TYPED, true);
    hide(Typed.prototype, VIEW, true);
  } else CONSTR = false;
}

module.exports = {
  ABV: ABV,
  CONSTR: CONSTR,
  TYPED: TYPED,
  VIEW: VIEW
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(10);
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/ecma262/#sec-toindex
var toInteger = __webpack_require__(7);
var toLength = __webpack_require__(5);
module.exports = function (it) {
  if (it === undefined) return 0;
  var number = toInteger(it);
  var length = toLength(number);
  if (number !== length) throw RangeError('Wrong length!');
  return length;
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(44);
var hiddenKeys = __webpack_require__(33).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)

var toObject = __webpack_require__(12);
var toAbsoluteIndex = __webpack_require__(21);
var toLength = __webpack_require__(5);
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var aLen = arguments.length;
  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
  var end = aLen > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__55__;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
  if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
  } else {}
}(this, function () {
  var defaultThemeConfig = {
    colors: {},
    shadows: {},
    radiuses: {
      'small': '3px',
      'large': '5px'
    }
  }

  var pseudos = [
    'link',
    'visited',
    'hover',
    'active',
    'focus',
    'first-child',
    'last-child',
    'before',
    'after',
    'enabled',
    'disabled',
    'checked'
  ]

  function generate (names, valueName, value, prefix) {
    prefix = prefix ? prefix + '-' : ''
    var res = ''
    for (var i = 0; i < names.length; i++) {
      res += '.' + prefix + names[i] + '--' + valueName + '{' + names[i] + ':' + value + '}'
      res += '.' + prefix + names[i] + '--' + valueName + '-important{' + names[i] + ':' + value + '!important}'
      pseudos.forEach(pseudo => {
        res += '.' + prefix + pseudo + '-' + names[i] + '--' + valueName + ':' + pseudo + '{' + names[i] + ':' + value + '}'
        res += '.' + prefix + pseudo + '-' + names[i] + '--' + valueName + '-important:' + pseudo + '{' + names[i] + ':' + value + '!important}'
      })
    }
    return res
  }

  function genColorClasses (colorName, colorNumber, prefix) {
    var res = ''
    // generate font color classes
    res += generate(['color'], colorName, colorNumber, prefix)

    // generate placeholder color classes
    res += '.' + prefix + '-placeholder-color--' + colorName + '::-webkit-input-placeholder{color:' + colorNumber + '}'
    res += '.' + prefix + '-placeholder-color--' + colorName + ':-moz-placeholder{color:' + colorNumber + '}'
    res += '.' + prefix + '-placeholder-color--' + colorName + '::-moz-placeholder{color:' + colorNumber + '}'
    res += '.' + prefix + '-placeholder-color--' + colorName + ':-ms-input-placeholder{color:' + colorNumber + '}'
    
    // generate border color classes
    res += generate([
      'border-color',
      'border-top-color',
      'border-right-color',
      'border-bottom-color',
      'border-left-color'
    ], colorName, colorNumber, prefix)

    // generate background color classes
    res += generate(['background-color'], colorName, colorNumber, prefix)
    return res
  }

  function genShadowClasses (shadowName, shadowValue, prefix) {
    return generate(['box-shadow'], shadowName, shadowValue, prefix)
  }

  function genRadiusClasses (radiusName, radiusValue, prefix) {
    return generate([
      'border-radius',
      'border-top-left-radius',
      'border-top-right-radius',
      'border-bottom-left-radius',
      'border-bottom-right-radius'
    ], radiusName, radiusValue, prefix)
  }

  function simpleClone (obj) {
    return JSON.parse(JSON.stringify(obj))
  }

  function isValidHex (hex, ignoreWarning) {
    var res = !(typeof hex !== 'string' || hex[0] !== '#' || (hex.length !== 4 && hex.length !== 7))
    if (!res && !ignoreWarning) console.error('Theme class generator @ hex2rgb: invalid hex format "' + hex + '"')
    return res
  }

  function isValidShadow (shadow) {
    if (!shadow) return false
    var arr = shadow.split(/\s+/)
    // 0px 0px 2px #f63
    for (var i = 0; i < arr.length - 1; i++) {
      if (!/^\d+px$/g.test(arr[i])) {
        console.error('Theme class generator @ hex2rgb: invalid shadow format "' + shadow + '"')
        return false
      }
    }
    if (!isValidHex(arr[3], true)) {
      console.error('Theme class generator @ hex2rgb: invalid shadow format "' + shadow + '"')
      return false
    }
    return true
  }

  /**
  * hex to HSL.
  *
  * @param hex
  *   color hex value, should be like #f63 or #ff6633
  * @return Array
  *   return an array which each element in it  stands for r, g and b
  */
  function hex2rgb (hex) {
    if (isValidHex(hex)) {
      var res = []
      hex = hex.substring(1).toLowerCase()

      if (hex.length === 3) {
        hex = Array.prototype.map.call(hex, function (e) {
          return e + '' + e
        }).join('')
      }

      for (var i = 0; i < hex.length; i++) {
        res.push(parseInt('0x' + hex.substring(i, ++i + 1)))
      }
      return res
    }
  }

  /**
  * rgb to hsl
  * reference https://www.rapidtables.com/convert/color/rgb-to-hsl.html
  *
  * @param   Array
  *   an array which each element in it stands for r, g and b
  * @return  Array
  *   an array which each element in it stands for h, s and l
  */
  function rgb2hsl(rgb) {
    var r = rgb[0] / 255
    var g = rgb[1] / 255
    var b = rgb[2] / 255
    var max = Math.max(r, g, b)
    var min = Math.min(r, g, b)
    var d = max - min
    var h = 0
    var s = 0
    var l = (max + min) / 2 * 100

    if (d !== 0) {
      // calc h
      switch (max) {
        case r:
          h = 60 * ((g - b) / d % 6)
          break
        case g:
          h = 60 * ((b - r) / d + 2)
          break
        case b:
          h = 60 * ((r - g) / d + 4)
          break
      }

      // calc s
      s = d / (1 - Math.abs(2 * (l / 100) - 1)) * 100
    }
    // console.log(h, s, l)
    return [(h < 0 ? 360 + h : h).toFixed(2), s.toFixed(4), l.toFixed(4)]
  }

  function hex2hsl (hex) {
    // console.log(hex, hex2rgb(hex), rgb2hsl(hex2rgb(hex)))
    return rgb2hsl(hex2rgb(hex))
  }
  
  function getSpecifiedColorValue (hex) {
    if (hex && isValidHex(hex)) {
      return hex
    }
  }

  return function (config) {
    config = config || {}
    var theme = config.theme || {}
    var prefix = config.prefix || ''
    var lightnessReverse = config.lightnessReverse || false
    var baseColorLevel = config.baseColorLevel || 12
    var baseColorHue = config.baseColorHue || '10%'
    var colorUpDown = config.colorUpDown || config.colorUpDown === 0 ? 0 : 10
    var colorTopBottom = config.colorTopBottom || (config.colorTopBottom === 0 ? 0 : 10)
    var baseShadowOpacity = config.baseShadowOpacity || (config.baseShadowOpacity === 0 ? 0 : 0.2)
    var colorShadowOpacity = config.colorShadowOpacity || (config.colorShadowOpacity === 0 ? 0 : 0.6)

    var finalTheme = simpleClone(defaultThemeConfig)
    if (typeof theme === 'object') {
      for (var name in theme) {
        if (theme[name]) {
          if (typeof theme[name] === 'object') {
            finalTheme[name] = finalTheme[name] ? finalTheme[name] : {}
            Object.assign(finalTheme[name], theme[name])
          } else {
            console.error('Theme class generator @ config.theme.' + name + ' should be an object')
          }
        }
      }
    } else {
      console.error('Theme class generator @ theme should be an object')
    }

    var res = ''

    // generate color classes
    for (var colorName in finalTheme.colors) {
      // calculate relative colors
      var direction = lightnessReverse ? -1 : 1
      colorValue = hex2hsl(finalTheme.colors[colorName])
      var colorGroup = {}
      colorGroup[colorName + '-top'] = getSpecifiedColorValue(colorGroup[colorName + '-top']) || [colorValue[0], colorValue[1], lightnessReverse ? 100 - colorTopBottom + '' : colorTopBottom + ''],
      colorGroup[colorName + '-up'] = getSpecifiedColorValue(colorGroup[colorName + '-up']) || [colorValue[0], colorValue[1], colorValue[2] - colorUpDown * direction + ''],
      colorGroup[colorName] = colorValue
      colorGroup[colorName + '-down'] = getSpecifiedColorValue(colorGroup[colorName + '-down']) || [colorValue[0], colorValue[1], Number(colorValue[2]) + colorUpDown * direction + ''],
      colorGroup[colorName + '-bottom'] = getSpecifiedColorValue(colorGroup[colorName + '-bottom']) || [colorValue[0], colorValue[1], !lightnessReverse ? 100 - colorTopBottom + '' : colorTopBottom + '']

      for (var name in colorGroup) {
        var value = colorGroup[name].map(function (e) { return e })
        // console.log(name, value)
        value[1] = value[1] + '%'
        value[2] = value[2] + '%'
        res += genColorClasses(
          name,
          'hsl(' + value.join(',') + ')',
          prefix
        )
      }

      // generate shadow classes
      res += isValidShadow(finalTheme.shadows[colorName])
        ? genShadowClasses(colorName, finalTheme.shadows[colorName], prefix)
        : genShadowClasses(colorName, '0 0px 4px hsla(' + [colorValue[0], colorValue[1] + '%', colorValue[2] + '%'].join(',') + ',' + colorShadowOpacity + ')', prefix)

      // calculate non-colors
      if (colorName === 'primary') {
        for (var i = 0; i <= baseColorLevel; i++) {
          res += genColorClasses(
            'base-' + i,
            'hsl(' + [colorValue[0], baseColorHue, (100 / baseColorLevel).toFixed(2) * (lightnessReverse ? (baseColorLevel - i) : i) + '%'].join(',') + ')',
            prefix
          )

          // generate base shadow classes
          res += isValidShadow(finalTheme.shadows.base)
            ? finalTheme.shadows.base
            : genShadowClasses('base', '0 0px 4px hsla(' + [colorValue[0], '0%', '0%'].join(',') + ',' + baseShadowOpacity + ')', prefix)
        }
      }
    }
    
    // generate custom shadow classes
    for (var shadowName in finalTheme.shadows) {
      if (finalTheme.colors[shadowName] || shadowName === 'base') continue
      if (isValidShadow(finalTheme.shadows[shadowName])) {
        res += genShadowClasses(shadowName, finalTheme.shadows[shadowName], prefix)
      }
    }

    // generate border-radius classes
    for (var radiusName in finalTheme.radiuses) {
      if (!/^\d+px$/.test(finalTheme.radiuses[radiusName])) {
        console.error('Theme class generator @ hex2rgb: invalid radius format "' + finalTheme.radiuses[radiusName] + '"')
        continue
      }
      res += genRadiusClasses(radiusName, finalTheme.radiuses[radiusName], prefix)
    }

    return res
  }
}))


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(4).f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__(1) && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(0)('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(3)(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(17);
var $export = __webpack_require__(20);
var redefine = __webpack_require__(10);
var hide = __webpack_require__(3);
var Iterators = __webpack_require__(9);
var $iterCreate = __webpack_require__(62);
var setToStringTag = __webpack_require__(34);
var getPrototypeOf = __webpack_require__(46);
var ITERATOR = __webpack_require__(0)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(28)('native-function-to-string', Function.toString);


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(43);
var descriptor = __webpack_require__(18);
var setToStringTag = __webpack_require__(34);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(3)(IteratorPrototype, __webpack_require__(0)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(4);
var anObject = __webpack_require__(6);
var getKeys = __webpack_require__(31);

module.exports = __webpack_require__(1) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(2).document;
module.exports = document && document.documentElement;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(20);
var $values = __webpack_require__(66)(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(1);
var getKeys = __webpack_require__(31);
var toIObject = __webpack_require__(15);
var isEnum = __webpack_require__(47).f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || isEnum.call(O, key)) {
        result.push(isEntries ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(68);
var anObject = __webpack_require__(6);
var $flags = __webpack_require__(35);
var DESCRIPTORS = __webpack_require__(1);
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __webpack_require__(10)(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__(8)(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__(1) && /./g.flags != 'g') __webpack_require__(4).f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__(35)
});


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(6);
var toObject = __webpack_require__(12);
var toLength = __webpack_require__(5);
var toInteger = __webpack_require__(7);
var advanceStringIndex = __webpack_require__(70);
var regExpExec = __webpack_require__(72);
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
__webpack_require__(73)('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var at = __webpack_require__(71)(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(7);
var defined = __webpack_require__(19);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__(36);
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(74);
var redefine = __webpack_require__(10);
var hide = __webpack_require__(3);
var fails = __webpack_require__(8);
var defined = __webpack_require__(19);
var wks = __webpack_require__(0);
var regexpExec = __webpack_require__(48);

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpExec = __webpack_require__(48);
__webpack_require__(20)({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4a8e1104_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4a8e1104_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4a8e1104_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4a8e1104_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3a2110f1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3a2110f1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3a2110f1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3a2110f1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(78)('Float32', 4, function (init) {
  return function Float32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

if (__webpack_require__(1)) {
  var LIBRARY = __webpack_require__(17);
  var global = __webpack_require__(2);
  var fails = __webpack_require__(8);
  var $export = __webpack_require__(20);
  var $typed = __webpack_require__(49);
  var $buffer = __webpack_require__(79);
  var ctx = __webpack_require__(30);
  var anInstance = __webpack_require__(51);
  var propertyDesc = __webpack_require__(18);
  var hide = __webpack_require__(3);
  var redefineAll = __webpack_require__(50);
  var toInteger = __webpack_require__(7);
  var toLength = __webpack_require__(5);
  var toIndex = __webpack_require__(52);
  var toAbsoluteIndex = __webpack_require__(21);
  var toPrimitive = __webpack_require__(27);
  var has = __webpack_require__(11);
  var classof = __webpack_require__(36);
  var isObject = __webpack_require__(13);
  var toObject = __webpack_require__(12);
  var isArrayIter = __webpack_require__(80);
  var create = __webpack_require__(43);
  var getPrototypeOf = __webpack_require__(46);
  var gOPN = __webpack_require__(53).f;
  var getIterFn = __webpack_require__(81);
  var uid = __webpack_require__(14);
  var wks = __webpack_require__(0);
  var createArrayMethod = __webpack_require__(82);
  var createArrayIncludes = __webpack_require__(45);
  var speciesConstructor = __webpack_require__(86);
  var ArrayIterators = __webpack_require__(40);
  var Iterators = __webpack_require__(9);
  var $iterDetect = __webpack_require__(87);
  var setSpecies = __webpack_require__(88);
  var arrayFill = __webpack_require__(54);
  var arrayCopyWithin = __webpack_require__(89);
  var $DP = __webpack_require__(4);
  var $GOPD = __webpack_require__(90);
  var dP = $DP.f;
  var gOPD = $GOPD.f;
  var RangeError = global.RangeError;
  var TypeError = global.TypeError;
  var Uint8Array = global.Uint8Array;
  var ARRAY_BUFFER = 'ArrayBuffer';
  var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;
  var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
  var PROTOTYPE = 'prototype';
  var ArrayProto = Array[PROTOTYPE];
  var $ArrayBuffer = $buffer.ArrayBuffer;
  var $DataView = $buffer.DataView;
  var arrayForEach = createArrayMethod(0);
  var arrayFilter = createArrayMethod(2);
  var arraySome = createArrayMethod(3);
  var arrayEvery = createArrayMethod(4);
  var arrayFind = createArrayMethod(5);
  var arrayFindIndex = createArrayMethod(6);
  var arrayIncludes = createArrayIncludes(true);
  var arrayIndexOf = createArrayIncludes(false);
  var arrayValues = ArrayIterators.values;
  var arrayKeys = ArrayIterators.keys;
  var arrayEntries = ArrayIterators.entries;
  var arrayLastIndexOf = ArrayProto.lastIndexOf;
  var arrayReduce = ArrayProto.reduce;
  var arrayReduceRight = ArrayProto.reduceRight;
  var arrayJoin = ArrayProto.join;
  var arraySort = ArrayProto.sort;
  var arraySlice = ArrayProto.slice;
  var arrayToString = ArrayProto.toString;
  var arrayToLocaleString = ArrayProto.toLocaleString;
  var ITERATOR = wks('iterator');
  var TAG = wks('toStringTag');
  var TYPED_CONSTRUCTOR = uid('typed_constructor');
  var DEF_CONSTRUCTOR = uid('def_constructor');
  var ALL_CONSTRUCTORS = $typed.CONSTR;
  var TYPED_ARRAY = $typed.TYPED;
  var VIEW = $typed.VIEW;
  var WRONG_LENGTH = 'Wrong length!';

  var $map = createArrayMethod(1, function (O, length) {
    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
  });

  var LITTLE_ENDIAN = fails(function () {
    // eslint-disable-next-line no-undef
    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
  });

  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {
    new Uint8Array(1).set({});
  });

  var toOffset = function (it, BYTES) {
    var offset = toInteger(it);
    if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
    return offset;
  };

  var validate = function (it) {
    if (isObject(it) && TYPED_ARRAY in it) return it;
    throw TypeError(it + ' is not a typed array!');
  };

  var allocate = function (C, length) {
    if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
      throw TypeError('It is not a typed array constructor!');
    } return new C(length);
  };

  var speciesFromList = function (O, list) {
    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
  };

  var fromList = function (C, list) {
    var index = 0;
    var length = list.length;
    var result = allocate(C, length);
    while (length > index) result[index] = list[index++];
    return result;
  };

  var addGetter = function (it, key, internal) {
    dP(it, key, { get: function () { return this._d[internal]; } });
  };

  var $from = function from(source /* , mapfn, thisArg */) {
    var O = toObject(source);
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var iterFn = getIterFn(O);
    var i, length, values, result, step, iterator;
    if (iterFn != undefined && !isArrayIter(iterFn)) {
      for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
        values.push(step.value);
      } O = values;
    }
    if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);
    for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
      result[i] = mapping ? mapfn(O[i], i) : O[i];
    }
    return result;
  };

  var $of = function of(/* ...items */) {
    var index = 0;
    var length = arguments.length;
    var result = allocate(this, length);
    while (length > index) result[index] = arguments[index++];
    return result;
  };

  // iOS Safari 6.x fails here
  var TO_LOCALE_BUG = !!Uint8Array && fails(function () { arrayToLocaleString.call(new Uint8Array(1)); });

  var $toLocaleString = function toLocaleString() {
    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
  };

  var proto = {
    copyWithin: function copyWithin(target, start /* , end */) {
      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
    },
    every: function every(callbackfn /* , thisArg */) {
      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    fill: function fill(value /* , start, end */) { // eslint-disable-line no-unused-vars
      return arrayFill.apply(validate(this), arguments);
    },
    filter: function filter(callbackfn /* , thisArg */) {
      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
        arguments.length > 1 ? arguments[1] : undefined));
    },
    find: function find(predicate /* , thisArg */) {
      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    findIndex: function findIndex(predicate /* , thisArg */) {
      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    forEach: function forEach(callbackfn /* , thisArg */) {
      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    indexOf: function indexOf(searchElement /* , fromIndex */) {
      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    includes: function includes(searchElement /* , fromIndex */) {
      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    join: function join(separator) { // eslint-disable-line no-unused-vars
      return arrayJoin.apply(validate(this), arguments);
    },
    lastIndexOf: function lastIndexOf(searchElement /* , fromIndex */) { // eslint-disable-line no-unused-vars
      return arrayLastIndexOf.apply(validate(this), arguments);
    },
    map: function map(mapfn /* , thisArg */) {
      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    reduce: function reduce(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduce.apply(validate(this), arguments);
    },
    reduceRight: function reduceRight(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduceRight.apply(validate(this), arguments);
    },
    reverse: function reverse() {
      var that = this;
      var length = validate(that).length;
      var middle = Math.floor(length / 2);
      var index = 0;
      var value;
      while (index < middle) {
        value = that[index];
        that[index++] = that[--length];
        that[length] = value;
      } return that;
    },
    some: function some(callbackfn /* , thisArg */) {
      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    sort: function sort(comparefn) {
      return arraySort.call(validate(this), comparefn);
    },
    subarray: function subarray(begin, end) {
      var O = validate(this);
      var length = O.length;
      var $begin = toAbsoluteIndex(begin, length);
      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
        O.buffer,
        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
        toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin)
      );
    }
  };

  var $slice = function slice(start, end) {
    return speciesFromList(this, arraySlice.call(validate(this), start, end));
  };

  var $set = function set(arrayLike /* , offset */) {
    validate(this);
    var offset = toOffset(arguments[1], 1);
    var length = this.length;
    var src = toObject(arrayLike);
    var len = toLength(src.length);
    var index = 0;
    if (len + offset > length) throw RangeError(WRONG_LENGTH);
    while (index < len) this[offset + index] = src[index++];
  };

  var $iterators = {
    entries: function entries() {
      return arrayEntries.call(validate(this));
    },
    keys: function keys() {
      return arrayKeys.call(validate(this));
    },
    values: function values() {
      return arrayValues.call(validate(this));
    }
  };

  var isTAIndex = function (target, key) {
    return isObject(target)
      && target[TYPED_ARRAY]
      && typeof key != 'symbol'
      && key in target
      && String(+key) == String(key);
  };
  var $getDesc = function getOwnPropertyDescriptor(target, key) {
    return isTAIndex(target, key = toPrimitive(key, true))
      ? propertyDesc(2, target[key])
      : gOPD(target, key);
  };
  var $setDesc = function defineProperty(target, key, desc) {
    if (isTAIndex(target, key = toPrimitive(key, true))
      && isObject(desc)
      && has(desc, 'value')
      && !has(desc, 'get')
      && !has(desc, 'set')
      // TODO: add validation descriptor w/o calling accessors
      && !desc.configurable
      && (!has(desc, 'writable') || desc.writable)
      && (!has(desc, 'enumerable') || desc.enumerable)
    ) {
      target[key] = desc.value;
      return target;
    } return dP(target, key, desc);
  };

  if (!ALL_CONSTRUCTORS) {
    $GOPD.f = $getDesc;
    $DP.f = $setDesc;
  }

  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
    getOwnPropertyDescriptor: $getDesc,
    defineProperty: $setDesc
  });

  if (fails(function () { arrayToString.call({}); })) {
    arrayToString = arrayToLocaleString = function toString() {
      return arrayJoin.call(this);
    };
  }

  var $TypedArrayPrototype$ = redefineAll({}, proto);
  redefineAll($TypedArrayPrototype$, $iterators);
  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
  redefineAll($TypedArrayPrototype$, {
    slice: $slice,
    set: $set,
    constructor: function () { /* noop */ },
    toString: arrayToString,
    toLocaleString: $toLocaleString
  });
  addGetter($TypedArrayPrototype$, 'buffer', 'b');
  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
  addGetter($TypedArrayPrototype$, 'length', 'e');
  dP($TypedArrayPrototype$, TAG, {
    get: function () { return this[TYPED_ARRAY]; }
  });

  // eslint-disable-next-line max-statements
  module.exports = function (KEY, BYTES, wrapper, CLAMPED) {
    CLAMPED = !!CLAMPED;
    var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';
    var GETTER = 'get' + KEY;
    var SETTER = 'set' + KEY;
    var TypedArray = global[NAME];
    var Base = TypedArray || {};
    var TAC = TypedArray && getPrototypeOf(TypedArray);
    var FORCED = !TypedArray || !$typed.ABV;
    var O = {};
    var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
    var getter = function (that, index) {
      var data = that._d;
      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
    };
    var setter = function (that, index, value) {
      var data = that._d;
      if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
    };
    var addElement = function (that, index) {
      dP(that, index, {
        get: function () {
          return getter(this, index);
        },
        set: function (value) {
          return setter(this, index, value);
        },
        enumerable: true
      });
    };
    if (FORCED) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME, '_d');
        var index = 0;
        var offset = 0;
        var buffer, byteLength, length, klass;
        if (!isObject(data)) {
          length = toIndex(data);
          byteLength = length * BYTES;
          buffer = new $ArrayBuffer(byteLength);
        } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          buffer = data;
          offset = toOffset($offset, BYTES);
          var $len = data.byteLength;
          if ($length === undefined) {
            if ($len % BYTES) throw RangeError(WRONG_LENGTH);
            byteLength = $len - offset;
            if (byteLength < 0) throw RangeError(WRONG_LENGTH);
          } else {
            byteLength = toLength($length) * BYTES;
            if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
          }
          length = byteLength / BYTES;
        } else if (TYPED_ARRAY in data) {
          return fromList(TypedArray, data);
        } else {
          return $from.call(TypedArray, data);
        }
        hide(that, '_d', {
          b: buffer,
          o: offset,
          l: byteLength,
          e: length,
          v: new $DataView(buffer)
        });
        while (index < length) addElement(that, index++);
      });
      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
      hide(TypedArrayPrototype, 'constructor', TypedArray);
    } else if (!fails(function () {
      TypedArray(1);
    }) || !fails(function () {
      new TypedArray(-1); // eslint-disable-line no-new
    }) || !$iterDetect(function (iter) {
      new TypedArray(); // eslint-disable-line no-new
      new TypedArray(null); // eslint-disable-line no-new
      new TypedArray(1.5); // eslint-disable-line no-new
      new TypedArray(iter); // eslint-disable-line no-new
    }, true)) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME);
        var klass;
        // `ws` module bug, temporarily remove validation length for Uint8Array
        // https://github.com/websockets/ws/pull/645
        if (!isObject(data)) return new Base(toIndex(data));
        if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          return $length !== undefined
            ? new Base(data, toOffset($offset, BYTES), $length)
            : $offset !== undefined
              ? new Base(data, toOffset($offset, BYTES))
              : new Base(data);
        }
        if (TYPED_ARRAY in data) return fromList(TypedArray, data);
        return $from.call(TypedArray, data);
      });
      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {
        if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
      });
      TypedArray[PROTOTYPE] = TypedArrayPrototype;
      if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
    }
    var $nativeIterator = TypedArrayPrototype[ITERATOR];
    var CORRECT_ITER_NAME = !!$nativeIterator
      && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);
    var $iterator = $iterators.values;
    hide(TypedArray, TYPED_CONSTRUCTOR, true);
    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
    hide(TypedArrayPrototype, VIEW, true);
    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

    if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
      dP(TypedArrayPrototype, TAG, {
        get: function () { return NAME; }
      });
    }

    O[NAME] = TypedArray;

    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

    $export($export.S, NAME, {
      BYTES_PER_ELEMENT: BYTES
    });

    $export($export.S + $export.F * fails(function () { Base.of.call(TypedArray, 1); }), NAME, {
      from: $from,
      of: $of
    });

    if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

    $export($export.P, NAME, proto);

    setSpecies(NAME);

    $export($export.P + $export.F * FORCED_SET, NAME, { set: $set });

    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

    if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;

    $export($export.P + $export.F * fails(function () {
      new TypedArray(1).slice();
    }), NAME, { slice: $slice });

    $export($export.P + $export.F * (fails(function () {
      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
    }) || !fails(function () {
      TypedArrayPrototype.toLocaleString.call([1, 2]);
    })), NAME, { toLocaleString: $toLocaleString });

    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
    if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
  };
} else module.exports = function () { /* empty */ };


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(2);
var DESCRIPTORS = __webpack_require__(1);
var LIBRARY = __webpack_require__(17);
var $typed = __webpack_require__(49);
var hide = __webpack_require__(3);
var redefineAll = __webpack_require__(50);
var fails = __webpack_require__(8);
var anInstance = __webpack_require__(51);
var toInteger = __webpack_require__(7);
var toLength = __webpack_require__(5);
var toIndex = __webpack_require__(52);
var gOPN = __webpack_require__(53).f;
var dP = __webpack_require__(4).f;
var arrayFill = __webpack_require__(54);
var setToStringTag = __webpack_require__(34);
var ARRAY_BUFFER = 'ArrayBuffer';
var DATA_VIEW = 'DataView';
var PROTOTYPE = 'prototype';
var WRONG_LENGTH = 'Wrong length!';
var WRONG_INDEX = 'Wrong index!';
var $ArrayBuffer = global[ARRAY_BUFFER];
var $DataView = global[DATA_VIEW];
var Math = global.Math;
var RangeError = global.RangeError;
// eslint-disable-next-line no-shadow-restricted-names
var Infinity = global.Infinity;
var BaseBuffer = $ArrayBuffer;
var abs = Math.abs;
var pow = Math.pow;
var floor = Math.floor;
var log = Math.log;
var LN2 = Math.LN2;
var BUFFER = 'buffer';
var BYTE_LENGTH = 'byteLength';
var BYTE_OFFSET = 'byteOffset';
var $BUFFER = DESCRIPTORS ? '_b' : BUFFER;
var $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH;
var $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET;

// IEEE754 conversions based on https://github.com/feross/ieee754
function packIEEE754(value, mLen, nBytes) {
  var buffer = new Array(nBytes);
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;
  var i = 0;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  var e, m, c;
  value = abs(value);
  // eslint-disable-next-line no-self-compare
  if (value != value || value === Infinity) {
    // eslint-disable-next-line no-self-compare
    m = value != value ? 1 : 0;
    e = eMax;
  } else {
    e = floor(log(value) / LN2);
    if (value * (c = pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }
    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * pow(2, eBias - 1) * pow(2, mLen);
      e = 0;
    }
  }
  for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
  e = e << mLen | m;
  eLen += mLen;
  for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
  buffer[--i] |= s * 128;
  return buffer;
}
function unpackIEEE754(buffer, mLen, nBytes) {
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = eLen - 7;
  var i = nBytes - 1;
  var s = buffer[i--];
  var e = s & 127;
  var m;
  s >>= 7;
  for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : s ? -Infinity : Infinity;
  } else {
    m = m + pow(2, mLen);
    e = e - eBias;
  } return (s ? -1 : 1) * m * pow(2, e - mLen);
}

function unpackI32(bytes) {
  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
}
function packI8(it) {
  return [it & 0xff];
}
function packI16(it) {
  return [it & 0xff, it >> 8 & 0xff];
}
function packI32(it) {
  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
}
function packF64(it) {
  return packIEEE754(it, 52, 8);
}
function packF32(it) {
  return packIEEE754(it, 23, 4);
}

function addGetter(C, key, internal) {
  dP(C[PROTOTYPE], key, { get: function () { return this[internal]; } });
}

function get(view, bytes, index, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = store.slice(start, start + bytes);
  return isLittleEndian ? pack : pack.reverse();
}
function set(view, bytes, index, conversion, value, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = conversion(+value);
  for (var i = 0; i < bytes; i++) store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
}

if (!$typed.ABV) {
  $ArrayBuffer = function ArrayBuffer(length) {
    anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
    var byteLength = toIndex(length);
    this._b = arrayFill.call(new Array(byteLength), 0);
    this[$LENGTH] = byteLength;
  };

  $DataView = function DataView(buffer, byteOffset, byteLength) {
    anInstance(this, $DataView, DATA_VIEW);
    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
    var bufferLength = buffer[$LENGTH];
    var offset = toInteger(byteOffset);
    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
    this[$BUFFER] = buffer;
    this[$OFFSET] = offset;
    this[$LENGTH] = byteLength;
  };

  if (DESCRIPTORS) {
    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
    addGetter($DataView, BUFFER, '_b');
    addGetter($DataView, BYTE_LENGTH, '_l');
    addGetter($DataView, BYTE_OFFSET, '_o');
  }

  redefineAll($DataView[PROTOTYPE], {
    getInt8: function getInt8(byteOffset) {
      return get(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset) {
      return get(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1]));
    },
    getUint32: function getUint32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
    },
    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
    },
    setInt8: function setInt8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setUint8: function setUint8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packF32, value, arguments[2]);
    },
    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
      set(this, 8, byteOffset, packF64, value, arguments[2]);
    }
  });
} else {
  if (!fails(function () {
    $ArrayBuffer(1);
  }) || !fails(function () {
    new $ArrayBuffer(-1); // eslint-disable-line no-new
  }) || fails(function () {
    new $ArrayBuffer(); // eslint-disable-line no-new
    new $ArrayBuffer(1.5); // eslint-disable-line no-new
    new $ArrayBuffer(NaN); // eslint-disable-line no-new
    return $ArrayBuffer.name != ARRAY_BUFFER;
  })) {
    $ArrayBuffer = function ArrayBuffer(length) {
      anInstance(this, $ArrayBuffer);
      return new BaseBuffer(toIndex(length));
    };
    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
    for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
      if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);
    }
    if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;
  }
  // iOS Safari 7.x bug
  var view = new $DataView(new $ArrayBuffer(2));
  var $setInt8 = $DataView[PROTOTYPE].setInt8;
  view.setInt8(0, 2147483648);
  view.setInt8(1, 2147483649);
  if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {
    setInt8: function setInt8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    }
  }, true);
}
setToStringTag($ArrayBuffer, ARRAY_BUFFER);
setToStringTag($DataView, DATA_VIEW);
hide($DataView[PROTOTYPE], $typed.VIEW, true);
exports[ARRAY_BUFFER] = $ArrayBuffer;
exports[DATA_VIEW] = $DataView;


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(9);
var ITERATOR = __webpack_require__(0)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(36);
var ITERATOR = __webpack_require__(0)('iterator');
var Iterators = __webpack_require__(9);
module.exports = __webpack_require__(16).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(30);
var IObject = __webpack_require__(41);
var toObject = __webpack_require__(12);
var toLength = __webpack_require__(5);
var asc = __webpack_require__(83);
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(84);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(13);
var isArray = __webpack_require__(85);
var SPECIES = __webpack_require__(0)('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(29);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(6);
var aFunction = __webpack_require__(42);
var SPECIES = __webpack_require__(0)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(0)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(2);
var dP = __webpack_require__(4);
var DESCRIPTORS = __webpack_require__(1);
var SPECIES = __webpack_require__(0)('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)

var toObject = __webpack_require__(12);
var toAbsoluteIndex = __webpack_require__(21);
var toLength = __webpack_require__(5);

module.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
  var O = toObject(this);
  var len = toLength(O.length);
  var to = toAbsoluteIndex(target, len);
  var from = toAbsoluteIndex(start, len);
  var end = arguments.length > 2 ? arguments[2] : undefined;
  var count = Math.min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
  var inc = 1;
  if (from < to && to < from + count) {
    inc = -1;
    from += count - 1;
    to += count - 1;
  }
  while (count-- > 0) {
    if (from in O) O[to] = O[from];
    else delete O[to];
    to += inc;
    from += inc;
  } return O;
};


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(47);
var createDesc = __webpack_require__(18);
var toIObject = __webpack_require__(15);
var toPrimitive = __webpack_require__(27);
var has = __webpack_require__(11);
var IE8_DOM_DEFINE = __webpack_require__(37);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(1) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_9c4273f2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_9c4273f2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_9c4273f2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_9c4273f2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6eb51f6a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6eb51f6a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6eb51f6a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6eb51f6a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_82e27f76_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_82e27f76_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_82e27f76_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_82e27f76_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "components", function() { return /* binding */ components; });
__webpack_require__.d(__webpack_exports__, "strangeSelect", function() { return /* reexport */ src; });
__webpack_require__.d(__webpack_exports__, "strangeUploadImageAnt", function() { return /* reexport */ strange_upload_image_ant_src; });
__webpack_require__.d(__webpack_exports__, "strangeUploadRecordingAnt", function() { return /* reexport */ strange_upload_recording_ant_src; });
__webpack_require__.d(__webpack_exports__, "strange_prompt_box_ant", function() { return /* reexport */ strange_prompt_box_src; });
__webpack_require__.d(__webpack_exports__, "strange_modal", function() { return /* reexport */ strange_modal_src; });

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__(57);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__(39);

// EXTERNAL MODULE: external {"root":"Vue","commonjs":"vue","commonjs2":"vue","amd":"vue"}
var external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_ = __webpack_require__(55);
var external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default = /*#__PURE__*/__webpack_require__.n(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}
// EXTERNAL MODULE: ./node_modules/theme-class-generator/index.js
var theme_class_generator = __webpack_require__(56);
var theme_class_generator_default = /*#__PURE__*/__webpack_require__.n(theme_class_generator);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.object.values.js
var es7_object_values = __webpack_require__(65);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.to-string.js
var es6_regexp_to_string = __webpack_require__(67);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__(69);

// CONCATENATED MODULE: ./src/strange-components/src/helpers/utils.js




var deepClone = function deepClone(obj) {
  if (!(obj instanceof Array || obj instanceof Object)) {
    console.warn('AMX UI@deep-clone@ can only deepCopy array or plain object');
    return {};
  } else return JSON.parse(JSON.stringify(obj));
};
var getDataType = function getDataType(o) {
  // Author: yuhaijun
  // email: yuhaijun@rongcapital.cn
  // get data type
  var regStr = /[^, ]+/g;
  var type = {};
  'Boolean Number String Function Array Date RegExp Object Error'.replace(regStr, function (name) {
    type['[object ' + name + ']'] = name.toLowerCase();
  });
  return type[Object.prototype.toString.call(o)];
};
if (!window.adminUiNameSpace) window.adminUiNameSpace = {};
var namespace = {
  set: function set(key, value) {
    window.adminUiNameSpace[key] = value;
    return window.adminUiNameSpace[key];
  },
  get: function get(key) {
    return window.adminUiNameSpace[key];
  },
  remove: function remove(key) {
    return delete window.adminUiNameSpace[key];
  }
};
if (!namespace.get('heartbeatStack')) namespace.set('heartbeatStack', {});
var stack = namespace.get('heartbeatStack');

if (!namespace.get('heartbeat')) {
  namespace.set('heartbeat', window.setInterval(function () {
    for (var _i = 0, _Object$values = Object.values(stack); _i < _Object$values.length; _i++) {
      var f = _Object$values[_i];
      f();
    }
  }, 300)); // namespace.set('heartbeat', window.requestAnimationFrame(function heatbeat () {
  //   for (let f of Object.values(stack)) f()
  //   namespace.set('heartbeat', window.requestAnimationFrame(heatbeat))
  // }))
}

var heartbeat = {
  add: function add(f, id) {
    stack[id] = f;
  },
  remove: function remove(id) {
    delete stack[id];
  }
};
var isEmptyString = function isEmptyString(str) {
  return str === '' || /^\s+$/g.test(str);
};
// CONCATENATED MODULE: ./src/strange-components/src/theme/src/default.js
/* harmony default export */ var src_default = ({
  theme: {
    colors: {
      // 彩色配置，默认配置如下
      // primary: '#1c86e2',
      // success: '#0cb470',
      // danger: '#ea3a46',
      // warning: '#f5ae08',
      // info: '#68217a'
      primary: '#2196f3',
      success: '#4caf50',
      danger: '#f44336',
      warning: '#ff9800',
      info: '#607d8b'
    },
    shadows: {// 阴影配置，默认配置如下
      // primary: '0 0 4px #1c86e2',
      // info: '0 0 4px #68217a',
      // warning: '0 0 4px #f5ae08',
      // danger: '0 0 4px #ea3a46',
      // success: '0 0 4px #0cb470'
    },
    radiuses: {
      small: '3px',
      large: '5px'
    }
  },
  prefix: 'au-theme',
  // 样式类的前缀
  lightnessReverse: false,
  // 反转lightness排序（黑白主题）
  colorTopBottom: 5,
  // top和bottom颜色距离纯黑和纯白的lightness的距离，越小越接近纯黑纯白
  colorUpDown: 10,
  // 彩色上下接近色与正色的lightness距离
  baseColorLeve: 12,
  // 无彩色分级数量
  baseColorHue: '20%',
  // 无彩色饱和度
  baseShadowOpacity: 0.2,
  // 无彩色阴影不透明度
  colorShadowOpacity: 0.6 // 彩色阴影不透明度

});
// CONCATENATED MODULE: ./src/strange-components/src/theme/src/theme.js





function isObject(obj, name) {
  var res = _typeof(obj) === 'object';

  if (!res) {
    console.error("AMX UI @ theme-system @ theme config ".concat(name || '', " should be an object"));
  }

  return res;
}

function absorb(base, target, name) {
  if (!isObject(base, name) || !isObject(target, name)) return;

  for (var key in base) {
    if (_typeof(base[key]) !== 'object') {
      base[key] = target[key] || base[key];
    } else if (base[key] && target[key]) {
      absorb(base[key], target[key], key);
    }
  }
}

/* harmony default export */ var theme = (function (config) {
  var finalConfig = deepClone(src_default);
  absorb(finalConfig, config || {}); // save theme to namespace

  namespace.set('theme', finalConfig);
  var styleTag = document.querySelector('style#strange-components-theme') || document.createElement('style');
  styleTag.id = 'strange-components-theme';
  styleTag.innerHTML = theme_class_generator_default()(finalConfig);
  document.body.appendChild(styleTag);
});
// CONCATENATED MODULE: ./src/strange-components/src/theme/index.js

// CONCATENATED MODULE: ./src/strange-components/src/directives/index.js
// import Popover from './src/popover'
/* harmony default export */ var directives = ({// Popover
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/strange-components/src/components/strange-select/src/index.vue?vue&type=template&id=4a8e1104&scoped=true&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "strange-select" },
    _vm._l(_vm.options, function(a, index) {
      return _c(
        "div",
        {
          key: index,
          staticClass: "strange-select-list",
          on: {
            click: function($event) {
              return _vm.selectClick(a.value)
            }
          }
        },
        [
          _c(
            "div",
            {
              staticClass: "strange-select-list-icon",
              class: { "strange-select-list-selected": a.value === _vm.value }
            },
            [_c("div")]
          ),
          _vm._v(" "),
          _c("span", { staticClass: "strange-select-list-text" }, [
            _vm._v(_vm._s(a.label))
          ])
        ]
      )
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/strange-components/src/components/strange-select/src/index.vue?vue&type=template&id=4a8e1104&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/strange-components/src/components/strange-select/src/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var srcvue_type_script_lang_js_ = ({
  name: "strange-select",
  components: {},
  props: {
    options: {
      type: Array
    },
    value: {
      type: String
    }
  },
  model: {
    prop: "value",
    event: "update"
  },
  data: function data() {
    return {};
  },
  methods: {
    selectClick: function selectClick(value) {
      this.$emit("update", value);
      this.$emit('change', value);
    }
  },
  created: function created() {},
  mounted: function mounted() {},
  watch: {}
});
// CONCATENATED MODULE: ./src/strange-components/src/components/strange-select/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var strange_select_srcvue_type_script_lang_js_ = (srcvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/strange-components/src/components/strange-select/src/index.vue?vue&type=style&index=0&id=4a8e1104&scoped=true&lang=css&
var srcvue_type_style_index_0_id_4a8e1104_scoped_true_lang_css_ = __webpack_require__(75);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/strange-components/src/components/strange-select/src/index.vue






/* normalize component */

var component = normalizeComponent(
  strange_select_srcvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "4a8e1104",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/strange-components/src/components/strange-select/src/index.vue"
/* harmony default export */ var src = (component.exports);
// CONCATENATED MODULE: ./src/strange-components/src/components/strange-select/index.js
/*
 * @Author: PiPi
 * @Email: pisenliang@gmail.com
 * @Github: https://github.com/SenLiangpi
 * @Website: https://senliangpi.github.io/blog/#/
 * @Date: 2020-08-03 17:03:15
 * @LastEditors: PiPi
 * @LastEditTime: 2020-08-03 17:05:18
 */

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/strange-components/src/components/strange-upload-image-ant/src/index.vue?vue&type=template&id=3a2110f1&scoped=true&
var srcvue_type_template_id_3a2110f1_scoped_true_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "strange-upload-image-ant" },
    [
      _vm.examine
        ? _c(
            "div",
            { staticClass: "upload-div" },
            [
              _c(
                "a-upload",
                {
                  staticClass: "upload",
                  attrs: {
                    disabled: _vm.disabled || false,
                    accept: "image/*",
                    "file-list": [],
                    "before-upload": _vm.beforeUpload
                  }
                },
                [
                  _c(
                    "div",
                    { staticClass: "upload-style" },
                    [
                      _c("a-icon", {
                        staticStyle: {
                          "font-size": "10vw",
                          margin: "5vw auto 0",
                          display: "block"
                        },
                        attrs: { type: "plus" }
                      }),
                      _vm._v(" "),
                      _c(
                        "p",
                        {
                          staticStyle: {
                            "font-size": "3.4vw",
                            "text-align": "center"
                          }
                        },
                        [_vm._v("上传图片")]
                      )
                    ],
                    1
                  )
                ]
              )
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm._l(_vm.value, function(a, index) {
        return _c(
          "div",
          {
            key: index,
            staticClass: "upload-image-list",
            style: { backgroundImage: "url(" + a.url + ")" },
            on: {
              click: function($event) {
                return _vm.lookOver(a)
              }
            }
          },
          [
            _vm.examine
              ? _c("a-icon", {
                  staticStyle: {
                    position: "absolute",
                    color: "#d0021b",
                    "font-size": "5vw",
                    top: "-1.5vw",
                    right: "-1.5vw"
                  },
                  attrs: { type: "minus-circle", theme: "filled" },
                  on: {
                    click: function($event) {
                      $event.stopPropagation()
                      return _vm.listsDelete(index)
                    }
                  }
                })
              : _vm._e()
          ],
          1
        )
      })
    ],
    2
  )
}
var srcvue_type_template_id_3a2110f1_scoped_true_staticRenderFns = []
srcvue_type_template_id_3a2110f1_scoped_true_render._withStripped = true


// CONCATENATED MODULE: ./src/strange-components/src/components/strange-upload-image-ant/src/index.vue?vue&type=template&id=3a2110f1&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/strange-components/src/components/strange-upload-image-ant/src/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var strange_upload_image_ant_srcvue_type_script_lang_js_ = ({
  name: "strange-upload-image-ant",
  components: {},
  props: {
    value: {
      type: Array
    },
    disabled: {
      type: Boolean
    },
    examine: {
      type: Boolean
    }
  },
  model: {
    prop: "value",
    event: "update"
  },
  data: function data() {
    return {};
  },
  methods: {
    lookOver: function lookOver(key) {
      this.$emit("lookOver", key);
    },
    beforeUpload: function beforeUpload(file) {
      this.$emit('change', file);
      return false;
    },
    listsDelete: function listsDelete(index) {
      this.value.splice(index, 1);
      this.$emit("update", this.value);
    }
  },
  created: function created() {},
  mounted: function mounted() {},
  watch: {}
});
// CONCATENATED MODULE: ./src/strange-components/src/components/strange-upload-image-ant/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_strange_upload_image_ant_srcvue_type_script_lang_js_ = (strange_upload_image_ant_srcvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/strange-components/src/components/strange-upload-image-ant/src/index.vue?vue&type=style&index=0&id=3a2110f1&scoped=true&lang=css&
var srcvue_type_style_index_0_id_3a2110f1_scoped_true_lang_css_ = __webpack_require__(76);

// CONCATENATED MODULE: ./src/strange-components/src/components/strange-upload-image-ant/src/index.vue






/* normalize component */

var src_component = normalizeComponent(
  components_strange_upload_image_ant_srcvue_type_script_lang_js_,
  srcvue_type_template_id_3a2110f1_scoped_true_render,
  srcvue_type_template_id_3a2110f1_scoped_true_staticRenderFns,
  false,
  null,
  "3a2110f1",
  null
  
)

/* hot reload */
if (false) { var src_api; }
src_component.options.__file = "src/strange-components/src/components/strange-upload-image-ant/src/index.vue"
/* harmony default export */ var strange_upload_image_ant_src = (src_component.exports);
// CONCATENATED MODULE: ./src/strange-components/src/components/strange-upload-image-ant/index.js
/*
 * @Author: PiPi
 * @Email: pisenliang@gmail.com
 * @Github: https://github.com/SenLiangpi
 * @Website: https://senliangpi.github.io/blog/#/
 * @Date: 2020-08-04 13:45:00
 * @LastEditors: PiPi
 * @LastEditTime: 2020-08-04 13:45:10
 */

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/strange-components/src/components/strange-upload-recording-ant/src/index.vue?vue&type=template&id=9c4273f2&scoped=true&
var srcvue_type_template_id_9c4273f2_scoped_true_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "strange-upload-recording-ant" },
    [
      _vm.examine
        ? _c(
            "div",
            { staticClass: "recording", on: { click: _vm.recordingClick } },
            [
              _c("div", { staticClass: "recording-div" }, [
                _c(
                  "div",
                  {
                    staticClass: "recording-icon",
                    class: { "recording-type": _vm.recordingType }
                  },
                  [_c("div")]
                ),
                _vm._v(" "),
                _c(
                  "p",
                  {
                    staticStyle: {
                      "font-size": "3.4vw",
                      "text-align": "center"
                    }
                  },
                  [_vm._v(_vm._s(_vm.formartTime(_vm.dateTime)))]
                )
              ])
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm._l(_vm.value, function(a, index) {
        return _c(
          "div",
          { key: index, staticClass: "audio-list" },
          [
            _c(
              "div",
              { staticClass: "audio-list-div" },
              [
                _c("a-icon", {
                  staticStyle: {
                    color: "#4397d4",
                    "font-size": "12vw",
                    display: "block",
                    margin: "6vw auto 0"
                  },
                  attrs: { type: _vm.iconType(a.url) },
                  on: {
                    click: function($event) {
                      return _vm.audioButton(a, index)
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "p",
                  {
                    staticStyle: {
                      "font-size": "3.4vw",
                      "text-align": "center"
                    }
                  },
                  [
                    _vm._v(
                      _vm._s(_vm.formartTime(a.time)) +
                        "/" +
                        _vm._s(_vm.formartTime(a.duration))
                    )
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _vm.examine
              ? _c("a-icon", {
                  staticStyle: {
                    position: "absolute",
                    color: "#d0021b",
                    "font-size": "5vw",
                    top: "-1.5vw",
                    right: "-1.5vw"
                  },
                  attrs: { type: "minus-circle", theme: "filled" },
                  on: {
                    click: function($event) {
                      return _vm.listsDelete(index)
                    }
                  }
                })
              : _vm._e()
          ],
          1
        )
      }),
      _vm._v(" "),
      _c("audio", {
        ref: "audioPlayer",
        staticStyle: { display: "none" },
        attrs: { controls: "" }
      })
    ],
    2
  )
}
var srcvue_type_template_id_9c4273f2_scoped_true_staticRenderFns = []
srcvue_type_template_id_9c4273f2_scoped_true_render._withStripped = true


// CONCATENATED MODULE: ./src/strange-components/src/components/strange-upload-recording-ant/src/index.vue?vue&type=template&id=9c4273f2&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.typed.float32-array.js
var es6_typed_float32_array = __webpack_require__(77);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
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
  return Constructor;
}
// CONCATENATED MODULE: ./src/strange-components/src/components/strange-upload-recording-ant/src/recording.js




/*
 * @Author: PiPi
 * @Email: pisenliang@gmail.com
 * @Github: https://github.com/SenLiangpi
 * @Website: https://senliangpi.github.io/blog/#/
 * @Date: 2020-08-05 13:49:33
 * @LastEditors: PiPi
 * @LastEditTime: 2020-08-13 21:01:15
 */
var recording_recording = /*#__PURE__*/function () {
  function recording() {
    _classCallCheck(this, recording);
  }

  _createClass(recording, [{
    key: "authorization",
    value: function authorization(recordingTime) {
      this.recordingTime = recordingTime;

      if (navigator.mediaDevices.getUserMedia) {// const constraints = { audio: true };
        // navigator.mediaDevices.getUserMedia(constraints).then(stream=>{
        // })
      } else {
        return false;
      }
    }
  }, {
    key: "start",
    value: function start() {
      var _this2 = this;

      var constraints = {
        audio: true
      };
      navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
        _this2.context = new (window.AudioContext || window.webkitAudioContext)();
        _this2.audioInput = _this2.context.createMediaStreamSource(stream);
        _this2.recorder = _this2.context.createScriptProcessor();

        var volume = _this2.context.createGain();

        _this2.audioInput.connect(volume);

        console.log(_this2.context.sampleRate);
        var _this = _this2;
        _this2.audioData = {
          size: 0,
          //录音文件长度
          buffer: [],
          //录音缓存
          inputSampleRate: _this.context.sampleRate,
          //输入采样率
          inputSampleBits: 16,
          //输入采样数位 8, 16
          outputSampleRate: 8000,
          //输出采样率
          oututSampleBits: 16,
          //输出采样数位 8, 16
          input: function input(data) {
            this.buffer.push(new Float32Array(data));
            this.size += data.length;
          },
          compress: function compress() {
            //合并压缩
            //合并
            var data = new Float32Array(this.size);
            var offset = 0;

            for (var i = 0; i < this.buffer.length; i++) {
              data.set(this.buffer[i], offset);
              offset += this.buffer[i].length;
            } //压缩


            var compression = parseInt(this.inputSampleRate / this.outputSampleRate);
            var length = data.length / compression;
            var result = new Float32Array(length);
            var index = 0,
                j = 0;

            while (index < length) {
              result[index] = data[j];
              j += compression;
              index++;
            }

            return result;
          },
          encodeWAV: function encodeWAV() {
            var sampleRate = Math.min(this.inputSampleRate, this.outputSampleRate);
            var sampleBits = Math.min(this.inputSampleBits, this.oututSampleBits);
            var bytes = this.compress();
            var dataLength = bytes.length * (sampleBits / 8);
            var buffer = new ArrayBuffer(44 + dataLength);
            var data = new DataView(buffer);
            var channelCount = 1; //单声道

            var offset = 0;

            var writeString = function writeString(str) {
              for (var i = 0; i < str.length; i++) {
                data.setUint8(offset + i, str.charCodeAt(i));
              }
            }; // 资源交换文件标识符


            writeString('RIFF');
            offset += 4; // 下个地址开始到文件尾总字节数,即文件大小-8

            data.setUint32(offset, 36 + dataLength, true);
            offset += 4; // WAV文件标志

            writeString('WAVE');
            offset += 4; // 波形格式标志

            writeString('fmt ');
            offset += 4; // 过滤字节,一般为 0x10 = 16

            data.setUint32(offset, 16, true);
            offset += 4; // 格式类别 (PCM形式采样数据)

            data.setUint16(offset, 1, true);
            offset += 2; // 通道数

            data.setUint16(offset, channelCount, true);
            offset += 2; // 采样率,每秒样本数,表示每个通道的播放速度

            data.setUint32(offset, sampleRate, true);
            offset += 4; // 波形数据传输率 (每秒平均字节数) 单声道×每秒数据位数×每样本数据位/8

            data.setUint32(offset, channelCount * sampleRate * (sampleBits / 8), true);
            offset += 4; // 快数据调整数 采样一次占用字节数 单声道×每样本的数据位数/8

            data.setUint16(offset, channelCount * (sampleBits / 8), true);
            offset += 2; // 每样本数据位数

            data.setUint16(offset, sampleBits, true);
            offset += 2; // 数据标识符

            writeString('data');
            offset += 4; // 采样数据总数,即数据总大小-44

            data.setUint32(offset, dataLength, true);
            offset += 4; // 写入采样数据

            if (sampleBits === 8) {
              for (var i = 0; i < bytes.length; i++, offset++) {
                var s = Math.max(-1, Math.min(1, bytes[i]));
                var val = s < 0 ? s * 0x8000 : s * 0x7FFF;
                val = parseInt(255 / (65535 / (val + 32768)));
                data.setInt8(offset, val, true);
              }
            } else {
              for (var i = 0; i < bytes.length; i++, offset += 2) {
                var s = Math.max(-1, Math.min(1, bytes[i]));
                data.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7FFF, true);
              }
            } // return new Blob([data], { type: 'audio/wav' });


            return new File([data], "foo.wav", {
              type: "audio/mp3"
            });
          }
        };

        _this2.recorder.onaudioprocess = function (e) {
          _this.recordingTime(_this.context.currentTime);

          _this.audioData.input(e.inputBuffer.getChannelData(0));
        };

        _this2.audioInput.connect(_this2.recorder);

        _this2.recorder.connect(_this2.context.destination);
      });
    }
  }, {
    key: "end",
    value: function end() {
      this.context.close();
      this.recorder.disconnect();
      var file = this.audioData.encodeWAV();
      this.recordingTime(0); // console.log(window.URL.createObjectURL(this.audioData.encodeWAV()))

      return file;
    }
  }]);

  return recording;
}();
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/strange-components/src/components/strange-upload-recording-ant/src/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
function formartTime(time) {
  // console.log(time);
  if (time > 0) {
    var m = Math.floor(time / 60);
    var s = Math.floor(time % 60);
    return (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
  } else {
    return '00:00';
  }
}


/* harmony default export */ var strange_upload_recording_ant_srcvue_type_script_lang_js_ = ({
  name: "strange-upload-recording-ant",
  components: {},
  props: {
    value: {
      type: Array
    },
    disabled: {
      type: Boolean
    },
    examine: {
      type: Boolean
    }
  },
  model: {
    prop: "value",
    event: "update"
  },
  data: function data() {
    return {
      newRecording: false,
      recordingType: false,
      dateTime: 0,
      recordingTime: '',
      audioList: [],
      formartTime: formartTime,
      audioListType: '',
      audioListIndex: ''
    };
  },
  methods: {
    iconType: function iconType(url) {
      if (this.audioListType == url) {
        return 'pause';
      } else {
        return 'caret-right';
      }
    },
    resetTime: function resetTime() {
      for (var a in this.value) {
        this.value[a].time = 0;
      }

      this.$emit("update", this.value);
    },
    audioButton: function audioButton(data, index) {
      if (this.audioListType == data.url) {
        this.audioListType = '';
        this.audioListIndex = '';
        this.$refs.audioPlayer.pause();
      } else if (!this.recordingType) {
        this.audioListType = data.url;
        this.audioListIndex = index;

        if (this.$refs.audioPlayer.src == data.url) {
          this.$refs.audioPlayer.play();
        } else {
          this.resetTime();
          this.$refs.audioPlayer.src = data.url;
          this.$refs.audioPlayer.play();
        }
      }
    },
    recordingClick: function recordingClick() {
      var _this = this;

      if (!this.recordingType) {
        if (!this.disabled) {
          this.audioListType = '';
          this.audioListIndex = '';
          this.$refs.audioPlayer.pause();
          this.newRecording.start();
          this.recordingType = true;
        }
      } else {
        var file = this.newRecording.end();
        this.$emit('change', file);
        this.recordingType = false;
        setTimeout(function () {
          _this.dateTime = 0;
        }, 100);
      }
    },
    audioListUpdate: function audioListUpdate(val) {
      for (var a in val) {// let audio = document.createElement('audio') //生成一个audio元素 
        // audio.src = val[a].url //音乐的路径 
        // audio.addEventListener("canplay", ()=> {
        //   this.value[a].duration = audio.duration
        // });
        // ontimeupdate
      }
    },
    listsDelete: function listsDelete(index) {
      var _this2 = this;

      this.audioListType = '';
      this.audioListIndex = '';
      this.$refs.audioPlayer.pause();
      this.$Dialog.confirm({
        title: '确认删除？',
        message: '删除后录音内容无法恢复'
      }).then(function () {
        _this2.value.splice(index, 1);

        _this2.$emit("update", _this2.value);
      }).catch(function () {// on cancel
      });
    }
  },
  created: function created() {
    var _this3 = this;

    this.newRecording = new recording_recording();
    this.newRecording.authorization(function (time) {
      _this3.dateTime = time;
    }); // this.audioListUpdate(this.value)

    this.$nextTick(function () {
      _this3.$refs.audioPlayer.ontimeupdate = function () {
        _this3.value[_this3.audioListIndex].time = _this3.$refs.audioPlayer.currentTime; // this.value[this.audioListIndex].duration = this.$refs.audioPlayer.duration

        _this3.$emit("update", _this3.value); // console.log(audioDom.currentTime)

      };

      _this3.$refs.audioPlayer.onended = function () {
        _this3.value[_this3.audioListIndex].time = 0;

        _this3.$emit("update", _this3.value);

        _this3.audioListType = '';
        _this3.audioListIndex = '';
      };
    });
  },
  mounted: function mounted() {},
  watch: {
    value: {
      handler: function handler(val) {// this.audioListUpdate(val)
      },
      deep: true
    },
    dateTime: {
      handler: function handler(val) {
        if (val >= 600) {
          this.recordingClick();
        }
      },
      deep: true
    }
  }
});
// CONCATENATED MODULE: ./src/strange-components/src/components/strange-upload-recording-ant/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_strange_upload_recording_ant_srcvue_type_script_lang_js_ = (strange_upload_recording_ant_srcvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/strange-components/src/components/strange-upload-recording-ant/src/index.vue?vue&type=style&index=0&id=9c4273f2&scoped=true&lang=css&
var srcvue_type_style_index_0_id_9c4273f2_scoped_true_lang_css_ = __webpack_require__(91);

// CONCATENATED MODULE: ./src/strange-components/src/components/strange-upload-recording-ant/src/index.vue






/* normalize component */

var strange_upload_recording_ant_src_component = normalizeComponent(
  components_strange_upload_recording_ant_srcvue_type_script_lang_js_,
  srcvue_type_template_id_9c4273f2_scoped_true_render,
  srcvue_type_template_id_9c4273f2_scoped_true_staticRenderFns,
  false,
  null,
  "9c4273f2",
  null
  
)

/* hot reload */
if (false) { var strange_upload_recording_ant_src_api; }
strange_upload_recording_ant_src_component.options.__file = "src/strange-components/src/components/strange-upload-recording-ant/src/index.vue"
/* harmony default export */ var strange_upload_recording_ant_src = (strange_upload_recording_ant_src_component.exports);
// CONCATENATED MODULE: ./src/strange-components/src/components/strange-upload-recording-ant/index.js
/*
 * @Author: PiPi
 * @Email: pisenliang@gmail.com
 * @Github: https://github.com/SenLiangpi
 * @Website: https://senliangpi.github.io/blog/#/
 * @Date: 2020-08-05 14:31:10
 * @LastEditors: PiPi
 * @LastEditTime: 2020-08-05 14:34:10
 */

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/strange-components/src/components/strange-prompt-box/src/index.vue?vue&type=template&id=6eb51f6a&scoped=true&
var srcvue_type_template_id_6eb51f6a_scoped_true_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.box_type,
          expression: "box_type"
        }
      ],
      staticClass: "strange-prompt-box",
      class: {
        "background-enter": !_vm.box_class,
        "background-out": _vm.box_class
      },
      attrs: { id: _vm.box_id }
    },
    [
      _c(
        "div",
        { staticClass: "prompt-box-div" },
        [
          _c("a-icon", {
            staticClass: "prompt-box-icon",
            attrs: { type: _vm.config.icon }
          }),
          _vm._v(" "),
          _c("h3", { staticClass: "prompt-box-title" }, [
            _vm._v(_vm._s(_vm.config.title))
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "prompt-box-content" }, [
            _vm._v("\n      " + _vm._s(_vm.config.content) + "\n    ")
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "prompt-box-button" },
            [
              _c(
                "a-button",
                {
                  staticClass: "prompt-box-button-cancel",
                  on: {
                    click: function($event) {
                      return _vm.cancel($event)
                    }
                  }
                },
                [_vm._v(_vm._s(_vm.config.cancelText || "取消"))]
              ),
              _vm._v(" "),
              _c(
                "a-button",
                {
                  staticClass: "prompt-box-button-ok",
                  attrs: { type: "primary" },
                  on: {
                    click: function($event) {
                      return _vm.ok($event)
                    }
                  }
                },
                [_vm._v(_vm._s(_vm.config.okText || "确定"))]
              )
            ],
            1
          )
        ],
        1
      )
    ]
  )
}
var srcvue_type_template_id_6eb51f6a_scoped_true_staticRenderFns = []
srcvue_type_template_id_6eb51f6a_scoped_true_render._withStripped = true


// CONCATENATED MODULE: ./src/strange-components/src/components/strange-prompt-box/src/index.vue?vue&type=template&id=6eb51f6a&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/strange-components/src/components/strange-prompt-box/src/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var strange_prompt_box_srcvue_type_script_lang_js_ = ({
  name: "strange-prompt-box-ant",
  components: {},
  props: {
    config: {
      type: Object
    },
    type: {
      type: Boolean
    }
  },
  model: {},
  data: function data() {
    return {
      box_type: false,
      box_class: false,
      box_id: String(parseInt(Math.random() * 10000000000))
    };
  },
  methods: {
    ok: function ok(event) {
      this.$emit('ok', event);
    },
    cancel: function cancel(event) {
      this.$emit('cancel', event);
    }
  },
  created: function created() {},
  mounted: function mounted() {},
  watch: {
    type: {
      handler: function handler(val) {
        var _this = this;

        if (val) {
          this.box_type = true;
          this.$nextTick(function () {
            setTimeout(function () {
              _this.box_class = true;
            }, 10);
          });
        } else {
          this.box_class = false;
          var a = 0;
          document.getElementById(this.box_id).addEventListener('animationend', function () {
            _this.box_type = false;
          }, false);
        }
      }
    }
  }
});
// CONCATENATED MODULE: ./src/strange-components/src/components/strange-prompt-box/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_strange_prompt_box_srcvue_type_script_lang_js_ = (strange_prompt_box_srcvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/strange-components/src/components/strange-prompt-box/src/index.vue?vue&type=style&index=0&id=6eb51f6a&scoped=true&lang=css&
var srcvue_type_style_index_0_id_6eb51f6a_scoped_true_lang_css_ = __webpack_require__(92);

// CONCATENATED MODULE: ./src/strange-components/src/components/strange-prompt-box/src/index.vue






/* normalize component */

var strange_prompt_box_src_component = normalizeComponent(
  components_strange_prompt_box_srcvue_type_script_lang_js_,
  srcvue_type_template_id_6eb51f6a_scoped_true_render,
  srcvue_type_template_id_6eb51f6a_scoped_true_staticRenderFns,
  false,
  null,
  "6eb51f6a",
  null
  
)

/* hot reload */
if (false) { var strange_prompt_box_src_api; }
strange_prompt_box_src_component.options.__file = "src/strange-components/src/components/strange-prompt-box/src/index.vue"
/* harmony default export */ var strange_prompt_box_src = (strange_prompt_box_src_component.exports);
// CONCATENATED MODULE: ./src/strange-components/src/components/strange-prompt-box/index.js
/*
 * @Author: PiPi
 * @Email: pisenliang@gmail.com
 * @Github: https://github.com/SenLiangpi
 * @Website: https://senliangpi.github.io/blog/#/
 * @Date: 2020-08-03 17:03:15
 * @LastEditors: PiPi
 * @LastEditTime: 2020-08-03 17:05:18
 */

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/strange-components/src/components/strange-modal/src/index.vue?vue&type=template&id=82e27f76&scoped=true&
var srcvue_type_template_id_82e27f76_scoped_true_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "modal" } }, [
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.box_type,
            expression: "box_type"
          }
        ],
        staticClass: "strange-prompt-box",
        attrs: { id: _vm.box_id }
      },
      [
        _c(
          "div",
          {
            staticClass: "prompt-box-div",
            style: {
              width: _vm.width,
              marginTop: "calc(50vh - " + _vm.box_dom_offsetHeight + "px)"
            },
            attrs: { id: _vm.modal_id }
          },
          [
            _c(
              "div",
              { staticClass: "prompt-modal-title" },
              [
                _c("span", { staticStyle: { "margin-right": "10px" } }, [
                  _vm._v(_vm._s(_vm.modal_config.title || "title"))
                ]),
                _vm._v(" "),
                _vm.delete_type
                  ? _c(
                      "a-popconfirm",
                      {
                        attrs: {
                          placement: "bottom",
                          title: _vm.modal_popconfirmText.title || "title",
                          "ok-text": _vm.modal_popconfirmText.ok || "确定",
                          "cancel-text": _vm.modal_popconfirmText.no || "取消"
                        },
                        on: {
                          confirm: function($event) {
                            return _vm.popconfirm_confirm($event)
                          },
                          cancel: function($event) {
                            return _vm.popconfirm_cancel($event)
                          }
                        }
                      },
                      [
                        _c(
                          "a",
                          {
                            staticStyle: { color: "#000000a6" },
                            attrs: { href: "#" }
                          },
                          [
                            _c("a-icon", {
                              staticClass: "modal_delete",
                              attrs: { type: "delete" }
                            })
                          ],
                          1
                        )
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticStyle: { color: "#000000a6", float: "right" },
                    attrs: { href: "javascript:void(0)" },
                    on: {
                      click: function($event) {
                        return _vm.modal_shut_down($event)
                      }
                    }
                  },
                  [
                    _c("a-icon", {
                      staticClass: "modal_delete",
                      attrs: { type: "close" }
                    })
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "prompt-modal-dev" },
              [_vm._t("default")],
              2
            ),
            _vm._v(" "),
            _c("div", { staticClass: "prompt-modal-button" }, [
              _c(
                "div",
                { staticStyle: { display: "inline-block", float: "right" } },
                [
                  _c(
                    "a-button",
                    {
                      staticClass: "prompt-box-button-cancel",
                      on: {
                        click: function($event) {
                          return _vm.cancel($event)
                        }
                      }
                    },
                    [_vm._v(_vm._s(_vm.modal_config.cancelText || "取消"))]
                  ),
                  _vm._v(" "),
                  _c(
                    "a-button",
                    {
                      staticClass: "prompt-box-button-ok",
                      attrs: { loading: _vm.confirmLoading, type: "primary" },
                      on: {
                        click: function($event) {
                          return _vm.ok($event)
                        }
                      }
                    },
                    [_vm._v(_vm._s(_vm.modal_config.okText || "确定"))]
                  )
                ],
                1
              )
            ])
          ]
        )
      ]
    )
  ])
}
var srcvue_type_template_id_82e27f76_scoped_true_staticRenderFns = []
srcvue_type_template_id_82e27f76_scoped_true_render._withStripped = true


// CONCATENATED MODULE: ./src/strange-components/src/components/strange-modal/src/index.vue?vue&type=template&id=82e27f76&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/strange-components/src/components/strange-modal/src/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var strange_modal_srcvue_type_script_lang_js_ = ({
  name: "strange-modal-ant",
  components: {},
  props: {
    delete_type: {
      type: Boolean
    },
    width: {
      type: String
    },
    visible: {
      type: Boolean
    },
    config: {
      type: Object
    },
    popconfirmText: {
      type: Object
    },
    confirmLoading: {
      type: Boolean
    }
  },
  model: {},
  data: function data() {
    return {
      box_type: false,
      box_class: false,
      box_id: String(parseInt(Math.random() * 1000000)) + new Date().getTime(),
      modal_id: String(parseInt(Math.random() * 1000000)) + new Date().getTime(),
      modal_config: {
        title: ' ',
        cancelText: '取消',
        okText: '确定'
      },
      modal_popconfirmText: {
        title: ' ',
        ok: '取消',
        no: '确定'
      },
      box_dom_offsetHeight: 0
    };
  },
  methods: {
    ok: function ok(event) {
      this.$emit('ok', event);
    },
    cancel: function cancel(event) {
      this.$emit('cancel', event);
    },
    modal_shut_down: function modal_shut_down(event) {
      this.$emit('shut-down', event);
    },
    popconfirm_confirm: function popconfirm_confirm(event) {
      this.$emit('popconfirm-confirm', event);
    },
    popconfirm_cancel: function popconfirm_cancel(event) {
      this.$emit('popconfirm-cancel', event);
    }
  },
  created: function created() {
    if (this.config) {
      this.modal_config = this.config;
    }

    if (this.popconfirmText) {
      this.modal_popconfirmText = this.popconfirmText;
    }
  },
  mounted: function mounted() {},
  watch: {
    visible: {
      handler: function handler(val) {
        var _this = this;

        if (val) {
          this.box_type = true;
          this.$nextTick(function () {
            _this.box_dom_offsetHeight = document.getElementById(_this.modal_id).offsetHeight / 2 + 100;
          });
        } else {
          this.box_type = false;
        }
      }
    }
  }
});
// CONCATENATED MODULE: ./src/strange-components/src/components/strange-modal/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_strange_modal_srcvue_type_script_lang_js_ = (strange_modal_srcvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/strange-components/src/components/strange-modal/src/index.vue?vue&type=style&index=0&id=82e27f76&scoped=true&lang=css&
var srcvue_type_style_index_0_id_82e27f76_scoped_true_lang_css_ = __webpack_require__(93);

// CONCATENATED MODULE: ./src/strange-components/src/components/strange-modal/src/index.vue






/* normalize component */

var strange_modal_src_component = normalizeComponent(
  components_strange_modal_srcvue_type_script_lang_js_,
  srcvue_type_template_id_82e27f76_scoped_true_render,
  srcvue_type_template_id_82e27f76_scoped_true_staticRenderFns,
  false,
  null,
  "82e27f76",
  null
  
)

/* hot reload */
if (false) { var strange_modal_src_api; }
strange_modal_src_component.options.__file = "src/strange-components/src/components/strange-modal/src/index.vue"
/* harmony default export */ var strange_modal_src = (strange_modal_src_component.exports);
// CONCATENATED MODULE: ./src/strange-components/src/components/strange-modal/index.js
/*
 * @Author: PiPi
 * @Email: pisenliang@gmail.com
 * @Github: https://github.com/SenLiangpi
 * @Website: https://senliangpi.github.io/blog/#/
 * @Date: 2020-08-04 13:45:00
 * @LastEditors: PiPi
 * @LastEditTime: 2020-08-04 13:45:10
 */

// CONCATENATED MODULE: ./src/strange-components/src/index.js



/*
 * @Author: PiPi
 * @Email: pisenliang@gmail.com
 * @Github: https://github.com/SenLiangpi
 * @Website: https://senliangpi.github.io/blog/#/
 * @Date: 2020-05-12 10:17:15
 * @LastEditors: Pi Patle
 * @LastEditTime: 2020-11-28 17:00:48
 */
 // import './style/reset.css'


 // import all comps





 // add all comps into an array

var components = [src, strange_upload_image_ant_src, strange_upload_recording_ant_src, strange_prompt_box_src, strange_modal_src]; // export comps one by one

 // export all comps as an object

var strange = {
  strangeSelect: src,
  strangeUploadImageAnt: strange_upload_image_ant_src,
  strangeUploadRecordingAnt: strange_upload_recording_ant_src,
  strange_prompt_box_ant: strange_prompt_box_src,
  strange_modal: strange_modal_src
};

strange.install = function (Vue) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  // install all the comps
  components.forEach(function (component) {
    if (component.name) Vue.component(component.name, component);
  }); // Vue.prototype.$messageBox = MessageBox
  // Vue.prototype.$alert = MessageBox.alert
  // Vue.prototype.$confirm = MessageBox.confirm
  // Vue.prototype.$prompt = MessageBox.prompt
  // Vue.prototype.$message = Message
  // Vue.prototype.$loading = Loading
}; // add direvtives installing function


strange.direvtive = function (Vue) {
  for (var name in directives) {
    Vue.directive(name, directives[name]);
  }
}; // add theme generator function


strange.theme = theme; // gen default theme

strange.theme(); // set font family for html and body
// document.body.style.fontFamily = '"Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif'
// gen directive

strange.direvtive(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a);
window.strange_components = strange;
/* harmony default export */ var strange_components_src = __webpack_exports__["default"] = (strange);

/***/ })
/******/ ])["default"];
});