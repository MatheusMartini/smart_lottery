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

/***/ "./src/hooks/useLottery.ts":
/*!*********************************!*\
  !*** ./src/hooks/useLottery.ts ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useLottery\": function() { return /* binding */ useLottery; }\n/* harmony export */ });\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @web3-react/core */ \"./node_modules/@web3-react/core/dist/core.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _abi_Lottery_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../abi/Lottery.json */ \"./src/abi/Lottery.json\");\n\n\n\nvar useLottery = function(contracts) {\n    var web3 = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_0__.useWeb3React)();\n    var contract = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function() {\n        if (web3.account) {\n            return new web3.library.eth.Contract(_abi_Lottery_json__WEBPACK_IMPORTED_MODULE_2__.abi, contracts // new smart contract \n            );\n        }\n        return null;\n    }, [\n        web3.library,\n        web3.account\n    ]);\n    return contract;\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlTG90dGVyeS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFnRDtBQUNoQjtBQUVVO0FBR25DLElBQU1HLFVBQVUsR0FBRyxTQUFDQyxTQUFTLEVBQUs7SUFDdkMsSUFBTUMsSUFBSSxHQUFHTCw4REFBWSxFQUFRO0lBRWpDLElBQU1NLFFBQVEsR0FBR0wsOENBQU8sQ0FBQyxXQUFNO1FBQzdCLElBQUlJLElBQUksQ0FBQ0UsT0FBTyxFQUFFO1lBQ2hCLE9BQU8sSUFBSUYsSUFBSSxDQUFDRyxPQUFPLENBQUVDLEdBQUcsQ0FBQ0MsUUFBUSxDQUNuQ1Isa0RBQUcsRUFDSEUsU0FBUyxDQUFDLHNCQUFzQjthQUNqQyxDQUFDO1NBQ0g7UUFFRCxPQUFPLElBQUksQ0FBQztLQUNiLEVBQUU7UUFBQ0MsSUFBSSxDQUFDRyxPQUFPO1FBQUVILElBQUksQ0FBQ0UsT0FBTztLQUFDLENBQUM7SUFFaEMsT0FBT0QsUUFBUSxDQUFDO0NBQ2pCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3VzZUxvdHRlcnkudHM/N2U0OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VXZWIzUmVhY3QgfSBmcm9tIFwiQHdlYjMtcmVhY3QvY29yZVwiO1xuaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFdlYjMgZnJvbSBcIndlYjNcIjtcbmltcG9ydCB7IGFiaSB9IGZyb20gXCIuLi9hYmkvTG90dGVyeS5qc29uXCI7XG5pbXBvcnQgeyBBYmlJdGVtIH0gZnJvbSBcIndlYjMtdXRpbHNcIjtcblxuZXhwb3J0IGNvbnN0IHVzZUxvdHRlcnkgPSAoY29udHJhY3RzKSA9PiB7XG4gIGNvbnN0IHdlYjMgPSB1c2VXZWIzUmVhY3Q8V2ViMz4oKTtcblxuICBjb25zdCBjb250cmFjdCA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGlmICh3ZWIzLmFjY291bnQpIHtcbiAgICAgIHJldHVybiBuZXcgd2ViMy5saWJyYXJ5IS5ldGguQ29udHJhY3QoXG4gICAgICAgIGFiaSBhcyBBYmlJdGVtW10sXG4gICAgICAgIGNvbnRyYWN0cyAvLyBuZXcgc21hcnQgY29udHJhY3QgXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9LCBbd2ViMy5saWJyYXJ5LCB3ZWIzLmFjY291bnRdKTtcblxuICByZXR1cm4gY29udHJhY3Q7XG59O1xuIl0sIm5hbWVzIjpbInVzZVdlYjNSZWFjdCIsInVzZU1lbW8iLCJhYmkiLCJ1c2VMb3R0ZXJ5IiwiY29udHJhY3RzIiwid2ViMyIsImNvbnRyYWN0IiwiYWNjb3VudCIsImxpYnJhcnkiLCJldGgiLCJDb250cmFjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/hooks/useLottery.ts\n");

/***/ })

});