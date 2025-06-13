import { useUserList } from '@/entities/user';
import { UserDeleteModal } from '@/features/user-delete-modal';
import { StickySearch } from '@/shared/common/components';
import { AdminUserList } from '@/widgets/admin-user-list';

const UsersPage = () => {
  // const [search] = useQueryState('search', { defaultValue: '' });
  const { data } = useUserList();

  return (
    <section className="w-full max-w-[712px] flex flex-col gap-4 mb-20">
      <StickySearch placeholder="Поиск пользователя..." />
      <AdminUserList users={data} />
      <UserDeleteModal />
    </section>
  );
};

export default UsersPage;
