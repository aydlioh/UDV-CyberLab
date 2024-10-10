import { RegistrationForm } from '@/widgets/auth';

export const RegistrationPage = () => {
  return (
    <section className="py-[50px] h-full w-full px-[71px] sm:rounded-[35px] bg-white flex">
      <div className="z-10">
        <h1 className="text-2xl">Регистрация</h1>
        <RegistrationForm />
      </div>
    </section>
  );
};
