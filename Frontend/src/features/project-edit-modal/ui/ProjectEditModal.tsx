import { Modal } from '@/shared/ui';
import { useProjectEditModal } from '../model/store';
import { ProjectEditContent } from './ProjectEditContent';

export const ProjectEditModal = () => {
  const { isOpen, close, setOpen } = useProjectEditModal();

  const handleClose = () => {
    setTimeout(close, 300);
  };

  return (
    <Modal
      placement="top"
      isOpen={isOpen}
      onOpenChange={setOpen}
      onClose={handleClose}
      size="lg"
      classNames={{
        wrapper: 'without-scrollbar',
      }}
    >
      <ProjectEditContent />
    </Modal>
  );
};
