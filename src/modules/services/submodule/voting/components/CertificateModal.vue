<template>
  <div>
    <transition
      enter-active-class="animate__animated animate__fadeInDown"
      leave-active-class="animate__animated animate__fadeOutUp"
    >
      <div v-if="showModal" class="popup-outer fixed flex z-50">
        <div class="modal-popup-box relative">
          <div class="delete-position" style=" position: absolute; right: 15px;">
            <font-awesome-icon icon="times" class="delete-icon-style" @click="closeModal();"></font-awesome-icon>
          </div>
          <div>
            <h1 class="default-title font-bold my-5">{{$t('vote.votingcertificate')}}</h1>
            <div class="text-left md:justify-start md:flex md:items-stretch">
              <div class="block md:w-7/12 md:inline-block">
                <div class="font-bold text-lg mb-5">{{$t('NavigationMenu.Transfer')}}&nbsp;&nbsp;<img src="@/modules/dashboard/img/arrow-transaction-sender-out-orange-proximax-sirius-explorer.svg" class="w-8 h-8 inline-block">&nbsp;&nbsp;<span class="text-red-500 ">{{$t('vote.sent')}}</span></div>
                <div class="text-xs my-2">[ timestamp ]</div>
                <div><span class="font-bold">{{$t('dashboard.effectivefee')}}:</span> <img src="@/assets/img/icon-prx-xpx-blue.svg" class="w-5 inline mx-2"><span class="text-xs">[ effectiveFee ]</span> <span class="text-sm">{{ currentNativeTokenName }}</span></div>
                <div class="content">
                  <div>
                    <div>{{$t('vote.polltitle')}}:</div>
                    <div class="mt-2">[title]</div>
                  </div>
                  <div class="mt-5">
                    <div>{{$t('dashboard.recipient')}}:</div>
                    <div class="mt-2">[address]</div>
                  </div>
                </div>
              </div>
              <div class="block md:w-5/12 md:inline-block bg-gray-200 rounded-2xl">
                <div class="col-span-1 text-center w-full pt-2 rounded-2xl rounded-b-none" style="background: -webkit-linear-gradient(bottom,#7cbd74,#1f9062)">
                  <div class="inline-block h-full">
                  <div class="h-full flex">
                    <img src="@/modules/services/submodule/voting/img/badge-silver-proximax-sirius-wallet.svg" class="w-24 h-24 self-center">
                  </div>
                  </div>
                </div>
                <div class="p-4">
                  <div class="font-bold text-xs mb-1 block">{{$t('dashboard.signer')}}:</div>
                  <div class="w w-96 md:w-full">[ Signer ]</div>
                  <div class="font-bold text-xs mb-1 block mt-3">{{$t('dashboard.signature')}}:</div>
                  <div class="w w-96 md:w-full">[ Signature ]</div>
                  <div class="font-bold text-xs mb-1 block mt-3">{{$t('dashboard.hash')}}:</div>
                  <div class="w w-96 md:w-full">[ hash ]</div>
                </div>
              </div>
            </div>
            <div class="mt-10">
              <button type="button" class="default-btn mr-5 focus:outline-none disabled:opacity-50">{{$t('vote.view')}}</button>
              <button type="button" class="default-btn mr-5 focus:outline-none disabled:opacity-50">{{$t('accounts.save')}}</button>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <div @click="closeModal();" v-if="showModal" class="fixed inset-0 bg-opacity-90 bg-blue-primary"></div>
  </div>
</template>

<script>
import { getCurrentInstance } from "vue";
import { AppState } from '@/state/appState';
export default{

  name: 'certificateModal',
  components: {
  },
  props: {
    'showModal': Boolean,
  },
  setup() {
    const currentNativeTokenName = computed(()=> AppState.nativeToken.label);
    const internalInstance = getCurrentInstance();
    const emitter = internalInstance.appContext.config.globalProperties.emitter;
    const closeModal = () => {
      emitter.emit("CLOSE_MODAL", false);
    };

    return {
      closeModal,
      currentNativeTokenName,
    };
  }
}
</script>

<style lang="scss" scoped>
.content {
  margin: 15px auto;
  > div{
    @apply text-xs;
    margin-bottom: 5px;
    div:first-child{
      font-weight: bold;
    }
  }
}
</style>