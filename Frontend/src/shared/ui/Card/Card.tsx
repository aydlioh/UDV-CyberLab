import clsx from 'clsx';

export const Card = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={clsx('bg-white rounded-[20px]', className)} {...props}>
      {children}
    </div>
  );
};
