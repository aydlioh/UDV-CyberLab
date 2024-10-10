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
        variant="bordered"
        isRequired
        label="E-mail"
        placeholder="Введите почту"
        type="email"
        autoComplete="current-email"
      />
      <PasswordInput
        variant="bordered"
        isRequired
        label="Password"
        autoComplete="current-password"
        placeholder="Введите пароль"
        type="password"
      />
      <p className="text-small">Забыли пароль?</p>
      <Button type="submit" fullWidth>
        Войти
      </Button>
      <p className="text-small">
        Ещё нет аккаунта?{' '}
        <Link
          to="/registration"
          className="text-link relative after:rounded-sm after:duration-200 after:w-0 after:h-0.5 hover:after:w-full after:left-1/2 hover:after:left-0 after:absolute after:-bottom-1  after:bg-link"
        >
          Зарегистрироваться
        </Link>
      </p>
    </form>
  );
};
