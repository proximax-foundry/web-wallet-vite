(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[61],{

/***/ "./src/assets/img/icon-prx-xpx-blue.svg":
/*!**********************************************!*\
  !*** ./src/assets/img/icon-prx-xpx-blue.svg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/img/icon-prx-xpx-blue.026c6b2b.svg\";\n\n//# sourceURL=webpack:///./src/assets/img/icon-prx-xpx-blue.svg?");

/***/ }),

/***/ "./src/modules/services/submodule/voting/img/badge-silver-proximax-sirius-wallet.svg":
/*!*******************************************************************************************!*\
  !*** ./src/modules/services/submodule/voting/img/badge-silver-proximax-sirius-wallet.svg ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/img/badge-silver-proximax-sirius-wallet.3291fc4b.svg\";\n\n//# sourceURL=webpack:///./src/modules/services/submodule/voting/img/badge-silver-proximax-sirius-wallet.svg?");

/***/ }),

/***/ "./src/util/buildTransactions.ts":
/*!***************************************!*\
  !*** ./src/util/buildTransactions.ts ***!
  \***************************************/
/*! exports provided: BuildTransactions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BuildTransactions\", function() { return BuildTransactions; });\n/* harmony import */ var tsjs_xpx_chain_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tsjs-xpx-chain-sdk */ \"./node_modules/tsjs-xpx-chain-sdk/dist/index.js\");\n/* harmony import */ var tsjs_xpx_chain_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tsjs_xpx_chain_sdk__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _typeHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./typeHelper */ \"./src/util/typeHelper.ts\");\n\n\nvar BuildTransactions = /** @class */ (function () {\n    function BuildTransactions(networkType, generationHash, feeStrategy) {\n        this.transactionBuilderFactory = new tsjs_xpx_chain_sdk__WEBPACK_IMPORTED_MODULE_0__[\"TransactionBuilderFactory\"]();\n        if (feeStrategy)\n            this.transactionBuilderFactory.feeCalculationStrategy = feeStrategy;\n        this.transactionBuilderFactory.networkType = networkType;\n        this.transactionBuilderFactory.generationHash = generationHash ? generationHash : \"\";\n    }\n    BuildTransactions.prototype.updateCustomFee = function (feePerByte) {\n        this.transactionBuilderFactory.feeCalculationStrategy = feePerByte;\n    };\n    BuildTransactions.prototype.updateGenerationHash = function (generationHash) {\n        this.transactionBuilderFactory.generationHash = generationHash;\n    };\n    BuildTransactions.prototype.transfer = function (recipient, message, sendingMosaics) {\n        var mosaics = [];\n        if (sendingMosaics) {\n            if (sendingMosaics.length)\n                mosaics = sendingMosaics;\n        }\n        if (!message) {\n            message = tsjs_xpx_chain_sdk__WEBPACK_IMPORTED_MODULE_0__[\"EmptyMessage\"];\n        }\n        return this.transactionBuilderFactory.transfer()\n            .deadline(tsjs_xpx_chain_sdk__WEBPACK_IMPORTED_MODULE_0__[\"Deadline\"].create())\n            .recipient(recipient)\n            .mosaics(mosaics)\n            .message(message)\n            .build();\n    };\n    BuildTransactions.prototype.transferBuilder = function () {\n        return this.transactionBuilderFactory.transfer();\n    };\n    /**\n     *\n     * @param {NetworkType} network\n     * @param {MosaicId} mosaicId\n     * @param {MosaicSupplyType} mosaicSupplyType\n     * @param {UInt64} delta\n     * @returns {MosaicSupplyChangeTransaction}\n  \n     */\n    BuildTransactions.prototype.buildMosaicSupplyChange = function (mosaicId, mosaicSupplyType, delta) {\n        return this.transactionBuilderFactory.mosaicSupplyChange()\n            .deadline(tsjs_xpx_chain_sdk__WEBPACK_IMPORTED_MODULE_0__[\"Deadline\"].create())\n            .mosaicId(mosaicId)\n            .direction(mosaicSupplyType)\n            .delta(delta)\n            .build();\n    };\n    BuildTransactions.prototype.buildMosaicSupplyChangeBuilder = function () {\n        return this.transactionBuilderFactory.mosaicSupplyChange();\n    };\n    BuildTransactions.prototype.mosaicDefinition = function (owner, supplyMutable, transferable, divisibility, duration) {\n        var nonce = _typeHelper__WEBPACK_IMPORTED_MODULE_1__[\"Helper\"].createNonceRandom();\n        return this.transactionBuilderFactory.mosaicDefinition()\n            .deadline(tsjs_xpx_chain_sdk__WEBPACK_IMPORTED_MODULE_0__[\"Deadline\"].create())\n            .mosaicNonce(nonce)\n            .mosaicId(tsjs_xpx_chain_sdk__WEBPACK_IMPORTED_MODULE_0__[\"MosaicId\"].createFromNonce(nonce, owner))\n            .mosaicProperties(tsjs_xpx_chain_sdk__WEBPACK_IMPORTED_MODULE_0__[\"MosaicProperties\"].create({\n            supplyMutable: supplyMutable,\n            transferable: transferable,\n            divisibility: divisibility,\n            duration: (duration) ? duration : undefined\n        }))\n            .build();\n    };\n    BuildTransactions.prototype.mosaicDefinitionBuilder = function () {\n        return this.transactionBuilderFactory.mosaicDefinition();\n    };\n    BuildTransactions.prototype.aggregateBonded = function (innerTxn) {\n        return this.transactionBuilderFactory.aggregateBonded()\n            .deadline(tsjs_xpx_chain_sdk__WEBPACK_IMPORTED_MODULE_0__[\"Deadline\"].create())\n            .innerTransactions(innerTxn)\n            .build();\n    };\n    BuildTransactions.prototype.aggregateBondedBuilder = function () {\n        return this.transactionBuilderFactory.aggregateBonded();\n    };\n    BuildTransactions.prototype.aggregateComplete = function (innerTxn) {\n        return this.transactionBuilderFactory.aggregateComplete()\n            .deadline(tsjs_xpx_chain_sdk__WEBPACK_IMPORTED_MODULE_0__[\"Deadline\"].create())\n            .innerTransactions(innerTxn)\n            .build();\n    };\n    BuildTransactions.prototype.aggregateCompleteBuilder = function () {\n        return this.transactionBuilderFactory.aggregateComplete();\n    };\n    BuildTransactions.prototype.hashLock = function (mosaic, duration, signedTransaction) {\n        return this.transactionBuilderFactory.hashLock()\n            .deadline(tsjs_xpx_chain_sdk__WEBPACK_IMPORTED_MODULE_0__[\"Deadline\"].create())\n            .duration(duration)\n            .mosaic(mosaic)\n            .signedTransaction(signedTransaction)\n            .build();\n    };\n    BuildTransactions.prototype.hashLockBuilder = function () {\n        return this.transactionBuilderFactory.hashLock();\n    };\n    BuildTransactions.prototype.modifyMultisigAccount = function (minApprovalDelta, minRemovalDelta, modifications) {\n        return this.transactionBuilderFactory.modifyMultisig()\n            .deadline(tsjs_xpx_chain_sdk__WEBPACK_IMPORTED_MODULE_0__[\"Deadline\"].create())\n            .minApprovalDelta(minApprovalDelta)\n            .minRemovalDelta(minRemovalDelta)\n            .modifications(modifications)\n            .build();\n    };\n    BuildTransactions.prototype.modifyMultisigAccountBuilder = function () {\n        return this.transactionBuilderFactory.modifyMultisig();\n    };\n    BuildTransactions.prototype.addressAlias = function (aliasActionType, namespaceId, address) {\n        return this.transactionBuilderFactory.addressAlias()\n            .deadline(tsjs_xpx_chain_sdk__WEBPACK_IMPORTED_MODULE_0__[\"Deadline\"].create())\n            .actionType(aliasActionType)\n            .address(address)\n            .namespaceId(namespaceId)\n            .build();\n    };\n    BuildTransactions.prototype.addressAliasBuilder = function () {\n        return this.transactionBuilderFactory.addressAlias();\n    };\n    BuildTransactions.prototype.accountLink = function (remoteAccountKey, linkAction) {\n        return this.transactionBuilderFactory.accountLink()\n            .deadline(tsjs_xpx_chain_sdk__WEBPACK_IMPORTED_MODULE_0__[\"Deadline\"].create())\n            .linkAction(linkAction)\n            .remoteAccountKey(remoteAccountKey)\n            .build();\n    };\n    BuildTransactions.prototype.accountLinkBuilder = function () {\n        return this.transactionBuilderFactory.accountLink();\n    };\n    BuildTransactions.prototype.assetAlias = function (aliasActionType, namespaceId, mosaicId) {\n        return this.transactionBuilderFactory.mosaicAlias()\n            .deadline(tsjs_xpx_chain_sdk__WEBPACK_IMPORTED_MODULE_0__[\"Deadline\"].create())\n            .actionType(aliasActionType)\n            .namespaceId(namespaceId)\n            .mosaicId(mosaicId)\n            .build();\n    };\n    BuildTransactions.prototype.assetAliasBuilder = function () {\n        return this.transactionBuilderFactory.mosaicAlias();\n    };\n    BuildTransactions.prototype.mosaicSupplyChange = function (mosaicId, supply, mosaicSupplyType) {\n        return this.transactionBuilderFactory.mosaicSupplyChange()\n            .deadline(tsjs_xpx_chain_sdk__WEBPACK_IMPORTED_MODULE_0__[\"Deadline\"].create())\n            .mosaicId(new tsjs_xpx_chain_sdk__WEBPACK_IMPORTED_MODULE_0__[\"MosaicId\"](mosaicId))\n            .direction(mosaicSupplyType)\n            .delta(tsjs_xpx_chain_sdk__WEBPACK_IMPORTED_MODULE_0__[\"UInt64\"].fromUint(supply))\n            .build();\n    };\n    BuildTransactions.prototype.mosaicSupplyChangeBuilder = function () {\n        return this.transactionBuilderFactory.mosaicSupplyChange();\n    };\n    BuildTransactions.prototype.registerRootNamespace = function (name, duration) {\n        if (duration === void 0) { duration = tsjs_xpx_chain_sdk__WEBPACK_IMPORTED_MODULE_0__[\"UInt64\"].fromUint(100); }\n        return this.transactionBuilderFactory.registerRootNamespace()\n            .deadline(tsjs_xpx_chain_sdk__WEBPACK_IMPORTED_MODULE_0__[\"Deadline\"].create())\n            .namespaceName(name)\n            .duration(duration)\n            .build();\n    };\n    BuildTransactions.prototype.registerRootNamespaceBuilder = function () {\n        return this.transactionBuilderFactory.registerRootNamespace();\n    };\n    BuildTransactions.prototype.registersubNamespace = function (rootNamespace, subnamespaceName) {\n        return this.transactionBuilderFactory.registerSubNamespace()\n            .deadline(tsjs_xpx_chain_sdk__WEBPACK_IMPORTED_MODULE_0__[\"Deadline\"].create())\n            .namespaceName(subnamespaceName)\n            .parentNamespace(rootNamespace)\n            .build();\n    };\n    BuildTransactions.prototype.registersubNamespaceBuilder = function () {\n        return this.transactionBuilderFactory.registerSubNamespace();\n    };\n    BuildTransactions.prototype.getFeeStrategy = function () {\n        return this.transactionBuilderFactory.feeCalculationStrategy;\n    };\n    BuildTransactions.prototype.setFeeStrategy = function (feeStrategy) {\n        this.transactionBuilderFactory.feeCalculationStrategy = feeStrategy;\n    };\n    return BuildTransactions;\n}());\n\n\n\n//# sourceURL=webpack:///./src/util/buildTransactions.ts?");

/***/ })

}]);