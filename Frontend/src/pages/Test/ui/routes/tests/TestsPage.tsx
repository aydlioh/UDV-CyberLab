import { TestFilters } from '@/widgets/test-filters';
import { TestList } from '@/widgets/test-list';
import { SearchInput } from '@/features/inputs';
import { ITestCard } from '@/entities/test';
import { useQueryState } from 'nuqs';

export const mockTests: ITestCard[] = [
  {
    id: '1',
    owner: 'aydlioh',
    title: 'Тест по стереометрии',
    totalPoints: 10,
    currentPoints: undefined,
    status: 'idle',
  },
  {
    id: '2',
    owner: 'qwerty',
    title: 'Тест по английскому языку',
    totalPoints: 12,
    currentPoints: undefined,
    status: 'idle',
  },
  {
    id: '3',
    owner: 'zzz',
    title: 'Тест по математике',
    totalPoints: 15,
    currentPoints: undefined,
    status: 'run',
  },
  {
    id: '4',
    owner: 'zzz',
    title: 'Тест по физике',
    totalPoints: 15,
    currentPoints: 7,
    status: 'over',
  },
  {
    id: '5',
    owner: 'russian_bear',
    title: 'Тест по физике с 2 попытками',
    totalPoints: 10,
    currentPoints: 8,
    status: 'over',
  },
];

const TestsPage = () => {
  const [search, setSearch] = useQueryState('search', { defaultValue: '' });
  const [difficulty, setDifficulty] = useQueryState('difficulty', {
    defaultValue: '',
  });
  const [subject, setSubject] = useQueryState('subject', { defaultValue: '' });

  return (
    <section className="flex flex-row gap-5 w-full">
      <div className="w-full flex flex-col gap-3">
        <SearchInput search={search} setSearch={setSearch} />
        <TestList tests={mockTests} />
      </div>
      <div className="max-w-[224px] w-full">
        <TestFilters
          difficulty={difficulty}
          setDifficulty={setDifficulty}
          subject={subject}
          setSubject={setSubject}
        />
      </div>
    </section>
  );
};

export default TestsPage;
