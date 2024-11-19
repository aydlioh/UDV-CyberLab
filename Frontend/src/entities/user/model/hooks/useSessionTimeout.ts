import { useEffect } from 'react';

interface UseSessionTimeoutOptions {
  expirationTime: string | undefined;
  onExpire: () => void;
}

export const useSessionTimeout = ({
  expirationTime,
  onExpire,
}: UseSessionTimeoutOptions) => {
  useEffect(() => {
    if (expirationTime === undefined) return;

    const expireTime = Date.parse(expirationTime);
    const currentTime = Date.now();
    const timeLeft = expireTime - currentTime;

    if (timeLeft <= 0) {
      onExpire();
      return;
    }

    const timeoutId = setTimeout(() => {
      onExpire();
    }, timeLeft);

    return () => clearTimeout(timeoutId);
  }, [expirationTime, onExpire]);
};
