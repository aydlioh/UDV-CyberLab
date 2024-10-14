import { Textarea } from '@/shared/ui';
import { useEffect, useState } from 'react';

export const DetailedTextAnswer = ({
  setAnswer,
  currentAnswer,
}: {
  setAnswer: (answer: string) => void;
  currentAnswer: string;
}) => {
  const [value, setValue] = useState(currentAnswer || '');

  useEffect(() => {
    setAnswer(value);
  }, [setAnswer, value]);

  return (
    <Textarea
      minRows={1}
      maxRows={6}
      placeholder="Развернутый ответ"
      variant="underlined"
      value={value}
      onChange={e => setValue(e.target.value)}
    />
  );
};
