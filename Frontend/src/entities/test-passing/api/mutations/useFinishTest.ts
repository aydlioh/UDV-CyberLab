import { useMutation } from '@tanstack/react-query';
import { testPassingApi } from '../services/testPassingAPI';

export const useTestFinish = () => {
  return useMutation({
    mutationKey: ['test/finish'],
    mutationFn: testPassingApi.finishTest,
  });
};
