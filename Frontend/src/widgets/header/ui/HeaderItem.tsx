import { NavLink } from 'react-router-dom';
import { HeaderLinkType } from '../model/types';

export const HeaderItem = ({ label, path }: HeaderLinkType) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `text-foreground text-[16px] relative group rounded-md outline-2 outline-offset-8 outline-none hover:text-orange duration-200 ${isActive ? 'text-orange focus-visible:outline-orange' : 'focus-visible:outline-second'}`
      }
    >
      {label}
      <span className="after:absolute after:left-0 after:right-0 after:top-[110%] after:duration-300 after:h-[2px] after:origin-top after:rounded-md after:scale-x-0 after:bg-orange after:transition-all group-hover:after:scale-x-100 " />
    </NavLink>
  );
};
