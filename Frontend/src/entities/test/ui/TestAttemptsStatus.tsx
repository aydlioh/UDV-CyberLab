type TestAttemptsStatusProps = {
  totalAttempts?: number;
  remainingAttempts?: number;
};

export const TestAttemptsStatus = ({
  totalAttempts = 0,
  remainingAttempts = 0,
}: TestAttemptsStatusProps) => {
  return (
    <>
      {totalAttempts ? (
        remainingAttempts ? (
          <p>
            Осталось попыток:{' '}
            <span className="font-semibold">{remainingAttempts}</span>
          </p>
        ) : (
          <p className="mt-3 rounded-[6px] py-2 px-2 text-center text-rose-400 text-[15px] border-dashed border-rose-400/50 border-[2px]">
            Попытки закончились
          </p>
        )
      ) : (
        <p className="mt-3 rounded-[6px] py-2 px-2 text-center text-green-400 text-[15px] border-dashed border-green-400/50 border-[2px]">
          Число попыток не ограничено
        </p>
      )}
    </>
  );
};
