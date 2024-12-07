import { useEditTestNavigation } from '@/entities/test-edit-nav';
import { TestSwitcher } from '@/features/test-switcher';
import { useNavigate, useParams } from 'react-router-dom';

export const SettingsTestSwitcher = () => {
  const navType = useEditTestNavigation(state => state.navType);
  const { testId } = useParams();
  const navigate = useNavigate();

  return (
    <TestSwitcher
      nextLabel="Далее"
      handlePrev={() => navigate(`/tests/manage/${testId}/edit/${navType}`)}
      handleNext={() => navigate(`/tests/manage/${testId}/preview`)}
    />
  );
};
