(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[61],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/modules/account/views/ViewMultisigAccount.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/modules/account/views/ViewMultisigAccount.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n/* harmony import */ var _modules_account_components_AccountTile_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/modules/account/components/AccountTile.vue */ \"./src/modules/account/components/AccountTile.vue\");\n/* harmony import */ var _state_walletState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/state/walletState */ \"./src/state/walletState.ts\");\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'ViewMultisigAccount',\n  components: {\n    AccountTile: _modules_account_components_AccountTile_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  },\n\n  setup() {\n    const accounts = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"computed\"])(\n      () => {\n        if(_state_walletState__WEBPACK_IMPORTED_MODULE_2__[\"walletState\"].currentLoggedInWallet){\n          if(_state_walletState__WEBPACK_IMPORTED_MODULE_2__[\"walletState\"].currentLoggedInWallet.others){\n            const concatOther = _state_walletState__WEBPACK_IMPORTED_MODULE_2__[\"walletState\"].currentLoggedInWallet.accounts.filter(account=>account.getDirectParentMultisig().length>0).concat(_state_walletState__WEBPACK_IMPORTED_MODULE_2__[\"walletState\"].currentLoggedInWallet.others.filter(account=>account.type==\"MULTISIG\"))\n            return concatOther;\n          } else{\n            return _state_walletState__WEBPACK_IMPORTED_MODULE_2__[\"walletState\"].currentLoggedInWallet.accounts.filter(account=>account.getDirectParentMultisig().length>0);\n          }\n        } else{\n          return null;\n        }\n      }\n    );\n\n    return {\n      accounts,\n    };\n  },\n});\n\n\n//# sourceURL=webpack:///./src/modules/account/views/ViewMultisigAccount.vue?./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1");

/***/ }),

/***/ "./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/modules/account/views/ViewMultisigAccount.vue?vue&type=template&id=c4d4d108":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/modules/account/views/ViewMultisigAccount.vue?vue&type=template&id=c4d4d108 ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\n\nconst _hoisted_1 = { class: \"mt-4 w-11/12 ml-auto mr-auto border-b-2\" }\nconst _hoisted_2 = { class: \"flex text-xxs md:text-xs font-semibold\" }\nconst _hoisted_3 = {\n  class: \"text-center border-b-2 pb-4 lg:pb-3 border-yellow-500\",\n  style: {\"width\":\"9rem\"}\n}\nconst _hoisted_4 = { class: \"my-4 w-11/12 ml-auto mr-auto\" }\nconst _hoisted_5 = { class: \"float-right mb-4 text-center w-44 text-white bg-blue-primary rounded-md font-semibold text-xs p-2\" }\nconst _hoisted_6 = { class: \"mt-2 py-3\" }\nconst _hoisted_7 = { class: \"w-11/12 ml-auto mr-auto flex flex-col gap-3\" }\nconst _hoisted_8 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"div\", { class: \"mb-36\" }, null, -1 /* HOISTED */)\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_router_link = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"resolveComponent\"])(\"router-link\")\n  const _component_AccountTile = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"resolveComponent\"])(\"AccountTile\")\n\n  return (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"div\", null, [\n    Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"div\", _hoisted_1, [\n      Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"div\", _hoisted_2, [\n        Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_router_link, {\n          to: { name: 'ViewAccountDisplayAll'},\n          class: \"w-18 text-center\"\n        }, {\n          default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"withCtx\"])(() => [\n            Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createTextVNode\"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])(_ctx.$t('general.overview')), 1 /* TEXT */)\n          ]),\n          _: 1 /* STABLE */\n        }),\n        Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_router_link, {\n          to: { name: 'ViewNormalAccount'},\n          class: \"w-28 text-center\",\n          style: {\"width\":\"6.5rem\"}\n        }, {\n          default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"withCtx\"])(() => [\n            Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createTextVNode\"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])(_ctx.$t('account.myAcc')), 1 /* TEXT */)\n          ]),\n          _: 1 /* STABLE */\n        }),\n        Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"div\", _hoisted_3, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])(_ctx.$t('account.multisigAcc')), 1 /* TEXT */),\n        Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_router_link, {\n          to: { name: 'ViewOtherAccount'},\n          class: \"text-center\",\n          style: {\"width\":\"8rem\"}\n        }, {\n          default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"withCtx\"])(() => [\n            Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createTextVNode\"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])(_ctx.$t('account.otherAcc')), 1 /* TEXT */)\n          ]),\n          _: 1 /* STABLE */\n        })\n      ])\n    ]),\n    Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"div\", _hoisted_4, [\n      Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_router_link, { to: {name:'ViewAccountCreateSelectType'} }, {\n        default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"withCtx\"])(() => [\n          Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"div\", _hoisted_5, \"+ \" + Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])(_ctx.$t('general.createNewAcc')), 1 /* TEXT */)\n        ]),\n        _: 1 /* STABLE */\n      })\n    ]),\n    Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"div\", _hoisted_6, [\n      Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"div\", _hoisted_7, [\n        (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(vue__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"renderList\"])($setup.accounts, (item, index) => {\n          return (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createBlock\"])(_component_AccountTile, {\n            key: index,\n            account: item\n          }, null, 8 /* PROPS */, [\"account\"]))\n        }), 128 /* KEYED_FRAGMENT */))\n      ])\n    ]),\n    _hoisted_8\n  ]))\n}\n\n//# sourceURL=webpack:///./src/modules/account/views/ViewMultisigAccount.vue?./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1");

/***/ }),

/***/ "./src/assets/img/icon-key.svg":
/*!*************************************!*\
  !*** ./src/assets/img/icon-key.svg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/img/icon-key.0e181e5e.svg\";\n\n//# sourceURL=webpack:///./src/assets/img/icon-key.svg?");

/***/ }),

/***/ "./src/modules/account/img/icon-pin.svg":
/*!**********************************************!*\
  !*** ./src/modules/account/img/icon-pin.svg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/img/icon-pin.4428bcf6.svg\";\n\n//# sourceURL=webpack:///./src/modules/account/img/icon-pin.svg?");

/***/ }),

/***/ "./src/modules/account/img/proximax-logo.svg":
/*!***************************************************!*\
  !*** ./src/modules/account/img/proximax-logo.svg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/img/proximax-logo.cb656acf.svg\";\n\n//# sourceURL=webpack:///./src/modules/account/img/proximax-logo.svg?");

/***/ }),

/***/ "./src/modules/account/views/ViewMultisigAccount.vue":
/*!***********************************************************!*\
  !*** ./src/modules/account/views/ViewMultisigAccount.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ViewMultisigAccount_vue_vue_type_template_id_c4d4d108__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ViewMultisigAccount.vue?vue&type=template&id=c4d4d108 */ \"./src/modules/account/views/ViewMultisigAccount.vue?vue&type=template&id=c4d4d108\");\n/* harmony import */ var _ViewMultisigAccount_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ViewMultisigAccount.vue?vue&type=script&lang=js */ \"./src/modules/account/views/ViewMultisigAccount.vue?vue&type=script&lang=js\");\n/* empty/unused harmony star reexport *//* harmony import */ var _home_runner_work_web_wallet_vuejs_web_wallet_vuejs_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader-v16/dist/exportHelper.js */ \"./node_modules/vue-loader-v16/dist/exportHelper.js\");\n/* harmony import */ var _home_runner_work_web_wallet_vuejs_web_wallet_vuejs_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_web_wallet_vuejs_web_wallet_vuejs_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\nconst __exports__ = /*#__PURE__*/_home_runner_work_web_wallet_vuejs_web_wallet_vuejs_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2___default()(_ViewMultisigAccount_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_ViewMultisigAccount_vue_vue_type_template_id_c4d4d108__WEBPACK_IMPORTED_MODULE_0__[\"render\"]],['__file',\"src/modules/account/views/ViewMultisigAccount.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack:///./src/modules/account/views/ViewMultisigAccount.vue?");

/***/ }),

/***/ "./src/modules/account/views/ViewMultisigAccount.vue?vue&type=script&lang=js":
/*!***********************************************************************************!*\
  !*** ./src/modules/account/views/ViewMultisigAccount.vue?vue&type=script&lang=js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_ViewMultisigAccount_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader-v16/dist??ref--0-1!./ViewMultisigAccount.vue?vue&type=script&lang=js */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/modules/account/views/ViewMultisigAccount.vue?vue&type=script&lang=js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_ViewMultisigAccount_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* empty/unused harmony star reexport */ \n\n//# sourceURL=webpack:///./src/modules/account/views/ViewMultisigAccount.vue?");

/***/ }),

/***/ "./src/modules/account/views/ViewMultisigAccount.vue?vue&type=template&id=c4d4d108":
/*!*****************************************************************************************!*\
  !*** ./src/modules/account/views/ViewMultisigAccount.vue?vue&type=template&id=c4d4d108 ***!
  \*****************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_ViewMultisigAccount_vue_vue_type_template_id_c4d4d108__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader-v16/dist??ref--0-1!./ViewMultisigAccount.vue?vue&type=template&id=c4d4d108 */ \"./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/modules/account/views/ViewMultisigAccount.vue?vue&type=template&id=c4d4d108\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_ViewMultisigAccount_vue_vue_type_template_id_c4d4d108__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n\n\n//# sourceURL=webpack:///./src/modules/account/views/ViewMultisigAccount.vue?");

/***/ }),

/***/ "./src/util/functions.ts":
/*!*******************************!*\
  !*** ./src/util/functions.ts ***!
  \*******************************/
/*! exports provided: copyKeyFunc, copyToClipboard, getCoingeckoCoinPrice, getCurrentPriceUSD, getXPXcurrencyPrice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"copyKeyFunc\", function() { return copyKeyFunc; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"copyToClipboard\", function() { return copyToClipboard; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCoingeckoCoinPrice\", function() { return getCoingeckoCoinPrice; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCurrentPriceUSD\", function() { return getCurrentPriceUSD; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getXPXcurrencyPrice\", function() { return getXPXcurrencyPrice; });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var primevue_usetoast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primevue/usetoast */ \"./node_modules/primevue/usetoast/usetoast.esm.js\");\n\n\n// copy address keys\nconst copyKeyFunc = (id) => {\n    const toast = Object(primevue_usetoast__WEBPACK_IMPORTED_MODULE_1__[\"useToast\"])();\n    // Credits: https://www.w3schools.com/howto/howto_js_copy_clipboard.asp\n    let copyText = document.getElementById(id);\n    /* Select the text field */\n    //copyText.innerText;\n    copyText === null || copyText === void 0 ? void 0 : copyText.select();\n    copyText === null || copyText === void 0 ? void 0 : copyText.setSelectionRange(0, 99999); /* For mobile devices */\n    /* Copy the text inside the text field */\n    document.execCommand(\"copy\");\n    let titleType;\n    if (id == 'private') {\n        titleType = 'Private key';\n    }\n    else if (id == 'public') {\n        titleType = 'Public key';\n    }\n    else if (id == 'pollIndexAddress') {\n        titleType = 'Poll Index Address';\n    }\n    else {\n        titleType = 'Address';\n    }\n    // toast.add({severity:'info', summary: titleType + ' copied', detail: copyText.value, group: 'br', life: 5000});\n};\nconst copyToClipboard = (data) => {\n    /*const listener = (e: ClipboardEvent) => {\n      e.clipboardData.setData('text/plain', data);\n      e.preventDefault();\n      document.removeEventListener('copy', listener);\n    };\n    document.addEventListener('copy', listener);\n    document.execCommand('copy');*/\n    let textInput;\n    try {\n        textInput = document.createElement('textarea');\n        textInput.setAttribute('readonly', true);\n        textInput.setAttribute('contenteditable', true);\n        textInput.style.position = 'fixed';\n        textInput.value = data;\n        document.body.appendChild(textInput);\n        textInput.focus();\n        textInput.select();\n        const range = document.createRange();\n        range.selectNodeContents(textInput);\n        const textSelection = window.getSelection();\n        textSelection.removeAllRanges();\n        textSelection.addRange(range);\n        textInput.setSelectionRange(0, textInput.value.length);\n        document.execCommand('copy');\n    }\n    catch (err) {\n        console.error(err);\n    }\n    finally {\n        document.body.removeChild(textInput);\n    }\n    return true;\n};\nconst getCoingecko = (coinId) => {\n    return fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`).then((res) => res.json()).then((data) => { return data.market_data.current_price.usd; });\n};\nconst getCoingeckoCoinPrice = (coinId) => {\n    return fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`).then((res) => res.json()).then((data) => { return data.market_data.current_price; });\n};\nconst getCurrentPriceUSD = (url) => {\n    return fetch(url).then((res) => res.json()).then((data) => { return data; });\n};\nconst getXPXcurrencyPrice = (balance) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__awaiter\"])(void 0, void 0, void 0, function* () {\n    let total;\n    let coinId = 'proximax';\n    let rate = yield getCoingecko(coinId);\n    total = rate * balance;\n    return total;\n});\n// export const getPrettyAddress = (address: string) => {\n//   const prettyAddress = Address.createFromRawAddress(address);\n//   return prettyAddress.pretty();\n// }\n\n\n//# sourceURL=webpack:///./src/util/functions.ts?");

/***/ })

}]);