export { CheckboxGroup } from '@nextui-org/react';
import {
  extendVariants,
  Checkbox as CheckboxNextUI,
  CheckboxProps,
} from '@nextui-org/react';

export const Checkbox = extendVariants(CheckboxNextUI, {
  variants: {
    color: {
      default: {
        label: 'text-foreground',
        wrapper:
          'before:border-second group-data-[hover=true]:before:bg-second/15  after:bg-foreground after:text-white text-primary-foreground',
      },
    },
    size: {
      md: {
        label: 'text-[14.7px] leading-[20px]',
      },
    },
  },
  defaultVariants: {
    color: 'default',
    size: 'md',
  },
});

export type { CheckboxProps };
