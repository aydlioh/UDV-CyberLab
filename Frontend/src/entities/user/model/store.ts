import { tokenService } from '@/shared/services';
import { UserRole, UserInfo } from './types';
import { create } from 'zustand';
import { IProfile } from '@/shared/api/dto';

type AuthState = {
  isAuthorized: boolean;
  user: UserInfo | null;
  isAdmin: () => boolean;
  isTeacher: () => boolean;
  login: () => void;
  logout: () => void;
  setUser: (user: IProfile) => void;
};

export const useAuth = create<AuthState>((set, get) => ({
  isAuthorized: false,
  user: null,
  setUser: (user: IProfile) => set({ user: { ...user, role: 2 } }),
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
