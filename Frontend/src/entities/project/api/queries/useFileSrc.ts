import { useSuspenseQuery } from '@tanstack/react-query';
import { projectApi } from '../services/testAPI';

export const useFileSrc = (path: string) => {
  return useSuspenseQuery({
    queryKey: ['files', path],
    queryFn: async () => await projectApi.getFile(path),
    staleTime: 60 * 60 * 1000,
  });
};
