import { UserInfo } from './types';
import { create } from 'zustand';

type AuthState = {
  isAuthorized: boolean;
  user: UserInfo | null;
  login: () => void;
  logout: () => void;
  setUser: (user: UserInfo) => void;
};

export const useAuth = create<AuthState>(set => ({
  isAuthorized: false,
  user: null,
  setUser: user => set({ user }),
  login: () => set({ isAuthorized: true }),
  logout: () => set({ isAuthorized: false, user: null }),
}));
