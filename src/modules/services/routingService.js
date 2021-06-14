import { AddressbookRoutes } from '@/modules/services/submodule/addressbook/routingAddressbook';
import { NamespaceRoutes } from '@/modules/services/submodule/namespaces/routingNamespace';
import { MainnetSwapRoutes } from '@/modules/services/submodule/mainnetSwap/routingMainnetSwap';
import { AttestationRoutes } from '@/modules/services/submodule/attestation/routingAttestation';
import { NotificationsRoutes } from '@/modules/services/submodule/notifications/routingNotifications';
import { VotingRoutes } from '@/modules/services/submodule/voting/routingVoting';
import { StorageRoutes } from '@/modules/services/submodule/storage/routingStorage';
import { SiriusGiftRoutes } from '@/modules/services/submodule/siriusGift/routingSiriusGift';
import { ExplorerRoutes } from '@/modules/services/submodule/explorer/routingExplorer';
import { NodesRoutes } from '@/modules/services/submodule/nodes/routingNodes';
import { MosaicRoutes } from '@/modules/services/submodule/mosaic/routingMosaic';

export const ServiceRoutes = [
  {
    path: '/services',
    name: 'ViewServices',
    component: () => import('@/modules/services/views/ViewServices.vue'),
    meta: {
      title: "Services",
    }
  },
  ...AddressbookRoutes,
  ...NamespaceRoutes,
  ...MainnetSwapRoutes,
  ...AttestationRoutes,
  ...NotificationsRoutes,
  ...VotingRoutes,
  ...StorageRoutes,
  ...SiriusGiftRoutes,
  ...ExplorerRoutes,
  ...NodesRoutes,
  ...MosaicRoutes,
];