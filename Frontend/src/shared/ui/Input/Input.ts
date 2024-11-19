import {
  extendVariants,
  Input as InputNextUI,
  InputProps,
} from '@nextui-org/react';

export const Input = extendVariants(InputNextUI, {
  variants: {
    color: {
      default: {
        inputWrapper: 'bg-controls',
        label: 'text-foreground',
        input:
          'placeholder:text-foreground focus:placeholder:text-[#A2A4C2] group-data-[has-value=true]:text-foreground !text-foreground',
      },
    },
    variant: {
      bordered: {
        inputWrapper: 'border-gray',
      },
      flat: {
        inputWrapper:
          'data-[hover=true]:bg-[#CDCDE3] group-data-[focus=true]:bg-[#CDCDE3]',
      },
      underlined: {
        inputWrapper:
          'border-b-[1px] shadow-none border-[#CDCDE3] !rounded-none hover:border-second after:bg-foreground ',
      },
    },
  },
  defaultVariants: {
    variant: 'flat',
    color: 'default',
    radius: 'sm',
    size: 'sm',
  },
});

export type { InputProps };
