import { Card, Image } from '@nextui-org/react';
import { ProjectDTO } from '../model/dto/ProjectDTO';
import { ProjectRating } from './ProjectRating';
import { ProjectStats } from './ProjectStats';
import { useSuspenseProjectFiles } from '../api/queries/useProjectFiles';

export const ProjectDetailsCard = ({ project }: { project: ProjectDTO }) => {
  const {
    data: { logo, documentation },
  } = useSuspenseProjectFiles(project.id);

  const onFileDownload = (fileName = 'document') => {
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

  return (
    <Card className="drop-shadow-base custom-outline py-[30px] px-[30px] max-w-[712px] rounded-[12px] w-full">
      <div className="flex flex-row gap-7 h-full">
        <div className="h-[160px] max-w-[160px] w-full">
          <Image
            shadow="sm"
            radius="md"
            // isLoading={isLoading || !imgSrc}
            isBlurred={true}
            src={logo}
            alt={project.name}
            className="overflow-hidden object-cover object-center h-full w-full"
            classNames={{
              wrapper: '!max-w-[160px] h-full',
            }}
          />
        </div>

        <div className="flex flex-col w-full">
          <h2 className="font-medium text-2xl mb-4 break-words">
            {project.name}
          </h2>
          <p className="text-sm line-clamp-6 break-words">
            {project.shortDescription}
          </p>
          <div className="mt-auto flex flex-row justify-between items-center">
            <p className="text-xs">Автор: {project.ownerName}</p>
            <div className="flex flex-row gap-7 justify-between items-center">
              <ProjectRating rating={project.rating} />
              <ProjectStats
                commentsCount={project.commentsCount}
                viewsCount={project.viewsCount}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 text-sm break-words">{project.description}</div>

      <div>{/* Photos */}</div>

      <div className="mt-6">
        <ul className="list-disc text-sm flex flex-col text-blue-500 gap-2 pl-6">
          <li>
            <a
              onClick={() => onFileDownload(project.name)}
              className="hover:underline cursor-pointer"
            >
              Скачать документацию
            </a>
          </li>
          <li>
            <a
              href={project.landingURL}
              target="_blank"
              className="hover:underline cursor-pointer"
            >
              Демонстрация проекта
            </a>
          </li>
        </ul>
      </div>
    </Card>
  );
};
