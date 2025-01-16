import { SetStateAction, useCallback, useState } from 'react';
import { Button, Card, Input, Select, SelectItem, Textarea } from '@/shared/ui';
import { questionTypes } from '../const/questionTypes';
import { FaTrashAlt } from 'react-icons/fa';
import { ActionsSwitcher } from './actions/ActionsSwitcher';
import { QuestionDTO, QuestionType } from '@/shared/api/dto';
import { useDeleteQuestion } from '../api/mutations/useDeleteQuestion';

type QuestionEditCardProps = {
  index: number;
  question: QuestionDTO;
  setQuestion: React.Dispatch<SetStateAction<QuestionDTO[]>>;
};

const selectClassNames = {
  itemClasses: {
    base: 'data-[hover=true]:bg-controls data-[selectable=true]:focus:text-foreground data-[hover=true]:text-foreground data-[selectable=true]:focus:bg-controls',
  },
};

export const QuestionEditCard = ({
  index,
  question,
  setQuestion,
}: QuestionEditCardProps) => {
  const [currentSettings, setCurrentSettings] = useState<QuestionDTO>(question);
  const { mutateAsync } = useDeleteQuestion();

  const handleDeleteQuestion = useCallback(() => {
    setQuestion(prev => prev.filter(q => q.id !== question.id));
    if (question.id) {
      mutateAsync(question.id);
    }
  }, [mutateAsync, question.id, setQuestion]);

  const handleChangeAnswers = useCallback((value: Partial<QuestionDTO>) => {
    // setCurrentSettings(prev => ({ ...prev, answers: value }));
  }, []);

  const handleChangeType = useCallback(
    (value: QuestionType) => {
      if (value === 'QuestionVariant') {
        if (
          question.questionTypeName === 'QuestionVariant' &&
          question.isMultipleChoice
        ) {
          setCurrentSettings(prev => ({
            ...prev,
            type: value as QuestionType,
            correctAnswers: [],
          }));
        } else {
          setCurrentSettings(prev => ({
            ...prev,
            type: value as QuestionType,
            answers: [],
            correctAnswers: [],
          }));
        }
      } else {
        setCurrentSettings(prev => ({
          ...prev,
          type: value as QuestionType,
          answers: [],
          correctAnswers: [],
        }));
      }
    },
    [question.isMultipleChoice, question.questionTypeName]
  );

  return (
    <Card className="pt-[13px] pb-[20px] sm:px-[40px] px-[20px]">
      <div>
        <h4 className="text-[16px] mb-3">Вопрос {index}</h4>
        <div className="mb-[13px] flex flex-row justify-between items-center">
          {question.id && (
            <Select
              color="white"
              aria-label="Тип вопроса"
              size="sm"
              listboxProps={selectClassNames}
              popoverProps={{
                placement: 'bottom-end',
              }}
              selectedKeys={[currentSettings.questionTypeName ?? '']}
              onChange={e => handleChangeType(e.target.value as QuestionType)}
              placeholder="Тип вопроса"
              className="sm:max-w-[213px] w-full"
              classNames={{
                trigger: 'h-[40px] min-h-8 px-3',
                value: 'text-[13px] text-foreground/50',
                mainWrapper: 'h-[40px]',
              }}
            >
              {questionTypes.map(({ label, key }) => (
                <SelectItem key={key}>{label}</SelectItem>
              ))}
            </Select>
          )}
        </div>
        <Textarea
          className="mb-3"
          value={currentSettings.text ?? ''}
          onValueChange={e =>
            setCurrentSettings(prev => ({ ...prev, question: e }))
          }
          classNames={{
            inputWrapper: 'rounded-[8px]',
            input: 'without-scrollbar',
          }}
          minRows={1}
          color="white"
          aria-label="Текст вопроса"
          placeholder="Вопрос"
        />
        {currentSettings.questionTypeName && (
          <ActionsSwitcher
            question={currentSettings}
            changeQuestion={handleChangeAnswers}
          />
        )}
        <div className="flex justify-between mt-4">
          <div className="flex flex-row gap-2 items-center">
            <p className="text-[13px]">Баллы: </p>
            <Input
              value={String(currentSettings.points)}
              onValueChange={e =>
                setCurrentSettings(prev => ({ ...prev, maxScore: Number(e) }))
              }
              color="white"
              classNames={{
                base: 'w-[50px]',
              }}
              type="number"
              max={100}
              min={0}
              placeholder="0"
              aria-label="Баллы за вопрос"
            />
          </div>
          <Button
            onPress={handleDeleteQuestion}
            variant="light"
            size="md"
            radius="sm"
            isIconOnly
          >
            <FaTrashAlt size={22} />
          </Button>
        </div>
      </div>
    </Card>
  );
};
