import { useSuspenseQuery } from '@tanstack/react-query';
import { projectApi } from '../services/testAPI';

export const useImageSrc = (path: string) => {
  return useSuspenseQuery({
    queryKey: ['projects', path],
    queryFn: async () => await projectApi.getImage(path),
    staleTime: 60 * 60 * 1000,
  });
};
