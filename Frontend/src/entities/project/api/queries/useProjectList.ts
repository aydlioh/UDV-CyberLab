import { useSuspenseQuery } from '@tanstack/react-query';
import { projectApi } from '../services/testAPI';

export const useProjectList = (sortOrder: number = 0) => {
  return useSuspenseQuery({
    queryKey: ['projects', { sortOrder }],
    queryFn: async () => await projectApi.getAll(sortOrder),
    staleTime: 2000,
    refetchInterval: 5000,
  });
};
