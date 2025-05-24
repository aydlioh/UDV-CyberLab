import { useSuspenseQuery } from '@tanstack/react-query';
import { projectApi } from '../services/testAPI';

export const useProjectList = () => {
  return useSuspenseQuery({
    queryKey: ['projects'],
    queryFn: projectApi.getAll,
    staleTime: 2000,
    refetchInterval: 5000,
  });
};
