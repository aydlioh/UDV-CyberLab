import { Checkbox, CheckboxGroup } from '@/shared/ui';

export const CheckboxAnswer = ({
  answers,
  setAnswer,
  currentAnswers,
}: {
  answers: string[];
  setAnswer?: (answer: string[]) => void;
  currentAnswers: string[];
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
        <Checkbox radius="sm" size='md' value={answer} key={index}>
          {answer}
        </Checkbox>
      ))}
    </CheckboxGroup>
  );
};
