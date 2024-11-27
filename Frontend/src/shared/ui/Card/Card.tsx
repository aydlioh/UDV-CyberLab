import clsx from 'clsx';

type CardProps = {
  children?: React.ReactNode;
  className?: string;
};

export const Card = ({ children, className }: CardProps) => {
  return (
    <div className={clsx('bg-white rounded-[20px]', className)}>{children}</div>
  );
};
