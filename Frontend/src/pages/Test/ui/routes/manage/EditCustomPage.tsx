import { TestTitleEdit } from '@/features/test-title-edit';
import { EditTestSwitcher } from './ui/EditTestSwitcher';
import { TestEditList } from '@/widgets/test-edit-list';
import { useParams } from 'react-router-dom';
import { useTestEditing } from '@/entities/test-editing';

const EditCustomPage = () => {
  const { testId: id = '' } = useParams();
  const { data } = useTestEditing(id);
  
  return (
    <section className="flex flex-col gap-[12px]">
      <TestTitleEdit
        initDifficulty={data?.difficulty}
        initSubject={data?.theme}
        initTitle={data?.name}
      />
      <TestEditList questions={data?.questions} />
      <EditTestSwitcher />
    </section>
  );
};

export default EditCustomPage;
