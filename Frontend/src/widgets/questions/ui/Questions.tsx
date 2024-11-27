import { parseAsInteger, useQueryState } from 'nuqs';
import { useEffect } from 'react';
import { QuestionsPaginator } from './QuestionsPaginator';
import { QuestionCard } from '@/entities/question';
import { QuestionsSwitcher } from './QuestionsSwitcher';
import { IQuestion } from '@/shared/types';

type QuestionsProps = {
  id: string;
  questions: IQuestion[];
  totalQuestions: number;
};

export const Questions = ({ questions, totalQuestions }: QuestionsProps) => {
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
    <div className="flex flex-col gap-[12px] w-full pb-10">
      <QuestionsPaginator
        ids={questions.map(q => q.id)}
        current={currentQuestion}
        total={totalQuestions}
        setCurrent={setCurrentQuestion}
      />
      <QuestionCard {...questions[currentQuestion - 1]} />
      <QuestionsSwitcher
        current={currentQuestion}
        total={totalQuestions}
        setCurrent={setCurrentQuestion}
      />
    </div>
  );
};
