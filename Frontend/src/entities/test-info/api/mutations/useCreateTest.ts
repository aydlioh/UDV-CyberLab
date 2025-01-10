import { useMutation, useQueryClient } from '@tanstack/react-query';
import { testApi } from '../services/testAPI';

export const useCreateTest = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['test/create'],
    mutationFn: testApi.createTest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tests'] });
    },
  });
};
