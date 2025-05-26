import { ModalBody, ModalContent } from '@nextui-org/react';
import { useProjectRatingModal } from '../model/store';
import { useSetProjectRating, useUserProjectRating } from '@/entities/rating';
import { Button, ModalSpinner } from '@/shared/ui';
import { GetRatingContent } from './GetRatingContent';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export const ProjectRatingModalContent = () => {
  const { options } = useProjectRatingModal();
  const { data, isPending } = useUserProjectRating(options?.projectId || '');

  if (isPending || !options?.projectId) {
    return (
      <ModalContent>
        <ModalSpinner />
      </ModalContent>
    );
  }

  if (data?.userRating) {
    return (
      <ModalContent>
        <ModalBody>
          <GetRatingContent data={data} />
        </ModalBody>
      </ModalContent>
    );
  }

  return (
    <ModalContent>
      <ModalBody>
        <SetRatingContent projectId={options.projectId} />
      </ModalBody>
    </ModalContent>
  );
};

import { IoIosStar } from 'react-icons/io';
import clsx from 'clsx';

const SetRatingContent = ({ projectId }: { projectId: string }) => {
  const close = useProjectRatingModal(state => state.close);
  const { mutateAsync, isPending } = useSetProjectRating();
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const { handleSubmit } = useForm();

  const onSubmit = () => {
    mutateAsync({ projectId, value: rating }).then(close);
  };

  return (
    <div>
      <div>
        <h4 className="text-[24px] mb-2 mx-5 text-center">Оценка проекта</h4>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-2 items-center"
      >
        <div className="flex mb-4">
          {[...Array(5)].map((_, index) => {
            const ratingValue = index + 1;
            const isActive = ratingValue <= rating;
            const isHovered = ratingValue <= hover;
            const isReducing = hover > 0 && hover < rating;
            const willBeRemoved =
              isReducing && ratingValue > hover && ratingValue <= rating;

            return (
              <button
                type="button"
                key={index}
                className="text-5xl bg-transparent border-none outline-none cursor-pointer"
                onClick={() => setRating(ratingValue)}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(0)}
              >
                <span
                  className={clsx('transition-colors duration-200', {
                    'text-yellow-500':
                      (isActive && !isReducing) ||
                      (isActive && isReducing && ratingValue <= hover),
                    'text-yellow-500/40':
                      (!isActive && isHovered && hover > rating) ||
                      willBeRemoved,
                    'text-foreground/20':
                      !isActive && !isHovered && !willBeRemoved,
                  })}
                >
                  <IoIosStar />
                </span>
              </button>
            );
          })}
        </div>

        <Button
          type="submit"
          color="gradient"
          size="md"
          radius="sm"
          className="w-1/2 text-white"
          isLoading={isPending}
          isDisabled={rating === 0}
        >
          Оценить
        </Button>
        <p className="text-sm mt-1 text-center">
          Не забудьте оставить отзыв после оценки в комментариях
        </p>
      </form>
    </div>
  );
};
