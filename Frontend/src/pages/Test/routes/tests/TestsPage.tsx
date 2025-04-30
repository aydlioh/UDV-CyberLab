import { TestFilters } from '@/widgets/test-filters';
import { SearchInput } from '@/features/inputs';
import { useQueryState } from 'nuqs';
import { useMediaQuery } from '@/shared/hooks';
import { Spinner, StickyElement } from '@/shared/ui';
import { TestListWithFilters } from './ui/TestListWithFilters';
import { QueryBoundary } from '@/shared/common/components';

const TestsPage = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });

  const [search, setSearch] = useQueryState('search', { defaultValue: '' });
  const [difficulty, setDifficulty] = useQueryState('difficulty', {
    defaultValue: '',
  });
  const [subject, setSubject] = useQueryState('subject', { defaultValue: '' });

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
        <QueryBoundary
          fallbackLoader={
            <div className="flex justify-center items-center w-full mt-20">
              <Spinner size="page" color="primary" />
            </div>
          }
        >
          <TestListWithFilters
            search={search}
            difficulty={difficulty}
            subject={subject}
          />
        </QueryBoundary>
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
