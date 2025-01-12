import { useSuspenseQuery } from '@tanstack/react-query';
import { testPassingApi } from '../services/testPassingAPI';

export const useTestPassingAnswers = (id: string) => {
  return useSuspenseQuery({
    queryKey: ['test', id],
    queryFn: async () => await testPassingApi.getSavedAnswers(id),
  });
};
