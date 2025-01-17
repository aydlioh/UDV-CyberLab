import { currentTestService } from '@/shared/services';
import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { usePassingTest } from '../../api/queries/usePassingTest';
import { useSavedAnswers } from '../../api/queries/useSavedAnswers';
import { useAnswers } from '../store';

export const useCurrentTest = () => {
  const { testId = '' } = useParams();
  const attemptId = useMemo(() => currentTestService.get()?.userTestId, []);
  const { data: test } = usePassingTest(testId, attemptId || '');
  const { data: savedAnswers } = useSavedAnswers(testId);
  const answers = useAnswers(state => state.answers);

  return { testId, test, savedAnswers, answers };
};
