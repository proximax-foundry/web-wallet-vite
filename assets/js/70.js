(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[70],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/modules/account/views/ViewNormalAccount.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/modules/account/views/ViewNormalAccount.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n/* harmony import */ var _modules_account_components_AccountTile_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/modules/account/components/AccountTile.vue */ \"./src/modules/account/components/AccountTile.vue\");\n/* harmony import */ var primevue_usetoast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primevue/usetoast */ \"./node_modules/primevue/usetoast/usetoast.esm.js\");\n/* harmony import */ var _state_walletState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/state/walletState */ \"./src/state/walletState.ts\");\n/* harmony import */ var _util_walletUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/util/walletUtils */ \"./src/util/walletUtils.ts\");\n/* harmony import */ var _state_networkState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/state/networkState */ \"./src/state/networkState.ts\");\n\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'ViewNormalAccount',\n  props:[\n    'deleteAccount'\n  ],\n  components: {\n    AccountTile: _modules_account_components_AccountTile_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  },\n\n  setup(p) {\n    const toast = Object(primevue_usetoast__WEBPACK_IMPORTED_MODULE_2__[\"useToast\"])();\n    const internalInstance = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"getCurrentInstance\"])();\n    const emitter = internalInstance.appContext.config.globalProperties.emitter;\n    const currentMenu = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"ref\"])('');\n    const showMenu = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"ref\"])([]);\n    \n    \n    //WalletUtils.confirmedTransactionRefresh(walletState.currentLoggedInWallet, networkState.currentNetworkProfile.network.currency.assetId);\n    // get num of accounts\n    const normalAcc = [].concat(_state_walletState__WEBPACK_IMPORTED_MODULE_3__[\"walletState\"].currentLoggedInWallet.accounts)\n    var num_acc = normalAcc.length;\n    var i = 0;\n\n    while(i < num_acc){\n      showMenu.value[i] = false;\n      i++;\n    }\n    \n    emitter.on(\"SHOW_MENU_TRIGGER\", payload => {\n      showMenu.value[payload] = true;\n      currentMenu.value = payload;\n    });\n    \n    emitter.on(\"CLOSE_MENU_TRIGGER\", payload => {\n      showMenu.value[payload] = false;\n      currentMenu.value = payload;\n    });\n\n    emitter.on(\"CLOSE_ALL_MENU_TRIGGER\", () => {\n      var j = 0;\n      while(j < num_acc){\n        showMenu.value[j] = false;\n        j++;\n      }\n    });\n\n    if(p.deleteAccount == 'success'){\n      toast.add({severity:'success', summary: 'Notification', detail: 'Account has been removed successfully', group: 'br', life: 5000});\n    }\n\n    const accounts = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"computed\"])(\n      () => {\n        if(_state_walletState__WEBPACK_IMPORTED_MODULE_3__[\"walletState\"].currentLoggedInWallet){\n            return _state_walletState__WEBPACK_IMPORTED_MODULE_3__[\"walletState\"].currentLoggedInWallet.accounts;\n        } else{\n          return null;\n        }\n      }\n    );\n    \n\n    // emitted from App.vue when click on any part of the page\n    emitter.on('PAGE_CLICK', () => {\n      if(currentMenu.value === ''){\n        var k = 0;\n        while(k < num_acc){\n          showMenu.value[k] = false;\n          k++;\n        }\n      }\n    });\n\n    emitter.on('HOVER_OVER_MENU_TRIGGER', index => {\n      currentMenu.value = index;\n    });\n\n    emitter.on('HOVER_OUT_MENU_TRIGGER', () => {\n      currentMenu.value = '';\n    });\n\n    return {\n      walletState: _state_walletState__WEBPACK_IMPORTED_MODULE_3__[\"walletState\"],\n      accounts,\n      showMenu\n    };\n  },\n\n});\n\n\n//# sourceURL=webpack:///./src/modules/account/views/ViewNormalAccount.vue?./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1");

/***/ }),

/***/ "./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/modules/account/views/ViewNormalAccount.vue?vue&type=template&id=6d6d17ed":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/modules/account/views/ViewNormalAccount.vue?vue&type=template&id=6d6d17ed ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n/* harmony import */ var _modules_account_img_icon_account_settings_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/modules/account/img/icon-account-settings.svg */ \"./src/modules/account/img/icon-account-settings.svg\");\n/* harmony import */ var _modules_account_img_icon_account_settings_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_account_img_icon_account_settings_svg__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n\nconst _hoisted_1 = { class: \"mt-4 w-11/12 ml-auto mr-auto \" }\nconst _hoisted_2 = { class: \"flex text-xxs md:text-xs font-semibold border-b-2 \" }\nconst _hoisted_3 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createTextVNode\"])(\"Overview\")\nconst _hoisted_4 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", {\n  class: \" w-28 text-center border-b-2 pb-4 lg:pb-3 border-yellow-500\",\n  style: {\"width\":\"6.5rem\"}\n}, \"My Accounts\", -1 /* HOISTED */)\nconst _hoisted_5 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createTextVNode\"])(\"Multisig Accounts\")\nconst _hoisted_6 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createTextVNode\"])(\"Other Accounts\")\nconst _hoisted_7 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", { class: \"flex flex-row gap-1 ml-auto\" }, [\n  /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"img\", {\n    src: _modules_account_img_icon_account_settings_svg__WEBPACK_IMPORTED_MODULE_1___default.a,\n    class: \"w-4 h-4\"\n  }),\n  /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", null, \"Accounts Settings\")\n], -1 /* HOISTED */)\nconst _hoisted_8 = { class: \"mt-2 py-3 \" }\nconst _hoisted_9 = { class: \"w-11/12 ml-auto mr-auto flex flex-col gap-3\" }\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_router_link = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"resolveComponent\"])(\"router-link\")\n  const _component_AccountTile = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"resolveComponent\"])(\"AccountTile\")\n\n  return (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createBlock\"])(\"div\", null, [\n    Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", _hoisted_1, [\n      Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", _hoisted_2, [\n        Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_router_link, {\n          to: { name: 'ViewAccountDisplayAll'},\n          class: \"w-18 text-center \"\n        }, {\n          default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"withCtx\"])(() => [\n            _hoisted_3\n          ]),\n          _: 1 /* STABLE */\n        }),\n        _hoisted_4,\n        Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_router_link, {\n          to: { name: 'ViewMultisigAccount'},\n          class: \"text-center \",\n          style: {\"width\":\"9rem\"}\n        }, {\n          default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"withCtx\"])(() => [\n            _hoisted_5\n          ]),\n          _: 1 /* STABLE */\n        }),\n        Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_router_link, {\n          to: { name: 'ViewOtherAccount'},\n          class: \"text-center \",\n          style: {\"width\":\"8rem\"}\n        }, {\n          default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"withCtx\"])(() => [\n            _hoisted_6\n          ]),\n          _: 1 /* STABLE */\n        }),\n        _hoisted_7\n      ])\n    ]),\n    Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", _hoisted_8, [\n      Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", _hoisted_9, [\n        (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createBlock\"])(vue__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"renderList\"])($setup.accounts, (item, index) => {\n          return (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createBlock\"])(_component_AccountTile, {\n            key: index,\n            account: item,\n            showMenuCall: $setup.showMenu[index],\n            i: index\n          }, null, 8 /* PROPS */, [\"account\", \"showMenuCall\", \"i\"]))\n        }), 128 /* KEYED_FRAGMENT */))\n      ])\n    ])\n  ]))\n}\n\n//# sourceURL=webpack:///./src/modules/account/views/ViewNormalAccount.vue?./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1");

/***/ }),

/***/ "./src/modules/account/views/ViewNormalAccount.vue":
/*!*********************************************************!*\
  !*** ./src/modules/account/views/ViewNormalAccount.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ViewNormalAccount_vue_vue_type_template_id_6d6d17ed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ViewNormalAccount.vue?vue&type=template&id=6d6d17ed */ \"./src/modules/account/views/ViewNormalAccount.vue?vue&type=template&id=6d6d17ed\");\n/* harmony import */ var _ViewNormalAccount_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ViewNormalAccount.vue?vue&type=script&lang=js */ \"./src/modules/account/views/ViewNormalAccount.vue?vue&type=script&lang=js\");\n/* empty/unused harmony star reexport *//* harmony import */ var _home_runner_work_web_wallet_vuejs_web_wallet_vuejs_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader-v16/dist/exportHelper.js */ \"./node_modules/vue-loader-v16/dist/exportHelper.js\");\n/* harmony import */ var _home_runner_work_web_wallet_vuejs_web_wallet_vuejs_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_web_wallet_vuejs_web_wallet_vuejs_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\nconst __exports__ = /*#__PURE__*/_home_runner_work_web_wallet_vuejs_web_wallet_vuejs_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2___default()(_ViewNormalAccount_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_ViewNormalAccount_vue_vue_type_template_id_6d6d17ed__WEBPACK_IMPORTED_MODULE_0__[\"render\"]],['__file',\"src/modules/account/views/ViewNormalAccount.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack:///./src/modules/account/views/ViewNormalAccount.vue?");

/***/ }),

/***/ "./src/modules/account/views/ViewNormalAccount.vue?vue&type=script&lang=js":
/*!*********************************************************************************!*\
  !*** ./src/modules/account/views/ViewNormalAccount.vue?vue&type=script&lang=js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_ViewNormalAccount_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader-v16/dist??ref--0-1!./ViewNormalAccount.vue?vue&type=script&lang=js */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/modules/account/views/ViewNormalAccount.vue?vue&type=script&lang=js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_ViewNormalAccount_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* empty/unused harmony star reexport */ \n\n//# sourceURL=webpack:///./src/modules/account/views/ViewNormalAccount.vue?");

/***/ }),

/***/ "./src/modules/account/views/ViewNormalAccount.vue?vue&type=template&id=6d6d17ed":
/*!***************************************************************************************!*\
  !*** ./src/modules/account/views/ViewNormalAccount.vue?vue&type=template&id=6d6d17ed ***!
  \***************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_ViewNormalAccount_vue_vue_type_template_id_6d6d17ed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader-v16/dist??ref--0-1!./ViewNormalAccount.vue?vue&type=template&id=6d6d17ed */ \"./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/modules/account/views/ViewNormalAccount.vue?vue&type=template&id=6d6d17ed\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_ViewNormalAccount_vue_vue_type_template_id_6d6d17ed__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n\n\n//# sourceURL=webpack:///./src/modules/account/views/ViewNormalAccount.vue?");

/***/ })

}]);