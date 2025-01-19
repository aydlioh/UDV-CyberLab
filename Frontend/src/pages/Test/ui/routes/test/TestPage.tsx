import { Questions } from '@/widgets/test-questions';
import { TestStatus, useCurrentTest } from '@/entities/test-passing';
import { Navigate } from 'react-router-dom';
import { TestExit } from '@/features/test-exit';
import { TestTitle } from '@/entities/test-info';

const TestPage = () => {
  const { testId, test, savedAnswers, answers } = useCurrentTest();

  if (!test) {
    return <Navigate to="/tests" />;
  }

  return (
    <section className="w-full">
      <TestTitle title={test.title} />
      <Questions
        id={testId}
        attemptTestId={test.userTestId}
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
