import { ProjectList } from '@/widgets/project-list';
import { useProjectList } from '@/entities/project';
// import { useQueryState } from 'nuqs';

const MyProjectsPage = () => {
  const { data } = useProjectList();
  // const [sort] = useQueryState('sort', { defaultValue: '' });

  return (
    <div>
      <ProjectList projects={data} />
    </div>
  );
};

export default MyProjectsPage;
