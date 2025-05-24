import { Button } from '@/shared/ui';
import { ButtonProps, Tooltip, TooltipProps } from '@nextui-org/react';
import { IconType } from 'react-icons';

type ActionButtonProps = ButtonProps & {
  icon: IconType;
  label?: string;
  tooltipProps?: TooltipProps;
};

export const ActionButton = ({
  label,
  icon,
  tooltipProps,
  ...buttonProps
}: ActionButtonProps) => {
  const Icon = icon;

  return (
    <Tooltip
      showArrow
      placement="bottom-end"
      radius="sm"
      delay={500}
      closeDelay={0}
      offset={2}
      size="sm"
      content={label}
      {...tooltipProps}
    >
      <Button
        variant="faded"
        radius="sm"
        size="lg"
        isIconOnly
        color="white"
        {...buttonProps}
      >
        <Icon />
      </Button>
    </Tooltip>
  );
};
