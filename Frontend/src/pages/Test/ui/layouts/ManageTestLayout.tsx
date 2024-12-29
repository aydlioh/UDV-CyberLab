import {
  convertEditTestTypeToString,
  useEditTestNavigation,
} from '@/entities/test-edit-nav';
import { EditTestSelect } from '@/features/test-edit-select';
import { useMediaQuery } from '@/shared/hooks';
import { Spinner, StickyElement } from '@/shared/ui';
import { manageTestRoutes, Topbar } from '@/widgets/topbar';
import { Suspense, useMemo } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';

export const ManageTestLayout = () => {
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
  const navType = useEditTestNavigation(state => state.navType);
  const { pathname } = useLocation();
  const { testId = '' } = useParams();

  const topbarList = useMemo(
    () =>
      manageTestRoutes.map(({ path, enabledList, ...rest }) => ({
        ...rest,
        path: path
          .replace(':id', testId)
          .replace('custom', convertEditTestTypeToString(navType)),
        enabledList: enabledList.map(item => item.replace(':id', testId)),
      })),
    [testId, navType]
  );

  const withEditSelect = pathname.includes(`/tests/manage/${testId}/edit`);

  return (
    <div className="w-full max-w-[712px]">
      <StickyElement shadow={!isTablet} className='top-[75px] z-[20]'>
        <div className="flex flex-col justify-between items-start gap-3 mb-3">
          <Topbar links={topbarList} />
          {withEditSelect && <EditTestSelect />}
        </div>
      </StickyElement>
      <Suspense
        fallback={
          <div className="flex justify-center items-center w-full h-full">
            <Spinner size="page" color="primary" />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </div>
  );
};
