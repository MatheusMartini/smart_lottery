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

/***/ "./src/components/ListLastWinners.tsx":
/*!********************************************!*\
  !*** ./src/components/ListLastWinners.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_macm1_Desktop_WWW_smart_lottery_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_macm1_Desktop_WWW_smart_lottery_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_macm1_Desktop_WWW_smart_lottery_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hooks_useLottery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useLottery */ \"./src/hooks/useLottery.ts\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar ListLastWinners = function(param) {\n    var contracts = param.contracts, lotteryId1 = param.lotteryId;\n    var _this1 = _this;\n    _s();\n    var contract = (0,_hooks_useLottery__WEBPACK_IMPORTED_MODULE_3__.useLottery)(contracts);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), players1 = ref[0], setPlayers = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), lotteryHistory1 = ref1[0], setLotteryHistory = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        updateState();\n    }, [\n        contract\n    ]);\n    var updateState = function() {\n        if (contract) getLotteryId();\n    };\n    var getPlayersLottery = function() {\n        var _ref = _asyncToGenerator(_Users_macm1_Desktop_WWW_smart_lottery_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var players;\n            return _Users_macm1_Desktop_WWW_smart_lottery_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return contract.methods.getPlayers().call();\n                    case 2:\n                        players = _ctx.sent;\n                        setPlayers(players);\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function getPlayersLottery() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var getHistory = function() {\n        var _ref = _asyncToGenerator(_Users_macm1_Desktop_WWW_smart_lottery_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(id) {\n            var winnerAddress, historyObj;\n            return _Users_macm1_Desktop_WWW_smart_lottery_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        setLotteryHistory([]);\n                        _ctx.next = 3;\n                        return contract.methods.lotteryHistory(id - 1).call();\n                    case 3:\n                        winnerAddress = _ctx.sent;\n                        historyObj = {\n                            address: null\n                        };\n                        historyObj.address = winnerAddress;\n                        setLotteryHistory(function(lotteryHistory) {\n                            return _toConsumableArray(lotteryHistory).concat([\n                                historyObj\n                            ]);\n                        });\n                    case 7:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function getHistory(id) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var getLotteryId = function() {\n        var _ref = _asyncToGenerator(_Users_macm1_Desktop_WWW_smart_lottery_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var lotteryId;\n            return _Users_macm1_Desktop_WWW_smart_lottery_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return contract.methods.getLotteryId().call();\n                    case 2:\n                        lotteryId = _ctx.sent;\n                        _ctx.next = 5;\n                        return getHistory(lotteryId);\n                    case 5:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function getLotteryId() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return !contract ? null : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                    className: \"text-black-600 font-medium capitalize my-2 sm:my-7 \",\n                    children: [\n                        \"Last Winner Lottery \",\n                        lotteryId1\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/macm1/Desktop/WWW/smart_lottery/src/components/ListLastWinners.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 13\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"h-10 overflow-y-auto ... lg:py-1 max-w-xs \",\n                    children: lotteryHistory1.map(function(item) {\n                        if (item.address !== \"0x0000000000000000000000000000000000000000\") {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"history-entry mt-2\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                        className: \"text-base text-indigo-600 font-semibold tracking-wide \",\n                                        href: \"https://testnet.bscscan.com/address/\".concat(item.address),\n                                        target: \"_blank\",\n                                        children: item.address\n                                    }, void 0, false, {\n                                        fileName: \"/Users/macm1/Desktop/WWW/smart_lottery/src/components/ListLastWinners.tsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 27\n                                    }, _this1)\n                                }, void 0, false, {\n                                    fileName: \"/Users/macm1/Desktop/WWW/smart_lottery/src/components/ListLastWinners.tsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 23\n                                }, _this1)\n                            }, void 0, false);\n                        } else {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                children: \"Still no Winners this one\"\n                            }, void 0, false, {\n                                fileName: \"/Users/macm1/Desktop/WWW/smart_lottery/src/components/ListLastWinners.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 23\n                            }, _this1);\n                        }\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/macm1/Desktop/WWW/smart_lottery/src/components/ListLastWinners.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 13\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/macm1/Desktop/WWW/smart_lottery/src/components/ListLastWinners.tsx\",\n            lineNumber: 39,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false);\n};\n_s(ListLastWinners, \"D7AD7oaatzdYMLKKnNIjCMZSR5U=\", false, function() {\n    return [\n        _hooks_useLottery__WEBPACK_IMPORTED_MODULE_3__.useLottery\n    ];\n});\n_c = ListLastWinners;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ListLastWinners);\nvar _c;\n$RefreshReg$(_c, \"ListLastWinners\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9MaXN0TGFzdFdpbm5lcnMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNGOztBQUVqRCxJQUFNSSxlQUFlLEdBQUcsZ0JBQTRCO1FBQTFCQyxTQUFTLFNBQVRBLFNBQVMsRUFBRUMsVUFBUyxTQUFUQSxTQUFTOzs7SUFFNUMsSUFBTUMsUUFBUSxHQUFHSiw2REFBVSxDQUFDRSxTQUFTLENBQUM7SUFDdEMsSUFBOEJKLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFONUMsUUFNZ0IsR0FBZ0JBLEdBQVksR0FBNUIsRUFOaEIsVUFNNEIsR0FBSUEsR0FBWSxHQUFoQjtJQUMxQixJQUE0Q0EsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQVAxRCxlQU91QixHQUF1QkEsSUFBWSxHQUFuQyxFQVB2QixpQkFPMEMsR0FBSUEsSUFBWSxHQUFoQjtJQUV4Q0MsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2RVLFdBQVcsRUFBRTtLQUNkLEVBQUU7UUFBQ0wsUUFBUTtLQUFDLENBQUM7SUFFZCxJQUFNSyxXQUFXLEdBQUcsV0FBTTtRQUN4QixJQUFJTCxRQUFRLEVBQUVNLFlBQVksRUFBRSxDQUFDO0tBQzlCO0lBRUQsSUFBTUMsaUJBQWlCO21CQUFHLHVMQUFZO2dCQUM5Qk4sT0FBTzs7Ozs7K0JBQVNELFFBQVEsQ0FBQ1EsT0FBTyxDQUFDQyxVQUFVLEVBQUUsQ0FBQ0MsSUFBSSxFQUFFOzt3QkFBcERULE9BQU8sWUFBNkM7d0JBQzFEQyxVQUFVLENBQUNELE9BQU8sQ0FBQzs7Ozs7O1NBQ3BCO3dCQUhLTSxpQkFBaUI7OztPQUd0QjtJQUVELElBQU1JLFVBQVU7bUJBQUcscUxBQU9DLEVBQUUsRUFBSztnQkFFdkJDLGFBQWEsRUFDYkMsVUFBVTs7Ozt3QkFGbEJWLGlCQUFpQixDQUFDLEVBQUUsQ0FBQzs7K0JBQ1NKLFFBQVEsQ0FBQ1EsT0FBTyxDQUFDTCxjQUFjLENBQUNTLEVBQUUsR0FBRSxDQUFDLENBQUMsQ0FBQ0YsSUFBSSxFQUFFOzt3QkFBbkVHLGFBQWEsWUFBc0Q7d0JBQ25FQyxVQUFVLEdBQUc7NEJBQUNDLE9BQU8sRUFBQyxJQUFJO3lCQUFDO3dCQUNqQ0QsVUFBVSxDQUFDQyxPQUFPLEdBQUdGLGFBQWE7d0JBQ2xDVCxpQkFBaUIsQ0FBQ0QsU0FBQUEsY0FBYzttQ0FBSSxtQkFBSUEsY0FBYyxDQUFkQSxRQUFKO2dDQUFvQlcsVUFBVTs2QkFBQzt5QkFBQSxDQUFDOzs7Ozs7U0FDdkU7d0JBTktILFVBQVUsQ0FBVUMsRUFBRTs7O09BTTNCO0lBRUQsSUFBTU4sWUFBWTttQkFBRyx1TEFBWTtnQkFDdkJQLFNBQVM7Ozs7OytCQUFTQyxRQUFRLENBQUNRLE9BQU8sQ0FBQ0YsWUFBWSxFQUFFLENBQUNJLElBQUksRUFBRTs7d0JBQXhEWCxTQUFTLFlBQStDOzsrQkFFeERZLFVBQVUsQ0FBQ1osU0FBUyxDQUFDOzs7Ozs7U0FDOUI7d0JBSktPLFlBQVk7OztPQUlqQjtJQUVILE9BQU8sQ0FBQ04sUUFBUSxHQUFHLElBQUksaUJBQ25CO2tCQUNJLDRFQUFDZ0IsS0FBRztZQUFDQyxTQUFTLEVBQUMsbUdBQW1HOzs4QkFHOUcsOERBQUNDLEdBQUM7b0JBQUNELFNBQVMsRUFBQyxxREFBcUQ7O3dCQUFDLHNCQUMzQzt3QkFBQ2xCLFVBQVM7Ozs7Ozt5QkFDOUI7OEJBSUosOERBQUNpQixLQUFHO29CQUFDQyxTQUFTLEVBQUMsNENBQTRDOzhCQUV2RGQsZUFBYyxDQUFDZ0IsR0FBRyxDQUFDQyxTQUFBQSxJQUFJLEVBQUk7d0JBQzNCLElBQUlBLElBQUksQ0FBQ0wsT0FBTyxLQUFLLDRDQUE0QyxFQUFFOzRCQUMvRCxxQkFDQTswQ0FDRSw0RUFBQ0MsS0FBRztvQ0FBQ0MsU0FBUyxFQUFDLG9CQUFvQjs4Q0FDL0IsNEVBQUNJLEdBQUM7d0NBQUNKLFNBQVMsRUFBQyx3REFBd0Q7d0NBQUNLLElBQUksRUFBRSxzQ0FBcUMsQ0FBZSxPQUFiRixJQUFJLENBQUNMLE9BQU8sQ0FBRTt3Q0FBRVEsTUFBTSxFQUFDLFFBQVE7a0RBQzdJSCxJQUFJLENBQUNMLE9BQU87Ozs7OzhDQUNiOzs7OzswQ0FDRjs2Q0FDTCxDQUNGO3lCQUNKLE1BQUk7NEJBQ0gscUJBQ0ksOERBQUNHLEdBQUM7MENBQUMsMkJBQXlCOzs7OztzQ0FBSSxDQUNqQzt5QkFDRjtxQkFDRixDQUNGOzs7Ozt5QkFFRzs7Ozs7O2lCQUNKO3FCQUNQLENBQ0g7Q0FDSDtHQXJFS3JCLGVBQWU7O1FBRUZELHlEQUFVOzs7QUFGdkJDLEtBQUFBLGVBQWU7QUF1RXJCLCtEQUFlQSxlQUFlLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGlzdExhc3RXaW5uZXJzLnRzeD81NTdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VMb3R0ZXJ5IH0gZnJvbSBcIi4uL2hvb2tzL3VzZUxvdHRlcnlcIjtcblxuY29uc3QgTGlzdExhc3RXaW5uZXJzID0gKHtjb250cmFjdHMsIGxvdHRlcnlJZH0pID0+IHtcblxuICBjb25zdCBjb250cmFjdCA9IHVzZUxvdHRlcnkoY29udHJhY3RzKTtcbiAgY29uc3QgW3BsYXllcnMsIHNldFBsYXllcnNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbbG90dGVyeUhpc3RvcnksIHNldExvdHRlcnlIaXN0b3J5XSA9IHVzZVN0YXRlKFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHVwZGF0ZVN0YXRlKClcbiAgfSwgW2NvbnRyYWN0XSlcblxuICBjb25zdCB1cGRhdGVTdGF0ZSA9ICgpID0+IHtcbiAgICBpZiAoY29udHJhY3QpIGdldExvdHRlcnlJZCgpOyBcbiAgfVxuXG4gIGNvbnN0IGdldFBsYXllcnNMb3R0ZXJ5ID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHBsYXllcnMgPSBhd2FpdCBjb250cmFjdC5tZXRob2RzLmdldFBsYXllcnMoKS5jYWxsKClcbiAgICBzZXRQbGF5ZXJzKHBsYXllcnMpXG4gIH1cblxuICBjb25zdCBnZXRIaXN0b3J5ID0gYXN5bmMgKGlkKSA9PiB7XG4gICAgc2V0TG90dGVyeUhpc3RvcnkoW10pXG4gICAgICBjb25zdCB3aW5uZXJBZGRyZXNzID0gYXdhaXQgY29udHJhY3QubWV0aG9kcy5sb3R0ZXJ5SGlzdG9yeShpZCAtMSkuY2FsbCgpXG4gICAgICBjb25zdCBoaXN0b3J5T2JqID0ge2FkZHJlc3M6bnVsbH1cbiAgICAgIGhpc3RvcnlPYmouYWRkcmVzcyA9IHdpbm5lckFkZHJlc3NcbiAgICAgIHNldExvdHRlcnlIaXN0b3J5KGxvdHRlcnlIaXN0b3J5ID0+IFsuLi5sb3R0ZXJ5SGlzdG9yeSwgaGlzdG9yeU9ial0pXG4gIH1cblxuICBjb25zdCBnZXRMb3R0ZXJ5SWQgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBsb3R0ZXJ5SWQgPSBhd2FpdCBjb250cmFjdC5tZXRob2RzLmdldExvdHRlcnlJZCgpLmNhbGwoKVxuICAgICAgLy8gc2V0TG90dGVyeUlkKGxvdHRlcnlJZClcbiAgICAgIGF3YWl0IGdldEhpc3RvcnkobG90dGVyeUlkKVxuICB9XG4gIFxucmV0dXJuICFjb250cmFjdCA/IG51bGwgOiAoXG4gICAgPD4gICAgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgYm9yZGVyLTIgYm9yZGVyLWdyYXktNTAwIHJvdW5kZWQteGwgcHktNCBweC02IGxnOnB4LTEyIFwiPlxuXG4gICAgICAgICAgICB7LyogdGl0bGUgKi99XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrLTYwMCBmb250LW1lZGl1bSBjYXBpdGFsaXplIG15LTIgc206bXktNyBcIj5cbiAgICAgICAgICAgICAgICBMYXN0IFdpbm5lciBMb3R0ZXJ5IHtsb3R0ZXJ5SWR9XG4gICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgIHsvKiBsaXN0IGxhc3Qgd2lubmVycyAqL31cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTEwIG92ZXJmbG93LXktYXV0byAuLi4gbGc6cHktMSBtYXgtdy14cyBcIj5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsb3R0ZXJ5SGlzdG9yeS5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uYWRkcmVzcyAhPT0gXCIweDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBcIikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlzdG9yeS1lbnRyeSBtdC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQtYmFzZSB0ZXh0LWluZGlnby02MDAgZm9udC1zZW1pYm9sZCB0cmFja2luZy13aWRlIFwiIGhyZWY9e2BodHRwczovL3Rlc3RuZXQuYnNjc2Nhbi5jb20vYWRkcmVzcy8ke2l0ZW0uYWRkcmVzc31gfSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmFkZHJlc3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgICAgICAgICA8cD5TdGlsbCBubyBXaW5uZXJzIHRoaXMgb25lPC9wPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMaXN0TGFzdFdpbm5lcnM7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUxvdHRlcnkiLCJMaXN0TGFzdFdpbm5lcnMiLCJjb250cmFjdHMiLCJsb3R0ZXJ5SWQiLCJjb250cmFjdCIsInBsYXllcnMiLCJzZXRQbGF5ZXJzIiwibG90dGVyeUhpc3RvcnkiLCJzZXRMb3R0ZXJ5SGlzdG9yeSIsInVwZGF0ZVN0YXRlIiwiZ2V0TG90dGVyeUlkIiwiZ2V0UGxheWVyc0xvdHRlcnkiLCJtZXRob2RzIiwiZ2V0UGxheWVycyIsImNhbGwiLCJnZXRIaXN0b3J5IiwiaWQiLCJ3aW5uZXJBZGRyZXNzIiwiaGlzdG9yeU9iaiIsImFkZHJlc3MiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwibWFwIiwiaXRlbSIsImEiLCJocmVmIiwidGFyZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ListLastWinners.tsx\n");

/***/ })

});