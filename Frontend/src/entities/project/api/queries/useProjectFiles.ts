import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import { projectApi } from '../services/testAPI';

export const useSuspenseProjectFiles = (id: string) => {
  return useSuspenseQuery({
    queryKey: ['files', id],
    queryFn: async () => await projectApi.getProjectFiles(id),
    staleTime: 60 * 60 * 1000,
  });
};


export const useProjectFiles = (id: string) => {
  return useQuery({
    queryKey: ['files', id],
    queryFn: async () => await projectApi.getProjectFiles(id),
    staleTime: 60 * 60 * 1000,
  });
};
