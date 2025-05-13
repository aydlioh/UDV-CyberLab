import { ProjectDTO, useProjectFiles } from '@/entities/project';
import { SiGoogledocs } from 'react-icons/si';
import { CgWebsite } from 'react-icons/cg';
import { ProjectDetailsButton } from './ProjectDetailsButton';

export const ProjectDetailsActions = ({
  project,
}: {
  project: Pick<ProjectDTO, 'landingURL' | 'name' | 'id'>;
}) => {
  const {
    data: { documentation },
  } = useProjectFiles(project.id);

  const handleDocsOpen = (fileName = 'document') => {
    const [header, base64Data] = documentation.split(';base64,');
    const mimeType = header.split(':')[1];

    const bytes = Uint8Array.from(atob(base64Data), c => c.charCodeAt(0));
    const blob = new Blob([bytes], { type: mimeType });

    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
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
        onClick={() => handleDocsOpen(project.name)}
        label="Скачать документацию"
        icon={SiGoogledocs}
      />
    </div>
  );
};
