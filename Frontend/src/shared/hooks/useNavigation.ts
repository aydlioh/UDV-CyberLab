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
      if (window.scrollY > 0) {
        scrollToTop().then(() => setTimeout(() => nav(key), 50));
      } else {
        setTimeout(() => nav(key), 0);
      }
    },
    [nav]
  );

  return { navigate, scrollNavigate, lazyNavigate };
};
