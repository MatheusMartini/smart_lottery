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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_macm1_Desktop_WWW_smart_lottery_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_macm1_Desktop_WWW_smart_lottery_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_macm1_Desktop_WWW_smart_lottery_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hooks_useLottery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useLottery */ \"./src/hooks/useLottery.ts\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar ListLastWinners = function(param) {\n    var contracts = param.contracts, lotteryId1 = param.lotteryId;\n    var _this1 = _this;\n    _s();\n    var contract = (0,_hooks_useLottery__WEBPACK_IMPORTED_MODULE_3__.useLottery)(contracts);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), lotteryHistory1 = ref[0], setLotteryHistory = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        updateState();\n    }, [\n        contract\n    ]);\n    var updateState = function() {\n        if (contract) getLotteryId();\n    };\n    var getHistory = function() {\n        var _ref = _asyncToGenerator(_Users_macm1_Desktop_WWW_smart_lottery_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(id) {\n            var winnerAddress, historyObj;\n            return _Users_macm1_Desktop_WWW_smart_lottery_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        setLotteryHistory([]);\n                        _ctx.next = 3;\n                        return contract.methods.lotteryHistory(id - 1).call();\n                    case 3:\n                        winnerAddress = _ctx.sent;\n                        historyObj = {\n                            address: null\n                        };\n                        historyObj.address = winnerAddress;\n                        setLotteryHistory(function(lotteryHistory) {\n                            return _toConsumableArray(lotteryHistory).concat([\n                                historyObj\n                            ]);\n                        });\n                    case 7:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function getHistory(id) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var getLotteryId = function() {\n        var _ref = _asyncToGenerator(_Users_macm1_Desktop_WWW_smart_lottery_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var lotteryId;\n            return _Users_macm1_Desktop_WWW_smart_lottery_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return contract.methods.getLotteryId().call();\n                    case 2:\n                        lotteryId = _ctx.sent;\n                        _ctx.next = 5;\n                        return getHistory(lotteryId);\n                    case 5:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function getLotteryId() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return !contract ? null : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20 \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                    className: \" text-black-600 font-medium capitalize my-2 sm:my-7 \",\n                    children: [\n                        \"Last Winner Lottery \",\n                        lotteryId1\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/macm1/Desktop/WWW/smart_lottery/src/components/ListLastWinners.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 13\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"h-10 overflow-y-auto ... lg:py-1 max-w-xs \",\n                    children: lotteryHistory1.map(function(item) {\n                        if (item.address !== \"0x0000000000000000000000000000000000000000\") {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"history-entry mt-2\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                        className: \"text-base text-indigo-600 font-semibold tracking-wide \",\n                                        href: \"https://testnet.bscscan.com/address/\".concat(item.address),\n                                        target: \"_blank\",\n                                        children: item.address\n                                    }, void 0, false, {\n                                        fileName: \"/Users/macm1/Desktop/WWW/smart_lottery/src/components/ListLastWinners.tsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 25\n                                    }, _this1)\n                                }, void 0, false, {\n                                    fileName: \"/Users/macm1/Desktop/WWW/smart_lottery/src/components/ListLastWinners.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 21\n                                }, _this1)\n                            }, void 0, false);\n                        } else {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                children: \"Still no Winners this one\"\n                            }, void 0, false, {\n                                fileName: \"/Users/macm1/Desktop/WWW/smart_lottery/src/components/ListLastWinners.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 21\n                            }, _this1);\n                        }\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/macm1/Desktop/WWW/smart_lottery/src/components/ListLastWinners.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 13\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/macm1/Desktop/WWW/smart_lottery/src/components/ListLastWinners.tsx\",\n            lineNumber: 33,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false);\n};\n_s(ListLastWinners, \"BTXCZakoUxAZO4qYCG37ze2Iw9c=\", false, function() {\n    return [\n        _hooks_useLottery__WEBPACK_IMPORTED_MODULE_3__.useLottery\n    ];\n});\n_c = ListLastWinners;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ListLastWinners);\nvar _c;\n$RefreshReg$(_c, \"ListLastWinners\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9MaXN0TGFzdFdpbm5lcnMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNGOztBQUVqRCxJQUFNSSxlQUFlLEdBQUcsZ0JBQTRCO1FBQTFCQyxTQUFTLFNBQVRBLFNBQVMsRUFBRUMsVUFBUyxTQUFUQSxTQUFTOzs7SUFFNUMsSUFBTUMsUUFBUSxHQUFHSiw2REFBVSxDQUFDRSxTQUFTLENBQUM7SUFDdEMsSUFBNENKLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFOMUQsZUFNdUIsR0FBdUJBLEdBQVksR0FBbkMsRUFOdkIsaUJBTTBDLEdBQUlBLEdBQVksR0FBaEI7SUFFeENDLGdEQUFTLENBQUMsV0FBTTtRQUNkUSxXQUFXLEVBQUU7S0FDZCxFQUFFO1FBQUNILFFBQVE7S0FBQyxDQUFDO0lBRWQsSUFBTUcsV0FBVyxHQUFHLFdBQU07UUFDeEIsSUFBSUgsUUFBUSxFQUFFSSxZQUFZLEVBQUUsQ0FBQztLQUM5QjtJQUVELElBQU1DLFVBQVU7bUJBQUcscUxBQU9DLEVBQUUsRUFBSztnQkFFdkJDLGFBQWEsRUFDYkMsVUFBVTs7Ozt3QkFGbEJOLGlCQUFpQixDQUFDLEVBQUUsQ0FBQzs7K0JBQ1NGLFFBQVEsQ0FBQ1MsT0FBTyxDQUFDUixjQUFjLENBQUNLLEVBQUUsR0FBRSxDQUFDLENBQUMsQ0FBQ0ksSUFBSSxFQUFFOzt3QkFBbkVILGFBQWEsWUFBc0Q7d0JBQ25FQyxVQUFVLEdBQUc7NEJBQUNHLE9BQU8sRUFBQyxJQUFJO3lCQUFDO3dCQUNqQ0gsVUFBVSxDQUFDRyxPQUFPLEdBQUdKLGFBQWE7d0JBQ2xDTCxpQkFBaUIsQ0FBQ0QsU0FBQUEsY0FBYzttQ0FBSSxtQkFBSUEsY0FBYyxDQUFkQSxRQUFKO2dDQUFvQk8sVUFBVTs2QkFBQzt5QkFBQSxDQUFDOzs7Ozs7U0FDdkU7d0JBTktILFVBQVUsQ0FBVUMsRUFBRTs7O09BTTNCO0lBRUQsSUFBTUYsWUFBWTttQkFBRyx1TEFBWTtnQkFDdkJMLFNBQVM7Ozs7OytCQUFTQyxRQUFRLENBQUNTLE9BQU8sQ0FBQ0wsWUFBWSxFQUFFLENBQUNNLElBQUksRUFBRTs7d0JBQXhEWCxTQUFTLFlBQStDOzsrQkFFeERNLFVBQVUsQ0FBQ04sU0FBUyxDQUFDOzs7Ozs7U0FDOUI7d0JBSktLLFlBQVk7OztPQUlqQjtJQUVILE9BQU8sQ0FBQ0osUUFBUSxHQUFHLElBQUksaUJBQ25CO2tCQUNJLDRFQUFDWSxLQUFHO1lBQUNDLFNBQVMsRUFBQyw0R0FBNEc7OzhCQUd2SCw4REFBQ0MsR0FBQztvQkFBQ0QsU0FBUyxFQUFDLHNEQUFzRDs7d0JBQUMsc0JBQzVDO3dCQUFDZCxVQUFTOzs7Ozs7eUJBQzlCOzhCQUlKLDhEQUFDYSxLQUFHO29CQUFDQyxTQUFTLEVBQUMsNENBQTRDOzhCQUV2RFosZUFBYyxDQUFDYyxHQUFHLENBQUNDLFNBQUFBLElBQUksRUFBSTt3QkFDM0IsSUFBSUEsSUFBSSxDQUFDTCxPQUFPLEtBQUssNENBQTRDLEVBQUU7NEJBQy9ELHFCQUNBOzBDQUNBLDRFQUFDQyxLQUFHO29DQUFDQyxTQUFTLEVBQUMsb0JBQW9COzhDQUMvQiw0RUFBQ0ksR0FBQzt3Q0FBQ0osU0FBUyxFQUFDLHdEQUF3RDt3Q0FBQ0ssSUFBSSxFQUFFLHNDQUFxQyxDQUFlLE9BQWJGLElBQUksQ0FBQ0wsT0FBTyxDQUFFO3dDQUFFUSxNQUFNLEVBQUMsUUFBUTtrREFDN0lILElBQUksQ0FBQ0wsT0FBTzs7Ozs7OENBQ2I7Ozs7OzBDQUNGOzZDQUNILENBQ0Y7eUJBQ0osTUFBSTs0QkFDSCxxQkFDRSw4REFBQ0csR0FBQzswQ0FBRSwyQkFBeUI7Ozs7O3NDQUFJLENBQ2hDO3lCQUNGO3FCQUNGLENBQ0Y7Ozs7O3lCQUVHOzs7Ozs7aUJBQ0o7cUJBQ1AsQ0FDSDtDQUNIO0dBL0RLakIsZUFBZTs7UUFFRkQseURBQVU7OztBQUZ2QkMsS0FBQUEsZUFBZTtBQWlFckIsK0RBQWVBLGVBQWUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9MaXN0TGFzdFdpbm5lcnMudHN4PzU1N2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUxvdHRlcnkgfSBmcm9tIFwiLi4vaG9va3MvdXNlTG90dGVyeVwiO1xuXG5jb25zdCBMaXN0TGFzdFdpbm5lcnMgPSAoe2NvbnRyYWN0cywgbG90dGVyeUlkfSkgPT4ge1xuXG4gIGNvbnN0IGNvbnRyYWN0ID0gdXNlTG90dGVyeShjb250cmFjdHMpO1xuICBjb25zdCBbbG90dGVyeUhpc3RvcnksIHNldExvdHRlcnlIaXN0b3J5XSA9IHVzZVN0YXRlKFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHVwZGF0ZVN0YXRlKClcbiAgfSwgW2NvbnRyYWN0XSlcblxuICBjb25zdCB1cGRhdGVTdGF0ZSA9ICgpID0+IHtcbiAgICBpZiAoY29udHJhY3QpIGdldExvdHRlcnlJZCgpOyBcbiAgfVxuXG4gIGNvbnN0IGdldEhpc3RvcnkgPSBhc3luYyAoaWQpID0+IHtcbiAgICBzZXRMb3R0ZXJ5SGlzdG9yeShbXSlcbiAgICAgIGNvbnN0IHdpbm5lckFkZHJlc3MgPSBhd2FpdCBjb250cmFjdC5tZXRob2RzLmxvdHRlcnlIaXN0b3J5KGlkIC0xKS5jYWxsKClcbiAgICAgIGNvbnN0IGhpc3RvcnlPYmogPSB7YWRkcmVzczpudWxsfVxuICAgICAgaGlzdG9yeU9iai5hZGRyZXNzID0gd2lubmVyQWRkcmVzc1xuICAgICAgc2V0TG90dGVyeUhpc3RvcnkobG90dGVyeUhpc3RvcnkgPT4gWy4uLmxvdHRlcnlIaXN0b3J5LCBoaXN0b3J5T2JqXSlcbiAgfVxuXG4gIGNvbnN0IGdldExvdHRlcnlJZCA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IGxvdHRlcnlJZCA9IGF3YWl0IGNvbnRyYWN0Lm1ldGhvZHMuZ2V0TG90dGVyeUlkKCkuY2FsbCgpXG4gICAgICAvLyBzZXRMb3R0ZXJ5SWQobG90dGVyeUlkKVxuICAgICAgYXdhaXQgZ2V0SGlzdG9yeShsb3R0ZXJ5SWQpXG4gIH1cbiAgXG5yZXR1cm4gIWNvbnRyYWN0ID8gbnVsbCA6IChcbiAgICA8PiAgICBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBib3JkZXItMiBib3JkZXItZ3JheS01MDAgcm91bmRlZC14bCBweS00IHB4LTYgbGc6cHgtMTIgeGw6cHgtMjAgXCI+XG5cbiAgICAgICAgICAgIHsvKiB0aXRsZSAqL31cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIiB0ZXh0LWJsYWNrLTYwMCBmb250LW1lZGl1bSBjYXBpdGFsaXplIG15LTIgc206bXktNyBcIj5cbiAgICAgICAgICAgICAgICBMYXN0IFdpbm5lciBMb3R0ZXJ5IHtsb3R0ZXJ5SWR9XG4gICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgIHsvKiBsaXN0IGxhc3Qgd2lubmVycyAqL31cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTEwIG92ZXJmbG93LXktYXV0byAuLi4gbGc6cHktMSBtYXgtdy14cyBcIj5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsb3R0ZXJ5SGlzdG9yeS5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uYWRkcmVzcyAhPT0gXCIweDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBcIikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpc3RvcnktZW50cnkgbXQtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC1iYXNlIHRleHQtaW5kaWdvLTYwMCBmb250LXNlbWlib2xkIHRyYWNraW5nLXdpZGUgXCIgaHJlZj17YGh0dHBzOi8vdGVzdG5ldC5ic2NzY2FuLmNvbS9hZGRyZXNzLyR7aXRlbS5hZGRyZXNzfWB9IHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmFkZHJlc3N9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICAgICAgICA8cCA+U3RpbGwgbm8gV2lubmVycyB0aGlzIG9uZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGlzdExhc3RXaW5uZXJzO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VMb3R0ZXJ5IiwiTGlzdExhc3RXaW5uZXJzIiwiY29udHJhY3RzIiwibG90dGVyeUlkIiwiY29udHJhY3QiLCJsb3R0ZXJ5SGlzdG9yeSIsInNldExvdHRlcnlIaXN0b3J5IiwidXBkYXRlU3RhdGUiLCJnZXRMb3R0ZXJ5SWQiLCJnZXRIaXN0b3J5IiwiaWQiLCJ3aW5uZXJBZGRyZXNzIiwiaGlzdG9yeU9iaiIsIm1ldGhvZHMiLCJjYWxsIiwiYWRkcmVzcyIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJtYXAiLCJpdGVtIiwiYSIsImhyZWYiLCJ0YXJnZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ListLastWinners.tsx\n");

/***/ })

});