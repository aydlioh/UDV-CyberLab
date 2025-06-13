import { StatusSwitcher, useRoleSwitcher } from '@/features/status-switcher';
import { loginSchema, useLogin } from '@/entities/user';
import { Button, Input, PasswordInput, Spinner } from '@/shared/ui';
import { Link } from 'react-router-dom';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

type LoginType = z.infer<typeof loginSchema>;

export const LoginForm = () => {
  const { userRole } = useRoleSwitcher();
  const { login, isPending, error } = useLogin();

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<LoginType>({
    resolver: zodResolver(loginSchema),
  });

  const onReset = () => {
    reset();
  };

  const onSubmit: SubmitHandler<LoginType> = data => {
    login({ ...data, role: Number(userRole) }).finally(onReset);
  };

  const isEmailError = errors.email !== undefined || Boolean(error);
  const isPasswordError = errors.password !== undefined || Boolean(error);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
      <StatusSwitcher />
      <Controller
        name="email"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Input
            isRequired
            isInvalid={isEmailError}
            errorMessage={errors.email?.message}
            {...field}
            label="E-mail"
            placeholder="Введите почту"
            type="email"
            autoComplete="email"
          />
        )}
      />

      <Controller
        name="password"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <PasswordInput
            isRequired
            isInvalid={isPasswordError}
            errorMessage={errors.password?.message || error?.message}
            {...field}
            label="Password"
            placeholder="Введите пароль"
            type="password"
            autoComplete="new-password"
          />
        )}
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
