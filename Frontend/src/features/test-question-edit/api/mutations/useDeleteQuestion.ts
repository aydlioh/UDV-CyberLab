import { useMutation, useQueryClient } from '@tanstack/react-query';
import { testEditingApi } from '@/entities/test-editing';

export const useDeleteQuestion = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['question/delete'],
    mutationFn: testEditingApi.deleteQuestionById,
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ['test/editing'] });
    },
  });
};
