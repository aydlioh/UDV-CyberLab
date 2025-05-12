import { Avatar, AvatarProps } from '@nextui-org/react';
import { getImageFallback } from '../utils/getImageFallback';
import { useMemo } from 'react';
import clsx from 'clsx';

type UserImageProps = { username: string } & AvatarProps;

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
      fallback={<div className="text-lg">{firstTwoLetters}</div>}
    />
  );
};
