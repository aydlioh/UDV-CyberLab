import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
import { ProjectCard, ProjectCardDTO } from '@/entities/project';
import { useAuth } from '@/entities/user';
import { useListFormat } from '@/features/list-format-switcher/model/store';
import { ProjectEditButton } from '@/features/project-edit-button';
import { useProjectEditModal } from '@/features/project-edit-modal';

type ProjectListProps = {
  projects: ProjectCardDTO[];
};

export const ProjectList = ({ projects }: ProjectListProps) => {
  const open = useProjectEditModal(state => state.open);
  const user = useAuth(state => state.user);
  const navigate = useNavigate();
  const format = useListFormat(state => state.format);

  const handleNavigate = (id: string) => {
    navigate(`/projects/${id}`);
  };

  return (
    <>
      <ul
        className={clsx('grid gap-2', {
          'md:grid-cols-3 sm:grid-cols-2': format === 'grid',
        })}
      >
        {projects.map(project => (
          <li key={project.id}>
            <ProjectCard
              type={format === 'rows' ? 'row' : 'card'}
              onClick={() => handleNavigate(project.id)}
              project={project}
              actionSlot={
                user?.userName === project.ownerName && (
                  <ProjectEditButton
                    handleClick={() => open({ isEditing: true })}
                  />
                )
              }
            />
          </li>
        ))}
      </ul>
    </>
  );
};
