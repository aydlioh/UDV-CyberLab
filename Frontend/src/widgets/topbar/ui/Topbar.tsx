import { Tabs, Tab } from '@/shared/ui';
import { useLocation } from 'react-router-dom';
import { TopbarItemType } from '../model/types';
import { TopbarItem } from './TopbarItem';
import { useNavigation } from '@/shared/hooks';

type TopbarProps = {
  links: TopbarItemType[];
};

export const Topbar = ({ links }: TopbarProps) => {
  const { scrollNavigate } = useNavigation();
  const { pathname } = useLocation();

  const hasEnabledKey = (key: string) =>
    links.find(l => l.enabledList.includes(key));

  const handleSwitch = (key: string) => {
    if (hasEnabledKey(key)) {
      scrollNavigate(key);
    }
  };

  return (
    <aside>
      <Tabs
        size="lg"
        color="secondary"
        onSelectionChange={key => handleSwitch(key as string)}
        selectedKey={hasEnabledKey(pathname)?.path || 'default'}
        aria-label="Sidebar"
        classNames={{
          tabContent: 'w-full',
          tab: 'px-[13px] min-w-[151px]',
          cursor: 'drop-shadow-base',
        }}
      >
        <Tab key="default" className="hidden" />
        {links.map(({ path, label }) => (
          <Tab key={path} title={<TopbarItem label={label} />} />
        ))}
      </Tabs>
    </aside>
  );
};
