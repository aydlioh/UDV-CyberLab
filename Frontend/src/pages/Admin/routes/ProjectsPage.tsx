import { QueryBoundary, StickySearch } from '@/shared/common/components';
import { Spinner } from '@/shared/ui';
import { AdminProjectListWithQuery } from '@/widgets/admin-project-list';
import { useQueryState } from 'nuqs';

const ProjectsPage = () => {
  const [search] = useQueryState('search', { defaultValue: '' });

  return (
    <section className="w-full max-w-[712px] flex flex-col gap-4 mb-20">
      <StickySearch placeholder="Поиск проекта..." />
      <QueryBoundary
        fallbackLoader={
          <div className="flex justify-center items-center w-full mt-20">
            <Spinner size="page" color="primary" />
          </div>
        }
      >
        <AdminProjectListWithQuery search={search} />
      </QueryBoundary>
    </section>
  );
};

export default ProjectsPage;
