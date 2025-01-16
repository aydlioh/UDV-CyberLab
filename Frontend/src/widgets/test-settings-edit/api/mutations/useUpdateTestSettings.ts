import { testApi } from '@/entities/test-info';
import { useMutation } from '@tanstack/react-query';

// TODO_1 правильно настроить инвалидацию
export const useUpdateTestSettings = () => {
  return useMutation({
    mutationKey: ['test-settings/update'],
    mutationFn: testApi.updateTestById,
  });
};
