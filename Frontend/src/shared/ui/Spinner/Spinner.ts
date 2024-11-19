import {
  extendVariants,
  Spinner as RadioNextUI,
  SpinnerProps,
} from '@nextui-org/react';

export const Spinner = extendVariants(RadioNextUI, {
  variants: {
    color: {
      primary: {
        circle1: 'border-b-foreground',
        circle2: 'border-b-foreground/50',
      },
    },
    size: {
      page: {
        wrapper: 'h-12 w-12',
        circle1: 'h-12 w-12',
        circle2: 'h-12 w-12',
      }
    }
  },
});

export type { SpinnerProps };
