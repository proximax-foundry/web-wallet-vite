<template>
  <div>
      <Dropdown
        v-model= selectedAccountInfo
        :style="{'width':'100%'}"
        :options=filteredAccounts
        :filter="true"
        optionLabel="label"
        emptyFilterMessage=" "
        @change="selectAccount($event.value.label, $event.value.value);$emit('update:modelValue', $event.value.value);$emit('select-account', $event.value.value);"
      >
        <!-- For the display of the main transfer account information -->
        <template #value="slotProps">
          <div v-if="slotProps.value" class="account-item-value account-item">
              <div class='flex'>
                <div v-html="selectedImg"/>
                <div class='flex flex-col ml-2 text-left'>
                  <div class='text-blue-primary font-semibold text-xxs uppercase'  style="line-height: 9px;">{{$t('transfer.transferFrom')}}</div>
                  <div class='mt-1 text-tsm font-bold'>{{slotProps.value.label}}</div>
                </div>
              </div>
          </div>
        </template>
        <!-- For the display of the dropdown option -->
        <template #option="slotProps">
          <div class="account-item">
            <div class='flex'>
              <div v-html="toSvg(slotProps.option.value, 20, jdenticonConfig)" />
                <div class='text-xs ml-2 font-semibold'>{{ slotProps.option.label }}</div>
            </div>
          </div>
        </template>
      </Dropdown>
  </div>
</template>

<script>
import { walletState } from '@/state/walletState';
import { computed, defineComponent, ref, getCurrentInstance } from 'vue';
import { toSvg } from "jdenticon";
import { ThemeStyleConfig } from '@/models/stores/themeStyleConfig';
export default defineComponent({
name: 'SelectInputAccount',
emits:[
    'select-account','update:modelValue',
  ],
props: [
    'modelValue',
    'selectDefault'
  ],
setup(p){
    const toggleSelection = ref(false);
    const internalInstance = getCurrentInstance();
    const emitter = internalInstance.appContext.config.globalProperties.emitter;
    let themeConfig = new ThemeStyleConfig('ThemeStyleConfig');
    themeConfig.init();
    let jdenticonConfig = themeConfig.jdenticonConfig;
    const accounts = computed(() =>{
      if(walletState.currentLoggedInWallet){
        var accountList = [];
        const concatOther = walletState.currentLoggedInWallet.accounts.concat(walletState.currentLoggedInWallet.others)
        concatOther.forEach(account => {
          accountList.push({
            value: account.address,
            label: walletState.currentLoggedInWallet.convertAddressToName(account.address,true)
          });
        });
        
        return accountList;
      }else{
        return []
      }
      
    });
    const selectedAccount = ref(accounts.value.length?accounts.value.find(acc => acc.value == p.selectDefault).label:'');
    const selectedAddress = ref(p.selectDefault);
    const selectedAccountInfo = {label : selectedAccount.value, value: selectedAddress.value}
    const selectedImg = ref(toSvg(p.selectDefault, 25, jdenticonConfig));
    const selectAccount = (accountName, accountAddress) => {
      emitter.emit("select-account",accountAddress)
      selectedAccount.value,selectedAccountInfo.label = accountName;
      selectedAddress.value,selectedAccountInfo.value = accountAddress;
      selectedImg.value = toSvg(accountAddress, 25, jdenticonConfig);
      toggleSelection.value = !toggleSelection.value;
    };
    const filterQuery = ref("");
    const filteredAccounts = computed(() => {
      const query = filterQuery.value.toLowerCase();
      if(filterQuery.value == ""){
        return accounts.value;
      }
      return accounts.value.filter((items) =>{
        return Object.values(items).some((word) =>
          String(word).toLowerCase().includes(query));
      });
    });
    return {
      selectAccount,
      selectedAddress,
      selectedAccountInfo,
      selectedImg,
      accounts,
      toggleSelection,
      selectedAccount,
      jdenticonConfig,
      toSvg,
      filterQuery,
      filteredAccounts
    };
}
})
</script>

<style>
</style>