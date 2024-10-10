import {
  extendVariants,
  Input as InputNextUI,
  InputProps,
} from '@nextui-org/react';

export const Input = extendVariants(InputNextUI, {
  variants: {
    variant: {
      bordered: {
        inputWrapper: 'border-gray'
      }
    }
  }
});

export type { InputProps };
