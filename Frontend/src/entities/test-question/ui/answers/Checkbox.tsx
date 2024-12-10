import { Checkbox, CheckboxGroup } from '@/shared/ui';
import { AnswersInputType } from '../../model/types';

export const CheckboxAnswer = ({
  answers,
  setAnswer,
  currentAnswers,

  userAnswers,
  correctAnswers,
}: {
  answers: string[];
  setAnswer?: (answer: string[]) => void;
  currentAnswers: string[];

  userAnswers?: Record<string, AnswersInputType>;
  correctAnswers?: Record<string, AnswersInputType>;
}) => {
  return (
    <CheckboxGroup
      classNames={{
        wrapper: 'gap-[12px]',
      }}
      value={currentAnswers ?? []}
      onValueChange={setAnswer}
    >
      {answers.map((answer: string, index: number) => (
        <Checkbox radius="sm" size="md" value={answer} key={index}>
          {answer}
        </Checkbox>
      ))}
    </CheckboxGroup>
  );
};
