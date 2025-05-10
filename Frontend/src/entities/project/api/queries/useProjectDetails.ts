import { useSuspenseQuery } from '@tanstack/react-query';
import { projectApi } from '../services/testAPI';

export const useProjectDetails = (id: string) => {
  return useSuspenseQuery({
    queryKey: ['projects', id],
    queryFn: async () => await projectApi.getDetailsById(id),
    staleTime: 2000,
  });
};
