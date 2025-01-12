import { useMutation } from '@tanstack/react-query';
import { testPassingApi } from '../services/testPassingAPI';

export const useSaveAnswer = () => {
  return useMutation({
    mutationFn: testPassingApi.saveAnswer,
  });
};
