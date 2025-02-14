import { RouteRecordRaw } from 'vue-router';
export const TransactionRoutes: RouteRecordRaw[] = [
  

  {
    path: '/sign/:txnHash',
    name: 'ViewTransactionSign',
    props: true,
    component: () => import('@/modules/transaction/views/ViewTransactionSign.vue'),
    meta: {
      title: "Sign Transaction",
    }
  }
];