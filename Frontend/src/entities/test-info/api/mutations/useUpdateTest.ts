import { useMutation, useQueryClient } from '@tanstack/react-query';
import { testApi } from '../services/testAPI';

// TODO_1 Использовать для настроек и для заголовка, предмета, сложности. 
// TODO_1 Не забыть инвалидировать тест по АЙДИ (test, test/details).
export const useUpdateTest = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['test/update'],
    mutationFn: testApi.updateTest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tests'] });
    },
  });
};
