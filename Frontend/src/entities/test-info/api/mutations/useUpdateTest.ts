import { useMutation, useQueryClient } from '@tanstack/react-query';
import { testApi } from '../services/testAPI';

export const useUpdateTest = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['test/update'],
    mutationFn: testApi.updateTestById,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tests'] });
      queryClient.invalidateQueries({ queryKey: ['test/editing'] });
    },
  });
};
