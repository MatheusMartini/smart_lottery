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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Navbar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ConnectWallet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ConnectWallet */ \"./src/components/ConnectWallet.tsx\");\n/* harmony import */ var _Participate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Participate */ \"./src/components/Participate.tsx\");\n/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-scroll */ \"./node_modules/react-scroll/modules/index.js\");\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Navbar() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), activeLink = ref[0], setActiveLink = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), scrollActive = ref1[0], setScrollActive = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        window.addEventListener(\"scroll\", function() {\n            setScrollActive(window.scrollY > 20);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex bg-gray-200 ...\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-none ...\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"flex flex-row \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"text-black text-center px-4 py-2 m-2 \",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/\",\n                                    children: \"Home\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/macm1/Desktop/WWW/smart_lottery/src/components/layout/Navbar.tsx\",\n                                    lineNumber: 26,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/macm1/Desktop/WWW/smart_lottery/src/components/layout/Navbar.tsx\",\n                                lineNumber: 25,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"text-black text-center px-4 py-2 m-2\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/about\",\n                                    children: \"Sobre\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/macm1/Desktop/WWW/smart_lottery/src/components/layout/Navbar.tsx\",\n                                    lineNumber: 29,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/macm1/Desktop/WWW/smart_lottery/src/components/layout/Navbar.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"text-black text-center px-4 py-2 m-2\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/contact\",\n                                    children: \"Contato\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/macm1/Desktop/WWW/smart_lottery/src/components/layout/Navbar.tsx\",\n                                    lineNumber: 32,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/macm1/Desktop/WWW/smart_lottery/src/components/layout/Navbar.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"text-black text-center px-4 py-2 m-2\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: \"Branch Dev\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/macm1/Desktop/WWW/smart_lottery/src/components/layout/Navbar.tsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/macm1/Desktop/WWW/smart_lottery/src/components/layout/Navbar.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_5__.Link, {\n                                activeClass: \"active\",\n                                to: \"about\",\n                                spy: true,\n                                smooth: true,\n                                duration: 1000,\n                                onSetActive: function() {\n                                    setActiveLink(\"contact\");\n                                },\n                                className: \"px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative\" + (activeLink === \"about\" ? \" text-orange-500 animation-active \" : \" text-black-500 hover:text-orange-500 a\"),\n                                children: \"About\"\n                            }, void 0, false, {\n                                fileName: \"/Users/macm1/Desktop/WWW/smart_lottery/src/components/layout/Navbar.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/macm1/Desktop/WWW/smart_lottery/src/components/layout/Navbar.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/macm1/Desktop/WWW/smart_lottery/src/components/layout/Navbar.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/macm1/Desktop/WWW/smart_lottery/src/components/layout/Navbar.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-auto ...\"\n            }, void 0, false, {\n                fileName: \"/Users/macm1/Desktop/WWW/smart_lottery/src/components/layout/Navbar.tsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Participate__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/macm1/Desktop/WWW/smart_lottery/src/components/layout/Navbar.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ConnectWallet__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/macm1/Desktop/WWW/smart_lottery/src/components/layout/Navbar.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/macm1/Desktop/WWW/smart_lottery/src/components/layout/Navbar.tsx\",\n                lineNumber: 61,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/macm1/Desktop/WWW/smart_lottery/src/components/layout/Navbar.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n};\n_s(Navbar, \"BR7CYm+yJ7fdylwYc2YVrWcU9Ac=\");\n_c = Navbar;\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvTmF2YmFyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFBbUQ7QUFDdkI7QUFDZ0I7QUFDSjtBQUNVOztBQUduQyxTQUFTTyxNQUFNLEdBQUc7O0lBRS9CLElBQW9DTixHQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxDQUFDLEVBVHBELFVBU21CLEdBQW1CQSxHQUFjLEdBQWpDLEVBVG5CLGFBU2tDLEdBQUlBLEdBQWMsR0FBbEI7SUFDaEMsSUFBd0NBLElBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFWekQsWUFVcUIsR0FBcUJBLElBQWUsR0FBcEMsRUFWckIsZUFVc0MsR0FBSUEsSUFBZSxHQUFuQjtJQUNwQ0MsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2RVLE1BQU0sQ0FBQ0MsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFdBQU07WUFDdENGLGVBQWUsQ0FBQ0MsTUFBTSxDQUFDRSxPQUFPLEdBQUcsRUFBRSxDQUFDLENBQUM7U0FDdEMsQ0FBQyxDQUFDO0tBQ0osRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxzQkFBc0I7OzBCQUVuQyw4REFBQ0QsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLGVBQWU7MEJBRTVCLDRFQUFDRCxLQUFHOzhCQUNGLDRFQUFDRSxJQUFFO3dCQUFDRCxTQUFTLEVBQUMsZ0JBQWdCOzswQ0FDNUIsOERBQUNFLElBQUU7Z0NBQUNGLFNBQVMsRUFBQyx1Q0FBdUM7MENBQ25ELDRFQUFDYixrREFBSTtvQ0FBQ2dCLElBQUksRUFBQyxHQUFHOzhDQUFDLE1BQUk7Ozs7O3dDQUFPOzs7OztvQ0FDdkI7MENBQ0wsOERBQUNELElBQUU7Z0NBQUNGLFNBQVMsRUFBQyxzQ0FBc0M7MENBQ2xELDRFQUFDYixrREFBSTtvQ0FBQ2dCLElBQUksRUFBQyxRQUFROzhDQUFDLE9BQUs7Ozs7O3dDQUFPOzs7OztvQ0FDN0I7MENBQ0wsOERBQUNELElBQUU7Z0NBQUNGLFNBQVMsRUFBQyxzQ0FBc0M7MENBQ2xELDRFQUFDYixrREFBSTtvQ0FBQ2dCLElBQUksRUFBQyxVQUFVOzhDQUFDLFNBQU87Ozs7O3dDQUFPOzs7OztvQ0FDakM7MENBQ0wsOERBQUNELElBQUU7Z0NBQUNGLFNBQVMsRUFBQyxzQ0FBc0M7MENBQ2xELDRFQUFDSSxHQUFDOzhDQUFDLFlBQVU7Ozs7O3dDQUFJOzs7OztvQ0FDZDswQ0FDTCw4REFBQ2QsOENBQVU7Z0NBQ1RlLFdBQVcsRUFBQyxRQUFRO2dDQUNwQkMsRUFBRSxFQUFDLE9BQU87Z0NBQ1ZDLEdBQUcsRUFBRSxJQUFJO2dDQUNUQyxNQUFNLEVBQUUsSUFBSTtnQ0FDWkMsUUFBUSxFQUFFLElBQUk7Z0NBQ2RDLFdBQVcsRUFBRSxXQUFNO29DQUNqQmpCLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztpQ0FDMUI7Z0NBQ0RPLFNBQVMsRUFDUCxxRUFBcUUsR0FDckUsQ0FBQ1IsVUFBVSxLQUFLLE9BQU8sR0FDbkIsb0NBQW9DLEdBQ3BDLHlDQUF5QyxDQUFDOzBDQUVqRCxPQUVEOzs7OztvQ0FBYTs7Ozs7OzRCQUNWOzs7Ozt3QkFDRDs7Ozs7b0JBRUY7MEJBRU4sOERBQUNPLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxlQUFlOzs7OztvQkFBTzswQkFDbkMsOERBQUNELEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxlQUFlOztrQ0FDNUIsOERBQUNYLG9EQUFXOzs7OzRCQUFFO2tDQUNkLDhEQUFDRCxzREFBYTs7Ozs0QkFBRTs7Ozs7O29CQUNaOzs7Ozs7WUFDSixDQUVQO0NBQ0Y7R0E1RHVCRyxNQUFNO0FBQU5BLEtBQUFBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L05hdmJhci50c3g/NzdiOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IENvbm5lY3RXYWxsZXQgZnJvbSAnLi4vQ29ubmVjdFdhbGxldCdcbmltcG9ydCBQYXJ0aWNpcGF0ZSBmcm9tICcuLi9QYXJ0aWNpcGF0ZSdcbmltcG9ydCB7IExpbmsgYXMgTGlua1Njcm9sbCB9IGZyb20gXCJyZWFjdC1zY3JvbGxcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZiYXIoKSB7XG5cbiAgY29uc3QgW2FjdGl2ZUxpbmssIHNldEFjdGl2ZUxpbmtdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtzY3JvbGxBY3RpdmUsIHNldFNjcm9sbEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xuICAgICAgc2V0U2Nyb2xsQWN0aXZlKHdpbmRvdy5zY3JvbGxZID4gMjApO1xuICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggYmctZ3JheS0yMDAgLi4uXCI+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1ub25lIC4uLlwiPlxuICAgICAgICBcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93ICc+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidGV4dC1ibGFjayB0ZXh0LWNlbnRlciBweC00IHB5LTIgbS0yIFwiPlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPkhvbWU8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRleHQtYmxhY2sgdGV4dC1jZW50ZXIgcHgtNCBweS0yIG0tMlwiPlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+U29icmU8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRleHQtYmxhY2sgdGV4dC1jZW50ZXIgcHgtNCBweS0yIG0tMlwiPlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbnRhY3RcIj5Db250YXRvPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrIHRleHQtY2VudGVyIHB4LTQgcHktMiBtLTJcIj5cbiAgICAgICAgICAgICAgPHA+QnJhbmNoIERldjwvcD5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8TGlua1Njcm9sbFxuICAgICAgICAgICAgICBhY3RpdmVDbGFzcz1cImFjdGl2ZVwiXG4gICAgICAgICAgICAgIHRvPVwiYWJvdXRcIlxuICAgICAgICAgICAgICBzcHk9e3RydWV9XG4gICAgICAgICAgICAgIHNtb290aD17dHJ1ZX1cbiAgICAgICAgICAgICAgZHVyYXRpb249ezEwMDB9XG4gICAgICAgICAgICAgIG9uU2V0QWN0aXZlPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0QWN0aXZlTGluayhcImNvbnRhY3RcIik7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgXCJweC00IHB5LTIgbXgtMiBjdXJzb3ItcG9pbnRlciBhbmltYXRpb24taG92ZXIgaW5saW5lLWJsb2NrIHJlbGF0aXZlXCIgK1xuICAgICAgICAgICAgICAgIChhY3RpdmVMaW5rID09PSBcImFib3V0XCJcbiAgICAgICAgICAgICAgICAgID8gXCIgdGV4dC1vcmFuZ2UtNTAwIGFuaW1hdGlvbi1hY3RpdmUgXCJcbiAgICAgICAgICAgICAgICAgIDogXCIgdGV4dC1ibGFjay01MDAgaG92ZXI6dGV4dC1vcmFuZ2UtNTAwIGFcIilcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBBYm91dFxuICAgICAgICAgICAgPC9MaW5rU2Nyb2xsPlxuICAgICAgICAgIDwvdWw+IFxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9kaXY+XG4gICAgICBcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1hdXRvIC4uLlwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyc+XG4gICAgICAgICAgPFBhcnRpY2lwYXRlLz5cbiAgICAgICAgICA8Q29ubmVjdFdhbGxldC8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIFxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkxpbmsiLCJDb25uZWN0V2FsbGV0IiwiUGFydGljaXBhdGUiLCJMaW5rU2Nyb2xsIiwiTmF2YmFyIiwiYWN0aXZlTGluayIsInNldEFjdGl2ZUxpbmsiLCJzY3JvbGxBY3RpdmUiLCJzZXRTY3JvbGxBY3RpdmUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwic2Nyb2xsWSIsImRpdiIsImNsYXNzTmFtZSIsInVsIiwibGkiLCJocmVmIiwicCIsImFjdGl2ZUNsYXNzIiwidG8iLCJzcHkiLCJzbW9vdGgiLCJkdXJhdGlvbiIsIm9uU2V0QWN0aXZlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/layout/Navbar.tsx\n");

/***/ })

});