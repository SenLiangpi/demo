module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 102);
/******/ })
/************************************************************************/
/******/ ({

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// enhanced form components common api
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      localValue: this.value
    };
  },
  props: {
    label: {
      type: String
    },
    labelWidth: String,
    tips: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    inline: {
      type: Boolean,
      default: function _default() {
        return !!this.label;
      }
    },
    size: {
      type: String,
      default: 'normal'
    },
    value: {
      // type: String,
      required: true
    },
    disabled: Boolean,
    readonly: Boolean
  },
  computed: {
    inlineLabel: function inlineLabel() {
      return this.label && this.inline;
    }
  },
  watch: {
    value: {
      deep: true,
      handler: function handler(v) {
        if (this.localValue !== v) this.localValue = v;
      }
    }
  },
  methods: {
    input: function input(e) {
      this.$emit('input', this.localValue, e);
    },
    change: function change(e) {
      this.$emit('change', this.localValue, e);
    },
    focus: function focus(e) {
      if (this.$refs.core && this.$refs.core.focus instanceof Function) {
        this.$refs.core.focus();
      }

      this.$emit('focus', this.localValue, e);
    },
    blur: function blur(e) {
      if (this.validateOnBlur) this.validate();
      this.$emit('blur', this.localValue, e);
    },
    clear: function clear() {
      var _this = this;

      this.clearing = true;

      if (typeof this.localValue === 'string') {
        this.localValue = '';
      } else if (typeof this.localValue === 'number') {
        this.localValue = '';
      } else if (this.localValue instanceof Array) {
        this.localValue = [];
      } else if (this.localValue instanceof Object) {
        this.localValue = {};
      }

      this.localWarnings = this.warnings || {};
      this.$nextTick(function () {
        // we should set clearing to false after value watch has triggered
        _this.clearing = false;
      });
    }
  }
});

/***/ })

/******/ });