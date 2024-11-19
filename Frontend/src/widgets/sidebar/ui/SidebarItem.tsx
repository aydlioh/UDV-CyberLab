import { SidebarItemType } from '../model/types';

export const SidebarItem = (props: Omit<SidebarItemType, 'path' | 'id'>) => {
  return (
    <div className="flex flex-row gap-2">
      {props.icon && <props.icon className="text-[24px]" />}
      <p className='text-[14px]'>{props.label}</p>
    </div>
  );
};
