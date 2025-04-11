import { Outlet } from 'react-router-dom';
import { useQueryState } from 'nuqs';
import { Spinner, StickyElement } from '@/shared/ui';
import { useMediaQuery } from '@/shared/hooks';
import { QueryBoundary } from '@/shared/common/components';
import { useUserStatus } from '@/entities/user';
import { ProjectSortingSelect } from '@/features/project-sorting-select';
import { CreateProjectButton } from '@/features/project-create-button';
import { ListFormatSwitcher } from '@/features/list-format-switcher';

export const ProjectListLayout = () => {
  const [sort, setSort] = useQueryState('sord', { defaultValue: '' });

  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
  const { isTeacher } = useUserStatus();

  return (
    <div className="w-full max-w-[712px] flex flex-col gap-3">
      <StickyElement shadow={!isTablet} className="top-[75px] z-10">
        <div className="flex sm:flex-row flex-col justify-between items-center">
          <div className="flex flex-row gap-2 w-full items-center">
            <div className="max-w-[234px] w-full">
              <ProjectSortingSelect sort={sort} setSort={setSort} />
            </div>
            <ListFormatSwitcher />
          </div>
          <div className="bg-background rounded-xl self-end mt-3 sm:w-auto w-full drop-shadow-md">
            {isTeacher && <CreateProjectButton />}
          </div>
        </div>
      </StickyElement>
      <QueryBoundary
        fallbackLoader={
          <div className="flex justify-center items-center w-full mt-20">
            <Spinner size="page" color="primary" />
          </div>
        }
      >
        <Outlet />
      </QueryBoundary>
    </div>
  );
};
