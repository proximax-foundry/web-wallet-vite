<template>
  <div>
    <DataTable :value="transactions" :paginator="true" :rows="10" scrollDirection="horizontal"
      :alwaysShowPaginator="false" responsiveLayout="scroll"
      paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
      currentPageReportTemplate="">
      <Column style="width: 200px" headerClass="invisible" v-if="!wideScreen">
        <template #body="{ data }">
          <div>
            <div class="uppercase text-xxs font-bold mb-1">{{ $t('dashboard.txHash') }}</div>
            <div class="flex items-center">
              <div @click="gotoHashExplorer(data.hash)"
                class="uppercase cursor-pointer font-bold text-txs text-blue-primary "><span class="text-txs"
                  v-tooltip.right="data.hash">{{ data.hash.substring(0, 20) }}...</span></div>
              <font-awesome-icon icon="copy" :title="$t('general.copy')" @click="copy(data.hash)"
                class="ml-0.5 w-5 h-5 text-blue-link cursor-pointer "></font-awesome-icon>
            </div>
          </div>
        </template>
      </Column>
      <Column style="width: 200px" headerClass="invisible" v-if="!wideScreen">
        <template #body="{ data }">
          <div>
            <div class="uppercase text-xxs font-bold mb-1"> Status </div>
            <div class="flex items-center">
              <span class="text-txs">{{ data.status }}</span>
            </div>
          </div>
        </template>
      </Column>
      <Column field="hash" :header="$t('dashboard.txHash')" headerStyle="width:100px" v-if="wideScreen">
        <template #body="{ data }">
          <div class="flex items-center">
            <span @click="gotoHashExplorer(data.hash)" class="text-txs text-blue-primary cursor-pointer"
              v-tooltip.bottom="data.hash">{{ data.hash.substring(0, 20) }}...</span>
            <font-awesome-icon icon="copy" :title="$t('general.copy')" @click="copy(data.hash)"
              class="ml-0.5 w-5 h-5 text-blue-link cursor-pointer "></font-awesome-icon>
          </div>
        </template>
      </Column>
      <Column field="formattedDeadline" :header="$t('general.deadline')" headerStyle="width:110px" v-if="wideScreen">
        <template #body="{ data }">
          <span class="text-txs">{{ convertLocalTime(subtractHours(data.deadline.value, 2)) }}</span>
        </template>
      </Column>
      <Column field="status" :header="'Status'" headerStyle="width:110px" v-if="wideScreen">
        <template #body="{ data }">
          <span class="text-txs">{{ data.status }}</span>
        </template>
      </Column>
      <template #empty>
        {{ $t('general.noRecord') }}
      </template>
      <template #loading>
        {{ $t('dashboard.fetchingTx') }}
      </template>
    </DataTable>
  </div>
</template>
  
<script lang="ts" setup>
import { getCurrentInstance, ref, computed, onMounted, onUnmounted } from "vue";
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import { networkState } from "@/state/networkState";
import { Helper } from "@/util/typeHelper";
import { copyToClipboard } from '@/util/functions';
import { useToast } from 'primevue/usetoast';
import type { TransactionStatus } from "tsjs-xpx-chain-sdk";
import { useI18n } from 'vue-i18n';

defineProps({
  transactions: {
    type: Array<TransactionStatus>
  },
})

const toast = useToast();
const { t } = useI18n();
const wideScreen = ref(false);
const screenResizeHandler = () => {
  if (window.innerWidth < 1024) {
    wideScreen.value = false;
  } else {
    wideScreen.value = true;
  }
};
screenResizeHandler();

onUnmounted(() => {
  window.removeEventListener("resize", screenResizeHandler);
});

onMounted(() => {
  window.addEventListener("resize", screenResizeHandler);
});

const internalInstance = getCurrentInstance();
const emitter = internalInstance?.appContext.config.globalProperties.emitter;
const showTransactionModel = ref(false);

const explorerBaseURL = computed(() => networkState.currentNetworkProfile ? networkState.currentNetworkProfile.chainExplorer.url : "");

const hashExplorerURL = computed(() => networkState.currentNetworkProfile ? networkState.currentNetworkProfile.chainExplorer.hashRoute : "");

emitter.on("CLOSE_MODAL", (payload: boolean) => {
  showTransactionModel.value = payload;
});

const gotoHashExplorer = (hash: string) => {
  window.open(explorerBaseURL.value + hashExplorerURL.value + "/" + hash, "_blank");
}

const convertLocalTime = (dateTimeInJSON: string) => {
  return Helper.convertDisplayDateTimeFormat24(dateTimeInJSON);
};

function subtractHours(value: string, hours: number) {
  const date = new Date(value);
  date.setHours(date.getHours() - hours);
  value = date.toString()
  return value;
}

const copy = (data: string) => {
  let stringToCopy = data;
  let copySubject = t('dashboard.txHash')
  copyToClipboard(stringToCopy);

  toast.add({ severity: 'info', detail: copySubject + ' ' + t('general.copied'), group: 'br-custom', life: 3000 });
};
</script>
  
<style lang="scss" scoped>
@import "@/assets/scss/transactions-data-table.scss";
</style>