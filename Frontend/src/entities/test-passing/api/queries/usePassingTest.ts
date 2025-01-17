import { useSuspenseQuery } from '@tanstack/react-query';
import { testPassingApi } from '../services/testPassingAPI';
import { useEffect } from 'react';
import { useAnswers } from '../../model/store';

export const usePassingTest = (id: string, attemptId: string) => {
  const { data, isSuccess } = useSuspenseQuery({
    queryKey: ['test/passing', id],
    queryFn: async () =>
      await testPassingApi.getPassingTestById({ id, attemptId }),
  });

  useEffect(() => {
    useAnswers
      .getState()
      .setQuestions(data?.questions || [], data?.totalQuestions || 0);
  }, [isSuccess, data]);

  return { data };
};
