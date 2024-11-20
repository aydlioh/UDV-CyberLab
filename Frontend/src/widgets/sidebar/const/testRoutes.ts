import { SidebarItemType } from '../model/types';
import { MdOutlineTaskAlt, MdOutlineBook } from 'react-icons/md';

export const testRoutes: SidebarItemType[] = [
  {
    id: 1,
    label: 'Мои тесты',
    path: '/tests/my',
    icon: MdOutlineTaskAlt,
    enabledList: ['/tests/my', '/tests/my/passed', '/tests/my/created'],
  },
  {
    id: 2,
    label: 'База тестов',
    path: '/tests',
    icon: MdOutlineBook,
    enabledList: ['/tests'],
  },
];
