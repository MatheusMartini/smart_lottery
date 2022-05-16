"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/layout/Navbar.tsx":
/*!******************************************!*\
  !*** ./src/components/layout/Navbar.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Navbar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ConnectWallet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ConnectWallet */ \"./src/components/ConnectWallet.tsx\");\n/* harmony import */ var _Participate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Participate */ \"./src/components/Participate.tsx\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Navbar() {\n    _s();\n    var ref = _slicedToArray(useState(null), 2), activeLink = ref[0], setActiveLink = ref[1];\n    var ref1 = _slicedToArray(useState(false), 2), scrollActive = ref1[0], setScrollActive = ref1[1];\n    useEffect(function() {\n        window.addEventListener(\"scroll\", function() {\n            setScrollActive(window.scrollY > 20);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex bg-gray-200 ...\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-none ...\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"flex flex-row \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"text-black text-center px-4 py-2 m-2 \",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/\",\n                                    children: \"Home\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/macm1/Desktop/WWW/smart_lottery/src/components/layout/Navbar.tsx\",\n                                    lineNumber: 25,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/macm1/Desktop/WWW/smart_lottery/src/components/layout/Navbar.tsx\",\n                                lineNumber: 24,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"text-black text-center px-4 py-2 m-2\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/about\",\n                                    children: \"Sobre\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/macm1/Desktop/WWW/smart_lottery/src/components/layout/Navbar.tsx\",\n                                    lineNumber: 28,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/macm1/Desktop/WWW/smart_lottery/src/components/layout/Navbar.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"text-black text-center px-4 py-2 m-2\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/contact\",\n                                    children: \"Contato\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/macm1/Desktop/WWW/smart_lottery/src/components/layout/Navbar.tsx\",\n                                    lineNumber: 31,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/macm1/Desktop/WWW/smart_lottery/src/components/layout/Navbar.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"text-black text-center px-4 py-2 m-2\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: \"Branch Dev\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/macm1/Desktop/WWW/smart_lottery/src/components/layout/Navbar.tsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/macm1/Desktop/WWW/smart_lottery/src/components/layout/Navbar.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/macm1/Desktop/WWW/smart_lottery/src/components/layout/Navbar.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/macm1/Desktop/WWW/smart_lottery/src/components/layout/Navbar.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/macm1/Desktop/WWW/smart_lottery/src/components/layout/Navbar.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-auto ...\"\n            }, void 0, false, {\n                fileName: \"/Users/macm1/Desktop/WWW/smart_lottery/src/components/layout/Navbar.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Participate__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/macm1/Desktop/WWW/smart_lottery/src/components/layout/Navbar.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ConnectWallet__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/macm1/Desktop/WWW/smart_lottery/src/components/layout/Navbar.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/macm1/Desktop/WWW/smart_lottery/src/components/layout/Navbar.tsx\",\n                lineNumber: 43,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/macm1/Desktop/WWW/smart_lottery/src/components/layout/Navbar.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n};\n_s(Navbar, \"e+5qmzF+qMTjop9UoFmYclncTRQ=\");\n_c = Navbar;\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvTmF2YmFyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTRCO0FBQ2dCO0FBQ0o7O0FBSXpCLFNBQVNHLE1BQU0sR0FBRzs7SUFFL0IsSUFBb0NDLEdBQWMsa0JBQWRBLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBM0NDLFVBQVUsR0FBbUJELEdBQWMsR0FBakMsRUFBRUUsYUFBYSxHQUFJRixHQUFjLEdBQWxCO0lBQ2hDLElBQXdDQSxJQUFlLGtCQUFmQSxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQWhERyxZQUFZLEdBQXFCSCxJQUFlLEdBQXBDLEVBQUVJLGVBQWUsR0FBSUosSUFBZSxHQUFuQjtJQUNwQ0ssU0FBUyxDQUFDLFdBQU07UUFDZEMsTUFBTSxDQUFDQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsV0FBTTtZQUN0Q0gsZUFBZSxDQUFDRSxNQUFNLENBQUNFLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQztTQUN0QyxDQUFDLENBQUM7S0FDSixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAscUJBQ0UsOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLHNCQUFzQjs7MEJBRW5DLDhEQUFDRCxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsZUFBZTswQkFFNUIsNEVBQUNELEtBQUc7OEJBQ0YsNEVBQUNFLElBQUU7d0JBQUNELFNBQVMsRUFBQyxnQkFBZ0I7OzBDQUM1Qiw4REFBQ0UsSUFBRTtnQ0FBQ0YsU0FBUyxFQUFDLHVDQUF1QzswQ0FDbkQsNEVBQUNkLGtEQUFJO29DQUFDaUIsSUFBSSxFQUFDLEdBQUc7OENBQUMsTUFBSTs7Ozs7d0NBQU87Ozs7O29DQUN2QjswQ0FDTCw4REFBQ0QsSUFBRTtnQ0FBQ0YsU0FBUyxFQUFDLHNDQUFzQzswQ0FDbEQsNEVBQUNkLGtEQUFJO29DQUFDaUIsSUFBSSxFQUFDLFFBQVE7OENBQUMsT0FBSzs7Ozs7d0NBQU87Ozs7O29DQUM3QjswQ0FDTCw4REFBQ0QsSUFBRTtnQ0FBQ0YsU0FBUyxFQUFDLHNDQUFzQzswQ0FDbEQsNEVBQUNkLGtEQUFJO29DQUFDaUIsSUFBSSxFQUFDLFVBQVU7OENBQUMsU0FBTzs7Ozs7d0NBQU87Ozs7O29DQUNqQzswQ0FDTCw4REFBQ0QsSUFBRTtnQ0FBQ0YsU0FBUyxFQUFDLHNDQUFzQzswQ0FDbEQsNEVBQUNJLEdBQUM7OENBQUMsWUFBVTs7Ozs7d0NBQUk7Ozs7O29DQUNkOzs7Ozs7NEJBRUY7Ozs7O3dCQUNEOzs7OztvQkFFRjswQkFFTiw4REFBQ0wsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLGVBQWU7Ozs7O29CQUFPOzBCQUNuQyw4REFBQ0QsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLGVBQWU7O2tDQUM1Qiw4REFBQ1osb0RBQVc7Ozs7NEJBQUU7a0NBQ2QsOERBQUNELHNEQUFhOzs7OzRCQUFFOzs7Ozs7b0JBQ1o7Ozs7OztZQUNKLENBRVA7Q0FDRjtHQTNDdUJFLE1BQU07QUFBTkEsS0FBQUEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvTmF2YmFyLnRzeD83N2I5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBDb25uZWN0V2FsbGV0IGZyb20gJy4uL0Nvbm5lY3RXYWxsZXQnXG5pbXBvcnQgUGFydGljaXBhdGUgZnJvbSAnLi4vUGFydGljaXBhdGUnXG5pbXBvcnQgeyBMaW5rIGFzIExpbmtTY3JvbGwgfSBmcm9tIFwicmVhY3Qtc2Nyb2xsXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2YmFyKCkge1xuXG4gIGNvbnN0IFthY3RpdmVMaW5rLCBzZXRBY3RpdmVMaW5rXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbc2Nyb2xsQWN0aXZlLCBzZXRTY3JvbGxBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcbiAgICAgIHNldFNjcm9sbEFjdGl2ZSh3aW5kb3cuc2Nyb2xsWSA+IDIwKTtcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGJnLWdyYXktMjAwIC4uLlwiPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtbm9uZSAuLi5cIj5cbiAgICAgICAgXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyAnPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRleHQtYmxhY2sgdGV4dC1jZW50ZXIgcHgtNCBweS0yIG0tMiBcIj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5Ib21lPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrIHRleHQtY2VudGVyIHB4LTQgcHktMiBtLTJcIj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlNvYnJlPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrIHRleHQtY2VudGVyIHB4LTQgcHktMiBtLTJcIj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb250YWN0XCI+Q29udGF0bzwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidGV4dC1ibGFjayB0ZXh0LWNlbnRlciBweC00IHB5LTIgbS0yXCI+XG4gICAgICAgICAgICAgIDxwPkJyYW5jaCBEZXY8L3A+XG4gICAgICAgICAgICA8L2xpPlxuICBcbiAgICAgICAgICA8L3VsPiBcbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvZGl2PlxuICAgICAgXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtYXV0byAuLi5cIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cnPlxuICAgICAgICAgIDxQYXJ0aWNpcGF0ZS8+XG4gICAgICAgICAgPENvbm5lY3RXYWxsZXQvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBcbiAgKVxufVxuIl0sIm5hbWVzIjpbIkxpbmsiLCJDb25uZWN0V2FsbGV0IiwiUGFydGljaXBhdGUiLCJOYXZiYXIiLCJ1c2VTdGF0ZSIsImFjdGl2ZUxpbmsiLCJzZXRBY3RpdmVMaW5rIiwic2Nyb2xsQWN0aXZlIiwic2V0U2Nyb2xsQWN0aXZlIiwidXNlRWZmZWN0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNjcm9sbFkiLCJkaXYiLCJjbGFzc05hbWUiLCJ1bCIsImxpIiwiaHJlZiIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/layout/Navbar.tsx\n");

/***/ })

});