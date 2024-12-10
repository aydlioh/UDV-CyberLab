import { parseAsInteger, useQueryState } from 'nuqs';
import { useEffect } from 'react';
import { QuestionPreviewCard } from '@/entities/test-question';
import { IQuestion } from '@/shared/types';
import { QuestionsPreviewPaginator } from './QuestionPreviewPaginator';
import { QuestionsPreviewSwitcher } from './QuestionPreviewSwitcher';

type QuestionsPreviewProps = {
  id: string;
  isPreview?: boolean;
  questions: IQuestion[];
  totalQuestions: number;
  endContent?: React.ReactNode;
  handleFinish?: () => void;
  handleStart?: () => void;
};

export const QuestionsPreview = ({
  id,
  isPreview = false,
  questions,
  totalQuestions,
  endContent,
  handleFinish,
  handleStart,
}: QuestionsPreviewProps) => {
  const [currentQuestion, setCurrentQuestion] = useQueryState(
    'question',
    parseAsInteger.withDefault(1).withOptions({ history: 'push' })
  );

  useEffect(() => {
    if (currentQuestion < 1) {
      setCurrentQuestion(1);
    } else if (currentQuestion > totalQuestions) {
      setCurrentQuestion(totalQuestions);
    }
  }, [currentQuestion, totalQuestions, setCurrentQuestion]);

  if (!questions.length) return null;

  return (
    <div className="flex flex-col w-full pb-10">
      <div className="w-full max-w-[712px] mb-[8px]">
        <QuestionsPreviewPaginator
          ids={questions.map(q => q.id)}
          current={currentQuestion}
          setCurrent={setCurrentQuestion}
        />
      </div>
      <div className="flex flex-row gap-1 items-start mb-[12px]">
        <div className="w-full max-w-[712px] ">
          <QuestionPreviewCard {...questions[currentQuestion - 1]} />
        </div>
        {endContent}
      </div>
      <div className="w-full max-w-[712px]">
        <QuestionsPreviewSwitcher
          id={id}
          current={currentQuestion}
          total={totalQuestions}
          setCurrent={setCurrentQuestion}
          handleFinish={handleFinish}
          handleStart={handleStart}
        />
      </div>
    </div>
  );
};
