import { ProjectList } from '@/widgets/project-list';
import { projectsListMock } from './_MOCKS';

const MyProjectsPage = () => {
  return (
    <div>
      <ProjectList projects={projectsListMock} />
    </div>
  );
};

export default MyProjectsPage;
