import { Button, Input, Link } from '@nextui-org/react';
import { useFormAuth } from '../store';
import { PasswordInput } from './PasswordInput';

export const RegistrationForm = () => {
  const switchToLogin = useFormAuth(state => state.switchToLogin);

  return (
    <form className="flex flex-col gap-4 justify-between">
      <Input
        isRequired
        label="Email"
        placeholder="Введите почту"
        autoComplete="current-email"
        type="email"
      />
      <Input isRequired label="Name" placeholder="Введите имя" type="text" />
      <Input
        isRequired
        label="Surname"
        placeholder="Введите фамилию"
        type="text"
      />
      <PasswordInput
        isRequired
        label="Password"
        placeholder="Введите пароль"
        autoComplete="current-password"
        type="password"
      />
      <div className="flex gap-2 justify-end">
        <Button type="submit" fullWidth color="primary">
          Зарегистрироваться
        </Button>
      </div>
      <p className="text-center text-small">
        Уже есть аккаунт?{' '}
        <Link size="sm" onPress={switchToLogin} className="cursor-pointer">
          Войти
        </Link>
      </p>
    </form>
  );
};
