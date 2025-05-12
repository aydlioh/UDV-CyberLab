import { useProjectList } from '@/entities/project';
import { ProjectList } from '@/widgets/project-list';

const ProjectsPage = () => {
  const { data } = useProjectList();

  return (
    <section className='mt-4 mb-20'>
      <ProjectList projects={data} />
    </section>
  );
};

export default ProjectsPage;
