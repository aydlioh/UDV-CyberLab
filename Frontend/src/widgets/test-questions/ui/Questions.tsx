import { parseAsInteger, useQueryState } from 'nuqs';
import { useEffect } from 'react';
import { QuestionsPaginator } from './QuestionsPaginator';
import { QuestionCard, useAnswers } from '@/entities/test-question';
import { IQuestion } from '@/shared/types';
import { QuestionsSwitcher } from './QuestionsSwitcher';

type QuestionsProps = {
  id: string;
  isPreview?: boolean;
  questions: IQuestion[];
  totalQuestions: number;
  endContent?: React.ReactNode;
};

export const Questions = ({
  id,
  isPreview = false,
  questions,
  totalQuestions,
  endContent,
}: QuestionsProps) => {
  useAnswers(state => state.setCount)(totalQuestions);
  const clearAnswers = useAnswers(state => state.clearAnswers);

  const [currentQuestion, setCurrentQuestion] = useQueryState(
    'question',
    parseAsInteger.withDefault(1).withOptions({ history: 'push' })
  );

  useEffect(() => {
    return () => {
      if (isPreview) {
        clearAnswers();
      }
    };
  }, [clearAnswers, isPreview]);

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
        <QuestionsPaginator
          ids={questions.map(q => q.id)}
          current={currentQuestion}
          setCurrent={setCurrentQuestion}
        />
      </div>
      <div className="flex flex-row gap-1 items-start mb-[12px]">
        <div className="w-full max-w-[712px] ">
          <QuestionCard {...questions[currentQuestion - 1]} />
        </div>
        {endContent}
      </div>
      <div className="w-full max-w-[712px]">
        <QuestionsSwitcher
          isPreview={isPreview}
          id={id}
          current={currentQuestion}
          total={totalQuestions}
          setCurrent={setCurrentQuestion}
        />
      </div>
    </div>
  );
};
