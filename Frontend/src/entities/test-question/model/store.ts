import { create } from 'zustand';
import { AnswersInputType } from './types';

type AnswersState = {
  count: number;
  setCount: (count: number) => void;
  answers: Record<string, AnswersInputType | null>;
  setAnswer: (id: string, answer: AnswersInputType | null) => void;
  clearAnswers: () => void;
  getAnswersArray: () => boolean[];
};

export const useAnswers = create<AnswersState>((set, get) => ({
  count: 0,
  answers: {},
  setCount: count => set({ count }),
  setAnswer: (id, answer) =>
    set({ answers: { ...get().answers, [id]: answer } }),
  clearAnswers: () => set({ answers: {} }),
  getAnswersArray: () => {
    const answers = get().answers;
    return new Array(get().count).fill(null).map((_, i) => {
      const index = String(i + 1);
      const currentAnswer = answers[index] || null;

      if (!currentAnswer) return false;
      if (
        typeof currentAnswer === 'object' &&
        Object.keys(currentAnswer).length === 0 &&
        !(currentAnswer instanceof File)
      )
        return false;

      return true;
    });
  },
}));
