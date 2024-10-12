import { Link, useNavigate } from 'react-router-dom';
import { Button, Input } from '@/shared/ui';
import { useAuth } from '@/entities/auth';
import { useState } from 'react';
import { STUDENT, UserStatus } from '../constants';
import { StatusSwitcher } from './StatusSwitcher';
import { PasswordInput } from './PasswordInput';

export const LoginForm = () => {
  const [userStatus, setUserStatus] = useState<UserStatus>(STUDENT);

  const login = useAuth(state => state.login);
  const navigate = useNavigate();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (e: any) => {
    e.preventDefault();
    login();
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <StatusSwitcher status={userStatus} setStatus={setUserStatus} />
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
      <p>
        <span className="text-small duration-200 hover:text-orange cursor-pointer">
          Забыли пароль?
        </span>
      </p>
      <Button type="submit" fullWidth>
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
