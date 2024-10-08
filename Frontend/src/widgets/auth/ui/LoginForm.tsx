import { Button, Input, Link } from '@nextui-org/react';
import { useFormAuth } from '../store';
import { useAuth } from '@/entities/auth';
import { useNavigate } from 'react-router-dom';
import { PasswordInput } from '@/features/auth';

export const LoginForm = () => {
  const switchToRegistration = useFormAuth(state => state.switchToRegistration);

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
      <Input
        isRequired
        label="Email"
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
      <div className="flex gap-2 justify-end">
        <Button type="submit" fullWidth color="primary">
          Войти
        </Button>
      </div>
      <p className="text-center text-small">
        Все еще нет аккаунта?{' '}
        <Link
          size="sm"
          onPress={switchToRegistration}
          className="cursor-pointer"
        >
          Зарегистрироваться
        </Link>
      </p>
    </form>
  );
};
