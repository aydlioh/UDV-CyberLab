import { useEffect, useState } from 'react';
import { getDurationFormat } from '@/shared/common/utils/dayjs';

export const TestTimer = ({ time }: { time: number | undefined }) => {
  const [remainingTime, setRemainingTime] = useState(time ?? 0);

  useEffect(() => {
    if (!time || time <= 0) return;

    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      const newRemainingTime = Math.max((time ?? 0) - elapsedTime, 0);
      setRemainingTime(newRemainingTime);

      if (newRemainingTime <= 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  const formattedTime = getDurationFormat(remainingTime, 'HH:mm:ss');

  return <p className="text-[16px] text-center">{formattedTime}</p>;
};
