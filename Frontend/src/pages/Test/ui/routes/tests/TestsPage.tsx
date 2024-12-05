import { TestFilters } from '@/widgets/test-filters';
import { TestList } from '@/widgets/test-list';
import { SearchInput } from '@/features/inputs';
import { useQueryState } from 'nuqs';
import { testsMOCK } from '@/entities/test-info/MOCK';

const TestsPage = () => {
  const [search, setSearch] = useQueryState('search', { defaultValue: '' });
  const [difficulty, setDifficulty] = useQueryState('difficulty', {
    defaultValue: '',
  });
  const [subject, setSubject] = useQueryState('subject', { defaultValue: '' });

  const filteredTests = testsMOCK.filter(
    test =>
      (difficulty === '' || test.difficulty === difficulty) &&
      (subject === '' || test.subject === subject) &&
      (search === '' || test.title.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <section className="flex flex-row gap-5 w-full">
      <div className="w-full flex flex-col gap-3">
        <div className="sticky top-[75px] z-10">
          <SearchInput search={search} setSearch={setSearch} />
        </div>
        <TestList tests={filteredTests} />
      </div>
      <div className="max-w-[224px] w-full">
        <div className="sticky top-[75px]">
          <TestFilters
            difficulty={difficulty}
            setDifficulty={setDifficulty}
            subject={subject}
            setSubject={setSubject}
          />
        </div>
      </div>
    </section>
  );
};

export default TestsPage;
