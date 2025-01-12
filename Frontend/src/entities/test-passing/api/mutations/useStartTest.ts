import { useMutation } from '@tanstack/react-query';
import { testPassingApi } from '../services/testPassingAPI';

export const useTestStart = () => {
  return useMutation({
    mutationKey: ['test/start'],
    mutationFn: testPassingApi.startTest,
  });
};
