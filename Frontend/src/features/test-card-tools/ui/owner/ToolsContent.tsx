import { Divider } from '@nextui-org/react';
import { ToolButton } from './ToolButton';
import { MdModeEdit, MdDelete, MdSettings } from 'react-icons/md';
import { IoStatsChart } from 'react-icons/io5';
import { IoMdList } from 'react-icons/io';
import { useNavigation } from '@/shared/hooks';

export const ToolsContent = ({ id }: { id: string }) => {
  const { scrollNavigate } = useNavigation();

  return (
    <div>
      <div>
        <ToolButton
          onClick={() => scrollNavigate(`/tests/manage/${id}/statistics`)}
          startContent={<IoStatsChart size={17} />}
        >
          Статистика
        </ToolButton>
      </div>
      <Divider className="my-1 bg-background" />
      <div className="flex flex-col gap-0.5">
        <ToolButton
          onClick={() => scrollNavigate(`/tests/manage/${id}/edit`)}
          startContent={<MdModeEdit size={17} />}
        >
          Редактировать
        </ToolButton>
        <ToolButton
          onClick={() => scrollNavigate(`/tests/manage/${id}/settings`)}
          startContent={<MdSettings size={17} />}
        >
          Настройки
        </ToolButton>
        <ToolButton
          onClick={() => scrollNavigate(`/tests/manage/${id}/preview`)}
          startContent={<IoMdList size={17} />}
        >
          Предпросмотр
        </ToolButton>
      </div>
      <Divider className="my-1 bg-background" />
      <div>
        <ToolButton
          startContent={<MdDelete size={17} />}
          color="danger"
          className="data-[hover=true]:bg-rose-500/10"
        >
          Удалить
        </ToolButton>
      </div>
    </div>
  );
};
