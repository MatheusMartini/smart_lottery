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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Navbar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-scroll */ \"./node_modules/react-scroll/modules/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _s = $RefreshSig$();\nfunction Navbar() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), activeLink = ref[0], setActiveLink = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), scrollActive = ref1[0], setScrollActive = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        window.addEventListener(\"scroll\", function() {\n            setScrollActive(window.scrollY > 20);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"fixed top-0 w-full  z-30 bg-white-500 transition-all \" + (scrollActive ? \" shadow-md pt-0\" : \" pt-4\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            className: \"max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-start-1 col-end-2 flex items-center\"\n                }, void 0, false, {\n                    fileName: \"/Users/macm1/Desktop/WWW/smart_lottery/src/components/layout/Navbar.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"hidden lg:flex col-start-4 col-end-8 text-black-500 items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_1__.Link, {\n                            activeClass: \"active\",\n                            to: \"about\",\n                            spy: true,\n                            smooth: true,\n                            duration: 1000,\n                            onSetActive: function() {\n                                setActiveLink(\"about\");\n                            },\n                            className: \"px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative\" + (activeLink === \"contact\" ? \" text-orange-500 animation-active \" : \" text-black-500 hover:text-orange-500 a\"),\n                            children: \"About\"\n                        }, void 0, false, {\n                            fileName: \"/Users/macm1/Desktop/WWW/smart_lottery/src/components/layout/Navbar.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_1__.Link, {\n                            activeClass: \"active\",\n                            to: \"contact\",\n                            spy: true,\n                            smooth: true,\n                            duration: 1000,\n                            onSetActive: function() {\n                                setActiveLink(\"about\");\n                            },\n                            className: \"px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative\" + (activeLink === \"about\" ? \" text-orange-500 animation-active \" : \" text-black-500 hover:text-orange-500 \"),\n                            children: \"Contact\"\n                        }, void 0, false, {\n                            fileName: \"/Users/macm1/Desktop/WWW/smart_lottery/src/components/layout/Navbar.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/macm1/Desktop/WWW/smart_lottery/src/components/layout/Navbar.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/macm1/Desktop/WWW/smart_lottery/src/components/layout/Navbar.tsx\",\n            lineNumber: 23,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/macm1/Desktop/WWW/smart_lottery/src/components/layout/Navbar.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n};\n_s(Navbar, \"BR7CYm+yJ7fdylwYc2YVrWcU9Ac=\");\n_c = Navbar;\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvTmF2YmFyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUdrRDtBQUNOOztBQUc3QixTQUFTSSxNQUFNLEdBQUc7O0lBQy9CLElBQW9DRCxHQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxDQUFDLEVBUnBELFVBUW1CLEdBQW1CQSxHQUFjLEdBQWpDLEVBUm5CLGFBUWtDLEdBQUlBLEdBQWMsR0FBbEI7SUFDaEMsSUFBd0NBLElBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFUekQsWUFTcUIsR0FBcUJBLElBQWUsR0FBcEMsRUFUckIsZUFTc0MsR0FBSUEsSUFBZSxHQUFuQjtJQUNwQ0QsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2RPLE1BQU0sQ0FBQ0MsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFdBQU07WUFDdENGLGVBQWUsQ0FBQ0MsTUFBTSxDQUFDRSxPQUFPLEdBQUcsRUFBRSxDQUFDLENBQUM7U0FDdEMsQ0FBQyxDQUFDO0tBQ0osRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNQLHFCQUNFLDhEQUFDQyxRQUFNO1FBQ1BDLFNBQVMsRUFDUCx1REFBdUQsR0FDdkQsQ0FBQ04sWUFBWSxHQUFHLGlCQUFpQixHQUFHLE9BQU8sQ0FBQztrQkFHOUMsNEVBQUNPLEtBQUc7WUFBQ0QsU0FBUyxFQUFDLCtFQUErRTs7OEJBQzVGLDhEQUFDRSxLQUFHO29CQUFDRixTQUFTLEVBQUMseUNBQXlDOzs7Ozt3QkFFbEQ7OEJBQ04sOERBQUNHLElBQUU7b0JBQUNILFNBQVMsRUFBQyxrRUFBbUU7O3NDQUMvRSw4REFBQ1osOENBQVU7NEJBQ1RnQixXQUFXLEVBQUMsUUFBUTs0QkFDcEJDLEVBQUUsRUFBQyxPQUFPOzRCQUNWQyxHQUFHLEVBQUUsSUFBSTs0QkFDVEMsTUFBTSxFQUFFLElBQUk7NEJBQ1pDLFFBQVEsRUFBRSxJQUFJOzRCQUNkQyxXQUFXLEVBQUUsV0FBTTtnQ0FDakJoQixhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7NkJBQ3hCOzRCQUNETyxTQUFTLEVBQ1AscUVBQXFFLEdBQ3JFLENBQUNSLFVBQVUsS0FBSyxTQUFTLEdBQ3JCLG9DQUFvQyxHQUNwQyx5Q0FBeUMsQ0FBQztzQ0FFakQsT0FFRDs7Ozs7Z0NBQWE7c0NBQ2IsOERBQUNKLDhDQUFVOzRCQUNUZ0IsV0FBVyxFQUFDLFFBQVE7NEJBQ3BCQyxFQUFFLEVBQUMsU0FBUzs0QkFDWkMsR0FBRyxFQUFFLElBQUk7NEJBQ1RDLE1BQU0sRUFBRSxJQUFJOzRCQUNaQyxRQUFRLEVBQUUsSUFBSTs0QkFDZEMsV0FBVyxFQUFFLFdBQU07Z0NBQ2pCaEIsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDOzZCQUN4Qjs0QkFDRE8sU0FBUyxFQUNQLHFFQUFxRSxHQUNyRSxDQUFDUixVQUFVLEtBQUssT0FBTyxHQUNuQixvQ0FBb0MsR0FDcEMsd0NBQXdDLENBQUM7c0NBRWhELFNBRUQ7Ozs7O2dDQUFhOzs7Ozs7d0JBRVY7Ozs7OztnQkFDRDs7Ozs7WUFDQyxDQUVSO0NBQ0Y7R0E5RHVCRCxNQUFNO0FBQU5BLEtBQUFBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L05hdmJhci50c3g/NzdiOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgQ29ubmVjdFdhbGxldCBmcm9tICcuLi9Db25uZWN0V2FsbGV0J1xuaW1wb3J0IFBhcnRpY2lwYXRlIGZyb20gJy4uL1BhcnRpY2lwYXRlJ1xuaW1wb3J0IHsgTGluayBhcyBMaW5rU2Nyb2xsIH0gZnJvbSBcInJlYWN0LXNjcm9sbFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZiYXIoKSB7XG4gIGNvbnN0IFthY3RpdmVMaW5rLCBzZXRBY3RpdmVMaW5rXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbc2Nyb2xsQWN0aXZlLCBzZXRTY3JvbGxBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcbiAgICAgIHNldFNjcm9sbEFjdGl2ZSh3aW5kb3cuc2Nyb2xsWSA+IDIwKTtcbiAgICB9KTtcbiAgfSwgW10pO1xuICByZXR1cm4gKFxuICAgIDxoZWFkZXJcbiAgICBjbGFzc05hbWU9e1xuICAgICAgXCJmaXhlZCB0b3AtMCB3LWZ1bGwgIHotMzAgYmctd2hpdGUtNTAwIHRyYW5zaXRpb24tYWxsIFwiICtcbiAgICAgIChzY3JvbGxBY3RpdmUgPyBcIiBzaGFkb3ctbWQgcHQtMFwiIDogXCIgcHQtNFwiKVxuICAgIH1cbiAgPlxuICAgIDxuYXYgY2xhc3NOYW1lPVwibWF4LXctc2NyZWVuLXhsIHB4LTYgc206cHgtOCBsZzpweC0xNiBteC1hdXRvIGdyaWQgZ3JpZC1mbG93LWNvbCBweS0zIHNtOnB5LTRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXN0YXJ0LTEgY29sLWVuZC0yIGZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIFxuICAgICAgPC9kaXY+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwiaGlkZGVuIGxnOmZsZXggY29sLXN0YXJ0LTQgY29sLWVuZC04IHRleHQtYmxhY2stNTAwICBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPExpbmtTY3JvbGxcbiAgICAgICAgICBhY3RpdmVDbGFzcz1cImFjdGl2ZVwiXG4gICAgICAgICAgdG89XCJhYm91dFwiXG4gICAgICAgICAgc3B5PXt0cnVlfVxuICAgICAgICAgIHNtb290aD17dHJ1ZX1cbiAgICAgICAgICBkdXJhdGlvbj17MTAwMH1cbiAgICAgICAgICBvblNldEFjdGl2ZT17KCkgPT4ge1xuICAgICAgICAgICAgc2V0QWN0aXZlTGluayhcImFib3V0XCIpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgIFwicHgtNCBweS0yIG14LTIgY3Vyc29yLXBvaW50ZXIgYW5pbWF0aW9uLWhvdmVyIGlubGluZS1ibG9jayByZWxhdGl2ZVwiICtcbiAgICAgICAgICAgIChhY3RpdmVMaW5rID09PSBcImNvbnRhY3RcIlxuICAgICAgICAgICAgICA/IFwiIHRleHQtb3JhbmdlLTUwMCBhbmltYXRpb24tYWN0aXZlIFwiXG4gICAgICAgICAgICAgIDogXCIgdGV4dC1ibGFjay01MDAgaG92ZXI6dGV4dC1vcmFuZ2UtNTAwIGFcIilcbiAgICAgICAgICB9XG4gICAgICAgID5cbiAgICAgICAgICBBYm91dFxuICAgICAgICA8L0xpbmtTY3JvbGw+XG4gICAgICAgIDxMaW5rU2Nyb2xsXG4gICAgICAgICAgYWN0aXZlQ2xhc3M9XCJhY3RpdmVcIlxuICAgICAgICAgIHRvPVwiY29udGFjdFwiXG4gICAgICAgICAgc3B5PXt0cnVlfVxuICAgICAgICAgIHNtb290aD17dHJ1ZX1cbiAgICAgICAgICBkdXJhdGlvbj17MTAwMH1cbiAgICAgICAgICBvblNldEFjdGl2ZT17KCkgPT4ge1xuICAgICAgICAgICAgc2V0QWN0aXZlTGluayhcImFib3V0XCIpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgIFwicHgtNCBweS0yIG14LTIgY3Vyc29yLXBvaW50ZXIgYW5pbWF0aW9uLWhvdmVyIGlubGluZS1ibG9jayByZWxhdGl2ZVwiICtcbiAgICAgICAgICAgIChhY3RpdmVMaW5rID09PSBcImFib3V0XCJcbiAgICAgICAgICAgICAgPyBcIiB0ZXh0LW9yYW5nZS01MDAgYW5pbWF0aW9uLWFjdGl2ZSBcIlxuICAgICAgICAgICAgICA6IFwiIHRleHQtYmxhY2stNTAwIGhvdmVyOnRleHQtb3JhbmdlLTUwMCBcIilcbiAgICAgICAgICB9XG4gICAgICAgID5cbiAgICAgICAgICBDb250YWN0XG4gICAgICAgIDwvTGlua1Njcm9sbD5cblxuICAgICAgPC91bD5cbiAgICA8L25hdj5cbiAgPC9oZWFkZXI+XG4gICAgXG4gIClcbn1cbiJdLCJuYW1lcyI6WyJMaW5rIiwiTGlua1Njcm9sbCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTmF2YmFyIiwiYWN0aXZlTGluayIsInNldEFjdGl2ZUxpbmsiLCJzY3JvbGxBY3RpdmUiLCJzZXRTY3JvbGxBY3RpdmUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwic2Nyb2xsWSIsImhlYWRlciIsImNsYXNzTmFtZSIsIm5hdiIsImRpdiIsInVsIiwiYWN0aXZlQ2xhc3MiLCJ0byIsInNweSIsInNtb290aCIsImR1cmF0aW9uIiwib25TZXRBY3RpdmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/layout/Navbar.tsx\n");

/***/ })

});