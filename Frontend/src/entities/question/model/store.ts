import { create } from 'zustand';
import { AnswersInputType } from './types';

type AnswersState = {
  answers: Record<string, AnswersInputType | null>;
  setAnswer: (id: string | number, answer: AnswersInputType | null) => void;
  clearAnswers: () => void;
};

export const useAnswers = create<AnswersState>((set, get) => ({
  answers: {},
  setAnswer: (id, answer) =>
    set({ answers: { ...get().answers, [id]: answer } }),
  clearAnswers: () => set({ answers: {} }),
}));
