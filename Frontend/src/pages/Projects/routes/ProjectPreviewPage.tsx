import { useParams } from 'react-router-dom';
import { ProjectDetailsCard, useProjectDetails } from '@/entities/project';
import { BackButton } from '@/shared/ui';
import { ProjectDetailsActions } from '@/features/project-details-button';
import { ProjectComments } from '@/widgets/project-comments';

const ProjectPreviewPage = () => {
  const { projectId = '' } = useParams();
  const { data } = useProjectDetails(projectId);

  return (
    <section className="w-full max-w-[712px] flex flex-col gap-1 items-start mb-20">
      <div className="flex flex-row justify-between w-full">
        <BackButton />
        <ProjectDetailsActions project={data} />
      </div>
      <div className="flex flex-col gap-6">
        <ProjectDetailsCard project={data} />
        <ProjectComments projectId={data.id} />
      </div>
    </section>
  );
};

export default ProjectPreviewPage;
