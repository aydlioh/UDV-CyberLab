import { ProjectCard, ProjectCardDTO } from '@/entities/project';
import { useListFormat } from '@/features/list-format-switcher/model/store';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';

type ProjectListProps = {
  projects: ProjectCardDTO[];
};

export const ProjectList = ({ projects }: ProjectListProps) => {
  const navigate = useNavigate();
  const format = useListFormat(state => state.format);

  const handleNavigate = (id: string) => {
    navigate(`/projects/${id}`);
  };

  return (
    <ul
      className={clsx('grid gap-2 mt-6 mb-20', {
        'md:grid-cols-3 sm:grid-cols-2': format === 'grid',
      })}
    >
      {projects.map(project => (
        <li key={project.id}>
          <ProjectCard
            type={format === 'rows' ? 'row' : 'card'}
            onClick={() => handleNavigate(project.id)}
            project={project}
          />
        </li>
      ))}
    </ul>
  );
};
