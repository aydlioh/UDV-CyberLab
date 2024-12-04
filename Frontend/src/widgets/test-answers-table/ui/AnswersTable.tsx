import { useAnswers } from '@/entities/test-question';
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@nextui-org/react';
import clsx from 'clsx';

const tableClassNames = {
  wrapper: 'p-0 ',
  th: 'bg-secondary font-bold text-[16px] text-foreground',
  td: 'group-data-[odd=true]:before:bg-secondary text-[16px]',
  tr: 'px-5',
};

export const AnswersTable = () => {
  const getAnswersArray = useAnswers(state => state.getAnswersArray)();

  return (
    <Table
      shadow="none"
      radius="none"
      classNames={tableClassNames}
      isStriped
      aria-label="Test Answers Overview"
    >
      <TableHeader>
        <TableColumn className="pl-[40px]">Вопрос</TableColumn>
        <TableColumn>Состояние</TableColumn>
      </TableHeader>
      <TableBody>
        {getAnswersArray.map((has, index) => (
          <TableRow onClick={() => console.log('click')} key={index}>
            <TableCell className="w-1/2 pl-[40px]">{index + 1}</TableCell>
            <TableCell
              className={clsx(
                has ? 'text-foreground font-medium' : 'text-foreground/30'
              )}
            >
              {has ? 'Ответ записан' : 'Нет ответа'}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
