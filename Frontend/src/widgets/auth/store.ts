import { LOGIN, REGISTRATION } from './constants';
import { create } from 'zustand';

type FormAuthStatus = typeof LOGIN | typeof REGISTRATION;

type FormAuthState = {
  status: FormAuthStatus;
  setStatus: (status: FormAuthStatus) => void;
  switchToLogin: () => void;
  switchToRegistration: () => void;
};

export const useFormAuth = create<FormAuthState>(set => ({
  status: LOGIN,
  setStatus: (status: FormAuthStatus) => set({ status }),
  switchToLogin: () => set({ status: LOGIN }),
  switchToRegistration: () => set({ status: REGISTRATION }),
}));
