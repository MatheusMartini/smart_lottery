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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_macm1_Desktop_WWW_smart_lottery_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_macm1_Desktop_WWW_smart_lottery_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_macm1_Desktop_WWW_smart_lottery_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hooks_useLottery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useLottery */ \"./src/hooks/useLottery.ts\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar ListLastWinners = function(param) {\n    var contracts = param.contracts, lotteryId1 = param.lotteryId;\n    var _this1 = _this;\n    _s();\n    var contract = (0,_hooks_useLottery__WEBPACK_IMPORTED_MODULE_3__.useLottery)(contracts);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), lotteryHistory1 = ref[0], setLotteryHistory = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), idLottery = ref1[0], setIdLottery = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), players1 = ref2[0], setPlayers = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        updateState();\n    }, [\n        Players\n    ]);\n    var updateState = function() {\n        if (contract) getLotteryId();\n        if (contract) getPlayersLottery();\n    };\n    var getHistory = function() {\n        var _ref = _asyncToGenerator(_Users_macm1_Desktop_WWW_smart_lottery_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(id) {\n            var winnerAddress, historyObj;\n            return _Users_macm1_Desktop_WWW_smart_lottery_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        setLotteryHistory([]);\n                        _ctx.next = 3;\n                        return contract.methods.getLastWinnerByLottery(id - 1).call();\n                    case 3:\n                        winnerAddress = _ctx.sent;\n                        historyObj = {\n                            address: null\n                        };\n                        historyObj.address = winnerAddress;\n                        setLotteryHistory(function(lotteryHistory) {\n                            return _toConsumableArray(lotteryHistory).concat([\n                                historyObj\n                            ]);\n                        });\n                    case 7:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function getHistory(id) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var getLotteryId = function() {\n        var _ref = _asyncToGenerator(_Users_macm1_Desktop_WWW_smart_lottery_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var lotteryId;\n            return _Users_macm1_Desktop_WWW_smart_lottery_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return contract.methods.getLotteryId().call();\n                    case 2:\n                        lotteryId = _ctx.sent;\n                        // setIdLottery(lotteryId)\n                        getHistory(lotteryId);\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function getLotteryId() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var getPlayersLottery = function() {\n        var _ref = _asyncToGenerator(_Users_macm1_Desktop_WWW_smart_lottery_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var players;\n            return _Users_macm1_Desktop_WWW_smart_lottery_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return contract.methods.getPlayers().call();\n                    case 2:\n                        players = _ctx.sent;\n                        setPlayers(players);\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function getPlayersLottery() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return !contract ? null : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                    className: \"text-black-600 font-medium capitalize my-2 sm:my-7 \",\n                    children: [\n                        \"Last Winner Lottery \",\n                        lotteryId1\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/macm1/Desktop/WWW/smart_lottery/src/components/ListLastWinners.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 13\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"h-10 overflow-y-auto ... lg:py-1 max-w-xs \",\n                    children: lotteryHistory1.map(function(item) {\n                        if (item.address !== \"0x0000000000000000000000000000000000000000\") {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"history-entry mt-2\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                        className: \"text-base text-indigo-600 font-semibold tracking-wide \",\n                                        href: \"https://testnet.bscscan.com/address/\".concat(item.address),\n                                        target: \"_blank\",\n                                        children: item.address\n                                    }, void 0, false, {\n                                        fileName: \"/Users/macm1/Desktop/WWW/smart_lottery/src/components/ListLastWinners.tsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 27\n                                    }, _this1)\n                                }, void 0, false, {\n                                    fileName: \"/Users/macm1/Desktop/WWW/smart_lottery/src/components/ListLastWinners.tsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 23\n                                }, _this1)\n                            }, void 0, false);\n                        } else {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                children: \"Still no Winners this one\"\n                            }, void 0, false, {\n                                fileName: \"/Users/macm1/Desktop/WWW/smart_lottery/src/components/ListLastWinners.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 23\n                            }, _this1);\n                        }\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/macm1/Desktop/WWW/smart_lottery/src/components/ListLastWinners.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 13\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/macm1/Desktop/WWW/smart_lottery/src/components/ListLastWinners.tsx\",\n            lineNumber: 41,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false);\n};\n_s(ListLastWinners, \"dqYa0ConhBLImGkYjQEiaqMp+nk=\", false, function() {\n    return [\n        _hooks_useLottery__WEBPACK_IMPORTED_MODULE_3__.useLottery\n    ];\n});\n_c = ListLastWinners;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ListLastWinners);\nvar _c;\n$RefreshReg$(_c, \"ListLastWinners\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9MaXN0TGFzdFdpbm5lcnMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNGOztBQUVqRCxJQUFNSSxlQUFlLEdBQUcsZ0JBQTRCO1FBQTFCQyxTQUFTLFNBQVRBLFNBQVMsRUFBRUMsVUFBUyxTQUFUQSxTQUFTOzs7SUFFNUMsSUFBTUMsUUFBUSxHQUFHSiw2REFBVSxDQUFDRSxTQUFTLENBQUM7SUFDdEMsSUFBNENKLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFOMUQsZUFNdUIsR0FBdUJBLEdBQVksR0FBbkMsRUFOdkIsaUJBTTBDLEdBQUlBLEdBQVksR0FBaEI7SUFDeEMsSUFBa0NBLElBQVUsR0FBVkEsK0NBQVEsRUFBRSxFQVA5QyxTQU9rQixHQUFrQkEsSUFBVSxHQUE1QixFQVBsQixZQU9nQyxHQUFJQSxJQUFVLEdBQWQ7SUFDOUIsSUFBOEJBLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFSNUMsUUFRZ0IsR0FBZ0JBLElBQVksR0FBNUIsRUFSaEIsVUFRNEIsR0FBSUEsSUFBWSxHQUFoQjtJQUUxQkMsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2RZLFdBQVcsRUFBRTtLQUNkLEVBQUU7UUFBQ0MsT0FBTztLQUFDLENBQUM7SUFFYixJQUFNRCxXQUFXLEdBQUcsV0FBTTtRQUN4QixJQUFJUCxRQUFRLEVBQUVTLFlBQVksRUFBRSxDQUFDO1FBQzdCLElBQUlULFFBQVEsRUFBRVUsaUJBQWlCLEVBQUUsQ0FBQztLQUNuQztJQUVELElBQU1DLFVBQVU7bUJBQUcscUxBQU9DLEVBQUUsRUFBSztnQkFFdkJDLGFBQWEsRUFDYkMsVUFBVTs7Ozt3QkFGbEJaLGlCQUFpQixDQUFDLEVBQUUsQ0FBQzs7K0JBQ1NGLFFBQVEsQ0FBQ2UsT0FBTyxDQUFDQyxzQkFBc0IsQ0FBQ0osRUFBRSxHQUFFLENBQUMsQ0FBQyxDQUFDSyxJQUFJLEVBQUU7O3dCQUEzRUosYUFBYSxZQUE4RDt3QkFDM0VDLFVBQVUsR0FBRzs0QkFBQ0ksT0FBTyxFQUFDLElBQUk7eUJBQUM7d0JBQ2pDSixVQUFVLENBQUNJLE9BQU8sR0FBR0wsYUFBYTt3QkFDbENYLGlCQUFpQixDQUFDRCxTQUFBQSxjQUFjO21DQUFJLG1CQUFJQSxjQUFjLENBQWRBLFFBQUo7Z0NBQW9CYSxVQUFVOzZCQUFDO3lCQUFBLENBQUM7Ozs7OztTQUN2RTt3QkFOS0gsVUFBVSxDQUFVQyxFQUFFOzs7T0FNM0I7SUFFRCxJQUFNSCxZQUFZO21CQUFHLHVMQUFZO2dCQUN2QlYsU0FBUzs7Ozs7K0JBQVNDLFFBQVEsQ0FBQ2UsT0FBTyxDQUFDTixZQUFZLEVBQUUsQ0FBQ1EsSUFBSSxFQUFFOzt3QkFBeERsQixTQUFTLFlBQStDO3dCQUM5RCwwQkFBMEI7d0JBQzFCWSxVQUFVLENBQUNaLFNBQVMsQ0FBQzs7Ozs7O1NBQ3hCO3dCQUpLVSxZQUFZOzs7T0FJakI7SUFFRCxJQUFNQyxpQkFBaUI7bUJBQUcsdUxBQVk7Z0JBQzlCTCxPQUFPOzs7OzsrQkFBU0wsUUFBUSxDQUFDZSxPQUFPLENBQUNJLFVBQVUsRUFBRSxDQUFDRixJQUFJLEVBQUU7O3dCQUFwRFosT0FBTyxZQUE2Qzt3QkFDMURDLFVBQVUsQ0FBQ0QsT0FBTyxDQUFDOzs7Ozs7U0FDcEI7d0JBSEtLLGlCQUFpQjs7O09BR3RCO0lBRUgsT0FBTyxDQUFDVixRQUFRLEdBQUcsSUFBSSxpQkFDbkI7a0JBQ0ksNEVBQUNvQixLQUFHO1lBQUNDLFNBQVMsRUFBQyxtR0FBbUc7OzhCQUc5Ryw4REFBQ0MsR0FBQztvQkFBQ0QsU0FBUyxFQUFDLHFEQUFxRDs7d0JBQUMsc0JBQzNDO3dCQUFDdEIsVUFBUzs7Ozs7O3lCQUM5Qjs4QkFJSiw4REFBQ3FCLEtBQUc7b0JBQUNDLFNBQVMsRUFBQyw0Q0FBNEM7OEJBRXZEcEIsZUFBYyxDQUFDc0IsR0FBRyxDQUFDQyxTQUFBQSxJQUFJLEVBQUk7d0JBQzNCLElBQUlBLElBQUksQ0FBQ04sT0FBTyxLQUFLLDRDQUE0QyxFQUFFOzRCQUMvRCxxQkFDQTswQ0FDRSw0RUFBQ0UsS0FBRztvQ0FBQ0MsU0FBUyxFQUFDLG9CQUFvQjs4Q0FDL0IsNEVBQUNJLEdBQUM7d0NBQUNKLFNBQVMsRUFBQyx3REFBd0Q7d0NBQUNLLElBQUksRUFBRSxzQ0FBcUMsQ0FBZSxPQUFiRixJQUFJLENBQUNOLE9BQU8sQ0FBRTt3Q0FBRVMsTUFBTSxFQUFDLFFBQVE7a0RBQzdJSCxJQUFJLENBQUNOLE9BQU87Ozs7OzhDQUNiOzs7OzswQ0FDRjs2Q0FDTCxDQUNGO3lCQUNKLE1BQUk7NEJBQ0gscUJBQ0ksOERBQUNJLEdBQUM7MENBQUMsMkJBQXlCOzs7OztzQ0FBSSxDQUNqQzt5QkFDRjtxQkFDRixDQUNGOzs7Ozt5QkFFRzs7Ozs7O2lCQUNKO3FCQUNQLENBQ0g7Q0FDSDtHQXZFS3pCLGVBQWU7O1FBRUZELHlEQUFVOzs7QUFGdkJDLEtBQUFBLGVBQWU7QUF5RXJCLCtEQUFlQSxlQUFlLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGlzdExhc3RXaW5uZXJzLnRzeD81NTdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VMb3R0ZXJ5IH0gZnJvbSBcIi4uL2hvb2tzL3VzZUxvdHRlcnlcIjtcblxuY29uc3QgTGlzdExhc3RXaW5uZXJzID0gKHtjb250cmFjdHMsIGxvdHRlcnlJZH0pID0+IHtcblxuICBjb25zdCBjb250cmFjdCA9IHVzZUxvdHRlcnkoY29udHJhY3RzKTtcbiAgY29uc3QgW2xvdHRlcnlIaXN0b3J5LCBzZXRMb3R0ZXJ5SGlzdG9yeV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtpZExvdHRlcnksIHNldElkTG90dGVyeV0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbcGxheWVycywgc2V0UGxheWVyc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB1cGRhdGVTdGF0ZSgpXG4gIH0sIFtQbGF5ZXJzXSlcblxuICBjb25zdCB1cGRhdGVTdGF0ZSA9ICgpID0+IHtcbiAgICBpZiAoY29udHJhY3QpIGdldExvdHRlcnlJZCgpOyBcbiAgICBpZiAoY29udHJhY3QpIGdldFBsYXllcnNMb3R0ZXJ5KCk7IFxuICB9XG5cbiAgY29uc3QgZ2V0SGlzdG9yeSA9IGFzeW5jIChpZCkgPT4ge1xuICAgIHNldExvdHRlcnlIaXN0b3J5KFtdKVxuICAgICAgY29uc3Qgd2lubmVyQWRkcmVzcyA9IGF3YWl0IGNvbnRyYWN0Lm1ldGhvZHMuZ2V0TGFzdFdpbm5lckJ5TG90dGVyeShpZCAtMSkuY2FsbCgpXG4gICAgICBjb25zdCBoaXN0b3J5T2JqID0ge2FkZHJlc3M6bnVsbH1cbiAgICAgIGhpc3RvcnlPYmouYWRkcmVzcyA9IHdpbm5lckFkZHJlc3NcbiAgICAgIHNldExvdHRlcnlIaXN0b3J5KGxvdHRlcnlIaXN0b3J5ID0+IFsuLi5sb3R0ZXJ5SGlzdG9yeSwgaGlzdG9yeU9ial0pXG4gIH1cblxuICBjb25zdCBnZXRMb3R0ZXJ5SWQgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBsb3R0ZXJ5SWQgPSBhd2FpdCBjb250cmFjdC5tZXRob2RzLmdldExvdHRlcnlJZCgpLmNhbGwoKVxuICAgICAgLy8gc2V0SWRMb3R0ZXJ5KGxvdHRlcnlJZClcbiAgICAgIGdldEhpc3RvcnkobG90dGVyeUlkKVxuICB9XG4gIFxuICBjb25zdCBnZXRQbGF5ZXJzTG90dGVyeSA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBwbGF5ZXJzID0gYXdhaXQgY29udHJhY3QubWV0aG9kcy5nZXRQbGF5ZXJzKCkuY2FsbCgpXG4gICAgc2V0UGxheWVycyhwbGF5ZXJzKVxuICB9XG5cbnJldHVybiAhY29udHJhY3QgPyBudWxsIDogKFxuICAgIDw+ICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGJvcmRlci0yIGJvcmRlci1ncmF5LTUwMCByb3VuZGVkLXhsIHB5LTQgcHgtNiBsZzpweC0xMiBcIj5cblxuICAgICAgICAgICAgey8qIHRpdGxlICovfVxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ibGFjay02MDAgZm9udC1tZWRpdW0gY2FwaXRhbGl6ZSBteS0yIHNtOm15LTcgXCI+XG4gICAgICAgICAgICAgICAgTGFzdCBXaW5uZXIgTG90dGVyeSB7bG90dGVyeUlkfVxuICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICB7LyogbGlzdCBsYXN0IHdpbm5lcnMgKi99XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC0xMCBvdmVyZmxvdy15LWF1dG8gLi4uIGxnOnB5LTEgbWF4LXcteHMgXCI+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbG90dGVyeUhpc3RvcnkubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLmFkZHJlc3MgIT09IFwiMHgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpc3RvcnktZW50cnkgbXQtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgdGV4dC1pbmRpZ28tNjAwIGZvbnQtc2VtaWJvbGQgdHJhY2tpbmctd2lkZSBcIiBocmVmPXtgaHR0cHM6Ly90ZXN0bmV0LmJzY3NjYW4uY29tL2FkZHJlc3MvJHtpdGVtLmFkZHJlc3N9YH0gdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5hZGRyZXNzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgICAgICAgICAgPHA+U3RpbGwgbm8gV2lubmVycyB0aGlzIG9uZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGlzdExhc3RXaW5uZXJzO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VMb3R0ZXJ5IiwiTGlzdExhc3RXaW5uZXJzIiwiY29udHJhY3RzIiwibG90dGVyeUlkIiwiY29udHJhY3QiLCJsb3R0ZXJ5SGlzdG9yeSIsInNldExvdHRlcnlIaXN0b3J5IiwiaWRMb3R0ZXJ5Iiwic2V0SWRMb3R0ZXJ5IiwicGxheWVycyIsInNldFBsYXllcnMiLCJ1cGRhdGVTdGF0ZSIsIlBsYXllcnMiLCJnZXRMb3R0ZXJ5SWQiLCJnZXRQbGF5ZXJzTG90dGVyeSIsImdldEhpc3RvcnkiLCJpZCIsIndpbm5lckFkZHJlc3MiLCJoaXN0b3J5T2JqIiwibWV0aG9kcyIsImdldExhc3RXaW5uZXJCeUxvdHRlcnkiLCJjYWxsIiwiYWRkcmVzcyIsImdldFBsYXllcnMiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwibWFwIiwiaXRlbSIsImEiLCJocmVmIiwidGFyZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ListLastWinners.tsx\n");

/***/ })

});