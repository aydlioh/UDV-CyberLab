import { ProjectList } from '@/widgets/project-list';
import { useProjectList } from '@/entities/project';
// import { useQueryState } from 'nuqs';

const MyProjectsPage = () => {
  const { data } = useProjectList();
  // const [sort] = useQueryState('sort', { defaultValue: '' });

  return (
    <section className="mt-4 mb-20">
      <ProjectList projects={data} />
    </section>
  );
};

export default MyProjectsPage;
