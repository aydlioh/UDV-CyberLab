import { tokenService } from '@/shared/services';
import { UserRole, UserInfo } from './types';
import { create } from 'zustand';

type AuthState = {
  isAuthorized: boolean;
  user: UserInfo | null;
  isAdmin: () => boolean;
  isTeacher: () => boolean;
  login: () => void;
  logout: () => void;
  setUser: (user: UserInfo) => void;
};

export const useAuth = create<AuthState>((set, get) => ({
  isAuthorized: false,
  user: null,
  setUser: user => set({ user }),
  login: () => set({ isAuthorized: true }),
  logout: () => {
    tokenService.destroy();
    set({ isAuthorized: false, user: null });
  },
  isAdmin: () => get().user?.role === UserRole.ADMIN,
  isTeacher: () => get().user?.role === UserRole.TEACHER,
}));

export const useUser = () => useAuth(state => state.user);

export const useUserStatus = () => {
  const role = useAuth(state => state.user?.role);
  return {
    isTeacher: role === UserRole.TEACHER || role === UserRole.ADMIN,
    isAdmin: role === UserRole.ADMIN,
  };
};

// Убрать
useAuth.getState().setUser({
  email: 'pavel_biryuchev@inbox.ru',
  login: 'aydlioh',
  role: UserRole.ADMIN,
});

const now = new Date();
const nowUTC = new Date(
  Date.UTC(
    now.getUTCFullYear(),
    now.getUTCMonth(),
    now.getUTCDate(),
    now.getUTCHours() + 5,
    now.getUTCMinutes(),
    now.getUTCSeconds()
  )
);
localStorage.setItem(
  'token',
  JSON.stringify({
    token: 'qwerty',
    expiration: nowUTC.toISOString(),
  })
);
