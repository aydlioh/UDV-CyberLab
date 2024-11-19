import { Tabs, Tab } from '@/shared/ui';
import { SidebarItemType } from '../model/types';
import { useLocation, useNavigate } from 'react-router-dom';
import { SidebarItem } from './SidebarItem';
import { logoutTabData } from '../const/logoutTab';

type SidebarProps = {
  links: SidebarItemType[];
  withLogout?: boolean;
};

export const Sidebar = ({ links, withLogout = false }: SidebarProps) => {
  const hasKey = (key: string) => links.find(l => l.path === key)?.path;
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleSwitch = (key: string) => {
    if (key === 'logout') {
      console.log('logout');
      return;
    }

    if (hasKey(key)) {
      navigate(key);
    }
  };

  return (
    <aside>
      <Tabs
        size="lg"
        isVertical
        fullWidth
        onSelectionChange={key => handleSwitch(key as string)}
        selectedKey={pathname || 'default'}
        className="w-[224px]"
        aria-label="Sidebar"
        classNames={{
          tabContent: 'w-full',
          tab: 'px-[13px]',
          cursor: 'drop-shadow-base',
        }}
      >
        <Tab key="default" className="hidden" />
        {links.map(({ path, label, icon }) => (
          <Tab key={path} title={<SidebarItem icon={icon} label={label} />} />
        ))}
        {withLogout && (
          <Tab key="logout" title={<SidebarItem {...logoutTabData} />} />
        )}
      </Tabs>
    </aside>
  );
};
