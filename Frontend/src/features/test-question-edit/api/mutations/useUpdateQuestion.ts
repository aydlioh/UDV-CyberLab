import { useMutation, useQueryClient } from '@tanstack/react-query';
import { testEditingApi } from '@/entities/test-editing';

export const useUpdateQuestion = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['question/update'],
    mutationFn: testEditingApi.updateQuestionById,
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ['test/editing'] });
    },
  });
};
