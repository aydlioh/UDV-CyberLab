import { createModalStore } from '@/shared/stores';

export const useDeleteModal = createModalStore<{
  projectId: string;
  ownerName: string;
  name: string;
}>();
