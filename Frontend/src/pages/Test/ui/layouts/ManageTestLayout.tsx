import {
  convertEditTestTypeToString,
  useEditTestNavigation,
} from '@/entities/test-edit-nav';
import { EditTestSelect } from '@/features/test-edit-select';
import { Spinner } from '@/shared/ui';
import { manageTestRoutes, Topbar } from '@/widgets/topbar';
import { Suspense, useMemo } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';

export const ManageTestLayout = () => {
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
      <div className='sticky top-[75px] z-[20]'>
        <div className="flex flex-row justify-between items-center gap-[20px] mb-[12px]">
          <Topbar links={topbarList} />
          {withEditSelect && <EditTestSelect />}
        </div>
      </div>
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
