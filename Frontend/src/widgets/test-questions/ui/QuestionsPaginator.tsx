import { Button } from '@/shared/ui';
import clsx from 'clsx';
import { useScrollContainer } from '@/shared/hooks';
import { useAnswers } from '@/entities/test-question';

type QuestionsPaginatorProps = {
  ids: string[];
  current: number;
  setCurrent: (value: number) => void;
};

export const QuestionsPaginator = ({
  ids,
  current,
  setCurrent,
}: QuestionsPaginatorProps) => {
  const answers = useAnswers(state => state.answers);
  const container = useScrollContainer();

  return (
    <div
      ref={container}
      className="relative flex gap-2 overflow-x-scroll without-scrollbar scroll-smooth p-2"
    >
      {ids.map((id, index) => {
        index += 1;
        return (
          <Button
            size="md"
            color="white"
            isIconOnly
            key={index}
            disabled={index === current}
            className={clsx(
              'text-[18px] !duration-300',
              index === current
                ? 'bg-foreground text-white'
                : answers[id]
                  ? 'bg-secondary'
                  : 'bg-white text-foreground'
            )}
            onPress={() => setCurrent(index)}
          >
            {index}
          </Button>
        );
      })}
    </div>
  );
};
