import { testApi } from '@/entities/test-info';
import { useMutation, useQueryClient } from '@tanstack/react-query';

// TODO_1 правильно настроить валидацию
export const useUpdateTestTitle = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['test-title/update'],
    mutationFn: testApi.updateTestTitleById,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tests'] });
    },
  });
};
