import { Tabs } from '@/shared/ui';
import { STUDENT, TEACHER, UserStatus } from '../constants';
import { Tab } from '@nextui-org/react';

type StatusSwitcherProps = {
  status: UserStatus;
  setStatus: (status: UserStatus) => void;
};

export const StatusSwitcher = ({ status, setStatus }: StatusSwitcherProps) => {
  return (
    <Tabs
      variant="bordered"
      aria-label="User status"
      selectedKey={status}
      onSelectionChange={key => setStatus(key as typeof status)}
    >
      <Tab className="w-1/2" key={STUDENT} title="Студент" />
      <Tab className="w-1/2" key={TEACHER} title="Преподаватель" />
    </Tabs>
  );
};
