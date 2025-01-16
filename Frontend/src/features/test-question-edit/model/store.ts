import { QuestionDTO } from '@/shared/api/dto';
import { create } from 'zustand';

interface TestEditingStore {
  questions: QuestionDTO[];
  updateQuestion: (question: QuestionDTO) => void;
  deleteQuestion: (id: string) => void;
  setQuestions: (questions: QuestionDTO[]) => void;
  reset: () => void;
}

export const useEditing = create<TestEditingStore>(set => ({
  questions: [],
  updateQuestion: question =>
    set(state => {
      const index = state.questions.findIndex(item => item.id === question.id);
      if (index === -1) return { questions: [...state.questions, question] };
      return {
        questions: state.questions.map((item, i) =>
          i === index ? { ...item, ...question } : item
        ),
      };
    }),
  deleteQuestion: id =>
    set(state => ({
      questions: state.questions.filter(item => item.id !== id),
    })),
  setQuestions: questions => set({ questions }),
  reset: () => set({ questions: [] }),
}));
