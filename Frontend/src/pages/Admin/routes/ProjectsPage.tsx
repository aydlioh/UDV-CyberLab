import { useProjectList } from '@/entities/project';
import { ProjectSorting } from '@/entities/sorting';
import { StickySearch } from '@/shared/common/components';
import { AdminProjectList } from '@/widgets/admin-project-list';

const ProjectsPage = () => {
  const { data } = useProjectList(ProjectSorting.high_views);
  // const [search] = useQueryState('search', { defaultValue: '' });

  return (
    <section className="w-full max-w-[712px] flex flex-col gap-4 mb-20">
      <StickySearch placeholder="Поиск проекта..." />
      <AdminProjectList projects={data} />
    </section>
  );
};

export default ProjectsPage;
