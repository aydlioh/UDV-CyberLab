import { Questions } from '@/widgets/test-questions';
import { TestStatus, useCurrentTest } from '@/entities/test-passing';
import { TestExit } from '@/features/test-exit';
import { TestTitle } from '@/entities/test-info';
import { Spinner } from '@/shared/ui';

const TestPage = () => {
  const { testId, test, isFetching, savedAnswers, answers, attemptId } =
    useCurrentTest();

  if (isFetching) {
    return (
      <div className="flex justify-center items-center w-full">
        <Spinner size="page" color="primary" />
      </div>
    );
  }

  if (!test) {
    return null;
  }

  return (
    <section className="w-full">
      <TestTitle title={test.title} />
      <Questions
        id={testId}
        attemptTestId={attemptId}
        questions={test.questions}
        savedAnswers={savedAnswers}
        answers={answers}
        totalQuestions={test.totalQuestions}
        endContent={
          <div className="flex sm:flex-col sm:justify-start justify-between flex-row sm:gap-1 gap-2 mt-2">
            <TestStatus
              testId={testId}
              savedAnswers={answers}
              leftTestTime={test.leftTestTime}
              totalQuestions={test.totalQuestions}
            />
            <TestExit id={testId} />
          </div>
        }
      />
    </section>
  );
};

export default TestPage;
