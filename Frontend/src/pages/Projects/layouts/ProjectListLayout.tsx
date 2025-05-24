import { Outlet, useLocation } from 'react-router-dom';
import { useQueryState } from 'nuqs';
import { Spinner, StickyElement } from '@/shared/ui';
import { useMediaQuery } from '@/shared/hooks';
import { QueryBoundary } from '@/shared/common/components';
import { ProjectSortingSelect } from '@/features/project-sorting-select';
import { CreateProjectButton } from '@/features/project-create-button';
import { ListFormatSwitcher } from '@/features/list-format-switcher';
import {
  ProjectEditModal,
  useProjectEditModal,
} from '@/features/project-edit-modal';

export const ProjectListLayout = () => {
  const open = useProjectEditModal(state => state.open);
  const { pathname } = useLocation();
  const [sort, setSort] = useQueryState('sort', { defaultValue: '' });

  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });

  return (
    <div className="w-full max-w-[712px] flex flex-col gap-3">
      <StickyElement shadow={!isTablet} className="top-[75px] z-10">
        <div className="flex sm:flex-row flex-col justify-between items-center">
          <div className="flex flex-row gap-2 w-full items-center">
            <div className="sm:max-w-[234px] w-full">
              <ProjectSortingSelect sort={sort} setSort={setSort} />
            </div>
            <div className="sm:block hidden">
              <ListFormatSwitcher />
            </div>
          </div>
          <div className="bg-background rounded-xl sm:mt-0 mt-3 self-end sm:w-auto w-full drop-shadow-md">
            {pathname === '/projects/my' && (
              <CreateProjectButton
                handleClick={() => open({ isEditing: false })}
              />
            )}
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
        <ProjectEditModal />
      </QueryBoundary>
    </div>
  );
};
