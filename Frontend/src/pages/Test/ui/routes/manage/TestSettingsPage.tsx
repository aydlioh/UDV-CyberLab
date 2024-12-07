import { TestSettings } from '@/widgets/test-settings';
import { SettingsTestSwitcher } from './ui/SettingsTestSwitcher';

const TestSettingsPage = () => {
  return (
    <section className="flex flex-col gap-[12px]">
      <TestSettings />
      <SettingsTestSwitcher />
    </section>
  );
};

export default TestSettingsPage;
