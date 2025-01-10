import { Button } from '../Button';

export const SomethingWentWrongError = ({
  error,
  resetErrorBoundary,
}: {
  error: Error;
  resetErrorBoundary?: () => void;
}) => (
  <div className="flex justify-center mt-[20px] w-full">
    <div className="max-w-[400px] w-full flex flex-col items-center">
      <p className="text-second">Что-то пошло не так!</p>
      <p className="break-all mb-2.5 line-clamp-2 text-rose-500 font-semibold">
        {error.message}
      </p>
      {resetErrorBoundary && (
        <Button
          size="md"
          radius="sm"
          className="bg-foreground/5"
          variant="light"
          onPress={resetErrorBoundary}
        >
          Повторить
        </Button>
      )}
    </div>
  </div>
);
