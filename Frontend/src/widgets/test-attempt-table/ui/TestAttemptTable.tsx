import { ITestResult } from '@/entities/test';
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
  wrapper: 'p-2',
  row: 'hover:outline-none',
  th: 'bg-secondary font-bold text-[16px] text-foreground',
  td: 'group-data-[odd=true]:before:bg-secondary text-[16px]',
  tr: 'px-5',
};

export const TestAttemptTable = ({ result }: { result: ITestResult }) => {
  return (
    <Table
      shadow="none"
      radius="none"
      classNames={tableClassNames}
      isStriped
      aria-label="Test Attempt"
    >
      <TableHeader>
        <TableColumn className="pl-[40px]">Вопрос</TableColumn>
        <TableColumn>Баллы</TableColumn>
      </TableHeader>
      <TableBody emptyContent="Нет результатов" items={result.results}>
        {({ id, number, score, maxScore }) => (
          <TableRow key={id}>
            <TableCell className="pl-[40px] w-1/2">{number}</TableCell>
            <TableCell
              className={clsx(
                'text-red-300',
                score === maxScore && 'text-green-500',
                score === 0 && 'text-red-500'
              )}
            >
              {score}/{maxScore}
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};
