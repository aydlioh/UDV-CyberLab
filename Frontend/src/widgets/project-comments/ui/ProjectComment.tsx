import { ProjectRating } from '@/entities/project';
import { UserImage } from '@/entities/user';
import { Card } from '@nextui-org/react';
import clsx from 'clsx';
import { useState } from 'react';

type ProjectCommentType = {
  comment: {
    rating: number;
    author: string;
    message: string;
  };
};
export const ProjectComment = ({ comment }: ProjectCommentType) => {
  const [isFullView, setIsFullView] = useState(false);
  const isExpanded = comment.message.length > 250;

  return (
    <Card className="drop-shadow-base w-full rounded-lg custom-outline pt-[10px] pb-[20px] px-[15px] flex flex-row gap-4 min-h-[80px]">
      <div>
        <UserImage username={comment.author} />
      </div>
      <div className="w-full">
        <div className="flex justify-between items-center mb-1">
          <p className="text-sm font-bold line-clamp-1">{comment.author}</p>
          <ProjectRating starSize={15} rating={comment.rating} />
        </div>
        <div>
          <span
            className={clsx(
              'text-sm break-words',
              isFullView ? 'line-clamp-none' : 'line-clamp-3'
            )}
          >
            {comment.message}
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
      </div>
    </Card>
  );
};
