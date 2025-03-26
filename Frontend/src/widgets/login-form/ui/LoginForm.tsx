import { PasswordInput } from '@/features/inputs';
import { StatusSwitcher, useStatusSwitcher } from '@/features/status-switcher';
import { loginSchema, useLogin } from '@/entities/user';
import { Button, Input, Spinner } from '@/shared/ui';
import { Link } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

type LoginType = z.infer<typeof loginSchema>;

export const LoginForm = () => {
  const { userStatus } = useStatusSwitcher();
  const { login, isPending, error } = useLogin();

  const {
    register: registerInput,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginType>({
    resolver: zodResolver(loginSchema),
  });

  const onReset = () => {
    reset({
      email: '',
      password: '',
    });
  };

  const onSubmit: SubmitHandler<LoginType> = data => {
    login({ ...data, role: Number(userStatus) }).then(onReset);
  };

  const isEmailError = errors.email !== undefined || Boolean(error);
  const isPasswordError = errors.password !== undefined || Boolean(error);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
      <StatusSwitcher />
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
      <p>
        <span className="text-small duration-200 hover:text-orange cursor-pointer">
          Забыли пароль?
        </span>
      </p>
      <Button
        color="gradient"
        startContent={isPending ? <Spinner size="sm" color="white" /> : null}
        type="submit"
        fullWidth
        isDisabled={isPending}
      >
        Вход
      </Button>
      <p className="text-small">
        Ещё нет аккаунта?{' '}
        <Link
          to="/registration"
          className="text-link duration-200 hover:text-orange custom-outline outline-offset-4 rounded-sm"
        >
          Зарегистрироваться
        </Link>
      </p>
    </form>
  );
};
