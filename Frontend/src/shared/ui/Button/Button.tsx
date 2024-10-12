import {
  extendVariants,
  Button as ButtonNextUI,
  ButtonProps,
} from '@nextui-org/react';

export const Button = extendVariants(ButtonNextUI, {
  variants: {
    color: {
      default: 'bg-gradient-to-r from-foreground to-second text-white',
    },
  },
  defaultVariants: {
    color: 'default',
    size: 'lg',
    radius: 'md',
  },
});

export type { ButtonProps };
