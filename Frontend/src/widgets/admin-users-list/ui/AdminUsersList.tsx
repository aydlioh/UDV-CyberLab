import { UserInfo } from '@/entities/user';
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@nextui-org/react';

const tableClassNames = {
  wrapper: 'p-2 rounded-md',
  row: 'hover:outline-none',
  th: 'bg-secondary font-bold sm:text-[16px] text-[14px] text-foreground',
  td: 'group-data-[odd=true]:before:bg-secondary sm:text-[16px] text-[14px]',
  tr: 'px-5 outline-none outline-offset-1 outline-4 rounded-md',
};

const roles = {
  0: 'Студент',
  1: 'Администратор',
  2: 'Преподаватель',
};

export const AdminUsersList = ({ users }: { users: UserInfo[] }) => {
  return (
    <Table
      shadow="none"
      radius="none"
      classNames={tableClassNames}
      isStriped
      aria-label="Test Answers Overview"
    >
      <TableHeader>
        <TableColumn className="sm:pl-[20px] pl-5">Логин</TableColumn>
        <TableColumn className="sm:pl-[20px] pl-5">Почта</TableColumn>
        <TableColumn className="sm:pl-[20px] pl-5">
          Тип пользователя
        </TableColumn>
      </TableHeader>
      <TableBody emptyContent="Нет результатов">
        {users.map((user, index) => (
          <TableRow key={index}>
            <TableCell className="sm:pl-[20px] pl-5">{user.userName}</TableCell>
            <TableCell className="sm:pl-[20px] pl-5">{user.email}</TableCell>
            <TableCell className="text-center">{roles[user.role]}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
