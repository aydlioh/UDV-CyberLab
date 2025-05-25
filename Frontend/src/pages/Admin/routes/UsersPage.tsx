import { StickySearch } from '@/shared/common/components';

const UsersPage = () => {
  // const [search] = useQueryState('search', { defaultValue: '' });

  return (
    <section className="w-full max-w-[712px] mb-20">
      <StickySearch placeholder="Поиск пользователя..." />
    </section>
  );
};

export default UsersPage;
