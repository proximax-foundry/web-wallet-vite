(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[74],{

/***/ "./node_modules/primevue/tooltip/tooltip.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/primevue/tooltip/tooltip.esm.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var primevue_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primevue/utils */ \"./node_modules/primevue/utils/utils.esm.js\");\n\n\nfunction bindEvents(el) {\n    const modifiers = el.$_ptooltipModifiers;\n    if (modifiers.focus) {\n        el.addEventListener('focus', onFocus);\n        el.addEventListener('blur', onBlur);\n    }\n    else {\n        el.addEventListener('mouseenter', onMouseEnter);\n        el.addEventListener('mouseleave', onMouseLeave);\n        el.addEventListener('click', onClick);\n    }\n}\n\nfunction unbindEvents(el) {\n    const modifiers = el.$_ptooltipModifiers;\n    if (modifiers.focus) {\n        el.removeEventListener('focus', onFocus);\n        el.removeEventListener('blur', onBlur);\n    }\n    else {\n        el.removeEventListener('mouseenter', onMouseEnter);\n        el.removeEventListener('mouseleave', onMouseLeave);\n        el.removeEventListener('click', onClick);\n    }\n}\n\nfunction bindScrollListener(el) {\n    if (!el.$_ptooltipScrollHandler) {\n        el.$_ptooltipScrollHandler = new primevue_utils__WEBPACK_IMPORTED_MODULE_0__[\"ConnectedOverlayScrollHandler\"](el, function() {\n            hide(el);\n        });\n    }\n\n    el.$_ptooltipScrollHandler.bindScrollListener();\n}\n\nfunction unbindScrollListener(el) {\n    if (el.$_ptooltipScrollHandler) {\n        el.$_ptooltipScrollHandler.unbindScrollListener();\n    }\n}\n\nfunction onMouseEnter(event) {\n    show(event.currentTarget);\n}\n\nfunction onMouseLeave(event) {\n    hide(event.currentTarget);\n}\n\nfunction onFocus(event) {\n    show(event.currentTarget);\n}\n\nfunction onBlur(event) {\n    hide(event.currentTarget);\n}\n\nfunction onClick(event) {\n    hide(event.currentTarget);\n}\n\nfunction show(el) {\n    if (el.$_ptooltipDisabled) {\n        return;\n    }\n\n    let tooltipElement = create(el);\n    align(el);\n    primevue_utils__WEBPACK_IMPORTED_MODULE_0__[\"DomHandler\"].fadeIn(tooltipElement, 250);\n\n    window.addEventListener('resize', function onWindowResize() {\n        if (!primevue_utils__WEBPACK_IMPORTED_MODULE_0__[\"DomHandler\"].isAndroid()) {\n            hide(el);\n        }\n        this.removeEventListener('resize', onWindowResize);\n    });\n\n    bindScrollListener(el);\n    primevue_utils__WEBPACK_IMPORTED_MODULE_0__[\"ZIndexUtils\"].set('tooltip', tooltipElement, el.$_ptooltipZIndex);\n}\n\nfunction hide(el) {\n    remove(el);\n    unbindScrollListener(el);\n    primevue_utils__WEBPACK_IMPORTED_MODULE_0__[\"ZIndexUtils\"].clear(el);\n}\n\nfunction getTooltipElement(el) {\n    return document.getElementById(el.$_ptooltipId);\n}\n\nfunction create(el) {\n    const id = Object(primevue_utils__WEBPACK_IMPORTED_MODULE_0__[\"UniqueComponentId\"])() + '_tooltip';\n    el.$_ptooltipId = id;\n\n    let container = document.createElement('div');\n    container.id = id;\n\n    let tooltipArrow = document.createElement('div');\n    tooltipArrow.className = 'p-tooltip-arrow';\n    container.appendChild(tooltipArrow);\n\n    let tooltipText = document.createElement('div');\n    tooltipText.className = 'p-tooltip-text';\n    tooltipText.innerHTML = el.$_ptooltipValue;\n\n    container.appendChild(tooltipText);\n    document.body.appendChild(container);\n\n    container.style.display = 'inline-block';\n\n    return container;\n}\n\nfunction remove(el) {\n    if (el) {\n        let tooltipElement = getTooltipElement(el);\n        if (tooltipElement && tooltipElement.parentElement) {\n            document.body.removeChild(tooltipElement);\n        }\n        el.$_ptooltipId = null;\n    }\n}\n\nfunction align(el) {\n    const modifiers = el.$_ptooltipModifiers;\n\n    if (modifiers.top) {\n        alignTop(el);\n        if (isOutOfBounds(el)) {\n            alignBottom(el);\n        }\n    }\n    else if (modifiers.left) {\n        alignLeft(el);\n        if (isOutOfBounds(el)) {\n            alignRight(el);\n\n            if (isOutOfBounds(el)) {\n                alignTop(el);\n\n                if (isOutOfBounds(el)) {\n                    alignBottom(el);\n                }\n            }\n        }\n    }\n    else if (modifiers.bottom) {\n        alignBottom(el);\n        if (isOutOfBounds(el)) {\n            alignTop(el);\n        }\n    }\n    else {\n        alignRight(el);\n        if (isOutOfBounds(el)) {\n            alignLeft(el);\n\n            if (isOutOfBounds(el)) {\n                alignTop(el);\n\n                if (isOutOfBounds(el)) {\n                    alignBottom(el);\n                }\n            }\n        }\n    }\n}\n\nfunction getHostOffset(el) {\n    let offset = el.getBoundingClientRect();\n    let targetLeft = offset.left + primevue_utils__WEBPACK_IMPORTED_MODULE_0__[\"DomHandler\"].getWindowScrollLeft();\n    let targetTop = offset.top + primevue_utils__WEBPACK_IMPORTED_MODULE_0__[\"DomHandler\"].getWindowScrollTop();\n\n    return {left: targetLeft, top: targetTop};\n}\n\nfunction alignRight(el) {\n    preAlign(el, 'right');\n    let tooltipElement = getTooltipElement(el);\n    let hostOffset = getHostOffset(el);\n    let left = hostOffset.left + primevue_utils__WEBPACK_IMPORTED_MODULE_0__[\"DomHandler\"].getOuterWidth(el);\n    let top = hostOffset.top + (primevue_utils__WEBPACK_IMPORTED_MODULE_0__[\"DomHandler\"].getOuterHeight(el) - primevue_utils__WEBPACK_IMPORTED_MODULE_0__[\"DomHandler\"].getOuterHeight(tooltipElement)) / 2;\n    tooltipElement.style.left = left + 'px';\n    tooltipElement.style.top = top + 'px';\n}\n\nfunction alignLeft(el) {\n    preAlign(el, 'left');\n    let tooltipElement = getTooltipElement(el);\n    let hostOffset = getHostOffset(el);\n    let left = hostOffset.left - primevue_utils__WEBPACK_IMPORTED_MODULE_0__[\"DomHandler\"].getOuterWidth(tooltipElement);\n    let top = hostOffset.top + (primevue_utils__WEBPACK_IMPORTED_MODULE_0__[\"DomHandler\"].getOuterHeight(el) - primevue_utils__WEBPACK_IMPORTED_MODULE_0__[\"DomHandler\"].getOuterHeight(tooltipElement)) / 2;\n    tooltipElement.style.left = left + 'px';\n    tooltipElement.style.top = top + 'px';\n}\n\nfunction alignTop(el) {\n    preAlign(el, 'top');\n    let tooltipElement = getTooltipElement(el);\n    let hostOffset = getHostOffset(el);\n    let left = hostOffset.left + (primevue_utils__WEBPACK_IMPORTED_MODULE_0__[\"DomHandler\"].getOuterWidth(el) - primevue_utils__WEBPACK_IMPORTED_MODULE_0__[\"DomHandler\"].getOuterWidth(tooltipElement)) / 2;\n    let top = hostOffset.top - primevue_utils__WEBPACK_IMPORTED_MODULE_0__[\"DomHandler\"].getOuterHeight(tooltipElement);\n    tooltipElement.style.left = left + 'px';\n    tooltipElement.style.top = top + 'px';\n}\n\nfunction alignBottom(el) {\n    preAlign(el, 'bottom');\n    let tooltipElement = getTooltipElement(el);\n    let hostOffset = getHostOffset(el);\n    let left = hostOffset.left + (primevue_utils__WEBPACK_IMPORTED_MODULE_0__[\"DomHandler\"].getOuterWidth(el) - primevue_utils__WEBPACK_IMPORTED_MODULE_0__[\"DomHandler\"].getOuterWidth(tooltipElement)) / 2;\n    let top = hostOffset.top + primevue_utils__WEBPACK_IMPORTED_MODULE_0__[\"DomHandler\"].getOuterHeight(el);\n    tooltipElement.style.left = left + 'px';\n    tooltipElement.style.top = top + 'px';\n}\n\nfunction preAlign(el, position) {\n    let tooltipElement = getTooltipElement(el);\n    tooltipElement.style.left = -999 + 'px';\n    tooltipElement.style.top = -999 + 'px';\n    tooltipElement.className = 'p-tooltip p-component p-tooltip-' + position;\n}\n\nfunction isOutOfBounds(el) {\n    let tooltipElement = getTooltipElement(el);\n    let offset = tooltipElement.getBoundingClientRect();\n    let targetTop = offset.top;\n    let targetLeft = offset.left;\n    let width = primevue_utils__WEBPACK_IMPORTED_MODULE_0__[\"DomHandler\"].getOuterWidth(tooltipElement);\n    let height = primevue_utils__WEBPACK_IMPORTED_MODULE_0__[\"DomHandler\"].getOuterHeight(tooltipElement);\n    let viewport = primevue_utils__WEBPACK_IMPORTED_MODULE_0__[\"DomHandler\"].getViewport();\n\n    return (targetLeft + width > viewport.width) || (targetLeft < 0) || (targetTop < 0) || (targetTop + height > viewport.height);\n}\n\nfunction getTarget(el) {\n    return primevue_utils__WEBPACK_IMPORTED_MODULE_0__[\"DomHandler\"].hasClass(el, 'p-inputwrapper') ? primevue_utils__WEBPACK_IMPORTED_MODULE_0__[\"DomHandler\"].findSingle(el, 'input'): el;\n}\n\nconst Tooltip = {\n    beforeMount(el, options) {\n        let target = getTarget(el);\n        target.$_ptooltipModifiers = options.modifiers;\n        if (typeof options.value === 'string') {\n            target.$_ptooltipValue = options.value;\n            target.$_ptooltipDisabled = false;\n        }\n        else {\n            target.$_ptooltipValue = options.value.value;\n            target.$_ptooltipDisabled = options.value.disabled || false;\n        }\n\n        target.$_ptooltipZIndex = options.instance.$primevue && options.instance.$primevue.config && options.instance.$primevue.config.zIndex.tooltip;\n        bindEvents(target);\n    },\n    unmounted(el) {\n        let target = getTarget(el);\n        remove(target);\n        unbindEvents(target);\n\n        if (target.$_ptooltipScrollHandler) {\n            target.$_ptooltipScrollHandler.destroy();\n            target.$_ptooltipScrollHandler = null;\n        }\n\n        primevue_utils__WEBPACK_IMPORTED_MODULE_0__[\"ZIndexUtils\"].clear(el);\n    },\n    updated(el, options) {\n        let target = getTarget(el);\n        target.$_ptooltipModifiers = options.modifiers;\n\n        if (typeof options.value === 'string') {\n            target.$_ptooltipValue = options.value;\n            target.$_ptooltipDisabled = false;\n        }\n        else {\n            target.$_ptooltipValue = options.value.value;\n            target.$_ptooltipDisabled = options.value.disabled;\n        }\n    },\n\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tooltip);\n\n\n//# sourceURL=webpack:///./node_modules/primevue/tooltip/tooltip.esm.js?");

/***/ }),

/***/ "./src/assets/img/icon-info.svg":
/*!**************************************!*\
  !*** ./src/assets/img/icon-info.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/img/icon-info.c16cc71f.svg\";\n\n//# sourceURL=webpack:///./src/assets/img/icon-info.svg?");

/***/ }),

/***/ "./src/modules/account/img/proximax-logo.svg":
/*!***************************************************!*\
  !*** ./src/modules/account/img/proximax-logo.svg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/img/proximax-logo.cb656acf.svg\";\n\n//# sourceURL=webpack:///./src/modules/account/img/proximax-logo.svg?");

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