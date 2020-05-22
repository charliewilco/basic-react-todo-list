module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fi */ "react-icons/fi");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/charlespeters/Code/basic-react-todo-list/src/list-item.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];


const EditItem = function (props) {
  const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](props.item.task);

  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleSubmit = event => {
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
    onClick: () => props.todo.completed ? props.onUndo(props.todo.id) : props.onCompleted(props.todo.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_1__["FiCheckCircle"], {
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
    onClick: () => props.onRemove(props.todo.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_1__["FiTrash2"], {
    size: 16,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  })), __jsx("button", {
    className: "ActionButton",
    disabled: props.todo.completed,
    onClick: () => props.onEdit(props.todo.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_1__["FiEdit3"], {
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reach_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reach/tabs */ "@reach/tabs");
/* harmony import */ var _reach_tabs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reach_tabs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reach_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reach/dialog */ "@reach/dialog");
/* harmony import */ var _reach_dialog__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reach_dialog__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _list_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-item */ "./src/list-item.tsx");
/* harmony import */ var _todo_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todo-form */ "./src/todo-form.tsx");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducer */ "./src/reducer.ts");
var _jsxFileName = "/Users/charlespeters/Code/basic-react-todo-list/src/list-view.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];







function List({
  todos,
  dispatch
}) {
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
  }, todos.length > 0 ? todos.map(t => __jsx(_list_item__WEBPACK_IMPORTED_MODULE_3__["default"], {
    key: t.id,
    todo: t,
    onEdit: id => dispatch({
      type: _reducer__WEBPACK_IMPORTED_MODULE_5__["TodoActions"].EDIT_TODO,
      id
    }),
    onRemove: id => dispatch({
      type: _reducer__WEBPACK_IMPORTED_MODULE_5__["TodoActions"].REMOVE_TODO,
      id
    }),
    onUpdate: (id, task) => dispatch({
      type: _reducer__WEBPACK_IMPORTED_MODULE_5__["TodoActions"].UPDATE_TODO,
      id,
      payload: task
    }),
    onUndo: id => dispatch({
      type: _reducer__WEBPACK_IMPORTED_MODULE_5__["TodoActions"].MARK_AS_NOT_COMPLETED,
      id
    }),
    onCompleted: id => dispatch({
      type: _reducer__WEBPACK_IMPORTED_MODULE_5__["TodoActions"].MARK_AS_COMPLETED,
      id
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  })) : __jsx("div", {
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
    onClick: () => dispatch({
      type: _reducer__WEBPACK_IMPORTED_MODULE_5__["TodoActions"].OPEN_MODAL
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Add New")));
}

const ListView = function () {
  const [state, dispatch] = react__WEBPACK_IMPORTED_MODULE_0__["useReducer"](_reducer__WEBPACK_IMPORTED_MODULE_5__["reducer"], {
    modalOpen: false,
    selected: null,
    currentFilter: "All",
    todos: _reducer__WEBPACK_IMPORTED_MODULE_5__["INITIAL_LIST"]
  });
  const completed = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](() => state.todos.filter(todo => todo.completed), [state]);
  const incompleted = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](() => state.todos.filter(todo => !todo.completed), [state]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx(_reach_tabs__WEBPACK_IMPORTED_MODULE_1__["Tabs"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx(_reach_tabs__WEBPACK_IMPORTED_MODULE_1__["TabList"], {
    className: "Filters",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx(_reach_tabs__WEBPACK_IMPORTED_MODULE_1__["Tab"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "All"), __jsx(_reach_tabs__WEBPACK_IMPORTED_MODULE_1__["Tab"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "Completed"), __jsx(_reach_tabs__WEBPACK_IMPORTED_MODULE_1__["Tab"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "Todo")), __jsx(_reach_tabs__WEBPACK_IMPORTED_MODULE_1__["TabPanels"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx(_reach_tabs__WEBPACK_IMPORTED_MODULE_1__["TabPanel"], {
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
  })), __jsx(_reach_tabs__WEBPACK_IMPORTED_MODULE_1__["TabPanel"], {
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
  })), __jsx(_reach_tabs__WEBPACK_IMPORTED_MODULE_1__["TabPanel"], {
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
  })))), __jsx(_reach_dialog__WEBPACK_IMPORTED_MODULE_2__["Dialog"], {
    isOpen: state.modalOpen,
    onDismiss: () => dispatch({
      type: _reducer__WEBPACK_IMPORTED_MODULE_5__["TodoActions"].DISMISS_MODAL
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx(_todo_form__WEBPACK_IMPORTED_MODULE_4__["default"], {
    value: state.selected !== null ? state.selected.task : null,
    onSubmit: value => state.selected !== null ? dispatch({
      type: _reducer__WEBPACK_IMPORTED_MODULE_5__["TodoActions"].UPDATE_TODO,
      payload: value,
      id: state.selected.id
    }) : dispatch({
      type: _reducer__WEBPACK_IMPORTED_MODULE_5__["TodoActions"].ADD_TODO,
      payload: value
    }),
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
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
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



let TodoActions;

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

const INITIAL_LIST = [{
  id: Object(uuid__WEBPACK_IMPORTED_MODULE_1__["v4"])(),
  completed: false,
  task: "get lunch",
  editing: false
}, {
  id: Object(uuid__WEBPACK_IMPORTED_MODULE_1__["v4"])(),
  completed: false,
  task: "Check Flight",
  editing: false
}];
const GLOBAL_TODOS = {
  todos: [...INITIAL_LIST]
};
const reducer = immer__WEBPACK_IMPORTED_MODULE_0___default()((draft, action) => {
  switch (action.type) {
    case TodoActions.ADD_TODO:
      {
        if (action.payload.length > 0) {
          draft.todos.unshift({
            task: action.payload,
            id: Object(uuid__WEBPACK_IMPORTED_MODULE_1__["v4"])(),
            completed: false,
            editing: false
          });
        }

        draft.modalOpen = false;
        break;
      }

    case TodoActions.UPDATE_TODO:
      {
        const index = draft.todos.findIndex(element => element.id === action.id);
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
        const index = draft.todos.findIndex(element => element.id === action.id);
        draft.todos.splice(index, 1);
        break;
      }

    case TodoActions.EDIT_TODO:
      {
        const index = draft.todos.findIndex(element => element.id === action.id);
        draft.modalOpen = true;
        draft.todos[index] = _objectSpread({}, draft.todos[index], {
          editing: true
        });
        draft.selected = {
          task: draft.todos[index].task,
          id: draft.todos[index].id
        };
        break;
      }

    case TodoActions.MARK_AS_NOT_COMPLETED:
      {
        const index = draft.todos.findIndex(element => element.id === action.id);
        draft.todos[index] = _objectSpread({}, draft.todos[index], {
          completed: false
        });
        break;
      }

    case TodoActions.MARK_AS_COMPLETED:
      {
        const index = draft.todos.findIndex(element => element.id === action.id);
        draft.todos[index] = _objectSpread({}, draft.todos[index], {
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/charlespeters/Code/basic-react-todo-list/src/todo-form.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

function TodoForm(props) {
  const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](props.value === null ? "" : props.value);

  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleSubmit = event => {
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

/***/ 3:
/*!***********************************!*\
  !*** multi ./src/pages/index.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/charlespeters/Code/basic-react-todo-list/src/pages/index.tsx */"./src/pages/index.tsx");


/***/ }),

/***/ "@reach/dialog":
/*!********************************!*\
  !*** external "@reach/dialog" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@reach/dialog");

/***/ }),

/***/ "@reach/tabs":
/*!******************************!*\
  !*** external "@reach/tabs" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@reach/tabs");

/***/ }),

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-icons/fi":
/*!*********************************!*\
  !*** external "react-icons/fi" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fi");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map