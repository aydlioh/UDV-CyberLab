import { Textarea } from '@/shared/ui';
import { useEffect, useState } from 'react';

const DELAY = 400;

export const TextAnswer = ({
  setAnswer,
  currentAnswer,
}: {
  setAnswer?: (answer: string) => void;
  currentAnswer: string;
}) => {
  const [value, setValue] = useState(currentAnswer ?? '');

  useEffect(() => {
    const handler = setTimeout(() => {
      if (value !== currentAnswer) {
        if (setAnswer) {
          setAnswer(value);
        }
      }
    }, DELAY);

    return () => {
      clearTimeout(handler);
    };
  }, [value, currentAnswer, setAnswer]);

  return (
    <Textarea
      isDisabled={!setAnswer}
      minRows={1}
      maxRows={6}
      placeholder="Развернутый ответ"
      variant="underlined"
      value={value}
      onChange={e => setValue(e.target.value)}
    />
  );
};
