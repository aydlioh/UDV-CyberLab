import { useMediaQuery } from '@/shared/hooks';
import { Select, SelectItem } from '@/shared/ui';

export const SelectAnswer = ({
  answers,
  setAnswer,
  currentAnswer,
}: {
  answers: {
    title: string;
    items: string[];
  }[];
  setAnswer: (answer: Record<string, string>) => void;
  currentAnswer: Record<string, string>;
}) => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const handleChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
    title: string
  ) => {
    setAnswer({ ...currentAnswer, [title]: event.target.value });
  };

  return (
    <>
      {answers.map(({ title, items }) => (
        <div key={title} className="flex flex-col gap-1">
          <p>{title}</p>
          <Select
            size="sm"
            listboxProps={{
              itemClasses: {
                base: 'data-[hover=true]:bg-[#CDCDE3] data-[selectable=true]:focus:text-foreground data-[hover=true]:text-foreground data-[selectable=true]:focus:bg-[#CDCDE3]',
              },
            }}
            popoverProps={{
              placement: isMobile ? 'top-start' : 'right-start',
            }}
            selectedKeys={[currentAnswer ? currentAnswer[title] : '']}
            onChange={e => handleChange(e, title)}
            label="Выбрать ответ"
            className="sm:max-w-[300px] w-full"
          >
            {items.map(item => (
              <SelectItem key={item}>{item}</SelectItem>
            ))}
          </Select>
        </div>
      ))}
    </>
  );
};
