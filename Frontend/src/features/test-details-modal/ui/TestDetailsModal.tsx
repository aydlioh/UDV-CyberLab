import { useTestDetailsModalStore } from '../model/store';
import { Modal } from '@/shared/ui';
import { TestDetailsContent } from './TestDetailsContent';

export const TestDetailsModal = () => {
  const { isOpen, close, setOpen, testId } = useTestDetailsModalStore();

  if (!testId) return null;

  const handleClose = () => {
    setTimeout(close, 300);
  };

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={setOpen}
      onClose={handleClose}
      size="lg"
    >
      <TestDetailsContent />
    </Modal>
  );
};
