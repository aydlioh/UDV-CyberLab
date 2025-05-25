import { useUserList } from '@/entities/user';
import { StickySearch } from '@/shared/common/components';
import { AdminUsersList } from '@/widgets/admin-users-list';

const UsersPage = () => {
  // const [search] = useQueryState('search', { defaultValue: '' });
  const { data } = useUserList();

  return (
    <section className="w-full max-w-[712px] flex flex-col gap-4 mb-20">
      <StickySearch placeholder="Поиск пользователя..." />
      <AdminUsersList users={data} />
    </section>
  );
};

export default UsersPage;
