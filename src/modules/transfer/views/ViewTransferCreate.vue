<template>
<div>
  <AddContactModal :toggleModal="togglaAddContact" :saveAddress="recipientInput" />
  <ConfirmSendModal :toggleModal="toggleConfirm" />
  <div class='w-10/12 ml-auto mr-auto mt-5'>
    <div class="border filter shadow-lg xl:grid xl:grid-cols-3 mt-8" >
      <div class="xl:col-span-2 p-12">
        <div class="text-sm font-semibold ">{{$t('transfer.newTransfer')}}</div>
        <div class=" error error_box mb-5" v-if="err!=''">{{ err }}</div>
        <div v-if="isNotCosigner" class="rounded-md bg-yellow-200 w-full p-2 flex items-center justify-center">
          <div class="rounded-full w-5 h-5 bg-yellow-100 inline-block relative mr-2"><font-awesome-icon icon="exclamation" class="text-yellow-500 h-3 w-3 absolute" style="top: 5px; left:7px"></font-awesome-icon></div><div class="inline-block text-xs">{{$t('general.noCosigner')}}</div>
        </div>
        <div v-else-if="showBalanceErr" class="rounded-md bg-red-200 w-full p-2 flex items-center justify-center">
          <div class="rounded-full w-5 h-5 border border-red-500 inline-block relative mr-2"><font-awesome-icon icon="times" class="text-red-500 h-3 w-3 absolute" style="top: 3px; left:4px"></font-awesome-icon></div><div class="inline-block text-xs">{{$t('general.insufficientBalance')}}</div>
        </div>
        <div class="mt-4"/>
        <SelectInputAccount v-model="selectedAccAdd" :selectDefault="selectedAccAdd"/>
        <div v-if="isMultiSigBool" class="text-left mt-2 mb-5 ml-4"> 
            <div v-if="getWalletCosigner.cosignerList.length > 0">
              <div class="text-tsm">
                {{$t('general.initiateBy')}}:
                <span class="font-bold" v-if="getWalletCosigner.cosignerList.length == 1"> 
                  {{ getWalletCosigner.cosignerList[0].name }} ({{$t('general.balance')}}:{{  getWalletCosigner.cosignerList[0].balance }} {{ currentNativeTokenName }})
                </span>
                <span class="font-bold" v-else>
                  <select class="" v-model="cosignAddress">
                    <option v-for="(element, item) in  getWalletCosigner.cosignerList" :value="findAcc(element.publicKey).address" :key="item">
                      {{ element.name }} ({{$t('general.balance')}}: {{ element.balance }} {{ currentNativeTokenName }})
                    </option>
                  </select>
                </span>
                <div v-if="cosignerBalanceInsufficient" class="error">
                  {{$t('general.insufficientBalance')}}
                </div>
              </div>
            </div>
          </div>
        <div class="flex mt-3 gap-1">
          <AddressInputClean :placeholder="$t('transfer.transferPlaceholder')" v-model="recipientInput" v-debounce:1000="checkRecipient" :showError="showAddressError" :disabled="disableRecipient"/>
          <div @click="toggleContact=!toggleContact" class=' border rounded-md cursor-pointer flex flex-col justify-around p-2 ' >
            <font-awesome-icon icon="id-card-alt" class=" text-blue-primary ml-auto mr-auto "></font-awesome-icon>
            <div class='text-xxs text-blue-primary font-semibold uppercase'>{{$t('general.select')}}</div>
          </div>
        </div>
        <!-- Pop Up when select icon is clicked -->
        <Sidebar v-model:visible="toggleContact" :baseZIndex="10000" position="full">
          <SelectAccountAndContact :contacts="contacts" :selectedNode="selectedNode" @node-select="onNodeSelect"/>
        </Sidebar>
        
        <div v-for="(mosaic, index) in mosaicsCreated" :key="index">
          <MosaicInput :placeholder="$t('transfer.selectAsset')" errorMessage="" v-model="selectedMosaic[index].id" :index="index" :options="mosaics" :disableOptions="selectedMosaic" @show-mosaic-selection="updateMosaic" @remove-mosaic-selected="removeMosaic"/>
          <TransferInputClean v-if="selectedMosaic[index].id != 0" v-model="selectedMosaic[index].amount" :placeholder="$t('transfer.assetAmount')" type="text" :showError="showAssetBalanceErr[index]" :decimal="mosaicSupplyDivisibility[index]"  />
        </div>
        <div>
          <button class="my-2 font-semibold text-xs text-blue-primary outline-none focus:outline-none disabled:opacity-50" :disabled="addMosaicsButton || mosaics.length==0" @click="displayMosaicsOption">
           + {{$t('transfer.addAssets')}}
          </button>
        </div>
        <TransferInputClean  v-model="sendXPX" :balance="Number(balance)" :placeholder="$t('transfer.transferAmount')" :logo="true" type="text" :showError="showBalanceErr" :decimal="6"  :disabled="disableSupply"/>
        <TransferTextareaInput class="pt-4" :placeholder="$t('general.message')" :errorMessage="$t('general.limitExceed')" v-model="messageText" :remainingChar="remainingChar" :showError="showLimitErr"   :limit="messageLimit" icon="comment" :msgOpt="msgOption" :disabled="disableMsgInput" />
        <div class="mb-5" v-if="!encryptedMsgDisable">
          <input id="encryptedMsg"  type="checkbox" value="encryptedMsg" v-model="encryptedMsg" :disabled="disableEncryptMsg == 1"/>
          <label for="encryptedMsg" class="cursor-pointer font-bold ml-4 mr-5 text-tsm">
            {{$t('transfer.enableEncryption')}}
          </label>
        </div>
      </div>
      <div class='bg-navy-primary py-6 px-6 xl:col-span-1'>
        <TransactionFeeDisplay :send-x-p-x="sendXPX" :selected-mosaic="selectedMosaic" :mosaics-created="mosaicsCreated" :transaction-fee="effectiveFee" :total-fee-formatted="totalFee" :get-multi-sig-cosigner="getWalletCosigner" :check-cosign-balance="checkCosignBalance" :lock-fund-currency="lockFundCurrency" :lock-fund-tx-fee="lockFundTxFee" :balance="balance" :selected-acc-add="selectedAccAdd"/>
        <div class="mt-5"/>
        <div class='font-semibold text-xs text-white mb-1.5'>{{$t('general.enterPasswordContinue')}}</div>
        <PasswordInput  :placeholder="$t('general.enterPassword')" :errorMessage="$t('general.passwordRequired')" :showError="showPasswdError" v-model="walletPassword" icon="lock" class="mt-5 mb-3" :disabled="disablePassword"/>
        <button type="submit" class="w-full blue-btn px-3 py-3 disabled:opacity-50 disabled:cursor-auto" :disabled="disableCreate" @click="makeTransfer()">
            {{$t('general.transfer')}}
          </button>
        <div class="text-center">
          <router-link :to="{name: 'ViewDashboard'}" class="content-center text-xs text-white underline" >{{$t('general.cancel')}}</router-link>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script >
import { Helper } from "@/util/typeHelper";
import { computed, ref, getCurrentInstance, watch, effect } from "vue";
import TextInput from "@/components/TextInput.vue";
import PasswordInput from "@/components/PasswordInput.vue";
import SelectInputPlugin from "@/components/SelectInputPlugin.vue";
import MosaicInput from "@/modules/transfer/components/MosaicInput.vue";
import SupplyInput from "@/components/SupplyInput.vue";
import TransferTextareaInput from "@/modules/transfer/components/TransferTextareaInput.vue";
import {
  createTransaction,
  makeTransaction,
  enableACT
} from "@/util/transfer"; //getMosaicsAllAccounts
import AddContactModal from "@/modules/transfer/components/AddContactModal.vue";
import ConfirmSendModal from "@/modules/transfer/components/ConfirmSendModal.vue";
import {useI18n} from 'vue-i18n'
import { multiSign } from "@/util/multiSignatory";
import { walletState } from "@/state/walletState";
import { networkState } from "@/state/networkState";
import { accountUtils } from "@/util/accountUtils";
import { TransactionUtils } from "@/util/transactionUtils";
import { WalletUtils } from "@/util/walletUtils";
import { ChainUtils } from '@/util/chainUtils';
import { NamespaceUtils } from '@/util/namespaceUtils';
import SelectInputAccount from "@/components/SelectInputAccount.vue";
import SelectAccountAndContact from "@/components/SelectAccountAndContact.vue";
import AddressInputClean from "@/modules/transfer/components/AddressInputClean.vue"
import TransferInputClean from "@/modules/transfer/components/TransferInputClean.vue"
import { AppState } from '@/state/appState';
import TransactionFeeDisplay from '@/modules/services/components/TransactionFeeDisplay.vue';
import { Address } from 'tsjs-xpx-chain-sdk';
import { useRouter } from 'vue-router';
export default { 
  name: "ViewTransferCreate",
  components: {
    AddressInputClean,
    SelectInputAccount,
    SelectAccountAndContact,
    TransferInputClean,
    TransferTextareaInput,
    PasswordInput,
    AddContactModal,
    ConfirmSendModal,
    MosaicInput,
    TransactionFeeDisplay,
  },
  setup() {
    const router = useRouter()
    const currentNativeTokenName = computed(()=> AppState.nativeToken.label);
    const toggleContact = ref(false)
    const {t} = useI18n();
    const internalInstance = getCurrentInstance();
    const emitter = internalInstance.appContext.config.globalProperties.emitter;
    const showContactSelection = ref(false);
    const showAssetBalanceErr = ref([])
    const selectContact = ref("0");
    const recipientInput = ref("");
    const selectedNode = ref({})
    const selectedNodeIndex = ref()
    const msgOption = ref("regular");
    const messageText = ref("");
    const walletPassword = ref("");
    const err = ref("");
    const showMenu = ref(false);
    const encryptedMsg = ref("");
    const togglaAddContact = ref(false);
    const selectedMosaic = ref([]);
    const mosaicsCreated = ref([]);
    const mosaicsSelected = ref([]);
    const selectedMosaicAmount = ref([]);
    const mosaicSupplyDivisibility = ref([]);
    const currentlySelectedMosaic = ref([]);
    const sendXPX = ref("0");
    const encryptedMsgDisable = ref(true);
    const toggleConfirm = ref(false);
    const forceSend = ref(false);
    const isNotCosigner = ref(false);
    const cosignAddress = ref("");
    
    const disableAllInput = ref(false);
    const disableRecipient = computed(() => disableAllInput.value);
    const disableSupply = computed(() => disableAllInput.value);
    const disableRegularMsg = computed(() => disableAllInput.value);
    const disableHexMsg = computed(() => disableAllInput.value);
    const disableEncryptMsg = computed(() => disableAllInput.value);
    const disableMsgInput = computed(() => disableAllInput.value);
    const disablePassword = computed(() => disableAllInput.value);
    const cosignerBalanceInsufficient = ref(false);
    const namespace = ref('');
    const networkType = AppState.networkType;
    const chainAPIEndpoint = computed(()=> ChainUtils.buildAPIEndpoint(networkState.selectedAPIEndpoint, networkState.currentNetworkProfile.httpPort));
    const walletName = walletState.currentLoggedInWallet?walletState.currentLoggedInWallet.name : ''
    const currencyName = computed(
      () => networkState.currentNetworkProfile.network.currency.name
    );
    const lockFund = computed(() =>
      Helper.convertToExact(
        networkState.currentNetworkProfileConfig.lockedFundsPerAggregate,
        AppState.nativeToken.divisibility
      )
    );
    const lockFundCurrency = computed(() =>
      Helper.convertToCurrency(
        networkState.currentNetworkProfileConfig.lockedFundsPerAggregate,
        AppState.nativeToken.divisibility
      )
    );

    const lockFundTxFee = computed(()=>{
      if(networkState.currentNetworkProfile){
        return Helper.convertToExact(TransactionUtils.getLockFundFee(), AppState.nativeToken.divisibility);
      }
      return 0;  
    });
    const lockFundTotalFee = computed(
      () => lockFund.value + lockFundTxFee.value
    );
   
    const messageLimit = computed(
      () => networkState.currentNetworkProfileConfig.maxMessageSize - 1
    );
    const addressPatternShort = "^[0-9A-Za-z]{40}$";
    const addressPatternLong = "^[0-9A-Za-z-]{46}$";
    const remainingChar = ref(0);
    const showAddressError = ref(true);
    const passwdPattern = "^[^ ]{8,}$";
    const showPasswdError = ref(false);
    const showLimitErr = ref(false);
    
    
    const selectedAccName = ref(
      walletState.currentLoggedInWallet?walletState.currentLoggedInWallet.selectDefaultAccount().name : ''
    );
    const selectedAccAdd = ref(
      walletState.currentLoggedInWallet?walletState.currentLoggedInWallet.selectDefaultAccount().address : ''
    );
    const findAcc = (publicKey)=>{
      return walletState.currentLoggedInWallet.accounts.find(acc=>acc.publicKey==publicKey)
    }

    const findAccWithAddress = address =>{
      if(!walletState.currentLoggedInWallet){
        return null
      }
      return walletState.currentLoggedInWallet.accounts.find(acc=>acc.address==address)
    }
    
    const accounts = computed(()=>{
      if(!walletState.currentLoggedInWallet){
        return [];
      }
      let accounts = walletState.currentLoggedInWallet.accounts.map(
        (acc)=>{ 
          return { 
            name: acc.name,
            balance: acc.balance,
            address: acc.address,
            publicKey: acc.publicKey,
            isMultisig: acc.getDirectParentMultisig().length ? true: false
          }; 
        });
        
       
       let otherAccounts =walletState.currentLoggedInWallet.others.filter((acc)=> acc.type === "MULTISIG").map(
        (acc)=>{ 
          return { 
            name: acc.name,
            balance: acc.balance,
            address: acc.address,
            publicKey: acc.publicKey,
            isMultisig: true
          }; 
        });
        return accounts.concat(otherAccounts);
      
    });
     const getWalletCosigner = computed(() =>{
      if(networkState.currentNetworkProfileConfig){
      let cosigners= multiSign.getCosignerInWallet(accounts.value.find(acc=>acc.address==selectedAccAdd.value)?accounts.value.find(acc => acc.address == selectedAccAdd.value).publicKey:'')
      let list =[]
      
      cosigners.cosignerList.forEach(publicKey=>{
        list.push({publicKey:publicKey,name:findAcc(publicKey).name,balance:findAcc(publicKey).balance })
      })
      cosigners.cosignerList = list
      return cosigners
      }else{
        return {hasCosigner:false,cosignerList:[]}
      }
    })
    
    const isMultiSig = (address) => {
      const account = accounts.value.find(
        (account) => account.address === address
      );
      let isMulti = false;
     
      if (account != undefined) {
        isMulti = account.isMultisig;
      }
      return isMulti;
    };
    const isMultiSigBool = computed(() => {
          return isMultiSig(selectedAccAdd.value)
      }
    )

    const effectiveFee = ref(isMultiSigBool.value?makeTransaction.calculate_aggregate_fee(
      messageText.value,
      sendXPX.value,
      selectedMosaic.value
    ) :makeTransaction.calculate_fee(
      messageText.value,
      sendXPX.value,
      selectedMosaic.value
    ))
    if (isMultiSigBool.value) {
      let cosigner = getWalletCosigner.value.cosignerList
      if (cosigner.length > 0) {
        cosignAddress.value = walletState.currentLoggedInWallet.accounts.find(acc=>acc.publicKey==cosigner[0].publicKey).address 
        if (findAccWithAddress(cosignAddress.value).balance < lockFundTotalFee.value + Number(effectiveFee.value) ) {
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
    
    const checkCosignBalance = computed(() => {
      let cosignBalance = findAccWithAddress(cosignAddress.value)?findAccWithAddress(cosignAddress.value).balance:0;
      return Helper.toCurrencyFormat(cosignBalance);
    })

    const balance = computed(() => {
        if (walletState.currentLoggedInWallet) {
          if (accounts.value.find((element) => element.address === selectedAccAdd.value) == undefined){
            return 0 
          }else{
            return accounts.value.find((element) => element.address === selectedAccAdd.value).balance
          }
        } else {
          return 0;
        }
      });
    const splitBalance = computed(()=>{
      let accBalance = Helper.toCurrencyFormat(balance.value, AppState.nativeToken.divisibility)
      let split = accBalance.split(".")
      if (split[1]!=undefined){
        return {left:split[0],right:split[1]}
      }else{
        return {left:split[0], right:null}
      }
    })
   
   
    const moreThanOneAccount = computed(() => {
      return accounts.value.length> 1;
    });

    const contacts = computed(() => {
      if(!walletState.currentLoggedInWallet){
        return [];
      }
      const wallet = walletState.currentLoggedInWallet;
      var contact = [];
      var indexNo = 0
      contact.push({
        "key" : "0",
        "label" : t('general.ownerAcc'),
        "selectable" : false,
        "children" : []
        }
      )
      accounts.value.forEach((element) => {
        contact[0].children.push(
          {
            "key" : "0-" + indexNo.toString(),
            "label" : element.name,
            "data" : Address.createFromRawAddress(element.address).pretty()
          }
        )
        indexNo++
      })
      indexNo = 0
      // adding from contact book
      contact.push({
        "key" : "1",
        "label" : t('general.contact'),
        "selectable" : false,
        "children" : []
        }
      )

      if (wallet.contacts != undefined) {
        wallet.contacts.forEach((element) => {
          contact[1].children.push(
          {
            "key" : "1-" + indexNo.toString(),
            "label" : element.name,
            "data" : Address.createFromRawAddress(element.address).pretty()
          }
        )
        indexNo++
        });
      }
      return contact
    });

    const onNodeSelect = (node) => {
      makeNodeSelectable()
      toggleContact.value = false
      recipientInput.value = node.data
      // this is too make it turn blue
      selectedNode.value[node.key] = true
      node.selectable = false
    }

    const makeNodeSelectable = () => {
      // if there is previously unselectable value make it selectable
      if (Object.keys(selectedNode.value).length !== 0){
        selectedNodeIndex.value = Object.keys(selectedNode.value)[0].split('-')
        contacts.value[selectedNodeIndex.value[0]].children[selectedNodeIndex.value[1]].selectable = true
        selectedNode.value = {}
      }
    }

    const clearInput = () => {
      selectContact.value = "0";
      walletPassword.value = "";
      recipientInput.value = "";
      encryptedMsgDisable.value = true;
      messageText.value = "";
      sendXPX.value = "0";
      emitter.emit("CLEAR_SELECT", 0);
      selectedMosaic.value = [];
      mosaicsCreated.value = [];
      selectedMosaicAmount.value = [];
      mosaicSupplyDivisibility.value = [];
      showContactSelection.value = false;
    };
    const clearMsg = () => {
      messageText.value = "";
      emitter.emit("CLEAR_TEXTAREA", 0);
    };
  
  const updateAdd = (e) => {
    recipientInput.value = e;
  };
  const makeTransfer = async() => {
    if (sendXPX.value == "0" && !forceSend.value) {
      toggleConfirm.value = true;
    } else {
      
      let selectedCosign;
      if (isMultiSigBool.value) {
        
        let selectedCosignList = getWalletCosigner.value.cosignerList;
        if (selectedCosignList.length > 1) {
          selectedCosign = cosignAddress.value;
        } else {
          selectedCosign = walletState.currentLoggedInWallet.accounts.find(acc=>acc.publicKey==selectedCosignList[0].publicKey).address
        }
      }
      let transferStatus = await createTransaction(
        recipientInput.value.toUpperCase(),
        sendXPX.value,
        messageText.value,
        selectedMosaic.value,
        mosaicSupplyDivisibility.value,
        walletPassword.value,
        selectedAccAdd.value,
        selectedCosign,
        encryptedMsg.value
      );
      if (!transferStatus) {
        err.value = t('general.walletPasswordInvalid',{name : walletState.currentLoggedInWallet.name});
      } else {
        
        err.value = "";
       
        if (!accountUtils.checkAvailableContact(recipientInput.value)) {
          
          // add new contact
          togglaAddContact.value = true;
        } else {
          router.push({ name: "ViewAccountPendingTransactions",params:{address:selectedAccAdd.value} })
          clearInput();
        }
        forceSend.value = false;
        
      }
    }
  };
 
  const addMosaicsButton = computed(() => {
    if (!disableSupply.value) {
      let account;
      if(!walletState.currentLoggedInWallet){
        account = undefined;
      }else{
        account = walletState.currentLoggedInWallet.accounts.find(
          (element) => element.name == selectedAccName.value) ||
          walletState.currentLoggedInWallet.others.find(
          (element) => element.name == selectedAccName.value)
      }
      
      if (account != undefined) {
        if (account.assets != undefined) {
          if (
            account.assets.length == 0 ||
            mosaicsCreated.value.length == mosaics.value.length
          ) {
            return true;
          } else {
            return false;
          }
        }
      }
      
      return true;
    } else {
      return true;
    }
  });

  const checkIsNaN = string =>{
    return isNaN(parseFloat(string))? 0 : parseFloat(string)
  }
  const totalFee = computed(()=>{
    let tokenDivisibility = AppState.nativeToken.divisibility
    if(!isMultiSig(selectedAccAdd.value) ){
      if(tokenDivisibility==0){
        return Math.trunc(checkIsNaN(parseFloat(sendXPX.value.replace(/,/g, ''))) + parseFloat(effectiveFee.value))
      }else{
        return Math.round((checkIsNaN(parseFloat(sendXPX.value.replace(/,/g, ''))) + parseFloat(effectiveFee.value))*Math.pow(10,tokenDivisibility))/Math.pow(10,tokenDivisibility)
      }
    }else {
      if(tokenDivisibility== 0){
        return Math.trunc((parseFloat(effectiveFee.value)+ lockFundTxFee.value + lockFund.value))
      }else{
        return Math.round((parseFloat(effectiveFee.value)+ lockFundTxFee.value + lockFund.value)*Math.pow(10,tokenDivisibility))/ Math.pow(10,tokenDivisibility)
      }
    }
  })

  const showBalanceErr = computed(()=>{
    if(isMultiSigBool.value){
      if (sendXPX.value>balance.value || !(showAssetBalanceErr.value.every(value => value == false))){
        return true
      }else{
        return false
      }
    }else{
      if(totalFee.value > balance.value || !(showAssetBalanceErr.value.every(value => value == false))){
        return true
      }else{
        return false
      }
    }
  })
    const disableCreate = computed(() => {
      return !(
        walletPassword.value.match(passwdPattern) &&
        !showAddressError.value &&
        recipientInput.value.length > 0  &&
        (showAssetBalanceErr.value.every(value => value == false)) &&
        !showBalanceErr.value &&
        !showLimitErr.value

      );
    });

  const mosaics = computed(() => {
    var mosaicOption = [];
    if(!walletState.currentLoggedInWallet){
      return mosaicOption;
    }
    const account = walletState.currentLoggedInWallet.accounts.find(
      (element) => element.name == selectedAccName.value
    ) ||  walletState.currentLoggedInWallet.others.find(
      (element) => element.name == selectedAccName.value)
    if (account.assets.length > 0) {
      let index = 0;
      for(let asset of account.assets){

        if(asset.rawAmount === 0){
          continue;
        }

        if(!asset.namespaceNames.includes(AppState.nativeToken.fullNamespace)){
          mosaicOption.push({
            val: asset.idHex,
            balance: t('general.balance')+":"+Helper.toCurrencyFormat(asset.amount,asset.divisibility),
            label: (asset.namespaceNames.length>0?asset.namespaceNames[0]:asset.idHex),
            id: index + 1,
            disabled: false
          });
          index += 1;
        }
      }
    }
    return mosaicOption;
  });
  for(let i=0;i<mosaics.value.length;i++){
    showAssetBalanceErr.value.push(false)
  }

  const displayMosaicsOption = () => {
    mosaicsCreated.value.push(0);
    selectedMosaic.value.push({ id: 0, amount: "0" , namespace: ""});
  };
  // update mosaic
  const updateMosaic = (e) => {
    // get mosaic info and format divisibility in supply input
    const account = walletState.currentLoggedInWallet.accounts.find((account) => account.address === selectedAccAdd.value) || walletState.currentLoggedInWallet.others.find((account) => account.address === selectedAccAdd.value)
    let mosaic = account.assets.find(
      (asset) => asset.idHex == selectedMosaic.value[e.index].id
    );
    // enable back the option
    for (let i in mosaics.value){
      mosaics.value[i].disabled = false
    }
    // disable all the options choosen
    mosaics.value.forEach(o1 => selectedMosaic.value.some(o2 => {
      if(o1.val == o2.id){
        o1.disabled = true;
      }
    }));

    // check is namespace is link to asset
    if (mosaic.namespaceNames.length >= 1){
      selectedMosaic.value[e.index].namespace = mosaic.namespaceNames[0]
    }
    else{
      selectedMosaic.value[e.index].namespace = mosaic.idHex
    }
    selectedMosaic.value[e.index].amount = "0";
    mosaicSupplyDivisibility.value[e.index] = mosaic.divisibility;
    emitter.emit("CLOSE_MOSAIC_INSUFFICIENT_ERR", false);
  };

  const removeMosaic = (e) => {
    if(selectedMosaic.value[e.index]!= undefined && selectedMosaic.value[e.index].id != 0){
      // enabling back the option
      mosaics.value[mosaics.value.findIndex(item => item.val === selectedMosaic.value[e.index].id)].disabled = false
    }
    selectedMosaic.value.splice(e.index, 1);
    showAssetBalanceErr.value.splice(e.index,1)
    mosaicSupplyDivisibility.value.splice(e.index, 1);
    mosaicsCreated.value.splice(e.index, 1);
  };
  
  const getSelectedMosaicBalance = (index) => {
    const account = walletState.currentLoggedInWallet.accounts.find(
      (account) => account.address === selectedAccAdd.value) ||
      walletState.currentLoggedInWallet.others.find(
      (account) => account.address === selectedAccAdd.value) 
    let mosaic = account.assets.find(
      (asset) => asset.idHex == mosaics.value[index].val
    );
    
    if (mosaic != undefined) {
      return mosaic.amount;
    } else {
      return 0;
    }
  };
  
  watch(selectedAccAdd, (n, o) => {
    isNotCosigner.value = false
    showAssetBalanceErr.value = []
    for(let i=0;i<mosaics.value.length;i++){
      showAssetBalanceErr.value.push(false)
    }
    isMultiSigBool.value = isMultiSig(n);
    if (isMultiSigBool.value) {
      
        let cosigner = getWalletCosigner.value.cosignerList
        if (cosigner.length > 0) {
          cosignAddress.value = walletState.currentLoggedInWallet.accounts.find(acc=>acc.publicKey== cosigner[0].publicKey).address;
          if (cosigner[0].balance < lockFundTotalFee.value) {
            disableAllInput.value = true;
          } else {
            disableAllInput.value = false;
          }
        } else {
          isNotCosigner.value = true
          disableAllInput.value = true;
        }
    }
    else {
      disableAllInput.value = false;
    }   
  })
  
  watch(cosignAddress, (n, o) => {
    if (n != o) {
        if (
        accounts.value.find((element) => element.address == n).balance <
        lockFundTotalFee.value + Number(effectiveFee.value)
      ) {
        cosignerBalanceInsufficient.value = true;
        disableAllInput.value = true;
      } else {
        cosignerBalanceInsufficient.value = false;
        disableAllInput.value = false
      }
      
    }
  });
 
  watch(recipientInput,n=>{
    checkEncryptable(n);
    if(n.length==40 || n.length==46){
      checkEncryptable(n);
      checkRecipient()
    }else{
      showAddressError.value = true
    }
  })
  const checkRecipient = () =>{
    if(!walletState.currentLoggedInWallet){
        return;
    }
    try {
      let recipientAddress = Helper.createAddress(recipientInput.value);
      let networkOk = Helper.checkAddressNetwork(recipientAddress, networkType);
      if(!networkOk){
        showAddressError.value = true;
      }
      else{
        checkEncryptable(recipientInput.value);
        showAddressError.value = false;
      }
    } catch (error) {
      try{
        let namespaceId = Helper.createNamespaceId(recipientInput.value);
        checkNamespace(namespaceId).then((address)=>{
          recipientInput.value = address.plain();
          showAddressError.value = false;
          checkEncryptable(recipientInput.value);
        }).catch((error)=>{
          showAddressError.value = true;
        });
      }
      catch(error){
        /* console.log(error); */
        showAddressError.value = true;
      }
    }
  }
  const checkEncryptable = (add) =>{
    // show and hide encrypted message option
    if (add.match(addressPatternLong) || add.match(addressPatternShort)) {
        accountUtils.verifyPublicKey(recipientInput.value).then(verify =>
        encryptedMsgDisable.value = verify
        ).catch(err=>encryptedMsgDisable.value=true)
    } else {
      encryptedMsgDisable.value = true;
      showAddressError.value=true
    }
  }
  const checkNamespace = async (nsId)=>{
    return await NamespaceUtils.getLinkedAddress(nsId, chainAPIEndpoint.value);
  }
  const updateFee = ()=>{
     effectiveFee.value = isMultiSig(selectedAccAdd.value)? makeTransaction.calculate_aggregate_fee(
        messageText.value,
        sendXPX.value,
        selectedMosaic.value
      ) : makeTransaction.calculate_fee(
        messageText.value,
        sendXPX.value,
        selectedMosaic.value
      );
  }
  watch(selectedAccName, (n, o) => {
    if (n != o) {
      makeNodeSelectable()
      recipientInput.value = "";
      updateFee()
    }
  });
  watch(sendXPX, (n, o) => {
    if (n != o) {
      updateFee()
    }
  });
  
  watch(messageText, (n, o) => {
    if (n != o) {
      updateFee()
      if (encryptedMsg.value && messageText.value) {
        remainingChar.value = TransactionUtils.getFakeEncryptedMessageSize(messageText.value);
      } else {
        remainingChar.value = TransactionUtils.getPlainMessageSize(messageText.value);
      }
    if (messageText.value.length > messageLimit.value || remainingChar.value > messageLimit.value) {
      showLimitErr.value = true;
    }
    else {
      showLimitErr.value = false;
      }
    }
  });
  const getMosaicBalanceById = (id) =>{
    let accAddress = selectedAccAdd.value
    let acc = walletState.currentLoggedInWallet.accounts.find(acc=>acc.address==accAddress)? walletState.currentLoggedInWallet.accounts.find(acc=>acc.address==accAddress):walletState.currentLoggedInWallet.others.find(acc=>acc.address==accAddress)
    return acc.getAssetBalance(id)
  }
  
  watch(encryptedMsgDisable, (n) => {
    if (!n) {
      encryptedMsg.value = "";
    }
  });
  watch(encryptedMsg, (n) => {
    if (n) {
      if (messageText.value) {
        remainingChar.value = TransactionUtils.getFakeEncryptedMessageSize(messageText.value);
    if (messageText.value.length > messageLimit.value || remainingChar.value > messageLimit.value) {
      showLimitErr.value = true;
    }
    else {
      showLimitErr.value = false;
       }
      }
    } else {
      remainingChar.value = TransactionUtils.getPlainMessageSize(messageText.value);
          if (messageText.value.length > messageLimit.value || remainingChar.value > messageLimit.value) {
      showLimitErr.value = true;
    }
    else {
      showLimitErr.value = false;
      }
    }
  });

   watch(() => [...selectedMosaic.value], (n) => {
     updateFee()
      for(let i = 0; i < n.length; i++){
          if(n[i].amount> getMosaicBalanceById(n[i].id)){
          showAssetBalanceErr.value[i]= true
          }else{
            showAssetBalanceErr.value[i]= false
          }
      }
    }, {deep:true});
    

  emitter.on("CLOSE_CONTACT_MODAL", (payload) => {
    togglaAddContact.value = payload;
    router.push({ name: "ViewAccountPendingTransactions",params:{address:selectedAccAdd.value} })
    clearInput();
  });
  emitter.on("select-account", (address) => {
    selectedAccName.value = walletState.currentLoggedInWallet.accounts.find(acc=>acc.address==address)? walletState.currentLoggedInWallet.accounts.find(acc=>acc.address==address).name : walletState.currentLoggedInWallet.others.find(acc=>acc.address==address).name
    selectedAccAdd.value = address;
    selectedMosaic.value = [];
    mosaicsCreated.value = [];
    selectedMosaicAmount.value = [];
    mosaicSupplyDivisibility.value = [];
  });
  
    
  
  // confirm modal
  emitter.on("CLOSE_CONFIRM_SEND_MODAL", (payload) => {
    toggleConfirm.value = payload;
  });
  emitter.on("CONFIRM_PROCEED_SEND", (payload) => {
  
    if (payload) {
      forceSend.value = payload;
      toggleConfirm.value = false;
      makeTransfer();
    }
  });
  const displayAssetId = asset =>{
      let assetId = asset.toString()
      let part1 = assetId.slice(0,3)
      let part2 = assetId.slice(-4)
      return part1 + "..." + part2
    }
  console.log(typeof mosaics.value)
    return {
      showAssetBalanceErr,
      findAcc,
      totalFee,
      contacts,
      onNodeSelect,
      selectedNode,
      toggleContact,
      splitBalance,
      moreThanOneAccount,
      showMenu,
      selectedAccName,
      selectedAccAdd,
      showAddressError,
      balance,
      showBalanceErr,
      err,
      /* contact, */
      recipientInput,
      namespace,
      sendXPX,
      messageText,
      msgOption,
      showContactSelection,
      selectContact,
      walletPassword,
      disableCreate,
      clearInput,
      showPasswdError,
      updateAdd,
      addMosaicsButton,
      clearMsg,
      accounts,
      encryptedMsgDisable,
      encryptedMsg,
      makeTransfer,
      togglaAddContact,
      displayMosaicsOption,
      selectedMosaic,
      mosaicsCreated,
      mosaicsSelected,
      mosaics,
      selectedMosaicAmount,
      getSelectedMosaicBalance,
      mosaicSupplyDivisibility,
      updateMosaic,
      currentlySelectedMosaic,
      removeMosaic,
      toggleConfirm,
      isMultiSig,
      isMultiSigBool,
      effectiveFee,
      isNotCosigner,
      cosignAddress,
      getWalletCosigner,
      disableRecipient,
      checkRecipient,
      disableSupply,
      disableRegularMsg,
      disableHexMsg,
      disableEncryptMsg,
      disableMsgInput,
      disablePassword,
      cosignerBalanceInsufficient,
      messageLimit,
      remainingChar,
      lockFundCurrency,
      currencyName,
      lockFundTxFee,
      lockFundTotalFee,
      walletName,
      checkNamespace,
      currentNativeTokenName,
      showLimitErr,
      checkCosignBalance,
      displayAssetId
    };
  },
};
</script>
<style scoped lang="scss">
.slide-enter-active {
  -moz-transition-duration: 1s;
  -webkit-transition-duration: 1s;
  -o-transition-duration: 1s;
  transition-duration: 1s;
  -moz-transition-timing-function: ease-in-out;
  -webkit-transition-timing-function: ease-in-out;
  -o-transition-timing-function: ease-in-out;
  transition-timing-function: ease-in-out;
}
.slide-leave-active {
  -moz-transition-duration: 1s;
  -webkit-transition-duration: 1s;
  -o-transition-duration: 1s;
  transition-duration: 1s;
  -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}
.slide-enter-to,
.slide-leave-from {
  max-height: 1000px;
  overflow: hidden;
}
.slide-enter-from,
.slide-leave-to {
  overflow: hidden;
  max-height: 0;
}
.optionDiv:hover {
  background: #d9ebff;
}

.p-tree::v-deep{
  .p-tree-container .p-treenode .p-treenode-content{
    padding-left:2px;
    padding-top:2px
  }
  .p-link{
  padding: 0;
  margin: 0;
  }
  .p-inputtext{
      font-size: 1rem;
      text-align: left;
      padding: 0.5rem;
      border: 1px solid #ced4da;
    }
}
  ::v-deep(.p-inputtext) {
      font-size: 1rem;
      text-align: left;
      padding: 0.5rem;
    }
  

</style>