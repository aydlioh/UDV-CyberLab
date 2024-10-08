import {
  extendVariants,
  Tabs as TabsNextUI,
  TabsProps,
} from '@nextui-org/react';

export const Tabs = extendVariants(TabsNextUI, {
  variants: {
    color: {
      default: {
        cursor: 'bg-[#3F3F46]',
      },
    },
  },
  defaultVariants: {
    color: 'default',
  },
});

export type { TabsProps };
