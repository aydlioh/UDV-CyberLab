import { Button } from '@/shared/ui';
import {
  Avatar,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@nextui-org/react';
import { HeaderProfileContent } from './HeaderProfileContent';
import { useState } from 'react';

export const HeaderProfile = () => {
  const [open, setOpen] = useState(false);

  return (
    <Popover
      isOpen={open}
      onOpenChange={setOpen}
      radius="sm"
      key="bottom-end"
      placement="bottom-end"
      classNames={{
        content: 'p-1 overflow-hidden bg-white',
      }}
    >
      <PopoverTrigger>
        <Button
          type="button"
          variant="light"
          radius="sm"
          className="min-w-0 w-[50px] h-[50px] p-1"
        >
          <Avatar
            isBordered
            className="transition-transform"
            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="z-0">
        <HeaderProfileContent setPopoverOpen={setOpen} />
      </PopoverContent>
    </Popover>
  );
};
