<template>
 <div>
  <div class='w-10/12 ml-auto mr-auto'>
    <div class="border filter shadow-lg xl:grid xl:grid-cols-3 mt-8" >
      <div class="xl:col-span-2 p-12">
        <div class='font-semibold mb-4'>{{$t('asset.createAssets')}}</div>
        <div v-if="showNoBalance" class="rounded-md bg-red-200 w-full p-2 flex items-center justify-center">
          <div class="rounded-full w-5 h-5 border border-red-500 inline-block relative mr-2"><font-awesome-icon icon="times" class="text-red-500 h-3 w-3 absolute" style="top: 3px; left:4px"></font-awesome-icon></div><div class="inline-block text-xs">{{$t('general.insufficientBalance')}}</div>
        </div>
        <div v-else-if="isNotCosigner" class="rounded-md bg-yellow-200 w-full p-2 flex items-center justify-center">
          <div class="rounded-full w-5 h-5 bg-yellow-100 inline-block relative mr-2"><font-awesome-icon icon="exclamation" class="text-yellow-500 h-3 w-3 absolute" style="top: 5px; left:7px"></font-awesome-icon></div><div class="inline-block text-xs">{{$t('general.noCosigner')}}</div>
        </div>
        <div class="error error_box" v-if="err!=''">{{ err }}</div>
        <div class="mt-4">
          <SelectInputAccount @select-account="changeSelection" v-model="selectedAccAdd" :selectDefault="defaultAcc?defaultAcc.address:''" />
          <div v-if="getMultiSigCosigner.cosignerList.length > 0">
            <div class="text-tsm text-left mt-3">{{$t('general.initiateBy')}}:
              <span class="font-bold" v-if="getMultiSigCosigner.cosignerList.length == 1">{{ getMultiSigCosigner.cosignerList[0].name }} ({{$t('general.balance')}}: {{ Helper.amountFormatterSimple(getMultiSigCosigner.cosignerList[0].balance, 0) }} {{currentNativeTokenName}})</span>
              <span class="font-bold" v-else><select v-model="cosignerAddress"><option v-for="(cosigner, item) in getMultiSigCosigner.cosignerList" :value="cosigner.address" :key="item">{{ cosigner.name }} ({{$t('general.balance')}}: {{ cosigner.balance }} {{ currentNativeTokenName }})</option></select></span>
              <div v-if="cosignerBalanceInsufficient" class="error">- {{$t('general.insufficientBalance')}}</div>
            </div>
          </div>
          <div class="lg:grid lg:grid-cols-2 mt-5">
            <div class="lg:mr-2"><SupplyInputClean :disabled="showNoBalance||isNotCosigner||disabledInput" v-model="supply" :balance="Number.MAX_VALUE" :placeholder="$t('general.supply')" type="text" @show-error="updateSupplyErr"  :decimal="Number(divisibility)" :toolTip="$t('asset.supplyMsg1') +' <br><br>' + $t('asset.supplyMsg2') + '<br>' + $t('asset.supplyMsg3')" /></div>
            <div class="lg:ml-2"><NumberInputClean :disabled="showNoBalance||isNotCosigner||disabledInput" v-model="divisibility" :max="6" :placeholder="$t('general.divisibility')" :showError="showDivisibilityErr"  :toolTip="$t('asset.divisibilityMsg1') +' <br><br>' + $t('asset.divisibilityMsg2') + '<br>' + $t('asset.divisibilityMsg3')" /></div>
          </div>
          <div class="lg:grid lg:grid-cols-2">
            <div class="mb-5 lg:mb-0 lg:mr-2"><CheckInput :disabled="showNoBalance||isNotCosigner||disabledInput" v-model="isTransferable" :title="$t('general.transferable')" :toolTip="$t('asset.transferableMsg')" @click="!showNoBalance?(isTransferable = !isTransferable):''"/></div>
            <div class="mb-5 lg:mb-0 lg:ml-2"><CheckInput :disabled="showNoBalance||isNotCosigner||disabledInput" v-model="isMutable" :title="$t('general.supplyMutable')" :toolTip="$t('asset.supplyMutableMsg')" @click="!showNoBalance?(isMutable = !isMutable):''" /></div>
          </div>
        </div>
      </div>
      <div class="bg-navy-primary py-6 px-6 xl:col-span-1">
        <TransactionFeeDisplay :asset-rental-fee-currency="rentalFeeCurrency" :transaction-fee="transactionFee" :total-fee-formatted="totalFeeFormatted" :get-multi-sig-cosigner="getMultiSigCosigner" :check-cosign-balance="checkCosignBalance" :lock-fund-currency="lockFundCurrency" :lock-fund-tx-fee="lockFundTxFee" :balance="balance" :selected-acc-add="selectedAccAdd"/>
        <div class='text-xs text-white my-5'>{{$t('general.enterPasswordContinue')}}</div>
        <PasswordInput :placeholder="$t('general.password')" :errorMessage="$t('general.passwordRequired')" :showError="showPasswdError" v-model="walletPassword" :disabled="disabledPassword" />
        <button type="submit" class="mt-3 w-full blue-btn py-4 disabled:opacity-50 disabled:cursor-auto text-white" :disabled="disableCreate" @click="createAsset">{{$t('asset.createAssets')}}</button>
        <div class="text-center">
          <router-link :to="{name: 'ViewDashboard'}" class='content-center text-xs text-white border-b-2 border-white'>{{$t('general.cancel')}}</router-link>
        </div>
      </div>
    </div>

    <div class="sm:grid sm:grid-cols-2 mt-10 lg:mt-16">
      <div class="mb-8">
        <a href="https://bcdocs.xpxsirius.io/docs/built-in-features/mosaic/" target=_new class="sm:h-9 lg:h-5 text-blue-primary font-bold text-tsm flex items-start">{{$t('general.assetQues')}}</a>
        <div class="text-gray-400 text-xs lg:text-tsm my-3 sm:pr-2">{{$t('asset.assetAns')}}</div>
      </div>
      <div class="mb-8">
        <a href="https://t.me/proximaxhelpdesk" target=_new class="sm:h-9 lg:h-5 text-blue-primary font-bold text-tsm items-start flex">{{$t('general.feedback')}}</a>
        <div class="text-gray-400 text-tsm my-3">{{$t('general.feedbackDescription')}}</div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { computed, ref, watch } from 'vue';
import { useRouter } from "vue-router";
import SelectInputAccount from '@/components/SelectInputAccount.vue';
import PasswordInput from '@/components/PasswordInput.vue';
import SupplyInputClean from '@/components/SupplyInputClean.vue';
import CheckInput from '@/components/CheckInput.vue';
import NumberInputClean from '@/modules/services/submodule/assets/components/NumberInputClean.vue';
import TransactionFeeDisplay from '@/modules/services/components/TransactionFeeDisplay.vue';
import {useI18n} from 'vue-i18n'
import { ChainProfileConfig } from "@/models/stores/";
import { Wallet } from "@/models/wallet";
import { walletState } from "@/state/walletState";
import { networkState } from "@/state/networkState";
import { Currency } from "@/models/currency";
import { Helper } from '@/util/typeHelper';
import { ChainUtils } from '@/util/chainUtils';
import { AssetsUtils } from '@/util/assetsUtils';
import { WalletUtils } from '@/util/walletUtils';
import { multiSign } from '@/util/multiSignatory';
import { AppState } from '@/state/appState';
import { TransactionUtils } from '@/util/transactionUtils';
import { UnitConverter } from '@/util/unitConverter';
import { TimeUnit } from '@/models/const/timeUnit';

export default {
  name: 'ViewServicesAssetsCreate',
  components: {
    CheckInput,
    PasswordInput,
    SupplyInputClean,
    NumberInputClean,
    SelectInputAccount,
    TransactionFeeDisplay,
  },
  setup(){
    const router = useRouter();

    const currentNativeTokenName = computed(()=> AppState.nativeToken.label);
    const currentNativeTokenDivisibility = computed(()=> AppState.nativeToken.divisibility);
    const showSupplyErr = ref(false);
    const walletPassword = ref('');
    const {t} = useI18n();
    const err = ref('');
    const currentSelectedName = ref('');
    const divisibility = ref('0');
    const showDivisibilityErr = ref(false);
    const isTransferable = ref(false);
    const isMutable = ref(false);
    const disabledPassword = computed(() => showNoBalance.value||isNotCosigner.value||disableAllInput.value);
    const disabledInput = computed(() => disableAllInput.value)
    const disabledClear = ref(false);
    const disabledDuration = ref(false);
    const durationOption =ref('month');
    const duration = ref('1');
    const showDurationErr = ref(false);
    const passwdPattern = "^[^ ]{8,}$";
    const showPasswdError = ref(false);
    const durationCheckDisabled = ref(false);
    const cosignerBalanceInsufficient = ref(false);
    const cosignerAddress = ref('');
    const supply = ref('0');
    const disableAllInput = ref(false);

    const currencyName = computed(() => AppState.nativeToken.label);

    const maxDuration = computed(()=>{
      return networkState.currentNetworkProfileConfig ? 
      Math.floor(UnitConverter.configReturn(networkState.currentNetworkProfileConfig.maxNamespaceDuration, TimeUnit.DAY)) : 0;
    });
    const ownerPublicAccount = ref('')
    try {
      ownerPublicAccount.value = WalletUtils.createPublicAccount(walletState.currentLoggedInWallet?walletState.currentLoggedInWallet.selectDefaultAccount().publicKey:'', AppState.networkType)
    } catch (error) {
      console.log(error)
    }
    const transactionFee = ref('')
    const transactionFeeExact = ref(0)
    try {
      transactionFee.value =  Helper.amountFormatterSimple(AssetsUtils.createAssetTransactionFee( ownerPublicAccount.value, supply.value, isMutable.value, isTransferable.value, divisibility.value), AppState.nativeToken.divisibility);
      transactionFeeExact.value = Helper.convertToExact(AssetsUtils.createAssetTransactionFee( ownerPublicAccount.value, supply.value, isMutable.value, isTransferable.value, divisibility.value), AppState.nativeToken.divisibility);
    } catch (error) {
      console.log(error)
    }
     
    const rentalFee = computed(()=>{
      if(networkState.currentNetworkProfileConfig){
        return  Helper.convertToExact(networkState.currentNetworkProfileConfig.mosaicRentalFee, AppState.nativeToken.divisibility)
      }else{
        return 0
      }
    })
    const rentalFeeCurrency = computed(()=> {
      if(networkState.currentNetworkProfileConfig){
        return Helper.convertToCurrency(networkState.currentNetworkProfileConfig.mosaicRentalFee, AppState.nativeToken.divisibility) 
      }else{
        return 0
      }
    })
   const lockFund = computed(()=>{
      if(networkState.currentNetworkProfileConfig){
        return Helper.convertToExact(networkState.currentNetworkProfileConfig.lockedFundsPerAggregate, AppState.nativeToken.divisibility)
      }else{
        return 0
      }
    })
    const lockFundCurrency = computed(()=> {
      if(networkState.currentNetworkProfileConfig){
        return Helper.convertToCurrency(networkState.currentNetworkProfileConfig.lockedFundsPerAggregate, AppState.nativeToken.divisibility)
      }else{
        return 0
      }
    })

    const lockFundTxFee = computed(()=>{
      if(networkState.currentNetworkProfile){ 
        return Helper.convertToExact(TransactionUtils.getLockFundFee(), AppState.nativeToken.divisibility);
      }
      return 0;  
    });
    const lockFundTotalFee = computed(()=> lockFund.value + lockFundTxFee.value);

    const disableCreate = computed(() => !(
      walletPassword.value.match(passwdPattern) && (divisibility.value != '') && (supply.value > 0) && (!showSupplyErr.value) && (!showDurationErr.value) && (!showNoBalance.value) && (!isNotCosigner.value)
    ));

    const isMultiSig = (address) => {
      if(walletState.currentLoggedInWallet){
        const account = walletState.currentLoggedInWallet.accounts.find((account) => account.address == address) || walletState.currentLoggedInWallet.others.find((account) => account.address == address);
        const isMulti = account.getDirectParentMultisig().length>0?true:false
        return isMulti
      }else{
        return false
      }
    };
    const defaultAcc = walletState.currentLoggedInWallet?walletState.currentLoggedInWallet.selectDefaultAccount(): null
    const selectedAccName = ref(defaultAcc?defaultAcc.name:'');
    const selectedAccAdd = ref(defaultAcc?defaultAcc.address:'');
    const balance = ref(Helper.toCurrencyFormat(defaultAcc?defaultAcc.balance:0, AppState.nativeToken.divisibility));
    const balanceNumber = ref(defaultAcc?defaultAcc.balance:0);
    const isMultiSigBool =ref(isMultiSig(defaultAcc?defaultAcc.address:''));

    const accounts = computed( () => {
      if(walletState.currentLoggedInWallet){
        if(walletState.currentLoggedInWallet.others){
          const concatOther = walletState.currentLoggedInWallet.accounts.concat(walletState.currentLoggedInWallet.others)
          return concatOther;
        } else{
          return walletState.currentLoggedInWallet.accounts;
        }
      } else{
        return [];
      }
    });

    const fetchAccount = (publicKey) => {
      return walletState.currentLoggedInWallet.accounts.find(account => account.publicKey === publicKey);
    };

    const getMultiSigCosigner = computed(() => {
      if(networkState.currentNetworkProfileConfig){
        let cosigners = multiSign.getCosignerInWallet(accounts.value.find(account => account.address == selectedAccAdd.value)?accounts.value.find(account => account.address == selectedAccAdd.value).publicKey:'');
        let list = [];
        cosigners.cosignerList.forEach( publicKey => {
          list.push({
            publicKey,
            name: fetchAccount(publicKey).name,
            balance: fetchAccount(publicKey).balance,
            address: fetchAccount(publicKey).address
          });
        });

        cosigners.cosignerList = list;
        return cosigners;
      }else{
        return {hasCosigner:false,cosignerList:[]}
      }
      
    });

    const isNotCosigner = computed(() => getMultiSigCosigner.value.cosignerList.length == 0 && isMultiSig(selectedAccAdd.value));

    const showNoBalance = computed(() => {
      if (!isMultiSig(selectedAccAdd.value)){
        return balanceNumber.value < (rentalFee.value + transactionFeeExact.value) 
      }
      else if(isNotCosigner.value){
        return balanceNumber.value < (rentalFee.value + transactionFeeExact.value) 
      }else{
        return balanceNumber.value < (rentalFee.value + transactionFeeExact.value + lockFundTotalFee.value)
      }
    });

    if(balanceNumber.value < (rentalFee.value + transactionFee.value)){
      if(!isNotCosigner.value){
        // showNoBalance.value = true;
      }
      disabledClear.value = true;
      disabledDuration.value = true;
      durationCheckDisabled.value = true;
    }else{
      disabledClear.value = false;
      disabledDuration.value = false;
      durationCheckDisabled.value = false;
    }

    const moreThanOneAccount = computed(()=>{
      return accounts.value.length > 1;
    });

    const changeSelection = (address) => {
      let account = walletState.currentLoggedInWallet.accounts.find(account => account.address == address);
      if(!account){
        account = walletState.currentLoggedInWallet.others.find(account => account.address == address);
      }
      selectedAccName.value = account.name;
      selectedAccAdd.value = address;
      balance.value = Helper.toCurrencyFormat(account.balance, AppState.nativeToken.divisibility);
      balanceNumber.value = account.balance;
      // showNoBalance.value = ((account.balance < (rentalFee.value + transactionFeeExact.value)) && !isNotCosigner.value) ?true:false;
      currentSelectedName.value = account.name;
      ownerPublicAccount.value = WalletUtils.createPublicAccount(account.publicKey, AppState.networkType);
    }

    const clearInput = () => {
      walletPassword.value = '';
      divisibility.value = '0';
      supply.value = '0';
      duration.value = '1';
      durationOption.value = 'month';
      disabledDuration.value = '';
      isTransferable.value = false;
      isMutable.value = false;
    };

    /*

    watch(durationOption, () => {
      duration.value = '1';
    });

    watch(disabledDuration, (n) => {
      (n)?duration.value = '':duration.value = '1';
    });

    watch(duration, (n) =>{
      if(durationOption.value=='year' && n > 10){
        showDurationErr.value = true;
      }else if(durationOption.value=='month' && n > 120){
        showDurationErr.value = true;
      }else{
        showDurationErr.value = false;
      }
    });
    */

    // calculate fees
    const totalFee = computed(() => {
      // if multisig
      if(isMultiSig(selectedAccAdd.value)){
        return parseFloat(lockFundTotalFee.value) + transactionFeeExact.value;
      }else{
        return rentalFee.value + transactionFeeExact.value;
      }
    });

    const totalFeeFormatted = computed(() => {
      return Helper.amountFormatterSimple(totalFee.value, 0);
    });


    watch(totalFee, (n) => {
      if(balanceNumber.value < n && !isNotCosigner.value){
        showNoBalance.value = true;
      }else{
        showNoBalance.value = false;
      }
    });

    watch(isNotCosigner, (n) => {
      if(n){
        showNoBalance.value = true;
      }else{
        showNoBalance.value = false;
      }
    });

    const updateSupplyErr = (bolError) => {
      showSupplyErr.value = bolError;
    }

    const createAsset = () => {
      let verifyPassword = WalletUtils.verifyWalletPassword(walletState.currentLoggedInWallet.name,networkState.chainNetworkName,walletPassword.value)
      if(!verifyPassword){
        err.value = t('general.walletPasswordInvalid',{name : walletState.currentLoggedInWallet.name})
        return
      }
      if(cosigner.value){
        AssetsUtils.createAssetMultiSig( cosigner.value, walletPassword.value, ownerPublicAccount.value, supply.value, isMutable.value, isTransferable.value, divisibility.value); 
      }else{
        AssetsUtils.createAsset( selectedAccAdd.value, walletPassword.value, ownerPublicAccount.value, supply.value, isMutable.value, isTransferable.value, divisibility.value);
      }
      clearInput();
      router.push({ name: "ViewAccountPendingTransactions",params:{address:selectedAccAdd.value} })
    };

    const cosigner = computed(() => {
      if(getMultiSigCosigner.value.cosignerList.length > 0){
        if(getMultiSigCosigner.value.cosignerList.length > 1){
          return cosignerAddress.value;
        }else{
          return fetchAccount(getMultiSigCosigner.value.cosignerList[0].publicKey).address;
        }
      }else{
        return '';
      }
    });

    cosignerAddress.value = getMultiSigCosigner.value.cosignerList.length>0?getMultiSigCosigner.value.cosignerList[0].address:''
    
    watch(getMultiSigCosigner,n=>{
      if(n.cosignerList.length>0){
        cosignerAddress.value = n.cosignerList.length>0?getMultiSigCosigner.value.cosignerList[0].address:''
      }
    })

    const findAccWithAddress = address =>{
      if(!walletState.currentLoggedInWallet){
        return null
      }
      return walletState.currentLoggedInWallet.accounts.find(acc=>acc.address==address)
    }

    const checkCosignBalance = computed(() => {
      let cosignBalance = findAccWithAddress(cosignerAddress.value)?findAccWithAddress(cosignerAddress.value).balance:0;
      return Helper.toCurrencyFormat(cosignBalance);
    })

    const splitCurrency = (amount) => {
      let split = amount.toString().split(".")
      if (split[1]!=undefined){
        return '<span class="font-semibold text-sm">' + split[0] + '</span>.<span class="font-semibold text-xs">' + split[1] + '</span>';
      }else{
        return '<span class="font-semibold text-sm">' + split[0] + '</span>';
      }
    };

    if (isMultiSigBool.value) {
      let cosigner = getMultiSigCosigner.value.cosignerList
      if (cosigner.length > 0) {
        cosignerAddress.value = walletState.currentLoggedInWallet.accounts.find(acc=>acc.publicKey==cosigner[0].publicKey).address 
        if (findAccWithAddress(cosignerAddress.value).balance < lockFundTotalFee.value ) {
          disableAllInput.value = true;
          cosignerBalanceInsufficient.value = true;
        } else {
          disableAllInput.value = false;
          cosignerBalanceInsufficient.value = false;
        }
      } else {
        disableAllInput.value = true;
      }
    }
    watch(selectedAccAdd, (n, o) => {
      isMultiSigBool.value = isMultiSig(n);
      if (isMultiSigBool.value) {
        let cosigner = getMultiSigCosigner.value.cosignerList
      if (cosigner.length > 0) {
        cosignerAddress.value = walletState.currentLoggedInWallet.accounts.find(acc=>acc.publicKey==cosigner[0].publicKey).address 
        if (findAccWithAddress(cosignerAddress.value).balance < lockFundTotalFee.value ) {
          disableAllInput.value = true;
          cosignerBalanceInsufficient.value = true;
        } else {
          disableAllInput.value = false;
          cosignerBalanceInsufficient.value = false;
        }
      } else {
        disableAllInput.value = true;
        cosignerBalanceInsufficient.value = true;
      }
    } else {
      disableAllInput.value = false;
      cosignerBalanceInsufficient.value = false;
    }
  });
    watch(cosignerAddress, (n, o) => {
    if (n != o) {
        if (
        accounts.value.find((element) => element.address == n).balance <
        lockFundTotalFee.value
      ) {
        cosignerBalanceInsufficient.value = true;
        disableAllInput.value = true;
      } else {
        cosignerBalanceInsufficient.value = false;
        disableAllInput.value = false
      }
      
    }
  });

    return {
      fetchAccount,
      accounts,
      moreThanOneAccount,
      currentSelectedName,
      selectedAccName,
      selectedAccAdd,
      isTransferable,
      isMutable,
      balance,
      balanceNumber,
      showNoBalance,
      showSupplyErr,
      showDivisibilityErr,
      err,
      walletPassword,
      disableCreate,
      clearInput,
      showPasswdError,
      changeSelection,
      supply,
      divisibility,
      transactionFee,
      disabledPassword,
      disabledClear,
      createAsset,
      disabledDuration,
      durationOption,
      duration,
      showDurationErr,
      durationCheckDisabled,
      isMultiSig,
      isMultiSigBool,
      rentalFeeCurrency,
      lockFundCurrency,
      currencyName,
      lockFundTxFee,
      lockFundTotalFee,
      totalFeeFormatted,
      getMultiSigCosigner,
      cosignerBalanceInsufficient,
      cosignerAddress,
      isNotCosigner,
      currentNativeTokenName,
      currentNativeTokenDivisibility,
      walletState,
      networkState,
      Helper,
      splitCurrency,
      updateSupplyErr,
      defaultAcc,
      checkCosignBalance,
      disabledInput
    }
  },
}
</script>
<style scoped>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

::v-deep(.p-inputtext) {
      font-size: 1rem;
      text-align: left;
      padding: 0.5rem;
    }
</style>