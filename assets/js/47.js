(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[47],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/modules/services/submodule/mainnetSwap/views/ViewServicesMainnetSwap.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/modules/services/submodule/mainnetSwap/views/ViewServicesMainnetSwap.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.esm-bundler.js\");\n/* harmony import */ var _util_swapUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/util/swapUtils */ \"./src/util/swapUtils.ts\");\n/* harmony import */ var _state_networkState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/state/networkState */ \"./src/state/networkState.ts\");\n/* harmony import */ var _models_stores_chainSwapConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/models/stores/chainSwapConfig */ \"./src/models/stores/chainSwapConfig.ts\");\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    name: \"ViewServicesMainnetSwap\",\n\n    setup(){\n      const open = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"ref\"])([]);\n      open.value['nis1', 'eth', 'bsc'] = false;\n      let type = ['nis1', 'eth', 'bsc'];\n      const openMenu = (coinType) => {\n        if(coinType == 'nis1' && !isOutgoingOptionDisabled.value['nis1']){\n          open.value['nis1'] = !open.value['nis1'];\n        }else if(coinType == 'eth' && !isOutgoingOptionDisabled.value['eth']){\n          open.value['eth'] = !open.value['eth'];\n        }else if(coinType == 'bsc' && !isOutgoingOptionDisabled.value['bsc']){\n          open.value['bsc'] = !open.value['bsc'];\n        }\n      };\n\n    let swapData = new _models_stores_chainSwapConfig__WEBPACK_IMPORTED_MODULE_4__[\"ChainSwapConfig\"](_state_networkState__WEBPACK_IMPORTED_MODULE_3__[\"networkState\"].chainNetworkName);\n    swapData.init();\n\n    const baseURL = swapData.swap_XPX_ETH_URL;\n    const priceURL = swapData.priceConsultURL;\n    const router = Object(vue_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n    const isOutgoingOptionDisabled = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"ref\"])([]);\n    isOutgoingOptionDisabled.value['nis1', 'eth', 'bsc'] = false;\n    const displayWaitMessage = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"ref\"])([]);\n    displayWaitMessage.value['nis1', 'eth', 'bsc'] = false;\n    const displayConnectionMessage = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"ref\"])([]);\n    displayConnectionMessage.value['nis1', 'eth', 'bsc'] = false;\n    const displayErrorMessage = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"ref\"])([]);\n    displayErrorMessage.value['nis1', 'eth', 'bsc'] = false;\n    const isChecking = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"ref\"])([]);\n    isChecking.value['nis1', 'eth', 'bsc'] = false;\n\n    const displayOutgoingNIS1SwapLabel = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"computed\"])(() => {\n      let label = 'Sirius Chain to NIS1';\n      if(displayConnectionMessage.value['nis1']){\n        return 'Unable to connect';\n      }else if(displayErrorMessage.value['nis1']){\n        return 'Service unavailable';\n      }else{\n        return label;\n      }\n    });\n\n    const displayOutgoingETHSwapLabel = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"computed\"])(() => {\n      let label = 'Sirius Chain to ETH';\n      if(displayConnectionMessage.value['eth']){\n        return 'Unable to connect';\n      }else if(displayErrorMessage.value['eth']){\n        return 'Service unavailable';\n      }else{\n        return label;\n      }\n    });\n\n    const displayOutgoingBSCSwapLabel = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"computed\"])(() => {\n      let label = 'Sirius Chain to BSC';\n      if(displayConnectionMessage.value['bsc']){\n        return 'Unable to connect';\n      }else if(displayErrorMessage.value['bsc']){\n        return 'Service unavailable';\n      }else{\n        return label;\n      }\n    });\n\n    const gotoOutgoingPage = async(coin)=> {\n\n      if(isChecking.value[coin]){\n        return;\n      }\n      isOutgoingOptionDisabled.value[coin] = true;\n      // outgoingText.value = \"Getting your accounts. Please wait\";\n\n      isChecking.value[coin] = true;\n\n      displayWaitMessage.value[coin] = true;\n      displayConnectionMessage.value[coin] = false;\n      displayErrorMessage.value[coin] = false;\n\n      try {\n        const response = await fetch(_util_swapUtils__WEBPACK_IMPORTED_MODULE_2__[\"SwapUtils\"].checkSwapService(baseURL));\n        const priceResponse = await fetch(_util_swapUtils__WEBPACK_IMPORTED_MODULE_2__[\"SwapUtils\"].checkSwapPrice(priceURL));\n        const priceData = await priceResponse.json();\n\n        isChecking.value[coin] = false;\n        let priceDataExternalCoin\n        if(coin == 'eth'){\n          priceDataExternalCoin = priceData.eth;\n        }else if(coin == 'bsc'){\n          priceDataExternalCoin = priceData.bsc;\n        }\n\n        if(priceData.xpx === 0 || priceDataExternalCoin === 0){\n          displayWaitMessage.value[coin] = false;\n          displayErrorMessage.value[coin] = true;\n          isOutgoingOptionDisabled.value[coin] = false;\n          return;\n        }\n\n        if(response.status == 200 && priceResponse.status == 200){\n          displayErrorMessage.value[coin] = false;\n          displayWaitMessage.value[coin] = false;\n          if(coin == 'eth'){\n            router.push({ name: \"ViewServicesMainnetSwapSiriusToETH\"});\n          }else if(coin == 'bsc'){\n            router.push({ name: \"ViewServicesMainnetSwapSiriusToBSC\"});\n          }\n        }else{\n          displayWaitMessage.value[coin] = false;\n          displayErrorMessage.value[coin] = true;\n          isOutgoingOptionDisabled.value = false;\n        }\n      } catch (error) {\n        displayWaitMessage.value[coin] = false;\n        displayErrorMessage.value[coin] = false;\n        displayConnectionMessage.value[coin] = true;\n        isOutgoingOptionDisabled.value[coin] = false;\n        isChecking.value[coin] = false;\n      }\n    }\n\n    return {\n      open,\n      openMenu,\n      isChecking,\n      displayWaitMessage,\n      displayErrorMessage,\n      displayConnectionMessage,\n      isOutgoingOptionDisabled,\n      gotoOutgoingPage,\n      displayOutgoingETHSwapLabel,\n      displayOutgoingBSCSwapLabel,\n      displayOutgoingNIS1SwapLabel,\n    }\n  }\n});\n\n\n//# sourceURL=webpack:///./src/modules/services/submodule/mainnetSwap/views/ViewServicesMainnetSwap.vue?./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1");

/***/ }),

/***/ "./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/modules/services/submodule/mainnetSwap/views/ViewServicesMainnetSwap.vue?vue&type=template&id=12059188":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/modules/services/submodule/mainnetSwap/views/ViewServicesMainnetSwap.vue?vue&type=template&id=12059188 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n/* harmony import */ var _modules_services_submodule_mainnetSwap_img_bsc_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/modules/services/submodule/mainnetSwap/img/bsc.svg */ \"./src/modules/services/submodule/mainnetSwap/img/bsc.svg\");\n/* harmony import */ var _modules_services_submodule_mainnetSwap_img_bsc_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_services_submodule_mainnetSwap_img_bsc_svg__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _modules_services_submodule_mainnetSwap_img_nem_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/modules/services/submodule/mainnetSwap/img/nem.svg */ \"./src/modules/services/submodule/mainnetSwap/img/nem.svg\");\n/* harmony import */ var _modules_services_submodule_mainnetSwap_img_nem_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_services_submodule_mainnetSwap_img_nem_svg__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\nconst _hoisted_1 = { class: \"lg:w-9/12 ml-2 mr-2 lg:ml-auto lg:mr-auto mt-5\" }\nconst _hoisted_2 = { class: \"mt-6 px-6 py-10 border filter shadow-lg text-center\" }\nconst _hoisted_3 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"div\", { class: \"text-md mb-3\" }, \"Main Network Swap\", -1 /* HOISTED */)\nconst _hoisted_4 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"template\", null, [\n  /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createCommentVNode\"])(\" <div class=\\\"text-xs max-w-md inline-block\\\">You can swap from NIS1, ETH and BSC to ProximaX Sirius Chain. In reverse, ProximaX Sirius Chain is available to swap in ETH and BSC only.</div> \")\n], -1 /* HOISTED */)\nconst _hoisted_5 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"br\", null, null, -1 /* HOISTED */)\nconst _hoisted_6 = { class: \"inline-block relative w-full sm:w-80 text-left mt-5 transition-all duration-500\" }\nconst _hoisted_7 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"img\", {\n  src: _modules_services_submodule_mainnetSwap_img_bsc_svg__WEBPACK_IMPORTED_MODULE_1___default.a,\n  class: \"float-left\"\n}, null, -1 /* HOISTED */)\nconst _hoisted_8 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"div\", { class: \"text-left pl-5\" }, [\n  /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"div\", { class: \"text-md font-bold\" }, \"BSC\"),\n  /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"div\", { class: \"text-xs\" }, \"Binance Smart Chain\")\n], -1 /* HOISTED */)\nconst _hoisted_9 = [\n  _hoisted_7,\n  _hoisted_8\n]\nconst _hoisted_10 = {\n  key: 0,\n  class: \"w-full text-left z-20 bg-white\"\n}\nconst _hoisted_11 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"div\", { class: \"bg-blue-100 border-blue-100 uppercase py-2 px-5 text-xxs\" }, \"Select option\", -1 /* HOISTED */)\nconst _hoisted_12 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createTextVNode\"])(\"BSC to Sirius Chain\")\nconst _hoisted_13 = {\n  key: 0,\n  style: {\"border-top-color\":\"transparent\"},\n  class: \"inline-block ml-2 w-5 h-5 border-4 border-gray-700 border-solid rounded-full animate-spin\"\n}\nconst _hoisted_14 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createTextVNode\"])(\"Check Status\")\nconst _hoisted_15 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"img\", {\n  src: _modules_services_submodule_mainnetSwap_img_nem_svg__WEBPACK_IMPORTED_MODULE_2___default.a,\n  class: \"float-left\"\n}, null, -1 /* HOISTED */)\nconst _hoisted_16 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"div\", { class: \"text-left pl-5\" }, [\n  /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"div\", { class: \"text-md font-bold\" }, \"NIS1\"),\n  /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"div\", { class: \"text-xs\" }, \"NEM\")\n], -1 /* HOISTED */)\nconst _hoisted_17 = [\n  _hoisted_15,\n  _hoisted_16\n]\nconst _hoisted_18 = {\n  key: 0,\n  class: \"w-full text-left z-20 bg-white\"\n}\nconst _hoisted_19 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"div\", { class: \"bg-blue-100 border-blue-100 uppercase py-2 px-5 text-xxs\" }, \"Select option\", -1 /* HOISTED */)\nconst _hoisted_20 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createTextVNode\"])(\"NIS1 to Sirius Chain\")\nconst _hoisted_21 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"br\", null, null, -1 /* HOISTED */)\nconst _hoisted_22 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"template\", null, [\n  /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createCommentVNode\"])(\" <div class=\\\"border inline-block w-full mt-4 rounded shadow-md filter\\\" :class=\\\"`${open['eth']?'border-blue-500':'border-gray-200'}`\\\" style=\\\"top: 95px;\\\" @click=\\\"openMenu('eth')\\\">\\n          <div class=\\\"flex items-center w-full px-5 h-20 cursor-pointer hover:bg-blue-50 transition-all duration-500\\\" :class=\\\"`${open['eth']?'bg-blue-50':'bg-white'}`\\\">\\n            <img src=\\\"@/modules/services/submodule/mainnetSwap/img/eth.svg\\\" class=\\\"float-left\\\">\\n            <div class=\\\"text-left pl-5\\\">\\n              <div class=\\\"text-md font-bold\\\">ETH</div>\\n              <div class=\\\"text-xs\\\">Ethereum</div>\\n            </div>\\n          </div>\\n          <div class=\\\"w-full text-left z-20 bg-white\\\" v-if=\\\"open['eth']\\\">\\n            <div class=\\\"bg-blue-100 border-blue-100 uppercase py-2 px-5 text-xxs\\\">Select option</div>\\n            <router-link :to=\\\"{ name: 'ViewServicesMainnetSwapETHToSirius' }\\\" class=\\\"block py-3 px-5 text-sm font-bold hover:bg-blue-500 hover:text-white transition-all duration-500 cursor-pointer\\\">ETH to Sirius Chain</router-link>\\n            <div class=\\\"py-3 px-5 text-sm font-bold transition-all duration-500 flex justify-between\\\" :class=\\\"`${!displayWaitMessage['eth']?'cursor-pointer hover:bg-blue-500 hover:text-white':''}`\\\" @click=\\\"gotoOutgoingPage('eth')\\\">{{ displayOutgoingETHSwapLabel }}<div v-if=\\\"displayWaitMessage['eth']\\\" style=\\\"border-top-color:transparent\\\" class=\\\"inline-block ml-2 w-5 h-5 border-4 border-gray-700 border-solid rounded-full animate-spin\\\"></div></div>\\n            <router-link :to=\\\"{ name: 'ViewServicesMainnetSwapCheckETHToSirius' }\\\" class=\\\"block py-3 px-5 text-sm font-bold hover:bg-blue-500 hover:text-white transition-all duration-500 cursor-pointer\\\">Check Status</router-link>\\n          </div>\\n        </div> \")\n], -1 /* HOISTED */)\nconst _hoisted_23 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"br\", null, null, -1 /* HOISTED */)\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_router_link = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"resolveComponent\"])(\"router-link\")\n\n  return (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"div\", null, [\n    Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"div\", _hoisted_1, [\n      Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"div\", _hoisted_2, [\n        _hoisted_3,\n        _hoisted_4,\n        _hoisted_5,\n        Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"div\", _hoisted_6, [\n          Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"div\", {\n            class: Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"normalizeClass\"])([\"border inline-block w-full mt-4 rounded shadow-md filter\", `${$setup.open['bsc']?'border-blue-500':'border-gray-200'}`]),\n            style: {\"top\":\"205px\"},\n            onClick: _cache[1] || (_cache[1] = $event => ($setup.openMenu('bsc')))\n          }, [\n            Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"div\", {\n              class: Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"normalizeClass\"])([\"flex items-center w-full px-5 h-20 cursor-pointer hover:bg-blue-50 transition-all duration-500\", `${$setup.open['bsc']?'bg-blue-50':'bg-white'}`])\n            }, _hoisted_9, 2 /* CLASS */),\n            ($setup.open['bsc'])\n              ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"div\", _hoisted_10, [\n                  _hoisted_11,\n                  Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_router_link, {\n                    to: { name: 'ViewServicesMainnetSwapBSCToSirius' },\n                    class: \"block py-3 px-5 text-sm font-bold hover:bg-blue-500 hover:text-white transition-all duration-500 cursor-pointer\"\n                  }, {\n                    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"withCtx\"])(() => [\n                      _hoisted_12\n                    ]),\n                    _: 1 /* STABLE */\n                  }),\n                  Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"div\", {\n                    class: Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"normalizeClass\"])([\"py-3 px-5 text-sm font-bold transition-all duration-500 flex justify-between\", `${!$setup.displayWaitMessage['bsc']?'cursor-pointer hover:bg-blue-500 hover:text-white':''}`]),\n                    onClick: _cache[0] || (_cache[0] = $event => ($setup.gotoOutgoingPage('bsc')))\n                  }, [\n                    Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createTextVNode\"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])($setup.displayOutgoingBSCSwapLabel), 1 /* TEXT */),\n                    ($setup.displayWaitMessage['bsc'])\n                      ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"div\", _hoisted_13))\n                      : Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createCommentVNode\"])(\"v-if\", true)\n                  ], 2 /* CLASS */),\n                  Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_router_link, {\n                    to: { name: 'ViewServicesMainnetSwapCheckBSCToSirius' },\n                    class: \"block py-3 px-5 text-sm font-bold hover:bg-blue-500 hover:text-white transition-all duration-500 cursor-pointer\"\n                  }, {\n                    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"withCtx\"])(() => [\n                      _hoisted_14\n                    ]),\n                    _: 1 /* STABLE */\n                  })\n                ]))\n              : Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createCommentVNode\"])(\"v-if\", true)\n          ], 2 /* CLASS */),\n          Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"div\", {\n            class: Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"normalizeClass\"])([\"border inline-block w-full shadow-md filter\", `${$setup.open['nis1']?'border-blue-500':'border-gray-200'}`]),\n            style: {\"top\":\"0px\"},\n            onClick: _cache[2] || (_cache[2] = $event => ($setup.openMenu('nis1')))\n          }, [\n            Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"div\", {\n              class: Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"normalizeClass\"])([\"flex items-center w-full px-5 h-20 cursor-pointer hover:bg-blue-50 transition-all duration-500\", `${$setup.open['nis1']?'bg-blue-50':'bg-white'}`])\n            }, _hoisted_17, 2 /* CLASS */),\n            ($setup.open['nis1'])\n              ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"div\", _hoisted_18, [\n                  _hoisted_19,\n                  Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_router_link, {\n                    to: { name: 'ViewServicesMainnetSwapNIS1ToSirius' },\n                    class: \"block py-3 px-5 text-sm font-bold hover:bg-blue-500 hover:text-white transition-all duration-500 cursor-pointer\"\n                  }, {\n                    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"withCtx\"])(() => [\n                      _hoisted_20\n                    ]),\n                    _: 1 /* STABLE */\n                  })\n                ]))\n              : Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createCommentVNode\"])(\"v-if\", true)\n          ], 2 /* CLASS */),\n          _hoisted_21,\n          _hoisted_22,\n          _hoisted_23\n        ])\n      ])\n    ])\n  ]))\n}\n\n//# sourceURL=webpack:///./src/modules/services/submodule/mainnetSwap/views/ViewServicesMainnetSwap.vue?./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1");

/***/ }),

/***/ "./src/modules/services/submodule/mainnetSwap/img/nem.svg":
/*!****************************************************************!*\
  !*** ./src/modules/services/submodule/mainnetSwap/img/nem.svg ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/img/nem.1e53337c.svg\";\n\n//# sourceURL=webpack:///./src/modules/services/submodule/mainnetSwap/img/nem.svg?");

/***/ }),

/***/ "./src/modules/services/submodule/mainnetSwap/views/ViewServicesMainnetSwap.vue":
/*!**************************************************************************************!*\
  !*** ./src/modules/services/submodule/mainnetSwap/views/ViewServicesMainnetSwap.vue ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ViewServicesMainnetSwap_vue_vue_type_template_id_12059188__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ViewServicesMainnetSwap.vue?vue&type=template&id=12059188 */ \"./src/modules/services/submodule/mainnetSwap/views/ViewServicesMainnetSwap.vue?vue&type=template&id=12059188\");\n/* harmony import */ var _ViewServicesMainnetSwap_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ViewServicesMainnetSwap.vue?vue&type=script&lang=js */ \"./src/modules/services/submodule/mainnetSwap/views/ViewServicesMainnetSwap.vue?vue&type=script&lang=js\");\n/* empty/unused harmony star reexport *//* harmony import */ var _home_runner_work_web_wallet_vuejs_web_wallet_vuejs_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader-v16/dist/exportHelper.js */ \"./node_modules/vue-loader-v16/dist/exportHelper.js\");\n/* harmony import */ var _home_runner_work_web_wallet_vuejs_web_wallet_vuejs_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_web_wallet_vuejs_web_wallet_vuejs_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\nconst __exports__ = /*#__PURE__*/_home_runner_work_web_wallet_vuejs_web_wallet_vuejs_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2___default()(_ViewServicesMainnetSwap_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_ViewServicesMainnetSwap_vue_vue_type_template_id_12059188__WEBPACK_IMPORTED_MODULE_0__[\"render\"]],['__file',\"src/modules/services/submodule/mainnetSwap/views/ViewServicesMainnetSwap.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack:///./src/modules/services/submodule/mainnetSwap/views/ViewServicesMainnetSwap.vue?");

/***/ }),

/***/ "./src/modules/services/submodule/mainnetSwap/views/ViewServicesMainnetSwap.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************!*\
  !*** ./src/modules/services/submodule/mainnetSwap/views/ViewServicesMainnetSwap.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_ViewServicesMainnetSwap_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../../node_modules/vue-loader-v16/dist??ref--0-1!./ViewServicesMainnetSwap.vue?vue&type=script&lang=js */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/modules/services/submodule/mainnetSwap/views/ViewServicesMainnetSwap.vue?vue&type=script&lang=js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_ViewServicesMainnetSwap_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* empty/unused harmony star reexport */ \n\n//# sourceURL=webpack:///./src/modules/services/submodule/mainnetSwap/views/ViewServicesMainnetSwap.vue?");

/***/ }),

/***/ "./src/modules/services/submodule/mainnetSwap/views/ViewServicesMainnetSwap.vue?vue&type=template&id=12059188":
/*!********************************************************************************************************************!*\
  !*** ./src/modules/services/submodule/mainnetSwap/views/ViewServicesMainnetSwap.vue?vue&type=template&id=12059188 ***!
  \********************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_ViewServicesMainnetSwap_vue_vue_type_template_id_12059188__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!../../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../../node_modules/vue-loader-v16/dist??ref--0-1!./ViewServicesMainnetSwap.vue?vue&type=template&id=12059188 */ \"./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/modules/services/submodule/mainnetSwap/views/ViewServicesMainnetSwap.vue?vue&type=template&id=12059188\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_ViewServicesMainnetSwap_vue_vue_type_template_id_12059188__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n\n\n//# sourceURL=webpack:///./src/modules/services/submodule/mainnetSwap/views/ViewServicesMainnetSwap.vue?");

/***/ })

}]);