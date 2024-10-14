import clsx from 'clsx';

type TestCardProps = {
  children?: React.ReactNode;
  isVertical?: boolean;
};

export const TestCard = ({
  isVertical = false,
  children,
}: TestCardProps) => {
  const cardContainer = clsx(
    'w-full flex min-h-[130px]',
    isVertical ? 'flex-col' : 'flex-row'
  );

  const cardBorder = clsx(
    'from-foreground to-second',
    isVertical
      ? 'bg-gradient-to-r rounded-t-[15px] h-[10px]'
      : 'bg-gradient-to-b rounded-l-[15px] w-[10px]'
  );

  const cardContent = clsx(
    'py-[10px] bg-white w-full',
    isVertical
      ? 'rounded-b-[15px] px-[34px] py-[20px] grow'
      : 'rounded-r-[15px] px-[24px] pb-[20px]'
  );

  return (
    <div className={cardContainer}>
      <div className={cardBorder} />
      <div className={cardContent}>{children}</div>
    </div>
  );
};
