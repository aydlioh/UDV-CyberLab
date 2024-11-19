import {
  extendVariants,
  CircularProgress as CircularProgressNextUI,
  CircularProgressProps,
} from '@nextui-org/react';

export const CircularProgress = extendVariants(CircularProgressNextUI, {
  variants: {
    color: {
      default: {
        track: 'stroke-background',
        svg: 'text-foreground',
      },
    },
    size: {
      lg: {
        value: 'text-[15px] font-medium',
      },
      md: {
        value: 'text-[14px] font-medium',
      },
    },
  },
  defaultVariants: {
    color: 'default',
    size: 'md',
  },
});

export type { CircularProgressProps };
