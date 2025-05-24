import { UserImage } from '@/shared/ui';
import { Card } from '@nextui-org/react';
import clsx from 'clsx';
import { useState } from 'react';
import { CommentDTO } from '../model/dto/CommentDTO';
import { getCommentDate } from '@/shared/common/utils/dayjs';

type CommentType = {
  comment: CommentDTO;
  actionSlot?: React.ReactNode;
};
export const Comment = ({ comment, actionSlot }: CommentType) => {
  const [isFullView, setIsFullView] = useState(false);
  const isExpanded = comment.text.length > 250;

  return (
    <Card className="drop-shadow-base w-full rounded-lg custom-outline pt-[10px] pb-[20px] px-[15px] flex flex-row gap-4 min-h-[80px]">
      <div>
        <UserImage username={comment.authorName} />
      </div>
      <div className="w-full">
        <div className="flex justify-between items-center mb-1">
          <p className="text-sm font-bold line-clamp-1">{comment.authorName}</p>
          <p className="text-[12px] font-bold">
            {getCommentDate(comment.createdAt)}
          </p>
        </div>
        <div className="flex flex-row gap-2 justify-between">
          <div className='w-full'>
            <span
              className={clsx(
                'text-sm break-words',
                isFullView ? 'line-clamp-none' : 'line-clamp-3'
              )}
            >
              {comment.text}
            </span>
            {isExpanded && !isFullView && (
              <span
                onClick={() => setIsFullView(true)}
                className="text-foreground/80 hover:underline text-sm font-semibold cursor-pointer"
              >
                развернуть
              </span>
            )}
          </div>
          <div>{actionSlot}</div>
        </div>
      </div>
    </Card>
  );
};
