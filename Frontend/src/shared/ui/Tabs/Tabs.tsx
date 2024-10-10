import {
  extendVariants,
  Tabs as TabsNextUI,
  TabsProps,
} from '@nextui-org/react';

export const Tabs = extendVariants(TabsNextUI, {
  variants: {
    color: {
      default: {
        cursor: 'bg-main-gradient !hover:bg-black',
        tabContent: 'group-data-[selected=true]:text-white text-foreground',
      },
    },
    variant: {
      bordered: {
        tabList: 'border-gray',
      }
    },
    size: {
      lg: {
        tab: 'py-5 mobile:px-10 px-7',
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
