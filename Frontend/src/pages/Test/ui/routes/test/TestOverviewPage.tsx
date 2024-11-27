import { useAnswers } from '@/entities/question';

const TestOverviewPage = () => {
  const answers = useAnswers(state => state.answers);
  console.log(answers);
  return <div>Test Overview</div>;
};

export default TestOverviewPage;
