import { testApi } from '@/entities/test-info';
import { useMutation, useQueryClient } from '@tanstack/react-query';

// TODO_1 правильно настроить инвалидацию
export const useUpdateTestSettings = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['test-settings/update'],
    mutationFn: testApi.updateTestById,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['test/editing'] });
    },
  });
};
