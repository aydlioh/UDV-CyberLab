import { IQuestion } from '@/shared/types';
import { Card } from '@/shared/ui';
import { QuestionTitle } from './QuestionTitle';
import { QuestionAnswers } from './QuestionAnswers';

export const QuestionPreviewCard = ({ question, type, answers, id }: IQuestion) => {
  return (
    <Card className="relative">
      <div className="p-[40px] flex flex-col gap-[20px] z-1">
        <QuestionTitle question={question} />
        <QuestionAnswers key={id} type={type} answers={answers} />
      </div>
    </Card>
  );
};
