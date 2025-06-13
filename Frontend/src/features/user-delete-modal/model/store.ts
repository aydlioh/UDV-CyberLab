import { createModalStore } from '@/shared/stores';
import { UserInfo } from '@/shared/types';

export const useDeleteUserModal = createModalStore<UserInfo>();
