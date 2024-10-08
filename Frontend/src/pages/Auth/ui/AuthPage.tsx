import { Tab, Card, CardBody } from '@nextui-org/react';
import { LoginForm, RegistrationForm, useFormAuth } from '@/widgets/auth';
import { Tabs } from '@/shared/ui';

export const AuthPage = () => {
  const formStatus = useFormAuth(state => state.status);
  const setFormStatus = useFormAuth(state => state.setStatus);

  return (
    <div className="flex justify-center items-center w-full h-svh px-2">
      <div className='min-h-[520px] flex flex-col items-center gap-4'>
        <h1 className="text-3xl text-blue-600 font-bold">Authorization</h1>
        <Card className="max-w-full w-[370px] min-h-[300px]">
          <CardBody className="overflow-hidden">
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
          </CardBody>
        </Card>
      </div>
    </div>
  );
};
