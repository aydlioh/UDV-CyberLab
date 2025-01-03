import { AnswersTable } from '@/widgets/test-answers-table';
import { ContentSwitcher } from '@/features/content-switcher';
import { useAnswers } from '@/entities/test-question';
import { testWithQuestionsMOCK } from '@/entities/test/MOCK';
import { Card } from '@/shared/ui';

import { useNavigate, useParams } from 'react-router-dom';
import { TestTitle } from '@/entities/test';

const TestOverviewPage = () => {
  const { testId } = useParams();
  const navigate = useNavigate();
  const test = testWithQuestionsMOCK;

  const clearAnswers = useAnswers(state => state.clearAnswers);

  const handlePrevClick = () => navigate(-1);
  const handleNextClick = () => {
    clearAnswers();
    navigate(`/tests/${testId}/results`, { replace: true });
  };

  return (
    <div className="max-w-[712px] w-full flex flex-col gap-[12px] min-h-svh">
      <Card className="sm:py-[40px] py-[20px] sm:px-[64px] px-2">
        <TestTitle className="px-[20px] pb-3" title={test.title} />
        <AnswersTable />
      </Card>
      <div>
        <ContentSwitcher
          handlePrev={handlePrevClick}
          handleNext={handleNextClick}
          prevLabel="Вернуться"
          nextLabel="Завершить"
        />
      </div>
    </div>
  );
};

export default TestOverviewPage;
