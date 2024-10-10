import { LoginForm } from '@/widgets/auth';

export const LoginPage = () => {
  return (
    <section className="py-[50px] h-full w-full px-[71px] sm:rounded-[35px] bg-white flex">
      <div className="z-10">
        <h1 className="text-2xl mb-5 text-center">Авторизация</h1>
        <LoginForm />
      </div>
    </section>
  );
};
