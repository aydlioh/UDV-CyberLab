import { useMutation, useQueryClient } from '@tanstack/react-query';
import { testApi } from '../services/testAPI';
import { CreateTestDTO } from '../../model/dto';

const createTestMock: CreateTestDTO = {
  name: 'Новый тест',
  description: '',
  theme: '',
  difficulty: '',
  attemptsCount: 0,
  startTestTime: '2025-01-11T08:53:45.619Z',
  endTestTime: '2025-02-11T08:53:45.619Z',
  passTestTime: '10:00:00',
  maxPoints: 0,
};

export const useCreateTest = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['test/create'],
    mutationFn: async () => await testApi.createTest(createTestMock),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tests'] });
    },
  });
};
