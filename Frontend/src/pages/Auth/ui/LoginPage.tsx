import { LoginForm } from '@/widgets/login-form';

export const LoginPage = () => {
  return (
    <section className="sm:py-[50px] py-[30px] h-full w-full sm:px-[71px] mobile:px-[36px] px-[30px] rounded-[35px] bg-white flex justify-center">
      <div className="z-10">
        <h1 className="text-[24px] mb-5 text-center">Авторизация</h1>
        <LoginForm />
      </div>
    </section>
  );
};