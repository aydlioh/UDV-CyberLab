import { create } from 'zustand';
import { SavedAnswer, SavedAnswerWithKey } from './dto';

type AnswersState = {
  count: number;
  answers: SavedAnswerWithKey[];
  saveAnswers: (answers: SavedAnswerWithKey[], totalQuestions: number) => void;
  saveAnswer: (id: string, answer: SavedAnswer) => void;
  reset: () => void;
  getAnswersBooleanArray: () => boolean[];
};

export const useAnswers = create<AnswersState>((set, get) => ({
  count: 0,
  answers: [],
  saveAnswers: (answers: SavedAnswerWithKey[], totalQuestions: number) =>
    set({ answers, count: totalQuestions }),
  saveAnswer: (id: string, answer: SavedAnswer) => {
    set({
      answers: get().answers.map(a =>
        a.id === id ? { ...a, data: { ...a.data, ...answer } } : a
      ),
    });
  },
  reset: () => set({ answers: [] }),
  getAnswersBooleanArray: () =>
    get().answers.map(answer => Boolean(answer.data)),
}));
