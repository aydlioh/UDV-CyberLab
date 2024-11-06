import { AuthRole, AuthStatus } from './constants';
import { create } from 'zustand';

type AuthState = {
  status: AuthStatus;
  role: AuthRole | null;
  login: () => void;
  logout: () => void;
  isAuthorized: () => boolean;
};

export const useAuth = create<AuthState>((set, get) => ({
  status: AuthStatus.UNAUTHORIZED,
  role: null,
  login: () => set({ status: AuthStatus.AUTHORIZED, role: AuthRole.USER }),
  logout: () => set({ status: AuthStatus.UNAUTHORIZED, role: null }),
  isAuthorized: () => get().status === AuthStatus.AUTHORIZED,
}));
