import { AuthStatus } from '@/entities/user';
import { Tabs, Tab } from '@/shared/ui';
import { useStatusSwitcher } from '../model/store';

export const StatusSwitcher = () => {
  const { userStatus, setUserStatus } = useStatusSwitcher();

  return (
    <Tabs
      size="lg"
      aria-label="User status"
      selectedKey={userStatus}
      onSelectionChange={key => setUserStatus(key as typeof userStatus)}
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
