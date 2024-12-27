import { Button, Modal, ModalBody, ModalContent } from '@/shared/ui';
import { useLogoutModal } from '../model/store';
import { useAuth } from '@/entities/user';
import { Divider } from '@nextui-org/react';

export const LogoutModal = () => {
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
    <Modal placement='center' isOpen={isOpen} onOpenChange={setOpen} size="md">
      <ModalContent>
        <ModalBody className="py-5 px-10">
          <p className="text-[22px] mb-5 text-center">Выйти из аккаунта?</p>
          <div className="flex flex-row gap-4 items-center justify-center">
            <Button
              color="danger"
              size="md"
              className="w-1/2 text-white bg-rose-500"
              onPress={handleLogout}
            >
              Выйти
            </Button>
            <Divider orientation="vertical" className="h-12 bg-foreground/30" />

            <Button
              className="w-1/2"
              size="md"
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
