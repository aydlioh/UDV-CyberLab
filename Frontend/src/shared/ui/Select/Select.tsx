export { SelectItem } from '@nextui-org/react';
import {
  extendVariants,
  Select as SelectNextUI,
  SelectProps,
} from '@nextui-org/react';

export const Select = extendVariants(SelectNextUI, {
  variants: {
    variant: {
      flat: {
        trigger:
          'group-data-[filled=true]:text-foreground bg-controls data-[hover=true]:bg-[#CDCDE3] duration-200',
        label: 'text-foreground',
        value: 'group-data-[has-value=true]:text-foreground',
        popoverContent: 'bg-controls max-h-[190px]',
      },
    },
    radius: {
      sm: {
        trigger: 'rounded-small',
        popoverContent: 'rounded-small',
      },
    },
  },
  defaultVariants: {
    variant: 'flat',
    radius: 'sm',
  },
});

export type { SelectProps };
