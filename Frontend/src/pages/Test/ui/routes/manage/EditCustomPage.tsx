import { TestTitleEdit } from '@/features/test-edit';
import { EditTestSwitcher } from './ui/EditTestSwitcher';

const EditCustomPage = () => {
  return (
    <section className="flex flex-col gap-[12px]">
      <TestTitleEdit />
      <EditTestSwitcher />
    </section>
  );
};

export default EditCustomPage;
