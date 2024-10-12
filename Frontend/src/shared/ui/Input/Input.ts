import {
  extendVariants,
  Input as InputNextUI,
  InputProps,
} from '@nextui-org/react';

export const Input = extendVariants(InputNextUI, {
  variants: {
    variant: {
      bordered: {
        inputWrapper: 'border-gray',
      },
      flat: {
        inputWrapper:
          'bg-controls data-[hover=true]:bg-[#CDCDE3] group-data-[focus=true]:bg-[#CDCDE3]',
        label: '!text-foreground',
        input:
          'placeholder:text-foreground focus:placeholder:text-[#A2A4C2] group-data-[has-value=true]:text-foreground !text-foreground',
      },
    },
  },
  defaultVariants: {
    variant: 'flat',
    radius: 'sm',
    size: 'sm',
  },
});

export type { InputProps };
