import { useProjectList } from '@/entities/project';
import { ProjectList } from '@/widgets/project-list';

const ProjectsPage = () => {
  const { data } = useProjectList();

  return (
    <div>
      <ProjectList projects={data} />
    </div>
  );
};

export default ProjectsPage;
