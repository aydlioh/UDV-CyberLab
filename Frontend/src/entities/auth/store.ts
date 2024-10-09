import { ADMIN, AUTHORIZED, UNAUTHORIZED, USER } from './constants';
import { create } from 'zustand';

type AuthStatus = typeof AUTHORIZED | typeof UNAUTHORIZED;
type AuthRole = typeof USER | typeof ADMIN | null;

type AuthState = {
  status: AuthStatus;
  role: AuthRole;
  login: () => void;
  logout: () => void;
  isAuthorized: () => boolean;
};

export const useAuth = create<AuthState>((set, get) => ({
  status: UNAUTHORIZED,
  role: USER,
  login: () => set({ status: AUTHORIZED, role: USER }),
  logout: () => set({ status: UNAUTHORIZED, role: null }),
  isAuthorized: () => get().status === AUTHORIZED,
}));

