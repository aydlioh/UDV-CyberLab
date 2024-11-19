import { useTestDetailsModalStore } from '../store';

export const useModalCloseHandler = () => {
  const close = useTestDetailsModalStore(state => state.close);

  const closeHandler = (callback: () => void) => {
    return () => {
      close();
      setTimeout(callback, 0);
    };
  };

  return closeHandler;
};
