import {
  extendVariants,
  Textarea as TextareaNextUI,
  TextAreaProps,
} from '@nextui-org/react';

export const Textarea = extendVariants(TextareaNextUI, {
  variants: {
    variant: {
      underlined: {
        inputWrapper:
          'border-b-[1px] shadow-none border-[#CDCDE3] !rounded-none hover:border-second after:bg-foreground ',
        input:
          'placeholder:text-foreground focus:placeholder:text-[#A2A4C2] group-data-[has-value=true]:text-foreground !text-foreground',
      },
    },
  },
});

export type { TextAreaProps };
