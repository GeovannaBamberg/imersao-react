"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction HomePage() {\n    const mensagem = \"Bem vindo ao aluratTUBE!\";\n    const estilosDaHomePage = {\n        backgroundColor: \"black\",\n        color: \"white\",\n        borderRadius: \"15px\",\n        margin: \"25px\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: estilosDaHomePage,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Menu, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sala\\\\Documents\\\\imersao-react\\\\pages\\\\index.js\",\n                lineNumber: 8,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sala\\\\Documents\\\\imersao-react\\\\pages\\\\index.js\",\n                lineNumber: 9,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TimeLine, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sala\\\\Documents\\\\imersao-react\\\\pages\\\\index.js\",\n                lineNumber: 10,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\sala\\\\Documents\\\\imersao-react\\\\pages\\\\index.js\",\n        lineNumber: 7,\n        columnNumber: 9\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);\nfunction Menu() {\n    const estilosDoMenu = {\n        margin: \"25px\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: estilosDoMenu,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"VAI PORRA\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\sala\\\\Documents\\\\imersao-react\\\\pages\\\\index.js\",\n            lineNumber: 21,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\sala\\\\Documents\\\\imersao-react\\\\pages\\\\index.js\",\n        lineNumber: 20,\n        columnNumber: 9\n    }, this);\n}\nconst StyledHeader = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({\n    displayName: \"pages__StyledHeader\",\n    componentId: \"sc-31e1ad4-0\"\n})`\r\n  img{\r\n    width:80px;\r\n    height: 80px;\r\n    border-radius:50%;\r\n  }\r\n  .user-info{\r\n    display: flex;\r\n    align-items: center;\r\n    \r\n  }\r\n  `;\nfunction Header() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledHeader, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"user-info\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: `https://github.com/${_config_json__WEBPACK_IMPORTED_MODULE_1__.github}.png`\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\sala\\\\Documents\\\\imersao-react\\\\pages\\\\index.js\",\n                    lineNumber: 45,\n                    columnNumber: 13\n                }, this),\n                _config_json__WEBPACK_IMPORTED_MODULE_1__.nome,\n                _config_json__WEBPACK_IMPORTED_MODULE_1__.trabalho\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\sala\\\\Documents\\\\imersao-react\\\\pages\\\\index.js\",\n            lineNumber: 43,\n            columnNumber: 11\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\sala\\\\Documents\\\\imersao-react\\\\pages\\\\index.js\",\n        lineNumber: 42,\n        columnNumber: 9\n    }, this);\n}\nfunction TimeLine() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"TimeLine\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\sala\\\\Documents\\\\imersao-react\\\\pages\\\\index.js\",\n        lineNumber: 56,\n        columnNumber: 9\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUFvQztBQUNHO0FBQ3ZDLFNBQVNFLFdBQVc7SUFDaEIsTUFBTUMsV0FBVztJQUNqQixNQUFNQyxvQkFBbUI7UUFBQ0MsaUJBQWdCO1FBQVNDLE9BQU87UUFBU0MsY0FBYztRQUFRQyxRQUFRO0lBQU07SUFDdkcscUJBQ0ksOERBQUNDO1FBQUlDLE9BQU9OOzswQkFDWiw4REFBQ087Ozs7OzBCQUNELDhEQUFDQzs7Ozs7MEJBQ0QsOERBQUNDOzs7Ozs7Ozs7OztBQUdQO0FBRUEsaUVBQWVYLFFBQVFBLEVBQUE7QUFFdkIsU0FBU1MsT0FBTztJQUNkLE1BQU1HLGdCQUFlO1FBQUNOLFFBQVE7SUFBTTtJQUNwQyxxQkFDSSw4REFBQ0M7UUFBSUMsT0FBT0k7a0JBQ1IsNEVBQUNDO3NCQUFHOzs7Ozs7Ozs7OztBQUdkO0FBRUEsTUFBTUMsZUFBZWYsdUVBQVU7OztFQUFBLENBQUM7QUFhaEM7SUFFRTtrQkFFTTtZQUFTaUIsV0FBVTs7Ozs7Ozs7O2dCQUdoQmxCLE9BQU9zQixFQUFBQSw2REFBSTtnQkFDWHRCLE9BQU91QixRQUFROzs7Ozs7Ozs7Ozs7QUFNMUI7QUFDQSxTQUFTVixXQUFXO0lBQ2xCLHFCQUNJLFFBQUNKO2tCQUFJOzs7Ozs7QUFFWCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi4vY29uZmlnLmpzb25cIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XHJcbiAgICBjb25zdCBtZW5zYWdlbSA9ICdCZW0gdmluZG8gYW8gYWx1cmF0VFVCRSEnXHJcbiAgICBjb25zdCBlc3RpbG9zRGFIb21lUGFnZSA9e2JhY2tncm91bmRDb2xvcjpcImJsYWNrXCIsIGNvbG9yOiAnd2hpdGUnLCBib3JkZXJSYWRpdXM6ICcxNXB4JywgbWFyZ2luOiAnMjVweCd9O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHN0eWxlPXtlc3RpbG9zRGFIb21lUGFnZX0+XHJcbiAgICAgICAgPE1lbnUvPlxyXG4gICAgICAgIDxIZWFkZXIvPlxyXG4gICAgICAgIDxUaW1lTGluZS8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlXHJcblxyXG4gIGZ1bmN0aW9uIE1lbnUoKSB7XHJcbiAgICBjb25zdCBlc3RpbG9zRG9NZW51ID17bWFyZ2luOiAnMjVweCd9O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHN0eWxlPXtlc3RpbG9zRG9NZW51fT5cclxuICAgICAgICAgICAgPGgxPlZBSSBQT1JSQTwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICBjb25zdCBTdHlsZWRIZWFkZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGltZ3tcclxuICAgIHdpZHRoOjgwcHg7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOjUwJTtcclxuICB9XHJcbiAgLnVzZXItaW5mb3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgXHJcbiAgfVxyXG4gIGA7XHJcblxyXG4gIGZ1bmN0aW9uIEhlYWRlcigpIHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxTdHlsZWRIZWFkZXIgPlxyXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidXNlci1pbmZvXCI+XHJcbiAgICAgICAgICAgIHsvKjxpbWcgc3JjPVwiYmFubmVyXCIqL31cclxuICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL2dpdGh1Yi5jb20vJHtjb25maWcuZ2l0aHVifS5wbmdgfS8+XHJcbiAgICAgICAgICAgIHtjb25maWcubm9tZX1cclxuICAgICAgICAgICAge2NvbmZpZy50cmFiYWxob31cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgPC9TdHlsZWRIZWFkZXI+XHJcblxyXG4gICAgKVxyXG4gIH1cclxuICBmdW5jdGlvbiBUaW1lTGluZSgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5UaW1lTGluZTwvZGl2PlxyXG4gICAgKVxyXG4gIH0iXSwibmFtZXMiOlsiY29uZmlnIiwic3R5bGVkIiwiSG9tZVBhZ2UiLCJtZW5zYWdlbSIsImVzdGlsb3NEYUhvbWVQYWdlIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJib3JkZXJSYWRpdXMiLCJtYXJnaW4iLCJkaXYiLCJzdHlsZSIsIk1lbnUiLCJIZWFkZXIiLCJUaW1lTGluZSIsImVzdGlsb3NEb01lbnUiLCJoMSIsIlN0eWxlZEhlYWRlciIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJnaXRodWIiLCJub21lIiwidHJhYmFsaG8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ "./config.json":
/*!*********************!*\
  !*** ./config.json ***!
  \*********************/
/***/ ((module) => {

module.exports = JSON.parse('{"nome":"Geovanna Bamberg","trabalho":"estudante","github":"GeovannaBamberg"}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();