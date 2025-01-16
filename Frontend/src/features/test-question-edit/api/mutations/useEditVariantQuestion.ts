import { useMutation, useQueryClient } from '@tanstack/react-query';
import { testEditingApi } from '@/entities/test-editing';

export const useEditVariantQuestion = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['question/variant'],
    mutationFn: testEditingApi.createVariantQuestion,
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ['test/editing'] });
    },
  });
};
