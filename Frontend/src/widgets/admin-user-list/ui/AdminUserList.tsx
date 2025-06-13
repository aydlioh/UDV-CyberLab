import { UserInfo } from '@/shared/types';
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

import {
  UserDeleteActions,
  UserDeleteActionsTrigger,
} from '@/features/user-actions';
import { UserCard, UserChip } from '@/entities/user';
import { Key, useCallback } from 'react';

const columns: { name: string; key: Keys }[] = [
  { name: 'Пользователь', key: 'user' },
  { name: 'Тип пользователя', key: 'role' },
  { name: '', key: 'actions' },
] as const;

type Keys = 'user' | 'role' | 'actions';

export const AdminUserList = ({ users }: { users: UserInfo[] }) => {
  const renderCell = useCallback(
    (user: UserInfo, columnKey: Key) =>
      ({
        user: <UserCard withoutBadge imgSize="md" user={user} />,
        role: <UserChip role={user.role} />,
        actions: (
          <div className="w-full flex justify-end">
            <UserDeleteActionsTrigger>
              {closePopover => (
                <UserDeleteActions user={user} closePopover={closePopover} />
              )}
            </UserDeleteActionsTrigger>
          </div>
        ),
      })[String(columnKey) as Keys],
    []
  );

  return (
    <Table
      shadow="none"
      radius="none"
      classNames={tableClassNames}
      isStriped
      aria-label="Test Answers Overview"
    >
      <TableHeader columns={columns}>
        {column => (
          <TableColumn className="sm:pl-[20px] pl-5x" key={column.key}>
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={users} emptyContent="Пользователи не найдены">
        {user => (
          <TableRow key={user.userId}>
            {columnKey => (
              <TableCell className="sm:pl-[20px] pl-5">
                {renderCell(user, columnKey)}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};
