import { useProjectList } from '@/entities/project';
import { ProjectList } from '@/widgets/project-list';
// import { useQueryState } from 'nuqs';

const ProjectsPage = () => {
  // const [sort, setSort] = useQueryState('sort', { defaultValue: '' });
  const { data } = useProjectList();

  return (
    <section className="mt-4 mb-20">
      <ProjectList projects={data} />
    </section>
  );
};

export default ProjectsPage;
