import { ITestStatistics } from '@/entities/test-passing';
import { getPercentage } from '@/shared/common/utils';
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@nextui-org/react';

const tableClassNames = {
  wrapper: 'p-2',
  row: 'hover:outline-none',
  th: 'bg-secondary font-bold sm:text-[16px] text-[14px] text-foreground',
  td: 'group-data-[odd=true]:before:bg-secondary sm:text-[16px] text-[14px]',
  tr: 'px-5 outline-none outline-offset-1 outline-4 hover:outline-second/40 rounded-md',
};

export const TestStatisticsTable = ({
  results,
}: {
  results: ITestStatistics;
}) => {
  return (
    <Table
      shadow="none"
      radius="none"
      classNames={tableClassNames}
      isStriped
      aria-label="Test Answers Overview"
    >
      <TableHeader>
        <TableColumn className="sm:pl-[40px] pl-5">№</TableColumn>
        <TableColumn className="sm:pl-[40px] pl-5">ФИО Студента</TableColumn>
        <TableColumn>Баллы</TableColumn>
      </TableHeader>
      <TableBody emptyContent="Нет результатов" items={results.users}>
        {({ id, score, name }) => (
          <TableRow className="cursor-pointer" key={id}>
            <TableCell className="sm:pl-[40px] pl-5">{id}</TableCell>
            <TableCell className="sm:pl-[40px] pl-5">{name}</TableCell>
            <TableCell>{getPercentage(score, results.maxScore)}%</TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};
