import {
  extendVariants,
  Modal as ModalNextUI,
  ModalProps,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
} from '@nextui-org/react';

export const Modal = extendVariants(ModalNextUI, {
  variants: {
    size: {
      lg: {
        base: 'max-w-[685px]',
        body: 'p-[44px]',
        closeButton: 'text-foreground text-[30px]',
      },
    },
  },
});

export type { ModalProps };
export { ModalContent, ModalHeader, ModalFooter, ModalBody };
