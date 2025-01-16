import { useSuspenseQuery } from '@tanstack/react-query';
import { testPassingApi } from '../services/testPassingAPI';

export const useSavedAnswers = (id: string) => {
  return useSuspenseQuery({
    queryKey: ['test/savedAnswers', id],
    queryFn: async () => await testPassingApi.getSavedAnswers(id),
  });
};
