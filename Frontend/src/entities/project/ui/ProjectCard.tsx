import { Card } from '@/shared/ui';
import { ProjectCardDTO } from '../model/dto/ProjectCardDTO';
import { ProjectStats } from './ProjectStats';
import { ProjectRating } from './ProjectRating';
import { Image } from '@nextui-org/react';
import { useMemo } from 'react';
import { useMediaQuery } from '@/shared/hooks';

type ProjectCardProps = {
  onClick?: () => void;
  project: ProjectCardDTO;
  type: 'row' | 'card';
};

export const ProjectCard = ({ project, onClick, type }: ProjectCardProps) => {
  const isMobile = useMediaQuery({query: '(max-width: 640px)'});

  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      onClick?.();
    }
  };

  const isRow = useMemo(() => type === 'row', [type]);

  if (isRow && !isMobile) {
    return (
      <Card
        tabIndex={0}
        onClick={onClick}
        onKeyDown={handleKeyPress}
        className="drop-shadow-base hover:bg-white/80 transition-colors cursor-pointer custom-outline py-[22px] px-[30px] rounded-[12px] h-[207px] w-full"
      >
        <div className="flex flex-row gap-5 h-full">
          <div className="h-[160px] max-w-[160px] w-full">
            <Image
              shadow="sm"
              radius="md"
              isBlurred={true}
              src={project.photo}
              alt={project.title}
              className="overflow-hidden object-cover object-center h-full w-full"
              classNames={{
                wrapper: '!max-w-[160px] h-full',
              }}
            />
          </div>

          <div className="flex flex-col w-full">
            <p className="font-medium text-sm mb-4">{project.title}</p>
            <p className="text-xs line-clamp-6">{project.shortDescription}</p>
            <div className="mt-auto flex flex-row justify-between items-center">
              <p className="text-xs">Автор: {project.author}</p>
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
      </Card>
    );
  }

  return (
    <Card
      tabIndex={0}
      onClick={onClick}
      onKeyDown={handleKeyPress}
      className="drop-shadow-base hover:bg-white/80 transition-colors cursor-pointer custom-outline py-[10px] px-[24px] rounded-[12px] md:h-[331px] h-[430px] w-full"
    >
      <div className="flex flex-col gap-[10px] h-full">
        <p className="font-medium text-sm text-center">{project.title}</p>
        <Image
          shadow="sm"
          radius="md"
          isBlurred={true}
          src={project.photo}
          alt={project.title}
          className="w-full md:h-[160px] sm:h-[220px] h-[260px] overflow-hidden object-cover object-center"
          classNames={{
            wrapper: '!max-w-full',
          }}
        />

        <p className="text-xs line-clamp-4">{project.shortDescription}</p>
        <div className="mt-auto flex flex-col">
          <p className="text-xs line-clamp-4">Автор: {project.author}</p>
          <div className="flex justify-between items-center">
            <ProjectRating rating={project.rating} />
            <ProjectStats
              commentsCount={project.commentsCount}
              viewsCount={project.viewsCount}
            />
          </div>
        </div>
      </div>
    </Card>
  );
};
