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

/***/ "./src/components/Players.tsx":
/*!************************************!*\
  !*** ./src/components/Players.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_macm1_Desktop_WWW_smart_lottery_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_macm1_Desktop_WWW_smart_lottery_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_macm1_Desktop_WWW_smart_lottery_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @web3-react/core */ \"./node_modules/@web3-react/core/dist/core.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _hooks_useLottery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useLottery */ \"./src/hooks/useLottery.ts\");\n/* harmony import */ var _utils_connectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/connectors */ \"./src/utils/connectors.ts\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Players = function() {\n    var _this1 = _this;\n    _s();\n    var contract = (0,_hooks_useLottery__WEBPACK_IMPORTED_MODULE_4__.useLottery)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), players = ref[0], setPlayers = ref[1];\n    var activate = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_2__.useWeb3React)().activate;\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        var connectWalletOnPageLoad = function() {\n            var _ref = _asyncToGenerator(_Users_macm1_Desktop_WWW_smart_lottery_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                return _Users_macm1_Desktop_WWW_smart_lottery_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            if (!((localStorage === null || localStorage === void 0 ? void 0 : localStorage.getItem(\"isWalletConnected\")) === \"true\")) {\n                                _ctx.next = 10;\n                                break;\n                            }\n                            _ctx.prev = 1;\n                            _ctx.next = 4;\n                            return activate(_utils_connectors__WEBPACK_IMPORTED_MODULE_5__.injected);\n                        case 4:\n                            localStorage.setItem(\"isWalletConnected\", \"true\");\n                            _ctx.next = 10;\n                            break;\n                        case 7:\n                            _ctx.prev = 7;\n                            _ctx.t0 = _ctx[\"catch\"](1);\n                            console.log(_ctx.t0);\n                        case 10:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee, null, [\n                    [\n                        1,\n                        7\n                    ]\n                ]);\n            }));\n            return function connectWalletOnPageLoad() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        connectWalletOnPageLoad();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        if (contract) {\n            contract.methods.getPlayers().call(function(err, res) {\n                if (err) {\n                    console.error(err);\n                } else {\n                    setPlayers(res);\n                }\n            });\n        }\n    }, [\n        contract\n    ]);\n    return !contract ? null : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto text-center justify-center py-24\",\n            id: \"players\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex flex-col w-full \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                        className: \"text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed\",\n                        children: \"Lotteries Players\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macm1/Desktop/WWW/smart_lottery/src/components/Players.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        className: \"leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center\",\n                        children: \"Sweepstakes participants\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macm1/Desktop/WWW/smart_lottery/src/components/Players.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6 \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20 \",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                    className: \" text-black-600 font-medium capitalize my-2 sm:my-7 \",\n                                    children: [\n                                        players.length,\n                                        \" Address in Lottery 1\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/macm1/Desktop/WWW/smart_lottery/src/components/Players.tsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"h-60 overflow-y-auto ... lg:py-1 lg:px-4 max-w-xs \",\n                                    children: players === null || players === void 0 ? void 0 : players.map(function(p) {\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                            className: \"max-w-xs rounded shadow-lg \",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                                    className: \"py-4 \",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                                        className: \"font-bold text-xs mb-2 truncate ... indent-2 \",\n                                                        children: p\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/macm1/Desktop/WWW/smart_lottery/src/components/Players.tsx\",\n                                                        lineNumber: 67,\n                                                        columnNumber: 23\n                                                    }, _this1)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/macm1/Desktop/WWW/smart_lottery/src/components/Players.tsx\",\n                                                    lineNumber: 66,\n                                                    columnNumber: 21\n                                                }, _this1),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                                    className: \"pt-4 pb-2\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                                        className: \"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2\",\n                                                        children: \"#value\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/macm1/Desktop/WWW/smart_lottery/src/components/Players.tsx\",\n                                                        lineNumber: 70,\n                                                        columnNumber: 23\n                                                    }, _this1)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/macm1/Desktop/WWW/smart_lottery/src/components/Players.tsx\",\n                                                    lineNumber: 69,\n                                                    columnNumber: 21\n                                                }, _this1)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/macm1/Desktop/WWW/smart_lottery/src/components/Players.tsx\",\n                                            lineNumber: 65,\n                                            columnNumber: 19\n                                        }, _this1);\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"/Users/macm1/Desktop/WWW/smart_lottery/src/components/Players.tsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/macm1/Desktop/WWW/smart_lottery/src/components/Players.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/macm1/Desktop/WWW/smart_lottery/src/components/Players.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/macm1/Desktop/WWW/smart_lottery/src/components/Players.tsx\",\n                lineNumber: 41,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/macm1/Desktop/WWW/smart_lottery/src/components/Players.tsx\",\n            lineNumber: 39,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_s(Players, \"9xt/WQz7+Oh3wVZN8C/b0T6orT4=\", false, function() {\n    return [\n        _hooks_useLottery__WEBPACK_IMPORTED_MODULE_4__.useLottery,\n        _web3_react_core__WEBPACK_IMPORTED_MODULE_2__.useWeb3React\n    ];\n});\n_c = Players;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Players);\nvar _c;\n$RefreshReg$(_c, \"Players\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFDeEIsNEVBQUNNLE1BQUk7d0RBQUNOLFNBQVMsRUFBQywrRkFBK0Y7a0VBQUMsUUFBTTs7Ozs7OERBQU87Ozs7OzBEQUN6SDs7Ozs7O2tEQUNGO3FDQUVQLENBQUM7Ozs7O3lDQUNFOzs7Ozs7aUNBQ0Y7Ozs7OzZCQUtGOzs7Ozs7cUJBRUY7Ozs7O2lCQUNGO3FCQUNMLENBQ0g7Q0FDSDtHQWpGS2xCLE9BQU87O1FBQ01GLHlEQUFVO1FBRVBKLDBEQUFZOzs7QUFINUJNLEtBQUFBLE9BQU87QUFtRmIsK0RBQWVBLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9QbGF5ZXJzLnRzeD9kODAzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVdlYjNSZWFjdCB9IGZyb20gXCJAd2ViMy1yZWFjdC9jb3JlXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlTG90dGVyeSB9IGZyb20gXCIuLi9ob29rcy91c2VMb3R0ZXJ5XCI7XG5pbXBvcnQgeyBpbmplY3RlZCB9IGZyb20gXCIuLi91dGlscy9jb25uZWN0b3JzXCI7XG5cbmNvbnN0IFBsYXllcnMgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRyYWN0ID0gdXNlTG90dGVyeSgpO1xuICBjb25zdCBbcGxheWVycywgc2V0UGxheWVyc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IHthY3RpdmF0ZSB9ID0gdXNlV2ViM1JlYWN0KClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGNvbm5lY3RXYWxsZXRPblBhZ2VMb2FkID0gYXN5bmMgKCkgPT4ge1xuICAgICAgaWYgKGxvY2FsU3RvcmFnZT8uZ2V0SXRlbSgnaXNXYWxsZXRDb25uZWN0ZWQnKSA9PT0gJ3RydWUnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgYXdhaXQgYWN0aXZhdGUoaW5qZWN0ZWQpXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2lzV2FsbGV0Q29ubmVjdGVkJywgJ3RydWUnKVxuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGV4KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGNvbm5lY3RXYWxsZXRPblBhZ2VMb2FkKClcbiAgfSwgW10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoY29udHJhY3QpIHtcbiAgICAgIGNvbnRyYWN0Lm1ldGhvZHMuZ2V0UGxheWVycygpLmNhbGwoKGVycjogYW55LCByZXM6IGFueSkgPT4ge1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNldFBsYXllcnMocmVzKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9LCBbY29udHJhY3RdKTtcblxucmV0dXJuICFjb250cmFjdCA/IG51bGwgOiAoXG4gICAgPD4gICAgXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LXNjcmVlbi14bCBweC02IHNtOnB4LTggbGc6cHgtMTYgbXgtYXV0byB0ZXh0LWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweS0yNFwiIGlkPVwicGxheWVyc1wiPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LWZ1bGwgXCI+XG5cbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0yeGwgc206dGV4dC0zeGwgbGc6dGV4dC00eGwgZm9udC1tZWRpdW0gdGV4dC1ibGFjay02MDAgbGVhZGluZy1yZWxheGVkXCI+XG4gICAgICAgICAgICAgIExvdHRlcmllcyBQbGF5ZXJzXG4gICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxlYWRpbmctbm9ybWFsIHctMTAvMTIgc206dy03LzEyIGxnOnctNi8xMiBteC1hdXRvIG15LTIgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgU3dlZXBzdGFrZXMgcGFydGljaXBhbnRzXG4gICAgICAgICAgICA8L3A+XG4gICAgICBcbiAgICAgICAgICB7LyogY2FyZCBwbGF5ZXJzICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWZsb3ctcm93IHNtOmdyaWQtZmxvdy1jb2wgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTMgZ2FwLTQgbGc6Z2FwLTEyIHB5LTggbGc6cHktMTIgcHgtNiBzbTpweC0wIGxnOnB4LTYgXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGJvcmRlci0yIGJvcmRlci1ncmF5LTUwMCByb3VuZGVkLXhsIHB5LTQgcHgtNiBsZzpweC0xMiB4bDpweC0yMCBcIj5cblxuICAgICAgICAgICAgICAgIHsvKiB0aXRsZSAqL31cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiIHRleHQtYmxhY2stNjAwIGZvbnQtbWVkaXVtIGNhcGl0YWxpemUgbXktMiBzbTpteS03IFwiPlxuICAgICAgICAgICAgICB7cGxheWVycy5sZW5ndGh9IEFkZHJlc3MgaW4gTG90dGVyeSAxXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgIHsvKiBsaXN0IHBsYXllcnMgKi99XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTYwIG92ZXJmbG93LXktYXV0byAuLi4gbGc6cHktMSBsZzpweC00IG1heC13LXhzIFwiPlxuICAgICAgICAgICAgICAgIHtwbGF5ZXJzPy5tYXAoKHApID0+IChcbiAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXcteHMgcm91bmRlZCBzaGFkb3ctbGcgXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktNCBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LXhzIG1iLTIgdHJ1bmNhdGUgLi4uIGluZGVudC0yIFwiPntwfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC00IHBiLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgYmctZ3JheS0yMDAgcm91bmRlZC1mdWxsIHB4LTMgcHktMSB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTcwMCBtci0yIG1iLTJcIj4jdmFsdWU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgXG4gICAgICAgICAgICB7LyogZHVwbGljYXIgYSBkaXYgZGUgY2ltYSBxdWFuZG8gZXN0aXZlciBlc3RpbGl6YWRhICovfVxuXG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcnM7XG4iXSwibmFtZXMiOlsidXNlV2ViM1JlYWN0IiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUxvdHRlcnkiLCJpbmplY3RlZCIsIlBsYXllcnMiLCJjb250cmFjdCIsInBsYXllcnMiLCJzZXRQbGF5ZXJzIiwiYWN0aXZhdGUiLCJjb25uZWN0V2FsbGV0T25QYWdlTG9hZCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRJdGVtIiwiY29uc29sZSIsImxvZyIsIm1ldGhvZHMiLCJnZXRQbGF5ZXJzIiwiY2FsbCIsImVyciIsInJlcyIsImVycm9yIiwiZGl2IiwiY2xhc3NOYW1lIiwiaWQiLCJoMyIsInAiLCJsZW5ndGgiLCJtYXAiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Players.tsx\n");

/***/ })

});