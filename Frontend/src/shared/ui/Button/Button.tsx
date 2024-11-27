import {
  extendVariants,
  Button as ButtonNextUI,
  ButtonProps,
} from '@nextui-org/react';

export const Button = extendVariants(ButtonNextUI, {
  variants: {
    color: {
      default: 'text-foreground',
      gradient: 'bg-gradient-to-r from-foreground to-second text-white',
      primary: 'bg-foreground text-white',
      white: 'bg-white text-foreground',
      secondary: 'bg-background text-foreground',
      danger: 'text-rose-500',
    },
    variant: {
      light: 'data-[hover=true]:bg-foreground/10',
      bordered:
        'border-second data-[hover=true]:border-foreground data-[hover=true]:opacity-100',
    },
  },
  defaultVariants: {
    color: 'default',
    size: 'lg',
    radius: 'md',
  },
});

export type { ButtonProps };
