import { useDeleteComment } from '@/entities/comment';
import { ActionButton } from '@/shared/ui';

import { MdDelete, MdModeEdit } from 'react-icons/md';

export const CommentActions = ({ commentId }: { commentId: string }) => {
  const { mutateAsync: deleteComment, isPending: isDeletePending } =
    useDeleteComment();

  return (
    <div className="flex flex-col gap-0.5">
      <ActionButton
        className="border-foreground/10 text-[16px]"
        size="sm"
        tooltipProps={{
          placement: 'left',
        }}
        label="Редактировать"
        icon={MdModeEdit}
      />
      <ActionButton
        isLoading={isDeletePending}
        onPress={() => deleteComment(commentId)}
        className="border-rose-500/10 bg-rose-400/10 text-[16px] text-rose-500"
        size="sm"
        tooltipProps={{
          placement: 'left',
          classNames: {
            content: 'text-rose-500',
          },
        }}
        label="Удалить"
        icon={MdDelete}
      />
    </div>
  );
};
