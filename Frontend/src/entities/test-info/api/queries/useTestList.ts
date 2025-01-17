import { useSuspenseQuery } from '@tanstack/react-query';
import { testApi } from '../services/testAPI';

export const useTestList = (
  search?: string,
  subject?: string,
  difficulty?: string
) => {
  return useSuspenseQuery({
    queryKey: ['tests', ...[search, subject, difficulty].filter(Boolean)],
    queryFn: async () => await testApi.getTests(),
    staleTime: 2000,
  });
};
