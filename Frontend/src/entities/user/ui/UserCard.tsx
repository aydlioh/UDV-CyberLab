import { Badge } from '@nextui-org/react';
import { UserCardType, UserRole } from '../model/types';

import { RiGraduationCapFill } from 'react-icons/ri';
import { FaLock } from 'react-icons/fa';
import { UserImage } from './UserImage';

export const UserCard = ({ login, email, img, role }: UserCardType) => {
  return (
    <div className="p-2">
      <div className="flex flex-row gap-[15px]">
        {role === UserRole.TEACHER || role === UserRole.ADMIN ? (
          <Badge
            color={role === UserRole.TEACHER ? 'primary' : 'warning'}
            className="border-white"
            content={
              role === UserRole.TEACHER ? (
                <RiGraduationCapFill className="p-[2px]" size={18} />
              ) : (
                <FaLock className="p-[3px]" size={18} />
              )
            }
          >
            <UserImage
              isBordered
              size="lg"
              radius="lg"
              src={img}
              username={login}
              color={role === UserRole.TEACHER ? 'primary' : 'warning'}
            />
          </Badge>
        ) : (
          <UserImage username={login} size="lg" radius="lg" src={img} />
        )}

        <div className="flex justify-center flex-col">
          <p className="text-[16px] font-bold">{login}</p>
          <p className="text-[12px] text-foreground/80">{email}</p>
        </div>
      </div>
    </div>
  );
};
