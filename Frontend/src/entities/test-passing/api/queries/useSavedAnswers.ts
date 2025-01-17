import { useSuspenseQuery } from '@tanstack/react-query';
import { testPassingApi } from '../services/testPassingAPI';
import { useEffect } from 'react';
import { useAnswers } from '../../model/store';

export const useSavedAnswers = (id: string) => {
  const { data, isSuccess } = useSuspenseQuery({
    queryKey: ['test/savedAnswers', id],
    queryFn: async () => await testPassingApi.getSavedAnswers(id),
  });

  useEffect(() => {
    useAnswers.getState().saveAnswers(data);
  }, [isSuccess, data]);

  return { data };
};
