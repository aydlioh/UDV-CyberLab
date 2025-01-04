import { Textarea } from '@/shared/ui';
import { useCallback, useEffect, useRef, useState } from 'react';

export const TextAnswer = ({
  setAnswer,
  currentAnswer,
}: {
  setAnswer?: (answer: string) => void;
  currentAnswer: string;
}) => {
  const isUnmounting = useRef(false);
  const [value, setValue] = useState(currentAnswer ?? '');

  const saveAnswer = useCallback(() => {
    if (isUnmounting.current) return;

    if (setAnswer) {
      setAnswer(value);
    }
  }, [setAnswer, value]);

  useEffect(() => {
    isUnmounting.current = false;

    return () => {
      isUnmounting.current = true;
      saveAnswer();
    };
  }, [saveAnswer]);

  return (
    <Textarea
      isDisabled={!setAnswer}
      minRows={1}
      maxRows={6}
      placeholder="Развернутый ответ"
      variant="underlined"
      value={value}
      onChange={e => setValue(e.target.value)}
      onBlur={saveAnswer}
    />
  );
};
