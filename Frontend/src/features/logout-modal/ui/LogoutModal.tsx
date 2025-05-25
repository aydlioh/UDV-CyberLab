import { Button, Modal, ModalBody, ModalContent, UserImage } from '@/shared/ui';
import { useLogoutModal } from '../model/store';
import { useAuth, UserRole, useUser } from '@/entities/user';
import { Divider } from '@nextui-org/react';

export const LogoutModal = () => {
  const user = useUser();
  const { isOpen, setOpen } = useLogoutModal();
  const logout = useAuth(state => state.logout);

  const handleLogout = () => {
    logout();
    setOpen(false);
  };

  const handleReturn = () => {
    setOpen(false);
  };

  return (
    <Modal placement="center" isOpen={isOpen} onOpenChange={setOpen} size="md">
      <ModalContent>
        <ModalBody className="py-5 px-10">
          <div>
            <p className="text-[22px] text-center">Выйти из аккаунта?</p>
            {user && (
              <div className="flex flex-col items-center my-2">
                <UserImage username={user.userName} size="lg" />
                <div className="text-center">
                  <p className="text-[16px] font-bold">{user.userName}</p>
                  <p className="text-[12px] text-foreground/80">{user.email}</p>
                  {user.role === UserRole.ADMIN && (
                    <p className="text-green-500 font-bold">Администратор</p>
                  )}
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-row gap-4 items-center justify-center">
            <Button
              color="danger"
              size="md"
              radius="sm"
              className="w-1/2 text-white bg-red-500"
              onPress={handleLogout}
            >
              Выйти
            </Button>
            <Divider orientation="vertical" className="h-12 bg-foreground/30" />

            <Button
              className="w-1/2"
              size="md"
              radius="sm"
              variant="bordered"
              onPress={handleReturn}
            >
              Отмена
            </Button>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
