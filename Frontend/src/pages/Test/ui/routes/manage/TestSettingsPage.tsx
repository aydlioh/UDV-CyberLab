import { TestSettings } from '@/widgets/test-settings-edit';
import { SettingsTestSwitcher } from './ui/SettingsTestSwitcher';

const TestSettingsPage = () => {
  // TODO_1 запрос useTest
  return (
    <section className="flex flex-col gap-[12px]">
      <TestSettings />
      <SettingsTestSwitcher />
    </section>
  );
};

export default TestSettingsPage;
