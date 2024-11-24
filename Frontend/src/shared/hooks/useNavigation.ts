import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { scrollToTop } from '../common/utils/scrollToTop';

export const useNavigation = () => {
  const nav = useNavigate();

  const navigate = useCallback(
    (key: string) => {
      nav(key);
    },
    [nav]
  );

  const lazyNavigate = useCallback(
    (key: string) => {
      setTimeout(() => nav(key), 0);
    },
    [nav]
  );

  const scrollNavigate = useCallback(
    (key: string) => {
      const navigateToKey = () => nav(key);
      if (window.scrollY > 0) {
        scrollToTop().then(() => setTimeout(navigateToKey, 75));
      } else {
        navigateToKey();
      }
    },
    [nav]
  );

  return { navigate, scrollNavigate, lazyNavigate };
};
