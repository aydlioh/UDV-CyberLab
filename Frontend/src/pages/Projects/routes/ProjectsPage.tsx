import { ProjectList } from '@/widgets/project-list';
import { projectsListMock } from './_MOCKS';

const ProjectsPage = () => {
  return (
    <div>
      <ProjectList projects={projectsListMock} />
    </div>
  );
};

export default ProjectsPage;
