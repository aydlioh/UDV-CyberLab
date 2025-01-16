import { Card } from '@/shared/ui';
import { QuestionTitle } from './QuestionTitle';
import { QuestionAnswers } from './QuestionAnswers';
import { QuestionDTO } from '@/shared/api/dto';
import { parseData, SavedAnswer, useAnswers, useSaveAnswer } from '@/entities/test-passing';
import { useEffect, useRef, useState } from 'react';

type QuestionCardProps = {
  question: QuestionDTO;
  testId: string;
  attemptTestId: string;
  savedAnswer: SavedAnswer | null;
};

export const QuestionCard = ({
  question,
  savedAnswer,
  testId,
  attemptTestId,
}: QuestionCardProps) => {
  const saveAnswer = useAnswers(state => state.saveAnswer);
  const ref = useRef<SavedAnswer | null>();
  const { mutateAsync, isPending } = useSaveAnswer();
  const [answer, setAnswer] = useState(savedAnswer);

  const setCurrentAnswer = (answer: SavedAnswer) => {
    ref.current = answer;
    setAnswer(answer);
    saveAnswer(question.id, answer);
  };

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      const newData = { ...savedAnswer, ...ref.current } as SavedAnswer;

      if (!isPending) {
        mutateAsync({
          id: testId,
          body: parseData(attemptTestId, newData, question.questionTypeName),
        });
      }

      event.preventDefault();
      event.returnValue = '';
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [mutateAsync]);

  useEffect(() => {
    return () => {
      if (!ref.current) return;
      const newData = { ...savedAnswer, ...ref.current };
      mutateAsync({
        id: testId,
        body: parseData(attemptTestId, newData, question.questionTypeName),
      });
    };
  }, []);

  return (
    <Card className="relative">
      <div className="p-[40px] flex flex-col gap-[20px] z-1">
        <QuestionTitle question={question.text} />
        <QuestionAnswers
          key={question.id}
          type={question.questionTypeName}
          question={question}
          setCurrentAnswer={setCurrentAnswer}
          currentAnswer={answer}
        />
      </div>
    </Card>
  );
};
