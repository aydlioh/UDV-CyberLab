import { useMutation, useQueryClient } from '@tanstack/react-query';
import { testEditingApi } from '@/entities/test-editing';

export const useEditComplianceQuestion = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['question/compliance'],
    mutationFn: testEditingApi.createComplianceQuestion,
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ['test/editing'] });
    },
  });
};
