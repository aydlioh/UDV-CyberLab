import {
  extendVariants,
  Button as ButtonNextUI,
  ButtonProps,
} from '@nextui-org/react';

export const Button = extendVariants(ButtonNextUI, {
  variants: {
    color: {
      default: 'bg-main-gradient text-white',
    },
  },
  defaultVariants: {
    color: 'default',
    size: 'lg',
    radius: 'sm',
  },
});

export type { ButtonProps };
