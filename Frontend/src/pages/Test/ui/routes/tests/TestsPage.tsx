import { TestFilters } from '@/widgets/test-filters';
import { TestList } from '@/widgets/test-list';
import { SearchInput } from '@/features/inputs';
import { useQueryState } from 'nuqs';
import { testsMOCK } from '@/entities/test-info/MOCK';
import { useMediaQuery } from '@/shared/hooks';
import { StickyElement } from '@/shared/ui';

const TestsPage = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });

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
    <section className="flex md:flex-row flex-col gap-5 w-full">
      <div className="w-full flex flex-col gap-3">
        <StickyElement shadow={!isTablet} className="top-[75px] z-10 h-[52px]">
          <SearchInput
            search={search}
            setSearch={setSearch}
            classNames={{
              inputWrapper: 'h-[52px]',
            }}
          />
        </StickyElement>

        {isMobile && (
          <TestFilters
            difficulty={difficulty}
            setDifficulty={setDifficulty}
            subject={subject}
            setSubject={setSubject}
          />
        )}
        <TestList tests={filteredTests} />
      </div>
      {!isMobile && (
        <div className="max-w-[224px] w-full">
          <StickyElement className="md:sticky top-[75px]">
            <TestFilters
              difficulty={difficulty}
              setDifficulty={setDifficulty}
              subject={subject}
              setSubject={setSubject}
            />
          </StickyElement>
        </div>
      )}
    </section>
  );
};

export default TestsPage;
