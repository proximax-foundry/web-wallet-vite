(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[56],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/ts-loader/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/PasswordInput.vue?vue&type=script&lang=ts":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/ts-loader??ref--13-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/PasswordInput.vue?vue&type=script&lang=ts ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"defineComponent\"])({\n    props: {\n        placeholder: {\n            type: String\n        },\n        errorMessage: {\n            type: String\n        },\n        icon: {\n            type: String\n        },\n        showError: {\n            type: Boolean\n        },\n        modelValue: {\n            type: String\n        },\n        disabled: {\n            type: Boolean\n        }\n    },\n    emits: [\n        'update:modelValue'\n    ],\n    name: 'PasswordInput',\n    data() {\n        return {\n            inputPassword: \"\",\n            showPassword: false,\n            inputType: 'password',\n            borderColor: 'border border-grey-300',\n            eyeIcon: 'eye',\n            pswdErr: false,\n        };\n    },\n    methods: {\n        hideShowPassword: function () {\n            this.showPassword = !this.showPassword;\n            this.showPassword ? this.eyeIcon = 'eye-slash' : this.eyeIcon = 'eye';\n            this.showPassword ? this.inputType = 'text' : this.inputType = 'password';\n        },\n        clickInputPassword: function () {\n            if (!this.pswdErr) {\n                this.borderColor = 'border-2 border-blue-primary';\n            }\n        },\n        blurInputPassword: function () {\n            var passwdPattern = \"^[^ ]{8,}$\";\n            if (this.modelValue == '') {\n                this.borderColor = 'border-2 border-red-primary';\n                this.pswdErr = true;\n            }\n            else if (Object.keys(this.modelValue).length < 8) {\n                this.borderColor = 'border-2 border-red-primary';\n                this.pswdErr = true;\n            }\n            else {\n                this.borderColor = 'border-2 border-gray-300';\n                this.pswdErr = false;\n                // }\n            }\n        },\n    },\n    mounted() {\n        // this.emitter.on(\"CLEAR_PASSWORD\", (payload) => {\n        //   this.inputPassword = payload;\n        //   this.pswdErr = false;\n        //   this.borderColor = 'border border-gray-300';\n        // });\n    }\n}));\n\n\n//# sourceURL=webpack:///./src/components/PasswordInput.vue?./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/ts-loader??ref--13-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/ts-loader/index.js?!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/PasswordInput.vue?vue&type=template&id=03b98a6f&ts=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/ts-loader??ref--13-1!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/PasswordInput.vue?vue&type=template&id=03b98a6f&ts=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _hoisted_1 = { class: \"bg-white py-2 border flex\" };\nconst _hoisted_2 = {\n    key: 0,\n    class: \"error error-password text-left my-2\"\n};\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n    const _component_font_awesome_icon = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"resolveComponent\"])(\"font-awesome-icon\");\n    return (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createBlock\"])(\"div\", null, [\n        Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", _hoisted_1, [\n            Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"input\", {\n                type: _ctx.inputType,\n                disabled: _ctx.disabled == true,\n                value: _ctx.modelValue,\n                onInput: _cache[1] || (_cache[1] = ($event) => (_ctx.$emit('update:modelValue', $event.target.value))),\n                class: \"text-placeholder text-left ml-2\",\n                placeholder: _ctx.placeholder,\n                onClick: _cache[2] || (_cache[2] = ($event) => (_ctx.clickInputPassword())),\n                onBlur: _cache[3] || (_cache[3] = ($event) => (_ctx.blurInputPassword())),\n                autocomplete: \"off\"\n            }, null, 40 /* PROPS, HYDRATE_EVENTS */, [\"type\", \"disabled\", \"value\", \"placeholder\"]),\n            (!_ctx.showPassword)\n                ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createBlock\"])(_component_font_awesome_icon, {\n                    key: 0,\n                    icon: \"eye\",\n                    class: \"text-gray-500 relative cursor-pointer text-right mr-2\",\n                    onClick: _cache[4] || (_cache[4] = ($event) => { _ctx.hideShowPassword(); })\n                }))\n                : Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createCommentVNode\"])(\"v-if\", true),\n            (_ctx.showPassword)\n                ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createBlock\"])(_component_font_awesome_icon, {\n                    key: 1,\n                    icon: \"eye-slash\",\n                    class: \"text-gray-500 relative cursor-pointer text-right mr-2\",\n                    onClick: _cache[5] || (_cache[5] = ($event) => { _ctx.hideShowPassword(); })\n                }))\n                : Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createCommentVNode\"])(\"v-if\", true)\n        ]),\n        (_ctx.pswdErr || _ctx.showError)\n            ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createBlock\"])(\"div\", _hoisted_2, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])(_ctx.errorMessage), 1 /* TEXT */))\n            : Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createCommentVNode\"])(\"v-if\", true)\n    ]));\n}\n\n\n//# sourceURL=webpack:///./src/components/PasswordInput.vue?./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/ts-loader??ref--13-1!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1");

/***/ }),

/***/ "./src/assets/img/chevron_left.svg":
/*!*****************************************!*\
  !*** ./src/assets/img/chevron_left.svg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/img/chevron_left.120f1ae7.svg\";\n\n//# sourceURL=webpack:///./src/assets/img/chevron_left.svg?");

/***/ }),

/***/ "./src/components/PasswordInput.vue":
/*!******************************************!*\
  !*** ./src/components/PasswordInput.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _PasswordInput_vue_vue_type_template_id_03b98a6f_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PasswordInput.vue?vue&type=template&id=03b98a6f&ts=true */ \"./src/components/PasswordInput.vue?vue&type=template&id=03b98a6f&ts=true\");\n/* harmony import */ var _PasswordInput_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PasswordInput.vue?vue&type=script&lang=ts */ \"./src/components/PasswordInput.vue?vue&type=script&lang=ts\");\n/* empty/unused harmony star reexport *//* harmony import */ var _home_runner_work_web_wallet_vuejs_web_wallet_vuejs_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader-v16/dist/exportHelper.js */ \"./node_modules/vue-loader-v16/dist/exportHelper.js\");\n/* harmony import */ var _home_runner_work_web_wallet_vuejs_web_wallet_vuejs_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_web_wallet_vuejs_web_wallet_vuejs_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\nconst __exports__ = /*#__PURE__*/_home_runner_work_web_wallet_vuejs_web_wallet_vuejs_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2___default()(_PasswordInput_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_PasswordInput_vue_vue_type_template_id_03b98a6f_ts_true__WEBPACK_IMPORTED_MODULE_0__[\"render\"]],['__file',\"src/components/PasswordInput.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack:///./src/components/PasswordInput.vue?");

/***/ }),

/***/ "./src/components/PasswordInput.vue?vue&type=script&lang=ts":
/*!******************************************************************!*\
  !*** ./src/components/PasswordInput.vue?vue&type=script&lang=ts ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_ts_loader_index_js_ref_13_1_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_PasswordInput_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/ts-loader??ref--13-1!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader-v16/dist??ref--0-1!./PasswordInput.vue?vue&type=script&lang=ts */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/ts-loader/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/PasswordInput.vue?vue&type=script&lang=ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_ts_loader_index_js_ref_13_1_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_PasswordInput_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* empty/unused harmony star reexport */ \n\n//# sourceURL=webpack:///./src/components/PasswordInput.vue?");

/***/ }),

/***/ "./src/components/PasswordInput.vue?vue&type=template&id=03b98a6f&ts=true":
/*!********************************************************************************!*\
  !*** ./src/components/PasswordInput.vue?vue&type=template&id=03b98a6f&ts=true ***!
  \********************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_ts_loader_index_js_ref_13_1_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_PasswordInput_vue_vue_type_template_id_03b98a6f_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/ts-loader??ref--13-1!../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader-v16/dist??ref--0-1!./PasswordInput.vue?vue&type=template&id=03b98a6f&ts=true */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/ts-loader/index.js?!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/PasswordInput.vue?vue&type=template&id=03b98a6f&ts=true\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_ts_loader_index_js_ref_13_1_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_PasswordInput_vue_vue_type_template_id_03b98a6f_ts_true__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/PasswordInput.vue?");

/***/ }),

/***/ "./src/modules/account/img/proximax-logo.svg":
/*!***************************************************!*\
  !*** ./src/modules/account/img/proximax-logo.svg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/img/proximax-logo.cb656acf.svg\";\n\n//# sourceURL=webpack:///./src/modules/account/img/proximax-logo.svg?");

/***/ }),

/***/ "./src/modules/services/submodule/assets/img/icon-asset.svg":
/*!******************************************************************!*\
  !*** ./src/modules/services/submodule/assets/img/icon-asset.svg ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/img/icon-asset.40e1e8d4.svg\";\n\n//# sourceURL=webpack:///./src/modules/services/submodule/assets/img/icon-asset.svg?");

/***/ }),

/***/ "./src/util/buildTransactions.ts":
/*!***************************************!*\
  !*** ./src/util/buildTransactions.ts ***!
  \***************************************/
/*! exports provided: BuildTransactions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BuildTransactions\", function() { return BuildTransactions; });\n/* harmony import */ var tsjs_xpx_chain_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tsjs-xpx-chain-sdk */ \"./node_modules/tsjs-xpx-chain-sdk/dist/index.js\");\n/* harmony import */ var tsjs_xpx_chain_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tsjs_xpx_chain_sdk__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _typeHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./typeHelper */ \"./src/util/typeHelper.ts\");\n\n\nclass BuildTransactions {\n    constructor(networkType, generationHash, feeStrategy) {\n        this.transactionBuilderFactory = new tsjs_xpx_chain_sdk__WEBPACK_IMPORTED_MODULE_0__[\"TransactionBuilderFactory\"]();\n        if (feeStrategy)\n            this.transactionBuilderFactory.feeCalculationStrategy = feeStrategy;\n        this.transactionBuilderFactory.networkType = networkType;\n        this.transactionBuilderFactory.generationHash = generationHash ? generationHash : \"\";\n    }\n    updateCustomFee(feePerByte) {\n        this.transactionBuilderFactory.feeCalculationStrategy = feePerByte;\n    }\n    updateGenerationHash(generationHash) {\n        this.transactionBuilderFactory.generationHash = generationHash;\n    }\n    transfer(recipient, message, sendingMosaics) {\n        let mosaics = [];\n        if (sendingMosaics) {\n            if (sendingMosaics.length)\n                mosaics = sendingMosaics;\n        }\n        if (!message) {\n            message = tsjs_xpx_chain_sdk__WEBPACK_IMPORTED_MODULE_0__[\"EmptyMessage\"];\n        }\n        return this.transactionBuilderFactory.transfer()\n            .deadline(tsjs_xpx_chain_sdk__WEBPACK_IMPORTED_MODULE_0__[\"Deadline\"].create())\n            .recipient(recipient)\n            .mosaics(mosaics)\n            .message(message)\n            .build();\n    }\n    transferBuilder() {\n        return this.transactionBuilderFactory.transfer();\n    }\n    /**\n     *\n     * @param {NetworkType} network\n     * @param {MosaicId} mosaicId\n     * @param {MosaicSupplyType} mosaicSupplyType\n     * @param {UInt64} delta\n     * @returns {MosaicSupplyChangeTransaction}\n  \n     */\n    buildMosaicSupplyChange(mosaicId, mosaicSupplyType, delta) {\n        return this.transactionBuilderFactory.mosaicSupplyChange()\n            .deadline(tsjs_xpx_chain_sdk__WEBPACK_IMPORTED_MODULE_0__[\"Deadline\"].create())\n            .mosaicId(mosaicId)\n            .direction(mosaicSupplyType)\n            .delta(delta)\n            .build();\n    }\n    buildMosaicSupplyChangeBuilder() {\n        return this.transactionBuilderFactory.mosaicSupplyChange();\n    }\n    mosaicDefinition(owner, supplyMutable, transferable, divisibility, duration) {\n        const nonce = _typeHelper__WEBPACK_IMPORTED_MODULE_1__[\"Helper\"].createNonceRandom();\n        return this.transactionBuilderFactory.mosaicDefinition()\n            .deadline(tsjs_xpx_chain_sdk__WEBPACK_IMPORTED_MODULE_0__[\"Deadline\"].create())\n            .mosaicNonce(nonce)\n            .mosaicId(tsjs_xpx_chain_sdk__WEBPACK_IMPORTED_MODULE_0__[\"MosaicId\"].createFromNonce(nonce, owner))\n            .mosaicProperties(tsjs_xpx_chain_sdk__WEBPACK_IMPORTED_MODULE_0__[\"MosaicProperties\"].create({\n            supplyMutable: supplyMutable,\n            transferable: transferable,\n            divisibility: divisibility,\n            duration: (duration) ? duration : undefined\n        }))\n            .build();\n    }\n    mosaicDefinitionBuilder() {\n        return this.transactionBuilderFactory.mosaicDefinition();\n    }\n    aggregateBonded(innerTxn) {\n        return this.transactionBuilderFactory.aggregateBonded()\n            .deadline(tsjs_xpx_chain_sdk__WEBPACK_IMPORTED_MODULE_0__[\"Deadline\"].create())\n            .innerTransactions(innerTxn)\n            .build();\n    }\n    aggregateBondedBuilder() {\n        return this.transactionBuilderFactory.aggregateBonded();\n    }\n    aggregateComplete(innerTxn) {\n        return this.transactionBuilderFactory.aggregateComplete()\n            .deadline(tsjs_xpx_chain_sdk__WEBPACK_IMPORTED_MODULE_0__[\"Deadline\"].create())\n            .innerTransactions(innerTxn)\n            .build();\n    }\n    aggregateCompleteBuilder() {\n        return this.transactionBuilderFactory.aggregateComplete();\n    }\n    hashLock(mosaic, duration, transactionHash) {\n        let transactionHashToUse = transactionHash instanceof tsjs_xpx_chain_sdk__WEBPACK_IMPORTED_MODULE_0__[\"TransactionHash\"] ? transactionHash : new tsjs_xpx_chain_sdk__WEBPACK_IMPORTED_MODULE_0__[\"TransactionHash\"](transactionHash.hash, transactionHash.type);\n        return this.transactionBuilderFactory.hashLock()\n            .deadline(tsjs_xpx_chain_sdk__WEBPACK_IMPORTED_MODULE_0__[\"Deadline\"].create())\n            .duration(duration)\n            .mosaic(mosaic)\n            .transactionHash(transactionHash)\n            .build();\n    }\n    hashLockBuilder() {\n        return this.transactionBuilderFactory.hashLock();\n    }\n    modifyMultisigAccount(minApprovalDelta, minRemovalDelta, modifications) {\n        return this.transactionBuilderFactory.modifyMultisig()\n            .deadline(tsjs_xpx_chain_sdk__WEBPACK_IMPORTED_MODULE_0__[\"Deadline\"].create())\n            .minApprovalDelta(minApprovalDelta)\n            .minRemovalDelta(minRemovalDelta)\n            .modifications(modifications)\n            .build();\n    }\n    modifyMultisigAccountBuilder() {\n        return this.transactionBuilderFactory.modifyMultisig();\n    }\n    addressAlias(aliasActionType, namespaceId, address) {\n        return this.transactionBuilderFactory.addressAlias()\n            .deadline(tsjs_xpx_chain_sdk__WEBPACK_IMPORTED_MODULE_0__[\"Deadline\"].create())\n            .actionType(aliasActionType)\n            .address(address)\n            .namespaceId(namespaceId)\n            .build();\n    }\n    addressAliasBuilder() {\n        return this.transactionBuilderFactory.addressAlias();\n    }\n    accountLink(remoteAccountKey, linkAction) {\n        return this.transactionBuilderFactory.accountLink()\n            .deadline(tsjs_xpx_chain_sdk__WEBPACK_IMPORTED_MODULE_0__[\"Deadline\"].create())\n            .linkAction(linkAction)\n            .remoteAccountKey(remoteAccountKey)\n            .build();\n    }\n    accountLinkBuilder() {\n        return this.transactionBuilderFactory.accountLink();\n    }\n    assetAlias(aliasActionType, namespaceId, mosaicId) {\n        return this.transactionBuilderFactory.mosaicAlias()\n            .deadline(tsjs_xpx_chain_sdk__WEBPACK_IMPORTED_MODULE_0__[\"Deadline\"].create())\n            .actionType(aliasActionType)\n            .namespaceId(namespaceId)\n            .mosaicId(mosaicId)\n            .build();\n    }\n    assetAliasBuilder() {\n        return this.transactionBuilderFactory.mosaicAlias();\n    }\n    mosaicSupplyChange(mosaicId, supply, mosaicSupplyType) {\n        return this.transactionBuilderFactory.mosaicSupplyChange()\n            .deadline(tsjs_xpx_chain_sdk__WEBPACK_IMPORTED_MODULE_0__[\"Deadline\"].create())\n            .mosaicId(new tsjs_xpx_chain_sdk__WEBPACK_IMPORTED_MODULE_0__[\"MosaicId\"](mosaicId))\n            .direction(mosaicSupplyType)\n            .delta(tsjs_xpx_chain_sdk__WEBPACK_IMPORTED_MODULE_0__[\"UInt64\"].fromUint(supply))\n            .build();\n    }\n    mosaicSupplyChangeBuilder() {\n        return this.transactionBuilderFactory.mosaicSupplyChange();\n    }\n    registerRootNamespace(name, duration = tsjs_xpx_chain_sdk__WEBPACK_IMPORTED_MODULE_0__[\"UInt64\"].fromUint(100)) {\n        return this.transactionBuilderFactory.registerRootNamespace()\n            .deadline(tsjs_xpx_chain_sdk__WEBPACK_IMPORTED_MODULE_0__[\"Deadline\"].create())\n            .namespaceName(name)\n            .duration(duration)\n            .build();\n    }\n    registerRootNamespaceBuilder() {\n        return this.transactionBuilderFactory.registerRootNamespace();\n    }\n    registersubNamespace(rootNamespace, subnamespaceName) {\n        return this.transactionBuilderFactory.registerSubNamespace()\n            .deadline(tsjs_xpx_chain_sdk__WEBPACK_IMPORTED_MODULE_0__[\"Deadline\"].create())\n            .namespaceName(subnamespaceName)\n            .parentNamespace(rootNamespace)\n            .build();\n    }\n    registersubNamespaceBuilder() {\n        return this.transactionBuilderFactory.registerSubNamespace();\n    }\n    getFeeStrategy() {\n        return this.transactionBuilderFactory.feeCalculationStrategy;\n    }\n    setFeeStrategy(feeStrategy) {\n        this.transactionBuilderFactory.feeCalculationStrategy = feeStrategy;\n    }\n}\n\n\n//# sourceURL=webpack:///./src/util/buildTransactions.ts?");

/***/ })

}]);