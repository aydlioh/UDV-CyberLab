import { useMutation, useQueryClient } from '@tanstack/react-query';
import { testEditingApi } from '@/entities/test-editing';

export const useEditTextQuestion = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['question/text'],
    mutationFn: testEditingApi.createTextQuestion,
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ['test/editing'] });
    },
  });
};
