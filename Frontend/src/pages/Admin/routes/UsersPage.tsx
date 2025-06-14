import { UserDeleteModal } from '@/features/user-delete-modal';
import { QueryBoundary, StickySearch } from '@/shared/common/components';
import { Spinner } from '@/shared/ui';
import { AdminUserListWithQuery } from '@/widgets/admin-user-list';
import { useQueryState } from 'nuqs';

const UsersPage = () => {
  const [search] = useQueryState('search', { defaultValue: '' });

  return (
    <section className="w-full max-w-[712px] flex flex-col gap-4 mb-20">
      <StickySearch placeholder="Поиск пользователя..." />
      <QueryBoundary
        fallbackLoader={
          <div className="flex justify-center items-center w-full mt-20">
            <Spinner size="page" color="primary" />
          </div>
        }
      >
        <AdminUserListWithQuery search={search} />
      </QueryBoundary>

      <UserDeleteModal />
    </section>
  );
};

export default UsersPage;
