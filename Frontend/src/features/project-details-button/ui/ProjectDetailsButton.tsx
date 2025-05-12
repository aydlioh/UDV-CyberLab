import { Button } from '@/shared/ui';
import { Tooltip } from '@nextui-org/react';
import { IconType } from 'react-icons';

type ProjectDetailsButtonProps = {
  label: string;
  onClick: () => void;
  icon: IconType;
};

export const ProjectDetailsButton = ({
  label,
  onClick,
  icon,
}: ProjectDetailsButtonProps) => {
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
    >
      <Button
        className="border-foreground/20"
        onPress={onClick}
        radius="sm"
        size="lg"
        isIconOnly
        color="white"
        variant="faded"
      >
        <Icon size={20} />
      </Button>
    </Tooltip>
  );
};
