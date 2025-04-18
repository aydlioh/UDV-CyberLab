import { PasswordInput } from '@/features/inputs';
import { StatusSwitcher, useStatusSwitcher } from '@/features/status-switcher';
import { registerSchema, useRegister } from '@/entities/user';
import { Button, Input, Spinner } from '@/shared/ui';
import { Link } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

type RegisterType = z.infer<typeof registerSchema>;

export const RegistrationForm = () => {
  const { userStatus } = useStatusSwitcher();
  const { register, isPending, error } = useRegister();

  const {
    register: registerInput,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterType>({
    resolver: zodResolver(registerSchema),
  });

  const onReset = () => {
    reset({
      email: '',
      password: '',
    });
  };

  const onSubmit: SubmitHandler<RegisterType> = data => {
    register({ ...data, role: Number(userStatus) }).then(onReset);
  };

  const isEmailError = errors.email !== undefined || Boolean(error);
  const isLoginError = errors.email !== undefined || Boolean(error);
  const isPasswordError = errors.password !== undefined || Boolean(error);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-3 justify-between"
    >
      <StatusSwitcher />
      <Input
        isRequired
        isInvalid={isLoginError}
        errorMessage={errors.userName?.message}
        {...registerInput('userName')}
        label="Login"
        placeholder="Введите логин"
        type="text"
        autoComplete="username"
      />
      <Input
        isRequired
        isInvalid={isEmailError}
        errorMessage={errors.email?.message}
        {...registerInput('email')}
        label="E-mail"
        placeholder="Введите почту"
        type="email"
        autoComplete="email"
      />
      <PasswordInput
        isRequired
        isInvalid={isPasswordError}
        errorMessage={errors.password?.message || error?.message}
        {...registerInput('password')}
        label="Password"
        placeholder="Введите пароль"
        type="password"
        autoComplete="new-password"
      />
      <Button
        color="gradient"
        type="submit"
        fullWidth
        isDisabled={isPending}
        startContent={isPending ? <Spinner size="sm" color="white" /> : null}
      >
        Зарегистрироваться
      </Button>
      <p className="text-small">
        Уже есть аккаунт?{' '}
        <Link
          to="/login"
          className="text-link duration-200 hover:text-orange custom-outline outline-offset-4 rounded-sm"
        >
          Войти
        </Link>
      </p>
    </form>
  );
};
