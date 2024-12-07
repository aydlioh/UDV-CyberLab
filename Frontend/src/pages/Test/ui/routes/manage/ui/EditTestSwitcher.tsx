import { TestSwitcher } from '@/features/test-switcher';
import { useNavigate, useParams } from 'react-router-dom';

export const EditTestSwitcher = () => {
  const { testId } = useParams();
  const navigate = useNavigate();

  return (
    <TestSwitcher
      isPrev={false}
      nextLabel="Далее"
      handleNext={() => navigate(`/tests/manage/${testId}/settings`)}
    />
  );
};
