import { TestTitleEdit } from '@/features/test-edit';
import { EditTestSwitcher } from './EditTestSwitcher';

const EditCustomPage = () => {
  return (
    <div className="flex flex-col gap-[12px]">
      <TestTitleEdit />
      <EditTestSwitcher />
    </div>
  );
};

export default EditCustomPage;
