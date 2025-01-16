import { useMutation, useQueryClient } from '@tanstack/react-query';
import { testEditingApi } from '@/entities/test-editing';

export const useEditFileQuestion = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['question/file'],
    mutationFn: testEditingApi.createFileQuestion,
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ['test/editing'] });
    },
  });
};
