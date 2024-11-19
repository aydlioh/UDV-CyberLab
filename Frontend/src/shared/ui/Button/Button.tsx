import {
  extendVariants,
  Button as ButtonNextUI,
  ButtonProps,
} from '@nextui-org/react';

export const Button = extendVariants(ButtonNextUI, {
  variants: {
    color: {
      primary: 'text-foreground',
      secondary: 'hover:bg-foreground/10',
      danger: 'text-rose-500',
    },
    variant: {
      flat: 'bg-gradient-to-r from-foreground to-second text-white',
      light: 'data-[hover=true]:bg-foreground/10',
      bordered:
        'border-second data-[hover=true]:border-foreground data-[hover=true]:opacity-100',
    },
  },
  defaultVariants: {
    variant: 'flat',
    size: 'lg',
    radius: 'md',
  },
});

export type { ButtonProps };
