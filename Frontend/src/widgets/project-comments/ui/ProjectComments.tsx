import { Comment, CommentDTO } from '@/entities/comment';
import { useUser, useUserStatus } from '@/entities/user';
import { CommentActions } from '@/features/comment-actions';
import { sortingByDate } from '@/shared/common/utils/sorting';
import { Button } from '@/shared/ui';

const comments: CommentDTO[] = [
  {
    id: '1',
    text: 'Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий',
    authorId: '123',
    authorName: 'evelone52',
    projectId: 'project1',
    createdAt: '2023-10-01',
  },
  {
    id: '2',
    text: 'Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетийсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух',
    authorId: '124',
    authorName: 'pbiryuchev',
    projectId: 'project2',
    createdAt: '2025-05-22T12:10:42.345862Z',
  },
  {
    id: '3',
    text: 'Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но ',
    authorId: '125',
    authorName: 'abrikos',
    projectId: 'project3',
    createdAt: '2025-05-24T20:12:42.345862Z',
  },
  {
    id: '4',
    text: 'Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, ноэто не совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетийсем так. Его корни уходят в один фрагменэто не совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетийсем так. Его корни уходят в один фрагменэто не совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетийсем так. Его корни уходят в один фрагменэто не совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетийсем так. Его корни уходят в один фрагменэто не совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетийсем так. Его корни уходят в один фрагмен ',
    authorId: '126',
    authorName: 'pomidor',
    projectId: 'project4',
    createdAt: '2025-05-24T20:10:42.345862Z',
  },
];

export const ProjectComments = ({ projectId }: { projectId: string }) => {
  console.log(projectId);
  const user = useUser();
  const { isAdmin } = useUserStatus();

  const hasTools = (author: string) => isAdmin || author === user?.userName;

  // const { data: comments, isLoading } = useProjectComments(projectId);

  // if (!comments || isLoading)
  //   return (
  //     <div className="flex justify-center mt-10">
  //       <Spinner color="primary" size="lg" />
  //     </div>
  //   );

  return (
    <div className="w-full max-w-[712px]">
      <p className="mb-1">Всего комментариев {comments.length ?? 0}</p>
      <ul className="flex flex-col gap-2 w-full">
        {comments.sort(sortingByDate).map(comment => (
          <li key={comment.id}>
            <Comment
              comment={comment}
              actionSlot={
                hasTools(comment.authorName) ? (
                  <CommentActions commentId={comment.id} />
                ) : null
              }
            />
          </li>
        ))}
      </ul>
      <div className="mt-4 flex justify-center">
        <Button variant="light" size="md" radius="md" className="w-[120px]">
          Загрузить еще
        </Button>
      </div>
    </div>
  );
};
