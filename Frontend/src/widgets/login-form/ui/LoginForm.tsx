import { Link } from 'react-router-dom';
import { Button, Input } from '@/shared/ui';
import { UserStatus } from '@/entities/auth';
import { useState } from 'react';
import { StatusSwitcher } from '@/features/status-switcher';
import { PasswordInput } from '@/features/password-input';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '../schema';
import { useLogin } from '../mutation';
import { z } from 'zod';

type LoginType = z.infer<typeof loginSchema>

export const LoginForm = () => {
  const [userStatus, setUserStatus] = useState<UserStatus>(UserStatus.STUDENT);
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
    login({ ...data, role: userStatus }).then(onReset);
  };

  const isEmailError = errors.email !== undefined || Boolean(error);
  const isPasswordError = errors.password !== undefined || Boolean(error);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
      <StatusSwitcher status={userStatus} setStatus={setUserStatus} />
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
      <Button type="submit" fullWidth isDisabled={isPending}>
        Войти
      </Button>
      <p className="text-small">
        Ещё нет аккаунта?{' '}
        <Link
          to="/registration"
          className="text-link duration-200 hover:text-orange"
        >
          Зарегистрироваться
        </Link>
      </p>
    </form>
  );
};