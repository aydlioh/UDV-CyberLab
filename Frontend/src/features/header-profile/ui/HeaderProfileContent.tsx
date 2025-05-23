import { useAuth, UserCard } from '@/entities/user';
import { useLogoutModal } from '@/features/logout-modal';
import { Button } from '@/shared/ui';
import { Divider } from '@nextui-org/react';
import { CiLogout } from 'react-icons/ci';

export const HeaderProfileContent = ({
  setPopoverOpen,
}: {
  setPopoverOpen?: (open: boolean) => void;
}) => {
  const logout = useLogoutModal(state => state.open);
  const user = useAuth(state => state.user);

  const handleLogout = () => {
    setPopoverOpen?.(false);
    logout();
  };

  if (!user) return null;

  return (  
    <div>
      <UserCard
        role={user.role}
        login={user.userName}
        email={user.email}
        // TODO: Image
      />
      <Divider className="my-1 bg-background" />
      <Button
        onPress={handleLogout}
        startContent={<CiLogout size={22} />}
        color="danger"
        className="data-[hover=true]:bg-rose-500/10"
        type="button"
        fullWidth
        variant="light"
        size="md"
        radius="sm"
      >
        Выйти
      </Button>
    </div>
  );
};
