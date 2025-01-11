import { useSuspenseQuery } from '@tanstack/react-query';
import { testApi } from '../services/testAPI';

export const useTest = (id: string) => {
  return useSuspenseQuery({
    queryKey: ['test', id],
    queryFn: async () => await testApi.getTestById(id),
  });
};
