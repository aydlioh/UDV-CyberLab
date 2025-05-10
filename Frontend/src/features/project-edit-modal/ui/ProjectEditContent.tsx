import { ModalBody, ModalContent } from '@/shared/ui';
import { ProjectEditForm } from './ProjectEditForm/ProjectEditForm';
import { useProjectEditModal } from '../model/store';

export const ProjectEditContent = () => {
  const { options } = useProjectEditModal();

  // if (!data) {
  //   return (
  //     <ModalContent>
  //       <ModalSpinner />
  //     </ModalContent>
  //   );
  // }

  return (
    <ModalContent>
      <ModalBody>
        <section className="w-full flex flex-col sm:gap-[80px] gap-[15px]">
          <ProjectEditForm
            label={
              options?.isEditing
                ? 'Редактирование проекта'
                : 'Добавление проекта'
            }
            data={options}
          />
        </section>
      </ModalBody>
    </ModalContent>
  );
};
