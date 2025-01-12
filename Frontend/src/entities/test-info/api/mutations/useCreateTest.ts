import { useMutation, useQueryClient } from '@tanstack/react-query';
import { testApi } from '../services/testAPI';
import { CreateTestDTO } from '../../model/dto';

const createTestMock: CreateTestDTO = {
  name: 'Новый тест',
  test: '',
  description: '',
  theme: '',
  difficulty: '',
  ownerId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
  attemptsCount: 0,
  startTestTime: '2025-01-11T08:53:45.619Z',
  endTestTime: '2025-02-11T08:53:45.619Z',
  passTestTime: '2025-02-11T08:53:45.619Z',
  maxPoints: 0,
  questions: [],
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
