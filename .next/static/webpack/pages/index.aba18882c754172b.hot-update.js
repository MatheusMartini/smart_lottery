"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/misc/Participate.tsx":
/*!*********************************************!*\
  !*** ./src/components/misc/Participate.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @web3-react/core */ \"./node_modules/@web3-react/core/dist/core.esm.js\");\n/* harmony import */ var _hooks_useLottery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useLottery */ \"./src/hooks/useLottery.ts\");\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar Participate = function(param) {\n    var price = param.price, contracts = param.contracts;\n    _s();\n    var web3 = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_1__.useWeb3React)();\n    var contract = (0,_hooks_useLottery__WEBPACK_IMPORTED_MODULE_2__.useLottery)(contracts);\n    return !contract ? null : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \"bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded\",\n        onClick: function() {\n            contract.methods.enter().send({\n                from: web3.account,\n                value: (price * 1e18).toString()\n            });\n        },\n        children: [\n            price,\n            \" bnb\"\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/macm1/Desktop/WWW/smart_lottery/src/components/misc/Participate.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, _this);\n};\n_s(Participate, \"iHg+42yqXQ2ko14TgCtvO7xqlMY=\", false, function() {\n    return [\n        _web3_react_core__WEBPACK_IMPORTED_MODULE_1__.useWeb3React,\n        _hooks_useLottery__WEBPACK_IMPORTED_MODULE_2__.useLottery\n    ];\n});\n_c = Participate;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Participate);\nvar _c;\n$RefreshReg$(_c, \"Participate\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9taXNjL1BhcnRpY2lwYXRlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUFnRDtBQUNJOztBQUVwRCxJQUFNRSxXQUFXLEdBQUcsZ0JBQXdCO1FBQXRCQyxLQUFLLFNBQUxBLEtBQUssRUFBRUMsU0FBUyxTQUFUQSxTQUFTOztJQUNwQyxJQUFNQyxJQUFJLEdBQUdMLDhEQUFZLEVBQUU7SUFDM0IsSUFBTU0sUUFBUSxHQUFHTCw2REFBVSxDQUFDRyxTQUFTLENBQUM7SUFHdEMsT0FBTyxDQUFDRSxRQUFRLEdBQUcsSUFBSSxpQkFDckIsOERBQUNDLFFBQU07UUFBQ0MsU0FBUyxFQUFDLGlKQUFpSjtRQUNqS0MsT0FBTyxFQUFFLFdBQU07WUFDYkgsUUFBUSxDQUFDSSxPQUFPLENBQUNDLEtBQUssRUFBRSxDQUFDQyxJQUFJLENBQUM7Z0JBQzVCQyxJQUFJLEVBQUVSLElBQUksQ0FBQ1MsT0FBTztnQkFDbEJDLEtBQUssRUFBRSxDQUFDWixLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUNhLFFBQVEsRUFBRTthQUVqQyxDQUFDLENBQUM7U0FDSjs7WUFFQWIsS0FBSztZQUFDLE1BQ1Q7Ozs7OzthQUFTLENBQ1Q7Q0FDSDtHQWxCS0QsV0FBVzs7UUFDRkYsMERBQVk7UUFDUkMseURBQVU7OztBQUZ2QkMsS0FBQUEsV0FBVztBQW9CakIsK0RBQWVBLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9taXNjL1BhcnRpY2lwYXRlLnRzeD85NjljIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVdlYjNSZWFjdCB9IGZyb20gXCJAd2ViMy1yZWFjdC9jb3JlXCI7XG5pbXBvcnQgeyB1c2VMb3R0ZXJ5IH0gZnJvbSBcIi4uLy4uL2hvb2tzL3VzZUxvdHRlcnlcIjtcblxuY29uc3QgUGFydGljaXBhdGUgPSAoe3ByaWNlLCBjb250cmFjdHN9KSA9PiB7XG4gIGNvbnN0IHdlYjMgPSB1c2VXZWIzUmVhY3QoKTtcbiAgY29uc3QgY29udHJhY3QgPSB1c2VMb3R0ZXJ5KGNvbnRyYWN0cyk7XG5cblxuICByZXR1cm4gIWNvbnRyYWN0ID8gbnVsbCA6IChcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLXRyYW5zcGFyZW50IGhvdmVyOmJnLWJsdWUtNTAwIHRleHQtYmx1ZS03MDAgZm9udC1zZW1pYm9sZCBob3Zlcjp0ZXh0LXdoaXRlIHB5LTIgcHgtNCBib3JkZXIgYm9yZGVyLWJsdWUtNTAwIGhvdmVyOmJvcmRlci10cmFuc3BhcmVudCByb3VuZGVkXCJcbiAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgY29udHJhY3QubWV0aG9kcy5lbnRlcigpLnNlbmQoe1xuICAgICAgICAgIGZyb206IHdlYjMuYWNjb3VudCxcbiAgICAgICAgICB2YWx1ZTogKHByaWNlICogMWUxOCkudG9TdHJpbmcoKSxcblxuICAgICAgICB9KTtcbiAgICAgIH19XG4gICAgPlxuICAgICAge3ByaWNlfSBibmJcbiAgICA8L2J1dHRvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhcnRpY2lwYXRlO1xuIl0sIm5hbWVzIjpbInVzZVdlYjNSZWFjdCIsInVzZUxvdHRlcnkiLCJQYXJ0aWNpcGF0ZSIsInByaWNlIiwiY29udHJhY3RzIiwid2ViMyIsImNvbnRyYWN0IiwiYnV0dG9uIiwiY2xhc3NOYW1lIiwib25DbGljayIsIm1ldGhvZHMiLCJlbnRlciIsInNlbmQiLCJmcm9tIiwiYWNjb3VudCIsInZhbHVlIiwidG9TdHJpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/misc/Participate.tsx\n");

/***/ })

});