import clsx from 'clsx';
import SimpleBar from 'simplebar-react';

export const Scrollbar = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <SimpleBar className={clsx('max-h-svh', className)} forceVisible="y">
      {children}
    </SimpleBar>
  );
};
