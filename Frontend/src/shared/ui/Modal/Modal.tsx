import {
  extendVariants,
  Modal as ModalNextUI,
  ModalProps,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
} from '@nextui-org/react';
import { useLayoutEffect } from 'react';

const BaseModal = extendVariants(ModalNextUI, {
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

export const Modal = (props: ModalProps) => {
  useLayoutEffect(() => {
    const html = document.querySelector('html');
    const body = document.querySelector('body');

    if (html && body) {
      html.style.scrollbarGutter = 'auto';
      body.style.scrollbarGutter = 'auto';
    }

    return () => {
      if (html && body) {
        html.style.scrollbarGutter = 'stable';
        body.style.scrollbarGutter = 'stable';
      }
    };
  }, []);

  return <BaseModal {...props} />;
};
