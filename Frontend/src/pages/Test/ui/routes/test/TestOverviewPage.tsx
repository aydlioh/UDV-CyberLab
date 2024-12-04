import { AnswersTable } from '@/widgets/test-answers-table';
import { TestSwitcher } from '@/features/test-switcher';
import { useAnswers } from '@/entities/test-question';
import { testWithQuestionsMOCK } from '@/entities/test/MOCK';
import { Card } from '@/shared/ui';

import { useNavigate } from 'react-router-dom';

const TestOverviewPage = () => {
  const navigate = useNavigate();
  const test = testWithQuestionsMOCK;

  const clearAnswers = useAnswers(state => state.clearAnswers);

  const handlePrevClick = () => navigate(-1);
  const handleNextClick = () => {
    clearAnswers();
    navigate('/tests/my/passed', { replace: true });
  };

  return (
    <div className=" max-w-[712px] w-full flex flex-col gap-[12px]">
      <Card className="py-[40px] px-[64px]">
        <h2 className="text-[24px] pb-3">{test.title}</h2>
        <AnswersTable />
      </Card>
      <div>
        <TestSwitcher
          handlePrev={handlePrevClick}
          handleNext={handleNextClick}
          prevLabel='Вернуться'
          nextLabel='Завершить'
        />
      </div>
    </div>
  );
};

export default TestOverviewPage;

