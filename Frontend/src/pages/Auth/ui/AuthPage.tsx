import { Authorization } from '@/widgets/auth';
import { Card, CardBody } from '@nextui-org/react';

export const AuthPage = () => {
  return (
    <div className="flex justify-center items-center w-full h-svh px-2">
      <div className="min-h-[520px] flex flex-col items-center gap-4">
        <h1 className="text-3xl text-blue-600 font-bold">Authorization</h1>
        <Card className="max-w-full w-[370px] min-h-[300px]">
          <CardBody className="overflow-hidden">
            <Authorization />
          </CardBody>
        </Card>
      </div>
    </div>
  );
};
