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
    color: {
      default: {
        closeButton: 'text-foreground',
      },
    },
    size: {
      lg: {
        base: 'max-w-[685px]',
        body: 'p-[44px]',
        closeButton: 'text-[30px]',
      },
    },
  },
  defaultVariants: {
    color: 'default',
  },
});

export type { ModalProps };
export { ModalContent, ModalHeader, ModalFooter, ModalBody };
