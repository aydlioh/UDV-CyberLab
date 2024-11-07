import { AuthRole } from './constants';
import { create } from 'zustand';

type AuthState = {
  isAuthorized: boolean;
  role: AuthRole | null;
  login: () => void;
  logout: () => void;
};

export const useAuth = create<AuthState>(set => ({
  isAuthorized: false,
  role: null,
  login: () => set({ isAuthorized: true, role: AuthRole.USER }),
  logout: () => set({ isAuthorized: false, role: null }),
}));
