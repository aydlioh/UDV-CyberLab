import { AuthBackground } from '@/shared/assets/images';
import { Outlet } from 'react-router-dom';

export const AuthLayout = () => {
  return (
    <main className="flex xl:auth-container items-center w-full h-svh">
      <div className="flex flex-row xl:justify-between justify-center w-full relative">
        <div className="h-[600px] sm:w-[510px] w-full">
          <Outlet />
        </div>
        <div className="w-full xl:flex hidden flex-row justify-end">
          <div className="text-orange font-w3ip flex flex-col z-10">
            <h2 className="text-4xl">NEO-Lab</h2>
            <p className="text-[22px]">Модуль тестирования</p>
          </div>
          <div className="absolute -bottom-[90px] -right-[82px]">
            <img
              src={AuthBackground}
              alt="Auth"
              className="w-[980px] select-none pointer-events-none"
            />
          </div>
        </div>
      </div>
    </main>
  );
};
