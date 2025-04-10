import { Card } from '@/shared/ui';
import { ProjectCardDTO } from '../model/dto/ProjectCardDTO';
import { ProjectStats } from './ProjectStats';
import { ProjectRating } from './ProjectRating';

type ProjectCardProps = {
  onClick?: () => void;
  project: ProjectCardDTO;
};

export const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      onClick?.();
    }
  };

  return (
    <Card
      tabIndex={0}
      onClick={onClick}
      onKeyDown={handleKeyPress}
      className="drop-shadow-base hover:bg-white/80 duration-250 cursor-pointer custom-outline py-[10px] px-[24px] rounded-[12px] h-[331px] w-full"
    >
      <div className="flex flex-col gap-[10px] h-full">
        <p className="font-medium text-sm text-center">{project.title}</p>
        <div className="w-full h-[160px] rounded-md overflow-hidden drop-shadow-base">
          <img
            src={project.photo}
            alt={project.title}
            className="h-full w-full object-cover object-center bg-background"
          />
        </div>
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
