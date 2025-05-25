import { Modal, ModalContent } from '@/shared/ui';
import { useDeleteModal } from '../model/store';
import { ProjectDeleteForm } from './ProjectDeleteForm';

export const ProjectDeleteModal = () => {
  const { isOpen, setOpen } = useDeleteModal();

  return (
    <Modal placement="center" isOpen={isOpen} onOpenChange={setOpen} size="md">
      <ModalContent>
        <ProjectDeleteForm />
      </ModalContent>
    </Modal>
  );
};
