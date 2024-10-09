import { RegistrationForm } from './RegistrationForm';
import { LoginForm } from './LoginForm';
import { Tabs } from '@/shared/ui';
import { Tab } from '@nextui-org/react';
import { useFormAuth } from '@/widgets/auth';

export const Authorization = () => {
  const formStatus = useFormAuth(state => state.status);
  const setFormStatus = useFormAuth(state => state.setStatus);

  return (
    <Tabs
      fullWidth
      aria-label="Tabs form"
      selectedKey={formStatus}
      onSelectionChange={key => setFormStatus(key as typeof formStatus)}
    >
      <Tab key="login" title="Вход">
        <LoginForm />
      </Tab>
      <Tab key="registration" title="Регистрация">
        <RegistrationForm />
      </Tab>
    </Tabs>
  );
};
