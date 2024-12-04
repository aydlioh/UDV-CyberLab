import { IQuestion } from '@/shared/types';
import { Card } from '@/shared/ui';
import { QuestionTitle } from './QuestionTitle';
import { QuestionAnswers } from './QuestionAnswers';
import { useAnswers } from '../model/store';
import { AnswersInputType } from '../model/types';

export const QuestionCard = ({ question, type, answers, id }: IQuestion) => {
  const setAnswer = useAnswers(state => state.setAnswer);
  const current = useAnswers(state => state.answers[id || question]);

  const setCurrent = (answer: AnswersInputType) => {
    setAnswer(id || question, answer);
  };

  return (
    <Card className="relative">
      <div className="p-[40px] flex flex-col gap-[20px] z-1">
        <QuestionTitle question={question} />
        <QuestionAnswers
          key={id}
          type={type}
          answers={answers}
          setCurrent={setCurrent}
          current={current}
        />
      </div>
    </Card>
  );
};
