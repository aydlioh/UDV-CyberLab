import { QuestionEditCard } from '@/features/test-question-edit';
import { QuestionDTO } from '@/shared/api/dto';
import { Button } from '@/shared/ui';
import { useCallback, useState } from 'react';
import { IoAdd } from 'react-icons/io5';

type TestEditListProps = {
  questions: QuestionDTO[];
};

export const TestEditList = ({ questions }: TestEditListProps) => {
  const [editList, setEditList] = useState<QuestionDTO[]>(questions);

  const handleAddQuestion = useCallback(
    () =>
      setEditList(prev => [
        ...prev,
        { id: crypto.randomUUID() } as QuestionDTO,
      ]),
    [setEditList]
  );

  return (
    <div>
      <ul className="flex flex-col gap-3 mb-2">
        {editList.map((question, index) => (
          <li key={question.id}>
            <QuestionEditCard
              setQuestion={setEditList}
              index={index + 1}
              question={question}
            />
          </li>
        ))}
        {editList.map((question, index) => (
          <li key={question.id}>
            <QuestionEditCard
              setQuestion={setEditList}
              index={index + 1}
              question={question}
            />
          </li>
        ))}
      </ul>
      <div className="flex justify-center">
        <Button
          onPress={handleAddQuestion}
          variant="light"
          size="md"
          radius="md"
          className="w-[120px]"
          isIconOnly
        >
          <IoAdd size={28} />
        </Button>
      </div>
    </div>
  );
};
