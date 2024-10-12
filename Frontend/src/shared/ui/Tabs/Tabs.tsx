import {
  extendVariants,
  Tabs as TabsNextUI,
  TabsProps,
} from '@nextui-org/react';

export const Tabs = extendVariants(TabsNextUI, {
  variants: {
    color: {
      default: {
        cursor: 'bg-gradient-to-r from-foreground to-second !hover:bg-black',
        tabContent: 'group-data-[selected=true]:text-white text-foreground',
        tabList: 'bg-controls',
      },
    },
    variant: {
      bordered: {
        tabList: 'border-gray',
      },
    },
    size: {
      lg: {
        tab: 'py-[22px] md:px-10 mobile:px-8 px-6',
      },
    },
  },
  defaultVariants: {
    color: 'default',
    size: 'lg',
    radius: 'sm',
  },
});

export type { TabsProps };
