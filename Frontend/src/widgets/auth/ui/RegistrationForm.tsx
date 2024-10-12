import { Link, useNavigate } from 'react-router-dom';
import { Button, Input } from '@/shared/ui';
import { useState } from 'react';
import { STUDENT, UserStatus } from '../constants';
import { StatusSwitcher } from './StatusSwitcher';
import { PasswordInput } from './PasswordInput';

export const RegistrationForm = () => {
  const [userStatus, setUserStatus] = useState<UserStatus>(STUDENT);

  const navigate = useNavigate();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (e: any) => {
    e.preventDefault();
    navigate('/login');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 justify-between"
    >
      <StatusSwitcher status={userStatus} setStatus={setUserStatus} />
      <Input
        isRequired
        label="Login"
        placeholder="Введите логин"
        type="text"
        autoComplete="current-login"
      />
      <Input
        isRequired
        label="E-mail"
        placeholder="Введите почту"
        type="email"
        autoComplete="current-email"
      />
      <PasswordInput
        isRequired
        label="Password"
        autoComplete="current-password"
        placeholder="Введите пароль"
        type="password"
      />
      <Button type="submit" fullWidth>
        Зарегистрироваться
      </Button>
      <p className="text-small">
        Уже есть аккаунт?{' '}
        <Link
          to="/login"
          className="text-link duration-200 hover:text-orange"
        >
          Войти
        </Link>
      </p>
    </form>
  );
};
