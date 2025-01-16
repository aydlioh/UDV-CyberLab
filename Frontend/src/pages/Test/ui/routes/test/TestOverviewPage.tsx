import { AnswersTable } from '@/widgets/test-answers-table';
import { ContentSwitcher } from '@/features/content-switcher';
import { Card } from '@/shared/ui';

import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { TestTitle } from '@/entities/test-info';
import { usePassingTest, useTestFinish } from '@/entities/test-passing';

const TestOverviewPage = () => {
  const navigate = useNavigate();
  const { mutateAsync } = useTestFinish();
  const { testId: id = '' } = useParams();
  const { data } = usePassingTest(id);

  if (!data) {
    return <Navigate to="/tests" />;
  }

  const handlePrevClick = () => navigate(-1);

  const handleNextClick = () => {
    mutateAsync(id).then(() => {
      navigate(`/tests/${id}/results`, { replace: true });
    });
  };

  return (
    <div className="max-w-[712px] w-full flex flex-col gap-[12px] min-h-svh">
      <Card className="sm:py-[40px] py-[20px] sm:px-[64px] px-2">
        <TestTitle className="px-[20px] pb-3" title={data.title} />
        <AnswersTable answers={data.savedAnswers} />
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
