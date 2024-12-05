import { Code } from '@nextui-org/react';
import { BsBuildingsFill } from 'react-icons/bs';
import { IoSettingsSharp } from 'react-icons/io5';

export const DevelopmentPage = ({ path }: { path: string }) => {
  return (
    <section className="flex justify-center mt-20">
      <div className="bg-header px-5 py-10 rounded-lg w-full max-w-[400px] flex flex-col items-center gap-8">
        <BsBuildingsFill size={100} />
        <div className="flex flex-col gap-1 items-center">
          <h3 className="font-w3ip font-semibold text-[22px] capitalize flex flex-row gap-1 items-center">
            In development
            <IoSettingsSharp className="animate-spin duration-500" />
          </h3>

          <p className="text-foreground/80 text-center px-10">
            Страница{' '}
            {path && (
              <Code className="bg-background text-foreground">{path}</Code>
            )}{' '}
            находится в разработке
          </p>
        </div>
      </div>
    </section>
  );
};
