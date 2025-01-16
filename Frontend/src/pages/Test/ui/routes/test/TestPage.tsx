import { Questions } from '@/widgets/test-questions';
import { TestStatus, usePassingTest } from '@/entities/test-passing';
import { Navigate, useParams } from 'react-router-dom';
import { TestExit } from '@/features/test-exit';
import { TestTitle } from '@/entities/test-info';

const TestPage = () => {
  const { testId: id = '' } = useParams();
  const { data } = usePassingTest(id);

  if (!data) {
    return <Navigate to="/tests" />;
  }

  return (
    <section className="w-full">
      <TestTitle title={data.title} />
      <Questions
        id={id}
        attemptTestId={data.userTestId}
        questions={data.questions}
        savedAnswers={data.savedAnswers}
        totalQuestions={data.totalQuestions}
        endContent={
          <div className="flex sm:flex-col sm:justify-start justify-between flex-row sm:gap-1 gap-2 mt-2">
            <TestStatus
              testId={id}
              savedAnswers={data.savedAnswers}
              leftTestTime={data.leftTestTime}
              totalQuestions={data.totalQuestions}
            />
            <TestExit id={id} />
          </div>
        }
      />
    </section>
  );
};

export default TestPage;
