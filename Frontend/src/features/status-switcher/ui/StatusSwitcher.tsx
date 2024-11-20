import { AuthStatus } from '@/entities/user';
import { Tabs, Tab } from '@/shared/ui';

type StatusSwitcherProps = {
  status: AuthStatus;
  setStatus: (status: AuthStatus) => void;
};

export const StatusSwitcher = ({ status, setStatus }: StatusSwitcherProps) => {
  return (
    <Tabs
      size="lg"
      aria-label="User status"
      selectedKey={status}
      onSelectionChange={key => setStatus(key as typeof status)}
      classNames={{
        tab: 'py-[22px] md:px-10 mobile:px-8 px-6',
        tabList: 'bg-controls',
      }}
    >
      <Tab className="w-1/2" key={AuthStatus.STUDENT} title="Студент" />
      <Tab className="w-1/2" key={AuthStatus.TEACHER} title="Преподаватель" />
    </Tabs>
  );
};
