import { useSuspenseQuery } from '@tanstack/react-query';
import { testApi } from '../services/testAPI';

export const useTestList = (
  search?: string,
  subject?: string,
  difficulty?: string
) => {
  return useSuspenseQuery({
    queryKey: ['tests', ...[search, subject, difficulty].filter(Boolean)],
    queryFn: async () =>
      await testApi.getTests({
        search,
        subject,
        difficulty,
      }),
    staleTime: 2000,
    refetchInterval: 5000,
  });
};
