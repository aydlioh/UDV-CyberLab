import { TestTitleEdit } from '@/features/test-edit';
import { EditTestSwitcher } from './EditTestSwitcher';

const EditGeneratePage = () => {

  return (
    <div className="flex flex-col gap-[12px]">
      <TestTitleEdit />
      <EditTestSwitcher />
    </div>
  );
};

export default EditGeneratePage;
