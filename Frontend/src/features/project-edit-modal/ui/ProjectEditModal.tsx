import { Modal } from '@/shared/ui';
import { useProjectEditModal } from '../model/store';
import { ProjectEditContent } from './ProjectEditContent';

export const ProjectEditModal = () => {
  const { isOpen, setOpen } = useProjectEditModal();

  return (
    <Modal
      placement="top"
      isOpen={isOpen}
      onOpenChange={setOpen}
      size="lg"
      classNames={{
        wrapper: 'without-scrollbar',
      }}
    >
      <ProjectEditContent />
    </Modal>
  );
};
