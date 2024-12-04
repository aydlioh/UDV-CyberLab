import { create } from 'zustand';

interface TestDetailsModalStore {
  isOpen: boolean;
  testId: string | null;
  open: (id: string) => void;
  close: () => void;
  setOpen: (isOpen: boolean) => void;
}

export const useTestDetailsModalStore = create<TestDetailsModalStore>(set => ({
  isOpen: false,
  testId: null,
  open: id => set({ isOpen: true, testId: id }),
  close: () => set({ isOpen: false, testId: null }),
  setOpen: isOpen => set({ isOpen }),
}));
