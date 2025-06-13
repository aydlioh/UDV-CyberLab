import { Avatar, AvatarProps } from '@nextui-org/react';
import { useMemo } from 'react';
import clsx from 'clsx';
import { getImageFallback } from '@/shared/common/utils/user';

type UserImageProps = { username: string } & AvatarProps;

const textSize = {
  sm: 'text-md',
  md: 'text-md',
  lg: 'text-lg',
};

export const UserImage = ({ username, ...props }: UserImageProps) => {
  const { firstTwoLetters, color } = useMemo(
    () => getImageFallback(username),
    [username]
  );

  return (
    <Avatar
      className={clsx('transition-transform text-white', props.className)}
      style={{
        backgroundColor: color,
      }}
      {...props}
      showFallback
      fallback={
        <div className={clsx(textSize[props.size || 'lg'])}>
          {firstTwoLetters}
        </div>
      }
    />
  );
};
