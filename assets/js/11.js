(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./src/util/assetsUtils.ts":
/*!*********************************!*\
  !*** ./src/util/assetsUtils.ts ***!
  \*********************************/
/*! exports provided: AssetsUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AssetsUtils\", function() { return AssetsUtils; });\n/* harmony import */ var tsjs_xpx_chain_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tsjs-xpx-chain-sdk */ \"./node_modules/tsjs-xpx-chain-sdk/dist/index.js\");\n/* harmony import */ var tsjs_xpx_chain_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tsjs_xpx_chain_sdk__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _state_walletState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state/walletState */ \"./src/state/walletState.ts\");\n/* harmony import */ var _state_networkState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state/networkState */ \"./src/state/networkState.ts\");\n/* harmony import */ var _util_walletUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/walletUtils */ \"./src/util/walletUtils.ts\");\n/* harmony import */ var _typeHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./typeHelper */ \"./src/util/typeHelper.ts\");\n/* harmony import */ var _models_stores_chainProfileConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/models/stores/chainProfileConfig */ \"./src/models/stores/chainProfileConfig.ts\");\n/* harmony import */ var _state_appState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/state/appState */ \"./src/state/appState.ts\");\n/* harmony import */ var _transactionUtils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./transactionUtils */ \"./src/util/transactionUtils.ts\");\n\n\n\n\n\n\n\n\nclass AssetsUtils {\n    /**\n     * Method to add leading zeros\n     *\n     * @param cant Quantity of zeros to add\n     * @param amount Amount to add zeros\n     */\n    static addZeros(cant, amount = 0) {\n        let realAmount;\n        if (cant > 0) {\n            let decimal;\n            if (amount === 0) {\n                decimal = this.addDecimals(cant);\n                realAmount = `0${decimal}`;\n            }\n            else {\n                const arrAmount = amount.toString().replace(/,/g, '').split('.');\n                if (arrAmount.length < 2) {\n                    decimal = this.addDecimals(cant);\n                }\n                else {\n                    const arrDecimals = arrAmount[1].split('');\n                    decimal = this.addDecimals(cant - arrDecimals.length, arrAmount[1]);\n                }\n                realAmount = `${arrAmount[0]}${decimal}`;\n            }\n        }\n        else {\n            realAmount = amount;\n        }\n        return realAmount;\n    }\n    /**\n     * Method to add leading zeros\n     *\n     * @param cant Quantity of zeros to add\n     * @param amount Amount to add zeros\n     */\n    static addDecimals(cant, amount = '0') {\n        const x = '0';\n        if (amount === '0') {\n            for (let index = 0; index < cant - 1; index++) {\n                amount += x;\n            }\n        }\n        else {\n            for (let index = 0; index < cant; index++) {\n                amount += x;\n            }\n        }\n        return amount;\n    }\n}\nAssetsUtils.createAssetTransaction = (owner, supply, supplyMutable, transferable, divisibility, durationInDays) => {\n    const assetDefinition = _state_appState__WEBPACK_IMPORTED_MODULE_6__[\"AppState\"].buildTxn.mosaicDefinition(owner, supplyMutable, transferable, divisibility, durationInDays ? tsjs_xpx_chain_sdk__WEBPACK_IMPORTED_MODULE_0__[\"UInt64\"].fromUint(AssetsUtils.calculateDuration(durationInDays)) : undefined);\n    const assetDefinitionTx = assetDefinition.toAggregate(owner);\n    let supplyChangeType = tsjs_xpx_chain_sdk__WEBPACK_IMPORTED_MODULE_0__[\"MosaicSupplyType\"].Increase;\n    const assetSupplyChangeTx = _state_appState__WEBPACK_IMPORTED_MODULE_6__[\"AppState\"].buildTxn.buildMosaicSupplyChange(assetDefinition.mosaicId, supplyChangeType, tsjs_xpx_chain_sdk__WEBPACK_IMPORTED_MODULE_0__[\"UInt64\"].fromUint(AssetsUtils.addZeros(divisibility, supply))).toAggregate(owner);\n    return _state_appState__WEBPACK_IMPORTED_MODULE_6__[\"AppState\"].buildTxn.aggregateComplete([assetDefinitionTx, assetSupplyChangeTx]);\n};\nAssetsUtils.assetSupplyChangeTransaction = (mosaidStringId, changeType, supply, divisibility) => {\n    const buildTransactions = _state_appState__WEBPACK_IMPORTED_MODULE_6__[\"AppState\"].buildTxn;\n    let supplyChangeType = (changeType == 'increase') ? tsjs_xpx_chain_sdk__WEBPACK_IMPORTED_MODULE_0__[\"MosaicSupplyType\"].Increase : tsjs_xpx_chain_sdk__WEBPACK_IMPORTED_MODULE_0__[\"MosaicSupplyType\"].Decrease;\n    return buildTransactions.buildMosaicSupplyChange(new tsjs_xpx_chain_sdk__WEBPACK_IMPORTED_MODULE_0__[\"MosaicId\"](mosaidStringId), supplyChangeType, tsjs_xpx_chain_sdk__WEBPACK_IMPORTED_MODULE_0__[\"UInt64\"].fromUint(AssetsUtils.addZeros(divisibility, supply)));\n};\nAssetsUtils.linkAssetToNamespaceTransaction = (mosaicIdString, namespaceString, linkType) => {\n    const buildTransactions = _state_appState__WEBPACK_IMPORTED_MODULE_6__[\"AppState\"].buildTxn;\n    let aliasActionType;\n    aliasActionType = (linkType == 'link') ? tsjs_xpx_chain_sdk__WEBPACK_IMPORTED_MODULE_0__[\"AliasActionType\"].Link : tsjs_xpx_chain_sdk__WEBPACK_IMPORTED_MODULE_0__[\"AliasActionType\"].Unlink;\n    return buildTransactions.assetAlias(aliasActionType, new tsjs_xpx_chain_sdk__WEBPACK_IMPORTED_MODULE_0__[\"NamespaceId\"](namespaceString), new tsjs_xpx_chain_sdk__WEBPACK_IMPORTED_MODULE_0__[\"MosaicId\"](mosaicIdString));\n};\nAssetsUtils.createAssetTransactionFee = (owner, supply, supplyMutable, transferable, divisibility, duration) => {\n    const createAssetTransaction = AssetsUtils.createAssetTransaction(owner, supply, supplyMutable, transferable, divisibility, duration);\n    return createAssetTransaction.maxFee.compact();\n};\nAssetsUtils.getMosaicSupplyChangeTransactionFee = (mosaicId, changeType, supply, divisibility) => {\n    const mosaicSupplyChangeTx = AssetsUtils.assetSupplyChangeTransaction(mosaicId, changeType, supply, divisibility);\n    return mosaicSupplyChangeTx.maxFee.compact();\n};\nAssetsUtils.getLinkAssetToNamespaceTransactionFee = (mosaicId, namespaceId, linkType) => {\n    const linkAssetToNamespaceTx = AssetsUtils.linkAssetToNamespaceTransaction(mosaicId, namespaceId, linkType);\n    return linkAssetToNamespaceTx.maxFee.compact();\n};\nAssetsUtils.calculateDuration = (durationInDay) => {\n    let chainConfig = new _models_stores_chainProfileConfig__WEBPACK_IMPORTED_MODULE_5__[\"ChainProfileConfig\"](_state_networkState__WEBPACK_IMPORTED_MODULE_2__[\"networkState\"].chainNetworkName);\n    chainConfig.init();\n    let blockTargetTime = parseInt(chainConfig.blockGenerationTargetTime);\n    let blockTargetTimeByDay = (60 * 60 * 24) / blockTargetTime;\n    // 5760 = 4 * 60 * 24 -> 15sec per block\n    return Math.floor(durationInDay * blockTargetTimeByDay);\n};\nAssetsUtils.getOwnedAssets = (address) => {\n    const assetSelection = [];\n    const account = _state_walletState__WEBPACK_IMPORTED_MODULE_1__[\"walletState\"].currentLoggedInWallet.accounts.find(account => account.address === address);\n    const other = _state_walletState__WEBPACK_IMPORTED_MODULE_1__[\"walletState\"].currentLoggedInWallet.others.find(account => account.address === address);\n    const filterAccountAsset = account ? account.assets.filter((asset) => asset.owner === account.publicKey) : [];\n    const filterOtherAsset = other ? other.assets.filter((asset) => asset.owner === other.publicKey) : [];\n    if (filterAccountAsset.length > 0) {\n        filterAccountAsset.forEach((asset) => {\n            assetSelection.push({\n                label: asset.idHex + ' > ' + _typeHelper__WEBPACK_IMPORTED_MODULE_4__[\"Helper\"].amountFormatterSimple(asset.amount, asset.divisibility),\n                value: asset.idHex,\n            });\n        });\n    }\n    if (filterOtherAsset.length > 0) {\n        filterOtherAsset.forEach((asset) => {\n            assetSelection.push({\n                label: asset.idHex + ' > ' + _typeHelper__WEBPACK_IMPORTED_MODULE_4__[\"Helper\"].amountFormatterSimple(asset.amount, asset.divisibility),\n                value: asset.idHex,\n            });\n        });\n    }\n    return assetSelection;\n};\nAssetsUtils.getOwnedAssetsPermutable = (address) => {\n    const assetSelection = [];\n    const account = _state_walletState__WEBPACK_IMPORTED_MODULE_1__[\"walletState\"].currentLoggedInWallet.accounts.find(account => account.address === address);\n    const other = _state_walletState__WEBPACK_IMPORTED_MODULE_1__[\"walletState\"].currentLoggedInWallet.others.find(account => account.address === address);\n    const filterAccountAsset = account ? account.assets.filter(asset => (asset.owner === account.publicKey && asset.supplyMutable === true)) : [];\n    const filterOtherAsset = other ? other.assets.filter(asset => (asset.owner === other.publicKey && asset.supplyMutable === true)) : [];\n    if (filterAccountAsset.length > 0) {\n        filterAccountAsset.forEach((asset) => {\n            assetSelection.push({\n                label: asset.idHex + ' > ' + _typeHelper__WEBPACK_IMPORTED_MODULE_4__[\"Helper\"].amountFormatterSimple(asset.amount, asset.divisibility),\n                value: asset.idHex,\n            });\n        });\n    }\n    if (filterOtherAsset.length > 0) {\n        filterOtherAsset.forEach((asset) => {\n            assetSelection.push({\n                label: asset.idHex + ' > ' + _typeHelper__WEBPACK_IMPORTED_MODULE_4__[\"Helper\"].amountFormatterSimple(asset.amount, asset.divisibility),\n                value: asset.idHex,\n            });\n        });\n    }\n    return assetSelection;\n};\nAssetsUtils.getSenderAccount = (selectedAddress, walletPassword) => {\n    const accAddress = tsjs_xpx_chain_sdk__WEBPACK_IMPORTED_MODULE_0__[\"Address\"].createFromRawAddress(selectedAddress);\n    const accountDetails = _state_walletState__WEBPACK_IMPORTED_MODULE_1__[\"walletState\"].currentLoggedInWallet.accounts.find((account) => account.address == accAddress.plain());\n    const encryptedPassword = _util_walletUtils__WEBPACK_IMPORTED_MODULE_3__[\"WalletUtils\"].createPassword(walletPassword);\n    let privateKey = _util_walletUtils__WEBPACK_IMPORTED_MODULE_3__[\"WalletUtils\"].decryptPrivateKey(encryptedPassword, accountDetails.encrypted, accountDetails.iv);\n    const account = tsjs_xpx_chain_sdk__WEBPACK_IMPORTED_MODULE_0__[\"Account\"].createFromPrivateKey(privateKey, _state_appState__WEBPACK_IMPORTED_MODULE_6__[\"AppState\"].networkType);\n    return account;\n};\nAssetsUtils.createAsset = (selectedAddress, walletPassword, owner, supply, supplyMutable, transferable, divisibility, duration) => {\n    let createAssetAggregateTransaction = AssetsUtils.createAssetTransaction(owner, supply, supplyMutable, transferable, divisibility, duration);\n    const account = AssetsUtils.getSenderAccount(selectedAddress, walletPassword);\n    let signedTx = account.sign(createAssetAggregateTransaction, _state_networkState__WEBPACK_IMPORTED_MODULE_2__[\"networkState\"].currentNetworkProfile.generationHash);\n    _transactionUtils__WEBPACK_IMPORTED_MODULE_7__[\"TransactionUtils\"].announceTransaction(signedTx);\n};\nAssetsUtils.createAssetMultiSig = (selectedAddress, walletPassword, owner, supply, supplyMutable, transferable, divisibility, durationInDays) => {\n    const assetDefinition = _state_appState__WEBPACK_IMPORTED_MODULE_6__[\"AppState\"].buildTxn.mosaicDefinition(owner, supplyMutable, transferable, divisibility, durationInDays ? tsjs_xpx_chain_sdk__WEBPACK_IMPORTED_MODULE_0__[\"UInt64\"].fromUint(AssetsUtils.calculateDuration(durationInDays)) : undefined);\n    const assetDefinitionTx = assetDefinition.toAggregate(owner);\n    let supplyChangeType;\n    supplyChangeType = tsjs_xpx_chain_sdk__WEBPACK_IMPORTED_MODULE_0__[\"MosaicSupplyType\"].Increase;\n    const assetSupplyChangeTx = _state_appState__WEBPACK_IMPORTED_MODULE_6__[\"AppState\"].buildTxn.buildMosaicSupplyChange(assetDefinition.mosaicId, supplyChangeType, tsjs_xpx_chain_sdk__WEBPACK_IMPORTED_MODULE_0__[\"UInt64\"].fromUint(AssetsUtils.addZeros(divisibility, supply))).toAggregate(owner);\n    const account = AssetsUtils.getSenderAccount(selectedAddress, walletPassword);\n    const innerTxn = [assetDefinitionTx, assetSupplyChangeTx];\n    const aggregateBondedTx = _state_appState__WEBPACK_IMPORTED_MODULE_6__[\"AppState\"].buildTxn.aggregateBonded(innerTxn);\n    const aggregateBondedTxSigned = account.sign(aggregateBondedTx, _state_networkState__WEBPACK_IMPORTED_MODULE_2__[\"networkState\"].currentNetworkProfile.generationHash);\n    let hashLockTx = _transactionUtils__WEBPACK_IMPORTED_MODULE_7__[\"TransactionUtils\"].lockFundTx(aggregateBondedTxSigned);\n    let signedHashlock = account.sign(hashLockTx, _state_networkState__WEBPACK_IMPORTED_MODULE_2__[\"networkState\"].currentNetworkProfile.generationHash);\n    _transactionUtils__WEBPACK_IMPORTED_MODULE_7__[\"TransactionUtils\"].announceLF_AND_addAutoAnnounceABT(signedHashlock, aggregateBondedTxSigned);\n};\nAssetsUtils.changeAssetSupply = (selectedAddress, walletPassword, mosaicId, changeType, supply, divisibility) => {\n    let createAssetAggregateTransaction = AssetsUtils.assetSupplyChangeTransaction(mosaicId, changeType, supply, divisibility);\n    const account = AssetsUtils.getSenderAccount(selectedAddress, walletPassword);\n    let signedTx = account.sign(createAssetAggregateTransaction, _state_networkState__WEBPACK_IMPORTED_MODULE_2__[\"networkState\"].currentNetworkProfile.generationHash);\n    _transactionUtils__WEBPACK_IMPORTED_MODULE_7__[\"TransactionUtils\"].announceTransaction(signedTx);\n};\nAssetsUtils.changeAssetSupplyMultiSig = (selectedAddress, walletPassword, mosaicId, changeType, supply, divisibility, multiSigAddress) => {\n    let buildTransactions = _state_appState__WEBPACK_IMPORTED_MODULE_6__[\"AppState\"].buildTxn;\n    let createAssetAggregateTransaction = AssetsUtils.assetSupplyChangeTransaction(mosaicId, changeType, supply, divisibility);\n    const account = AssetsUtils.getSenderAccount(selectedAddress, walletPassword);\n    const multisSigAccount = _state_walletState__WEBPACK_IMPORTED_MODULE_1__[\"walletState\"].currentLoggedInWallet.accounts.find((element) => element.address === multiSigAddress);\n    const multisSigOther = _state_walletState__WEBPACK_IMPORTED_MODULE_1__[\"walletState\"].currentLoggedInWallet.others.find((element) => element.address === multiSigAddress);\n    const multisigPublicKey = multisSigAccount ? multisSigAccount.publicKey : multisSigOther.publicKey;\n    const multisigPublicAccount = tsjs_xpx_chain_sdk__WEBPACK_IMPORTED_MODULE_0__[\"PublicAccount\"].createFromPublicKey(multisigPublicKey, _state_appState__WEBPACK_IMPORTED_MODULE_6__[\"AppState\"].networkType);\n    const innerTxn = [createAssetAggregateTransaction.toAggregate(multisigPublicAccount)];\n    const aggregateBondedTx = buildTransactions.aggregateBonded(innerTxn);\n    const aggregateBondedTxSigned = account.sign(aggregateBondedTx, _state_networkState__WEBPACK_IMPORTED_MODULE_2__[\"networkState\"].currentNetworkProfile.generationHash);\n    let hashLockTx = _transactionUtils__WEBPACK_IMPORTED_MODULE_7__[\"TransactionUtils\"].lockFundTx(aggregateBondedTxSigned);\n    let signedHashlock = account.sign(hashLockTx, _state_networkState__WEBPACK_IMPORTED_MODULE_2__[\"networkState\"].currentNetworkProfile.generationHash);\n    _transactionUtils__WEBPACK_IMPORTED_MODULE_7__[\"TransactionUtils\"].announceLF_AND_addAutoAnnounceABT(signedHashlock, aggregateBondedTxSigned);\n};\nAssetsUtils.linkedNamespaceToAsset = (selectedAddress, walletPassword, mosaicIdString, namespaceString, linkType) => {\n    const linkAssetToNamespaceTx = AssetsUtils.linkAssetToNamespaceTransaction(mosaicIdString, namespaceString, linkType);\n    const account = AssetsUtils.getSenderAccount(selectedAddress, walletPassword);\n    let signedTx = account.sign(linkAssetToNamespaceTx, _state_networkState__WEBPACK_IMPORTED_MODULE_2__[\"networkState\"].currentNetworkProfile.generationHash);\n    _transactionUtils__WEBPACK_IMPORTED_MODULE_7__[\"TransactionUtils\"].announceTransaction(signedTx);\n};\nAssetsUtils.linkedNamespaceToAssetMultiSig = (selectedAddress, walletPassword, mosaicIdString, namespaceString, linkType, multiSigAddress) => {\n    let buildTransactions = _state_appState__WEBPACK_IMPORTED_MODULE_6__[\"AppState\"].buildTxn;\n    const linkAssetToNamespaceTx = AssetsUtils.linkAssetToNamespaceTransaction(mosaicIdString, namespaceString, linkType);\n    const account = AssetsUtils.getSenderAccount(selectedAddress, walletPassword);\n    const multisSigAccount = _state_walletState__WEBPACK_IMPORTED_MODULE_1__[\"walletState\"].currentLoggedInWallet.accounts.find((element) => element.address === multiSigAddress);\n    const multisSigOther = _state_walletState__WEBPACK_IMPORTED_MODULE_1__[\"walletState\"].currentLoggedInWallet.others.find((element) => element.address === multiSigAddress);\n    const multisigPublicKey = multisSigAccount ? multisSigAccount.publicKey : multisSigOther.publicKey;\n    const multisigPublicAccount = tsjs_xpx_chain_sdk__WEBPACK_IMPORTED_MODULE_0__[\"PublicAccount\"].createFromPublicKey(multisigPublicKey, _state_appState__WEBPACK_IMPORTED_MODULE_6__[\"AppState\"].networkType);\n    const innerTxn = [linkAssetToNamespaceTx.toAggregate(multisigPublicAccount)];\n    const aggregateBondedTx = buildTransactions.aggregateBonded(innerTxn);\n    const aggregateBondedTxSigned = account.sign(aggregateBondedTx, _state_networkState__WEBPACK_IMPORTED_MODULE_2__[\"networkState\"].currentNetworkProfile.generationHash);\n    let hashLockTx = _transactionUtils__WEBPACK_IMPORTED_MODULE_7__[\"TransactionUtils\"].lockFundTx(aggregateBondedTxSigned);\n    let signedHashlock = account.sign(hashLockTx, _state_networkState__WEBPACK_IMPORTED_MODULE_2__[\"networkState\"].currentNetworkProfile.generationHash);\n    _transactionUtils__WEBPACK_IMPORTED_MODULE_7__[\"TransactionUtils\"].announceLF_AND_addAutoAnnounceABT(signedHashlock, aggregateBondedTxSigned);\n};\nAssetsUtils.listActiveNamespacesToLink = (assetId, address, linkOption) => {\n    // const accountNamespaces = walletState.currentLoggedInWallet.accounts.find((account) => account.address === address).namespaces.filter(namespace => namespace.active === true);\n    const account = _state_walletState__WEBPACK_IMPORTED_MODULE_1__[\"walletState\"].currentLoggedInWallet.accounts.find((account) => account.address === address);\n    const accountNamespaces = account ? account.namespaces.filter(namespace => namespace.active === true) : [];\n    const other = _state_walletState__WEBPACK_IMPORTED_MODULE_1__[\"walletState\"].currentLoggedInWallet.others.find((account) => account.address === address);\n    const otherNamespaces = other ? other.namespaces.filter(namespace => namespace.active === true) : [];\n    let namespacesNum;\n    let fetchedNamespace;\n    if (accountNamespaces.length > 0) {\n        namespacesNum = accountNamespaces.length;\n        fetchedNamespace = accountNamespaces;\n    }\n    else {\n        namespacesNum = otherNamespaces.length;\n        fetchedNamespace = otherNamespaces;\n    }\n    let namespacesArr = [];\n    if (namespacesNum > 0) {\n        fetchedNamespace.forEach((namespaceElement) => {\n            console.log(namespaceElement);\n            const level = namespaceElement.name.split('.');\n            let isDisabled;\n            let label = '';\n            let namespaceName = '';\n            if (namespaceElement.linkedId != '') {\n                let linkName;\n                let linkLabel;\n                switch (namespaceElement.linkType) {\n                    case 1:\n                        linkName = \"Asset\";\n                        linkLabel = namespaceElement.linkedId;\n                        isDisabled = (linkOption == 'link' ? true : false);\n                        break;\n                    case 2:\n                        linkName = \"Address\";\n                        linkLabel = _typeHelper__WEBPACK_IMPORTED_MODULE_4__[\"Helper\"].createAddress(namespaceElement.linkedId).pretty();\n                        isDisabled = true;\n                        break;\n                    default:\n                        break;\n                }\n                label = namespaceElement.name + ' (Linked to ' + linkName + ') - ' + linkLabel;\n                namespaceName = namespaceElement.name;\n            }\n            else {\n                isDisabled = (linkOption == 'link' ? false : true);\n                label = namespaceElement.name;\n                namespaceName = namespaceElement.name;\n            }\n            if (linkOption == 'link') {\n                namespacesArr.push({\n                    // value: namespaceElement.idHex,\n                    value: namespaceName,\n                    label: label,\n                    disabled: isDisabled,\n                    level: level\n                });\n            }\n            if (linkOption == 'unlink' && namespaceElement.linkedId == assetId) {\n                namespacesArr.push({\n                    // value: namespaceElement.idHex,\n                    value: namespaceName,\n                    label: label,\n                    disabled: isDisabled,\n                    level: level\n                });\n            }\n        });\n        namespacesArr.sort((a, b) => {\n            if (a.label > b.label)\n                return 1;\n            if (a.label < b.label)\n                return -1;\n            return 0;\n        });\n        namespacesArr.sort((a, b) => {\n            if (a.level > b.level)\n                return 1;\n            if (a.level < b.level)\n                return -1;\n            return 0;\n        });\n    }\n    return namespacesArr;\n};\n\n\n//# sourceURL=webpack:///./src/util/assetsUtils.ts?");

/***/ })

}]);