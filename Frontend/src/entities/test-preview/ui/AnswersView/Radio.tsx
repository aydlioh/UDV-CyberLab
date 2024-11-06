import { Radio, RadioGroup } from '@/shared/ui';

export const RadioAnswer = ({
  answers,
  setAnswer,
  currentAnswer,
}: {
  answers: string[];
  setAnswer: (answer: string) => void;
  currentAnswer: string;
}) => {
  return (
    <RadioGroup
      classNames={{
        wrapper: 'gap-[15px]',
      }}
      value={currentAnswer}
      onValueChange={setAnswer}
    >
      {answers.map((answer: string, index: number) => (
        <Radio key={index} value={answer}>
          {answer}
        </Radio>
      ))}
    </RadioGroup>
  );
};
