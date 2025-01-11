import { ITestResult } from '@/entities/test-passing';
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@nextui-org/react';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';

const tableClassNames = {
  wrapper: 'p-2',
  row: 'hover:outline-none',
  th: 'bg-secondary font-bold text-[16px] text-foreground',
  td: 'group-data-[odd=true]:before:bg-secondary text-[16px]',
  tr: 'px-5 outline-none outline-offset-1 outline-4 hover:outline-second/40 rounded-md',
};

export const TestAttemptTable = ({
  result,
  testId,
}: {
  result: ITestResult;
  testId: string;
}) => {
  const navigate = useNavigate();

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
          <TableRow
            className="cursor-pointer"
            onClick={() =>
              navigate(
                `/tests/${testId}/results/${result.id}/preview?question=${id}`
              )
            }
            key={id}
          >
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
