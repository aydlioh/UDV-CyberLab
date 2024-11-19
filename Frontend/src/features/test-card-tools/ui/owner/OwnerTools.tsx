import { TestToolsIcon } from '@/shared/assets/svgs';
import { Button } from '@/shared/ui';
import { Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react';
import { ToolsContent } from './ToolsContent';

export const OwnerTools = ({ id }: { id: string }) => {
  return (
    <Popover
      radius="sm"
      key="right-start"
      placement="right-start"
      classNames={{
        content: 'p-1 overflow-hidden',
      }}
    >
      <PopoverTrigger>
        <Button isIconOnly color="primary" variant="light">
          <TestToolsIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <ToolsContent id={id} />
      </PopoverContent>
    </Popover>
  );
};
