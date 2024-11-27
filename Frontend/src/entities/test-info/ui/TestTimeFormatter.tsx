import dayjs from 'dayjs';

export interface ITestTimeProps {
  time: Date | string | number;
}

export const TestTimeFormatter = ({ time }: ITestTimeProps) => {
  return (
    <span className="font-semibold hover:animate-pulse underline-offset-4 no-underline hover:underline decoration-dashed decoration-foreground/85">
      {dayjs(time).format('DD.MM.YYYY HH:mm')}
    </span>
  );
};
