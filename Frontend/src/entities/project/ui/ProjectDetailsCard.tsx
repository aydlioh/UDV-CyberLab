import { Card, Image } from '@nextui-org/react';
import { ProjectDTO } from '../model/dto/ProjectDTO';
import { ProjectRating } from './ProjectRating';
import { ProjectStats } from './ProjectStats';

export const ProjectDetailsCard = ({ project }: { project: ProjectDTO }) => {
  // const { isLoading, data: imgSrc } = useFileSrc(project.logoPath);

  return (
    <Card className="drop-shadow-base hover:bg-white/80 transition-colors  custom-outline py-[22px] px-[30px] max-w-[712px] rounded-[12px] w-full">
      <div className="flex flex-row gap-7 h-full">
        <div className="h-[160px] max-w-[160px] w-full">
          <Image
            shadow="sm"
            radius="md"
            // isLoading={isLoading || !imgSrc}
            isBlurred={true}
            // src={imgSrc}
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

      <div className="mt-10 text-sm break-words">
        {project.description}{' '}
        wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
      </div>

      <div>{/* Photos */}</div>

      <div className="mt-6">
        <ul className="list-disc text-sm flex flex-col text-blue-500 gap-2 pl-6">
          <li>
            <a
              href={project.documentation}
              download
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
