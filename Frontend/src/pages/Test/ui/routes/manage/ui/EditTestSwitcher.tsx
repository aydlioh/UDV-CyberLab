import { ContentSwitcher } from '@/features/content-switcher';
import { useNavigate, useParams } from 'react-router-dom';

export const EditTestSwitcher = () => {
  const { testId } = useParams();
  const navigate = useNavigate();

  return (
    <ContentSwitcher
      hasPrev={false}
      nextLabel="Далее"
      handleNext={() => navigate(`/tests/manage/${testId}/settings`)}
    />
  );
};
