import { Checkbox, CheckboxGroup } from '@/shared/ui';

export const CheckboxAnswer = ({
  answers,
  setAnswer,
  currentAnswer,
}: {
  answers: string[];
  setAnswer: (answer: string[]) => void;
  currentAnswer: string[];
}) => {
  return (
    <CheckboxGroup
      classNames={{
        wrapper: 'gap-[15px]',
      }}
      value={currentAnswer ?? []}
      onValueChange={setAnswer}
    >
      {answers.map((answer: string, index: number) => (
        <Checkbox radius="none" value={answer} key={index}>
          {answer}
        </Checkbox>
      ))}
    </CheckboxGroup>
  );
};
