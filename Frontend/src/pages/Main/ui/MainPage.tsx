import { Button } from '@nextui-org/react';
import { useBears } from '../store';

export const MainPage = () => {
  const bears = useBears(state => state.bears);
  const increasePopulation = useBears(state => state.increasePopulation);

  return (
    <section className="h-svh flex">
      <div className='m-auto flex justify-center items-center flex-col gap-4'>
        <h1 className="text-6xl font-bold">{bears}</h1>
        <Button
          color="primary"
          size="lg"
          className="w-40"
          onClick={increasePopulation}
          radius="sm"
        >
          Увеличить
        </Button>
      </div>
    </section>
  );
};
