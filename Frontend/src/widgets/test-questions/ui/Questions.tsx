import { parseAsInteger, useQueryState } from 'nuqs';
import { useEffect } from 'react';
import { QuestionsPaginator } from './QuestionsPaginator';
import { QuestionCard, useAnswers } from '@/entities/test-question';
import { IQuestion } from '@/shared/types';
import { QuestionsSwitcher } from './QuestionsSwitcher';
import { useMediaQuery } from '@/shared/hooks';

type QuestionsProps = {
  id: string;
  questions: IQuestion[];
  totalQuestions: number;
  endContent?: React.ReactNode;
};

export const Questions = ({
  id,
  questions,
  totalQuestions,
  endContent,
}: QuestionsProps) => {
  const isMobile = useMediaQuery({ query: '(max-width: 640px)' });
  useAnswers(state => state.setCount)(totalQuestions);

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
      <div className="w-full max-w-[712px] mb-2">
        <QuestionsPaginator
          ids={questions.map(q => q.id)}
          current={currentQuestion}
          setCurrent={setCurrentQuestion}
        />
      </div>
      {isMobile && <div className='mb-2'>{endContent}</div>}
      <div className="flex flex-row gap-1 items-start mb-[12px]">
        <div className="w-full max-w-[712px] ">
          <QuestionCard {...questions[currentQuestion - 1]} />
        </div>
        {!isMobile && endContent}
      </div>
      <div className="w-full max-w-[712px]">
        <QuestionsSwitcher
          id={id}
          current={currentQuestion}
          total={totalQuestions}
          setCurrent={setCurrentQuestion}
        />
      </div>
    </div>
  );
};
