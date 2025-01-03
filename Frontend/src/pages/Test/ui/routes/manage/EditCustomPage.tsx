import { TestTitleEdit } from '@/features/test-title-edit';
import { EditTestSwitcher } from './ui/EditTestSwitcher';
import { TestEditList } from '@/widgets/test-edit-list';

const EditCustomPage = () => {
  return (
    <section className="flex flex-col gap-[12px]">
      <TestTitleEdit />
      <TestEditList />
      <EditTestSwitcher />
    </section>
  );
};

export default EditCustomPage;
