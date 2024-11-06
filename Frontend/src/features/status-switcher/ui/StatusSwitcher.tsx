import { UserStatus } from '@/entities/auth';
import { Tabs } from '@/shared/ui';
import { Tab } from '@nextui-org/react';

type StatusSwitcherProps = {
  status: UserStatus;
  setStatus: (status: UserStatus) => void;
};

export const StatusSwitcher = ({ status, setStatus }: StatusSwitcherProps) => {
  return (
    <Tabs
      aria-label="User status"
      selectedKey={status}
      onSelectionChange={key => setStatus(key as typeof status)}
    >
      <Tab className="w-1/2" key={UserStatus.STUDENT} title="Студент" />
      <Tab className="w-1/2" key={UserStatus.TEACHER} title="Преподаватель" />
    </Tabs>
  );
};
