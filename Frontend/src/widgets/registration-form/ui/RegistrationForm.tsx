import { PasswordInput } from '@/features/password-input';
import { StatusSwitcher } from '@/features/status-switcher';
import { UserStatus } from '@/entities/auth';
import { Button, Input } from '@/shared/ui';
import { registerSchema } from '../schema';
import { useRegister } from '../mutation';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

type RegisterType = z.infer<typeof registerSchema>;

export const RegistrationForm = () => {
  const [userStatus, setUserStatus] = useState<UserStatus>(UserStatus.STUDENT);
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
    register({ ...data, role: userStatus }).then(onReset);
  };

  const isEmailError = errors.email !== undefined || Boolean(error);
  const isLoginError = errors.email !== undefined || Boolean(error);
  const isPasswordError = errors.password !== undefined || Boolean(error);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-3 justify-between"
    >
      <StatusSwitcher status={userStatus} setStatus={setUserStatus} />
      <Input
        isRequired
        isInvalid={isLoginError}
        errorMessage={errors.login?.message}
        {...registerInput('login')}
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
      <Button type="submit" fullWidth isDisabled={isPending}>
        Зарегистрироваться
      </Button>
      <p className="text-small">
        Уже есть аккаунт?{' '}
        <Link to="/login" className="text-link duration-200 hover:text-orange">
          Войти
        </Link>
      </p>
    </form>
  );
};
