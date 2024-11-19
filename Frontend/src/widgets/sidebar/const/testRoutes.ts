import { SidebarItemType } from '../model/types';
import { MdOutlineTaskAlt, MdOutlineBook } from 'react-icons/md';

export const testRoutes: SidebarItemType[] = [
  {
    id: 1,
    label: 'Мои тесты',
    path: '/tests/my',
    icon: MdOutlineTaskAlt,
  },
  {
    id: 2,
    label: 'База тестов',
    path: '/tests',
    icon: MdOutlineBook,
  },
];
