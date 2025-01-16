import { useSuspenseQuery } from '@tanstack/react-query';
import { testPassingApi } from '../services/testPassingAPI';
import { useEffect } from 'react';
import { useAnswers } from '../../model/store';

export const usePassingTest = (id: string) => {
  const { data, isSuccess } = useSuspenseQuery({
    queryKey: ['test/passing', id],
    queryFn: async () => await testPassingApi.getTestById(id),
  });

  useEffect(() => {
    useAnswers
      .getState()
      .saveAnswers(data?.savedAnswers || [], data?.totalQuestions || 0);
  }, [isSuccess, data]);

  return { data };
};
