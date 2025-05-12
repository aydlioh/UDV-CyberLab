import { ProjectDTO } from '@/entities/project';
import { SiGoogledocs } from 'react-icons/si';
import { CgWebsite } from 'react-icons/cg';
import { ProjectDetailsButton } from './ProjectDetailsButton';

export const ProjectDetailsActions = ({
  project,
}: {
  project: Pick<ProjectDTO, 'landingURL' | 'documentation'>;
}) => {
  const handleDocsOpen = () => {
    console.log('скачивание');
    // const docs = project.documentation;
    // const link = document.createElement('a');
    // link.href = docs;
    // link.setAttribute('download', docs.split('/').pop());
    // link.style.display = 'none';
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);
  };

  const handleProjectOpen = () => {
    window.open(project.landingURL, '_blank');
  };

  return (
    <div className="flex flex-row gap-1">
      <ProjectDetailsButton
        onClick={handleProjectOpen}
        label="Демонстрационный проект"
        icon={CgWebsite}
      />
      <ProjectDetailsButton
        onClick={handleDocsOpen}
        label="Скачать документацию"
        icon={SiGoogledocs}
      />
    </div>
  );
};
