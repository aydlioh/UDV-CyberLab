import { AuthStatus } from '@/entities/user';
import { create } from 'zustand';

type StatusSwitcherStore = {
  userStatus: AuthStatus;
  setUserStatus: (userStatus: AuthStatus) => void;
};

export const useStatusSwitcher = create<StatusSwitcherStore>(set => ({
  userStatus: AuthStatus.STUDENT,
  setUserStatus: userStatus => set({ userStatus }),
}));
