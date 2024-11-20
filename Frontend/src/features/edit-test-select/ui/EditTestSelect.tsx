import { Select, SelectItem } from '@/shared/ui';
import { editTestSelect } from '../const/editTest';
import {
  EditTestNavigation,
  useEditTestNavigation,
  parseUrlToStatus,
  getEditStatusUrl,
} from '@/entities/edit-test-nav';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

export const EditTestSelect = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { testId } = useParams();
  const { navType, setNavType } = useEditTestNavigation();

  const handleChange = (key: EditTestNavigation) => {
    setNavType(key);
    navigate(getEditStatusUrl(testId as string, key));
  };

  useEffect(() => {
    if (pathname.includes(`/tests/manage/${testId}/edit`)) {
      setNavType(parseUrlToStatus(pathname));
    }
  }, [pathname, setNavType, testId]);

  return (
    <Select
      size="sm"
      color="secondary"
      listboxProps={{
        itemClasses: {
          base: 'data-[hover=true]:bg-[#CDCDE3] data-[selectable=true]:focus:text-foreground data-[hover=true]:text-foreground data-[selectable=true]:focus:bg-[#CDCDE3] !outline-none',
        },
      }}
      selectedKeys={[navType]}
      onChange={e => handleChange(e.target.value as EditTestNavigation)}
      label="Задать содержание"
      className="sm:max-w-[300px] w-full"
    >
      {editTestSelect.map(({ key, label }) => (
        <SelectItem key={key}>{label}</SelectItem>
      ))}
    </Select>
  );
};
