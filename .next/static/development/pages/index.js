(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/index.js"],{

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

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

module.exports = _classCallCheck;

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
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@reach/auto-id/dist/auto-id.esm.js":
/*!*********************************************************!*\
  !*** ./node_modules/@reach/auto-id/dist/auto-id.esm.js ***!
  \*********************************************************/
/*! exports provided: useId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useId", function() { return useId; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reach_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reach/utils */ "./node_modules/@reach/utils/dist/utils.esm.js");



/*
 * Welcome to @reach/auto-id!

 * Let's see if we can make sense of why this hook exists and its
 * implementation.
 *
 * Some background:
 *   1. Accessibiliy APIs rely heavily on element IDs
 *   2. Requiring developers to put IDs on every element in Reach UI is both
 *      cumbersome and error-prone
 *   3. With a component model, we can generate IDs for them!
 *
 * Solution 1: Generate random IDs.
 *
 * This works great as long as you don't server render your app. When React (in
 * the client) tries to reuse the markup from the server, the IDs won't match
 * and React will then recreate the entire DOM tree.
 *
 * Solution 2: Increment an integer
 *
 * This sounds great. Since we're rendering the exact same tree on the server
 * and client, we can increment a counter and get a deterministic result between
 * client and server. Also, JS integers can go up to nine-quadrillion. I'm
 * pretty sure the tab will be closed before an app never needs
 * 10 quadrillion IDs!
 *
 * Problem solved, right?
 *
 * Ah, but there's a catch! React's concurrent rendering makes this approach
 * non-deterministic. While the client and server will end up with the same
 * elements in the end, depending on suspense boundaries (and possibly some user
 * input during the initial render) the incrementing integers won't always match
 * up.
 *
 * Solution 3: Don't use IDs at all on the server; patch after first render.
 *
 * What we've done here is solution 2 with some tricks. With this approach, the
 * ID returned is an empty string on the first render. This way the server and
 * client have the same markup no matter how wild the concurrent rendering may
 * have gotten.
 *
 * After the render, we patch up the components with an incremented ID. This
 * causes a double render on any components with `useId`. Shouldn't be a problem
 * since the components using this hook should be small, and we're only updating
 * the ID attribute on the DOM, nothing big is happening.
 *
 * It doesn't have to be an incremented number, though--we could do generate
 * random strings instead, but incrementing a number is probably the cheapest
 * thing we can do.
 *
 * Additionally, we only do this patchup on the very first client render ever.
 * Any calls to `useId` that happen dynamically in the client will be
 * populated immediately with a value. So, we only get the double render after
 * server hydration and never again, SO BACK OFF ALRIGHT?
 */
var serverHandoffComplete = false;
var id = 0;

var genId = function genId() {
  return ++id;
};
/**
 * useId
 *
 * Autogenerate IDs to facilitate WAI-ARIA and server rendering.
 *
 * Note: The returned ID will initially be `null` and will update after a
 * component mounts. Users may need to supply their own ID if they need
 * consistent values for SSR.
 *
 * @see Docs https://reacttraining.com/reach-ui/auto-id
 */


var useId = function useId(idFromProps) {
  /*
   * If this instance isn't part of the initial render, we don't have to do the
   * double render/patch-up dance. We can just generate the ID and return it.
   */
  var initialId = idFromProps || (serverHandoffComplete ? genId() : null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialId),
      id = _useState[0],
      setId = _useState[1];

  Object(_reach_utils__WEBPACK_IMPORTED_MODULE_1__["useIsomorphicLayoutEffect"])(function () {
    if (id === null) {
      /*
       * Patch the ID after render. We do this in `useLayoutEffect` to avoid any
       * rendering flicker, though it'll make the first render slower (unlikely
       * to matter, but you're welcome to measure your app and let us know if
       * it's a problem).
       */
      setId(genId());
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (serverHandoffComplete === false) {
      /*
       * Flag all future uses of `useId` to skip the update dance. This is in
       * `useEffect` because it goes after `useLayoutEffect`, ensuring we don't
       * accidentally bail out of the patch-up dance prematurely.
       */
      serverHandoffComplete = true;
    }
  }, []);
  return id != null ? String(id) : undefined;
};


//# sourceMappingURL=auto-id.esm.js.map


/***/ }),

/***/ "./node_modules/@reach/descendants/dist/descendants.esm.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@reach/descendants/dist/descendants.esm.js ***!
  \*****************************************************************/
/*! exports provided: DescendantProvider, createDescendantContext, useDescendant, useDescendantKeyDown, useDescendants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescendantProvider", function() { return DescendantProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDescendantContext", function() { return createDescendantContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDescendant", function() { return useDescendant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDescendantKeyDown", function() { return useDescendantKeyDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDescendants", function() { return useDescendants; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reach_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reach/utils */ "./node_modules/@reach/utils/dist/utils.esm.js");



function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function createDescendantContext(name, initialValue) {
  if (initialValue === void 0) {
    initialValue = {};
  }

  return Object(_reach_utils__WEBPACK_IMPORTED_MODULE_1__["createNamedContext"])(name, _extends({
    descendants: [],
    registerDescendant: _reach_utils__WEBPACK_IMPORTED_MODULE_1__["noop"],
    unregisterDescendant: _reach_utils__WEBPACK_IMPORTED_MODULE_1__["noop"]
  }, initialValue));
}
/**
 * This hook registers our descendant by passing it into an array. We can then
 * search that array by to find its index when registering it in the component.
 * We use this for focus management, keyboard navigation, and typeahead
 * functionality for some components.
 *
 * The hook accepts the element node and (optionally) a key. The key is useful
 * if multiple descendants have identical text values and we need to
 * differentiate siblings for some reason.
 *
 * Our main goals with this are:
 *   1) maximum composability,
 *   2) minimal API friction
 *   3) SSR compatibility*
 *   4) concurrent safe
 *   5) index always up-to-date with the tree despite changes
 *   6) works with memoization of any component in the tree (hopefully)
 *
 * * As for SSR, the good news is that we don't actually need the index on the
 * server for most use-cases, as we are only using it to determine the order of
 * composed descendants for keyboard navigation. However, in the few cases where
 * this is not the case, we can require an explicit index from the app.
 */

function useDescendant(_ref, indexProp) {
  var context = _ref.context,
      element = _ref.element,
      rest = _objectWithoutPropertiesLoose(_ref, ["context", "element"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      forceUpdate = _useState[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(context),
      registerDescendant = _useContext.registerDescendant,
      unregisterDescendant = _useContext.unregisterDescendant,
      descendants = _useContext.descendants; // Prevent any flashing


  Object(_reach_utils__WEBPACK_IMPORTED_MODULE_1__["useIsomorphicLayoutEffect"])(function () {
    if (!element) forceUpdate({}); // @ts-ignore

    registerDescendant(_extends({
      element: element
    }, rest));
    return function () {
      return unregisterDescendant(element);
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [element].concat(Object.values(rest)));
  return indexProp !== null && indexProp !== void 0 ? indexProp : descendants.findIndex(function (item) {
    return item.element === element;
  });
}
function useDescendants() {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
}
function DescendantProvider(_ref2) {
  var Ctx = _ref2.context,
      children = _ref2.children,
      items = _ref2.items,
      set = _ref2.set;
  var registerDescendant = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(function (_ref3) {
    var element = _ref3.element,
        rest = _objectWithoutPropertiesLoose(_ref3, ["element"]);

    if (!element) {
      return;
    }

    set(function (items) {
      var newItem;
      var newItems; // If there are no items, register at index 0 and bail.

      if (items.length === 0) {
        newItem = _extends({
          element: element,
          index: 0
        }, rest);
        newItems = [].concat(items, [newItem]);
      } else if (items.find(function (item) {
        return item.element === element;
      })) {
        // If the element is already registered, just use the same array
        newItems = items;
      } else {
        // When registering a descendant, we need to make sure we insert in
        // into the array in the same order that it appears in the DOM. So as
        // new descendants are added or maybe some are removed, we always know
        // that the array is up-to-date and correct.
        //
        // So here we look at our registered descendants and see if the new
        // element we are adding appears earlier than an existing descendant's
        // DOM node via `node.compareDocumentPosition`. If it does, we insert
        // the new element at this index. Because `registerDescendant` will be
        // called in an effect every time the descendants state value changes,
        // we should be sure that this index is accurate when descendent
        // elements come or go from our component.
        var index = items.findIndex(function (item) {
          if (!item.element || !element) {
            return false;
          } // Does this element's DOM node appear before another item in the
          // array in our DOM tree? If so, return true to grab the index at
          // this point in the array so we know where to insert the new
          // element.


          return Boolean(item.element.compareDocumentPosition(element) & Node.DOCUMENT_POSITION_PRECEDING);
        });
        newItem = _extends({
          element: element,
          index: index
        }, rest); // If an index is not found we will push the element to the end.

        if (index === -1) {
          newItems = [].concat(items, [newItem]);
        } else {
          newItems = [].concat(items.slice(0, index), [newItem], items.slice(index));
        }
      }

      return newItems.map(function (item, index) {
        return _extends({}, item, {
          index: index
        });
      });
    });
  }, // set is a state setter initialized by the useDescendants hook.
  // We can safely ignore the lint warning here because it will not change
  // between renders.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  []);
  var unregisterDescendant = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (element) {
    if (!element) {
      return;
    }

    set(function (items) {
      return items.filter(function (item) {
        return element !== item.element;
      });
    });
  }, // set is a state setter initialized by the useDescendants hook.
  // We can safely ignore the lint warning here because it will not change
  // between renders.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  []);
  var value = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return {
      descendants: items,
      registerDescendant: registerDescendant,
      unregisterDescendant: unregisterDescendant
    };
  }, [items, registerDescendant, unregisterDescendant]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Ctx.Provider, {
    value: value
  }, children);
}
/**
 * Testing this as an abstraction for compound components that use keyboard
 * navigation. Hoping this will help us prevent bugs and mismatched behavior
 * across various components, but it may also prove to be too messy of an
 * abstraction in the end.
 *
 * Currently used in:
 *   - Tabs
 *   - Accordion
 *
 * @param context
 * @param options
 */

function useDescendantKeyDown(context, options) {
  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(context),
      descendants = _useContext2.descendants;

  var callback = options.callback,
      currentIndex = options.currentIndex,
      filter = options.filter,
      _options$key = options.key,
      key = _options$key === void 0 ? "index" : _options$key,
      _options$orientation = options.orientation,
      orientation = _options$orientation === void 0 ? "vertical" : _options$orientation,
      _options$rotate = options.rotate,
      rotate = _options$rotate === void 0 ? true : _options$rotate,
      _options$rtl = options.rtl,
      rtl = _options$rtl === void 0 ? false : _options$rtl;
  var index = currentIndex !== null && currentIndex !== void 0 ? currentIndex : -1;
  return function handleKeyDown(event) {
    if (!["ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight", "PageUp", "PageDown", "Home", "End"].includes(event.key)) {
      return;
    } // If we use a filter function, we need to re-index our descendants array
    // so that filtered descendent elements aren't selected.


    var selectableDescendants = filter ? descendants.filter(filter) : descendants; // Current index should map to the updated array vs. the original
    // descendants array.

    if (filter) {
      index = selectableDescendants.findIndex(function (descendant) {
        return descendant.index === currentIndex;
      });
    } // We need some options for any of this to work!


    if (!selectableDescendants.length) {
      return;
    }

    function getNextOption() {
      var atBottom = index === selectableDescendants.length - 1;
      return atBottom ? rotate ? getFirstOption() : selectableDescendants[index] : selectableDescendants[(index + 1) % selectableDescendants.length];
    }

    function getPreviousOption() {
      var atTop = index === 0;
      return atTop ? rotate ? getLastOption() : selectableDescendants[index] : selectableDescendants[(index - 1 + selectableDescendants.length) % selectableDescendants.length];
    }

    function getFirstOption() {
      return selectableDescendants[0];
    }

    function getLastOption() {
      return selectableDescendants[selectableDescendants.length - 1];
    }

    switch (event.key) {
      case "ArrowDown":
        if (orientation === "vertical" || orientation === "both") {
          event.preventDefault();
          var next = getNextOption();
          callback(key === "option" ? next : next[key]);
        }

        break;

      case "ArrowUp":
        if (orientation === "vertical" || orientation === "both") {
          event.preventDefault();
          var prev = getPreviousOption();
          callback(key === "option" ? prev : prev[key]);
        }

        break;

      case "ArrowLeft":
        if (orientation === "horizontal" || orientation === "both") {
          event.preventDefault();
          var nextOrPrev = (rtl ? getNextOption : getPreviousOption)();
          callback(key === "option" ? nextOrPrev : nextOrPrev[key]);
        }

        break;

      case "ArrowRight":
        if (orientation === "horizontal" || orientation === "both") {
          event.preventDefault();
          var prevOrNext = (rtl ? getPreviousOption : getNextOption)();
          callback(key === "option" ? prevOrNext : prevOrNext[key]);
        }

        break;

      case "PageUp":
        event.preventDefault();
        var prevOrFirst = (event.ctrlKey ? getPreviousOption : getFirstOption)();
        callback(key === "option" ? prevOrFirst : prevOrFirst[key]);
        break;

      case "Home":
        event.preventDefault();
        var first = getFirstOption();
        callback(key === "option" ? first : first[key]);
        break;

      case "PageDown":
        event.preventDefault();
        var nextOrLast = (event.ctrlKey ? getNextOption : getLastOption)();
        callback(key === "option" ? nextOrLast : nextOrLast[key]);
        break;

      case "End":
        event.preventDefault();
        var last = getLastOption();
        callback(key === "option" ? last : last[key]);
        break;
    }
  };
}


//# sourceMappingURL=descendants.esm.js.map


/***/ }),

/***/ "./node_modules/@reach/dialog/dist/dialog.esm.js":
/*!*******************************************************!*\
  !*** ./node_modules/@reach/dialog/dist/dialog.esm.js ***!
  \*******************************************************/
/*! exports provided: default, Dialog, DialogContent, DialogOverlay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dialog", function() { return Dialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogContent", function() { return DialogContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogOverlay", function() { return DialogOverlay; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reach_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reach/portal */ "./node_modules/@reach/portal/dist/portal.esm.js");
/* harmony import */ var _reach_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reach/utils */ "./node_modules/@reach/utils/dist/utils.esm.js");
/* harmony import */ var react_focus_lock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-focus-lock */ "./node_modules/react-focus-lock/dist/es2015/index.js");
/* harmony import */ var react_remove_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-remove-scroll */ "./node_modules/react-remove-scroll/dist/es2015/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);







function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var overlayPropTypes = {
  initialFocusRef: function initialFocusRef() {
    return null;
  },
  allowPinchZoom: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  onDismiss: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func
}; ////////////////////////////////////////////////////////////////////////////////

/**
 * DialogOverlay
 *
 * Low-level component if you need more control over the styles or rendering of
 * the dialog overlay.
 *
 * Note: You must render a `DialogContent` inside.
 *
 * @see Docs https://reacttraining.com/reach-ui/dialog#dialogoverlay
 */

var DialogOverlay = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function DialogOverlay(_ref, forwardedRef) {
  var _ref$isOpen = _ref.isOpen,
      isOpen = _ref$isOpen === void 0 ? true : _ref$isOpen,
      props = _objectWithoutPropertiesLoose(_ref, ["isOpen"]);

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return Object(_reach_utils__WEBPACK_IMPORTED_MODULE_2__["checkStyles"])("dialog");
  }, []); // We want to ignore the immediate focus of a tooltip so it doesn't pop
  // up again when the menu closes, only pops up when focus returns again
  // to the tooltip (like native OS tooltips).

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (isOpen) {
      // @ts-ignore
      window.__REACH_DISABLE_TOOLTIPS = true;
    } else {
      window.requestAnimationFrame(function () {
        // Wait a frame so that this doesn't fire before tooltip does
        // @ts-ignore
        window.__REACH_DISABLE_TOOLTIPS = false;
      });
    }
  }, [isOpen]);
  return isOpen ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_portal__WEBPACK_IMPORTED_MODULE_1__["default"], {
    "data-reach-dialog-wrapper": ""
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DialogInner, Object.assign({
    ref: forwardedRef
  }, props))) : null;
});

if (true) {
  DialogOverlay.displayName = "DialogOverlay";
  DialogOverlay.propTypes = /*#__PURE__*/_extends({}, overlayPropTypes, {
    isOpen: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool
  });
} ////////////////////////////////////////////////////////////////////////////////

/**
 * DialogInner
 */


var DialogInner = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function DialogInner(_ref2, forwardedRef) {
  var allowPinchZoom = _ref2.allowPinchZoom,
      initialFocusRef = _ref2.initialFocusRef,
      onClick = _ref2.onClick,
      _ref2$onDismiss = _ref2.onDismiss,
      onDismiss = _ref2$onDismiss === void 0 ? _reach_utils__WEBPACK_IMPORTED_MODULE_2__["noop"] : _ref2$onDismiss,
      onMouseDown = _ref2.onMouseDown,
      onKeyDown = _ref2.onKeyDown,
      _ref2$unstable_lockFo = _ref2.unstable_lockFocusAcrossFrames,
      unstable_lockFocusAcrossFrames = _ref2$unstable_lockFo === void 0 ? true : _ref2$unstable_lockFo,
      props = _objectWithoutPropertiesLoose(_ref2, ["allowPinchZoom", "initialFocusRef", "onClick", "onDismiss", "onMouseDown", "onKeyDown", "unstable_lockFocusAcrossFrames"]);

  var mouseDownTarget = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var overlayNode = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var ref = Object(_reach_utils__WEBPACK_IMPORTED_MODULE_2__["useForkedRef"])(overlayNode, forwardedRef);
  var activateFocusLock = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    if (initialFocusRef && initialFocusRef.current) {
      initialFocusRef.current.focus();
    }
  }, [initialFocusRef]);

  function handleClick(event) {
    if (mouseDownTarget.current === event.target) {
      event.stopPropagation();
      onDismiss(event);
    }
  }

  function handleKeyDown(event) {
    if (event.key === "Escape") {
      event.stopPropagation();
      onDismiss(event);
    }
  }

  function handleMouseDown(event) {
    mouseDownTarget.current = event.target;
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return overlayNode.current ? createAriaHider(overlayNode.current) : void null;
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_focus_lock__WEBPACK_IMPORTED_MODULE_3__["default"], {
    autoFocus: true,
    returnFocus: true,
    onActivation: activateFocusLock,
    crossFrame: unstable_lockFocusAcrossFrames
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_remove_scroll__WEBPACK_IMPORTED_MODULE_4__["RemoveScroll"], {
    allowPinchZoom: allowPinchZoom
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", Object.assign({}, props, {
    ref: ref,
    "data-reach-dialog-overlay": "",

    /*
     * We can ignore the `no-static-element-interactions` warning here
     * because our overlay is only designed to capture any outside
     * clicks, not to serve as a clickable element itself.
     */
    onClick: Object(_reach_utils__WEBPACK_IMPORTED_MODULE_2__["wrapEvent"])(onClick, handleClick),
    onKeyDown: Object(_reach_utils__WEBPACK_IMPORTED_MODULE_2__["wrapEvent"])(onKeyDown, handleKeyDown),
    onMouseDown: Object(_reach_utils__WEBPACK_IMPORTED_MODULE_2__["wrapEvent"])(onMouseDown, handleMouseDown)
  }))));
});

if (true) {
  DialogOverlay.displayName = "DialogOverlay";
  DialogOverlay.propTypes = /*#__PURE__*/_extends({}, overlayPropTypes);
} ////////////////////////////////////////////////////////////////////////////////

/**
 * DialogContent
 *
 * Low-level component if you need more control over the styles or rendering of
 * the dialog content.
 *
 * Note: Must be a child of `DialogOverlay`.
 *
 * Note: You only need to use this when you are also styling `DialogOverlay`,
 * otherwise you can use the high-level `Dialog` component and pass the props
 * to it. Any props passed to `Dialog` component (besides `isOpen` and
 * `onDismiss`) will be spread onto `DialogContent`.
 *
 * @see Docs https://reacttraining.com/reach-ui/dialog#dialogcontent
 */


var DialogContent = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function DialogContent(_ref3, forwardedRef) {
  var onClick = _ref3.onClick,
      onKeyDown = _ref3.onKeyDown,
      props = _objectWithoutPropertiesLoose(_ref3, ["onClick", "onKeyDown"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", Object.assign({
    "aria-modal": "true",
    role: "dialog",
    tabIndex: -1
  }, props, {
    ref: forwardedRef,
    "data-reach-dialog-content": "",
    onClick: Object(_reach_utils__WEBPACK_IMPORTED_MODULE_2__["wrapEvent"])(onClick, function (event) {
      event.stopPropagation();
    })
  }));
});

if (true) {
  DialogContent.displayName = "DialogContent";
  DialogContent.propTypes = {
    "aria-label": ariaLabelType,
    "aria-labelledby": ariaLabelType
  };
} ////////////////////////////////////////////////////////////////////////////////

/**
 * Dialog
 *
 * High-level component to render a modal dialog window over the top of the page
 * (or another dialog).
 *
 * @see Docs https://reacttraining.com/reach-ui/dialog#dialog
 */


var Dialog = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function Dialog(_ref4, forwardedRef) {
  var isOpen = _ref4.isOpen,
      _ref4$onDismiss = _ref4.onDismiss,
      onDismiss = _ref4$onDismiss === void 0 ? _reach_utils__WEBPACK_IMPORTED_MODULE_2__["noop"] : _ref4$onDismiss,
      initialFocusRef = _ref4.initialFocusRef,
      allowPinchZoom = _ref4.allowPinchZoom,
      props = _objectWithoutPropertiesLoose(_ref4, ["isOpen", "onDismiss", "initialFocusRef", "allowPinchZoom"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DialogOverlay, {
    initialFocusRef: initialFocusRef,
    allowPinchZoom: allowPinchZoom,
    isOpen: isOpen,
    onDismiss: onDismiss
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DialogContent, Object.assign({
    ref: forwardedRef
  }, props)));
});

if (true) {
  Dialog.displayName = "Dialog";
  Dialog.propTypes = {
    isOpen: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
    onDismiss: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
    "aria-label": ariaLabelType,
    "aria-labelledby": ariaLabelType
  };
}

function createAriaHider(dialogNode) {
  var originalValues = [];
  var rootNodes = [];
  var ownerDocument = Object(_reach_utils__WEBPACK_IMPORTED_MODULE_2__["getOwnerDocument"])(dialogNode) || document;

  if (!dialogNode) {
    if (true) {
      console.warn("A ref has not yet been attached to a dialog node when attempting to call `createAriaHider`.");
    }

    return _reach_utils__WEBPACK_IMPORTED_MODULE_2__["noop"];
  }

  Array.prototype.forEach.call(ownerDocument.querySelectorAll("body > *"), function (node) {
    var _dialogNode$parentNod, _dialogNode$parentNod2;

    var portalNode = (_dialogNode$parentNod = dialogNode.parentNode) === null || _dialogNode$parentNod === void 0 ? void 0 : (_dialogNode$parentNod2 = _dialogNode$parentNod.parentNode) === null || _dialogNode$parentNod2 === void 0 ? void 0 : _dialogNode$parentNod2.parentNode;

    if (node === portalNode) {
      return;
    }

    var attr = node.getAttribute("aria-hidden");
    var alreadyHidden = attr !== null && attr !== "false";

    if (alreadyHidden) {
      return;
    }

    originalValues.push(attr);
    rootNodes.push(node);
    node.setAttribute("aria-hidden", "true");
  });
  return function () {
    rootNodes.forEach(function (node, index) {
      var originalValue = originalValues[index];

      if (originalValue === null) {
        node.removeAttribute("aria-hidden");
      } else {
        node.setAttribute("aria-hidden", originalValue);
      }
    });
  };
}

function ariaLabelType(props, propName, compName, location, propFullName) {
  var details = "\nSee https://www.w3.org/TR/wai-aria/#aria-label for details.";

  if (!props["aria-label"] && !props["aria-labelledby"]) {
    return new Error("A <" + compName + "> must have either an `aria-label` or `aria-labelledby` prop.\n      " + details);
  }

  if (props["aria-label"] && props["aria-labelledby"]) {
    return new Error("You provided both `aria-label` and `aria-labelledby` props to a <" + compName + ">. If the a label for this component is visible on the screen, that label's component should be given a unique ID prop, and that ID should be passed as the `aria-labelledby` prop into <" + compName + ">. If the label cannot be determined programmatically from the content of the element, an alternative label should be provided as the `aria-label` prop, which will be used as an `aria-label` on the HTML tag." + details);
  } else if (props[propName] != null && !Object(_reach_utils__WEBPACK_IMPORTED_MODULE_2__["isString"])(props[propName])) {
    return new Error("Invalid prop `" + propName + "` supplied to `" + compName + "`. Expected `string`, received `" + (Array.isArray(propFullName) ? "array" : typeof propFullName) + "`.");
  }

  return null;
}

/* harmony default export */ __webpack_exports__["default"] = (Dialog);

//# sourceMappingURL=dialog.esm.js.map


/***/ }),

/***/ "./node_modules/@reach/portal/dist/portal.esm.js":
/*!*******************************************************!*\
  !*** ./node_modules/@reach/portal/dist/portal.esm.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reach_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reach/utils */ "./node_modules/@reach/utils/dist/utils.esm.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);




/**
 * Welcome to @reach/portal!
 *
 * Creates and appends a DOM node to the end of `document.body` and renders a
 * React tree into it. Useful for rendering a natural React element hierarchy
 * with a different DOM hierarchy to prevent parent styles from clipping or
 * hiding content (for popovers, dropdowns, and modals).
 *
 * @see Docs   https://reacttraining.com/reach-ui/portal
 * @see Source https://github.com/reach/reach-ui/tree/master/packages/portal
 * @see React  https://reactjs.org/docs/portals.html
 */
/**
 * Portal
 *
 * @see Docs https://reacttraining.com/reach-ui/portal#portal
 */

var Portal = function Portal(_ref) {
  var children = _ref.children,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? "reach-portal" : _ref$type;
  var mountNode = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var portalNode = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      forceUpdate = _useState[1];

  Object(_reach_utils__WEBPACK_IMPORTED_MODULE_1__["useIsomorphicLayoutEffect"])(function () {
    // It's possible that the content of the portal has, itself, been portaled.
    // In that case, it's important to append to the correct document element.
    var ownerDocument = mountNode.current.ownerDocument;
    portalNode.current = ownerDocument === null || ownerDocument === void 0 ? void 0 : ownerDocument.createElement(type);
    ownerDocument.body.appendChild(portalNode.current);
    forceUpdate({});
    return function () {
      if (portalNode.current && portalNode.current.ownerDocument) {
        portalNode.current.ownerDocument.body.removeChild(portalNode.current);
      }
    };
  }, [type]);
  return portalNode.current ? Object(react_dom__WEBPACK_IMPORTED_MODULE_2__["createPortal"])(children, portalNode.current) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    ref: mountNode
  });
};

if (true) {
  Portal.displayName = "Portal";
}

/* harmony default export */ __webpack_exports__["default"] = (Portal);
//# sourceMappingURL=portal.esm.js.map


/***/ }),

/***/ "./node_modules/@reach/tabs/dist/tabs.esm.js":
/*!***************************************************!*\
  !*** ./node_modules/@reach/tabs/dist/tabs.esm.js ***!
  \***************************************************/
/*! exports provided: Tab, TabList, TabPanel, TabPanels, Tabs, TabsKeyboardActivation, TabsOrientation, useTabsContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab", function() { return Tab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabList", function() { return TabList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabPanel", function() { return TabPanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabPanels", function() { return TabPanels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tabs", function() { return Tabs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsKeyboardActivation", function() { return TabsKeyboardActivation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsOrientation", function() { return TabsOrientation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTabsContext", function() { return useTabsContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reach_descendants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reach/descendants */ "./node_modules/@reach/descendants/dist/descendants.esm.js");
/* harmony import */ var _reach_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reach/utils */ "./node_modules/@reach/utils/dist/utils.esm.js");
/* harmony import */ var _reach_auto_id__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @reach/auto-id */ "./node_modules/@reach/auto-id/dist/auto-id.esm.js");






function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var TabsDescendantsContext = /*#__PURE__*/Object(_reach_descendants__WEBPACK_IMPORTED_MODULE_2__["createDescendantContext"])("TabsDescendantsContext");
var TabPanelDescendantsContext = /*#__PURE__*/Object(_reach_descendants__WEBPACK_IMPORTED_MODULE_2__["createDescendantContext"])("TabPanelDescendantsContext");
var TabsContext = /*#__PURE__*/Object(_reach_utils__WEBPACK_IMPORTED_MODULE_3__["createNamedContext"])("TabsContext", {});
var TabsKeyboardActivation;

(function (TabsKeyboardActivation) {
  TabsKeyboardActivation["Auto"] = "auto";
  TabsKeyboardActivation["Manual"] = "manual";
})(TabsKeyboardActivation || (TabsKeyboardActivation = {}));

var TabsOrientation;

(function (TabsOrientation) {
  TabsOrientation["Horizontal"] = "horizontal";
  TabsOrientation["Vertical"] = "vertical";
})(TabsOrientation || (TabsOrientation = {})); ////////////////////////////////////////////////////////////////////////////////

/**
 * Tabs
 *
 * The parent component of the tab interface.
 *
 * @see Docs https://reacttraining.com/reach-ui/tabs#tabs
 */


var Tabs = /*#__PURE__*/Object(_reach_utils__WEBPACK_IMPORTED_MODULE_3__["forwardRefWithAs"])(function Tabs(_ref, ref) {
  var _props$id;

  var _ref$as = _ref.as,
      Comp = _ref$as === void 0 ? "div" : _ref$as,
      children = _ref.children,
      defaultIndex = _ref.defaultIndex,
      _ref$orientation = _ref.orientation,
      orientation = _ref$orientation === void 0 ? TabsOrientation.Horizontal : _ref$orientation,
      _ref$index = _ref.index,
      controlledIndex = _ref$index === void 0 ? undefined : _ref$index,
      _ref$keyboardActivati = _ref.keyboardActivation,
      keyboardActivation = _ref$keyboardActivati === void 0 ? TabsKeyboardActivation.Auto : _ref$keyboardActivati,
      onChange = _ref.onChange,
      _ref$readOnly = _ref.readOnly,
      readOnly = _ref$readOnly === void 0 ? false : _ref$readOnly,
      props = _objectWithoutPropertiesLoose(_ref, ["as", "children", "defaultIndex", "orientation", "index", "keyboardActivation", "onChange", "readOnly"]);

  var isControlled = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(controlledIndex != null);
  Object(_reach_utils__WEBPACK_IMPORTED_MODULE_3__["useControlledSwitchWarning"])(controlledIndex, "index", "Tabs");

  var _id = Object(_reach_auto_id__WEBPACK_IMPORTED_MODULE_4__["useId"])(props.id);

  var id = (_props$id = props.id) !== null && _props$id !== void 0 ? _props$id : Object(_reach_utils__WEBPACK_IMPORTED_MODULE_3__["makeId"])("tabs", _id); // We only manage focus if the user caused the update vs. a new controlled
  // index coming in.

  var userInteractedRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
  var selectedPanelRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var isRTL = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);

  var _useControlledState = Object(_reach_utils__WEBPACK_IMPORTED_MODULE_3__["useControlledState"])(controlledIndex, defaultIndex !== null && defaultIndex !== void 0 ? defaultIndex : 0),
      selectedIndex = _useControlledState[0],
      setSelectedIndex = _useControlledState[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(-1),
      focusedIndex = _useState[0],
      setFocusedIndex = _useState[1];

  var _useDescendants = Object(_reach_descendants__WEBPACK_IMPORTED_MODULE_2__["useDescendants"])(),
      tabs = _useDescendants[0],
      setTabs = _useDescendants[1];

  var context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return {
      focusedIndex: focusedIndex,
      id: id,
      isControlled: isControlled.current,
      isRTL: isRTL,
      keyboardActivation: keyboardActivation,
      onFocusPanel: function onFocusPanel() {
        var _selectedPanelRef$cur;

        (_selectedPanelRef$cur = selectedPanelRef.current) === null || _selectedPanelRef$cur === void 0 ? void 0 : _selectedPanelRef$cur.focus();
      },
      onSelectTab: readOnly ? _reach_utils__WEBPACK_IMPORTED_MODULE_3__["noop"] : function (index) {
        userInteractedRef.current = true;
        onChange && onChange(index);
        setSelectedIndex(index);
      },
      onSelectTabWithKeyboard: readOnly ? _reach_utils__WEBPACK_IMPORTED_MODULE_3__["noop"] : function (index) {
        var _tabs$index$element;

        userInteractedRef.current = true;

        switch (keyboardActivation) {
          case TabsKeyboardActivation.Manual:
            (_tabs$index$element = tabs[index].element) === null || _tabs$index$element === void 0 ? void 0 : _tabs$index$element.focus();
            return;

          case TabsKeyboardActivation.Auto:
          default:
            onChange && onChange(index);
            setSelectedIndex(index);
            return;
        }
      },
      orientation: orientation,
      selectedIndex: selectedIndex,
      selectedPanelRef: selectedPanelRef,
      setFocusedIndex: setFocusedIndex,
      setSelectedIndex: setSelectedIndex,
      userInteractedRef: userInteractedRef
    };
  }, [focusedIndex, id, keyboardActivation, onChange, orientation, readOnly, selectedIndex, setSelectedIndex, tabs]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return Object(_reach_utils__WEBPACK_IMPORTED_MODULE_3__["checkStyles"])("tabs");
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_descendants__WEBPACK_IMPORTED_MODULE_2__["DescendantProvider"], {
    context: TabsDescendantsContext,
    items: tabs,
    set: setTabs
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TabsContext.Provider, {
    value: context
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp, Object.assign({}, props, {
    ref: ref,
    "data-reach-tabs": "",
    "data-orientation": orientation,
    id: props.id
  }), Object(_reach_utils__WEBPACK_IMPORTED_MODULE_3__["isFunction"])(children) ? children({
    focusedIndex: focusedIndex,
    id: id,
    selectedIndex: selectedIndex
  }) : children)));
});

if (true) {
  Tabs.displayName = "Tabs";
  Tabs.propTypes = {
    children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired,
    onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
    orientation: /*#__PURE__*/prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf( /*#__PURE__*/Object.values(TabsOrientation)),
    index: function index(props, name, compName, location, propName) {
      var val = props[name];

      if (props.index > -1 && props.onChange == null && props.readOnly !== true) {
        return new Error("You provided a value prop to `" + compName + "` without an `onChange` handler. This will render a read-only tabs element. If the tabs should be mutable use `defaultIndex`. Otherwise, set `onChange`.");
      } else if (props[name] != null && !Object(_reach_utils__WEBPACK_IMPORTED_MODULE_3__["isNumber"])(props[name])) {
        return new Error("Invalid prop `" + propName + "` supplied to `" + compName + "`. Expected `number`, received `" + (Array.isArray(val) ? "array" : typeof val) + "`.");
      }

      return null;
    },
    defaultIndex: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
  };
} ////////////////////////////////////////////////////////////////////////////////

/**
 * TabList
 *
 * The parent component of the tabs.
 *
 * @see Docs https://reacttraining.com/reach-ui/tabs#tablist
 */


var TabListImpl = /*#__PURE__*/Object(_reach_utils__WEBPACK_IMPORTED_MODULE_3__["forwardRefWithAs"])(function TabList(_ref2, forwardedRef) {
  var children = _ref2.children,
      _ref2$as = _ref2.as,
      Comp = _ref2$as === void 0 ? "div" : _ref2$as,
      onKeyDown = _ref2.onKeyDown,
      props = _objectWithoutPropertiesLoose(_ref2, ["children", "as", "onKeyDown"]);

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(TabsContext),
      focusedIndex = _useContext.focusedIndex,
      isControlled = _useContext.isControlled,
      isRTL = _useContext.isRTL,
      keyboardActivation = _useContext.keyboardActivation,
      onSelectTabWithKeyboard = _useContext.onSelectTabWithKeyboard,
      orientation = _useContext.orientation,
      selectedIndex = _useContext.selectedIndex,
      setSelectedIndex = _useContext.setSelectedIndex;

  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(TabsDescendantsContext),
      tabs = _useContext2.descendants;

  var ownRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var ref = Object(_reach_utils__WEBPACK_IMPORTED_MODULE_3__["useForkedRef"])(forwardedRef, ownRef);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (ownRef.current && (ownRef.current.ownerDocument && ownRef.current.ownerDocument.dir === "rtl" || Object(_reach_utils__WEBPACK_IMPORTED_MODULE_3__["getElementComputedStyle"])(ownRef.current, "direction") === "rtl")) {
      isRTL.current = true;
    }
  }, [isRTL]);
  var handleKeyDown = Object(_reach_utils__WEBPACK_IMPORTED_MODULE_3__["useEventCallback"])(Object(_reach_utils__WEBPACK_IMPORTED_MODULE_3__["wrapEvent"])(onKeyDown, Object(_reach_descendants__WEBPACK_IMPORTED_MODULE_2__["useDescendantKeyDown"])(TabsDescendantsContext, {
    currentIndex: keyboardActivation === TabsKeyboardActivation.Manual ? focusedIndex : selectedIndex,
    orientation: orientation,
    rotate: true,
    callback: onSelectTabWithKeyboard,
    filter: function filter(tab) {
      return !tab.disabled;
    },
    rtl: isRTL.current
  })));
  Object(_reach_utils__WEBPACK_IMPORTED_MODULE_3__["useIsomorphicLayoutEffect"])(function () {
    var _tabs$selectedIndex;

    // In the event an uncontrolled component's selected index is disabled,
    // (this should only happen if the first tab is disabled and no default
    // index is set), we need to override the selection to the next selectable
    // index value.
    if (!isControlled && Object(_reach_utils__WEBPACK_IMPORTED_MODULE_3__["boolOrBoolString"])((_tabs$selectedIndex = tabs[selectedIndex]) === null || _tabs$selectedIndex === void 0 ? void 0 : _tabs$selectedIndex.disabled)) {
      var next = tabs.find(function (tab) {
        return !tab.disabled;
      });

      if (next) {
        setSelectedIndex(next.index);
      }
    }
  }, [tabs, isControlled, selectedIndex, setSelectedIndex]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp // The element that serves as the container for the set of tabs has role
  // `tablist`
  // https://www.w3.org/TR/wai-aria-practices-1.2/#tabpanel
  , Object.assign({
    // The element that serves as the container for the set of tabs has role
    // `tablist`
    // https://www.w3.org/TR/wai-aria-practices-1.2/#tabpanel
    role: "tablist",
    "aria-orientation": orientation
  }, props, {
    "data-reach-tab-list": "",
    ref: ref,
    onKeyDown: handleKeyDown
  }), react__WEBPACK_IMPORTED_MODULE_0__["Children"].map(children, function (child, index) {
    // TODO: Remove in 1.0
    return Object(_reach_utils__WEBPACK_IMPORTED_MODULE_3__["cloneValidElement"])(child, {
      isSelected: index === selectedIndex
    });
  }));
});
var TabList = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(TabListImpl);

if (true) {
  TabList.displayName = "TabList";
  TabListImpl.displayName = "TabList";
  TabListImpl.propTypes = {
    as: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
    children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
  };
}

/**
 * Tab
 *
 * The interactive element that changes the selected panel.
 *
 * @see Docs https://reacttraining.com/reach-ui/tabs#tab
 */

var Tab = /*#__PURE__*/Object(_reach_utils__WEBPACK_IMPORTED_MODULE_3__["forwardRefWithAs"])(function Tab(_ref3, forwardedRef) {
  var children = _ref3.children,
      _ = _ref3.isSelected,
      _ref3$as = _ref3.as,
      Comp = _ref3$as === void 0 ? "button" : _ref3$as,
      disabled = _ref3.disabled,
      onBlur = _ref3.onBlur,
      onFocus = _ref3.onFocus,
      props = _objectWithoutPropertiesLoose(_ref3, ["children", "isSelected", "as", "disabled", "onBlur", "onFocus"]);

  var _useContext3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(TabsContext),
      tabsId = _useContext3.id,
      onSelectTab = _useContext3.onSelectTab,
      orientation = _useContext3.orientation,
      selectedIndex = _useContext3.selectedIndex,
      userInteractedRef = _useContext3.userInteractedRef,
      setFocusedIndex = _useContext3.setFocusedIndex;

  var ownRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var ref = Object(_reach_utils__WEBPACK_IMPORTED_MODULE_3__["useForkedRef"])(forwardedRef, ownRef);
  var index = Object(_reach_descendants__WEBPACK_IMPORTED_MODULE_2__["useDescendant"])({
    element: ownRef.current,
    context: TabsDescendantsContext,
    disabled: !!disabled
  });
  var isSelected = index === selectedIndex;

  function onSelect() {
    onSelectTab(index);
  }

  Object(_reach_utils__WEBPACK_IMPORTED_MODULE_3__["useUpdateEffect"])(function () {
    if (isSelected && ownRef.current && userInteractedRef.current) {
      userInteractedRef.current = false;
      ownRef.current.focus();
    }
  }, [isSelected]);
  var handleFocus = Object(_reach_utils__WEBPACK_IMPORTED_MODULE_3__["useEventCallback"])(Object(_reach_utils__WEBPACK_IMPORTED_MODULE_3__["wrapEvent"])(onFocus, function () {
    setFocusedIndex(index);
  }));
  var handleBlur = Object(_reach_utils__WEBPACK_IMPORTED_MODULE_3__["useEventCallback"])(Object(_reach_utils__WEBPACK_IMPORTED_MODULE_3__["wrapEvent"])(onFocus, function () {
    setFocusedIndex(-1);
  }));
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp // Each element with role `tab` has the property `aria-controls` referring
  // to its associated `tabpanel` element.
  // https://www.w3.org/TR/wai-aria-practices-1.2/#tabpanel
  , Object.assign({
    "aria-controls": Object(_reach_utils__WEBPACK_IMPORTED_MODULE_3__["makeId"])(tabsId, "panel", index),
    "aria-disabled": disabled,
    "aria-selected": isSelected,
    // Each element that serves as a tab has role `tab` and is contained
    // within the element with role `tablist`.
    // https://www.w3.org/TR/wai-aria-practices-1.2/#tabpanel
    role: "tab",
    tabIndex: isSelected ? 0 : -1
  }, props, {
    ref: ref,
    "data-reach-tab": "",
    "data-orientation": orientation,
    "data-selected": isSelected ? "" : undefined,
    disabled: disabled,
    id: Object(_reach_utils__WEBPACK_IMPORTED_MODULE_3__["makeId"])(tabsId, "tab", index),
    onClick: onSelect,
    onFocus: handleFocus,
    onBlur: handleBlur
  }), children);
});

if (true) {
  Tab.displayName = "Tab";
  Tab.propTypes = {
    children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
    disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
  };
} ////////////////////////////////////////////////////////////////////////////////

/**
 * TabPanels
 *
 * The parent component of the panels.
 *
 * @see Docs https://reacttraining.com/reach-ui/tabs#tabpanels
 */


var TabPanelsImpl = /*#__PURE__*/Object(_reach_utils__WEBPACK_IMPORTED_MODULE_3__["forwardRefWithAs"])(function TabPanels(_ref4, forwardedRef) {
  var children = _ref4.children,
      _ref4$as = _ref4.as,
      Comp = _ref4$as === void 0 ? "div" : _ref4$as,
      props = _objectWithoutPropertiesLoose(_ref4, ["children", "as"]);

  var ownRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var ref = Object(_reach_utils__WEBPACK_IMPORTED_MODULE_3__["useForkedRef"])(ownRef, forwardedRef);

  var _useDescendants2 = Object(_reach_descendants__WEBPACK_IMPORTED_MODULE_2__["useDescendants"])(),
      tabPanels = _useDescendants2[0],
      setTabPanels = _useDescendants2[1];

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_descendants__WEBPACK_IMPORTED_MODULE_2__["DescendantProvider"], {
    context: TabPanelDescendantsContext,
    items: tabPanels,
    set: setTabPanels
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp, Object.assign({}, props, {
    ref: ref,
    "data-reach-tab-panels": ""
  }), children));
});
var TabPanels = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(TabPanelsImpl);

if (true) {
  TabPanels.displayName = "TabPanels";
  TabPanelsImpl.displayName = "TabPanels";
  TabPanelsImpl.propTypes = {
    as: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
    children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
  };
}

/**
 * TabPanel
 *
 * The panel that displays when it's corresponding tab is active.
 *
 * @see Docs https://reacttraining.com/reach-ui/tabs#tabpanel
 */

var TabPanel = /*#__PURE__*/Object(_reach_utils__WEBPACK_IMPORTED_MODULE_3__["forwardRefWithAs"])(function TabPanel(_ref5, forwardedRef) {
  var children = _ref5.children,
      ariaLabel = _ref5["aria-label"],
      _ref5$as = _ref5.as,
      Comp = _ref5$as === void 0 ? "div" : _ref5$as,
      props = _objectWithoutPropertiesLoose(_ref5, ["children", "aria-label", "as"]);

  var _useContext4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(TabsContext),
      selectedPanelRef = _useContext4.selectedPanelRef,
      selectedIndex = _useContext4.selectedIndex,
      tabsId = _useContext4.id;

  var ownRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var index = Object(_reach_descendants__WEBPACK_IMPORTED_MODULE_2__["useDescendant"])({
    element: ownRef.current,
    context: TabPanelDescendantsContext
  });
  var isSelected = index === selectedIndex;
  var id = Object(_reach_utils__WEBPACK_IMPORTED_MODULE_3__["makeId"])(tabsId, "panel", index);
  var ref = Object(_reach_utils__WEBPACK_IMPORTED_MODULE_3__["useForkedRef"])(forwardedRef, ownRef, isSelected ? selectedPanelRef : null);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp // Each element with role `tabpanel` has the property `aria-labelledby`
  // referring to its associated tab element.
  , Object.assign({
    "aria-labelledby": Object(_reach_utils__WEBPACK_IMPORTED_MODULE_3__["makeId"])(tabsId, "tab", index),
    hidden: !isSelected,
    // Each element that contains the content panel for a tab has role
    // `tabpanel`.
    // https://www.w3.org/TR/wai-aria-practices-1.2/#tabpanel
    role: "tabpanel",
    tabIndex: isSelected ? 0 : -1
  }, props, {
    ref: ref,
    "data-reach-tab-panel": "",
    id: id
  }), children);
});

if (true) {
  TabPanel.displayName = "TabPanel";
  TabPanel.propTypes = {
    as: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
    children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
  };
} ////////////////////////////////////////////////////////////////////////////////

/**
 * A hook that exposes data for a given `Tabs` component to its descendants.
 *
 * @see Docs https://reacttraining.com/reach-ui/tabs#usetabscontext
 */


function useTabsContext() {
  var _useContext5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(TabsContext),
      focusedIndex = _useContext5.focusedIndex,
      id = _useContext5.id,
      selectedIndex = _useContext5.selectedIndex;

  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return {
      focusedIndex: focusedIndex,
      id: id,
      selectedIndex: selectedIndex
    };
  }, [focusedIndex, id, selectedIndex]);
}


//# sourceMappingURL=tabs.esm.js.map


/***/ }),

/***/ "./node_modules/@reach/utils/dist/utils.esm.js":
/*!*****************************************************!*\
  !*** ./node_modules/@reach/utils/dist/utils.esm.js ***!
  \*****************************************************/
/*! exports provided: warning, assignRef, boolOrBoolString, canUseDOM, checkStyles, cloneValidElement, createNamedContext, forwardRefWithAs, getDocumentDimensions, getElementComputedStyle, getOwnerDocument, getOwnerWindow, getScrollPosition, getScrollbarOffset, isBoolean, isFunction, isNumber, isRightClick, isString, makeId, noop, ponyfillGlobal, stateToAttributeString, useCallbackProp, useCheckStyles, useConstant, useControlledState, useControlledSwitchWarning, useEventCallback, useEventListener, useFocusChange, useForkedRef, useIsomorphicLayoutEffect, usePrevious, useStateLogger, useUpdateEffect, wrapEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assignRef", function() { return assignRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boolOrBoolString", function() { return boolOrBoolString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canUseDOM", function() { return canUseDOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkStyles", function() { return checkStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneValidElement", function() { return cloneValidElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNamedContext", function() { return createNamedContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forwardRefWithAs", function() { return forwardRefWithAs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDocumentDimensions", function() { return getDocumentDimensions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getElementComputedStyle", function() { return getElementComputedStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOwnerDocument", function() { return getOwnerDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOwnerWindow", function() { return getOwnerWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScrollPosition", function() { return getScrollPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScrollbarOffset", function() { return getScrollbarOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return isBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRightClick", function() { return isRightClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeId", function() { return makeId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ponyfillGlobal", function() { return ponyfillGlobal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stateToAttributeString", function() { return stateToAttributeString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCallbackProp", function() { return useCallbackProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCheckStyles", function() { return useCheckStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useConstant", function() { return useConstant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useControlledState", function() { return useControlledState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useControlledSwitchWarning", function() { return useControlledSwitchWarning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEventCallback", function() { return useEventCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEventListener", function() { return useEventListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFocusChange", function() { return useFocusChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useForkedRef", function() { return useForkedRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useIsomorphicLayoutEffect", function() { return useIsomorphicLayoutEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePrevious", function() { return usePrevious; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStateLogger", function() { return useStateLogger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUpdateEffect", function() { return useUpdateEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapEvent", function() { return wrapEvent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "warning", function() { return warning__WEBPACK_IMPORTED_MODULE_1___default.a; });




/* eslint-disable no-restricted-globals, eqeqeq,  */
/**
 * React currently throws a warning when using useLayoutEffect on the server.
 * To get around it, we can conditionally useEffect on the server (no-op) and
 * useLayoutEffect in the browser. We occasionally need useLayoutEffect to
 * ensure we don't get a render flash for certain operations, but we may also
 * need affected components to render on the server. One example is when setting
 * a component's descendants to retrieve their index values.
 *
 * Important to note that using this hook as an escape hatch will break the
 * eslint dependency warnings unless you rename the import to `useLayoutEffect`.
 * Use sparingly only when the effect won't effect the rendered HTML to avoid
 * any server/client mismatch.
 *
 * If a useLayoutEffect is needed and the result would create a mismatch, it's
 * likely that the component in question shouldn't be rendered on the server at
 * all, so a better approach would be to lazily render those in a parent
 * component after client-side hydration.
 *
 * TODO: We are calling useLayoutEffect in a couple of places that will likely
 * cause some issues for SSR users, whether the warning shows or not. Audit and
 * fix these.
 *
 * https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85
 * https://github.com/reduxjs/react-redux/blob/master/src/utils/useIsomorphicLayoutEffect.js
 *
 * @param effect
 * @param deps
 */

var useIsomorphicLayoutEffect = /*#__PURE__*/canUseDOM() ? react__WEBPACK_IMPORTED_MODULE_0___default.a.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect;
var checkedPkgs = {};
/**
 * When in dev mode, checks that styles for a given @reach package are loaded.
 *
 * @param packageName Name of the package to check.
 * @example checkStyles("dialog") will check for styles for @reach/dialog
 */
// @ts-ignore

var checkStyles = function checkStyles(packageName) {
  return void packageName;
};

if (true) {
  // In CJS files, process.env.NODE_ENV is stripped from our build, but we need
  // it to prevent style checks from clogging up user logs while testing.
  // This is a workaround until we can tweak the build a bit to accommodate.
  var _ref = typeof process !== "undefined" ? process : {
    env: {
      NODE_ENV: "development"
    }
  },
      env = _ref.env;

  checkStyles = function checkStyles(packageName) {
    // only check once per package
    if (checkedPkgs[packageName]) return;
    checkedPkgs[packageName] = true;

    if (env.NODE_ENV !== "test" && parseInt(window.getComputedStyle(document.body).getPropertyValue("--reach-" + packageName), 10) !== 1) {
      console.warn("@reach/" + packageName + " styles not found. If you are using a bundler like webpack or parcel include this in the entry file of your app before any of your own styles:\n\n    import \"@reach/" + packageName + "/styles.css\";\n\n  Otherwise you'll need to include them some other way:\n\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"node_modules/@reach/" + packageName + "/styles.css\" />\n\n  For more information visit https://ui.reach.tech/styling.\n  ");
    }
  };
}
/**
 * Ponyfill for the global object in some environments.
 *
 * @link https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
 */

var ponyfillGlobal = typeof window != "undefined" && window.Math == Math ? window : typeof self != "undefined" && self.Math == Math ? self :
/*#__PURE__*/
// eslint-disable-next-line no-new-func
Function("return this")();
/**
 * Passes or assigns an arbitrary value to a ref function or object.
 *
 * @param ref
 * @param value
 */

function assignRef(ref, value) {
  if (ref == null) return;

  if (isFunction(ref)) {
    ref(value);
  } else {
    try {
      ref.current = value;
    } catch (error) {
      throw new Error("Cannot assign value \"" + value + "\" to ref \"" + ref + "\"");
    }
  }
}
/**
 * Checks true|"true" vs false|"false"
 *
 * @param value
 */

function boolOrBoolString(value) {
  return value === "true" ? true : isBoolean(value) ? value : false;
}
function canUseDOM() {
  return typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
}
/**
 * Type-safe clone element
 *
 * @param element
 * @param props
 * @param children
 */

function cloneValidElement(element, props) {
  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  return Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(element) ? react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"].apply(void 0, [element, props].concat(children)) : element;
}
function createNamedContext(name, defaultValue) {
  var Ctx = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(defaultValue);
  Ctx.displayName = name;
  return Ctx;
}
/**
 * This is a hack for sure. The thing is, getting a component to intelligently
 * infer props based on a component or JSX string passed into an `as` prop is
 * kind of a huge pain. Getting it to work and satisfy the constraints of
 * `forwardRef` seems dang near impossible. To avoid needing to do this awkward
 * type song-and-dance every time we want to forward a ref into a component
 * that accepts an `as` prop, we abstract all of that mess to this function for
 * the time time being.
 *
 * TODO: Eventually we should probably just try to get the type defs above
 * working across the board, but ain't nobody got time for that mess!
 *
 * @param Comp
 */

function forwardRefWithAs(comp) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(comp);
}
/**
 * Get the size of the working document minus the scrollbar offset.
 *
 * @param element
 */

function getDocumentDimensions(element) {
  if (!canUseDOM()) return {
    width: 0,
    height: 0
  };
  var doc = element ? getOwnerDocument(element) : document;
  var win = element ? getOwnerWindow(element) : window;
  return {
    width: doc.documentElement.clientWidth || win.innerWidth,
    height: doc.documentElement.clientHeight || win.innerHeight
  };
}
/**
 * Get the scoll position of the global window object relative to a given node.
 *
 * @param element
 */

function getScrollPosition(element) {
  if (!canUseDOM()) return {
    scrollX: 0,
    scrollY: 0
  };
  var win = element ? getOwnerWindow(element) : window;
  return {
    scrollX: win.scrollX,
    scrollY: win.scrollY
  };
}
/**
 * Get a computed style value by property, backwards compatible with IE
 * @param element
 * @param styleProp
 */

function getElementComputedStyle(element, styleProp) {
  var y = null;
  var doc = getOwnerDocument(element);

  if (element.currentStyle) {
    y = element.currentStyle[styleProp];
  } else if (doc && doc.defaultView && isFunction(doc.defaultView.getComputedStyle)) {
    y = doc.defaultView.getComputedStyle(element, null).getPropertyValue(styleProp);
  }

  return y;
}
/**
 * Get an element's owner document. Useful when components are used in iframes
 * or other environments like dev tools.
 *
 * @param element
 */

function getOwnerDocument(element) {
  return element && element.ownerDocument ? element.ownerDocument : canUseDOM() ? document : null;
}
function getOwnerWindow(element) {
  var doc = element ? getOwnerDocument(element) : null;
  return doc ? doc.defaultView || window : null;
}
/**
 * Get the scrollbar offset distance.
 *
 * TODO: Remove in 1.0 (we used this in public examples)
 */

function getScrollbarOffset() {
  try {
    if (window.innerWidth > document.documentElement.clientWidth) {
      return window.innerWidth - document.documentElement.clientWidth;
    }
  } catch (err) {}

  return 0;
}
/**
 * Checks whether or not a value is a boolean.
 *
 * @param value
 */

function isBoolean(value) {
  return typeof value === "boolean";
}
/**
 * Checks whether or not a value is a function.
 *
 * @param value
 */

function isFunction(value) {
  return !!(value && {}.toString.call(value) == "[object Function]");
}
/**
 * Checks whether or not a value is a number.
 *
 * @param value
 */

function isNumber(value) {
  return typeof value === "number";
}
/**
 * Detects right clicks
 *
 * @param nativeEvent
 */

function isRightClick(nativeEvent) {
  return nativeEvent.which === 3 || nativeEvent.button === 2;
}
/**
 * Checks whether or not a value is a string.
 *
 * @param value
 */

function isString(value) {
  return typeof value === "string";
}
/**
 * Joins strings to format IDs for compound components.
 *
 * @param args
 */

function makeId() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  return args.filter(function (val) {
    return val != null;
  }).join("--");
}
/**
 * No-op function.
 */

function noop() {}
/**
 * Convert our state strings for HTML data attributes.
 * No need for a fancy kebab-caser here, we know what our state strings are!
 *
 * @param state
 */

function stateToAttributeString(state) {
  return String(state).replace(/([\s_]+)/g, "-").toLowerCase();
}
/**
 * Check if a component is controlled or uncontrolled and return the correct
 * state value and setter accordingly. If the component state is controlled by
 * the app, the setter is a noop.
 *
 * @param controlPropValue
 * @param defaultValue
 */

function useControlledState(controlPropValue, defaultValue) {
  var isControlled = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(controlPropValue != null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(defaultValue),
      valueState = _useState[0],
      setValue = _useState[1];

  var set = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (n) {
    if (!isControlled.current) {
      setValue(n);
    }
  }, []);
  return [isControlled.current ? controlPropValue : valueState, set];
}
/**
 * Logs a warning in dev mode when a component switches from controlled to
 * uncontrolled, or vice versa
 *
 * A single prop should typically be used to determine whether or not a
 * component is controlled or not.
 *
 * @param controlPropValue
 * @param controlPropName
 * @param componentName
 */

function useControlledSwitchWarning(controlPropValue, controlPropName, componentName) {
  /*
   * Determine whether or not the component is controlled and warn the developer
   * if this changes unexpectedly.
   */
  var isControlled = controlPropValue != null;

  var _useRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(isControlled),
      wasControlled = _useRef.current;

  var effect = noop;

  if (true) {
    effect = function effect() {
       true ? warning__WEBPACK_IMPORTED_MODULE_1___default()(!(!isControlled && wasControlled), "`" + componentName + "` is changing from uncontrolled to be controlled. Reach UI components should not switch from uncontrolled to controlled (or vice versa). Decide between using a controlled or uncontrolled `" + componentName + "` for the lifetime of the component. Check the `" + controlPropName + "` prop.") : undefined;
       true ? warning__WEBPACK_IMPORTED_MODULE_1___default()(!(!isControlled && wasControlled), "`" + componentName + "` is changing from controlled to be uncontrolled. Reach UI components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled `" + componentName + "` for the lifetime of the component. Check the `" + controlPropName + "` prop.") : undefined;
    };
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(effect, [componentName, controlPropName, isControlled]);
}
function useCheckStyles(pkg) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return checkStyles(pkg);
  }, []);
}
/**
 * React hook for creating a value exactly once.
 * @see https://github.com/Andarist/use-constant
 */

function useConstant(fn) {
  var ref = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef();

  if (!ref.current) {
    ref.current = {
      v: fn()
    };
  }

  return ref.current.v;
}
/**
 * @param callback
 */

function useEventCallback(callback) {
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(callback);
  useIsomorphicLayoutEffect(function () {
    ref.current = callback;
  });
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (event) {
    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }

    return ref.current.apply(ref, [event].concat(args));
  }, []);
}
/**
 * @param callback
 */

function useCallbackProp(callback) {
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(callback);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    ref.current = callback;
  });
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    return ref.current && ref.current.apply(ref, arguments);
  }, []);
}
/**
 * Adds a DOM event listener
 *
 * @param eventName
 * @param listener
 * @param element
 */

function useEventListener(eventName, listener, element) {
  if (element === void 0) {
    element = window;
  }

  var savedHandler = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(listener);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    savedHandler.current = listener;
  }, [listener]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var isSupported = element && element.addEventListener;

    if (!isSupported) {
      if (true) {
        console.warn("Event listener not supported on the element provided");
      }

      return;
    }

    function eventListener(event) {
      savedHandler.current(event);
    }

    element.addEventListener(eventName, eventListener);
    return function () {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
}
/**
 * Detect when focus changes in our document.
 *
 * @param handleChange
 * @param when
 * @param ownerDocument
 */

function useFocusChange(handleChange, when, ownerDocument) {
  if (handleChange === void 0) {
    handleChange = console.log;
  }

  if (when === void 0) {
    when = "focus";
  }

  if (ownerDocument === void 0) {
    ownerDocument = document;
  }

  var lastActiveElement = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(ownerDocument.activeElement);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    lastActiveElement.current = ownerDocument.activeElement;

    function onChange(event) {
      if (lastActiveElement.current !== ownerDocument.activeElement) {
        handleChange(ownerDocument.activeElement, lastActiveElement.current, event);
        lastActiveElement.current = ownerDocument.activeElement;
      }
    }

    ownerDocument.addEventListener(when, onChange, true);
    return function () {
      ownerDocument.removeEventListener(when, onChange);
    };
  }, [when, handleChange, ownerDocument]);
}
/**
 * Passes or assigns a value to multiple refs (typically a DOM node). Useful for
 * dealing with components that need an explicit ref for DOM calculations but
 * also forwards refs assigned by an app.
 *
 * @param refs Refs to fork
 */

function useForkedRef() {
  for (var _len4 = arguments.length, refs = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    refs[_key4] = arguments[_key4];
  }

  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    if (refs.every(function (ref) {
      return ref == null;
    })) {
      return null;
    }

    return function (node) {
      refs.forEach(function (ref) {
        assignRef(ref, node);
      });
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, refs);
}
/**
 * Returns the previous value of a reference after a component update.
 *
 * @param value
 */

function usePrevious(value) {
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    ref.current = value;
  }, [value]);
  return ref.current;
}
/**
 * Call an effect after a component update, skipping the initial mount.
 *
 * @param effect Effect to call
 * @param deps Effect dependency list
 */

function useUpdateEffect(effect, deps) {
  var mounted = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (mounted.current) {
      effect();
    } else {
      mounted.current = true;
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, deps);
}
/**
 * Just a lil state logger
 *
 * @param state
 * @param DEBUG
 */

function useStateLogger(state, DEBUG) {
  if (DEBUG === void 0) {
    DEBUG = false;
  }

  var effect = noop;

  if (true) {
    if (DEBUG) {
      effect = function effect() {
        console.group("State Updated");
        console.log("%c" + state, "font-weight: normal; font-size: 120%; font-style: italic;");
        console.groupEnd();
      };
    }
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(effect, [state]);
}
/**
 * Wraps a lib-defined event handler and a user-defined event handler, returning
 * a single handler that allows a user to prevent lib-defined handlers from
 * firing.
 *
 * @param theirHandler User-supplied event handler
 * @param ourHandler Library-supplied event handler
 */

function wrapEvent(theirHandler, ourHandler) {
  return function (event) {
    theirHandler && theirHandler(event);

    if (!event.defaultPrevented) {
      return ourHandler(event);
    }
  };
}


//# sourceMappingURL=utils.esm.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/detect-node/browser.js":
/*!*********************************************!*\
  !*** ./node_modules/detect-node/browser.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;



/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/constants.js":
/*!**********************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/constants.js ***!
  \**********************************************************/
/*! exports provided: FOCUS_GROUP, FOCUS_DISABLED, FOCUS_ALLOW, FOCUS_AUTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOCUS_GROUP", function() { return FOCUS_GROUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOCUS_DISABLED", function() { return FOCUS_DISABLED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOCUS_ALLOW", function() { return FOCUS_ALLOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOCUS_AUTO", function() { return FOCUS_AUTO; });
var FOCUS_GROUP = 'data-focus-lock';
var FOCUS_DISABLED = 'data-focus-lock-disabled';
var FOCUS_ALLOW = 'data-no-focus-lock';
var FOCUS_AUTO = 'data-autofocus-inside';

/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/focusInside.js":
/*!************************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/focusInside.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_all_affected__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/all-affected */ "./node_modules/focus-lock/dist/es2015/utils/all-affected.js");
/* harmony import */ var _utils_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/array */ "./node_modules/focus-lock/dist/es2015/utils/array.js");



var focusInFrame = function focusInFrame(frame) {
  return frame === document.activeElement;
};

var focusInsideIframe = function focusInsideIframe(topNode) {
  return !!Object(_utils_array__WEBPACK_IMPORTED_MODULE_1__["arrayFind"])(Object(_utils_array__WEBPACK_IMPORTED_MODULE_1__["toArray"])(topNode.querySelectorAll('iframe')), focusInFrame);
};

var focusInside = function focusInside(topNode) {
  var activeElement = document && document.activeElement;

  if (!activeElement || activeElement.dataset && activeElement.dataset.focusGuard) {
    return false;
  }
  return Object(_utils_all_affected__WEBPACK_IMPORTED_MODULE_0__["default"])(topNode).reduce(function (result, node) {
    return result || node.contains(activeElement) || focusInsideIframe(node);
  }, false);
};

/* harmony default export */ __webpack_exports__["default"] = (focusInside);

/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/focusIsHidden.js":
/*!**************************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/focusIsHidden.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/array */ "./node_modules/focus-lock/dist/es2015/utils/array.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./node_modules/focus-lock/dist/es2015/constants.js");



var focusIsHidden = function focusIsHidden() {
  return document && Object(_utils_array__WEBPACK_IMPORTED_MODULE_0__["toArray"])(document.querySelectorAll('[' + _constants__WEBPACK_IMPORTED_MODULE_1__["FOCUS_ALLOW"] + ']')).some(function (node) {
    return node.contains(document.activeElement);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (focusIsHidden);

/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/focusMerge.js":
/*!***********************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/focusMerge.js ***!
  \***********************************************************/
/*! exports provided: newFocus, getFocusabledIn, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newFocus", function() { return newFocus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFocusabledIn", function() { return getFocusabledIn; });
/* harmony import */ var _utils_DOMutils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/DOMutils */ "./node_modules/focus-lock/dist/es2015/utils/DOMutils.js");
/* harmony import */ var _utils_firstFocus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/firstFocus */ "./node_modules/focus-lock/dist/es2015/utils/firstFocus.js");
/* harmony import */ var _utils_all_affected__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/all-affected */ "./node_modules/focus-lock/dist/es2015/utils/all-affected.js");
/* harmony import */ var _utils_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/array */ "./node_modules/focus-lock/dist/es2015/utils/array.js");





var findAutoFocused = function findAutoFocused(autoFocusables) {
  return function (node) {
    return !!node.autofocus || node.dataset && !!node.dataset.autofocus || autoFocusables.indexOf(node) >= 0;
  };
};

var isGuard = function isGuard(node) {
  return node && node.dataset && node.dataset.focusGuard;
};
var notAGuard = function notAGuard(node) {
  return !isGuard(node);
};

var newFocus = function newFocus(innerNodes, outerNodes, activeElement, lastNode, autoFocused) {
  var cnt = innerNodes.length;
  var firstFocus = innerNodes[0];
  var lastFocus = innerNodes[cnt - 1];
  var isOnGuard = isGuard(activeElement);

  // focus is inside
  if (innerNodes.indexOf(activeElement) >= 0) {
    return undefined;
  }

  var activeIndex = outerNodes.indexOf(activeElement);
  var lastIndex = outerNodes.indexOf(lastNode || activeIndex);
  var lastNodeInside = innerNodes.indexOf(lastNode);
  var indexDiff = activeIndex - lastIndex;
  var firstNodeIndex = outerNodes.indexOf(firstFocus);
  var lastNodeIndex = outerNodes.indexOf(lastFocus);

  var returnFirstNode = Object(_utils_firstFocus__WEBPACK_IMPORTED_MODULE_1__["pickFocusable"])(innerNodes, 0);
  var returnLastNode = Object(_utils_firstFocus__WEBPACK_IMPORTED_MODULE_1__["pickFocusable"])(innerNodes, cnt - 1);

  // new focus
  if (activeIndex === -1 || lastNodeInside === -1) {
    return innerNodes.indexOf(autoFocused && autoFocused.length ? Object(_utils_firstFocus__WEBPACK_IMPORTED_MODULE_1__["default"])(autoFocused) : Object(_utils_firstFocus__WEBPACK_IMPORTED_MODULE_1__["default"])(innerNodes));
  }
  // old focus
  if (!indexDiff && lastNodeInside >= 0) {
    return lastNodeInside;
  }
  // first element
  if (activeIndex <= firstNodeIndex && isOnGuard && Math.abs(indexDiff) > 1) {
    return returnLastNode;
  }
  // last element
  if (activeIndex >= firstNodeIndex && isOnGuard && Math.abs(indexDiff) > 1) {
    return returnFirstNode;
  }
  // jump out, but not on the guard
  if (indexDiff && Math.abs(indexDiff) > 1) {
    return lastNodeInside;
  }
  // focus above lock
  if (activeIndex <= firstNodeIndex) {
    return returnLastNode;
  }
  // focus below lock
  if (activeIndex > lastNodeIndex) {
    return returnFirstNode;
  }
  // index is inside tab order, but outside Lock
  if (indexDiff) {
    if (Math.abs(indexDiff) > 1) {
      return lastNodeInside;
    }
    return (cnt + lastNodeInside + indexDiff) % cnt;
  }
  // do nothing
  return undefined;
};

var getTopCommonParent = function getTopCommonParent(baseActiveElement, leftEntry, rightEntries) {
  var activeElements = Object(_utils_array__WEBPACK_IMPORTED_MODULE_3__["asArray"])(baseActiveElement);
  var leftEntries = Object(_utils_array__WEBPACK_IMPORTED_MODULE_3__["asArray"])(leftEntry);
  var activeElement = activeElements[0];
  var topCommon = null;
  leftEntries.filter(Boolean).forEach(function (entry) {
    topCommon = Object(_utils_DOMutils__WEBPACK_IMPORTED_MODULE_0__["getCommonParent"])(topCommon || entry, entry) || topCommon;
    rightEntries.filter(Boolean).forEach(function (subEntry) {
      var common = Object(_utils_DOMutils__WEBPACK_IMPORTED_MODULE_0__["getCommonParent"])(activeElement, subEntry);
      if (common) {
        if (!topCommon || common.contains(topCommon)) {
          topCommon = common;
        } else {
          topCommon = Object(_utils_DOMutils__WEBPACK_IMPORTED_MODULE_0__["getCommonParent"])(common, topCommon);
        }
      }
    });
  });
  return topCommon;
};

var allParentAutofocusables = function allParentAutofocusables(entries) {
  return entries.reduce(function (acc, node) {
    return acc.concat(Object(_utils_DOMutils__WEBPACK_IMPORTED_MODULE_0__["parentAutofocusables"])(node));
  }, []);
};

var reorderNodes = function reorderNodes(srcNodes, dstNodes) {
  var remap = new Map();
  // no Set(dstNodes) for IE11 :(
  dstNodes.forEach(function (entity) {
    return remap.set(entity.node, entity);
  });
  // remap to dstNodes
  return srcNodes.map(function (node) {
    return remap.get(node);
  }).filter(Boolean);
};

var getFocusabledIn = function getFocusabledIn(topNode) {
  var entries = Object(_utils_all_affected__WEBPACK_IMPORTED_MODULE_2__["default"])(topNode).filter(notAGuard);
  var commonParent = getTopCommonParent(topNode, topNode, entries);
  var outerNodes = Object(_utils_DOMutils__WEBPACK_IMPORTED_MODULE_0__["getTabbableNodes"])([commonParent], true);
  var innerElements = Object(_utils_DOMutils__WEBPACK_IMPORTED_MODULE_0__["getTabbableNodes"])(entries).filter(function (_ref) {
    var node = _ref.node;
    return notAGuard(node);
  }).map(function (_ref2) {
    var node = _ref2.node;
    return node;
  });

  return outerNodes.map(function (_ref3) {
    var node = _ref3.node,
        index = _ref3.index;
    return {
      node: node,
      index: index,
      lockItem: innerElements.indexOf(node) >= 0,
      guard: isGuard(node)
    };
  });
};

var getFocusMerge = function getFocusMerge(topNode, lastNode) {
  var activeElement = document && document.activeElement;
  var entries = Object(_utils_all_affected__WEBPACK_IMPORTED_MODULE_2__["default"])(topNode).filter(notAGuard);

  var commonParent = getTopCommonParent(activeElement || topNode, topNode, entries);

  var innerElements = Object(_utils_DOMutils__WEBPACK_IMPORTED_MODULE_0__["getTabbableNodes"])(entries).filter(function (_ref4) {
    var node = _ref4.node;
    return notAGuard(node);
  });

  if (!innerElements[0]) {
    innerElements = Object(_utils_DOMutils__WEBPACK_IMPORTED_MODULE_0__["getAllTabbableNodes"])(entries).filter(function (_ref5) {
      var node = _ref5.node;
      return notAGuard(node);
    });
    if (!innerElements[0]) {
      return undefined;
    }
  }

  var outerNodes = Object(_utils_DOMutils__WEBPACK_IMPORTED_MODULE_0__["getTabbableNodes"])([commonParent]).map(function (_ref6) {
    var node = _ref6.node;
    return node;
  });
  var orderedInnerElements = reorderNodes(outerNodes, innerElements);
  var innerNodes = orderedInnerElements.map(function (_ref7) {
    var node = _ref7.node;
    return node;
  });

  var newId = newFocus(innerNodes, outerNodes, activeElement, lastNode, innerNodes.filter(findAutoFocused(allParentAutofocusables(entries))));

  if (newId === undefined) {
    return newId;
  }
  return orderedInnerElements[newId];
};

/* harmony default export */ __webpack_exports__["default"] = (getFocusMerge);

/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/index.js":
/*!******************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/index.js ***!
  \******************************************************/
/*! exports provided: tabHook, focusInside, focusIsHidden, focusMerge, getFocusabledIn, constants, getAllAffectedNodes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tabHook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabHook */ "./node_modules/focus-lock/dist/es2015/tabHook.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tabHook", function() { return _tabHook__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _focusMerge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./focusMerge */ "./node_modules/focus-lock/dist/es2015/focusMerge.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "focusMerge", function() { return _focusMerge__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFocusabledIn", function() { return _focusMerge__WEBPACK_IMPORTED_MODULE_1__["getFocusabledIn"]; });

/* harmony import */ var _focusInside__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./focusInside */ "./node_modules/focus-lock/dist/es2015/focusInside.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "focusInside", function() { return _focusInside__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _focusIsHidden__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./focusIsHidden */ "./node_modules/focus-lock/dist/es2015/focusIsHidden.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "focusIsHidden", function() { return _focusIsHidden__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _setFocus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./setFocus */ "./node_modules/focus-lock/dist/es2015/setFocus.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ "./node_modules/focus-lock/dist/es2015/constants.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "constants", function() { return _constants__WEBPACK_IMPORTED_MODULE_5__; });
/* harmony import */ var _utils_all_affected__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/all-affected */ "./node_modules/focus-lock/dist/es2015/utils/all-affected.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAllAffectedNodes", function() { return _utils_all_affected__WEBPACK_IMPORTED_MODULE_6__["default"]; });











/* harmony default export */ __webpack_exports__["default"] = (_setFocus__WEBPACK_IMPORTED_MODULE_4__["default"]);

/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/setFocus.js":
/*!*********************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/setFocus.js ***!
  \*********************************************************/
/*! exports provided: focusOn, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "focusOn", function() { return focusOn; });
/* harmony import */ var _focusMerge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./focusMerge */ "./node_modules/focus-lock/dist/es2015/focusMerge.js");


var focusOn = function focusOn(target) {
  target.focus();
  if (target.contentWindow) {
    target.contentWindow.focus();
  }
};

var guardCount = 0;
var lockDisabled = false;

/* harmony default export */ __webpack_exports__["default"] = (function (topNode, lastNode) {
  var focusable = Object(_focusMerge__WEBPACK_IMPORTED_MODULE_0__["default"])(topNode, lastNode);

  if (lockDisabled) {
    return;
  }

  if (focusable) {
    if (guardCount > 2) {
      // eslint-disable-next-line no-console
      console.error('FocusLock: focus-fighting detected. Only one focus management system could be active. ' + 'See https://github.com/theKashey/focus-lock/#focus-fighting');
      lockDisabled = true;
      setTimeout(function () {
        lockDisabled = false;
      }, 1);
      return;
    }
    guardCount++;
    focusOn(focusable.node);
    guardCount--;
  }
});

/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/tabHook.js":
/*!********************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/tabHook.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  attach: function attach() {},
  detach: function detach() {}
});

/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/utils/DOMutils.js":
/*!***************************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/utils/DOMutils.js ***!
  \***************************************************************/
/*! exports provided: isVisible, notHiddenInput, getCommonParent, filterFocusable, getTabbableNodes, getAllTabbableNodes, parentAutofocusables */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isVisible", function() { return isVisible; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notHiddenInput", function() { return notHiddenInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCommonParent", function() { return getCommonParent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterFocusable", function() { return filterFocusable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTabbableNodes", function() { return getTabbableNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllTabbableNodes", function() { return getAllTabbableNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parentAutofocusables", function() { return parentAutofocusables; });
/* harmony import */ var _tabOrder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabOrder */ "./node_modules/focus-lock/dist/es2015/utils/tabOrder.js");
/* harmony import */ var _tabUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabUtils */ "./node_modules/focus-lock/dist/es2015/utils/tabUtils.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./array */ "./node_modules/focus-lock/dist/es2015/utils/array.js");




var isElementHidden = function isElementHidden(computedStyle) {
  if (!computedStyle || !computedStyle.getPropertyValue) {
    return false;
  }
  return computedStyle.getPropertyValue('display') === 'none' || computedStyle.getPropertyValue('visibility') === 'hidden';
};

var isVisible = function isVisible(node) {
  return !node || node === document || node.nodeType === Node.DOCUMENT_NODE || !isElementHidden(window.getComputedStyle(node, null)) && isVisible(node.parentNode);
};

var notHiddenInput = function notHiddenInput(node) {
  return !((node.tagName === 'INPUT' || node.tagName === 'BUTTON') && (node.type === 'hidden' || node.disabled));
};

var getParents = function getParents(node) {
  var parents = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  parents.push(node);
  if (node.parentNode) {
    getParents(node.parentNode, parents);
  }
  return parents;
};

var getCommonParent = function getCommonParent(nodea, nodeb) {
  var parentsA = getParents(nodea);
  var parentsB = getParents(nodeb);

  for (var i = 0; i < parentsA.length; i += 1) {
    var currentParent = parentsA[i];
    if (parentsB.indexOf(currentParent) >= 0) {
      return currentParent;
    }
  }
  return false;
};

var filterFocusable = function filterFocusable(nodes) {
  return Object(_array__WEBPACK_IMPORTED_MODULE_2__["toArray"])(nodes).filter(function (node) {
    return isVisible(node);
  }).filter(function (node) {
    return notHiddenInput(node);
  });
};

var getTabbableNodes = function getTabbableNodes(topNodes, withGuards) {
  return Object(_tabOrder__WEBPACK_IMPORTED_MODULE_0__["orderByTabIndex"])(filterFocusable(Object(_tabUtils__WEBPACK_IMPORTED_MODULE_1__["getFocusables"])(topNodes, withGuards)), true, withGuards);
};

var getAllTabbableNodes = function getAllTabbableNodes(topNodes) {
  return Object(_tabOrder__WEBPACK_IMPORTED_MODULE_0__["orderByTabIndex"])(filterFocusable(Object(_tabUtils__WEBPACK_IMPORTED_MODULE_1__["getFocusables"])(topNodes)), false);
};

var parentAutofocusables = function parentAutofocusables(topNode) {
  return filterFocusable(Object(_tabUtils__WEBPACK_IMPORTED_MODULE_1__["getParentAutofocusables"])(topNode));
};

/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/utils/all-affected.js":
/*!*******************************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/utils/all-affected.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./node_modules/focus-lock/dist/es2015/constants.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array */ "./node_modules/focus-lock/dist/es2015/utils/array.js");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };




var filterNested = function filterNested(nodes) {
  var l = nodes.length;
  for (var i = 0; i < l; i += 1) {
    var _loop = function _loop(j) {
      if (i !== j) {
        if (nodes[i].contains(nodes[j])) {
          return {
            v: filterNested(nodes.filter(function (x) {
              return x !== nodes[j];
            }))
          };
        }
      }
    };

    for (var j = 0; j < l; j += 1) {
      var _ret = _loop(j);

      if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
    }
  }
  return nodes;
};

var getTopParent = function getTopParent(node) {
  return node.parentNode ? getTopParent(node.parentNode) : node;
};

var getAllAffectedNodes = function getAllAffectedNodes(node) {
  var nodes = Object(_array__WEBPACK_IMPORTED_MODULE_1__["asArray"])(node);
  return nodes.filter(Boolean).reduce(function (acc, currentNode) {
    var group = currentNode.getAttribute(_constants__WEBPACK_IMPORTED_MODULE_0__["FOCUS_GROUP"]);
    acc.push.apply(acc, group ? filterNested(Object(_array__WEBPACK_IMPORTED_MODULE_1__["toArray"])(getTopParent(currentNode).querySelectorAll('[' + _constants__WEBPACK_IMPORTED_MODULE_0__["FOCUS_GROUP"] + '="' + group + '"]:not([' + _constants__WEBPACK_IMPORTED_MODULE_0__["FOCUS_DISABLED"] + '="disabled"])'))) : [currentNode]);
    return acc;
  }, []);
};

/* harmony default export */ __webpack_exports__["default"] = (getAllAffectedNodes);

/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/utils/array.js":
/*!************************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/utils/array.js ***!
  \************************************************************/
/*! exports provided: toArray, arrayFind, asArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toArray", function() { return toArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayFind", function() { return arrayFind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asArray", function() { return asArray; });
var toArray = function toArray(a) {
  var ret = Array(a.length);
  for (var i = 0; i < a.length; ++i) {
    ret[i] = a[i];
  }
  return ret;
};

var arrayFind = function arrayFind(array, search) {
  return array.filter(function (a) {
    return a === search;
  })[0];
};

var asArray = function asArray(a) {
  return Array.isArray(a) ? a : [a];
};

/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/utils/firstFocus.js":
/*!*****************************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/utils/firstFocus.js ***!
  \*****************************************************************/
/*! exports provided: pickFocusable, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pickFocusable", function() { return pickFocusable; });
var isRadio = function isRadio(node) {
  return node.tagName === 'INPUT' && node.type === 'radio';
};

var findSelectedRadio = function findSelectedRadio(node, nodes) {
  return nodes.filter(isRadio).filter(function (el) {
    return el.name === node.name;
  }).filter(function (el) {
    return el.checked;
  })[0] || node;
};

var pickFirstFocus = function pickFirstFocus(nodes) {
  if (nodes[0] && nodes.length > 1) {
    if (isRadio(nodes[0]) && nodes[0].name) {
      return findSelectedRadio(nodes[0], nodes);
    }
  }
  return nodes[0];
};

var pickFocusable = function pickFocusable(nodes, index) {
  if (nodes.length > 1) {
    if (isRadio(nodes[index]) && nodes[index].name) {
      return nodes.indexOf(findSelectedRadio(nodes[index], nodes));
    }
  }
  return index;
};

/* harmony default export */ __webpack_exports__["default"] = (pickFirstFocus);

/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/utils/tabOrder.js":
/*!***************************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/utils/tabOrder.js ***!
  \***************************************************************/
/*! exports provided: tabSort, orderByTabIndex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tabSort", function() { return tabSort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orderByTabIndex", function() { return orderByTabIndex; });
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array */ "./node_modules/focus-lock/dist/es2015/utils/array.js");


var tabSort = function tabSort(a, b) {
  var tabDiff = a.tabIndex - b.tabIndex;
  var indexDiff = a.index - b.index;

  if (tabDiff) {
    if (!a.tabIndex) return 1;
    if (!b.tabIndex) return -1;
  }

  return tabDiff || indexDiff;
};

var orderByTabIndex = function orderByTabIndex(nodes, filterNegative, keepGuards) {
  return Object(_array__WEBPACK_IMPORTED_MODULE_0__["toArray"])(nodes).map(function (node, index) {
    return {
      node: node,
      index: index,
      tabIndex: keepGuards && node.tabIndex === -1 ? (node.dataset || {}).focusGuard ? 0 : -1 : node.tabIndex
    };
  }).filter(function (data) {
    return !filterNegative || data.tabIndex >= 0;
  }).sort(tabSort);
};

/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/utils/tabUtils.js":
/*!***************************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/utils/tabUtils.js ***!
  \***************************************************************/
/*! exports provided: getFocusables, getParentAutofocusables */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFocusables", function() { return getFocusables; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParentAutofocusables", function() { return getParentAutofocusables; });
/* harmony import */ var _tabbables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabbables */ "./node_modules/focus-lock/dist/es2015/utils/tabbables.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array */ "./node_modules/focus-lock/dist/es2015/utils/array.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./node_modules/focus-lock/dist/es2015/constants.js");




var queryTabbables = _tabbables__WEBPACK_IMPORTED_MODULE_0__["default"].join(',');
var queryGuardTabbables = queryTabbables + ', [data-focus-guard]';

var getFocusables = function getFocusables(parents, withGuards) {
  return parents.reduce(function (acc, parent) {
    return acc.concat(
    // add all tabbables inside
    Object(_array__WEBPACK_IMPORTED_MODULE_1__["toArray"])(parent.querySelectorAll(withGuards ? queryGuardTabbables : queryTabbables)),
    // add if node is tabble itself
    parent.parentNode ? Object(_array__WEBPACK_IMPORTED_MODULE_1__["toArray"])(parent.parentNode.querySelectorAll(_tabbables__WEBPACK_IMPORTED_MODULE_0__["default"].join(','))).filter(function (node) {
      return node === parent;
    }) : []);
  }, []);
};

var getParentAutofocusables = function getParentAutofocusables(parent) {
  var parentFocus = parent.querySelectorAll('[' + _constants__WEBPACK_IMPORTED_MODULE_2__["FOCUS_AUTO"] + ']');
  return Object(_array__WEBPACK_IMPORTED_MODULE_1__["toArray"])(parentFocus).map(function (node) {
    return getFocusables([node]);
  }).reduce(function (acc, nodes) {
    return acc.concat(nodes);
  }, []);
};

/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/utils/tabbables.js":
/*!****************************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/utils/tabbables.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (['button:enabled:not([readonly])', 'select:enabled:not([readonly])', 'textarea:enabled:not([readonly])', 'input:enabled:not([readonly])', 'a[href]', 'area[href]', 'iframe', 'object', 'embed', '[tabindex]', '[contenteditable]', '[autofocus]']);

/***/ }),

/***/ "./node_modules/get-nonce/dist/es2015/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/get-nonce/dist/es2015/index.js ***!
  \*****************************************************/
/*! exports provided: setNonce, getNonce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setNonce", function() { return setNonce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNonce", function() { return getNonce; });
var currentNonce;
var setNonce = function (nonce) {
    currentNonce = nonce;
};
var getNonce = function () {
    if (currentNonce) {
        return currentNonce;
    }
    if (true) {
        return __webpack_require__.nc;
    }
    return undefined;
};


/***/ }),

/***/ "./node_modules/immer/dist/immer.esm.js":
/*!**********************************************!*\
  !*** ./node_modules/immer/dist/immer.esm.js ***!
  \**********************************************/
/*! exports provided: default, Immer, applyPatches, castDraft, castImmutable, createDraft, enableAllPlugins, enableES5, enableMapSet, enablePatches, finishDraft, immerable, isDraft, isDraftable, nothing, original, produce, produceWithPatches, setAutoFreeze, setUseProxies */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Immer", function() { return nn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyPatches", function() { return an; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "castDraft", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "castImmutable", function() { return C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDraft", function() { return fn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableAllPlugins", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableES5", function() { return R; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableMapSet", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enablePatches", function() { return D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "finishDraft", function() { return cn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "immerable", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDraft", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDraftable", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nothing", function() { return q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "original", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "produce", function() { return rn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "produceWithPatches", function() { return en; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAutoFreeze", function() { return on; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUseProxies", function() { return un; });
function n(n){for(var t=arguments.length,r=Array(t>1?t-1:0),e=1;e<t;e++)r[e-1]=arguments[e];if(true){var i=L[n],o=i?"function"==typeof i?i.apply(null,r):i:"unknown error nr: "+n;throw Error("[Immer] "+o)}throw Error("[Immer] minified error nr: "+n+(r.length?" "+r.join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function t(n){return!!n&&!!n[G]}function r(n){return!!n&&(function(n){if(!n||"object"!=typeof n)return!1;var t=Object.getPrototypeOf(n);return!t||t===Object.prototype}(n)||Array.isArray(n)||!!n[B]||!!n.constructor[B]||c(n)||s(n))}function e(n){if(n&&n[G])return n[G].t}function i(n,t,r){void 0===r&&(r=!1),0===o(n)?(r?Object.keys:Q)(n).forEach((function(r){return t(r,n[r],n)})):n.forEach((function(r,e){return t(e,r,n)}))}function o(n){var t=n[G];return t?t.i>3?t.i-4:t.i:Array.isArray(n)?1:c(n)?2:s(n)?3:0}function u(n,t){return 2===o(n)?n.has(t):Object.prototype.hasOwnProperty.call(n,t)}function a(n,t){return 2===o(n)?n.get(t):n[t]}function f(n,t){return n===t?0!==n||1/n==1/t:n!=n&&t!=t}function c(n){return U&&n instanceof Map}function s(n){return W&&n instanceof Set}function v(n){return n.o||n.t}function p(t,r){if(void 0===r&&(r=!1),Array.isArray(t))return t.slice();var e=Object.create(Object.getPrototypeOf(t));return i(t,(function(i){if(i!==G){var o=Object.getOwnPropertyDescriptor(t,i),u=o.value;o.get&&(r||n(1),u=o.get.call(t)),o.enumerable?e[i]=u:Object.defineProperty(e,i,{value:u,writable:!0,configurable:!0})}})),e}function d(n,e){t(n)||h(n)||!r(n)||(o(n)>1&&(n.set=n.add=n.clear=n.delete=l),Object.freeze(n),e&&i(n,(function(n,t){return d(t,!0)}),!0))}function l(){n(2)}function h(n){return null==n||"object"!=typeof n||Object.isFrozen(n)}function y(t){var r=V[t];return r||n( true?18:undefined,t),r}function b(n,t){V[n]=t}function m(){return false||K||n(0),K}function _(n,t){t&&(y("Patches"),n.u=[],n.s=[],n.v=t)}function j(n){O(n),n.p.forEach(w),n.p=null}function O(n){n===K&&(K=n.l)}function g(n){return K={p:[],l:K,h:n,m:!0,_:0}}function w(n){var t=n[G];0===t.i||1===t.i?t.j():t.O=!0}function S(t,e){e._=e.p.length;var i=e.p[0],o=void 0!==t&&t!==i;return e.h.g||y("ES5").S(e,t,o),o?(i[G].P&&(j(e),n(4)),r(t)&&(t=P(e,t),e.l||A(e,t)),e.u&&y("Patches").M(i[G],t,e.u,e.s)):t=P(e,i,[]),j(e),e.u&&e.v(e.u,e.s),t!==q?t:void 0}function P(n,t,r){if(h(t))return t;var e=t[G];if(!e)return i(t,(function(i,o){return M(n,e,t,i,o,r)}),!0),t;if(e.A!==n)return t;if(!e.P)return A(n,e.t,!0),e.t;if(!e.I){e.I=!0,e.A._--;var o=4===e.i||5===e.i?e.o=p(e.k,!0):e.o;i(o,(function(t,i){return M(n,e,o,t,i,r)})),A(n,o,!1),r&&n.u&&y("Patches").R(e,r,n.u,n.s)}return e.o}function M(e,i,c,s,v,p){if( true&&v===c&&n(5),t(v)){var d=P(e,v,p&&i&&3!==i.i&&!u(i.D,s)?p.concat(s):void 0);if(h=s,y=d,2===(b=o(l=c))?l.set(h,y):3===b?(l.delete(h),l.add(y)):l[h]=y,!t(d))return;e.m=!1}var l,h,y,b;if((!i||!f(v,a(i.t,s)))&&r(v)){if(!e.h.N&&e._<1)return;P(e,v),i&&i.A.l||A(e,v)}}function A(n,t,r){void 0===r&&(r=!1),n.h.N&&n.m&&d(t,r)}function z(n,t){var r=n[G],e=Reflect.getOwnPropertyDescriptor(r?v(r):n,t);return e&&e.value}function x(n){if(!n.P){if(n.P=!0,0===n.i||1===n.i){var t=n.o=p(n.t);i(n.p,(function(n,r){t[n]=r})),n.p=void 0}n.l&&x(n.l)}}function I(n){n.o||(n.o=p(n.t))}function E(n,t,r){var e=c(t)?y("MapSet").T(t,r):s(t)?y("MapSet").F(t,r):n.g?function(n,t){var r=Array.isArray(n),e={i:r?1:0,A:t?t.A:m(),P:!1,I:!1,D:{},l:t,t:n,k:null,p:{},o:null,j:null,C:!1},i=e,o=Y;r&&(i=[e],o=Z);var u=Proxy.revocable(i,o),a=u.revoke,f=u.proxy;return e.k=f,e.j=a,f}(t,r):y("ES5").J(t,r);return(r?r.A:m()).p.push(e),e}function k(n,t){n.g?x(t):y("ES5").K(t)}function R(){function e(n,t){var r=n[G];if(r&&!r.$){r.$=!0;var e=n[t];return r.$=!1,e}return n[t]}function o(n){n.P||(n.P=!0,n.l&&o(n.l))}function a(n){n.o||(n.o=c(n.t))}function c(n){var t=n&&n[G];if(t){t.$=!0;var r=p(t.k,!0);return t.$=!1,r}return p(n)}function s(n){for(var t=n.length-1;t>=0;t--){var r=n[t][G];if(!r.P)switch(r.i){case 5:l(r)&&o(r);break;case 4:d(r)&&o(r)}}}function d(n){for(var t=n.t,r=n.k,e=Object.keys(r),i=e.length-1;i>=0;i--){var o=e[i],a=t[o];if(void 0===a&&!u(t,o))return!0;var c=r[o],s=c&&c[G];if(s?s.t!==a:!f(c,a))return!0}return e.length!==Object.keys(t).length}function l(n){var t=n.k;if(t.length!==n.t.length)return!0;var r=Object.getOwnPropertyDescriptor(t,t.length-1);return!(!r||r.get)}function h(t){t.O&&n(3,JSON.stringify(v(t)))}var y={};b("ES5",{J:function(n,t){var u=Array.isArray(n),s=c(n);i(s,(function(t){!function(n,t,i){var u=y[t];u?u.enumerable=i:y[t]=u={enumerable:i,get:function(){return function(n,t){h(n);var i=e(v(n),t);return n.$?i:i===e(n.t,t)&&r(i)?(a(n),n.o[t]=E(n.A.h,i,n)):i}(this[G],t)},set:function(n){!function(n,t,r){if(h(n),n.D[t]=!0,!n.P){if(f(r,e(v(n),t)))return;o(n),a(n)}n.o[t]=r}(this[G],t,n)}},Object.defineProperty(n,t,u)}(s,t,u||function(n,t){var r=Object.getOwnPropertyDescriptor(n,t);return!(!r||!r.enumerable)}(n,t))}));var p={i:u?5:4,A:t?t.A:m(),P:!1,$:!1,I:!1,D:{},l:t,t:n,k:s,o:null,O:!1,C:!1};return Object.defineProperty(s,G,{value:p,writable:!0}),s},K:o,S:function(n,r,e){n.p.forEach((function(n){n[G].$=!0})),e?t(r)&&r[G].A===n&&s(n.p):(n.u&&function n(t){if(t&&"object"==typeof t){var r=t[G];if(r){var e=r.t,a=r.k,f=r.D,c=r.i;if(4===c)i(a,(function(t){t!==G&&(void 0!==e[t]||u(e,t)?f[t]||n(a[t]):(f[t]=!0,o(r)))})),i(e,(function(n){void 0!==a[n]||u(a,n)||(f[n]=!1,o(r))}));else if(5===c){if(l(r)&&(o(r),f.length=!0),a.length<e.length)for(var s=a.length;s<e.length;s++)f[s]=!1;else for(var v=e.length;v<a.length;v++)f[v]=!0;for(var p=Math.min(a.length,e.length),d=0;d<p;d++)void 0===f[d]&&n(a[d])}}}}(n.p[0]),s(n.p))}})}function D(){function r(n){if(!n||"object"!=typeof n)return n;if(Array.isArray(n))return n.map(r);if(c(n))return new Map(Array.from(n.entries()).map((function(n){return[n[0],r(n[1])]})));if(s(n))return new Set(Array.from(n).map(r));var t=Object.create(Object.getPrototypeOf(n));for(var e in n)t[e]=r(n[e]);return t}function e(n){return t(n)?r(n):n}var f="add";b("Patches",{U:function(t,e){return e.forEach((function(e){for(var i=e.path,u=e.op,c=t,s=0;s<i.length-1;s++)"object"!=typeof(c=a(c,i[s]))&&n(15,i.join("/"));var v=o(c),p=r(e.value),d=i[i.length-1];switch(u){case"replace":switch(v){case 2:return c.set(d,p);case 3:n(16);default:return c[d]=p}case f:switch(v){case 1:return c.splice(d,0,p);case 2:return c.set(d,p);case 3:return c.add(p);default:return c[d]=p}case"remove":switch(v){case 1:return c.splice(d,1);case 2:return c.delete(d);case 3:return c.delete(e.value);default:return delete c[d]}default:n(17,u)}})),t},R:function(n,t,r,o){switch(n.i){case 0:case 4:case 2:return function(n,t,r,o){var c=n.t,s=n.o;i(n.D,(function(n,i){var v=a(c,n),p=a(s,n),d=i?u(c,n)?"replace":f:"remove";if(v!==p||"replace"!==d){var l=t.concat(n);r.push("remove"===d?{op:d,path:l}:{op:d,path:l,value:p}),o.push(d===f?{op:"remove",path:l}:"remove"===d?{op:f,path:l,value:e(v)}:{op:"replace",path:l,value:e(v)})}}))}(n,t,r,o);case 5:case 1:return function(n,t,r,i){var o=n.t,u=n.D,a=n.o;if(a.length<o.length){var c=[a,o];o=c[0],a=c[1];var s=[i,r];r=s[0],i=s[1]}for(var v=a.length-o.length,p=0;o[p]===a[p]&&p<o.length;)++p;for(var d=o.length;d>p&&o[d-1]===a[d+v-1];)--d;for(var l=p;l<d;++l)if(u[l]&&a[l]!==o[l]){var h=t.concat([l]);r.push({op:"replace",path:h,value:e(a[l])}),i.push({op:"replace",path:h,value:e(o[l])})}for(var y=r.length,b=d+v-1;b>=d;--b){var m=t.concat([b]);r[y+b-d]={op:f,path:m,value:e(a[b])},i.push({op:"remove",path:m})}}(n,t,r,o);case 3:return function(n,t,r,e){var i=n.t,o=n.o,u=0;i.forEach((function(n){if(!o.has(n)){var i=t.concat([u]);r.push({op:"remove",path:i,value:n}),e.unshift({op:f,path:i,value:n})}u++})),u=0,o.forEach((function(n){if(!i.has(n)){var o=t.concat([u]);r.push({op:f,path:o,value:n}),e.unshift({op:"remove",path:o,value:n})}u++}))}(n,t,r,o)}},M:function(n,t,r,e){r.push({op:"replace",path:[],value:t}),e.push({op:"replace",path:[],value:n.t})}})}function N(){function t(n,t){function r(){this.constructor=n}u(n,t),n.prototype=(r.prototype=t.prototype,new r)}function e(n){n.o||(n.D=new Map,n.o=new Map(n.t))}function i(n){n.o||(n.o=new Set,n.t.forEach((function(t){if(r(t)){var e=E(n.A.h,t,n);n.p.set(t,e),n.o.add(e)}else n.o.add(t)})))}function o(t){t.O&&n(3,JSON.stringify(v(t)))}var u=function(n,t){return(u=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var r in t)t.hasOwnProperty(r)&&(n[r]=t[r])})(n,t)},a=function(){function n(n,t){return this[G]={i:2,l:t,A:t?t.A:m(),P:!1,I:!1,o:void 0,D:void 0,t:n,k:this,C:!1,O:!1},this}t(n,Map);var i=n.prototype;return Object.defineProperty(i,"size",{get:function(){return v(this[G]).size}}),i.has=function(n){return v(this[G]).has(n)},i.set=function(n,t){var r=this[G];return o(r),v(r).get(n)!==t&&(e(r),k(r.A.h,r),r.D.set(n,!0),r.o.set(n,t),r.D.set(n,!0)),this},i.delete=function(n){if(!this.has(n))return!1;var t=this[G];return o(t),e(t),k(t.A.h,t),t.D.set(n,!1),t.o.delete(n),!0},i.clear=function(){var n=this[G];return o(n),e(n),k(n.A.h,n),n.D=new Map,n.o.clear()},i.forEach=function(n,t){var r=this;v(this[G]).forEach((function(e,i){n.call(t,r.get(i),i,r)}))},i.get=function(n){var t=this[G];o(t);var i=v(t).get(n);if(t.I||!r(i))return i;if(i!==t.t.get(n))return i;var u=E(t.A.h,i,t);return e(t),t.o.set(n,u),u},i.keys=function(){return v(this[G]).keys()},i.values=function(){var n,t=this,r=this.keys();return(n={})[H]=function(){return t.values()},n.next=function(){var n=r.next();return n.done?n:{done:!1,value:t.get(n.value)}},n},i.entries=function(){var n,t=this,r=this.keys();return(n={})[H]=function(){return t.entries()},n.next=function(){var n=r.next();if(n.done)return n;var e=t.get(n.value);return{done:!1,value:[n.value,e]}},n},i[H]=function(){return this.entries()},n}(),f=function(){function n(n,t){return this[G]={i:3,l:t,A:t?t.A:m(),P:!1,I:!1,o:void 0,t:n,k:this,p:new Map,O:!1,C:!1},this}t(n,Set);var r=n.prototype;return Object.defineProperty(r,"size",{get:function(){return v(this[G]).size}}),r.has=function(n){var t=this[G];return o(t),t.o?!!t.o.has(n)||!(!t.p.has(n)||!t.o.has(t.p.get(n))):t.t.has(n)},r.add=function(n){var t=this[G];return o(t),t.o?t.o.add(n):t.t.has(n)||(i(t),k(t.A.h,t),t.o.add(n)),this},r.delete=function(n){if(!this.has(n))return!1;var t=this[G];return o(t),i(t),k(t.A.h,t),t.o.delete(n)||!!t.p.has(n)&&t.o.delete(t.p.get(n))},r.clear=function(){var n=this[G];return o(n),i(n),k(n.A.h,n),n.o.clear()},r.values=function(){var n=this[G];return o(n),i(n),n.o.values()},r.entries=function(){var n=this[G];return o(n),i(n),n.o.entries()},r.keys=function(){return this.values()},r[H]=function(){return this.values()},r.forEach=function(n,t){for(var r=this.values(),e=r.next();!e.done;)n.call(t,e.value,e.value,this),e=r.next()},n}();b("MapSet",{T:function(n,t){return new a(n,t)},F:function(n,t){return new f(n,t)}})}function T(){R(),N(),D()}function F(n){return n}function C(n){return n}var J,K,$="undefined"!=typeof Symbol,U="undefined"!=typeof Map,W="undefined"!=typeof Set,X="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,q=$?Symbol("immer-nothing"):((J={})["immer-nothing"]=!0,J),B=$?Symbol("immer-draftable"):"__$immer_draftable",G=$?Symbol("immer-state"):"__$immer_state",H=$?Symbol.iterator:"@@iterator",L={0:"Illegal state",1:"Immer drafts cannot have computed properties",2:"This object has been frozen and should not be mutated",3:function(n){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+n},4:"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",5:"Immer forbids circular references",6:"The first or second argument to `produce` must be a function",7:"The third argument to `produce` must be a function or undefined",8:"First argument to `createDraft` must be a plain object, an array, or an immerable object",9:"First argument to `finishDraft` must be a draft returned by `createDraft`",10:"The given draft is already finalized",11:"Object.defineProperty() cannot be used on an Immer draft",12:"Object.setPrototypeOf() cannot be used on an Immer draft",13:"Immer only supports deleting array indices",14:"Immer only supports setting array indices and the 'length' property",15:function(n){return"Cannot apply patch, path doesn't resolve: "+n},16:'Sets cannot have "replace" patches.',17:function(n){return"Unsupported patch operation: "+n},18:function(n){return"The plugin for '"+n+"' has not been loaded into Immer. To enable the plugin, import and call `enable"+n+"()` when initializing your application."},19:function(n){return"plugin not loaded: "+n},20:"Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available"},Q="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(n){return Object.getOwnPropertyNames(n).concat(Object.getOwnPropertySymbols(n))}:Object.getOwnPropertyNames,V={},Y={get:function(n,t){if(t===G)return n;var e=n.p;if(!n.P&&u(e,t))return e[t];var i=v(n)[t];if(n.I||!r(i))return i;if(n.P){if(i!==z(n.t,t))return i;e=n.o}return e[t]=E(n.A.h,i,n)},has:function(n,t){return t in v(n)},ownKeys:function(n){return Reflect.ownKeys(v(n))},set:function(n,t,r){if(!n.P){var e=z(n.t,t);if(r?f(e,r)||r===n.p[t]:f(e,r)&&t in n.t)return!0;I(n),x(n)}return n.D[t]=!0,n.o[t]=r,!0},deleteProperty:function(n,t){return void 0!==z(n.t,t)||t in n.t?(n.D[t]=!1,I(n),x(n)):n.D[t]&&delete n.D[t],n.o&&delete n.o[t],!0},getOwnPropertyDescriptor:function(n,t){var r=v(n),e=Reflect.getOwnPropertyDescriptor(r,t);return e&&(e.writable=!0,e.configurable=1!==n.i||"length"!==t),e},defineProperty:function(){n(11)},getPrototypeOf:function(n){return Object.getPrototypeOf(n.t)},setPrototypeOf:function(){n(12)}},Z={};i(Y,(function(n,t){Z[n]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),Z.deleteProperty=function(t,r){return true&&isNaN(parseInt(r))&&n(13),Y.deleteProperty.call(this,t[0],r)},Z.set=function(t,r,e){return true&&"length"!==r&&isNaN(parseInt(r))&&n(14),Y.set.call(this,t[0],r,e,t[0])};var nn=function(){function e(n){this.g=X,this.N="production"!=="development","boolean"==typeof(null==n?void 0:n.useProxies)&&this.setUseProxies(n.useProxies),"boolean"==typeof(null==n?void 0:n.autoFreeze)&&this.setAutoFreeze(n.autoFreeze),this.produce=this.produce.bind(this),this.produceWithPatches=this.produceWithPatches.bind(this)}var i=e.prototype;return i.produce=function(t,e,i){if("function"==typeof t&&"function"!=typeof e){var o=e;e=t;var u=this;return function(n){var t=this;void 0===n&&(n=o);for(var r=arguments.length,i=Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];return u.produce(n,(function(n){var r;return(r=e).call.apply(r,[t,n].concat(i))}))}}var a;if("function"!=typeof e&&n(6),void 0!==i&&"function"!=typeof i&&n(7),r(t)){var f=g(this),c=E(this,t,void 0),s=!0;try{a=e(c),s=!1}finally{s?j(f):O(f)}return"undefined"!=typeof Promise&&a instanceof Promise?a.then((function(n){return _(f,i),S(n,f)}),(function(n){throw j(f),n})):(_(f,i),S(a,f))}if((a=e(t))!==q)return void 0===a&&(a=t),this.N&&d(a,!0),a},i.produceWithPatches=function(n,t){var r,e,i=this;return"function"==typeof n?function(t){for(var r=arguments.length,e=Array(r>1?r-1:0),o=1;o<r;o++)e[o-1]=arguments[o];return i.produceWithPatches(t,(function(t){return n.apply(void 0,[t].concat(e))}))}:[this.produce(n,t,(function(n,t){r=n,e=t})),r,e]},i.createDraft=function(t){r(t)||n(8);var e=g(this),i=E(this,t,void 0);return i[G].C=!0,O(e),i},i.finishDraft=function(t,r){var e=t&&t[G]; true&&(e&&e.C||n(9),e.I&&n(10));var i=e.A;return _(i,r),S(void 0,i)},i.setAutoFreeze=function(n){this.N=n},i.setUseProxies=function(t){X||n(20),this.g=t},i.applyPatches=function(n,r){var e;for(e=r.length-1;e>=0;e--){var i=r[e];if(0===i.path.length&&"replace"===i.op){n=i.value;break}}var o=y("Patches").U;return t(n)?o(n,r):this.produce(n,(function(n){return o(n,r.slice(e+1))}))},e}(),tn=new nn,rn=tn.produce,en=tn.produceWithPatches.bind(tn),on=tn.setAutoFreeze.bind(tn),un=tn.setUseProxies.bind(tn),an=tn.applyPatches.bind(tn),fn=tn.createDraft.bind(tn),cn=tn.finishDraft.bind(tn);/* harmony default export */ __webpack_exports__["default"] = (rn);
//# sourceMappingURL=immer.esm.js.map


/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
/*!***********************************************************************************************************************!*\
  !*** delegated ./node_modules/next/dist/build/polyfills/object-assign.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/next/dist/build/polyfills/object-assign.js");

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fcharlespeters%2FCode%2Fbasic-react-todo-list%2Fsrc%2Fpages%2Findex.tsx&hotRouterUpdates=true!./":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fcharlespeters%2FCode%2Fbasic-react-todo-list%2Fsrc%2Fpages%2Findex.tsx&hotRouterUpdates=true ***!
  \********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/",
      function () {
        var mod = __webpack_require__(/*! ./src/pages/index.tsx */ "./src/pages/index.tsx");
        if (true) {
          module.hot.accept(/*! ./src/pages/index.tsx */ "./src/pages/index.tsx", function () {
            if (!next.router.components["/"]) return;
            var updatedPage = __webpack_require__(/*! ./src/pages/index.tsx */ "./src/pages/index.tsx");
            next.router.update("/", updatedPage);
          });
        }
        return mod;
      }
    ]);
  

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp-context.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.AmpStateContext = React.createContext({});

if (true) {
  exports.AmpStateContext.displayName = 'AmpStateContext';
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var amp_context_1 = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

function isInAmpMode() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$ampFirst = _ref.ampFirst,
      ampFirst = _ref$ampFirst === void 0 ? false : _ref$ampFirst,
      _ref$hybrid = _ref.hybrid,
      hybrid = _ref$hybrid === void 0 ? false : _ref$hybrid,
      _ref$hasQuery = _ref.hasQuery,
      hasQuery = _ref$hasQuery === void 0 ? false : _ref$hasQuery;

  return ampFirst || hybrid && hasQuery;
}

exports.isInAmpMode = isInAmpMode;

function useAmp() {
  // Don't assign the context value to a variable to save bytes
  return isInAmpMode(react_1.default.useContext(amp_context_1.AmpStateContext));
}

exports.useAmp = useAmp;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head-manager-context.js":
/*!************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head-manager-context.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.HeadManagerContext = React.createContext(null);

if (true) {
  exports.HeadManagerContext.displayName = 'HeadManagerContext';
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var side_effect_1 = __importDefault(__webpack_require__(/*! ./side-effect */ "./node_modules/next/dist/next-server/lib/side-effect.js"));

var amp_context_1 = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

var head_manager_context_1 = __webpack_require__(/*! ./head-manager-context */ "./node_modules/next/dist/next-server/lib/head-manager-context.js");

var amp_1 = __webpack_require__(/*! ./amp */ "./node_modules/next/dist/next-server/lib/amp.js");

function defaultHead() {
  var inAmpMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var head = [react_1.default.createElement("meta", {
    charSet: "utf-8"
  })];

  if (!inAmpMode) {
    head.push(react_1.default.createElement("meta", {
      name: "viewport",
      content: "width=device-width"
    }));
  }

  return head;
}

exports.defaultHead = defaultHead;

function onlyReactElement(list, child) {
  // React children can be "string" or "number" in this case we ignore them for backwards compat
  if (typeof child === 'string' || typeof child === 'number') {
    return list;
  } // Adds support for React.Fragment


  if (child.type === react_1.default.Fragment) {
    return list.concat(react_1.default.Children.toArray(child.props.children).reduce(function (fragmentList, fragmentChild) {
      if (typeof fragmentChild === 'string' || typeof fragmentChild === 'number') {
        return fragmentList;
      }

      return fragmentList.concat(fragmentChild);
    }, []));
  }

  return list.concat(child);
}

var METATYPES = ['name', 'httpEquiv', 'charSet', 'itemProp'];
/*
 returns a function for filtering head child elements
 which shouldn't be duplicated, like <title/>
 Also adds support for deduplicated `key` properties
*/

function unique() {
  var keys = new Set();
  var tags = new Set();
  var metaTypes = new Set();
  var metaCategories = {};
  return function (h) {
    var unique = true;

    if (h.key && typeof h.key !== 'number' && h.key.indexOf('$') > 0) {
      var key = h.key.slice(h.key.indexOf('$') + 1);

      if (keys.has(key)) {
        unique = false;
      } else {
        keys.add(key);
      }
    } // eslint-disable-next-line default-case


    switch (h.type) {
      case 'title':
      case 'base':
        if (tags.has(h.type)) {
          unique = false;
        } else {
          tags.add(h.type);
        }

        break;

      case 'meta':
        for (var i = 0, len = METATYPES.length; i < len; i++) {
          var metatype = METATYPES[i];
          if (!h.props.hasOwnProperty(metatype)) continue;

          if (metatype === 'charSet') {
            if (metaTypes.has(metatype)) {
              unique = false;
            } else {
              metaTypes.add(metatype);
            }
          } else {
            var category = h.props[metatype];
            var categories = metaCategories[metatype] || new Set();

            if (categories.has(category)) {
              unique = false;
            } else {
              categories.add(category);
              metaCategories[metatype] = categories;
            }
          }
        }

        break;
    }

    return unique;
  };
}
/**
 *
 * @param headElements List of multiple <Head> instances
 */


function reduceComponents(headElements, props) {
  return headElements.reduce(function (list, headElement) {
    var headElementChildren = react_1.default.Children.toArray(headElement.props.children);
    return list.concat(headElementChildren);
  }, []).reduce(onlyReactElement, []).reverse().concat(defaultHead(props.inAmpMode)).filter(unique()).reverse().map(function (c, i) {
    var key = c.key || i;
    return react_1.default.cloneElement(c, {
      key: key
    });
  });
}

var Effect = side_effect_1.default();
/**
 * This component injects elements to `<head>` of your page.
 * To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
 */

function Head(_ref) {
  var children = _ref.children;
  return react_1.default.createElement(amp_context_1.AmpStateContext.Consumer, null, function (ampState) {
    return react_1.default.createElement(head_manager_context_1.HeadManagerContext.Consumer, null, function (updateHead) {
      return react_1.default.createElement(Effect, {
        reduceComponentsToState: reduceComponents,
        handleStateChange: updateHead,
        inAmpMode: amp_1.isInAmpMode(ampState)
      }, children);
    });
  });
}

Head.rewind = Effect.rewind;
exports.default = Head;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/side-effect.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

var _assertThisInitialized = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var _inherits = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");

var _toConsumableArray = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var isServer = false;

exports.default = function () {
  var mountedInstances = new Set();
  var state;

  function emitChange(component) {
    state = component.props.reduceComponentsToState(_toConsumableArray(mountedInstances), component.props);

    if (component.props.handleStateChange) {
      component.props.handleStateChange(state);
    }
  }

  return (
    /*#__PURE__*/
    function (_react_1$Component) {
      _inherits(_class, _react_1$Component);

      _createClass(_class, null, [{
        key: "rewind",
        // Used when server rendering
        value: function rewind() {
          var recordedState = state;
          state = undefined;
          mountedInstances.clear();
          return recordedState;
        }
      }]);

      function _class(props) {
        var _this;

        _classCallCheck(this, _class);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(_class).call(this, props));

        if (isServer) {
          mountedInstances.add(_assertThisInitialized(_this));
          emitChange(_assertThisInitialized(_this));
        }

        return _this;
      }

      _createClass(_class, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          mountedInstances.add(this);
          emitChange(this);
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
          emitChange(this);
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          mountedInstances.delete(this);
          emitChange(this);
        }
      }, {
        key: "render",
        value: function render() {
          return null;
        }
      }]);

      return _class;
    }(react_1.Component)
  );
};

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!*********************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/checkPropTypes.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/prop-types/checkPropTypes.js");

/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*******************************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/lib/ReactPropTypesSecret.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/prop-types/lib/ReactPropTypesSecret.js");

/***/ }),

/***/ "./node_modules/react-clientside-effect/lib/index.es.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-clientside-effect/lib/index.es.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




function withSideEffect(reducePropsToState, handleStateChangeOnClient) {
  if (true) {
    if (typeof reducePropsToState !== 'function') {
      throw new Error('Expected reducePropsToState to be a function.');
    }

    if (typeof handleStateChangeOnClient !== 'function') {
      throw new Error('Expected handleStateChangeOnClient to be a function.');
    }
  }

  function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
  }

  return function wrap(WrappedComponent) {
    if (true) {
      if (typeof WrappedComponent !== 'function') {
        throw new Error('Expected WrappedComponent to be a React component.');
      }
    }

    var mountedInstances = [];
    var state;

    function emitChange() {
      state = reducePropsToState(mountedInstances.map(function (instance) {
        return instance.props;
      }));
      handleStateChangeOnClient(state);
    }

    var SideEffect =
    /*#__PURE__*/
    function (_PureComponent) {
      Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(SideEffect, _PureComponent);

      function SideEffect() {
        return _PureComponent.apply(this, arguments) || this;
      }

      // Try to use displayName of wrapped component
      SideEffect.peek = function peek() {
        return state;
      };

      var _proto = SideEffect.prototype;

      _proto.componentDidMount = function componentDidMount() {
        mountedInstances.push(this);
        emitChange();
      };

      _proto.componentDidUpdate = function componentDidUpdate() {
        emitChange();
      };

      _proto.componentWillUnmount = function componentWillUnmount() {
        var index = mountedInstances.indexOf(this);
        mountedInstances.splice(index, 1);
        emitChange();
      };

      _proto.render = function render() {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(WrappedComponent, this.props);
      };

      return SideEffect;
    }(react__WEBPACK_IMPORTED_MODULE_2__["PureComponent"]);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(SideEffect, "displayName", "SideEffect(" + getDisplayName(WrappedComponent) + ")");

    return SideEffect;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (withSideEffect);


/***/ }),

/***/ "./node_modules/react-dom/index.js":
/*!***********************************************************************************************!*\
  !*** delegated ./node_modules/react-dom/index.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/react-dom/index.js");

/***/ }),

/***/ "./node_modules/react-focus-lock/dist/es2015/AutoFocusInside.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-focus-lock/dist/es2015/AutoFocusInside.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var focus_lock_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! focus-lock/constants */ "./node_modules/focus-lock/dist/es2015/constants.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util */ "./node_modules/react-focus-lock/dist/es2015/util.js");






var AutoFocusInside = function AutoFocusInside(_ref) {
  var disabled = _ref.disabled,
      children = _ref.children,
      className = _ref.className;
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Object(_util__WEBPACK_IMPORTED_MODULE_4__["inlineProp"])(focus_lock_constants__WEBPACK_IMPORTED_MODULE_3__["FOCUS_AUTO"], !disabled), {
    className: className
  }), children);
};

AutoFocusInside.propTypes =  true ? {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
} : undefined;
AutoFocusInside.defaultProps = {
  disabled: false,
  className: undefined
};
/* harmony default export */ __webpack_exports__["default"] = (AutoFocusInside);

/***/ }),

/***/ "./node_modules/react-focus-lock/dist/es2015/Combination.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-focus-lock/dist/es2015/Combination.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Lock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Lock */ "./node_modules/react-focus-lock/dist/es2015/Lock.js");
/* harmony import */ var _Trap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Trap */ "./node_modules/react-focus-lock/dist/es2015/Trap.js");





/* that would be a BREAKING CHANGE!
// delaying sidecar execution till the first usage
const RequireSideCar = (props) => {
  // eslint-disable-next-line global-require
  const SideCar = require('./Trap').default;
  return <SideCar {...props} />;
};
*/

var FocusLockCombination = react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function (props, ref) {
  return react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_Lock__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    sideCar: _Trap__WEBPACK_IMPORTED_MODULE_4__["default"],
    ref: ref
  }, props));
});

var _ref = _Lock__WEBPACK_IMPORTED_MODULE_3__["default"].propTypes || {},
    sideCar = _ref.sideCar,
    propTypes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["sideCar"]);

FocusLockCombination.propTypes = propTypes;
/* harmony default export */ __webpack_exports__["default"] = (FocusLockCombination);

/***/ }),

/***/ "./node_modules/react-focus-lock/dist/es2015/FocusGuard.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-focus-lock/dist/es2015/FocusGuard.js ***!
  \*****************************************************************/
/*! exports provided: hiddenGuard, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hiddenGuard", function() { return hiddenGuard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


var hiddenGuard = {
  width: '1px',
  height: '0px',
  padding: 0,
  overflow: 'hidden',
  position: 'fixed',
  top: '1px',
  left: '1px'
};

var InFocusGuard = function InFocusGuard(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    key: "guard-first",
    "data-focus-guard": true,
    "data-focus-auto-guard": true,
    style: hiddenGuard
  }), children, children && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    key: "guard-last",
    "data-focus-guard": true,
    "data-focus-auto-guard": true,
    style: hiddenGuard
  }));
};

InFocusGuard.propTypes =  true ? {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
} : undefined;
InFocusGuard.defaultProps = {
  children: null
};
/* harmony default export */ __webpack_exports__["default"] = (InFocusGuard);

/***/ }),

/***/ "./node_modules/react-focus-lock/dist/es2015/FreeFocusInside.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-focus-lock/dist/es2015/FreeFocusInside.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var focus_lock_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! focus-lock/constants */ "./node_modules/focus-lock/dist/es2015/constants.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util */ "./node_modules/react-focus-lock/dist/es2015/util.js");






var FreeFocusInside = function FreeFocusInside(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Object(_util__WEBPACK_IMPORTED_MODULE_4__["inlineProp"])(focus_lock_constants__WEBPACK_IMPORTED_MODULE_3__["FOCUS_ALLOW"], true), {
    className: className
  }), children);
};

FreeFocusInside.propTypes =  true ? {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
} : undefined;
FreeFocusInside.defaultProps = {
  className: undefined
};
/* harmony default export */ __webpack_exports__["default"] = (FreeFocusInside);

/***/ }),

/***/ "./node_modules/react-focus-lock/dist/es2015/Lock.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-focus-lock/dist/es2015/Lock.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var focus_lock_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! focus-lock/constants */ "./node_modules/focus-lock/dist/es2015/constants.js");
/* harmony import */ var use_callback_ref__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! use-callback-ref */ "./node_modules/use-callback-ref/dist/es2015/index.js");
/* harmony import */ var _FocusGuard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FocusGuard */ "./node_modules/react-focus-lock/dist/es2015/FocusGuard.js");
/* harmony import */ var _medium__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./medium */ "./node_modules/react-focus-lock/dist/es2015/medium.js");







var emptyArray = [];
var FocusLock = react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"](function (props, parentRef) {
  var _extends2;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__["useState"](),
      realObserved = _React$useState[0],
      setObserved = _React$useState[1];

  var observed = react__WEBPACK_IMPORTED_MODULE_1__["useRef"]();
  var isActive = react__WEBPACK_IMPORTED_MODULE_1__["useRef"](false);
  var originalFocusedElement = react__WEBPACK_IMPORTED_MODULE_1__["useRef"](null);
  var children = props.children,
      disabled = props.disabled,
      noFocusGuards = props.noFocusGuards,
      persistentFocus = props.persistentFocus,
      crossFrame = props.crossFrame,
      autoFocus = props.autoFocus,
      allowTextSelection = props.allowTextSelection,
      group = props.group,
      className = props.className,
      whiteList = props.whiteList,
      _props$shards = props.shards,
      shards = _props$shards === void 0 ? emptyArray : _props$shards,
      _props$as = props.as,
      Container = _props$as === void 0 ? 'div' : _props$as,
      _props$lockProps = props.lockProps,
      containerProps = _props$lockProps === void 0 ? {} : _props$lockProps,
      SideCar = props.sideCar,
      shouldReturnFocus = props.returnFocus,
      onActivationCallback = props.onActivation,
      onDeactivationCallback = props.onDeactivation;

  var _React$useState2 = react__WEBPACK_IMPORTED_MODULE_1__["useState"]({}),
      id = _React$useState2[0]; // SIDE EFFECT CALLBACKS


  var onActivation = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](function () {
    originalFocusedElement.current = originalFocusedElement.current || document && document.activeElement;

    if (observed.current && onActivationCallback) {
      onActivationCallback(observed.current);
    }

    isActive.current = true;
  }, [onActivationCallback]);
  var onDeactivation = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](function () {
    isActive.current = false;

    if (onDeactivationCallback) {
      onDeactivationCallback(observed.current);
    }
  }, [onDeactivationCallback]);
  var returnFocus = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](function (allowDefer) {
    var current = originalFocusedElement.current;

    if (Boolean(shouldReturnFocus) && current && current.focus) {
      var focusOptions = typeof shouldReturnFocus === 'object' ? shouldReturnFocus : undefined;
      originalFocusedElement.current = null;

      if (allowDefer) {
        // React might return focus after update
        // it's safer to defer the action
        Promise.resolve().then(function () {
          return current.focus(focusOptions);
        });
      } else {
        current.focus(focusOptions);
      }
    }
  }, [shouldReturnFocus]); // MEDIUM CALLBACKS

  var onFocus = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](function (event) {
    if (isActive.current) {
      _medium__WEBPACK_IMPORTED_MODULE_6__["mediumFocus"].useMedium(event);
    }
  }, []);
  var onBlur = _medium__WEBPACK_IMPORTED_MODULE_6__["mediumBlur"].useMedium; // REF PROPAGATION
  // not using real refs due to race conditions

  var setObserveNode = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](function (newObserved) {
    if (observed.current !== newObserved) {
      observed.current = newObserved;
      setObserved(newObserved);
    }
  }, []);

  if (true) {
    if (typeof allowTextSelection !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn('React-Focus-Lock: allowTextSelection is deprecated and enabled by default');
    }

    react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
      if (!observed.current) {
        // eslint-disable-next-line no-console
        console.error('FocusLock: could not obtain ref to internal node');
      }
    }, []);
  }

  var lockProps = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])((_extends2 = {}, _extends2[focus_lock_constants__WEBPACK_IMPORTED_MODULE_3__["FOCUS_DISABLED"]] = disabled && 'disabled', _extends2[focus_lock_constants__WEBPACK_IMPORTED_MODULE_3__["FOCUS_GROUP"]] = group, _extends2), containerProps);

  var hasLeadingGuards = noFocusGuards !== true;
  var hasTailingGuards = hasLeadingGuards && noFocusGuards !== 'tail';
  var mergedRef = Object(use_callback_ref__WEBPACK_IMPORTED_MODULE_4__["useMergeRefs"])([parentRef, setObserveNode]);
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, hasLeadingGuards && [react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    key: "guard-first",
    "data-focus-guard": true,
    tabIndex: disabled ? -1 : 0,
    style: _FocusGuard__WEBPACK_IMPORTED_MODULE_5__["hiddenGuard"]
  }), // nearest focus guard
  react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    key: "guard-nearest",
    "data-focus-guard": true,
    tabIndex: disabled ? -1 : 1,
    style: _FocusGuard__WEBPACK_IMPORTED_MODULE_5__["hiddenGuard"]
  })], !disabled && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](SideCar, {
    id: id,
    sideCar: _medium__WEBPACK_IMPORTED_MODULE_6__["mediumSidecar"],
    observed: realObserved,
    disabled: disabled,
    persistentFocus: persistentFocus,
    crossFrame: crossFrame,
    autoFocus: autoFocus,
    whiteList: whiteList,
    shards: shards,
    onActivation: onActivation,
    onDeactivation: onDeactivation,
    returnFocus: returnFocus
  }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Container, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: mergedRef
  }, lockProps, {
    className: className,
    onBlur: onBlur,
    onFocus: onFocus
  }), children), hasTailingGuards && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    "data-focus-guard": true,
    tabIndex: disabled ? -1 : 0,
    style: _FocusGuard__WEBPACK_IMPORTED_MODULE_5__["hiddenGuard"]
  }));
});
FocusLock.propTypes =  true ? {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2__["node"],
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_2__["bool"],
  returnFocus: Object(prop_types__WEBPACK_IMPORTED_MODULE_2__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_2__["bool"], prop_types__WEBPACK_IMPORTED_MODULE_2__["object"]]),
  noFocusGuards: prop_types__WEBPACK_IMPORTED_MODULE_2__["bool"],
  allowTextSelection: prop_types__WEBPACK_IMPORTED_MODULE_2__["bool"],
  autoFocus: prop_types__WEBPACK_IMPORTED_MODULE_2__["bool"],
  persistentFocus: prop_types__WEBPACK_IMPORTED_MODULE_2__["bool"],
  crossFrame: prop_types__WEBPACK_IMPORTED_MODULE_2__["bool"],
  group: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  className: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  whiteList: prop_types__WEBPACK_IMPORTED_MODULE_2__["func"],
  shards: Object(prop_types__WEBPACK_IMPORTED_MODULE_2__["arrayOf"])(prop_types__WEBPACK_IMPORTED_MODULE_2__["any"]),
  as: Object(prop_types__WEBPACK_IMPORTED_MODULE_2__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_2__["string"], prop_types__WEBPACK_IMPORTED_MODULE_2__["func"], prop_types__WEBPACK_IMPORTED_MODULE_2__["object"]]),
  lockProps: prop_types__WEBPACK_IMPORTED_MODULE_2__["object"],
  onActivation: prop_types__WEBPACK_IMPORTED_MODULE_2__["func"],
  onDeactivation: prop_types__WEBPACK_IMPORTED_MODULE_2__["func"],
  sideCar: prop_types__WEBPACK_IMPORTED_MODULE_2__["any"].isRequired
} : undefined;
FocusLock.defaultProps = {
  children: undefined,
  disabled: false,
  returnFocus: false,
  noFocusGuards: false,
  autoFocus: true,
  persistentFocus: false,
  crossFrame: true,
  allowTextSelection: undefined,
  group: undefined,
  className: undefined,
  whiteList: undefined,
  shards: undefined,
  as: 'div',
  lockProps: {},
  onActivation: undefined,
  onDeactivation: undefined
};
/* harmony default export */ __webpack_exports__["default"] = (FocusLock);

/***/ }),

/***/ "./node_modules/react-focus-lock/dist/es2015/MoveFocusInside.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-focus-lock/dist/es2015/MoveFocusInside.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var focus_lock_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! focus-lock/constants */ "./node_modules/focus-lock/dist/es2015/constants.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util */ "./node_modules/react-focus-lock/dist/es2015/util.js");
/* harmony import */ var _medium__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./medium */ "./node_modules/react-focus-lock/dist/es2015/medium.js");







function MoveFocusInside(_ref) {
  var isDisabled = _ref.disabled,
      className = _ref.className,
      children = _ref.children;
  var ref = react__WEBPACK_IMPORTED_MODULE_1__["useRef"](null);
  var disabled = react__WEBPACK_IMPORTED_MODULE_1__["useRef"](isDisabled);

  var moveFocus = function moveFocus() {
    var observed = ref.current;
    _medium__WEBPACK_IMPORTED_MODULE_5__["mediumEffect"].useMedium(function (car) {
      if (!disabled.current && observed) {
        if (!car.focusInside(observed)) {
          car.moveFocusInside(observed, null);
        }
      }
    });
  };

  react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
    disabled.current = isDisabled;
    moveFocus();
  }, [isDisabled]);
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Object(_util__WEBPACK_IMPORTED_MODULE_4__["inlineProp"])(focus_lock_constants__WEBPACK_IMPORTED_MODULE_3__["FOCUS_AUTO"], !isDisabled), {
    ref: ref,
    className: className
  }), children);
}

MoveFocusInside.propTypes =  true ? {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
} : undefined;
MoveFocusInside.defaultProps = {
  disabled: false,
  className: undefined
};
/* harmony default export */ __webpack_exports__["default"] = (MoveFocusInside);

/***/ }),

/***/ "./node_modules/react-focus-lock/dist/es2015/Trap.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-focus-lock/dist/es2015/Trap.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_clientside_effect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-clientside-effect */ "./node_modules/react-clientside-effect/lib/index.es.js");
/* harmony import */ var focus_lock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! focus-lock */ "./node_modules/focus-lock/dist/es2015/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util */ "./node_modules/react-focus-lock/dist/es2015/util.js");
/* harmony import */ var _medium__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./medium */ "./node_modules/react-focus-lock/dist/es2015/medium.js");







var focusOnBody = function focusOnBody() {
  return document && document.activeElement === document.body;
};

var isFreeFocus = function isFreeFocus() {
  return focusOnBody() || Object(focus_lock__WEBPACK_IMPORTED_MODULE_3__["focusIsHidden"])();
};

var lastActiveTrap = null;
var lastActiveFocus = null;
var lastPortaledElement = null;
var focusWasOutsideWindow = false;

var defaultWhitelist = function defaultWhitelist() {
  return true;
};

var focusWhitelisted = function focusWhitelisted(activeElement) {
  return (lastActiveTrap.whiteList || defaultWhitelist)(activeElement);
};

var recordPortal = function recordPortal(observerNode, portaledElement) {
  lastPortaledElement = {
    observerNode: observerNode,
    portaledElement: portaledElement
  };
};

var focusIsPortaledPair = function focusIsPortaledPair(element) {
  return lastPortaledElement && lastPortaledElement.portaledElement === element;
};

function autoGuard(startIndex, end, step, allNodes) {
  var lastGuard = null;
  var i = startIndex;

  do {
    var item = allNodes[i];

    if (item.guard) {
      if (item.node.dataset.focusAutoGuard) {
        lastGuard = item;
      }
    } else if (item.lockItem) {
      if (i !== startIndex) {
        // we will tab to the next element
        return;
      }

      lastGuard = null;
    } else {
      break;
    }
  } while ((i += step) !== end);

  if (lastGuard) {
    lastGuard.node.tabIndex = 0;
  }
}

var extractRef = function extractRef(ref) {
  return ref && 'current' in ref ? ref.current : ref;
};

var focusWasOutside = function focusWasOutside(crossFrameOption) {
  if (crossFrameOption) {
    // with cross frame return true for any value
    return Boolean(focusWasOutsideWindow);
  } // in other case return only of focus went a while aho


  return focusWasOutsideWindow === "meanwhile";
};

var activateTrap = function activateTrap() {
  var result = false;

  if (lastActiveTrap) {
    var _lastActiveTrap = lastActiveTrap,
        observed = _lastActiveTrap.observed,
        persistentFocus = _lastActiveTrap.persistentFocus,
        autoFocus = _lastActiveTrap.autoFocus,
        shards = _lastActiveTrap.shards,
        crossFrame = _lastActiveTrap.crossFrame;
    var workingNode = observed || lastPortaledElement && lastPortaledElement.portaledElement;
    var activeElement = document && document.activeElement;

    if (workingNode) {
      var workingArea = [workingNode].concat(shards.map(extractRef).filter(Boolean));

      if (!activeElement || focusWhitelisted(activeElement)) {
        if (persistentFocus || focusWasOutside(crossFrame) || !isFreeFocus() || !lastActiveFocus && autoFocus) {
          if (workingNode && !(Object(focus_lock__WEBPACK_IMPORTED_MODULE_3__["focusInside"])(workingArea) || focusIsPortaledPair(activeElement, workingNode))) {
            if (document && !lastActiveFocus && activeElement && !autoFocus) {
              activeElement.blur();
              document.body.focus();
            } else {
              result = Object(focus_lock__WEBPACK_IMPORTED_MODULE_3__["default"])(workingArea, lastActiveFocus);
              lastPortaledElement = {};
            }
          }

          focusWasOutsideWindow = false;
          lastActiveFocus = document && document.activeElement;
        }
      }

      if (document) {
        var newActiveElement = document && document.activeElement;
        var allNodes = Object(focus_lock__WEBPACK_IMPORTED_MODULE_3__["getFocusabledIn"])(workingArea);
        var focusedItem = allNodes.find(function (_ref) {
          var node = _ref.node;
          return node === newActiveElement;
        });

        if (focusedItem) {
          // remove old focus
          allNodes.filter(function (_ref2) {
            var guard = _ref2.guard,
                node = _ref2.node;
            return guard && node.dataset.focusAutoGuard;
          }).forEach(function (_ref3) {
            var node = _ref3.node;
            return node.removeAttribute('tabIndex');
          });
          var focusedIndex = allNodes.indexOf(focusedItem);
          autoGuard(focusedIndex, allNodes.length, +1, allNodes);
          autoGuard(focusedIndex, -1, -1, allNodes);
        }
      }
    }
  }

  return result;
};

var onTrap = function onTrap(event) {
  if (activateTrap() && event) {
    // prevent scroll jump
    event.stopPropagation();
    event.preventDefault();
  }
};

var onBlur = function onBlur() {
  return Object(_util__WEBPACK_IMPORTED_MODULE_4__["deferAction"])(activateTrap);
};

var onFocus = function onFocus(event) {
  // detect portal
  var source = event.target;
  var currentNode = event.currentTarget;

  if (!currentNode.contains(source)) {
    recordPortal(currentNode, source);
  }
};

var FocusWatcher = function FocusWatcher() {
  return null;
};

var FocusTrap = function FocusTrap(_ref4) {
  var children = _ref4.children;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    onBlur: onBlur,
    onFocus: onFocus
  }, children);
};

FocusTrap.propTypes =  true ? {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired
} : undefined;

var onWindowBlur = function onWindowBlur() {
  focusWasOutsideWindow = "just"; // using setTimeout to set  this variable after React/sidecar reaction

  setTimeout(function () {
    focusWasOutsideWindow = "meanwhile";
  }, 0);
};

var attachHandler = function attachHandler() {
  document.addEventListener('focusin', onTrap, true);
  document.addEventListener('focusout', onBlur);
  window.addEventListener('blur', onWindowBlur);
};

var detachHandler = function detachHandler() {
  document.removeEventListener('focusin', onTrap, true);
  document.removeEventListener('focusout', onBlur);
  window.removeEventListener('blur', onWindowBlur);
};

function reducePropsToState(propsList) {
  return propsList.filter(function (_ref5) {
    var disabled = _ref5.disabled;
    return !disabled;
  });
}

function handleStateChangeOnClient(traps) {
  var trap = traps.slice(-1)[0];

  if (trap && !lastActiveTrap) {
    attachHandler();
  }

  var lastTrap = lastActiveTrap;
  var sameTrap = lastTrap && trap && trap.id === lastTrap.id;
  lastActiveTrap = trap;

  if (lastTrap && !sameTrap) {
    lastTrap.onDeactivation(); // return focus only of last trap was removed

    if (!traps.filter(function (_ref6) {
      var id = _ref6.id;
      return id === lastTrap.id;
    }).length) {
      // allow defer is no other trap is awaiting restore
      lastTrap.returnFocus(!trap);
    }
  }

  if (trap) {
    lastActiveFocus = null;

    if (!sameTrap || lastTrap.observed !== trap.observed) {
      trap.onActivation();
    }

    activateTrap(true);
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["deferAction"])(activateTrap);
  } else {
    detachHandler();
    lastActiveFocus = null;
  }
} // bind medium


_medium__WEBPACK_IMPORTED_MODULE_5__["mediumFocus"].assignSyncMedium(onFocus);
_medium__WEBPACK_IMPORTED_MODULE_5__["mediumBlur"].assignMedium(onBlur);
_medium__WEBPACK_IMPORTED_MODULE_5__["mediumEffect"].assignMedium(function (cb) {
  return cb({
    moveFocusInside: focus_lock__WEBPACK_IMPORTED_MODULE_3__["default"],
    focusInside: focus_lock__WEBPACK_IMPORTED_MODULE_3__["focusInside"]
  });
});
/* harmony default export */ __webpack_exports__["default"] = (Object(react_clientside_effect__WEBPACK_IMPORTED_MODULE_2__["default"])(reducePropsToState, handleStateChangeOnClient)(FocusWatcher));

/***/ }),

/***/ "./node_modules/react-focus-lock/dist/es2015/UI.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-focus-lock/dist/es2015/UI.js ***!
  \*********************************************************/
/*! exports provided: AutoFocusInside, MoveFocusInside, FreeFocusInside, InFocusGuard, FocusLockUI, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Lock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Lock */ "./node_modules/react-focus-lock/dist/es2015/Lock.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FocusLockUI", function() { return _Lock__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _AutoFocusInside__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AutoFocusInside */ "./node_modules/react-focus-lock/dist/es2015/AutoFocusInside.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AutoFocusInside", function() { return _AutoFocusInside__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _MoveFocusInside__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MoveFocusInside */ "./node_modules/react-focus-lock/dist/es2015/MoveFocusInside.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MoveFocusInside", function() { return _MoveFocusInside__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _FreeFocusInside__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FreeFocusInside */ "./node_modules/react-focus-lock/dist/es2015/FreeFocusInside.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FreeFocusInside", function() { return _FreeFocusInside__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _FocusGuard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FocusGuard */ "./node_modules/react-focus-lock/dist/es2015/FocusGuard.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InFocusGuard", function() { return _FocusGuard__WEBPACK_IMPORTED_MODULE_4__["default"]; });







/* harmony default export */ __webpack_exports__["default"] = (_Lock__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/react-focus-lock/dist/es2015/index.js":
/*!************************************************************!*\
  !*** ./node_modules/react-focus-lock/dist/es2015/index.js ***!
  \************************************************************/
/*! exports provided: AutoFocusInside, MoveFocusInside, FreeFocusInside, InFocusGuard, FocusLockUI, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Combination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Combination */ "./node_modules/react-focus-lock/dist/es2015/Combination.js");
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI */ "./node_modules/react-focus-lock/dist/es2015/UI.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AutoFocusInside", function() { return _UI__WEBPACK_IMPORTED_MODULE_1__["AutoFocusInside"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MoveFocusInside", function() { return _UI__WEBPACK_IMPORTED_MODULE_1__["MoveFocusInside"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FreeFocusInside", function() { return _UI__WEBPACK_IMPORTED_MODULE_1__["FreeFocusInside"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InFocusGuard", function() { return _UI__WEBPACK_IMPORTED_MODULE_1__["InFocusGuard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FocusLockUI", function() { return _UI__WEBPACK_IMPORTED_MODULE_1__["FocusLockUI"]; });



/* harmony default export */ __webpack_exports__["default"] = (_Combination__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/react-focus-lock/dist/es2015/medium.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-focus-lock/dist/es2015/medium.js ***!
  \*************************************************************/
/*! exports provided: mediumFocus, mediumBlur, mediumEffect, mediumSidecar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mediumFocus", function() { return mediumFocus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mediumBlur", function() { return mediumBlur; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mediumEffect", function() { return mediumEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mediumSidecar", function() { return mediumSidecar; });
/* harmony import */ var use_sidecar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! use-sidecar */ "./node_modules/use-sidecar/dist/es2015/index.js");

var mediumFocus = Object(use_sidecar__WEBPACK_IMPORTED_MODULE_0__["createMedium"])({}, function (_ref) {
  var target = _ref.target,
      currentTarget = _ref.currentTarget;
  return {
    target: target,
    currentTarget: currentTarget
  };
});
var mediumBlur = Object(use_sidecar__WEBPACK_IMPORTED_MODULE_0__["createMedium"])();
var mediumEffect = Object(use_sidecar__WEBPACK_IMPORTED_MODULE_0__["createMedium"])();
var mediumSidecar = Object(use_sidecar__WEBPACK_IMPORTED_MODULE_0__["createSidecarMedium"])({
  async: true
});

/***/ }),

/***/ "./node_modules/react-focus-lock/dist/es2015/util.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-focus-lock/dist/es2015/util.js ***!
  \***********************************************************/
/*! exports provided: deferAction, inlineProp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deferAction", function() { return deferAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inlineProp", function() { return inlineProp; });
function deferAction(action) {
  // Hidding setImmediate from Webpack to avoid inserting polyfill
  var _window = window,
      setImmediate = _window.setImmediate;

  if (typeof setImmediate !== 'undefined') {
    setImmediate(action);
  } else {
    setTimeout(action, 1);
  }
}
var inlineProp = function inlineProp(name, value) {
  var obj = {};
  obj[name] = value;
  return obj;
};

/***/ }),

/***/ "./node_modules/react-icons/fi/index.esm.js":
/*!**************************************************!*\
  !*** ./node_modules/react-icons/fi/index.esm.js ***!
  \**************************************************/
/*! exports provided: FiActivity, FiAirplay, FiAlertCircle, FiAlertOctagon, FiAlertTriangle, FiAlignCenter, FiAlignJustify, FiAlignLeft, FiAlignRight, FiAnchor, FiAperture, FiArchive, FiArrowDownCircle, FiArrowDownLeft, FiArrowDownRight, FiArrowDown, FiArrowLeftCircle, FiArrowLeft, FiArrowRightCircle, FiArrowRight, FiArrowUpCircle, FiArrowUpLeft, FiArrowUpRight, FiArrowUp, FiAtSign, FiAward, FiBarChart2, FiBarChart, FiBatteryCharging, FiBattery, FiBellOff, FiBell, FiBluetooth, FiBold, FiBookOpen, FiBook, FiBookmark, FiBox, FiBriefcase, FiCalendar, FiCameraOff, FiCamera, FiCast, FiCheckCircle, FiCheckSquare, FiCheck, FiChevronDown, FiChevronLeft, FiChevronRight, FiChevronUp, FiChevronsDown, FiChevronsLeft, FiChevronsRight, FiChevronsUp, FiChrome, FiCircle, FiClipboard, FiClock, FiCloudDrizzle, FiCloudLightning, FiCloudOff, FiCloudRain, FiCloudSnow, FiCloud, FiCode, FiCodepen, FiCodesandbox, FiCoffee, FiColumns, FiCommand, FiCompass, FiCopy, FiCornerDownLeft, FiCornerDownRight, FiCornerLeftDown, FiCornerLeftUp, FiCornerRightDown, FiCornerRightUp, FiCornerUpLeft, FiCornerUpRight, FiCpu, FiCreditCard, FiCrop, FiCrosshair, FiDatabase, FiDelete, FiDisc, FiDollarSign, FiDownloadCloud, FiDownload, FiDroplet, FiEdit2, FiEdit3, FiEdit, FiExternalLink, FiEyeOff, FiEye, FiFacebook, FiFastForward, FiFeather, FiFigma, FiFileMinus, FiFilePlus, FiFileText, FiFile, FiFilm, FiFilter, FiFlag, FiFolderMinus, FiFolderPlus, FiFolder, FiFrown, FiGift, FiGitBranch, FiGitCommit, FiGitMerge, FiGitPullRequest, FiGithub, FiGitlab, FiGlobe, FiGrid, FiHardDrive, FiHash, FiHeadphones, FiHeart, FiHelpCircle, FiHexagon, FiHome, FiImage, FiInbox, FiInfo, FiInstagram, FiItalic, FiKey, FiLayers, FiLayout, FiLifeBuoy, FiLink2, FiLink, FiLinkedin, FiList, FiLoader, FiLock, FiLogIn, FiLogOut, FiMail, FiMapPin, FiMap, FiMaximize2, FiMaximize, FiMeh, FiMenu, FiMessageCircle, FiMessageSquare, FiMicOff, FiMic, FiMinimize2, FiMinimize, FiMinusCircle, FiMinusSquare, FiMinus, FiMonitor, FiMoon, FiMoreHorizontal, FiMoreVertical, FiMousePointer, FiMove, FiMusic, FiNavigation2, FiNavigation, FiOctagon, FiPackage, FiPaperclip, FiPauseCircle, FiPause, FiPenTool, FiPercent, FiPhoneCall, FiPhoneForwarded, FiPhoneIncoming, FiPhoneMissed, FiPhoneOff, FiPhoneOutgoing, FiPhone, FiPieChart, FiPlayCircle, FiPlay, FiPlusCircle, FiPlusSquare, FiPlus, FiPocket, FiPower, FiPrinter, FiRadio, FiRefreshCcw, FiRefreshCw, FiRepeat, FiRewind, FiRotateCcw, FiRotateCw, FiRss, FiSave, FiScissors, FiSearch, FiSend, FiServer, FiSettings, FiShare2, FiShare, FiShieldOff, FiShield, FiShoppingBag, FiShoppingCart, FiShuffle, FiSidebar, FiSkipBack, FiSkipForward, FiSlack, FiSlash, FiSliders, FiSmartphone, FiSmile, FiSpeaker, FiSquare, FiStar, FiStopCircle, FiSun, FiSunrise, FiSunset, FiTablet, FiTag, FiTarget, FiTerminal, FiThermometer, FiThumbsDown, FiThumbsUp, FiToggleLeft, FiToggleRight, FiTrash2, FiTrash, FiTrello, FiTrendingDown, FiTrendingUp, FiTriangle, FiTruck, FiTv, FiTwitter, FiType, FiUmbrella, FiUnderline, FiUnlock, FiUploadCloud, FiUpload, FiUserCheck, FiUserMinus, FiUserPlus, FiUserX, FiUser, FiUsers, FiVideoOff, FiVideo, FiVoicemail, FiVolume1, FiVolume2, FiVolumeX, FiVolume, FiWatch, FiWifiOff, FiWifi, FiWind, FiXCircle, FiXOctagon, FiXSquare, FiX, FiYoutube, FiZapOff, FiZap, FiZoomIn, FiZoomOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiActivity", function() { return FiActivity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiAirplay", function() { return FiAirplay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiAlertCircle", function() { return FiAlertCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiAlertOctagon", function() { return FiAlertOctagon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiAlertTriangle", function() { return FiAlertTriangle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiAlignCenter", function() { return FiAlignCenter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiAlignJustify", function() { return FiAlignJustify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiAlignLeft", function() { return FiAlignLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiAlignRight", function() { return FiAlignRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiAnchor", function() { return FiAnchor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiAperture", function() { return FiAperture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiArchive", function() { return FiArchive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiArrowDownCircle", function() { return FiArrowDownCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiArrowDownLeft", function() { return FiArrowDownLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiArrowDownRight", function() { return FiArrowDownRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiArrowDown", function() { return FiArrowDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiArrowLeftCircle", function() { return FiArrowLeftCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiArrowLeft", function() { return FiArrowLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiArrowRightCircle", function() { return FiArrowRightCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiArrowRight", function() { return FiArrowRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiArrowUpCircle", function() { return FiArrowUpCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiArrowUpLeft", function() { return FiArrowUpLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiArrowUpRight", function() { return FiArrowUpRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiArrowUp", function() { return FiArrowUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiAtSign", function() { return FiAtSign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiAward", function() { return FiAward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiBarChart2", function() { return FiBarChart2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiBarChart", function() { return FiBarChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiBatteryCharging", function() { return FiBatteryCharging; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiBattery", function() { return FiBattery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiBellOff", function() { return FiBellOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiBell", function() { return FiBell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiBluetooth", function() { return FiBluetooth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiBold", function() { return FiBold; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiBookOpen", function() { return FiBookOpen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiBook", function() { return FiBook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiBookmark", function() { return FiBookmark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiBox", function() { return FiBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiBriefcase", function() { return FiBriefcase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiCalendar", function() { return FiCalendar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiCameraOff", function() { return FiCameraOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiCamera", function() { return FiCamera; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiCast", function() { return FiCast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiCheckCircle", function() { return FiCheckCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiCheckSquare", function() { return FiCheckSquare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiCheck", function() { return FiCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiChevronDown", function() { return FiChevronDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiChevronLeft", function() { return FiChevronLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiChevronRight", function() { return FiChevronRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiChevronUp", function() { return FiChevronUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiChevronsDown", function() { return FiChevronsDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiChevronsLeft", function() { return FiChevronsLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiChevronsRight", function() { return FiChevronsRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiChevronsUp", function() { return FiChevronsUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiChrome", function() { return FiChrome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiCircle", function() { return FiCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiClipboard", function() { return FiClipboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiClock", function() { return FiClock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiCloudDrizzle", function() { return FiCloudDrizzle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiCloudLightning", function() { return FiCloudLightning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiCloudOff", function() { return FiCloudOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiCloudRain", function() { return FiCloudRain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiCloudSnow", function() { return FiCloudSnow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiCloud", function() { return FiCloud; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiCode", function() { return FiCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiCodepen", function() { return FiCodepen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiCodesandbox", function() { return FiCodesandbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiCoffee", function() { return FiCoffee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiColumns", function() { return FiColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiCommand", function() { return FiCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiCompass", function() { return FiCompass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiCopy", function() { return FiCopy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiCornerDownLeft", function() { return FiCornerDownLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiCornerDownRight", function() { return FiCornerDownRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiCornerLeftDown", function() { return FiCornerLeftDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiCornerLeftUp", function() { return FiCornerLeftUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiCornerRightDown", function() { return FiCornerRightDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiCornerRightUp", function() { return FiCornerRightUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiCornerUpLeft", function() { return FiCornerUpLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiCornerUpRight", function() { return FiCornerUpRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiCpu", function() { return FiCpu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiCreditCard", function() { return FiCreditCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiCrop", function() { return FiCrop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiCrosshair", function() { return FiCrosshair; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiDatabase", function() { return FiDatabase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiDelete", function() { return FiDelete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiDisc", function() { return FiDisc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiDollarSign", function() { return FiDollarSign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiDownloadCloud", function() { return FiDownloadCloud; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiDownload", function() { return FiDownload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiDroplet", function() { return FiDroplet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiEdit2", function() { return FiEdit2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiEdit3", function() { return FiEdit3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiEdit", function() { return FiEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiExternalLink", function() { return FiExternalLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiEyeOff", function() { return FiEyeOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiEye", function() { return FiEye; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiFacebook", function() { return FiFacebook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiFastForward", function() { return FiFastForward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiFeather", function() { return FiFeather; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiFigma", function() { return FiFigma; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiFileMinus", function() { return FiFileMinus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiFilePlus", function() { return FiFilePlus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiFileText", function() { return FiFileText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiFile", function() { return FiFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiFilm", function() { return FiFilm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiFilter", function() { return FiFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiFlag", function() { return FiFlag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiFolderMinus", function() { return FiFolderMinus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiFolderPlus", function() { return FiFolderPlus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiFolder", function() { return FiFolder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiFrown", function() { return FiFrown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiGift", function() { return FiGift; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiGitBranch", function() { return FiGitBranch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiGitCommit", function() { return FiGitCommit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiGitMerge", function() { return FiGitMerge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiGitPullRequest", function() { return FiGitPullRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiGithub", function() { return FiGithub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiGitlab", function() { return FiGitlab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiGlobe", function() { return FiGlobe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiGrid", function() { return FiGrid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiHardDrive", function() { return FiHardDrive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiHash", function() { return FiHash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiHeadphones", function() { return FiHeadphones; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiHeart", function() { return FiHeart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiHelpCircle", function() { return FiHelpCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiHexagon", function() { return FiHexagon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiHome", function() { return FiHome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiImage", function() { return FiImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiInbox", function() { return FiInbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiInfo", function() { return FiInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiInstagram", function() { return FiInstagram; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiItalic", function() { return FiItalic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiKey", function() { return FiKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiLayers", function() { return FiLayers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiLayout", function() { return FiLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiLifeBuoy", function() { return FiLifeBuoy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiLink2", function() { return FiLink2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiLink", function() { return FiLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiLinkedin", function() { return FiLinkedin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiList", function() { return FiList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiLoader", function() { return FiLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiLock", function() { return FiLock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiLogIn", function() { return FiLogIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiLogOut", function() { return FiLogOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiMail", function() { return FiMail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiMapPin", function() { return FiMapPin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiMap", function() { return FiMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiMaximize2", function() { return FiMaximize2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiMaximize", function() { return FiMaximize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiMeh", function() { return FiMeh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiMenu", function() { return FiMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiMessageCircle", function() { return FiMessageCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiMessageSquare", function() { return FiMessageSquare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiMicOff", function() { return FiMicOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiMic", function() { return FiMic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiMinimize2", function() { return FiMinimize2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiMinimize", function() { return FiMinimize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiMinusCircle", function() { return FiMinusCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiMinusSquare", function() { return FiMinusSquare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiMinus", function() { return FiMinus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiMonitor", function() { return FiMonitor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiMoon", function() { return FiMoon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiMoreHorizontal", function() { return FiMoreHorizontal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiMoreVertical", function() { return FiMoreVertical; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiMousePointer", function() { return FiMousePointer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiMove", function() { return FiMove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiMusic", function() { return FiMusic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiNavigation2", function() { return FiNavigation2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiNavigation", function() { return FiNavigation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiOctagon", function() { return FiOctagon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiPackage", function() { return FiPackage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiPaperclip", function() { return FiPaperclip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiPauseCircle", function() { return FiPauseCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiPause", function() { return FiPause; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiPenTool", function() { return FiPenTool; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiPercent", function() { return FiPercent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiPhoneCall", function() { return FiPhoneCall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiPhoneForwarded", function() { return FiPhoneForwarded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiPhoneIncoming", function() { return FiPhoneIncoming; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiPhoneMissed", function() { return FiPhoneMissed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiPhoneOff", function() { return FiPhoneOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiPhoneOutgoing", function() { return FiPhoneOutgoing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiPhone", function() { return FiPhone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiPieChart", function() { return FiPieChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiPlayCircle", function() { return FiPlayCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiPlay", function() { return FiPlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiPlusCircle", function() { return FiPlusCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiPlusSquare", function() { return FiPlusSquare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiPlus", function() { return FiPlus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiPocket", function() { return FiPocket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiPower", function() { return FiPower; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiPrinter", function() { return FiPrinter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiRadio", function() { return FiRadio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiRefreshCcw", function() { return FiRefreshCcw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiRefreshCw", function() { return FiRefreshCw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiRepeat", function() { return FiRepeat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiRewind", function() { return FiRewind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiRotateCcw", function() { return FiRotateCcw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiRotateCw", function() { return FiRotateCw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiRss", function() { return FiRss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiSave", function() { return FiSave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiScissors", function() { return FiScissors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiSearch", function() { return FiSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiSend", function() { return FiSend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiServer", function() { return FiServer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiSettings", function() { return FiSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiShare2", function() { return FiShare2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiShare", function() { return FiShare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiShieldOff", function() { return FiShieldOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiShield", function() { return FiShield; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiShoppingBag", function() { return FiShoppingBag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiShoppingCart", function() { return FiShoppingCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiShuffle", function() { return FiShuffle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiSidebar", function() { return FiSidebar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiSkipBack", function() { return FiSkipBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiSkipForward", function() { return FiSkipForward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiSlack", function() { return FiSlack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiSlash", function() { return FiSlash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiSliders", function() { return FiSliders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiSmartphone", function() { return FiSmartphone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiSmile", function() { return FiSmile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiSpeaker", function() { return FiSpeaker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiSquare", function() { return FiSquare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiStar", function() { return FiStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiStopCircle", function() { return FiStopCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiSun", function() { return FiSun; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiSunrise", function() { return FiSunrise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiSunset", function() { return FiSunset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiTablet", function() { return FiTablet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiTag", function() { return FiTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiTarget", function() { return FiTarget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiTerminal", function() { return FiTerminal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiThermometer", function() { return FiThermometer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiThumbsDown", function() { return FiThumbsDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiThumbsUp", function() { return FiThumbsUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiToggleLeft", function() { return FiToggleLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiToggleRight", function() { return FiToggleRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiTrash2", function() { return FiTrash2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiTrash", function() { return FiTrash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiTrello", function() { return FiTrello; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiTrendingDown", function() { return FiTrendingDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiTrendingUp", function() { return FiTrendingUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiTriangle", function() { return FiTriangle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiTruck", function() { return FiTruck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiTv", function() { return FiTv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiTwitter", function() { return FiTwitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiType", function() { return FiType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiUmbrella", function() { return FiUmbrella; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiUnderline", function() { return FiUnderline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiUnlock", function() { return FiUnlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiUploadCloud", function() { return FiUploadCloud; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiUpload", function() { return FiUpload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiUserCheck", function() { return FiUserCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiUserMinus", function() { return FiUserMinus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiUserPlus", function() { return FiUserPlus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiUserX", function() { return FiUserX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiUser", function() { return FiUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiUsers", function() { return FiUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiVideoOff", function() { return FiVideoOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiVideo", function() { return FiVideo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiVoicemail", function() { return FiVoicemail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiVolume1", function() { return FiVolume1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiVolume2", function() { return FiVolume2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiVolumeX", function() { return FiVolumeX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiVolume", function() { return FiVolume; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiWatch", function() { return FiWatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiWifiOff", function() { return FiWifiOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiWifi", function() { return FiWifi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiWind", function() { return FiWind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiXCircle", function() { return FiXCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiXOctagon", function() { return FiXOctagon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiXSquare", function() { return FiXSquare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiX", function() { return FiX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiYoutube", function() { return FiYoutube; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiZapOff", function() { return FiZapOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiZap", function() { return FiZap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiZoomIn", function() { return FiZoomIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiZoomOut", function() { return FiZoomOut; });
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib */ "./node_modules/react-icons/lib/esm/index.js");
// THIS FILE IS AUTO GENERATED

var FiActivity = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"22 12 18 12 15 21 9 3 6 12 2 12"}}]})(props);
};
FiActivity.displayName = "FiActivity";
var FiAirplay = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"}},{"tag":"polygon","attr":{"points":"12 15 17 21 7 21 12 15"}}]})(props);
};
FiAirplay.displayName = "FiAirplay";
var FiAlertCircle = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"10"}},{"tag":"line","attr":{"x1":"12","y1":"8","x2":"12","y2":"12"}},{"tag":"line","attr":{"x1":"12","y1":"16","x2":"12","y2":"16"}}]})(props);
};
FiAlertCircle.displayName = "FiAlertCircle";
var FiAlertOctagon = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polygon","attr":{"points":"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"}},{"tag":"line","attr":{"x1":"12","y1":"8","x2":"12","y2":"12"}},{"tag":"line","attr":{"x1":"12","y1":"16","x2":"12","y2":"16"}}]})(props);
};
FiAlertOctagon.displayName = "FiAlertOctagon";
var FiAlertTriangle = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"}},{"tag":"line","attr":{"x1":"12","y1":"9","x2":"12","y2":"13"}},{"tag":"line","attr":{"x1":"12","y1":"17","x2":"12","y2":"17"}}]})(props);
};
FiAlertTriangle.displayName = "FiAlertTriangle";
var FiAlignCenter = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"18","y1":"10","x2":"6","y2":"10"}},{"tag":"line","attr":{"x1":"21","y1":"6","x2":"3","y2":"6"}},{"tag":"line","attr":{"x1":"21","y1":"14","x2":"3","y2":"14"}},{"tag":"line","attr":{"x1":"18","y1":"18","x2":"6","y2":"18"}}]})(props);
};
FiAlignCenter.displayName = "FiAlignCenter";
var FiAlignJustify = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"21","y1":"10","x2":"3","y2":"10"}},{"tag":"line","attr":{"x1":"21","y1":"6","x2":"3","y2":"6"}},{"tag":"line","attr":{"x1":"21","y1":"14","x2":"3","y2":"14"}},{"tag":"line","attr":{"x1":"21","y1":"18","x2":"3","y2":"18"}}]})(props);
};
FiAlignJustify.displayName = "FiAlignJustify";
var FiAlignLeft = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"17","y1":"10","x2":"3","y2":"10"}},{"tag":"line","attr":{"x1":"21","y1":"6","x2":"3","y2":"6"}},{"tag":"line","attr":{"x1":"21","y1":"14","x2":"3","y2":"14"}},{"tag":"line","attr":{"x1":"17","y1":"18","x2":"3","y2":"18"}}]})(props);
};
FiAlignLeft.displayName = "FiAlignLeft";
var FiAlignRight = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"21","y1":"10","x2":"7","y2":"10"}},{"tag":"line","attr":{"x1":"21","y1":"6","x2":"3","y2":"6"}},{"tag":"line","attr":{"x1":"21","y1":"14","x2":"3","y2":"14"}},{"tag":"line","attr":{"x1":"21","y1":"18","x2":"7","y2":"18"}}]})(props);
};
FiAlignRight.displayName = "FiAlignRight";
var FiAnchor = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"5","r":"3"}},{"tag":"line","attr":{"x1":"12","y1":"22","x2":"12","y2":"8"}},{"tag":"path","attr":{"d":"M5 12H2a10 10 0 0 0 20 0h-3"}}]})(props);
};
FiAnchor.displayName = "FiAnchor";
var FiAperture = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"10"}},{"tag":"line","attr":{"x1":"14.31","y1":"8","x2":"20.05","y2":"17.94"}},{"tag":"line","attr":{"x1":"9.69","y1":"8","x2":"21.17","y2":"8"}},{"tag":"line","attr":{"x1":"7.38","y1":"12","x2":"13.12","y2":"2.06"}},{"tag":"line","attr":{"x1":"9.69","y1":"16","x2":"3.95","y2":"6.06"}},{"tag":"line","attr":{"x1":"14.31","y1":"16","x2":"2.83","y2":"16"}},{"tag":"line","attr":{"x1":"16.62","y1":"12","x2":"10.88","y2":"21.94"}}]})(props);
};
FiAperture.displayName = "FiAperture";
var FiArchive = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"21 8 21 21 3 21 3 8"}},{"tag":"rect","attr":{"x":"1","y":"3","width":"22","height":"5"}},{"tag":"line","attr":{"x1":"10","y1":"12","x2":"14","y2":"12"}}]})(props);
};
FiArchive.displayName = "FiArchive";
var FiArrowDownCircle = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"10"}},{"tag":"polyline","attr":{"points":"8 12 12 16 16 12"}},{"tag":"line","attr":{"x1":"12","y1":"8","x2":"12","y2":"16"}}]})(props);
};
FiArrowDownCircle.displayName = "FiArrowDownCircle";
var FiArrowDownLeft = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"17","y1":"7","x2":"7","y2":"17"}},{"tag":"polyline","attr":{"points":"17 17 7 17 7 7"}}]})(props);
};
FiArrowDownLeft.displayName = "FiArrowDownLeft";
var FiArrowDownRight = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"7","y1":"7","x2":"17","y2":"17"}},{"tag":"polyline","attr":{"points":"17 7 17 17 7 17"}}]})(props);
};
FiArrowDownRight.displayName = "FiArrowDownRight";
var FiArrowDown = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"12","y1":"5","x2":"12","y2":"19"}},{"tag":"polyline","attr":{"points":"19 12 12 19 5 12"}}]})(props);
};
FiArrowDown.displayName = "FiArrowDown";
var FiArrowLeftCircle = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"10"}},{"tag":"polyline","attr":{"points":"12 8 8 12 12 16"}},{"tag":"line","attr":{"x1":"16","y1":"12","x2":"8","y2":"12"}}]})(props);
};
FiArrowLeftCircle.displayName = "FiArrowLeftCircle";
var FiArrowLeft = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"19","y1":"12","x2":"5","y2":"12"}},{"tag":"polyline","attr":{"points":"12 19 5 12 12 5"}}]})(props);
};
FiArrowLeft.displayName = "FiArrowLeft";
var FiArrowRightCircle = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"10"}},{"tag":"polyline","attr":{"points":"12 16 16 12 12 8"}},{"tag":"line","attr":{"x1":"8","y1":"12","x2":"16","y2":"12"}}]})(props);
};
FiArrowRightCircle.displayName = "FiArrowRightCircle";
var FiArrowRight = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"5","y1":"12","x2":"19","y2":"12"}},{"tag":"polyline","attr":{"points":"12 5 19 12 12 19"}}]})(props);
};
FiArrowRight.displayName = "FiArrowRight";
var FiArrowUpCircle = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"10"}},{"tag":"polyline","attr":{"points":"16 12 12 8 8 12"}},{"tag":"line","attr":{"x1":"12","y1":"16","x2":"12","y2":"8"}}]})(props);
};
FiArrowUpCircle.displayName = "FiArrowUpCircle";
var FiArrowUpLeft = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"17","y1":"17","x2":"7","y2":"7"}},{"tag":"polyline","attr":{"points":"7 17 7 7 17 7"}}]})(props);
};
FiArrowUpLeft.displayName = "FiArrowUpLeft";
var FiArrowUpRight = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"7","y1":"17","x2":"17","y2":"7"}},{"tag":"polyline","attr":{"points":"7 7 17 7 17 17"}}]})(props);
};
FiArrowUpRight.displayName = "FiArrowUpRight";
var FiArrowUp = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"12","y1":"19","x2":"12","y2":"5"}},{"tag":"polyline","attr":{"points":"5 12 12 5 19 12"}}]})(props);
};
FiArrowUp.displayName = "FiArrowUp";
var FiAtSign = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"4"}},{"tag":"path","attr":{"d":"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"}}]})(props);
};
FiAtSign.displayName = "FiAtSign";
var FiAward = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"8","r":"7"}},{"tag":"polyline","attr":{"points":"8.21 13.89 7 23 12 20 17 23 15.79 13.88"}}]})(props);
};
FiAward.displayName = "FiAward";
var FiBarChart2 = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"18","y1":"20","x2":"18","y2":"10"}},{"tag":"line","attr":{"x1":"12","y1":"20","x2":"12","y2":"4"}},{"tag":"line","attr":{"x1":"6","y1":"20","x2":"6","y2":"14"}}]})(props);
};
FiBarChart2.displayName = "FiBarChart2";
var FiBarChart = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"12","y1":"20","x2":"12","y2":"10"}},{"tag":"line","attr":{"x1":"18","y1":"20","x2":"18","y2":"4"}},{"tag":"line","attr":{"x1":"6","y1":"20","x2":"6","y2":"16"}}]})(props);
};
FiBarChart.displayName = "FiBarChart";
var FiBatteryCharging = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"}},{"tag":"line","attr":{"x1":"23","y1":"13","x2":"23","y2":"11"}},{"tag":"polyline","attr":{"points":"11 6 7 12 13 12 9 18"}}]})(props);
};
FiBatteryCharging.displayName = "FiBatteryCharging";
var FiBattery = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"x":"1","y":"6","width":"18","height":"12","rx":"2","ry":"2"}},{"tag":"line","attr":{"x1":"23","y1":"13","x2":"23","y2":"11"}}]})(props);
};
FiBattery.displayName = "FiBattery";
var FiBellOff = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M13.73 21a2 2 0 0 1-3.46 0"}},{"tag":"path","attr":{"d":"M18.63 13A17.89 17.89 0 0 1 18 8"}},{"tag":"path","attr":{"d":"M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"}},{"tag":"path","attr":{"d":"M18 8a6 6 0 0 0-9.33-5"}},{"tag":"line","attr":{"x1":"1","y1":"1","x2":"23","y2":"23"}}]})(props);
};
FiBellOff.displayName = "FiBellOff";
var FiBell = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}},{"tag":"path","attr":{"d":"M13.73 21a2 2 0 0 1-3.46 0"}}]})(props);
};
FiBell.displayName = "FiBell";
var FiBluetooth = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"}}]})(props);
};
FiBluetooth.displayName = "FiBluetooth";
var FiBold = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"}},{"tag":"path","attr":{"d":"M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"}}]})(props);
};
FiBold.displayName = "FiBold";
var FiBookOpen = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"}},{"tag":"path","attr":{"d":"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"}}]})(props);
};
FiBookOpen.displayName = "FiBookOpen";
var FiBook = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M4 19.5A2.5 2.5 0 0 1 6.5 17H20"}},{"tag":"path","attr":{"d":"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"}}]})(props);
};
FiBook.displayName = "FiBook";
var FiBookmark = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"}}]})(props);
};
FiBookmark.displayName = "FiBookmark";
var FiBox = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}},{"tag":"polyline","attr":{"points":"3.27 6.96 12 12.01 20.73 6.96"}},{"tag":"line","attr":{"x1":"12","y1":"22.08","x2":"12","y2":"12"}}]})(props);
};
FiBox.displayName = "FiBox";
var FiBriefcase = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"x":"2","y":"7","width":"20","height":"14","rx":"2","ry":"2"}},{"tag":"path","attr":{"d":"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"}}]})(props);
};
FiBriefcase.displayName = "FiBriefcase";
var FiCalendar = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"x":"3","y":"4","width":"18","height":"18","rx":"2","ry":"2"}},{"tag":"line","attr":{"x1":"16","y1":"2","x2":"16","y2":"6"}},{"tag":"line","attr":{"x1":"8","y1":"2","x2":"8","y2":"6"}},{"tag":"line","attr":{"x1":"3","y1":"10","x2":"21","y2":"10"}}]})(props);
};
FiCalendar.displayName = "FiCalendar";
var FiCameraOff = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"1","y1":"1","x2":"23","y2":"23"}},{"tag":"path","attr":{"d":"M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56"}}]})(props);
};
FiCameraOff.displayName = "FiCameraOff";
var FiCamera = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"}},{"tag":"circle","attr":{"cx":"12","cy":"13","r":"4"}}]})(props);
};
FiCamera.displayName = "FiCamera";
var FiCast = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"}},{"tag":"line","attr":{"x1":"2","y1":"20","x2":"2","y2":"20"}}]})(props);
};
FiCast.displayName = "FiCast";
var FiCheckCircle = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M22 11.08V12a10 10 0 1 1-5.93-9.14"}},{"tag":"polyline","attr":{"points":"22 4 12 14.01 9 11.01"}}]})(props);
};
FiCheckCircle.displayName = "FiCheckCircle";
var FiCheckSquare = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"9 11 12 14 22 4"}},{"tag":"path","attr":{"d":"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"}}]})(props);
};
FiCheckSquare.displayName = "FiCheckSquare";
var FiCheck = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"20 6 9 17 4 12"}}]})(props);
};
FiCheck.displayName = "FiCheck";
var FiChevronDown = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"6 9 12 15 18 9"}}]})(props);
};
FiChevronDown.displayName = "FiChevronDown";
var FiChevronLeft = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"15 18 9 12 15 6"}}]})(props);
};
FiChevronLeft.displayName = "FiChevronLeft";
var FiChevronRight = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"9 18 15 12 9 6"}}]})(props);
};
FiChevronRight.displayName = "FiChevronRight";
var FiChevronUp = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"18 15 12 9 6 15"}}]})(props);
};
FiChevronUp.displayName = "FiChevronUp";
var FiChevronsDown = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"7 13 12 18 17 13"}},{"tag":"polyline","attr":{"points":"7 6 12 11 17 6"}}]})(props);
};
FiChevronsDown.displayName = "FiChevronsDown";
var FiChevronsLeft = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"11 17 6 12 11 7"}},{"tag":"polyline","attr":{"points":"18 17 13 12 18 7"}}]})(props);
};
FiChevronsLeft.displayName = "FiChevronsLeft";
var FiChevronsRight = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"13 17 18 12 13 7"}},{"tag":"polyline","attr":{"points":"6 17 11 12 6 7"}}]})(props);
};
FiChevronsRight.displayName = "FiChevronsRight";
var FiChevronsUp = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"17 11 12 6 7 11"}},{"tag":"polyline","attr":{"points":"17 18 12 13 7 18"}}]})(props);
};
FiChevronsUp.displayName = "FiChevronsUp";
var FiChrome = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"10"}},{"tag":"circle","attr":{"cx":"12","cy":"12","r":"4"}},{"tag":"line","attr":{"x1":"21.17","y1":"8","x2":"12","y2":"8"}},{"tag":"line","attr":{"x1":"3.95","y1":"6.06","x2":"8.54","y2":"14"}},{"tag":"line","attr":{"x1":"10.88","y1":"21.94","x2":"15.46","y2":"14"}}]})(props);
};
FiChrome.displayName = "FiChrome";
var FiCircle = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"10"}}]})(props);
};
FiCircle.displayName = "FiCircle";
var FiClipboard = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}},{"tag":"rect","attr":{"x":"8","y":"2","width":"8","height":"4","rx":"1","ry":"1"}}]})(props);
};
FiClipboard.displayName = "FiClipboard";
var FiClock = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"10"}},{"tag":"polyline","attr":{"points":"12 6 12 12 16 14"}}]})(props);
};
FiClock.displayName = "FiClock";
var FiCloudDrizzle = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"8","y1":"19","x2":"8","y2":"21"}},{"tag":"line","attr":{"x1":"8","y1":"13","x2":"8","y2":"15"}},{"tag":"line","attr":{"x1":"16","y1":"19","x2":"16","y2":"21"}},{"tag":"line","attr":{"x1":"16","y1":"13","x2":"16","y2":"15"}},{"tag":"line","attr":{"x1":"12","y1":"21","x2":"12","y2":"23"}},{"tag":"line","attr":{"x1":"12","y1":"15","x2":"12","y2":"17"}},{"tag":"path","attr":{"d":"M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"}}]})(props);
};
FiCloudDrizzle.displayName = "FiCloudDrizzle";
var FiCloudLightning = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"}},{"tag":"polyline","attr":{"points":"13 11 9 17 15 17 11 23"}}]})(props);
};
FiCloudLightning.displayName = "FiCloudLightning";
var FiCloudOff = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"}},{"tag":"line","attr":{"x1":"1","y1":"1","x2":"23","y2":"23"}}]})(props);
};
FiCloudOff.displayName = "FiCloudOff";
var FiCloudRain = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"16","y1":"13","x2":"16","y2":"21"}},{"tag":"line","attr":{"x1":"8","y1":"13","x2":"8","y2":"21"}},{"tag":"line","attr":{"x1":"12","y1":"15","x2":"12","y2":"23"}},{"tag":"path","attr":{"d":"M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"}}]})(props);
};
FiCloudRain.displayName = "FiCloudRain";
var FiCloudSnow = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"}},{"tag":"line","attr":{"x1":"8","y1":"16","x2":"8","y2":"16"}},{"tag":"line","attr":{"x1":"8","y1":"20","x2":"8","y2":"20"}},{"tag":"line","attr":{"x1":"12","y1":"18","x2":"12","y2":"18"}},{"tag":"line","attr":{"x1":"12","y1":"22","x2":"12","y2":"22"}},{"tag":"line","attr":{"x1":"16","y1":"16","x2":"16","y2":"16"}},{"tag":"line","attr":{"x1":"16","y1":"20","x2":"16","y2":"20"}}]})(props);
};
FiCloudSnow.displayName = "FiCloudSnow";
var FiCloud = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"}}]})(props);
};
FiCloud.displayName = "FiCloud";
var FiCode = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"16 18 22 12 16 6"}},{"tag":"polyline","attr":{"points":"8 6 2 12 8 18"}}]})(props);
};
FiCode.displayName = "FiCode";
var FiCodepen = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polygon","attr":{"points":"12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"}},{"tag":"line","attr":{"x1":"12","y1":"22","x2":"12","y2":"15.5"}},{"tag":"polyline","attr":{"points":"22 8.5 12 15.5 2 8.5"}},{"tag":"polyline","attr":{"points":"2 15.5 12 8.5 22 15.5"}},{"tag":"line","attr":{"x1":"12","y1":"2","x2":"12","y2":"8.5"}}]})(props);
};
FiCodepen.displayName = "FiCodepen";
var FiCodesandbox = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}},{"tag":"polyline","attr":{"points":"7.5 4.21 12 6.81 16.5 4.21"}},{"tag":"polyline","attr":{"points":"7.5 19.79 7.5 14.6 3 12"}},{"tag":"polyline","attr":{"points":"21 12 16.5 14.6 16.5 19.79"}},{"tag":"polyline","attr":{"points":"3.27 6.96 12 12.01 20.73 6.96"}},{"tag":"line","attr":{"x1":"12","y1":"22.08","x2":"12","y2":"12"}}]})(props);
};
FiCodesandbox.displayName = "FiCodesandbox";
var FiCoffee = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M18 8h1a4 4 0 0 1 0 8h-1"}},{"tag":"path","attr":{"d":"M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"}},{"tag":"line","attr":{"x1":"6","y1":"1","x2":"6","y2":"4"}},{"tag":"line","attr":{"x1":"10","y1":"1","x2":"10","y2":"4"}},{"tag":"line","attr":{"x1":"14","y1":"1","x2":"14","y2":"4"}}]})(props);
};
FiCoffee.displayName = "FiCoffee";
var FiColumns = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"}}]})(props);
};
FiColumns.displayName = "FiColumns";
var FiCommand = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"}}]})(props);
};
FiCommand.displayName = "FiCommand";
var FiCompass = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"10"}},{"tag":"polygon","attr":{"points":"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"}}]})(props);
};
FiCompass.displayName = "FiCompass";
var FiCopy = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"x":"9","y":"9","width":"13","height":"13","rx":"2","ry":"2"}},{"tag":"path","attr":{"d":"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"}}]})(props);
};
FiCopy.displayName = "FiCopy";
var FiCornerDownLeft = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"9 10 4 15 9 20"}},{"tag":"path","attr":{"d":"M20 4v7a4 4 0 0 1-4 4H4"}}]})(props);
};
FiCornerDownLeft.displayName = "FiCornerDownLeft";
var FiCornerDownRight = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"15 10 20 15 15 20"}},{"tag":"path","attr":{"d":"M4 4v7a4 4 0 0 0 4 4h12"}}]})(props);
};
FiCornerDownRight.displayName = "FiCornerDownRight";
var FiCornerLeftDown = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"14 15 9 20 4 15"}},{"tag":"path","attr":{"d":"M20 4h-7a4 4 0 0 0-4 4v12"}}]})(props);
};
FiCornerLeftDown.displayName = "FiCornerLeftDown";
var FiCornerLeftUp = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"14 9 9 4 4 9"}},{"tag":"path","attr":{"d":"M20 20h-7a4 4 0 0 1-4-4V4"}}]})(props);
};
FiCornerLeftUp.displayName = "FiCornerLeftUp";
var FiCornerRightDown = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"10 15 15 20 20 15"}},{"tag":"path","attr":{"d":"M4 4h7a4 4 0 0 1 4 4v12"}}]})(props);
};
FiCornerRightDown.displayName = "FiCornerRightDown";
var FiCornerRightUp = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"10 9 15 4 20 9"}},{"tag":"path","attr":{"d":"M4 20h7a4 4 0 0 0 4-4V4"}}]})(props);
};
FiCornerRightUp.displayName = "FiCornerRightUp";
var FiCornerUpLeft = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"9 14 4 9 9 4"}},{"tag":"path","attr":{"d":"M20 20v-7a4 4 0 0 0-4-4H4"}}]})(props);
};
FiCornerUpLeft.displayName = "FiCornerUpLeft";
var FiCornerUpRight = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"15 14 20 9 15 4"}},{"tag":"path","attr":{"d":"M4 20v-7a4 4 0 0 1 4-4h12"}}]})(props);
};
FiCornerUpRight.displayName = "FiCornerUpRight";
var FiCpu = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"x":"4","y":"4","width":"16","height":"16","rx":"2","ry":"2"}},{"tag":"rect","attr":{"x":"9","y":"9","width":"6","height":"6"}},{"tag":"line","attr":{"x1":"9","y1":"1","x2":"9","y2":"4"}},{"tag":"line","attr":{"x1":"15","y1":"1","x2":"15","y2":"4"}},{"tag":"line","attr":{"x1":"9","y1":"20","x2":"9","y2":"23"}},{"tag":"line","attr":{"x1":"15","y1":"20","x2":"15","y2":"23"}},{"tag":"line","attr":{"x1":"20","y1":"9","x2":"23","y2":"9"}},{"tag":"line","attr":{"x1":"20","y1":"14","x2":"23","y2":"14"}},{"tag":"line","attr":{"x1":"1","y1":"9","x2":"4","y2":"9"}},{"tag":"line","attr":{"x1":"1","y1":"14","x2":"4","y2":"14"}}]})(props);
};
FiCpu.displayName = "FiCpu";
var FiCreditCard = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"x":"1","y":"4","width":"22","height":"16","rx":"2","ry":"2"}},{"tag":"line","attr":{"x1":"1","y1":"10","x2":"23","y2":"10"}}]})(props);
};
FiCreditCard.displayName = "FiCreditCard";
var FiCrop = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M6.13 1L6 16a2 2 0 0 0 2 2h15"}},{"tag":"path","attr":{"d":"M1 6.13L16 6a2 2 0 0 1 2 2v15"}}]})(props);
};
FiCrop.displayName = "FiCrop";
var FiCrosshair = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"10"}},{"tag":"line","attr":{"x1":"22","y1":"12","x2":"18","y2":"12"}},{"tag":"line","attr":{"x1":"6","y1":"12","x2":"2","y2":"12"}},{"tag":"line","attr":{"x1":"12","y1":"6","x2":"12","y2":"2"}},{"tag":"line","attr":{"x1":"12","y1":"22","x2":"12","y2":"18"}}]})(props);
};
FiCrosshair.displayName = "FiCrosshair";
var FiDatabase = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"ellipse","attr":{"cx":"12","cy":"5","rx":"9","ry":"3"}},{"tag":"path","attr":{"d":"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"}},{"tag":"path","attr":{"d":"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"}}]})(props);
};
FiDatabase.displayName = "FiDatabase";
var FiDelete = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"}},{"tag":"line","attr":{"x1":"18","y1":"9","x2":"12","y2":"15"}},{"tag":"line","attr":{"x1":"12","y1":"9","x2":"18","y2":"15"}}]})(props);
};
FiDelete.displayName = "FiDelete";
var FiDisc = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"10"}},{"tag":"circle","attr":{"cx":"12","cy":"12","r":"3"}}]})(props);
};
FiDisc.displayName = "FiDisc";
var FiDollarSign = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"12","y1":"1","x2":"12","y2":"23"}},{"tag":"path","attr":{"d":"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"}}]})(props);
};
FiDollarSign.displayName = "FiDollarSign";
var FiDownloadCloud = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"8 17 12 21 16 17"}},{"tag":"line","attr":{"x1":"12","y1":"12","x2":"12","y2":"21"}},{"tag":"path","attr":{"d":"M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"}}]})(props);
};
FiDownloadCloud.displayName = "FiDownloadCloud";
var FiDownload = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}},{"tag":"polyline","attr":{"points":"7 10 12 15 17 10"}},{"tag":"line","attr":{"x1":"12","y1":"15","x2":"12","y2":"3"}}]})(props);
};
FiDownload.displayName = "FiDownload";
var FiDroplet = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"}}]})(props);
};
FiDroplet.displayName = "FiDroplet";
var FiEdit2 = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"}}]})(props);
};
FiEdit2.displayName = "FiEdit2";
var FiEdit3 = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M12 20h9"}},{"tag":"path","attr":{"d":"M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"}}]})(props);
};
FiEdit3.displayName = "FiEdit3";
var FiEdit = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}},{"tag":"path","attr":{"d":"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"}}]})(props);
};
FiEdit.displayName = "FiEdit";
var FiExternalLink = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}},{"tag":"polyline","attr":{"points":"15 3 21 3 21 9"}},{"tag":"line","attr":{"x1":"10","y1":"14","x2":"21","y2":"3"}}]})(props);
};
FiExternalLink.displayName = "FiExternalLink";
var FiEyeOff = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"}},{"tag":"line","attr":{"x1":"1","y1":"1","x2":"23","y2":"23"}}]})(props);
};
FiEyeOff.displayName = "FiEyeOff";
var FiEye = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}},{"tag":"circle","attr":{"cx":"12","cy":"12","r":"3"}}]})(props);
};
FiEye.displayName = "FiEye";
var FiFacebook = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"}}]})(props);
};
FiFacebook.displayName = "FiFacebook";
var FiFastForward = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polygon","attr":{"points":"13 19 22 12 13 5 13 19"}},{"tag":"polygon","attr":{"points":"2 19 11 12 2 5 2 19"}}]})(props);
};
FiFastForward.displayName = "FiFastForward";
var FiFeather = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"}},{"tag":"line","attr":{"x1":"16","y1":"8","x2":"2","y2":"22"}},{"tag":"line","attr":{"x1":"17.5","y1":"15","x2":"9","y2":"15"}}]})(props);
};
FiFeather.displayName = "FiFeather";
var FiFigma = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"}},{"tag":"path","attr":{"d":"M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"}},{"tag":"path","attr":{"d":"M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"}},{"tag":"path","attr":{"d":"M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"}},{"tag":"path","attr":{"d":"M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"}}]})(props);
};
FiFigma.displayName = "FiFigma";
var FiFileMinus = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}},{"tag":"polyline","attr":{"points":"14 2 14 8 20 8"}},{"tag":"line","attr":{"x1":"9","y1":"15","x2":"15","y2":"15"}}]})(props);
};
FiFileMinus.displayName = "FiFileMinus";
var FiFilePlus = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}},{"tag":"polyline","attr":{"points":"14 2 14 8 20 8"}},{"tag":"line","attr":{"x1":"12","y1":"18","x2":"12","y2":"12"}},{"tag":"line","attr":{"x1":"9","y1":"15","x2":"15","y2":"15"}}]})(props);
};
FiFilePlus.displayName = "FiFilePlus";
var FiFileText = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}},{"tag":"polyline","attr":{"points":"14 2 14 8 20 8"}},{"tag":"line","attr":{"x1":"16","y1":"13","x2":"8","y2":"13"}},{"tag":"line","attr":{"x1":"16","y1":"17","x2":"8","y2":"17"}},{"tag":"polyline","attr":{"points":"10 9 9 9 8 9"}}]})(props);
};
FiFileText.displayName = "FiFileText";
var FiFile = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"}},{"tag":"polyline","attr":{"points":"13 2 13 9 20 9"}}]})(props);
};
FiFile.displayName = "FiFile";
var FiFilm = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"x":"2","y":"2","width":"20","height":"20","rx":"2.18","ry":"2.18"}},{"tag":"line","attr":{"x1":"7","y1":"2","x2":"7","y2":"22"}},{"tag":"line","attr":{"x1":"17","y1":"2","x2":"17","y2":"22"}},{"tag":"line","attr":{"x1":"2","y1":"12","x2":"22","y2":"12"}},{"tag":"line","attr":{"x1":"2","y1":"7","x2":"7","y2":"7"}},{"tag":"line","attr":{"x1":"2","y1":"17","x2":"7","y2":"17"}},{"tag":"line","attr":{"x1":"17","y1":"17","x2":"22","y2":"17"}},{"tag":"line","attr":{"x1":"17","y1":"7","x2":"22","y2":"7"}}]})(props);
};
FiFilm.displayName = "FiFilm";
var FiFilter = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polygon","attr":{"points":"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"}}]})(props);
};
FiFilter.displayName = "FiFilter";
var FiFlag = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"}},{"tag":"line","attr":{"x1":"4","y1":"22","x2":"4","y2":"15"}}]})(props);
};
FiFlag.displayName = "FiFlag";
var FiFolderMinus = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"}},{"tag":"line","attr":{"x1":"9","y1":"14","x2":"15","y2":"14"}}]})(props);
};
FiFolderMinus.displayName = "FiFolderMinus";
var FiFolderPlus = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"}},{"tag":"line","attr":{"x1":"12","y1":"11","x2":"12","y2":"17"}},{"tag":"line","attr":{"x1":"9","y1":"14","x2":"15","y2":"14"}}]})(props);
};
FiFolderPlus.displayName = "FiFolderPlus";
var FiFolder = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"}}]})(props);
};
FiFolder.displayName = "FiFolder";
var FiFrown = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"10"}},{"tag":"path","attr":{"d":"M16 16s-1.5-2-4-2-4 2-4 2"}},{"tag":"line","attr":{"x1":"9","y1":"9","x2":"9.01","y2":"9"}},{"tag":"line","attr":{"x1":"15","y1":"9","x2":"15.01","y2":"9"}}]})(props);
};
FiFrown.displayName = "FiFrown";
var FiGift = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"20 12 20 22 4 22 4 12"}},{"tag":"rect","attr":{"x":"2","y":"7","width":"20","height":"5"}},{"tag":"line","attr":{"x1":"12","y1":"22","x2":"12","y2":"7"}},{"tag":"path","attr":{"d":"M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"}},{"tag":"path","attr":{"d":"M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"}}]})(props);
};
FiGift.displayName = "FiGift";
var FiGitBranch = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"6","y1":"3","x2":"6","y2":"15"}},{"tag":"circle","attr":{"cx":"18","cy":"6","r":"3"}},{"tag":"circle","attr":{"cx":"6","cy":"18","r":"3"}},{"tag":"path","attr":{"d":"M18 9a9 9 0 0 1-9 9"}}]})(props);
};
FiGitBranch.displayName = "FiGitBranch";
var FiGitCommit = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"4"}},{"tag":"line","attr":{"x1":"1.05","y1":"12","x2":"7","y2":"12"}},{"tag":"line","attr":{"x1":"17.01","y1":"12","x2":"22.96","y2":"12"}}]})(props);
};
FiGitCommit.displayName = "FiGitCommit";
var FiGitMerge = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"18","cy":"18","r":"3"}},{"tag":"circle","attr":{"cx":"6","cy":"6","r":"3"}},{"tag":"path","attr":{"d":"M6 21V9a9 9 0 0 0 9 9"}}]})(props);
};
FiGitMerge.displayName = "FiGitMerge";
var FiGitPullRequest = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"18","cy":"18","r":"3"}},{"tag":"circle","attr":{"cx":"6","cy":"6","r":"3"}},{"tag":"path","attr":{"d":"M13 6h3a2 2 0 0 1 2 2v7"}},{"tag":"line","attr":{"x1":"6","y1":"9","x2":"6","y2":"21"}}]})(props);
};
FiGitPullRequest.displayName = "FiGitPullRequest";
var FiGithub = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"}}]})(props);
};
FiGithub.displayName = "FiGithub";
var FiGitlab = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"}}]})(props);
};
FiGitlab.displayName = "FiGitlab";
var FiGlobe = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"10"}},{"tag":"line","attr":{"x1":"2","y1":"12","x2":"22","y2":"12"}},{"tag":"path","attr":{"d":"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"}}]})(props);
};
FiGlobe.displayName = "FiGlobe";
var FiGrid = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"x":"3","y":"3","width":"7","height":"7"}},{"tag":"rect","attr":{"x":"14","y":"3","width":"7","height":"7"}},{"tag":"rect","attr":{"x":"14","y":"14","width":"7","height":"7"}},{"tag":"rect","attr":{"x":"3","y":"14","width":"7","height":"7"}}]})(props);
};
FiGrid.displayName = "FiGrid";
var FiHardDrive = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"22","y1":"12","x2":"2","y2":"12"}},{"tag":"path","attr":{"d":"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}},{"tag":"line","attr":{"x1":"6","y1":"16","x2":"6","y2":"16"}},{"tag":"line","attr":{"x1":"10","y1":"16","x2":"10","y2":"16"}}]})(props);
};
FiHardDrive.displayName = "FiHardDrive";
var FiHash = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"4","y1":"9","x2":"20","y2":"9"}},{"tag":"line","attr":{"x1":"4","y1":"15","x2":"20","y2":"15"}},{"tag":"line","attr":{"x1":"10","y1":"3","x2":"8","y2":"21"}},{"tag":"line","attr":{"x1":"16","y1":"3","x2":"14","y2":"21"}}]})(props);
};
FiHash.displayName = "FiHash";
var FiHeadphones = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M3 18v-6a9 9 0 0 1 18 0v6"}},{"tag":"path","attr":{"d":"M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"}}]})(props);
};
FiHeadphones.displayName = "FiHeadphones";
var FiHeart = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"}}]})(props);
};
FiHeart.displayName = "FiHeart";
var FiHelpCircle = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"10"}},{"tag":"path","attr":{"d":"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}},{"tag":"line","attr":{"x1":"12","y1":"17","x2":"12","y2":"17"}}]})(props);
};
FiHelpCircle.displayName = "FiHelpCircle";
var FiHexagon = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}}]})(props);
};
FiHexagon.displayName = "FiHexagon";
var FiHome = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}},{"tag":"polyline","attr":{"points":"9 22 9 12 15 12 15 22"}}]})(props);
};
FiHome.displayName = "FiHome";
var FiImage = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"x":"3","y":"3","width":"18","height":"18","rx":"2","ry":"2"}},{"tag":"circle","attr":{"cx":"8.5","cy":"8.5","r":"1.5"}},{"tag":"polyline","attr":{"points":"21 15 16 10 5 21"}}]})(props);
};
FiImage.displayName = "FiImage";
var FiInbox = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"22 12 16 12 14 15 10 15 8 12 2 12"}},{"tag":"path","attr":{"d":"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}}]})(props);
};
FiInbox.displayName = "FiInbox";
var FiInfo = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"10"}},{"tag":"line","attr":{"x1":"12","y1":"16","x2":"12","y2":"12"}},{"tag":"line","attr":{"x1":"12","y1":"8","x2":"12","y2":"8"}}]})(props);
};
FiInfo.displayName = "FiInfo";
var FiInstagram = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"x":"2","y":"2","width":"20","height":"20","rx":"5","ry":"5"}},{"tag":"path","attr":{"d":"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}},{"tag":"line","attr":{"x1":"17.5","y1":"6.5","x2":"17.5","y2":"6.5"}}]})(props);
};
FiInstagram.displayName = "FiInstagram";
var FiItalic = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"19","y1":"4","x2":"10","y2":"4"}},{"tag":"line","attr":{"x1":"14","y1":"20","x2":"5","y2":"20"}},{"tag":"line","attr":{"x1":"15","y1":"4","x2":"9","y2":"20"}}]})(props);
};
FiItalic.displayName = "FiItalic";
var FiKey = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"}}]})(props);
};
FiKey.displayName = "FiKey";
var FiLayers = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polygon","attr":{"points":"12 2 2 7 12 12 22 7 12 2"}},{"tag":"polyline","attr":{"points":"2 17 12 22 22 17"}},{"tag":"polyline","attr":{"points":"2 12 12 17 22 12"}}]})(props);
};
FiLayers.displayName = "FiLayers";
var FiLayout = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"x":"3","y":"3","width":"18","height":"18","rx":"2","ry":"2"}},{"tag":"line","attr":{"x1":"3","y1":"9","x2":"21","y2":"9"}},{"tag":"line","attr":{"x1":"9","y1":"21","x2":"9","y2":"9"}}]})(props);
};
FiLayout.displayName = "FiLayout";
var FiLifeBuoy = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"10"}},{"tag":"circle","attr":{"cx":"12","cy":"12","r":"4"}},{"tag":"line","attr":{"x1":"4.93","y1":"4.93","x2":"9.17","y2":"9.17"}},{"tag":"line","attr":{"x1":"14.83","y1":"14.83","x2":"19.07","y2":"19.07"}},{"tag":"line","attr":{"x1":"14.83","y1":"9.17","x2":"19.07","y2":"4.93"}},{"tag":"line","attr":{"x1":"14.83","y1":"9.17","x2":"18.36","y2":"5.64"}},{"tag":"line","attr":{"x1":"4.93","y1":"19.07","x2":"9.17","y2":"14.83"}}]})(props);
};
FiLifeBuoy.displayName = "FiLifeBuoy";
var FiLink2 = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"}},{"tag":"line","attr":{"x1":"8","y1":"12","x2":"16","y2":"12"}}]})(props);
};
FiLink2.displayName = "FiLink2";
var FiLink = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}},{"tag":"path","attr":{"d":"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"}}]})(props);
};
FiLink.displayName = "FiLink";
var FiLinkedin = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}},{"tag":"rect","attr":{"x":"2","y":"9","width":"4","height":"12"}},{"tag":"circle","attr":{"cx":"4","cy":"4","r":"2"}}]})(props);
};
FiLinkedin.displayName = "FiLinkedin";
var FiList = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"8","y1":"6","x2":"21","y2":"6"}},{"tag":"line","attr":{"x1":"8","y1":"12","x2":"21","y2":"12"}},{"tag":"line","attr":{"x1":"8","y1":"18","x2":"21","y2":"18"}},{"tag":"line","attr":{"x1":"3","y1":"6","x2":"3","y2":"6"}},{"tag":"line","attr":{"x1":"3","y1":"12","x2":"3","y2":"12"}},{"tag":"line","attr":{"x1":"3","y1":"18","x2":"3","y2":"18"}}]})(props);
};
FiList.displayName = "FiList";
var FiLoader = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"12","y1":"2","x2":"12","y2":"6"}},{"tag":"line","attr":{"x1":"12","y1":"18","x2":"12","y2":"22"}},{"tag":"line","attr":{"x1":"4.93","y1":"4.93","x2":"7.76","y2":"7.76"}},{"tag":"line","attr":{"x1":"16.24","y1":"16.24","x2":"19.07","y2":"19.07"}},{"tag":"line","attr":{"x1":"2","y1":"12","x2":"6","y2":"12"}},{"tag":"line","attr":{"x1":"18","y1":"12","x2":"22","y2":"12"}},{"tag":"line","attr":{"x1":"4.93","y1":"19.07","x2":"7.76","y2":"16.24"}},{"tag":"line","attr":{"x1":"16.24","y1":"7.76","x2":"19.07","y2":"4.93"}}]})(props);
};
FiLoader.displayName = "FiLoader";
var FiLock = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"x":"3","y":"11","width":"18","height":"11","rx":"2","ry":"2"}},{"tag":"path","attr":{"d":"M7 11V7a5 5 0 0 1 10 0v4"}}]})(props);
};
FiLock.displayName = "FiLock";
var FiLogIn = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}},{"tag":"polyline","attr":{"points":"10 17 15 12 10 7"}},{"tag":"line","attr":{"x1":"15","y1":"12","x2":"3","y2":"12"}}]})(props);
};
FiLogIn.displayName = "FiLogIn";
var FiLogOut = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}},{"tag":"polyline","attr":{"points":"16 17 21 12 16 7"}},{"tag":"line","attr":{"x1":"21","y1":"12","x2":"9","y2":"12"}}]})(props);
};
FiLogOut.displayName = "FiLogOut";
var FiMail = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}},{"tag":"polyline","attr":{"points":"22,6 12,13 2,6"}}]})(props);
};
FiMail.displayName = "FiMail";
var FiMapPin = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}},{"tag":"circle","attr":{"cx":"12","cy":"10","r":"3"}}]})(props);
};
FiMapPin.displayName = "FiMapPin";
var FiMap = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polygon","attr":{"points":"1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"}},{"tag":"line","attr":{"x1":"8","y1":"2","x2":"8","y2":"18"}},{"tag":"line","attr":{"x1":"16","y1":"6","x2":"16","y2":"22"}}]})(props);
};
FiMap.displayName = "FiMap";
var FiMaximize2 = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"15 3 21 3 21 9"}},{"tag":"polyline","attr":{"points":"9 21 3 21 3 15"}},{"tag":"line","attr":{"x1":"21","y1":"3","x2":"14","y2":"10"}},{"tag":"line","attr":{"x1":"3","y1":"21","x2":"10","y2":"14"}}]})(props);
};
FiMaximize2.displayName = "FiMaximize2";
var FiMaximize = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"}}]})(props);
};
FiMaximize.displayName = "FiMaximize";
var FiMeh = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"10"}},{"tag":"line","attr":{"x1":"8","y1":"15","x2":"16","y2":"15"}},{"tag":"line","attr":{"x1":"9","y1":"9","x2":"9.01","y2":"9"}},{"tag":"line","attr":{"x1":"15","y1":"9","x2":"15.01","y2":"9"}}]})(props);
};
FiMeh.displayName = "FiMeh";
var FiMenu = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"3","y1":"12","x2":"21","y2":"12"}},{"tag":"line","attr":{"x1":"3","y1":"6","x2":"21","y2":"6"}},{"tag":"line","attr":{"x1":"3","y1":"18","x2":"21","y2":"18"}}]})(props);
};
FiMenu.displayName = "FiMenu";
var FiMessageCircle = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"}}]})(props);
};
FiMessageCircle.displayName = "FiMessageCircle";
var FiMessageSquare = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}}]})(props);
};
FiMessageSquare.displayName = "FiMessageSquare";
var FiMicOff = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"1","y1":"1","x2":"23","y2":"23"}},{"tag":"path","attr":{"d":"M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"}},{"tag":"path","attr":{"d":"M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"}},{"tag":"line","attr":{"x1":"12","y1":"19","x2":"12","y2":"23"}},{"tag":"line","attr":{"x1":"8","y1":"23","x2":"16","y2":"23"}}]})(props);
};
FiMicOff.displayName = "FiMicOff";
var FiMic = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"}},{"tag":"path","attr":{"d":"M19 10v2a7 7 0 0 1-14 0v-2"}},{"tag":"line","attr":{"x1":"12","y1":"19","x2":"12","y2":"23"}},{"tag":"line","attr":{"x1":"8","y1":"23","x2":"16","y2":"23"}}]})(props);
};
FiMic.displayName = "FiMic";
var FiMinimize2 = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"4 14 10 14 10 20"}},{"tag":"polyline","attr":{"points":"20 10 14 10 14 4"}},{"tag":"line","attr":{"x1":"14","y1":"10","x2":"21","y2":"3"}},{"tag":"line","attr":{"x1":"3","y1":"21","x2":"10","y2":"14"}}]})(props);
};
FiMinimize2.displayName = "FiMinimize2";
var FiMinimize = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"}}]})(props);
};
FiMinimize.displayName = "FiMinimize";
var FiMinusCircle = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"10"}},{"tag":"line","attr":{"x1":"8","y1":"12","x2":"16","y2":"12"}}]})(props);
};
FiMinusCircle.displayName = "FiMinusCircle";
var FiMinusSquare = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"x":"3","y":"3","width":"18","height":"18","rx":"2","ry":"2"}},{"tag":"line","attr":{"x1":"8","y1":"12","x2":"16","y2":"12"}}]})(props);
};
FiMinusSquare.displayName = "FiMinusSquare";
var FiMinus = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"5","y1":"12","x2":"19","y2":"12"}}]})(props);
};
FiMinus.displayName = "FiMinus";
var FiMonitor = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"x":"2","y":"3","width":"20","height":"14","rx":"2","ry":"2"}},{"tag":"line","attr":{"x1":"8","y1":"21","x2":"16","y2":"21"}},{"tag":"line","attr":{"x1":"12","y1":"17","x2":"12","y2":"21"}}]})(props);
};
FiMonitor.displayName = "FiMonitor";
var FiMoon = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"}}]})(props);
};
FiMoon.displayName = "FiMoon";
var FiMoreHorizontal = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"1"}},{"tag":"circle","attr":{"cx":"19","cy":"12","r":"1"}},{"tag":"circle","attr":{"cx":"5","cy":"12","r":"1"}}]})(props);
};
FiMoreHorizontal.displayName = "FiMoreHorizontal";
var FiMoreVertical = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"1"}},{"tag":"circle","attr":{"cx":"12","cy":"5","r":"1"}},{"tag":"circle","attr":{"cx":"12","cy":"19","r":"1"}}]})(props);
};
FiMoreVertical.displayName = "FiMoreVertical";
var FiMousePointer = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"}},{"tag":"path","attr":{"d":"M13 13l6 6"}}]})(props);
};
FiMousePointer.displayName = "FiMousePointer";
var FiMove = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"5 9 2 12 5 15"}},{"tag":"polyline","attr":{"points":"9 5 12 2 15 5"}},{"tag":"polyline","attr":{"points":"15 19 12 22 9 19"}},{"tag":"polyline","attr":{"points":"19 9 22 12 19 15"}},{"tag":"line","attr":{"x1":"2","y1":"12","x2":"22","y2":"12"}},{"tag":"line","attr":{"x1":"12","y1":"2","x2":"12","y2":"22"}}]})(props);
};
FiMove.displayName = "FiMove";
var FiMusic = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M9 18V5l12-2v13"}},{"tag":"circle","attr":{"cx":"6","cy":"18","r":"3"}},{"tag":"circle","attr":{"cx":"18","cy":"16","r":"3"}}]})(props);
};
FiMusic.displayName = "FiMusic";
var FiNavigation2 = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polygon","attr":{"points":"12 2 19 21 12 17 5 21 12 2"}}]})(props);
};
FiNavigation2.displayName = "FiNavigation2";
var FiNavigation = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polygon","attr":{"points":"3 11 22 2 13 21 11 13 3 11"}}]})(props);
};
FiNavigation.displayName = "FiNavigation";
var FiOctagon = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polygon","attr":{"points":"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"}}]})(props);
};
FiOctagon.displayName = "FiOctagon";
var FiPackage = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"16.5","y1":"9.4","x2":"7.5","y2":"4.21"}},{"tag":"path","attr":{"d":"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}},{"tag":"polyline","attr":{"points":"3.27 6.96 12 12.01 20.73 6.96"}},{"tag":"line","attr":{"x1":"12","y1":"22.08","x2":"12","y2":"12"}}]})(props);
};
FiPackage.displayName = "FiPackage";
var FiPaperclip = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"}}]})(props);
};
FiPaperclip.displayName = "FiPaperclip";
var FiPauseCircle = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"10"}},{"tag":"line","attr":{"x1":"10","y1":"15","x2":"10","y2":"9"}},{"tag":"line","attr":{"x1":"14","y1":"15","x2":"14","y2":"9"}}]})(props);
};
FiPauseCircle.displayName = "FiPauseCircle";
var FiPause = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"x":"6","y":"4","width":"4","height":"16"}},{"tag":"rect","attr":{"x":"14","y":"4","width":"4","height":"16"}}]})(props);
};
FiPause.displayName = "FiPause";
var FiPenTool = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M12 19l7-7 3 3-7 7-3-3z"}},{"tag":"path","attr":{"d":"M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"}},{"tag":"path","attr":{"d":"M2 2l7.586 7.586"}},{"tag":"circle","attr":{"cx":"11","cy":"11","r":"2"}}]})(props);
};
FiPenTool.displayName = "FiPenTool";
var FiPercent = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"19","y1":"5","x2":"5","y2":"19"}},{"tag":"circle","attr":{"cx":"6.5","cy":"6.5","r":"2.5"}},{"tag":"circle","attr":{"cx":"17.5","cy":"17.5","r":"2.5"}}]})(props);
};
FiPercent.displayName = "FiPercent";
var FiPhoneCall = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}}]})(props);
};
FiPhoneCall.displayName = "FiPhoneCall";
var FiPhoneForwarded = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"19 1 23 5 19 9"}},{"tag":"line","attr":{"x1":"15","y1":"5","x2":"23","y2":"5"}},{"tag":"path","attr":{"d":"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}}]})(props);
};
FiPhoneForwarded.displayName = "FiPhoneForwarded";
var FiPhoneIncoming = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"16 2 16 8 22 8"}},{"tag":"line","attr":{"x1":"23","y1":"1","x2":"16","y2":"8"}},{"tag":"path","attr":{"d":"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}}]})(props);
};
FiPhoneIncoming.displayName = "FiPhoneIncoming";
var FiPhoneMissed = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"23","y1":"1","x2":"17","y2":"7"}},{"tag":"line","attr":{"x1":"17","y1":"1","x2":"23","y2":"7"}},{"tag":"path","attr":{"d":"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}}]})(props);
};
FiPhoneMissed.displayName = "FiPhoneMissed";
var FiPhoneOff = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"}},{"tag":"line","attr":{"x1":"23","y1":"1","x2":"1","y2":"23"}}]})(props);
};
FiPhoneOff.displayName = "FiPhoneOff";
var FiPhoneOutgoing = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"23 7 23 1 17 1"}},{"tag":"line","attr":{"x1":"16","y1":"8","x2":"23","y2":"1"}},{"tag":"path","attr":{"d":"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}}]})(props);
};
FiPhoneOutgoing.displayName = "FiPhoneOutgoing";
var FiPhone = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}}]})(props);
};
FiPhone.displayName = "FiPhone";
var FiPieChart = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M21.21 15.89A10 10 0 1 1 8 2.83"}},{"tag":"path","attr":{"d":"M22 12A10 10 0 0 0 12 2v10z"}}]})(props);
};
FiPieChart.displayName = "FiPieChart";
var FiPlayCircle = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"10"}},{"tag":"polygon","attr":{"points":"10 8 16 12 10 16 10 8"}}]})(props);
};
FiPlayCircle.displayName = "FiPlayCircle";
var FiPlay = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polygon","attr":{"points":"5 3 19 12 5 21 5 3"}}]})(props);
};
FiPlay.displayName = "FiPlay";
var FiPlusCircle = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"10"}},{"tag":"line","attr":{"x1":"12","y1":"8","x2":"12","y2":"16"}},{"tag":"line","attr":{"x1":"8","y1":"12","x2":"16","y2":"12"}}]})(props);
};
FiPlusCircle.displayName = "FiPlusCircle";
var FiPlusSquare = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"x":"3","y":"3","width":"18","height":"18","rx":"2","ry":"2"}},{"tag":"line","attr":{"x1":"12","y1":"8","x2":"12","y2":"16"}},{"tag":"line","attr":{"x1":"8","y1":"12","x2":"16","y2":"12"}}]})(props);
};
FiPlusSquare.displayName = "FiPlusSquare";
var FiPlus = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"12","y1":"5","x2":"12","y2":"19"}},{"tag":"line","attr":{"x1":"5","y1":"12","x2":"19","y2":"12"}}]})(props);
};
FiPlus.displayName = "FiPlus";
var FiPocket = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"}},{"tag":"polyline","attr":{"points":"8 10 12 14 16 10"}}]})(props);
};
FiPocket.displayName = "FiPocket";
var FiPower = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M18.36 6.64a9 9 0 1 1-12.73 0"}},{"tag":"line","attr":{"x1":"12","y1":"2","x2":"12","y2":"12"}}]})(props);
};
FiPower.displayName = "FiPower";
var FiPrinter = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"6 9 6 2 18 2 18 9"}},{"tag":"path","attr":{"d":"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"}},{"tag":"rect","attr":{"x":"6","y":"14","width":"12","height":"8"}}]})(props);
};
FiPrinter.displayName = "FiPrinter";
var FiRadio = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"2"}},{"tag":"path","attr":{"d":"M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"}}]})(props);
};
FiRadio.displayName = "FiRadio";
var FiRefreshCcw = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"1 4 1 10 7 10"}},{"tag":"polyline","attr":{"points":"23 20 23 14 17 14"}},{"tag":"path","attr":{"d":"M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"}}]})(props);
};
FiRefreshCcw.displayName = "FiRefreshCcw";
var FiRefreshCw = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"23 4 23 10 17 10"}},{"tag":"polyline","attr":{"points":"1 20 1 14 7 14"}},{"tag":"path","attr":{"d":"M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"}}]})(props);
};
FiRefreshCw.displayName = "FiRefreshCw";
var FiRepeat = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"17 1 21 5 17 9"}},{"tag":"path","attr":{"d":"M3 11V9a4 4 0 0 1 4-4h14"}},{"tag":"polyline","attr":{"points":"7 23 3 19 7 15"}},{"tag":"path","attr":{"d":"M21 13v2a4 4 0 0 1-4 4H3"}}]})(props);
};
FiRepeat.displayName = "FiRepeat";
var FiRewind = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polygon","attr":{"points":"11 19 2 12 11 5 11 19"}},{"tag":"polygon","attr":{"points":"22 19 13 12 22 5 22 19"}}]})(props);
};
FiRewind.displayName = "FiRewind";
var FiRotateCcw = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"1 4 1 10 7 10"}},{"tag":"path","attr":{"d":"M3.51 15a9 9 0 1 0 2.13-9.36L1 10"}}]})(props);
};
FiRotateCcw.displayName = "FiRotateCcw";
var FiRotateCw = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"23 4 23 10 17 10"}},{"tag":"path","attr":{"d":"M20.49 15a9 9 0 1 1-2.12-9.36L23 10"}}]})(props);
};
FiRotateCw.displayName = "FiRotateCw";
var FiRss = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M4 11a9 9 0 0 1 9 9"}},{"tag":"path","attr":{"d":"M4 4a16 16 0 0 1 16 16"}},{"tag":"circle","attr":{"cx":"5","cy":"19","r":"1"}}]})(props);
};
FiRss.displayName = "FiRss";
var FiSave = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"}},{"tag":"polyline","attr":{"points":"17 21 17 13 7 13 7 21"}},{"tag":"polyline","attr":{"points":"7 3 7 8 15 8"}}]})(props);
};
FiSave.displayName = "FiSave";
var FiScissors = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"6","cy":"6","r":"3"}},{"tag":"circle","attr":{"cx":"6","cy":"18","r":"3"}},{"tag":"line","attr":{"x1":"20","y1":"4","x2":"8.12","y2":"15.88"}},{"tag":"line","attr":{"x1":"14.47","y1":"14.48","x2":"20","y2":"20"}},{"tag":"line","attr":{"x1":"8.12","y1":"8.12","x2":"12","y2":"12"}}]})(props);
};
FiScissors.displayName = "FiScissors";
var FiSearch = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"11","cy":"11","r":"8"}},{"tag":"line","attr":{"x1":"21","y1":"21","x2":"16.65","y2":"16.65"}}]})(props);
};
FiSearch.displayName = "FiSearch";
var FiSend = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"22","y1":"2","x2":"11","y2":"13"}},{"tag":"polygon","attr":{"points":"22 2 15 22 11 13 2 9 22 2"}}]})(props);
};
FiSend.displayName = "FiSend";
var FiServer = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"x":"2","y":"2","width":"20","height":"8","rx":"2","ry":"2"}},{"tag":"rect","attr":{"x":"2","y":"14","width":"20","height":"8","rx":"2","ry":"2"}},{"tag":"line","attr":{"x1":"6","y1":"6","x2":"6","y2":"6"}},{"tag":"line","attr":{"x1":"6","y1":"18","x2":"6","y2":"18"}}]})(props);
};
FiServer.displayName = "FiServer";
var FiSettings = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"3"}},{"tag":"path","attr":{"d":"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"}}]})(props);
};
FiSettings.displayName = "FiSettings";
var FiShare2 = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"18","cy":"5","r":"3"}},{"tag":"circle","attr":{"cx":"6","cy":"12","r":"3"}},{"tag":"circle","attr":{"cx":"18","cy":"19","r":"3"}},{"tag":"line","attr":{"x1":"8.59","y1":"13.51","x2":"15.42","y2":"17.49"}},{"tag":"line","attr":{"x1":"15.41","y1":"6.51","x2":"8.59","y2":"10.49"}}]})(props);
};
FiShare2.displayName = "FiShare2";
var FiShare = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"}},{"tag":"polyline","attr":{"points":"16 6 12 2 8 6"}},{"tag":"line","attr":{"x1":"12","y1":"2","x2":"12","y2":"15"}}]})(props);
};
FiShare.displayName = "FiShare";
var FiShieldOff = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18"}},{"tag":"path","attr":{"d":"M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38"}},{"tag":"line","attr":{"x1":"1","y1":"1","x2":"23","y2":"23"}}]})(props);
};
FiShieldOff.displayName = "FiShieldOff";
var FiShield = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"}}]})(props);
};
FiShield.displayName = "FiShield";
var FiShoppingBag = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"}},{"tag":"line","attr":{"x1":"3","y1":"6","x2":"21","y2":"6"}},{"tag":"path","attr":{"d":"M16 10a4 4 0 0 1-8 0"}}]})(props);
};
FiShoppingBag.displayName = "FiShoppingBag";
var FiShoppingCart = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"9","cy":"21","r":"1"}},{"tag":"circle","attr":{"cx":"20","cy":"21","r":"1"}},{"tag":"path","attr":{"d":"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"}}]})(props);
};
FiShoppingCart.displayName = "FiShoppingCart";
var FiShuffle = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"16 3 21 3 21 8"}},{"tag":"line","attr":{"x1":"4","y1":"20","x2":"21","y2":"3"}},{"tag":"polyline","attr":{"points":"21 16 21 21 16 21"}},{"tag":"line","attr":{"x1":"15","y1":"15","x2":"21","y2":"21"}},{"tag":"line","attr":{"x1":"4","y1":"4","x2":"9","y2":"9"}}]})(props);
};
FiShuffle.displayName = "FiShuffle";
var FiSidebar = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"x":"3","y":"3","width":"18","height":"18","rx":"2","ry":"2"}},{"tag":"line","attr":{"x1":"9","y1":"3","x2":"9","y2":"21"}}]})(props);
};
FiSidebar.displayName = "FiSidebar";
var FiSkipBack = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polygon","attr":{"points":"19 20 9 12 19 4 19 20"}},{"tag":"line","attr":{"x1":"5","y1":"19","x2":"5","y2":"5"}}]})(props);
};
FiSkipBack.displayName = "FiSkipBack";
var FiSkipForward = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polygon","attr":{"points":"5 4 15 12 5 20 5 4"}},{"tag":"line","attr":{"x1":"19","y1":"5","x2":"19","y2":"19"}}]})(props);
};
FiSkipForward.displayName = "FiSkipForward";
var FiSlack = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"}},{"tag":"path","attr":{"d":"M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"}},{"tag":"path","attr":{"d":"M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"}},{"tag":"path","attr":{"d":"M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"}},{"tag":"path","attr":{"d":"M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"}},{"tag":"path","attr":{"d":"M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"}},{"tag":"path","attr":{"d":"M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"}},{"tag":"path","attr":{"d":"M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"}}]})(props);
};
FiSlack.displayName = "FiSlack";
var FiSlash = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"10"}},{"tag":"line","attr":{"x1":"4.93","y1":"4.93","x2":"19.07","y2":"19.07"}}]})(props);
};
FiSlash.displayName = "FiSlash";
var FiSliders = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"4","y1":"21","x2":"4","y2":"14"}},{"tag":"line","attr":{"x1":"4","y1":"10","x2":"4","y2":"3"}},{"tag":"line","attr":{"x1":"12","y1":"21","x2":"12","y2":"12"}},{"tag":"line","attr":{"x1":"12","y1":"8","x2":"12","y2":"3"}},{"tag":"line","attr":{"x1":"20","y1":"21","x2":"20","y2":"16"}},{"tag":"line","attr":{"x1":"20","y1":"12","x2":"20","y2":"3"}},{"tag":"line","attr":{"x1":"1","y1":"14","x2":"7","y2":"14"}},{"tag":"line","attr":{"x1":"9","y1":"8","x2":"15","y2":"8"}},{"tag":"line","attr":{"x1":"17","y1":"16","x2":"23","y2":"16"}}]})(props);
};
FiSliders.displayName = "FiSliders";
var FiSmartphone = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"x":"5","y":"2","width":"14","height":"20","rx":"2","ry":"2"}},{"tag":"line","attr":{"x1":"12","y1":"18","x2":"12","y2":"18"}}]})(props);
};
FiSmartphone.displayName = "FiSmartphone";
var FiSmile = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"10"}},{"tag":"path","attr":{"d":"M8 14s1.5 2 4 2 4-2 4-2"}},{"tag":"line","attr":{"x1":"9","y1":"9","x2":"9.01","y2":"9"}},{"tag":"line","attr":{"x1":"15","y1":"9","x2":"15.01","y2":"9"}}]})(props);
};
FiSmile.displayName = "FiSmile";
var FiSpeaker = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"x":"4","y":"2","width":"16","height":"20","rx":"2","ry":"2"}},{"tag":"circle","attr":{"cx":"12","cy":"14","r":"4"}},{"tag":"line","attr":{"x1":"12","y1":"6","x2":"12","y2":"6"}}]})(props);
};
FiSpeaker.displayName = "FiSpeaker";
var FiSquare = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"x":"3","y":"3","width":"18","height":"18","rx":"2","ry":"2"}}]})(props);
};
FiSquare.displayName = "FiSquare";
var FiStar = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polygon","attr":{"points":"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"}}]})(props);
};
FiStar.displayName = "FiStar";
var FiStopCircle = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"10"}},{"tag":"rect","attr":{"x":"9","y":"9","width":"6","height":"6"}}]})(props);
};
FiStopCircle.displayName = "FiStopCircle";
var FiSun = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"5"}},{"tag":"line","attr":{"x1":"12","y1":"1","x2":"12","y2":"3"}},{"tag":"line","attr":{"x1":"12","y1":"21","x2":"12","y2":"23"}},{"tag":"line","attr":{"x1":"4.22","y1":"4.22","x2":"5.64","y2":"5.64"}},{"tag":"line","attr":{"x1":"18.36","y1":"18.36","x2":"19.78","y2":"19.78"}},{"tag":"line","attr":{"x1":"1","y1":"12","x2":"3","y2":"12"}},{"tag":"line","attr":{"x1":"21","y1":"12","x2":"23","y2":"12"}},{"tag":"line","attr":{"x1":"4.22","y1":"19.78","x2":"5.64","y2":"18.36"}},{"tag":"line","attr":{"x1":"18.36","y1":"5.64","x2":"19.78","y2":"4.22"}}]})(props);
};
FiSun.displayName = "FiSun";
var FiSunrise = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M17 18a5 5 0 0 0-10 0"}},{"tag":"line","attr":{"x1":"12","y1":"2","x2":"12","y2":"9"}},{"tag":"line","attr":{"x1":"4.22","y1":"10.22","x2":"5.64","y2":"11.64"}},{"tag":"line","attr":{"x1":"1","y1":"18","x2":"3","y2":"18"}},{"tag":"line","attr":{"x1":"21","y1":"18","x2":"23","y2":"18"}},{"tag":"line","attr":{"x1":"18.36","y1":"11.64","x2":"19.78","y2":"10.22"}},{"tag":"line","attr":{"x1":"23","y1":"22","x2":"1","y2":"22"}},{"tag":"polyline","attr":{"points":"8 6 12 2 16 6"}}]})(props);
};
FiSunrise.displayName = "FiSunrise";
var FiSunset = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M17 18a5 5 0 0 0-10 0"}},{"tag":"line","attr":{"x1":"12","y1":"9","x2":"12","y2":"2"}},{"tag":"line","attr":{"x1":"4.22","y1":"10.22","x2":"5.64","y2":"11.64"}},{"tag":"line","attr":{"x1":"1","y1":"18","x2":"3","y2":"18"}},{"tag":"line","attr":{"x1":"21","y1":"18","x2":"23","y2":"18"}},{"tag":"line","attr":{"x1":"18.36","y1":"11.64","x2":"19.78","y2":"10.22"}},{"tag":"line","attr":{"x1":"23","y1":"22","x2":"1","y2":"22"}},{"tag":"polyline","attr":{"points":"16 5 12 9 8 5"}}]})(props);
};
FiSunset.displayName = "FiSunset";
var FiTablet = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"x":"4","y":"2","width":"16","height":"20","rx":"2","ry":"2","transform":"rotate(180 12 12)"}},{"tag":"line","attr":{"x1":"12","y1":"18","x2":"12","y2":"18"}}]})(props);
};
FiTablet.displayName = "FiTablet";
var FiTag = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"}},{"tag":"line","attr":{"x1":"7","y1":"7","x2":"7","y2":"7"}}]})(props);
};
FiTag.displayName = "FiTag";
var FiTarget = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"10"}},{"tag":"circle","attr":{"cx":"12","cy":"12","r":"6"}},{"tag":"circle","attr":{"cx":"12","cy":"12","r":"2"}}]})(props);
};
FiTarget.displayName = "FiTarget";
var FiTerminal = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"4 17 10 11 4 5"}},{"tag":"line","attr":{"x1":"12","y1":"19","x2":"20","y2":"19"}}]})(props);
};
FiTerminal.displayName = "FiTerminal";
var FiThermometer = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"}}]})(props);
};
FiThermometer.displayName = "FiThermometer";
var FiThumbsDown = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"}}]})(props);
};
FiThumbsDown.displayName = "FiThumbsDown";
var FiThumbsUp = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"}}]})(props);
};
FiThumbsUp.displayName = "FiThumbsUp";
var FiToggleLeft = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"x":"1","y":"5","width":"22","height":"14","rx":"7","ry":"7"}},{"tag":"circle","attr":{"cx":"8","cy":"12","r":"3"}}]})(props);
};
FiToggleLeft.displayName = "FiToggleLeft";
var FiToggleRight = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"x":"1","y":"5","width":"22","height":"14","rx":"7","ry":"7"}},{"tag":"circle","attr":{"cx":"16","cy":"12","r":"3"}}]})(props);
};
FiToggleRight.displayName = "FiToggleRight";
var FiTrash2 = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"3 6 5 6 21 6"}},{"tag":"path","attr":{"d":"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}},{"tag":"line","attr":{"x1":"10","y1":"11","x2":"10","y2":"17"}},{"tag":"line","attr":{"x1":"14","y1":"11","x2":"14","y2":"17"}}]})(props);
};
FiTrash2.displayName = "FiTrash2";
var FiTrash = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"3 6 5 6 21 6"}},{"tag":"path","attr":{"d":"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}}]})(props);
};
FiTrash.displayName = "FiTrash";
var FiTrello = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"x":"3","y":"3","width":"18","height":"18","rx":"2","ry":"2"}},{"tag":"rect","attr":{"x":"7","y":"7","width":"3","height":"9"}},{"tag":"rect","attr":{"x":"14","y":"7","width":"3","height":"5"}}]})(props);
};
FiTrello.displayName = "FiTrello";
var FiTrendingDown = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"23 18 13.5 8.5 8.5 13.5 1 6"}},{"tag":"polyline","attr":{"points":"17 18 23 18 23 12"}}]})(props);
};
FiTrendingDown.displayName = "FiTrendingDown";
var FiTrendingUp = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"23 6 13.5 15.5 8.5 10.5 1 18"}},{"tag":"polyline","attr":{"points":"17 6 23 6 23 12"}}]})(props);
};
FiTrendingUp.displayName = "FiTrendingUp";
var FiTriangle = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"}}]})(props);
};
FiTriangle.displayName = "FiTriangle";
var FiTruck = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"x":"1","y":"3","width":"15","height":"13"}},{"tag":"polygon","attr":{"points":"16 8 20 8 23 11 23 16 16 16 16 8"}},{"tag":"circle","attr":{"cx":"5.5","cy":"18.5","r":"2.5"}},{"tag":"circle","attr":{"cx":"18.5","cy":"18.5","r":"2.5"}}]})(props);
};
FiTruck.displayName = "FiTruck";
var FiTv = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"x":"2","y":"7","width":"20","height":"15","rx":"2","ry":"2"}},{"tag":"polyline","attr":{"points":"17 2 12 7 7 2"}}]})(props);
};
FiTv.displayName = "FiTv";
var FiTwitter = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"}}]})(props);
};
FiTwitter.displayName = "FiTwitter";
var FiType = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"4 7 4 4 20 4 20 7"}},{"tag":"line","attr":{"x1":"9","y1":"20","x2":"15","y2":"20"}},{"tag":"line","attr":{"x1":"12","y1":"4","x2":"12","y2":"20"}}]})(props);
};
FiType.displayName = "FiType";
var FiUmbrella = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"}}]})(props);
};
FiUmbrella.displayName = "FiUmbrella";
var FiUnderline = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"}},{"tag":"line","attr":{"x1":"4","y1":"21","x2":"20","y2":"21"}}]})(props);
};
FiUnderline.displayName = "FiUnderline";
var FiUnlock = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"x":"3","y":"11","width":"18","height":"11","rx":"2","ry":"2"}},{"tag":"path","attr":{"d":"M7 11V7a5 5 0 0 1 9.9-1"}}]})(props);
};
FiUnlock.displayName = "FiUnlock";
var FiUploadCloud = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"16 16 12 12 8 16"}},{"tag":"line","attr":{"x1":"12","y1":"12","x2":"12","y2":"21"}},{"tag":"path","attr":{"d":"M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"}},{"tag":"polyline","attr":{"points":"16 16 12 12 8 16"}}]})(props);
};
FiUploadCloud.displayName = "FiUploadCloud";
var FiUpload = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}},{"tag":"polyline","attr":{"points":"17 8 12 3 7 8"}},{"tag":"line","attr":{"x1":"12","y1":"3","x2":"12","y2":"15"}}]})(props);
};
FiUpload.displayName = "FiUpload";
var FiUserCheck = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}},{"tag":"circle","attr":{"cx":"8.5","cy":"7","r":"4"}},{"tag":"polyline","attr":{"points":"17 11 19 13 23 9"}}]})(props);
};
FiUserCheck.displayName = "FiUserCheck";
var FiUserMinus = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}},{"tag":"circle","attr":{"cx":"8.5","cy":"7","r":"4"}},{"tag":"line","attr":{"x1":"23","y1":"11","x2":"17","y2":"11"}}]})(props);
};
FiUserMinus.displayName = "FiUserMinus";
var FiUserPlus = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}},{"tag":"circle","attr":{"cx":"8.5","cy":"7","r":"4"}},{"tag":"line","attr":{"x1":"20","y1":"8","x2":"20","y2":"14"}},{"tag":"line","attr":{"x1":"23","y1":"11","x2":"17","y2":"11"}}]})(props);
};
FiUserPlus.displayName = "FiUserPlus";
var FiUserX = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}},{"tag":"circle","attr":{"cx":"8.5","cy":"7","r":"4"}},{"tag":"line","attr":{"x1":"18","y1":"8","x2":"23","y2":"13"}},{"tag":"line","attr":{"x1":"23","y1":"8","x2":"18","y2":"13"}}]})(props);
};
FiUserX.displayName = "FiUserX";
var FiUser = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}},{"tag":"circle","attr":{"cx":"12","cy":"7","r":"4"}}]})(props);
};
FiUser.displayName = "FiUser";
var FiUsers = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}},{"tag":"circle","attr":{"cx":"9","cy":"7","r":"4"}},{"tag":"path","attr":{"d":"M23 21v-2a4 4 0 0 0-3-3.87"}},{"tag":"path","attr":{"d":"M16 3.13a4 4 0 0 1 0 7.75"}}]})(props);
};
FiUsers.displayName = "FiUsers";
var FiVideoOff = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"}},{"tag":"line","attr":{"x1":"1","y1":"1","x2":"23","y2":"23"}}]})(props);
};
FiVideoOff.displayName = "FiVideoOff";
var FiVideo = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polygon","attr":{"points":"23 7 16 12 23 17 23 7"}},{"tag":"rect","attr":{"x":"1","y":"5","width":"15","height":"14","rx":"2","ry":"2"}}]})(props);
};
FiVideo.displayName = "FiVideo";
var FiVoicemail = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"5.5","cy":"11.5","r":"4.5"}},{"tag":"circle","attr":{"cx":"18.5","cy":"11.5","r":"4.5"}},{"tag":"line","attr":{"x1":"5.5","y1":"16","x2":"18.5","y2":"16"}}]})(props);
};
FiVoicemail.displayName = "FiVoicemail";
var FiVolume1 = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polygon","attr":{"points":"11 5 6 9 2 9 2 15 6 15 11 19 11 5"}},{"tag":"path","attr":{"d":"M15.54 8.46a5 5 0 0 1 0 7.07"}}]})(props);
};
FiVolume1.displayName = "FiVolume1";
var FiVolume2 = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polygon","attr":{"points":"11 5 6 9 2 9 2 15 6 15 11 19 11 5"}},{"tag":"path","attr":{"d":"M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"}}]})(props);
};
FiVolume2.displayName = "FiVolume2";
var FiVolumeX = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polygon","attr":{"points":"11 5 6 9 2 9 2 15 6 15 11 19 11 5"}},{"tag":"line","attr":{"x1":"23","y1":"9","x2":"17","y2":"15"}},{"tag":"line","attr":{"x1":"17","y1":"9","x2":"23","y2":"15"}}]})(props);
};
FiVolumeX.displayName = "FiVolumeX";
var FiVolume = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polygon","attr":{"points":"11 5 6 9 2 9 2 15 6 15 11 19 11 5"}}]})(props);
};
FiVolume.displayName = "FiVolume";
var FiWatch = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"7"}},{"tag":"polyline","attr":{"points":"12 9 12 12 13.5 13.5"}},{"tag":"path","attr":{"d":"M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"}}]})(props);
};
FiWatch.displayName = "FiWatch";
var FiWifiOff = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"1","y1":"1","x2":"23","y2":"23"}},{"tag":"path","attr":{"d":"M16.72 11.06A10.94 10.94 0 0 1 19 12.55"}},{"tag":"path","attr":{"d":"M5 12.55a10.94 10.94 0 0 1 5.17-2.39"}},{"tag":"path","attr":{"d":"M10.71 5.05A16 16 0 0 1 22.58 9"}},{"tag":"path","attr":{"d":"M1.42 9a15.91 15.91 0 0 1 4.7-2.88"}},{"tag":"path","attr":{"d":"M8.53 16.11a6 6 0 0 1 6.95 0"}},{"tag":"line","attr":{"x1":"12","y1":"20","x2":"12","y2":"20"}}]})(props);
};
FiWifiOff.displayName = "FiWifiOff";
var FiWifi = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M5 12.55a11 11 0 0 1 14.08 0"}},{"tag":"path","attr":{"d":"M1.42 9a16 16 0 0 1 21.16 0"}},{"tag":"path","attr":{"d":"M8.53 16.11a6 6 0 0 1 6.95 0"}},{"tag":"line","attr":{"x1":"12","y1":"20","x2":"12","y2":"20"}}]})(props);
};
FiWifi.displayName = "FiWifi";
var FiWind = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"}}]})(props);
};
FiWind.displayName = "FiWind";
var FiXCircle = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"10"}},{"tag":"line","attr":{"x1":"15","y1":"9","x2":"9","y2":"15"}},{"tag":"line","attr":{"x1":"9","y1":"9","x2":"15","y2":"15"}}]})(props);
};
FiXCircle.displayName = "FiXCircle";
var FiXOctagon = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polygon","attr":{"points":"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"}},{"tag":"line","attr":{"x1":"15","y1":"9","x2":"9","y2":"15"}},{"tag":"line","attr":{"x1":"9","y1":"9","x2":"15","y2":"15"}}]})(props);
};
FiXOctagon.displayName = "FiXOctagon";
var FiXSquare = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"x":"3","y":"3","width":"18","height":"18","rx":"2","ry":"2"}},{"tag":"line","attr":{"x1":"9","y1":"9","x2":"15","y2":"15"}},{"tag":"line","attr":{"x1":"15","y1":"9","x2":"9","y2":"15"}}]})(props);
};
FiXSquare.displayName = "FiXSquare";
var FiX = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"18","y1":"6","x2":"6","y2":"18"}},{"tag":"line","attr":{"x1":"6","y1":"6","x2":"18","y2":"18"}}]})(props);
};
FiX.displayName = "FiX";
var FiYoutube = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"}},{"tag":"polygon","attr":{"points":"9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"}}]})(props);
};
FiYoutube.displayName = "FiYoutube";
var FiZapOff = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"12.41 6.75 13 2 10.57 4.92"}},{"tag":"polyline","attr":{"points":"18.57 12.91 21 10 15.66 10"}},{"tag":"polyline","attr":{"points":"8 8 3 14 12 14 11 22 16 16"}},{"tag":"line","attr":{"x1":"1","y1":"1","x2":"23","y2":"23"}}]})(props);
};
FiZapOff.displayName = "FiZapOff";
var FiZap = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polygon","attr":{"points":"13 2 3 14 12 14 11 22 21 10 12 10 13 2"}}]})(props);
};
FiZap.displayName = "FiZap";
var FiZoomIn = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"11","cy":"11","r":"8"}},{"tag":"line","attr":{"x1":"21","y1":"21","x2":"16.65","y2":"16.65"}},{"tag":"line","attr":{"x1":"11","y1":"8","x2":"11","y2":"14"}},{"tag":"line","attr":{"x1":"8","y1":"11","x2":"14","y2":"11"}}]})(props);
};
FiZoomIn.displayName = "FiZoomIn";
var FiZoomOut = function (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"11","cy":"11","r":"8"}},{"tag":"line","attr":{"x1":"21","y1":"21","x2":"16.65","y2":"16.65"}},{"tag":"line","attr":{"x1":"8","y1":"11","x2":"14","y2":"11"}}]})(props);
};
FiZoomOut.displayName = "FiZoomOut";


/***/ }),

/***/ "./node_modules/react-icons/lib/esm/iconBase.js":
/*!******************************************************!*\
  !*** ./node_modules/react-icons/lib/esm/iconBase.js ***!
  \******************************************************/
/*! exports provided: GenIcon, IconBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenIcon", function() { return GenIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconBase", function() { return IconBase; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _iconContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iconContext */ "./node_modules/react-icons/lib/esm/iconContext.js");
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
  return t;
};




function Tree2Element(tree) {
  return tree && tree.map(function (node, i) {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](node.tag, __assign({
      key: i
    }, node.attr), Tree2Element(node.child));
  });
}

function GenIcon(data) {
  return function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](IconBase, __assign({
      attr: __assign({}, data.attr)
    }, props), Tree2Element(data.child));
  };
}
function IconBase(props) {
  var elem = function (conf) {
    var computedSize = props.size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + ' ' : '') + props.className;

    var attr = props.attr,
        title = props.title,
        svgProps = __rest(props, ["attr", "title"]);

    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", __assign({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className: className,
      style: __assign({
        color: props.color || conf.color
      }, conf.style, props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", null, title), props.children);
  };

  return _iconContext__WEBPACK_IMPORTED_MODULE_1__["IconContext"] !== undefined ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_iconContext__WEBPACK_IMPORTED_MODULE_1__["IconContext"].Consumer, null, function (conf) {
    return elem(conf);
  }) : elem(_iconContext__WEBPACK_IMPORTED_MODULE_1__["DefaultContext"]);
}

/***/ }),

/***/ "./node_modules/react-icons/lib/esm/iconContext.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-icons/lib/esm/iconContext.js ***!
  \*********************************************************/
/*! exports provided: DefaultContext, IconContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultContext", function() { return DefaultContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconContext", function() { return IconContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var DefaultContext = {
  color: undefined,
  size: undefined,
  className: undefined,
  style: undefined,
  attr: undefined
};
var IconContext = react__WEBPACK_IMPORTED_MODULE_0__["createContext"] && react__WEBPACK_IMPORTED_MODULE_0__["createContext"](DefaultContext);

/***/ }),

/***/ "./node_modules/react-icons/lib/esm/iconsManifest.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-icons/lib/esm/iconsManifest.js ***!
  \***********************************************************/
/*! exports provided: IconsManifest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsManifest", function() { return IconsManifest; });
var IconsManifest = [{
  "id": "fa",
  "name": "Font Awesome",
  "projectUrl": "https://fontawesome.com/",
  "license": "CC BY 4.0 License",
  "licenseUrl": "https://creativecommons.org/licenses/by/4.0/"
}, {
  "id": "io",
  "name": "Ionicons",
  "projectUrl": "https://ionicons.com/",
  "license": "MIT",
  "licenseUrl": "https://github.com/ionic-team/ionicons/blob/master/LICENSE"
}, {
  "id": "md",
  "name": "Material Design icons",
  "projectUrl": "http://google.github.io/material-design-icons/",
  "license": "Apache License Version 2.0",
  "licenseUrl": "https://github.com/google/material-design-icons/blob/master/LICENSE"
}, {
  "id": "ti",
  "name": "Typicons",
  "projectUrl": "http://s-ings.com/typicons/",
  "license": "CC BY-SA 3.0",
  "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/"
}, {
  "id": "go",
  "name": "Github Octicons icons",
  "projectUrl": "https://octicons.github.com/",
  "license": "MIT",
  "licenseUrl": "https://github.com/primer/octicons/blob/master/LICENSE"
}, {
  "id": "fi",
  "name": "Feather",
  "projectUrl": "https://feathericons.com/",
  "license": "MIT",
  "licenseUrl": "https://github.com/feathericons/feather/blob/master/LICENSE"
}, {
  "id": "gi",
  "name": "Game Icons",
  "projectUrl": "https://game-icons.net/",
  "license": "CC BY 3.0",
  "licenseUrl": "https://creativecommons.org/licenses/by/3.0/"
}, {
  "id": "wi",
  "name": "Weather Icons",
  "projectUrl": "https://erikflowers.github.io/weather-icons/",
  "license": "SIL OFL 1.1",
  "licenseUrl": "http://scripts.sil.org/OFL"
}, {
  "id": "di",
  "name": "Devicons",
  "projectUrl": "https://vorillaz.github.io/devicons/",
  "license": "MIT",
  "licenseUrl": "https://opensource.org/licenses/MIT"
}, {
  "id": "ai",
  "name": "Ant Design Icons",
  "projectUrl": "https://github.com/ant-design/ant-design-icons",
  "license": "MIT",
  "licenseUrl": "https://opensource.org/licenses/MIT"
}, {
  "id": "bs",
  "name": "Bootstrap Icons",
  "projectUrl": "https://github.com/twbs/icons",
  "license": "MIT",
  "licenseUrl": "https://opensource.org/licenses/MIT"
}, {
  "id": "ri",
  "name": "Remix Icon",
  "projectUrl": "https://github.com/Remix-Design/RemixIcon",
  "license": "Apache License Version 2.0",
  "licenseUrl": "http://www.apache.org/licenses/"
}, {
  "id": "fc",
  "name": "Flat Color Icons",
  "projectUrl": "https://github.com/icons8/flat-color-icons",
  "license": "MIT",
  "licenseUrl": "https://opensource.org/licenses/MIT"
}, {
  "id": "gr",
  "name": "Grommet-Icons",
  "projectUrl": "https://github.com/grommet/grommet-icons",
  "license": "Apache License Version 2.0",
  "licenseUrl": "http://www.apache.org/licenses/"
}];

/***/ }),

/***/ "./node_modules/react-icons/lib/esm/index.js":
/*!***************************************************!*\
  !*** ./node_modules/react-icons/lib/esm/index.js ***!
  \***************************************************/
/*! exports provided: IconsManifest, GenIcon, IconBase, DefaultContext, IconContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _iconsManifest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./iconsManifest */ "./node_modules/react-icons/lib/esm/iconsManifest.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconsManifest", function() { return _iconsManifest__WEBPACK_IMPORTED_MODULE_0__["IconsManifest"]; });

/* harmony import */ var _iconBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iconBase */ "./node_modules/react-icons/lib/esm/iconBase.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GenIcon", function() { return _iconBase__WEBPACK_IMPORTED_MODULE_1__["GenIcon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconBase", function() { return _iconBase__WEBPACK_IMPORTED_MODULE_1__["IconBase"]; });

/* harmony import */ var _iconContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./iconContext */ "./node_modules/react-icons/lib/esm/iconContext.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultContext", function() { return _iconContext__WEBPACK_IMPORTED_MODULE_2__["DefaultContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconContext", function() { return _iconContext__WEBPACK_IMPORTED_MODULE_2__["IconContext"]; });





/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.12.0
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */
var lowPriorityWarningWithoutStack = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });

    if (typeof console !== 'undefined') {
      console.warn(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarningWithoutStack = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarningWithoutStack(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(void 0, [format].concat(args));
    }
  };
}

var lowPriorityWarningWithoutStack$1 = lowPriorityWarningWithoutStack;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarningWithoutStack$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-remove-scroll-bar/dist/es2015/component.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-remove-scroll-bar/dist/es2015/component.js ***!
  \***********************************************************************/
/*! exports provided: RemoveScrollBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveScrollBar", function() { return RemoveScrollBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_style_singleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-style-singleton */ "./node_modules/react-style-singleton/dist/es2015/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./node_modules/react-remove-scroll-bar/dist/es2015/utils.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./node_modules/react-remove-scroll-bar/dist/es2015/constants.js");




var Style = Object(react_style_singleton__WEBPACK_IMPORTED_MODULE_1__["styleSingleton"])();
var getStyles = function (_a, allowRelative, gapMode, important) {
    var left = _a.left, top = _a.top, right = _a.right, gap = _a.gap;
    if (gapMode === void 0) { gapMode = 'margin'; }
    return "\n  ." + _constants__WEBPACK_IMPORTED_MODULE_3__["noScrollbarsClassName"] + " {\n   overflow: hidden " + important + ";\n   padding-right: " + gap + "px " + important + ";\n  }\n  body {\n    overflow: hidden " + important + ";\n    " + [
        allowRelative && "position: relative " + important + ";",
        gapMode === 'margin' && "\n    padding-left: " + left + "px;\n    padding-top: " + top + "px;\n    padding-right: " + right + "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: " + gap + "px " + important + ";\n    ",
        gapMode === 'padding' && "padding-right: " + gap + "px " + important + ";",
    ].filter(Boolean).join('') + "\n  }\n  \n  ." + _constants__WEBPACK_IMPORTED_MODULE_3__["zeroRightClassName"] + " {\n    right: " + gap + "px " + important + ";\n  }\n  \n  ." + _constants__WEBPACK_IMPORTED_MODULE_3__["fullWidthClassName"] + " {\n    margin-right: " + gap + "px " + important + ";\n  }\n  \n  ." + _constants__WEBPACK_IMPORTED_MODULE_3__["zeroRightClassName"] + " ." + _constants__WEBPACK_IMPORTED_MODULE_3__["zeroRightClassName"] + " {\n    right: 0 " + important + ";\n  }\n  \n  ." + _constants__WEBPACK_IMPORTED_MODULE_3__["fullWidthClassName"] + " ." + _constants__WEBPACK_IMPORTED_MODULE_3__["fullWidthClassName"] + " {\n    margin-right: 0 " + important + ";\n  }\n";
};
var RemoveScrollBar = function (props) {
    var _a = react__WEBPACK_IMPORTED_MODULE_0__["useState"](Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getGapWidth"])(props.gapMode)), gap = _a[0], setGap = _a[1];
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        setGap(Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getGapWidth"])(props.gapMode));
    }, [props.gapMode]);
    var noRelative = props.noRelative, noImportant = props.noImportant, _b = props.gapMode, gapMode = _b === void 0 ? 'margin' : _b;
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Style, { styles: getStyles(gap, !noRelative, gapMode, !noImportant ? "!important" : '') });
};


/***/ }),

/***/ "./node_modules/react-remove-scroll-bar/dist/es2015/constants.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-remove-scroll-bar/dist/es2015/constants.js ***!
  \***********************************************************************/
/*! exports provided: zeroRightClassName, fullWidthClassName, noScrollbarsClassName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zeroRightClassName", function() { return zeroRightClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fullWidthClassName", function() { return fullWidthClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noScrollbarsClassName", function() { return noScrollbarsClassName; });
var zeroRightClassName = 'right-scroll-bar-position';
var fullWidthClassName = 'width-before-scroll-bar';
var noScrollbarsClassName = 'with-scroll-bars-hidden';


/***/ }),

/***/ "./node_modules/react-remove-scroll-bar/dist/es2015/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-remove-scroll-bar/dist/es2015/index.js ***!
  \*******************************************************************/
/*! exports provided: RemoveScrollBar, zeroRightClassName, fullWidthClassName, noScrollbarsClassName, getGapWidth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./node_modules/react-remove-scroll-bar/dist/es2015/component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RemoveScrollBar", function() { return _component__WEBPACK_IMPORTED_MODULE_0__["RemoveScrollBar"]; });

/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./node_modules/react-remove-scroll-bar/dist/es2015/utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getGapWidth", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["getGapWidth"]; });

/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/react-remove-scroll-bar/dist/es2015/constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zeroRightClassName", function() { return _constants__WEBPACK_IMPORTED_MODULE_2__["zeroRightClassName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fullWidthClassName", function() { return _constants__WEBPACK_IMPORTED_MODULE_2__["fullWidthClassName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noScrollbarsClassName", function() { return _constants__WEBPACK_IMPORTED_MODULE_2__["noScrollbarsClassName"]; });







/***/ }),

/***/ "./node_modules/react-remove-scroll-bar/dist/es2015/utils.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-remove-scroll-bar/dist/es2015/utils.js ***!
  \*******************************************************************/
/*! exports provided: zeroGap, getGapWidth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zeroGap", function() { return zeroGap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGapWidth", function() { return getGapWidth; });
var zeroGap = {
    left: 0,
    top: 0,
    right: 0,
    gap: 0,
};
var parse = function (x) { return parseInt(x || '', 10) || 0; };
var getOffset = function (gapMode) {
    var cs = window.getComputedStyle(document.body);
    var left = cs[gapMode === 'padding' ? 'paddingLeft' : 'marginLeft'];
    var top = cs[gapMode === 'padding' ? 'paddingTop' : 'marginTop'];
    var right = cs[gapMode === 'padding' ? 'paddingRight' : 'marginRight'];
    return [
        parse(left),
        parse(top),
        parse(right),
    ];
};
var getGapWidth = function (gapMode) {
    if (gapMode === void 0) { gapMode = 'margin'; }
    if (typeof window === 'undefined') {
        return zeroGap;
    }
    var offsets = getOffset(gapMode);
    var documentWidth = document.documentElement.clientWidth;
    var windowWidth = window.innerWidth;
    return {
        left: offsets[0],
        top: offsets[1],
        right: offsets[2],
        gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0]),
    };
};


/***/ }),

/***/ "./node_modules/react-remove-scroll/dist/es2015/Combination.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-remove-scroll/dist/es2015/Combination.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/react-remove-scroll/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UI */ "./node_modules/react-remove-scroll/dist/es2015/UI.js");
/* harmony import */ var _sidecar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidecar */ "./node_modules/react-remove-scroll/dist/es2015/sidecar.js");




var ReactRemoveScroll = react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"](function (props, ref) { return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_UI__WEBPACK_IMPORTED_MODULE_2__["RemoveScroll"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, props, { ref: ref, sideCar: _sidecar__WEBPACK_IMPORTED_MODULE_3__["default"] }))); });
ReactRemoveScroll.classNames = _UI__WEBPACK_IMPORTED_MODULE_2__["RemoveScroll"].classNames;
/* harmony default export */ __webpack_exports__["default"] = (ReactRemoveScroll);


/***/ }),

/***/ "./node_modules/react-remove-scroll/dist/es2015/SideEffect.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-remove-scroll/dist/es2015/SideEffect.js ***!
  \********************************************************************/
/*! exports provided: getTouchXY, getDeltaXY, RemoveScrollSideCar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTouchXY", function() { return getTouchXY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDeltaXY", function() { return getDeltaXY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveScrollSideCar", function() { return RemoveScrollSideCar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_remove_scroll_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-remove-scroll-bar */ "./node_modules/react-remove-scroll-bar/dist/es2015/index.js");
/* harmony import */ var react_style_singleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-style-singleton */ "./node_modules/react-style-singleton/dist/es2015/index.js");
/* harmony import */ var _handleScroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handleScroll */ "./node_modules/react-remove-scroll/dist/es2015/handleScroll.js");
/* harmony import */ var _aggresiveCapture__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./aggresiveCapture */ "./node_modules/react-remove-scroll/dist/es2015/aggresiveCapture.js");





var getTouchXY = function (event) {
    return 'changedTouches' in event
        ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY]
        : [0, 0];
};
var getDeltaXY = function (event) { return [event.deltaX, event.deltaY]; };
var extractRef = function (ref) {
    return ref && 'current' in ref ? ref.current : ref;
};
var deltaCompare = function (x, y) {
    return x[0] === y[0] && x[1] === y[1];
};
var generateStyle = function (id) { return "\n  .block-interactivity-" + id + " {pointer-events: none;}\n  .allow-interactivity-" + id + " {pointer-events: all;}\n"; };
var idCounter = 0;
var lockStack = [];
function RemoveScrollSideCar(props) {
    var shouldPreventQueue = react__WEBPACK_IMPORTED_MODULE_0__["useRef"]([]);
    var touchStartRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"]([0, 0]);
    var activeAxis = react__WEBPACK_IMPORTED_MODULE_0__["useRef"]();
    var id = react__WEBPACK_IMPORTED_MODULE_0__["useState"](idCounter++)[0];
    var Style = react__WEBPACK_IMPORTED_MODULE_0__["useState"](function () { return Object(react_style_singleton__WEBPACK_IMPORTED_MODULE_2__["styleSingleton"])(); })[0];
    var lastProps = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](props);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        lastProps.current = props;
    }, [props]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        if (props.inert) {
            document.body.classList.add("block-interactivity-" + id);
            var allow_1 = [
                props.lockRef.current
            ].concat((props.shards || []).map(extractRef)).filter(Boolean);
            allow_1.forEach(function (el) { return el.classList.add("allow-interactivity-" + id); });
            return function () {
                document.body.classList.remove("block-interactivity-" + id);
                allow_1.forEach(function (el) {
                    return el.classList.remove("allow-interactivity-" + id);
                });
            };
        }
        return;
    }, [props.inert, props.lockRef.current, props.shards]);
    var shouldCancelEvent = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](function (event, parent) {
        if ('touches' in event && event.touches.length === 2) {
            return !lastProps.current.allowPinchZoom;
        }
        var touch = getTouchXY(event);
        var touchStart = touchStartRef.current;
        var deltaX = 'deltaX' in event ? event.deltaX : touchStart[0] - touch[0];
        var deltaY = 'deltaY' in event ? event.deltaY : touchStart[1] - touch[1];
        var currentAxis;
        var target = event.target;
        var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? 'h' : 'v';
        var canBeScrolledInMainDirection = Object(_handleScroll__WEBPACK_IMPORTED_MODULE_3__["locationCouldBeScrolled"])(moveDirection, target);
        if (!canBeScrolledInMainDirection) {
            return true;
        }
        if (canBeScrolledInMainDirection) {
            currentAxis = moveDirection;
        }
        else {
            currentAxis = moveDirection === 'v' ? 'h' : 'v';
            canBeScrolledInMainDirection = Object(_handleScroll__WEBPACK_IMPORTED_MODULE_3__["locationCouldBeScrolled"])(moveDirection, target);
            // other axis might be not scrollable
        }
        if (!canBeScrolledInMainDirection) {
            return false;
        }
        if (!activeAxis.current &&
            'changedTouches' in event &&
            (deltaX || deltaY)) {
            activeAxis.current = currentAxis;
        }
        if (!currentAxis) {
            return true;
        }
        var cancelingAxis = activeAxis.current || currentAxis;
        return Object(_handleScroll__WEBPACK_IMPORTED_MODULE_3__["handleScroll"])(cancelingAxis, parent, event, cancelingAxis == 'h' ? deltaX : deltaY, true);
    }, []);
    var shouldPrevent = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](function (_event) {
        var event = _event;
        if (!lockStack.length || lockStack[lockStack.length - 1] !== Style) {
            // not the last active
            return;
        }
        var delta = 'deltaY' in event ? getDeltaXY(event) : getTouchXY(event);
        var sourceEvent = shouldPreventQueue.current.filter(function (e) {
            return e.name === event.type &&
                e.target === event.target &&
                deltaCompare(e.delta, delta);
        })[0];
        // self event, and should be canceled
        if (sourceEvent && sourceEvent.should) {
            event.preventDefault();
            return;
        }
        // outside or shard event
        if (!sourceEvent) {
            var shardNodes = (lastProps.current.shards || [])
                .map(extractRef)
                .filter(Boolean)
                .filter(function (node) { return node.contains(event.target); });
            var shouldStop = shardNodes.length > 0
                ? shouldCancelEvent(event, shardNodes[0])
                : !lastProps.current.noIsolation;
            if (shouldStop) {
                event.preventDefault();
            }
        }
    }, []);
    var shouldCancel = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](function (name, delta, target, should) {
        var event = { name: name, delta: delta, target: target, should: should };
        shouldPreventQueue.current.push(event);
        setTimeout(function () {
            shouldPreventQueue.current = shouldPreventQueue.current.filter(function (e) { return e !== event; });
        }, 1);
    }, []);
    var scrollTouchStart = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](function (event) {
        touchStartRef.current = getTouchXY(event);
        activeAxis.current = undefined;
    }, []);
    var scrollWheel = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](function (event) {
        shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
    }, []);
    var scrollTouchMove = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](function (event) {
        shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
    }, []);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        lockStack.push(Style);
        props.setCallbacks({
            onScrollCapture: scrollWheel,
            onWheelCapture: scrollWheel,
            onTouchMoveCapture: scrollTouchMove
        });
        document.addEventListener('wheel', shouldPrevent, _aggresiveCapture__WEBPACK_IMPORTED_MODULE_4__["nonPassive"]);
        document.addEventListener('touchmove', shouldPrevent, _aggresiveCapture__WEBPACK_IMPORTED_MODULE_4__["nonPassive"]);
        document.addEventListener('touchstart', scrollTouchStart, _aggresiveCapture__WEBPACK_IMPORTED_MODULE_4__["nonPassive"]);
        return function () {
            lockStack = lockStack.filter(function (inst) { return inst !== Style; });
            document.removeEventListener('wheel', shouldPrevent, _aggresiveCapture__WEBPACK_IMPORTED_MODULE_4__["nonPassive"]);
            document.removeEventListener('touchmove', shouldPrevent, _aggresiveCapture__WEBPACK_IMPORTED_MODULE_4__["nonPassive"]);
            document.removeEventListener('touchstart', scrollTouchStart, _aggresiveCapture__WEBPACK_IMPORTED_MODULE_4__["nonPassive"]);
        };
    }, []);
    var removeScrollBar = props.removeScrollBar, inert = props.inert;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        inert ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Style, { styles: generateStyle(id) }) : null,
        removeScrollBar ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_remove_scroll_bar__WEBPACK_IMPORTED_MODULE_1__["RemoveScrollBar"], { gapMode: "margin" }) : null));
}


/***/ }),

/***/ "./node_modules/react-remove-scroll/dist/es2015/UI.js":
/*!************************************************************!*\
  !*** ./node_modules/react-remove-scroll/dist/es2015/UI.js ***!
  \************************************************************/
/*! exports provided: RemoveScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveScroll", function() { return RemoveScroll; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/react-remove-scroll/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_remove_scroll_bar_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-remove-scroll-bar/constants */ "./node_modules/react-remove-scroll-bar/dist/es2015/constants.js");
/* harmony import */ var _medium__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./medium */ "./node_modules/react-remove-scroll/dist/es2015/medium.js");
/* harmony import */ var use_callback_ref__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! use-callback-ref */ "./node_modules/react-remove-scroll/node_modules/use-callback-ref/dist/es2015/index.js");





var nothing = function () {
    return;
};
var RemoveScroll = react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"](function (props, parentRef) {
    var ref = react__WEBPACK_IMPORTED_MODULE_1__["useRef"](null);
    var _a = react__WEBPACK_IMPORTED_MODULE_1__["useState"]({
        onScrollCapture: nothing,
        onWheelCapture: nothing,
        onTouchMoveCapture: nothing
    }), callbacks = _a[0], setCallbacks = _a[1];
    var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, rest = tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"](props, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom"]);
    var SideCar = sideCar;
    var containerProps = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ ref: Object(use_callback_ref__WEBPACK_IMPORTED_MODULE_4__["useMergeRefs"])([
            ref,
            parentRef
        ]) }, rest, callbacks);
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
        enabled && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](SideCar, { sideCar: _medium__WEBPACK_IMPORTED_MODULE_3__["effectCar"], removeScrollBar: removeScrollBar, shards: shards, noIsolation: noIsolation, inert: inert, setCallbacks: setCallbacks, allowPinchZoom: !!allowPinchZoom, lockRef: ref })),
        forwardProps ? (react__WEBPACK_IMPORTED_MODULE_1__["cloneElement"](react__WEBPACK_IMPORTED_MODULE_1__["Children"].only(children), containerProps)) : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, containerProps, { className: className }), children))));
});
RemoveScroll.defaultProps = {
    enabled: true,
    removeScrollBar: true,
    inert: false
};
RemoveScroll.classNames = {
    fullWidth: react_remove_scroll_bar_constants__WEBPACK_IMPORTED_MODULE_2__["fullWidthClassName"],
    zeroRight: react_remove_scroll_bar_constants__WEBPACK_IMPORTED_MODULE_2__["zeroRightClassName"]
};



/***/ }),

/***/ "./node_modules/react-remove-scroll/dist/es2015/aggresiveCapture.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-remove-scroll/dist/es2015/aggresiveCapture.js ***!
  \**************************************************************************/
/*! exports provided: nonPassive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nonPassive", function() { return nonPassive; });
var passiveSupported = false;
if (typeof window !== 'undefined') {
    try {
        var options = Object.defineProperty({}, 'passive', {
            get: function () {
                passiveSupported = true;
                return true;
            }
        });
        window.addEventListener('test', options, options);
        window.removeEventListener('test', options, options);
    }
    catch (err) {
        passiveSupported = false;
    }
}
var nonPassive = passiveSupported ? { passive: false } : false;


/***/ }),

/***/ "./node_modules/react-remove-scroll/dist/es2015/handleScroll.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-remove-scroll/dist/es2015/handleScroll.js ***!
  \**********************************************************************/
/*! exports provided: locationCouldBeScrolled, handleScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locationCouldBeScrolled", function() { return locationCouldBeScrolled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleScroll", function() { return handleScroll; });
var elementCouldBeVScrolled = function (node) {
    var styles = window.getComputedStyle(node);
    return (styles.overflowY !== 'hidden' && // not-not-scrollable
        !(styles.overflowY === styles.overflowX && styles.overflowY === 'visible') // scrollable
    );
};
var elementCouldBeHScrolled = function (node) {
    var styles = window.getComputedStyle(node);
    return (styles.overflowX !== 'hidden' && // not-not-scrollable
        !(styles.overflowY === styles.overflowX && styles.overflowX === 'visible') // scrollable
    );
};
var locationCouldBeScrolled = function (axis, node) {
    var current = node;
    do {
        var isScrollable = elementCouldBeScrolled(axis, current);
        if (isScrollable) {
            var _a = getScrollVariables(axis, current), s = _a[1], d = _a[2];
            if (s > d) {
                return true;
            }
        }
        current = current.parentNode;
    } while (current && current !== document.body);
    return false;
};
var getVScrollVariables = function (_a) {
    var scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
    return [scrollTop, scrollHeight, clientHeight];
};
var getHScrollVariables = function (_a) {
    var scrollLeft = _a.scrollLeft, scrollWidth = _a.scrollWidth, clientWidth = _a.clientWidth;
    return [scrollLeft, scrollWidth, clientWidth];
};
var elementCouldBeScrolled = function (axis, node) {
    return axis === 'v' ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
};
var getScrollVariables = function (axis, node) {
    return axis === 'v' ? getVScrollVariables(node) : getHScrollVariables(node);
};
var handleScroll = function (axis, endTarget, event, sourceDelta, noOverscroll) {
    var delta = sourceDelta;
    // find scrollable target
    var target = event.target;
    var targetInLock = endTarget.contains(target);
    var shouldCancelScroll = false;
    var isDeltaPositive = delta > 0;
    var availableScroll = 0;
    var availableScrollTop = 0;
    do {
        var _a = getScrollVariables(axis, target), position = _a[0], scroll_1 = _a[1], capacity = _a[2];
        var elementScroll = scroll_1 - capacity - position;
        if (position || elementScroll) {
            if (elementCouldBeScrolled(axis, target)) {
                availableScroll += elementScroll;
                availableScrollTop += position;
            }
        }
        target = target.parentNode;
    } while (
    // portaled content
    (!targetInLock && target !== document.body) ||
        // self content
        (targetInLock && (endTarget.contains(target) || endTarget === target)));
    if (0) {}
    else if (isDeltaPositive &&
        ((noOverscroll && availableScroll === 0) ||
            (!noOverscroll && delta > availableScroll))) {
        shouldCancelScroll = true;
    }
    else if (!isDeltaPositive &&
        ((noOverscroll && availableScrollTop === 0) ||
            (!noOverscroll && -delta > availableScrollTop))) {
        shouldCancelScroll = true;
    }
    return shouldCancelScroll;
};


/***/ }),

/***/ "./node_modules/react-remove-scroll/dist/es2015/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-remove-scroll/dist/es2015/index.js ***!
  \***************************************************************/
/*! exports provided: RemoveScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Combination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Combination */ "./node_modules/react-remove-scroll/dist/es2015/Combination.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RemoveScroll", function() { return _Combination__WEBPACK_IMPORTED_MODULE_0__["default"]; });





/***/ }),

/***/ "./node_modules/react-remove-scroll/dist/es2015/medium.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-remove-scroll/dist/es2015/medium.js ***!
  \****************************************************************/
/*! exports provided: effectCar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "effectCar", function() { return effectCar; });
/* harmony import */ var use_sidecar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! use-sidecar */ "./node_modules/use-sidecar/dist/es2015/index.js");

var effectCar = Object(use_sidecar__WEBPACK_IMPORTED_MODULE_0__["createSidecarMedium"])();


/***/ }),

/***/ "./node_modules/react-remove-scroll/dist/es2015/sidecar.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-remove-scroll/dist/es2015/sidecar.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var use_sidecar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! use-sidecar */ "./node_modules/use-sidecar/dist/es2015/index.js");
/* harmony import */ var _SideEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SideEffect */ "./node_modules/react-remove-scroll/dist/es2015/SideEffect.js");
/* harmony import */ var _medium__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./medium */ "./node_modules/react-remove-scroll/dist/es2015/medium.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(use_sidecar__WEBPACK_IMPORTED_MODULE_0__["exportSidecar"])(_medium__WEBPACK_IMPORTED_MODULE_2__["effectCar"], _SideEffect__WEBPACK_IMPORTED_MODULE_1__["RemoveScrollSideCar"]));


/***/ }),

/***/ "./node_modules/react-remove-scroll/node_modules/tslib/tslib.es6.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-remove-scroll/node_modules/tslib/tslib.es6.js ***!
  \**************************************************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./node_modules/react-remove-scroll/node_modules/use-callback-ref/dist/es2015/assignRef.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/react-remove-scroll/node_modules/use-callback-ref/dist/es2015/assignRef.js ***!
  \*************************************************************************************************/
/*! exports provided: assignRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assignRef", function() { return assignRef; });
function assignRef(ref, value) {
    if (typeof ref === 'function') {
        ref(value);
    }
    else if (ref) {
        ref.current = value;
    }
    return ref;
}


/***/ }),

/***/ "./node_modules/react-remove-scroll/node_modules/use-callback-ref/dist/es2015/createRef.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/react-remove-scroll/node_modules/use-callback-ref/dist/es2015/createRef.js ***!
  \*************************************************************************************************/
/*! exports provided: createCallbackRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCallbackRef", function() { return createCallbackRef; });
function createCallbackRef(callback) {
    var current = null;
    return {
        get current() {
            return current;
        },
        set current(value) {
            var last = current;
            if (last !== value) {
                current = value;
                callback(value, last);
            }
        }
    };
}


/***/ }),

/***/ "./node_modules/react-remove-scroll/node_modules/use-callback-ref/dist/es2015/index.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/react-remove-scroll/node_modules/use-callback-ref/dist/es2015/index.js ***!
  \*********************************************************************************************/
/*! exports provided: assignRef, useCallbackRef, createCallbackRef, mergeRefs, useMergeRefs, useTransformRef, transformRef, refToCallback, useRefToCallback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assignRef__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assignRef */ "./node_modules/react-remove-scroll/node_modules/use-callback-ref/dist/es2015/assignRef.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assignRef", function() { return _assignRef__WEBPACK_IMPORTED_MODULE_0__["assignRef"]; });

/* harmony import */ var _useRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useRef */ "./node_modules/react-remove-scroll/node_modules/use-callback-ref/dist/es2015/useRef.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCallbackRef", function() { return _useRef__WEBPACK_IMPORTED_MODULE_1__["useCallbackRef"]; });

/* harmony import */ var _createRef__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createRef */ "./node_modules/react-remove-scroll/node_modules/use-callback-ref/dist/es2015/createRef.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createCallbackRef", function() { return _createRef__WEBPACK_IMPORTED_MODULE_2__["createCallbackRef"]; });

/* harmony import */ var _mergeRef__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mergeRef */ "./node_modules/react-remove-scroll/node_modules/use-callback-ref/dist/es2015/mergeRef.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeRefs", function() { return _mergeRef__WEBPACK_IMPORTED_MODULE_3__["mergeRefs"]; });

/* harmony import */ var _useMergeRef__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useMergeRef */ "./node_modules/react-remove-scroll/node_modules/use-callback-ref/dist/es2015/useMergeRef.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMergeRefs", function() { return _useMergeRef__WEBPACK_IMPORTED_MODULE_4__["useMergeRefs"]; });

/* harmony import */ var _useTransformRef__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useTransformRef */ "./node_modules/react-remove-scroll/node_modules/use-callback-ref/dist/es2015/useTransformRef.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTransformRef", function() { return _useTransformRef__WEBPACK_IMPORTED_MODULE_5__["useTransformRef"]; });

/* harmony import */ var _transformRef__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transformRef */ "./node_modules/react-remove-scroll/node_modules/use-callback-ref/dist/es2015/transformRef.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transformRef", function() { return _transformRef__WEBPACK_IMPORTED_MODULE_6__["transformRef"]; });

/* harmony import */ var _refToCallback__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./refToCallback */ "./node_modules/react-remove-scroll/node_modules/use-callback-ref/dist/es2015/refToCallback.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "refToCallback", function() { return _refToCallback__WEBPACK_IMPORTED_MODULE_7__["refToCallback"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRefToCallback", function() { return _refToCallback__WEBPACK_IMPORTED_MODULE_7__["useRefToCallback"]; });


// callback ref


// merge ref


// transform ref


// refToCallback



/***/ }),

/***/ "./node_modules/react-remove-scroll/node_modules/use-callback-ref/dist/es2015/mergeRef.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/react-remove-scroll/node_modules/use-callback-ref/dist/es2015/mergeRef.js ***!
  \************************************************************************************************/
/*! exports provided: mergeRefs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeRefs", function() { return mergeRefs; });
/* harmony import */ var _createRef__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createRef */ "./node_modules/react-remove-scroll/node_modules/use-callback-ref/dist/es2015/createRef.js");
/* harmony import */ var _assignRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assignRef */ "./node_modules/react-remove-scroll/node_modules/use-callback-ref/dist/es2015/assignRef.js");


function mergeRefs(refs) {
    return Object(_createRef__WEBPACK_IMPORTED_MODULE_0__["createCallbackRef"])(function (newValue) {
        return refs.forEach(function (ref) { return Object(_assignRef__WEBPACK_IMPORTED_MODULE_1__["assignRef"])(ref, newValue); });
    });
}


/***/ }),

/***/ "./node_modules/react-remove-scroll/node_modules/use-callback-ref/dist/es2015/refToCallback.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/react-remove-scroll/node_modules/use-callback-ref/dist/es2015/refToCallback.js ***!
  \*****************************************************************************************************/
/*! exports provided: refToCallback, useRefToCallback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "refToCallback", function() { return refToCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRefToCallback", function() { return useRefToCallback; });
function refToCallback(ref) {
    return function (newValue) {
        if (typeof ref === 'function') {
            ref(newValue);
        }
        else if (ref) {
            ref.current = newValue;
        }
    };
}
var nullCallback = function () { return null; };
// lets maintain a weak ref to, well, ref :)
// not using `kashe` to keep this package small
var weakMem = new WeakMap();
var weakMemoize = function (ref) {
    var usedRef = ref || nullCallback;
    if (weakMem.has(usedRef)) {
        return weakMem.get(usedRef);
    }
    var cb = refToCallback(usedRef);
    weakMem.set(usedRef, cb);
    return cb;
};
function useRefToCallback(ref) {
    return weakMemoize(ref);
}


/***/ }),

/***/ "./node_modules/react-remove-scroll/node_modules/use-callback-ref/dist/es2015/transformRef.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/react-remove-scroll/node_modules/use-callback-ref/dist/es2015/transformRef.js ***!
  \****************************************************************************************************/
/*! exports provided: transformRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformRef", function() { return transformRef; });
/* harmony import */ var _assignRef__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assignRef */ "./node_modules/react-remove-scroll/node_modules/use-callback-ref/dist/es2015/assignRef.js");
/* harmony import */ var _createRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createRef */ "./node_modules/react-remove-scroll/node_modules/use-callback-ref/dist/es2015/createRef.js");


function transformRef(ref, transformer) {
    return Object(_createRef__WEBPACK_IMPORTED_MODULE_1__["createCallbackRef"])(function (value) { return Object(_assignRef__WEBPACK_IMPORTED_MODULE_0__["assignRef"])(ref, transformer(value)); });
}


/***/ }),

/***/ "./node_modules/react-remove-scroll/node_modules/use-callback-ref/dist/es2015/useMergeRef.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/react-remove-scroll/node_modules/use-callback-ref/dist/es2015/useMergeRef.js ***!
  \***************************************************************************************************/
/*! exports provided: useMergeRefs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMergeRefs", function() { return useMergeRefs; });
/* harmony import */ var _useRef__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useRef */ "./node_modules/react-remove-scroll/node_modules/use-callback-ref/dist/es2015/useRef.js");
/* harmony import */ var _assignRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assignRef */ "./node_modules/react-remove-scroll/node_modules/use-callback-ref/dist/es2015/assignRef.js");


function useMergeRefs(refs, defaultValue) {
    return Object(_useRef__WEBPACK_IMPORTED_MODULE_0__["useCallbackRef"])(defaultValue, function (newValue) {
        return refs.forEach(function (ref) { return Object(_assignRef__WEBPACK_IMPORTED_MODULE_1__["assignRef"])(ref, newValue); });
    });
}


/***/ }),

/***/ "./node_modules/react-remove-scroll/node_modules/use-callback-ref/dist/es2015/useRef.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/react-remove-scroll/node_modules/use-callback-ref/dist/es2015/useRef.js ***!
  \**********************************************************************************************/
/*! exports provided: useCallbackRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCallbackRef", function() { return useCallbackRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useCallbackRef(initialValue, callback) {
    var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(function () { return ({
        // value
        value: initialValue,
        // last callback
        callback: callback,
        // "memoized" public interface
        facade: {
            get current() {
                return ref.value;
            },
            set current(value) {
                var last = ref.value;
                if (last !== value) {
                    ref.value = value;
                    ref.callback(value, last);
                }
            }
        }
    }); })[0];
    // update callback
    ref.callback = callback;
    return ref.facade;
}


/***/ }),

/***/ "./node_modules/react-remove-scroll/node_modules/use-callback-ref/dist/es2015/useTransformRef.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/react-remove-scroll/node_modules/use-callback-ref/dist/es2015/useTransformRef.js ***!
  \*******************************************************************************************************/
/*! exports provided: useTransformRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTransformRef", function() { return useTransformRef; });
/* harmony import */ var _useRef__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useRef */ "./node_modules/react-remove-scroll/node_modules/use-callback-ref/dist/es2015/useRef.js");
/* harmony import */ var _assignRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assignRef */ "./node_modules/react-remove-scroll/node_modules/use-callback-ref/dist/es2015/assignRef.js");


function useTransformRef(ref, transformer) {
    return Object(_useRef__WEBPACK_IMPORTED_MODULE_0__["useCallbackRef"])(undefined, function (value) {
        return Object(_assignRef__WEBPACK_IMPORTED_MODULE_1__["assignRef"])(ref, transformer(value));
    });
}


/***/ }),

/***/ "./node_modules/react-style-singleton/dist/es2015/component.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-style-singleton/dist/es2015/component.js ***!
  \*********************************************************************/
/*! exports provided: styleSingleton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styleSingleton", function() { return styleSingleton; });
/* harmony import */ var _hook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hook */ "./node_modules/react-style-singleton/dist/es2015/hook.js");

var styleSingleton = function () {
    var useStyle = Object(_hook__WEBPACK_IMPORTED_MODULE_0__["styleHookSingleton"])();
    var Sheet = function (_a) {
        var styles = _a.styles;
        useStyle(styles);
        return null;
    };
    return Sheet;
};


/***/ }),

/***/ "./node_modules/react-style-singleton/dist/es2015/hook.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-style-singleton/dist/es2015/hook.js ***!
  \****************************************************************/
/*! exports provided: styleHookSingleton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styleHookSingleton", function() { return styleHookSingleton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _singleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./singleton */ "./node_modules/react-style-singleton/dist/es2015/singleton.js");


var styleHookSingleton = function () {
    var sheet = Object(_singleton__WEBPACK_IMPORTED_MODULE_1__["stylesheetSingleton"])();
    return function (styles) {
        react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
            sheet.add(styles);
            return function () {
                sheet.remove();
            };
        }, []);
    };
};


/***/ }),

/***/ "./node_modules/react-style-singleton/dist/es2015/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-style-singleton/dist/es2015/index.js ***!
  \*****************************************************************/
/*! exports provided: styleSingleton, stylesheetSingleton, styleHookSingleton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./node_modules/react-style-singleton/dist/es2015/component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "styleSingleton", function() { return _component__WEBPACK_IMPORTED_MODULE_0__["styleSingleton"]; });

/* harmony import */ var _singleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./singleton */ "./node_modules/react-style-singleton/dist/es2015/singleton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stylesheetSingleton", function() { return _singleton__WEBPACK_IMPORTED_MODULE_1__["stylesheetSingleton"]; });

/* harmony import */ var _hook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hook */ "./node_modules/react-style-singleton/dist/es2015/hook.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "styleHookSingleton", function() { return _hook__WEBPACK_IMPORTED_MODULE_2__["styleHookSingleton"]; });






/***/ }),

/***/ "./node_modules/react-style-singleton/dist/es2015/singleton.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-style-singleton/dist/es2015/singleton.js ***!
  \*********************************************************************/
/*! exports provided: stylesheetSingleton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stylesheetSingleton", function() { return stylesheetSingleton; });
/* harmony import */ var get_nonce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! get-nonce */ "./node_modules/get-nonce/dist/es2015/index.js");

function makeStyleTag() {
    if (!document)
        return null;
    var tag = document.createElement('style');
    tag.type = 'text/css';
    var nonce = Object(get_nonce__WEBPACK_IMPORTED_MODULE_0__["getNonce"])();
    if (nonce) {
        tag.setAttribute('nonce', nonce);
    }
    return tag;
}
function injectStyles(tag, css) {
    if (tag.styleSheet) {
        tag.styleSheet.cssText = css;
    }
    else {
        tag.appendChild(document.createTextNode(css));
    }
}
function insertStyleTag(tag) {
    var head = document.head || document.getElementsByTagName('head')[0];
    head.appendChild(tag);
}
var stylesheetSingleton = function () {
    var counter = 0;
    var stylesheet = null;
    return {
        add: function (style) {
            if (counter == 0) {
                if (stylesheet = makeStyleTag()) {
                    injectStyles(stylesheet, style);
                    insertStyleTag(stylesheet);
                }
            }
            counter++;
        },
        remove: function () {
            counter--;
            if (!counter && stylesheet) {
                stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
                stylesheet = null;
            }
        }
    };
};


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/use-callback-ref/dist/es2015/assignRef.js":
/*!****************************************************************!*\
  !*** ./node_modules/use-callback-ref/dist/es2015/assignRef.js ***!
  \****************************************************************/
/*! exports provided: assignRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assignRef", function() { return assignRef; });
function assignRef(ref, value) {
    if (typeof ref === 'function') {
        ref(value);
    }
    else if (ref != null) {
        ref.current = value;
    }
    return ref;
}


/***/ }),

/***/ "./node_modules/use-callback-ref/dist/es2015/createRef.js":
/*!****************************************************************!*\
  !*** ./node_modules/use-callback-ref/dist/es2015/createRef.js ***!
  \****************************************************************/
/*! exports provided: createCallbackRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCallbackRef", function() { return createCallbackRef; });
function createCallbackRef(callback) {
    var current = null;
    return {
        get current() {
            return current;
        },
        set current(value) {
            var last = current;
            if (last !== value) {
                current = value;
                callback(value, last);
            }
        }
    };
}


/***/ }),

/***/ "./node_modules/use-callback-ref/dist/es2015/index.js":
/*!************************************************************!*\
  !*** ./node_modules/use-callback-ref/dist/es2015/index.js ***!
  \************************************************************/
/*! exports provided: assignRef, useCallbackRef, createCallbackRef, mergeRefs, useMergeRefs, useTransformRef, transformRef, refToCallback, useRefToCallback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assignRef__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assignRef */ "./node_modules/use-callback-ref/dist/es2015/assignRef.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assignRef", function() { return _assignRef__WEBPACK_IMPORTED_MODULE_0__["assignRef"]; });

/* harmony import */ var _useRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useRef */ "./node_modules/use-callback-ref/dist/es2015/useRef.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCallbackRef", function() { return _useRef__WEBPACK_IMPORTED_MODULE_1__["useCallbackRef"]; });

/* harmony import */ var _createRef__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createRef */ "./node_modules/use-callback-ref/dist/es2015/createRef.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createCallbackRef", function() { return _createRef__WEBPACK_IMPORTED_MODULE_2__["createCallbackRef"]; });

/* harmony import */ var _mergeRef__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mergeRef */ "./node_modules/use-callback-ref/dist/es2015/mergeRef.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeRefs", function() { return _mergeRef__WEBPACK_IMPORTED_MODULE_3__["mergeRefs"]; });

/* harmony import */ var _useMergeRef__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useMergeRef */ "./node_modules/use-callback-ref/dist/es2015/useMergeRef.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMergeRefs", function() { return _useMergeRef__WEBPACK_IMPORTED_MODULE_4__["useMergeRefs"]; });

/* harmony import */ var _useTransformRef__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useTransformRef */ "./node_modules/use-callback-ref/dist/es2015/useTransformRef.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTransformRef", function() { return _useTransformRef__WEBPACK_IMPORTED_MODULE_5__["useTransformRef"]; });

/* harmony import */ var _transformRef__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transformRef */ "./node_modules/use-callback-ref/dist/es2015/transformRef.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transformRef", function() { return _transformRef__WEBPACK_IMPORTED_MODULE_6__["transformRef"]; });

/* harmony import */ var _refToCallback__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./refToCallback */ "./node_modules/use-callback-ref/dist/es2015/refToCallback.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "refToCallback", function() { return _refToCallback__WEBPACK_IMPORTED_MODULE_7__["refToCallback"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRefToCallback", function() { return _refToCallback__WEBPACK_IMPORTED_MODULE_7__["useRefToCallback"]; });











/***/ }),

/***/ "./node_modules/use-callback-ref/dist/es2015/mergeRef.js":
/*!***************************************************************!*\
  !*** ./node_modules/use-callback-ref/dist/es2015/mergeRef.js ***!
  \***************************************************************/
/*! exports provided: mergeRefs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeRefs", function() { return mergeRefs; });
/* harmony import */ var _createRef__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createRef */ "./node_modules/use-callback-ref/dist/es2015/createRef.js");
/* harmony import */ var _assignRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assignRef */ "./node_modules/use-callback-ref/dist/es2015/assignRef.js");


function mergeRefs(refs) {
    return Object(_createRef__WEBPACK_IMPORTED_MODULE_0__["createCallbackRef"])(function (newValue) {
        return refs.forEach(function (ref) { return Object(_assignRef__WEBPACK_IMPORTED_MODULE_1__["assignRef"])(ref, newValue); });
    });
}


/***/ }),

/***/ "./node_modules/use-callback-ref/dist/es2015/refToCallback.js":
/*!********************************************************************!*\
  !*** ./node_modules/use-callback-ref/dist/es2015/refToCallback.js ***!
  \********************************************************************/
/*! exports provided: refToCallback, useRefToCallback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "refToCallback", function() { return refToCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRefToCallback", function() { return useRefToCallback; });
function refToCallback(ref) {
    return function (newValue) {
        if (typeof ref === 'function') {
            ref(newValue);
        }
        else if (ref != null) {
            ref.current = newValue;
        }
    };
}
var weakMem = new WeakMap();
var weakMemoize = function (ref) {
    if (weakMem.has(ref)) {
        return weakMem.get(ref);
    }
    var cb = refToCallback(ref);
    weakMem.set(ref, cb);
    return cb;
};
function useRefToCallback(ref) {
    return weakMemoize(ref);
}


/***/ }),

/***/ "./node_modules/use-callback-ref/dist/es2015/transformRef.js":
/*!*******************************************************************!*\
  !*** ./node_modules/use-callback-ref/dist/es2015/transformRef.js ***!
  \*******************************************************************/
/*! exports provided: transformRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformRef", function() { return transformRef; });
/* harmony import */ var _assignRef__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assignRef */ "./node_modules/use-callback-ref/dist/es2015/assignRef.js");
/* harmony import */ var _createRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createRef */ "./node_modules/use-callback-ref/dist/es2015/createRef.js");


function transformRef(ref, transformer) {
    return Object(_createRef__WEBPACK_IMPORTED_MODULE_1__["createCallbackRef"])(function (value) { return Object(_assignRef__WEBPACK_IMPORTED_MODULE_0__["assignRef"])(ref, transformer(value)); });
}


/***/ }),

/***/ "./node_modules/use-callback-ref/dist/es2015/useMergeRef.js":
/*!******************************************************************!*\
  !*** ./node_modules/use-callback-ref/dist/es2015/useMergeRef.js ***!
  \******************************************************************/
/*! exports provided: useMergeRefs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMergeRefs", function() { return useMergeRefs; });
/* harmony import */ var _useRef__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useRef */ "./node_modules/use-callback-ref/dist/es2015/useRef.js");
/* harmony import */ var _assignRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assignRef */ "./node_modules/use-callback-ref/dist/es2015/assignRef.js");


function useMergeRefs(refs, defaultValue) {
    return Object(_useRef__WEBPACK_IMPORTED_MODULE_0__["useCallbackRef"])(defaultValue, function (newValue) {
        return refs.forEach(function (ref) { return Object(_assignRef__WEBPACK_IMPORTED_MODULE_1__["assignRef"])(ref, newValue); });
    });
}


/***/ }),

/***/ "./node_modules/use-callback-ref/dist/es2015/useRef.js":
/*!*************************************************************!*\
  !*** ./node_modules/use-callback-ref/dist/es2015/useRef.js ***!
  \*************************************************************/
/*! exports provided: useCallbackRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCallbackRef", function() { return useCallbackRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useCallbackRef(initialValue, callback) {
    var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(function () { return ({
        value: initialValue,
        callback: callback,
        facade: {
            get current() {
                return ref.value;
            },
            set current(value) {
                var last = ref.value;
                if (last !== value) {
                    ref.value = value;
                    ref.callback(value, last);
                }
            }
        }
    }); })[0];
    ref.callback = callback;
    return ref.facade;
}


/***/ }),

/***/ "./node_modules/use-callback-ref/dist/es2015/useTransformRef.js":
/*!**********************************************************************!*\
  !*** ./node_modules/use-callback-ref/dist/es2015/useTransformRef.js ***!
  \**********************************************************************/
/*! exports provided: useTransformRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTransformRef", function() { return useTransformRef; });
/* harmony import */ var _useRef__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useRef */ "./node_modules/use-callback-ref/dist/es2015/useRef.js");
/* harmony import */ var _assignRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assignRef */ "./node_modules/use-callback-ref/dist/es2015/assignRef.js");


function useTransformRef(ref, transformer) {
    return Object(_useRef__WEBPACK_IMPORTED_MODULE_0__["useCallbackRef"])(undefined, function (value) {
        return Object(_assignRef__WEBPACK_IMPORTED_MODULE_1__["assignRef"])(ref, transformer(value));
    });
}


/***/ }),

/***/ "./node_modules/use-sidecar/dist/es2015/config.js":
/*!********************************************************!*\
  !*** ./node_modules/use-sidecar/dist/es2015/config.js ***!
  \********************************************************/
/*! exports provided: config, setConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setConfig", function() { return setConfig; });
var config = {
    onError: function (e) { return console.error(e); },
};
var setConfig = function (conf) {
    Object.assign(config, conf);
};


/***/ }),

/***/ "./node_modules/use-sidecar/dist/es2015/env.js":
/*!*****************************************************!*\
  !*** ./node_modules/use-sidecar/dist/es2015/env.js ***!
  \*****************************************************/
/*! exports provided: env */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "env", function() { return env; });
/* harmony import */ var detect_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! detect-node */ "./node_modules/detect-node/browser.js");
/* harmony import */ var detect_node__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(detect_node__WEBPACK_IMPORTED_MODULE_0__);

var env = {
    isNode: detect_node__WEBPACK_IMPORTED_MODULE_0___default.a,
    forceCache: false,
};


/***/ }),

/***/ "./node_modules/use-sidecar/dist/es2015/exports.js":
/*!*********************************************************!*\
  !*** ./node_modules/use-sidecar/dist/es2015/exports.js ***!
  \*********************************************************/
/*! exports provided: exportSidecar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exportSidecar", function() { return exportSidecar; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/use-sidecar/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var SideCar = function (_a) {
    var sideCar = _a.sideCar, rest = tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"](_a, ["sideCar"]);
    if (!sideCar) {
        throw new Error('Sidecar: please provide `sideCar` property to import the right car');
    }
    var Target = sideCar.read();
    if (!Target) {
        throw new Error('Sidecar medium not found');
    }
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Target, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, rest));
};
SideCar.isSideCarExport = true;
function exportSidecar(medium, exported) {
    medium.useMedium(exported);
    return SideCar;
}


/***/ }),

/***/ "./node_modules/use-sidecar/dist/es2015/hoc.js":
/*!*****************************************************!*\
  !*** ./node_modules/use-sidecar/dist/es2015/hoc.js ***!
  \*****************************************************/
/*! exports provided: sidecar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sidecar", function() { return sidecar; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/use-sidecar/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hook */ "./node_modules/use-sidecar/dist/es2015/hook.js");



function sidecar(importer, errorComponent) {
    var ErrorCase = function () { return errorComponent; };
    return function Sidecar(props) {
        var _a = Object(_hook__WEBPACK_IMPORTED_MODULE_2__["useSidecar"])(importer, props.sideCar), Car = _a[0], error = _a[1];
        if (error && errorComponent) {
            return ErrorCase;
        }
        return Car ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Car, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, props)) : null;
    };
}


/***/ }),

/***/ "./node_modules/use-sidecar/dist/es2015/hook.js":
/*!******************************************************!*\
  !*** ./node_modules/use-sidecar/dist/es2015/hook.js ***!
  \******************************************************/
/*! exports provided: useSidecar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSidecar", function() { return useSidecar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./env */ "./node_modules/use-sidecar/dist/es2015/env.js");


var cache = new WeakMap();
function useSidecar(importer, effect) {
    var options = effect && effect.options || {};
    if (_env__WEBPACK_IMPORTED_MODULE_1__["env"].isNode && !options.ssr) {
        return [null, null];
    }
    var couldUseCache = _env__WEBPACK_IMPORTED_MODULE_1__["env"].forceCache || (_env__WEBPACK_IMPORTED_MODULE_1__["env"].isNode && !!options.ssr) || (!options.async);
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(couldUseCache ? function () { return cache.get(importer); } : undefined), Car = _a[0], setCar = _a[1];
    var _b = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null), error = _b[0], setError = _b[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (!Car) {
            importer()
                .then(function (car) {
                var resolved = effect ? effect.read() : (car.default || car);
                if (!resolved) {
                    console.error('Sidecar error: with importer', importer);
                    var error_1;
                    if (effect) {
                        console.error('Sidecar error: with medium', effect);
                        error_1 = new Error('Sidecar medium was not found');
                    }
                    else {
                        error_1 = new Error('Sidecar was not found in exports');
                    }
                    setError(function () { return error_1; });
                    throw error_1;
                }
                cache.set(importer, resolved);
                setCar(function () { return resolved; });
            }, function (e) { return setError(function () { return e; }); });
        }
    }, []);
    return [Car, error];
}
;


/***/ }),

/***/ "./node_modules/use-sidecar/dist/es2015/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/use-sidecar/dist/es2015/index.js ***!
  \*******************************************************/
/*! exports provided: sidecar, useSidecar, setConfig, createMedium, createSidecarMedium, renderCar, exportSidecar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hoc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hoc */ "./node_modules/use-sidecar/dist/es2015/hoc.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sidecar", function() { return _hoc__WEBPACK_IMPORTED_MODULE_0__["sidecar"]; });

/* harmony import */ var _hook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hook */ "./node_modules/use-sidecar/dist/es2015/hook.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSidecar", function() { return _hook__WEBPACK_IMPORTED_MODULE_1__["useSidecar"]; });

/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./node_modules/use-sidecar/dist/es2015/config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setConfig", function() { return _config__WEBPACK_IMPORTED_MODULE_2__["setConfig"]; });

/* harmony import */ var _medium__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./medium */ "./node_modules/use-sidecar/dist/es2015/medium.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMedium", function() { return _medium__WEBPACK_IMPORTED_MODULE_3__["createMedium"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSidecarMedium", function() { return _medium__WEBPACK_IMPORTED_MODULE_3__["createSidecarMedium"]; });

/* harmony import */ var _renderProp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./renderProp */ "./node_modules/use-sidecar/dist/es2015/renderProp.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "renderCar", function() { return _renderProp__WEBPACK_IMPORTED_MODULE_4__["renderCar"]; });

/* harmony import */ var _exports__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./exports */ "./node_modules/use-sidecar/dist/es2015/exports.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "exportSidecar", function() { return _exports__WEBPACK_IMPORTED_MODULE_5__["exportSidecar"]; });









/***/ }),

/***/ "./node_modules/use-sidecar/dist/es2015/medium.js":
/*!********************************************************!*\
  !*** ./node_modules/use-sidecar/dist/es2015/medium.js ***!
  \********************************************************/
/*! exports provided: createMedium, createSidecarMedium */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMedium", function() { return createMedium; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSidecarMedium", function() { return createSidecarMedium; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/use-sidecar/node_modules/tslib/tslib.es6.js");

function ItoI(a) {
    return a;
}
function innerCreateMedium(defaults, middleware) {
    if (middleware === void 0) { middleware = ItoI; }
    var buffer = [];
    var assigned = false;
    var medium = {
        read: function () {
            if (assigned) {
                throw new Error('Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.');
            }
            if (buffer.length) {
                return buffer[buffer.length - 1];
            }
            return defaults;
        },
        useMedium: function (data) {
            var item = middleware(data, assigned);
            buffer.push(item);
            return function () {
                buffer = buffer.filter(function (x) { return x !== item; });
            };
        },
        assignSyncMedium: function (cb) {
            assigned = true;
            while (buffer.length) {
                var cbs = buffer;
                buffer = [];
                cbs.forEach(cb);
            }
            buffer = {
                push: function (x) { return cb(x); },
                filter: function () { return buffer; },
            };
        },
        assignMedium: function (cb) {
            assigned = true;
            var pendingQueue = [];
            if (buffer.length) {
                var cbs = buffer;
                buffer = [];
                cbs.forEach(cb);
                pendingQueue = buffer;
            }
            var executeQueue = function () {
                var cbs = pendingQueue;
                pendingQueue = [];
                cbs.forEach(cb);
            };
            var cycle = function () { return Promise.resolve().then(executeQueue); };
            cycle();
            buffer = {
                push: function (x) {
                    pendingQueue.push(x);
                    cycle();
                },
                filter: function (filter) {
                    pendingQueue = pendingQueue.filter(filter);
                    return buffer;
                },
            };
        },
    };
    return medium;
}
function createMedium(defaults, middleware) {
    if (middleware === void 0) { middleware = ItoI; }
    return innerCreateMedium(defaults, middleware);
}
function createSidecarMedium(options) {
    if (options === void 0) { options = {}; }
    var medium = innerCreateMedium(null);
    medium.options = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ async: true, ssr: false }, options);
    return medium;
}


/***/ }),

/***/ "./node_modules/use-sidecar/dist/es2015/renderProp.js":
/*!************************************************************!*\
  !*** ./node_modules/use-sidecar/dist/es2015/renderProp.js ***!
  \************************************************************/
/*! exports provided: renderCar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderCar", function() { return renderCar; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/use-sidecar/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



function renderCar(WrappedComponent, defaults, options) {
    if (options === void 0) { options = {}; }
    function State(_a) {
        var stateRef = _a.stateRef, props = _a.props;
        var renderTarget = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function SideTarget() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            Object(react__WEBPACK_IMPORTED_MODULE_1__["useLayoutEffect"])(function () {
                stateRef.current(args);
            });
            return null;
        }, []);
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](WrappedComponent, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, props, { children: renderTarget }));
    }
    var Children = react__WEBPACK_IMPORTED_MODULE_1__["memo"](function (_a) {
        var stateRef = _a.stateRef, defaultState = _a.defaultState, children = _a.children;
        var _b = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(defaultState.current), state = _b[0], setState = _b[1];
        react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
            stateRef.current = setState;
        }, []);
        return children.apply(void 0, state);
    }, function () { return true; });
    return function Combiner(props) {
        var defaultState = react__WEBPACK_IMPORTED_MODULE_1__["useRef"](defaults(props));
        var ref = react__WEBPACK_IMPORTED_MODULE_1__["useRef"](function (state) { return defaultState.current = state; });
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](State, { stateRef: ref, props: props }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Children, { stateRef: ref, defaultState: defaultState, children: props.children })));
    };
}


/***/ }),

/***/ "./node_modules/use-sidecar/node_modules/tslib/tslib.es6.js":
/*!******************************************************************!*\
  !*** ./node_modules/use-sidecar/node_modules/tslib/tslib.es6.js ***!
  \******************************************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/bytesToUuid.js":
/*!***********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/bytesToUuid.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex; // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434

  return (bth[buf[i + 0]] + bth[buf[i + 1]] + bth[buf[i + 2]] + bth[buf[i + 3]] + '-' + bth[buf[i + 4]] + bth[buf[i + 5]] + '-' + bth[buf[i + 6]] + bth[buf[i + 7]] + '-' + bth[buf[i + 8]] + bth[buf[i + 9]] + '-' + bth[buf[i + 10]] + bth[buf[i + 11]] + bth[buf[i + 12]] + bth[buf[i + 13]] + bth[buf[i + 14]] + bth[buf[i + 15]]).toLowerCase();
}

/* harmony default export */ __webpack_exports__["default"] = (bytesToUuid);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/index.js ***!
  \*****************************************************/
/*! exports provided: v1, v3, v4, v5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v1.js */ "./node_modules/uuid/dist/esm-browser/v1.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v1", function() { return _v1_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _v3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./v3.js */ "./node_modules/uuid/dist/esm-browser/v3.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v3", function() { return _v3_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _v4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./v4.js */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v4", function() { return _v4_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _v5_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./v5.js */ "./node_modules/uuid/dist/esm-browser/v5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v5", function() { return _v5_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });






/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/md5.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/md5.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * Browser-compatible JavaScript MD5
 *
 * Modification of JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */
function md5(bytes) {
  if (typeof bytes === 'string') {
    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = new Uint8Array(msg.length);

    for (var i = 0; i < msg.length; ++i) {
      bytes[i] = msg.charCodeAt(i);
    }
  }

  return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
}
/*
 * Convert an array of little-endian words to an array of bytes
 */


function md5ToHexEncodedArray(input) {
  var output = [];
  var length32 = input.length * 32;
  var hexTab = '0123456789abcdef';

  for (var i = 0; i < length32; i += 8) {
    var x = input[i >> 5] >>> i % 32 & 0xff;
    var hex = parseInt(hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f), 16);
    output.push(hex);
  }

  return output;
}
/**
 * Calculate output length with padding and bit length
 */


function getOutputLength(inputLength8) {
  return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
}
/*
 * Calculate the MD5 of an array of little-endian words, and a bit length.
 */


function wordsToMd5(x, len) {
  /* append padding */
  x[len >> 5] |= 0x80 << len % 32;
  x[getOutputLength(len) - 1] = len;
  var a = 1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d = 271733878;

  for (var i = 0; i < x.length; i += 16) {
    var olda = a;
    var oldb = b;
    var oldc = c;
    var oldd = d;
    a = md5ff(a, b, c, d, x[i], 7, -680876936);
    d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
    c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
    b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
    a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
    d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
    c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
    b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
    a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
    d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
    c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
    b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
    a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
    d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
    c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
    b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
    a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
    d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
    c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
    b = md5gg(b, c, d, a, x[i], 20, -373897302);
    a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
    d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
    c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
    b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
    a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
    d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
    c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
    b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
    a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
    d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
    c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
    b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
    a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
    d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
    c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
    b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
    a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
    d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
    c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
    b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
    a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
    d = md5hh(d, a, b, c, x[i], 11, -358537222);
    c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
    b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
    a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
    d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
    c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
    b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
    a = md5ii(a, b, c, d, x[i], 6, -198630844);
    d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
    c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
    b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
    a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
    d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
    c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
    b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
    a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
    d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
    c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
    b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
    a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
    d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
    c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
    b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
    a = safeAdd(a, olda);
    b = safeAdd(b, oldb);
    c = safeAdd(c, oldc);
    d = safeAdd(d, oldd);
  }

  return [a, b, c, d];
}
/*
 * Convert an array bytes to an array of little-endian words
 * Characters >255 have their high-byte silently ignored.
 */


function bytesToWords(input) {
  if (input.length === 0) {
    return [];
  }

  var length8 = input.length * 8;
  var output = new Uint32Array(getOutputLength(length8));

  for (var i = 0; i < length8; i += 8) {
    output[i >> 5] |= (input[i / 8] & 0xff) << i % 32;
  }

  return output;
}
/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */


function safeAdd(x, y) {
  var lsw = (x & 0xffff) + (y & 0xffff);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return msw << 16 | lsw & 0xffff;
}
/*
 * Bitwise rotate a 32-bit number to the left.
 */


function bitRotateLeft(num, cnt) {
  return num << cnt | num >>> 32 - cnt;
}
/*
 * These functions implement the four basic operations the algorithm uses.
 */


function md5cmn(q, a, b, x, s, t) {
  return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
}

function md5ff(a, b, c, d, x, s, t) {
  return md5cmn(b & c | ~b & d, a, b, x, s, t);
}

function md5gg(a, b, c, d, x, s, t) {
  return md5cmn(b & d | c & ~d, a, b, x, s, t);
}

function md5hh(a, b, c, d, x, s, t) {
  return md5cmn(b ^ c ^ d, a, b, x, s, t);
}

function md5ii(a, b, c, d, x, s, t) {
  return md5cmn(c ^ (b | ~d), a, b, x, s, t);
}

/* harmony default export */ __webpack_exports__["default"] = (md5);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rng; });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
// getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
// find the complete implementation of crypto (msCrypto) on IE11.
var getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);
var rnds8 = new Uint8Array(16);
function rng() {
  if (!getRandomValues) {
    throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/sha1.js":
/*!****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/sha1.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Adapted from Chris Veness' SHA1 code at
// http://www.movable-type.co.uk/scripts/sha1.html
function f(s, x, y, z) {
  switch (s) {
    case 0:
      return x & y ^ ~x & z;

    case 1:
      return x ^ y ^ z;

    case 2:
      return x & y ^ x & z ^ y & z;

    case 3:
      return x ^ y ^ z;
  }
}

function ROTL(x, n) {
  return x << n | x >>> 32 - n;
}

function sha1(bytes) {
  var K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];
  var H = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];

  if (typeof bytes === 'string') {
    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = [];

    for (var i = 0; i < msg.length; ++i) {
      bytes.push(msg.charCodeAt(i));
    }
  }

  bytes.push(0x80);
  var l = bytes.length / 4 + 2;
  var N = Math.ceil(l / 16);
  var M = new Array(N);

  for (var _i = 0; _i < N; ++_i) {
    var arr = new Uint32Array(16);

    for (var j = 0; j < 16; ++j) {
      arr[j] = bytes[_i * 64 + j * 4] << 24 | bytes[_i * 64 + j * 4 + 1] << 16 | bytes[_i * 64 + j * 4 + 2] << 8 | bytes[_i * 64 + j * 4 + 3];
    }

    M[_i] = arr;
  }

  M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
  M[N - 1][14] = Math.floor(M[N - 1][14]);
  M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;

  for (var _i2 = 0; _i2 < N; ++_i2) {
    var W = new Uint32Array(80);

    for (var t = 0; t < 16; ++t) {
      W[t] = M[_i2][t];
    }

    for (var _t = 16; _t < 80; ++_t) {
      W[_t] = ROTL(W[_t - 3] ^ W[_t - 8] ^ W[_t - 14] ^ W[_t - 16], 1);
    }

    var a = H[0];
    var b = H[1];
    var c = H[2];
    var d = H[3];
    var e = H[4];

    for (var _t2 = 0; _t2 < 80; ++_t2) {
      var s = Math.floor(_t2 / 20);
      var T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[_t2] >>> 0;
      e = d;
      d = c;
      c = ROTL(b, 30) >>> 0;
      b = a;
      a = T;
    }

    H[0] = H[0] + a >>> 0;
    H[1] = H[1] + b >>> 0;
    H[2] = H[2] + c >>> 0;
    H[3] = H[3] + d >>> 0;
    H[4] = H[4] + e >>> 0;
  }

  return [H[0] >> 24 & 0xff, H[0] >> 16 & 0xff, H[0] >> 8 & 0xff, H[0] & 0xff, H[1] >> 24 & 0xff, H[1] >> 16 & 0xff, H[1] >> 8 & 0xff, H[1] & 0xff, H[2] >> 24 & 0xff, H[2] >> 16 & 0xff, H[2] >> 8 & 0xff, H[2] & 0xff, H[3] >> 24 & 0xff, H[3] >> 16 & 0xff, H[3] >> 8 & 0xff, H[3] & 0xff, H[4] >> 24 & 0xff, H[4] >> 16 & 0xff, H[4] >> 8 & 0xff, H[4] & 0xff];
}

/* harmony default export */ __webpack_exports__["default"] = (sha1);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v1.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v1.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _bytesToUuid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bytesToUuid.js */ "./node_modules/uuid/dist/esm-browser/bytesToUuid.js");

 // **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;

var _clockseq; // Previous uuid creation time


var _lastMSecs = 0;
var _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details

function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];
  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189

  if (node == null || clockseq == null) {
    var seedBytes = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
    }

    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.


  var msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock

  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)

  var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression

  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval


  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  } // Per 4.2.1.2 Throw error if too many uuids are requested


  if (nsecs >= 10000) {
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch

  msecs += 12219292800000; // `time_low`

  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff; // `time_mid`

  var tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff; // `time_high_and_version`

  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version

  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)

  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`

  b[i++] = clockseq & 0xff; // `node`

  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf || Object(_bytesToUuid_js__WEBPACK_IMPORTED_MODULE_1__["default"])(b);
}

/* harmony default export */ __webpack_exports__["default"] = (v1);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v3.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v3.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v35.js */ "./node_modules/uuid/dist/esm-browser/v35.js");
/* harmony import */ var _md5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./md5.js */ "./node_modules/uuid/dist/esm-browser/md5.js");


var v3 = Object(_v35_js__WEBPACK_IMPORTED_MODULE_0__["default"])('v3', 0x30, _md5_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (v3);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v35.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v35.js ***!
  \***************************************************/
/*! exports provided: DNS, URL, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DNS", function() { return DNS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL", function() { return URL; });
/* harmony import */ var _bytesToUuid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bytesToUuid.js */ "./node_modules/uuid/dist/esm-browser/bytesToUuid.js");


function uuidToBytes(uuid) {
  // Note: We assume we're being passed a valid uuid string
  var bytes = [];
  uuid.replace(/[a-fA-F0-9]{2}/g, function (hex) {
    bytes.push(parseInt(hex, 16));
  });
  return bytes;
}

function stringToBytes(str) {
  str = unescape(encodeURIComponent(str)); // UTF8 escape

  var bytes = [];

  for (var i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }

  return bytes;
}

var DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
var URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
/* harmony default export */ __webpack_exports__["default"] = (function (name, version, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    var off = buf && offset || 0;
    if (typeof value === 'string') value = stringToBytes(value);
    if (typeof namespace === 'string') namespace = uuidToBytes(namespace);

    if (!Array.isArray(value)) {
      throw TypeError('value must be an array of bytes');
    }

    if (!Array.isArray(namespace) || namespace.length !== 16) {
      throw TypeError('namespace must be uuid string or an Array of 16 byte values');
    } // Per 4.3


    var bytes = hashfunc(namespace.concat(value));
    bytes[6] = bytes[6] & 0x0f | version;
    bytes[8] = bytes[8] & 0x3f | 0x80;

    if (buf) {
      for (var idx = 0; idx < 16; ++idx) {
        buf[off + idx] = bytes[idx];
      }
    }

    return buf || Object(_bytesToUuid_js__WEBPACK_IMPORTED_MODULE_0__["default"])(bytes);
  } // Function#name is not settable on some platforms (#270)


  try {
    generateUUID.name = name; // eslint-disable-next-line no-empty
  } catch (err) {} // For CommonJS default export support


  generateUUID.DNS = DNS;
  generateUUID.URL = URL;
  return generateUUID;
});

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _bytesToUuid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bytesToUuid.js */ "./node_modules/uuid/dist/esm-browser/bytesToUuid.js");



function v4(options, buf, offset) {
  if (typeof options === 'string') {
    buf = options === 'binary' ? new Uint8Array(16) : null;
    options = null;
  }

  options = options || {};
  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    var start = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[start + i] = rnds[i];
    }

    return buf;
  }

  return Object(_bytesToUuid_js__WEBPACK_IMPORTED_MODULE_1__["default"])(rnds);
}

/* harmony default export */ __webpack_exports__["default"] = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v5.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v5.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v35.js */ "./node_modules/uuid/dist/esm-browser/v35.js");
/* harmony import */ var _sha1_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sha1.js */ "./node_modules/uuid/dist/esm-browser/sha1.js");


var v5 = Object(_v35_js__WEBPACK_IMPORTED_MODULE_0__["default"])('v5', 0x50, _sha1_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (v5);

/***/ }),

/***/ "./node_modules/warning/warning.js":
/*!*****************************************!*\
  !*** ./node_modules/warning/warning.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = "development" !== 'production';

var warning = function() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 1 ? len - 1 : 0);
    for (var key = 1; key < len; key++) {
      args[key - 1] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  }

  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

module.exports = warning;


/***/ }),

/***/ "./src/list-item.tsx":
/*!***************************!*\
  !*** ./src/list-item.tsx ***!
  \***************************/
/*! exports provided: EditItem, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditItem", function() { return EditItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ListItem; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");

var _jsxFileName = "/Users/charlespeters/Code/basic-react-todo-list/src/list-item.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];


var EditItem = function EditItem(props) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__["useState"](props.item.task),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  var handleChange = function handleChange(event) {
    setValue(event.target.value);
  };

  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    props.onUpdate(props.item.id, value);
  };

  return __jsx("form", {
    className: "InlineForm",
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("input", {
    className: "InlineInput",
    value: value,
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx("button", {
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Submit"));
};
function ListItem(props) {
  return __jsx("li", {
    className: "ListItem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("div", {
    className: "Todo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("button", {
    className: "ActionButton",
    onClick: function onClick() {
      return props.todo.completed ? props.onUndo(props.todo.id) : props.onCompleted(props.todo.id);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__["FiCheckCircle"], {
    size: 16,
    color: props.todo.completed ? '#9de4b5' : '#04060b',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  })), __jsx("div", {
    style: {
      display: 'flex',
      width: '100%',
      justifyContent: 'space-between',
      marginLeft: 8
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx("div", {
    className: "InlineContent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, props.todo.completed ? __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx("b", {
    style: {
      color: '#9de4b5'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "Completed!"), ' ', __jsx("span", {
    className: "strike",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, props.todo.task)) : __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, props.todo.task)), __jsx("div", {
    className: "InlineActions",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx("button", {
    className: "ActionButton",
    onClick: function onClick() {
      return props.onRemove(props.todo.id);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__["FiTrash2"], {
    size: 16,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  })), __jsx("button", {
    className: "ActionButton",
    disabled: props.todo.completed,
    onClick: function onClick() {
      return props.onEdit(props.todo.id);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__["FiEdit3"], {
    size: 16,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }))))));
}

/***/ }),

/***/ "./src/list-view.tsx":
/*!***************************!*\
  !*** ./src/list-view.tsx ***!
  \***************************/
/*! exports provided: ListView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListView", function() { return ListView; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reach_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reach/tabs */ "./node_modules/@reach/tabs/dist/tabs.esm.js");
/* harmony import */ var _reach_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reach/dialog */ "./node_modules/@reach/dialog/dist/dialog.esm.js");
/* harmony import */ var _list_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-item */ "./src/list-item.tsx");
/* harmony import */ var _todo_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todo-form */ "./src/todo-form.tsx");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reducer */ "./src/reducer.ts");

var _jsxFileName = "/Users/charlespeters/Code/basic-react-todo-list/src/list-view.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];







function List(_ref) {
  var todos = _ref.todos,
      dispatch = _ref.dispatch;
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("ul", {
    className: "List",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, todos.length > 0 ? todos.map(function (t) {
    return __jsx(_list_item__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: t.id,
      todo: t,
      onEdit: function onEdit(id) {
        return dispatch({
          type: _reducer__WEBPACK_IMPORTED_MODULE_6__["TodoActions"].EDIT_TODO,
          id: id
        });
      },
      onRemove: function onRemove(id) {
        return dispatch({
          type: _reducer__WEBPACK_IMPORTED_MODULE_6__["TodoActions"].REMOVE_TODO,
          id: id
        });
      },
      onUpdate: function onUpdate(id, task) {
        return dispatch({
          type: _reducer__WEBPACK_IMPORTED_MODULE_6__["TodoActions"].UPDATE_TODO,
          id: id,
          payload: task
        });
      },
      onUndo: function onUndo(id) {
        return dispatch({
          type: _reducer__WEBPACK_IMPORTED_MODULE_6__["TodoActions"].MARK_AS_NOT_COMPLETED,
          id: id
        });
      },
      onCompleted: function onCompleted(id) {
        return dispatch({
          type: _reducer__WEBPACK_IMPORTED_MODULE_6__["TodoActions"].MARK_AS_COMPLETED,
          id: id
        });
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    });
  }) : __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Nothing to see here!"))), __jsx("div", {
    className: "ActionTray",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("button", {
    className: "Button",
    type: "button",
    onClick: function onClick() {
      return dispatch({
        type: _reducer__WEBPACK_IMPORTED_MODULE_6__["TodoActions"].OPEN_MODAL
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Add New")));
}

var ListView = function ListView() {
  var _React$useReducer = react__WEBPACK_IMPORTED_MODULE_1__["useReducer"](_reducer__WEBPACK_IMPORTED_MODULE_6__["reducer"], {
    modalOpen: false,
    selected: null,
    currentFilter: "All",
    todos: _reducer__WEBPACK_IMPORTED_MODULE_6__["INITIAL_LIST"]
  }),
      _React$useReducer2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useReducer, 2),
      state = _React$useReducer2[0],
      dispatch = _React$useReducer2[1];

  var completed = react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](function () {
    return state.todos.filter(function (todo) {
      return todo.completed;
    });
  }, [state]);
  var incompleted = react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](function () {
    return state.todos.filter(function (todo) {
      return !todo.completed;
    });
  }, [state]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx(_reach_tabs__WEBPACK_IMPORTED_MODULE_2__["Tabs"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx(_reach_tabs__WEBPACK_IMPORTED_MODULE_2__["TabList"], {
    className: "Filters",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx(_reach_tabs__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "All"), __jsx(_reach_tabs__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "Completed"), __jsx(_reach_tabs__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "Todo")), __jsx(_reach_tabs__WEBPACK_IMPORTED_MODULE_2__["TabPanels"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx(_reach_tabs__WEBPACK_IMPORTED_MODULE_2__["TabPanel"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx(List, {
    dispatch: dispatch,
    todos: state.todos,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  })), __jsx(_reach_tabs__WEBPACK_IMPORTED_MODULE_2__["TabPanel"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx(List, {
    dispatch: dispatch,
    todos: completed,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  })), __jsx(_reach_tabs__WEBPACK_IMPORTED_MODULE_2__["TabPanel"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx(List, {
    dispatch: dispatch,
    todos: incompleted,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  })))), __jsx(_reach_dialog__WEBPACK_IMPORTED_MODULE_3__["Dialog"], {
    isOpen: state.modalOpen,
    onDismiss: function onDismiss() {
      return dispatch({
        type: _reducer__WEBPACK_IMPORTED_MODULE_6__["TodoActions"].DISMISS_MODAL
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx(_todo_form__WEBPACK_IMPORTED_MODULE_5__["default"], {
    value: state.selected !== null ? state.selected.task : null,
    onSubmit: function onSubmit(value) {
      return state.selected !== null ? dispatch({
        type: _reducer__WEBPACK_IMPORTED_MODULE_6__["TodoActions"].UPDATE_TODO,
        payload: value,
        id: state.selected.id
      }) : dispatch({
        type: _reducer__WEBPACK_IMPORTED_MODULE_6__["TodoActions"].ADD_TODO,
        payload: value
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  })));
};

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IndexPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _list_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../list-view */ "./src/list-view.tsx");
var _jsxFileName = "/Users/charlespeters/Code/basic-react-todo-list/src/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];



function IndexPage() {
  return __jsx("div", {
    className: "Container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Basic Todo List")), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Tasks"), __jsx(_list_view__WEBPACK_IMPORTED_MODULE_2__["ListView"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }));
}

/***/ }),

/***/ "./src/reducer.ts":
/*!************************!*\
  !*** ./src/reducer.ts ***!
  \************************/
/*! exports provided: TodoActions, INITIAL_LIST, GLOBAL_TODOS, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoActions", function() { return TodoActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_LIST", function() { return INITIAL_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLOBAL_TODOS", function() { return GLOBAL_TODOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var TodoActions;

(function (TodoActions) {
  TodoActions["ADD_TODO"] = "ADD_TODO";
  TodoActions["EDIT_TODO"] = "EDIT_TODO";
  TodoActions["UPDATE_TODO"] = "UPDATE_TODO";
  TodoActions["REMOVE_TODO"] = "REMOVE_TODO";
  TodoActions["MARK_AS_COMPLETED"] = "MARK_AS_COMPLETED";
  TodoActions["MARK_AS_NOT_COMPLETED"] = "MARK_AS_NOT_COMPLETED";
  TodoActions["OPEN_MODAL"] = "OPEN_MODAL";
  TodoActions["DISMISS_MODAL"] = "DISMISS_MODAL";
})(TodoActions || (TodoActions = {}));

var INITIAL_LIST = [{
  id: Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])(),
  completed: false,
  task: "get lunch",
  editing: false
}, {
  id: Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])(),
  completed: false,
  task: "Check Flight",
  editing: false
}];
var GLOBAL_TODOS = {
  todos: [].concat(INITIAL_LIST)
};
var reducer = Object(immer__WEBPACK_IMPORTED_MODULE_1__["default"])(function (draft, action) {
  switch (action.type) {
    case TodoActions.ADD_TODO:
      {
        if (action.payload.length > 0) {
          draft.todos.unshift({
            task: action.payload,
            id: Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])(),
            completed: false,
            editing: false
          });
        }

        draft.modalOpen = false;
        break;
      }

    case TodoActions.UPDATE_TODO:
      {
        var index = draft.todos.findIndex(function (element) {
          return element.id === action.id;
        });
        draft.todos[index] = _objectSpread({}, draft.todos[index], {
          editing: false,
          task: action.payload
        });
        draft.selected = null;
        draft.modalOpen = false;
        break;
      }

    case TodoActions.REMOVE_TODO:
      {
        var _index = draft.todos.findIndex(function (element) {
          return element.id === action.id;
        });

        draft.todos.splice(_index, 1);
        break;
      }

    case TodoActions.EDIT_TODO:
      {
        var _index2 = draft.todos.findIndex(function (element) {
          return element.id === action.id;
        });

        draft.modalOpen = true;
        draft.todos[_index2] = _objectSpread({}, draft.todos[_index2], {
          editing: true
        });
        draft.selected = {
          task: draft.todos[_index2].task,
          id: draft.todos[_index2].id
        };
        break;
      }

    case TodoActions.MARK_AS_NOT_COMPLETED:
      {
        var _index3 = draft.todos.findIndex(function (element) {
          return element.id === action.id;
        });

        draft.todos[_index3] = _objectSpread({}, draft.todos[_index3], {
          completed: false
        });
        break;
      }

    case TodoActions.MARK_AS_COMPLETED:
      {
        var _index4 = draft.todos.findIndex(function (element) {
          return element.id === action.id;
        });

        draft.todos[_index4] = _objectSpread({}, draft.todos[_index4], {
          completed: true
        });
        break;
      }

    case TodoActions.DISMISS_MODAL:
      {
        draft.modalOpen = false;
        draft.selected = null;
        break;
      }

    case TodoActions.OPEN_MODAL:
      {
        draft.modalOpen = true;
        break;
      }
  }
});

/***/ }),

/***/ "./src/todo-form.tsx":
/*!***************************!*\
  !*** ./src/todo-form.tsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TodoForm; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/Users/charlespeters/Code/basic-react-todo-list/src/todo-form.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];

function TodoForm(props) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__["useState"](props.value === null ? "" : props.value),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  var handleChange = function handleChange(event) {
    setValue(event.target.value);
  };

  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    props.onSubmit(value);
    setValue("");
  };

  return __jsx("form", {
    className: "Form",
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("input", {
    className: "Input",
    value: value,
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), __jsx("div", {
    className: "Tray",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("button", {
    className: "Button",
    type: "submit",
    disabled: value.length === 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Submit")));
}

/***/ }),

/***/ 1:
/*!************************************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F&absolutePagePath=%2FUsers%2Fcharlespeters%2FCode%2Fbasic-react-todo-list%2Fsrc%2Fpages%2Findex.tsx&hotRouterUpdates=true ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F&absolutePagePath=%2FUsers%2Fcharlespeters%2FCode%2Fbasic-react-todo-list%2Fsrc%2Fpages%2Findex.tsx&hotRouterUpdates=true! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fcharlespeters%2FCode%2Fbasic-react-todo-list%2Fsrc%2Fpages%2Findex.tsx&hotRouterUpdates=true!./");


/***/ }),

/***/ "dll-reference dll_2adc2403d89adc16ead0":
/*!*******************************************!*\
  !*** external "dll_2adc2403d89adc16ead0" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_2adc2403d89adc16ead0;

/***/ })

},[[1,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=index.js.map