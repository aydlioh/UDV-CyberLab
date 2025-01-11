import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

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

  const formattedTime = dayjs.duration(remainingTime).format('HH:mm:ss');

  return <p className="text-[16px] text-center">{formattedTime}</p>;
};
