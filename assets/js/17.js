(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/modules/dashboard/components/DashboardModels/LockFundModal.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/modules/dashboard/components/DashboardModels/LockFundModal.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n/* harmony import */ var _util_transactions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/util/transactions.js */ \"./src/util/transactions.js\");\n/* harmony import */ var _util_dataBridge_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/util/dataBridge.js */ \"./src/util/dataBridge.js\");\n/* harmony import */ var tsjs_xpx_chain_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tsjs-xpx-chain-sdk */ \"./node_modules/tsjs-xpx-chain-sdk/dist/index.js\");\n/* harmony import */ var tsjs_xpx_chain_sdk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tsjs_xpx_chain_sdk__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\n  name: 'LockFundModal',\n  props: {\n    'showModal': Boolean,\n    'transaction': Object,\n  },\n  setup(p) {\n    const internalInstance = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"getCurrentInstance\"])();\n    const emitter = internalInstance.appContext.config.globalProperties.emitter;\n    const hover = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"ref\"])(false);\n    const timestamp = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"ref\"])('');\n    const effectiveFee = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"ref\"])('');\n    const amount = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"ref\"])('0.000000');\n    const duration = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"ref\"])('');\n\n    const closeModal = () => {\n      emitter.emit(\"CLOSE_MODAL\", false);\n    };\n\n    Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"watch\"])(() => p.showModal, () => {\n      if(p.showModal){\n        // console.log(p.transaction);\n        if (p.transaction.transactionInfo && p.transaction.transactionInfo.height) {\n          const height = p.transaction.transactionInfo.height.compact();\n          if (typeof (height) === 'number') {\n            const existBlock = _util_dataBridge_js__WEBPACK_IMPORTED_MODULE_2__[\"dataBridge\"].filterBlockStorage(height);\n            // console.log(existBlock)\n            if (existBlock) {\n              // console.log('In cache', existBlock);\n              timestamp.value = `${_util_transactions_js__WEBPACK_IMPORTED_MODULE_1__[\"transactions\"].dateFormatUTC(new tsjs_xpx_chain_sdk__WEBPACK_IMPORTED_MODULE_3__[\"UInt64\"]([existBlock.timestamp.lower, existBlock.timestamp.higher]))} - UTC`;\n              const calculateEffectiveFee = _util_transactions_js__WEBPACK_IMPORTED_MODULE_1__[\"transactions\"].amountFormatterSimple(existBlock.feeMultiplier * p.transaction.data.size);\n              effectiveFee.value = _util_transactions_js__WEBPACK_IMPORTED_MODULE_1__[\"transactions\"].getDataPart(calculateEffectiveFee, 6);\n              // console.log('Effective fee ---> ', transaction.effectiveFee);\n            } else {\n              _util_dataBridge_js__WEBPACK_IMPORTED_MODULE_2__[\"dataBridge\"].getBlockInfo(height).subscribe(\n                next => {\n                  // console.log('Http', next);\n                  _util_dataBridge_js__WEBPACK_IMPORTED_MODULE_2__[\"dataBridge\"].validateBlock(next);\n                  timestamp.value = `${_util_transactions_js__WEBPACK_IMPORTED_MODULE_1__[\"transactions\"].dateFormatUTC(next.timestamp)} - UTC`;\n                  const calculateEffectiveFee = _util_transactions_js__WEBPACK_IMPORTED_MODULE_1__[\"transactions\"].amountFormatterSimple(next.feeMultiplier * p.transaction.data.size);\n                  effectiveFee.value = _util_transactions_js__WEBPACK_IMPORTED_MODULE_1__[\"transactions\"].getDataPart(calculateEffectiveFee, 6);\n                  // console.log('Effective fee ---> ', effectiveFee.value);\n                }\n              );\n            }\n          } else {\n            effectiveFee.value = _util_transactions_js__WEBPACK_IMPORTED_MODULE_1__[\"transactions\"].getDataPart('0.00000', 6);\n          }\n        } else {\n          effectiveFee.value = _util_transactions_js__WEBPACK_IMPORTED_MODULE_1__[\"transactions\"].getDataPart('0.00000', 6);\n        }\n        const id = p.transaction.mosaic.id;\n        _util_transactions_js__WEBPACK_IMPORTED_MODULE_1__[\"transactions\"].getLockFundAmount(id, p.transaction).then((amountParts) => {\n          amount.value = amountParts.part1 + amountParts.part2;\n        });\n\n        duration.value = p.transaction.duration.compact();\n      }\n    }, {immediate: true})\n\n    return {\n      hover,\n      closeModal,\n      timestamp,\n      effectiveFee,\n      amount,\n      duration,\n    };\n  }\n});\n\n\n//# sourceURL=webpack:///./src/modules/dashboard/components/DashboardModels/LockFundModal.vue?./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/modules/dashboard/components/DashboardModels/LockFundModal.vue?vue&type=style&index=0&id=2de00e8f&lang=scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/modules/dashboard/components/DashboardModels/LockFundModal.vue?vue&type=style&index=0&id=2de00e8f&lang=scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".w {\\n  word-wrap: break-word;\\n  font-size: 12px;\\n  margin-bottom: 5px;\\n  display: block;\\n}\\n.content {\\n  margin: 15px auto;\\n}\\n.content > div {\\n  font-size: 12px;\\n  line-height: 14px;\\n  margin-bottom: 5px;\\n}\\n.content > div div:first-child {\\n  font-weight: bold;\\n}\\n.hash-div {\\n  font-size: 12px;\\n  line-height: 14px;\\n}\\n.hash-div div:first-child {\\n  margin-bottom: 5px;\\n  font-weight: bold;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/modules/dashboard/components/DashboardModels/LockFundModal.vue?./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1");

/***/ }),

/***/ "./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/modules/dashboard/components/DashboardModels/LockFundModal.vue?vue&type=template&id=2de00e8f":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader-v16/dist/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/modules/dashboard/components/DashboardModels/LockFundModal.vue?vue&type=template&id=2de00e8f ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n/* harmony import */ var _assets_img_icon_prx_xpx_blue_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/img/icon-prx-xpx-blue.svg */ \"./src/assets/img/icon-prx-xpx-blue.svg\");\n/* harmony import */ var _assets_img_icon_prx_xpx_blue_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_img_icon_prx_xpx_blue_svg__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n\nconst _hoisted_1 = {\n  key: 0,\n  class: \"popup-outer absolute flex z-50\"\n}\nconst _hoisted_2 = { class: \"modal-popup-box relative\" }\nconst _hoisted_3 = {\n  class: \"delete-position\",\n  style: {\"position\":\"absolute\",\"right\":\"15px\"}\n}\nconst _hoisted_4 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"h1\", { class: \"default-title font-bold my-5\" }, \"Transaction Information\", -1 /* HOISTED */)\nconst _hoisted_5 = { class: \"text-left md:justify-start md:flex md:items-stretch\" }\nconst _hoisted_6 = { class: \"block md:w-7/12 md:inline-block\" }\nconst _hoisted_7 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", { class: \"relative\" }, [\n  /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"span\", { class: \"font-bold text-md mr-3\" }, \"LockFund\")\n], -1 /* HOISTED */)\nconst _hoisted_8 = { class: \"text-xs my-2\" }\nconst _hoisted_9 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"span\", { class: \"font-bold\" }, \"Effective Fee:\", -1 /* HOISTED */)\nconst _hoisted_10 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createTextVNode\"])()\nconst _hoisted_11 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"img\", {\n  src: _assets_img_icon_prx_xpx_blue_svg__WEBPACK_IMPORTED_MODULE_1___default.a,\n  class: \"w-5 inline mx-2\"\n}, null, -1 /* HOISTED */)\nconst _hoisted_12 = { class: \"text-xs\" }\nconst _hoisted_13 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createTextVNode\"])()\nconst _hoisted_14 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"span\", { class: \"text-sm\" }, \"XPX\", -1 /* HOISTED */)\nconst _hoisted_15 = { class: \"content\" }\nconst _hoisted_16 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", null, \"Type:\", -1 /* HOISTED */)\nconst _hoisted_17 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", null, \"Duration:\", -1 /* HOISTED */)\nconst _hoisted_18 = { class: \"hash-div\" }\nconst _hoisted_19 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", null, \"Transaction hash:\", -1 /* HOISTED */)\nconst _hoisted_20 = { class: \"mt-5\" }\nconst _hoisted_21 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"span\", { class: \"font-bold text-md\" }, \"Amount: \", -1 /* HOISTED */)\nconst _hoisted_22 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createTextVNode\"])()\nconst _hoisted_23 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"img\", {\n  src: _assets_img_icon_prx_xpx_blue_svg__WEBPACK_IMPORTED_MODULE_1___default.a,\n  class: \"w-5 inline ml-2\"\n}, null, -1 /* HOISTED */)\nconst _hoisted_24 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createTextVNode\"])()\nconst _hoisted_25 = { class: \"block md:w-5/12 md:inline-block bg-gray-200 rounded-2xl p-2\" }\nconst _hoisted_26 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", { class: \"font-bold text-xs mb-1 block\" }, \"Signer:\", -1 /* HOISTED */)\nconst _hoisted_27 = { class: \"w w-96 md:w-full\" }\nconst _hoisted_28 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", { class: \"font-bold text-xs mb-1 block mt-3\" }, \"Signature:\", -1 /* HOISTED */)\nconst _hoisted_29 = { class: \"w w-96 md:w-full\" }\nconst _hoisted_30 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", { class: \"font-bold text-xs mb-1 block mt-3\" }, \"Hash:\", -1 /* HOISTED */)\nconst _hoisted_31 = { class: \"w w-96 md:w-full\" }\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_font_awesome_icon = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"resolveComponent\"])(\"font-awesome-icon\")\n\n  return (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createBlock\"])(\"div\", null, [\n    Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(vue__WEBPACK_IMPORTED_MODULE_0__[\"Transition\"], {\n      \"enter-active-class\": \"animate__animated animate__fadeInDown\",\n      \"leave-active-class\": \"animate__animated animate__fadeOutUp\"\n    }, {\n      default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"withCtx\"])(() => [\n        ($props.showModal)\n          ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createBlock\"])(\"div\", _hoisted_1, [\n              Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", _hoisted_2, [\n                Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", _hoisted_3, [\n                  Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_font_awesome_icon, {\n                    icon: \"times\",\n                    class: \"delete-icon-style\",\n                    onClick: _cache[1] || (_cache[1] = $event => {$setup.closeModal();})\n                  })\n                ]),\n                Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", null, [\n                  _hoisted_4,\n                  Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", _hoisted_5, [\n                    Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", _hoisted_6, [\n                      _hoisted_7,\n                      Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", _hoisted_8, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])($setup.timestamp), 1 /* TEXT */),\n                      Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", null, [\n                        _hoisted_9,\n                        _hoisted_10,\n                        _hoisted_11,\n                        Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"span\", _hoisted_12, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])($setup.effectiveFee.part1) + Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])($setup.effectiveFee.part2), 1 /* TEXT */),\n                        _hoisted_13,\n                        _hoisted_14\n                      ]),\n                      Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", _hoisted_15, [\n                        Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", null, [\n                          _hoisted_16,\n                          Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])($props.transaction.type), 1 /* TEXT */)\n                        ]),\n                        Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", null, [\n                          _hoisted_17,\n                          Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])($setup.duration) + \" blocks\", 1 /* TEXT */)\n                        ])\n                      ]),\n                      Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", _hoisted_18, [\n                        _hoisted_19,\n                        Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])($props.transaction.hash), 1 /* TEXT */)\n                      ]),\n                      Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", _hoisted_20, [\n                        _hoisted_21,\n                        _hoisted_22,\n                        _hoisted_23,\n                        _hoisted_24,\n                        Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"span\", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])($setup.amount) + \" XPX\", 1 /* TEXT */)\n                      ])\n                    ]),\n                    Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", _hoisted_25, [\n                      _hoisted_26,\n                      Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", _hoisted_27, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])($props.transaction.signer.address.address), 1 /* TEXT */),\n                      _hoisted_28,\n                      Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", _hoisted_29, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])($props.transaction.signature), 1 /* TEXT */),\n                      _hoisted_30,\n                      Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", _hoisted_31, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])($props.transaction.transactionInfo.hash), 1 /* TEXT */)\n                    ])\n                  ])\n                ])\n              ])\n            ]))\n          : Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createCommentVNode\"])(\"v-if\", true)\n      ]),\n      _: 1 /* STABLE */\n    }),\n    ($props.showModal)\n      ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createBlock\"])(\"div\", {\n          key: 0,\n          onClick: _cache[2] || (_cache[2] = $event => {$setup.closeModal();}),\n          class: \"fixed inset-0 bg-opacity-90 bg-blue-primary\"\n        }))\n      : Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createCommentVNode\"])(\"v-if\", true)\n  ]))\n}\n\n//# sourceURL=webpack:///./src/modules/dashboard/components/DashboardModels/LockFundModal.vue?./node_modules/vue-loader-v16/dist/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/modules/dashboard/components/DashboardModels/LockFundModal.vue?vue&type=style&index=0&id=2de00e8f&lang=scss":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/modules/dashboard/components/DashboardModels/LockFundModal.vue?vue&type=style&index=0&id=2de00e8f&lang=scss ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader-v16/dist??ref--0-1!./LockFundModal.vue?vue&type=style&index=0&id=2de00e8f&lang=scss */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/modules/dashboard/components/DashboardModels/LockFundModal.vue?vue&type=style&index=0&id=2de00e8f&lang=scss\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"3b6a01f6\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/modules/dashboard/components/DashboardModels/LockFundModal.vue?./node_modules/vue-style-loader??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1");

/***/ }),

/***/ "./src/modules/dashboard/components/DashboardModels/LockFundModal.vue":
/*!****************************************************************************!*\
  !*** ./src/modules/dashboard/components/DashboardModels/LockFundModal.vue ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _LockFundModal_vue_vue_type_template_id_2de00e8f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LockFundModal.vue?vue&type=template&id=2de00e8f */ \"./src/modules/dashboard/components/DashboardModels/LockFundModal.vue?vue&type=template&id=2de00e8f\");\n/* harmony import */ var _LockFundModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LockFundModal.vue?vue&type=script&lang=js */ \"./src/modules/dashboard/components/DashboardModels/LockFundModal.vue?vue&type=script&lang=js\");\n/* empty/unused harmony star reexport *//* harmony import */ var _LockFundModal_vue_vue_type_style_index_0_id_2de00e8f_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LockFundModal.vue?vue&type=style&index=0&id=2de00e8f&lang=scss */ \"./src/modules/dashboard/components/DashboardModels/LockFundModal.vue?vue&type=style&index=0&id=2de00e8f&lang=scss\");\n\n\n\n\n\n_LockFundModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].render = _LockFundModal_vue_vue_type_template_id_2de00e8f__WEBPACK_IMPORTED_MODULE_0__[\"render\"]\n/* hot reload */\nif (false) {}\n\n_LockFundModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].__file = \"src/modules/dashboard/components/DashboardModels/LockFundModal.vue\"\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_LockFundModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n//# sourceURL=webpack:///./src/modules/dashboard/components/DashboardModels/LockFundModal.vue?");

/***/ }),

/***/ "./src/modules/dashboard/components/DashboardModels/LockFundModal.vue?vue&type=script&lang=js":
/*!****************************************************************************************************!*\
  !*** ./src/modules/dashboard/components/DashboardModels/LockFundModal.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_LockFundModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader-v16/dist??ref--0-1!./LockFundModal.vue?vue&type=script&lang=js */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/modules/dashboard/components/DashboardModels/LockFundModal.vue?vue&type=script&lang=js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_LockFundModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* empty/unused harmony star reexport */ \n\n//# sourceURL=webpack:///./src/modules/dashboard/components/DashboardModels/LockFundModal.vue?");

/***/ }),

/***/ "./src/modules/dashboard/components/DashboardModels/LockFundModal.vue?vue&type=style&index=0&id=2de00e8f&lang=scss":
/*!*************************************************************************************************************************!*\
  !*** ./src/modules/dashboard/components/DashboardModels/LockFundModal.vue?vue&type=style&index=0&id=2de00e8f&lang=scss ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_LockFundModal_vue_vue_type_style_index_0_id_2de00e8f_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader??ref--8-oneOf-1-0!../../../../../node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader-v16/dist??ref--0-1!./LockFundModal.vue?vue&type=style&index=0&id=2de00e8f&lang=scss */ \"./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/modules/dashboard/components/DashboardModels/LockFundModal.vue?vue&type=style&index=0&id=2de00e8f&lang=scss\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_LockFundModal_vue_vue_type_style_index_0_id_2de00e8f_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_LockFundModal_vue_vue_type_style_index_0_id_2de00e8f_lang_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_LockFundModal_vue_vue_type_style_index_0_id_2de00e8f_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_LockFundModal_vue_vue_type_style_index_0_id_2de00e8f_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./src/modules/dashboard/components/DashboardModels/LockFundModal.vue?");

/***/ }),

/***/ "./src/modules/dashboard/components/DashboardModels/LockFundModal.vue?vue&type=template&id=2de00e8f":
/*!**********************************************************************************************************!*\
  !*** ./src/modules/dashboard/components/DashboardModels/LockFundModal.vue?vue&type=template&id=2de00e8f ***!
  \**********************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_v16_dist_templateLoader_js_ref_5_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_LockFundModal_vue_vue_type_template_id_2de00e8f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--5!../../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../../node_modules/vue-loader-v16/dist??ref--0-1!./LockFundModal.vue?vue&type=template&id=2de00e8f */ \"./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/modules/dashboard/components/DashboardModels/LockFundModal.vue?vue&type=template&id=2de00e8f\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_v16_dist_templateLoader_js_ref_5_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_LockFundModal_vue_vue_type_template_id_2de00e8f__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n\n\n//# sourceURL=webpack:///./src/modules/dashboard/components/DashboardModels/LockFundModal.vue?");

/***/ }),

/***/ "./src/util/dataBridge.js":
/*!********************************!*\
  !*** ./src/util/dataBridge.js ***!
  \********************************/
/*! exports provided: dataBridge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dataBridge\", function() { return dataBridge; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n/* harmony import */ var tsjs_xpx_chain_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tsjs-xpx-chain-sdk */ \"./node_modules/tsjs-xpx-chain-sdk/dist/index.js\");\n/* harmony import */ var tsjs_xpx_chain_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tsjs_xpx_chain_sdk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store_sirius__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store/sirius */ \"./src/store/sirius.js\");\n/* harmony import */ var _environment_environment_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environment/environment.js */ \"./src/environment/environment.js\");\n\n\n\n\n\nconst filterBlockStorage = (height) => {\n  const blocksStorage = localStorage.getItem(_environment_environment_js__WEBPACK_IMPORTED_MODULE_3__[\"environment\"].nameKeyBlockStorage);\n  if (blocksStorage) {\n    // console.log('blocksStorage', blocksStorage);\n    const parsedData = JSON.parse(blocksStorage);\n    return parsedData.find(x => new tsjs_xpx_chain_sdk__WEBPACK_IMPORTED_MODULE_1__[\"UInt64\"]([x.height.lower, x.height.higher]).compact() === height);\n  }\n  return null;\n}\n\nconst validateBlock = (blockInfo) => {\n  if (blockInfo.numTransactions && blockInfo.numTransactions >= 1) {\n    const blocksStorage = localStorage.getItem(_environment_environment_js__WEBPACK_IMPORTED_MODULE_3__[\"environment\"].nameKeyBlockStorage);\n    if (blocksStorage) {\n      const parsedData = JSON.parse(blocksStorage);\n      parsedData.unshift(blockInfo);\n      localStorage.setItem(_environment_environment_js__WEBPACK_IMPORTED_MODULE_3__[\"environment\"].nameKeyBlockStorage, JSON.stringify(parsedData.slice(0, 100)));\n    } else {\n      localStorage.setItem(_environment_environment_js__WEBPACK_IMPORTED_MODULE_3__[\"environment\"].nameKeyBlockStorage, JSON.stringify([blockInfo]));\n    }\n  }\n}\n\nconst getBlockInfo = (height = 1) => {\n  return _store_sirius__WEBPACK_IMPORTED_MODULE_2__[\"siriusStore\"].blockHttp.getBlockByHeight(height);\n}\n\nconst dataBridge = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"readonly\"])({\n  filterBlockStorage,\n  validateBlock,\n  getBlockInfo,\n});\n\n//# sourceURL=webpack:///./src/util/dataBridge.js?");

/***/ })

}]);