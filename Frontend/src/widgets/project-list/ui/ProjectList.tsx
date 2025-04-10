import { ProjectCard, ProjectCardDTO } from '@/entities/project';
import { useListFormat } from '@/features/list-format-switcher/model/store';
import { useNavigate } from 'react-router-dom';

type ProjectListProps = {
  projects: ProjectCardDTO[];
};

export const ProjectList = ({ projects }: ProjectListProps) => {
  const navigate = useNavigate();
  const format = useListFormat(state => state.format);
  console.log(format);

  const handleNavigate = (id: string) => {
    navigate(`/projects/${id}`);
  };

  return (
    <ul className="grid grid-cols-3 gap-2 mt-6 mb-20">
      {projects.map(project => (
        <li key={project.id}>
          <ProjectCard
            onClick={() => handleNavigate(project.id)}
            project={project}
          />
        </li>
      ))}
    </ul>
  );
};
