import { QuestionAnswersType, QuestionType } from '@/shared/types';
import { Button, Card, Input, Select, SelectItem, Textarea } from '@/shared/ui';
import { SetStateAction, useCallback, useState } from 'react';
import { questionTypes } from '../const/questionTypes';
import { QuestionEditType, SelectActionCorrectType } from '../model/types';
import { FaTrashAlt } from 'react-icons/fa';
import { ActionsSwitcher } from './actions/ActionsSwitcher';

type QuestionEditCardProps = {
  index: number;
  question: QuestionEditType;
  setQuestion: React.Dispatch<SetStateAction<QuestionEditType[]>>;
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
  const [currentSettings, setCurrentSettings] =
    useState<QuestionEditType>(question);

  const handleDeleteQuestion = useCallback(() => {
    setQuestion(prev => prev.filter(q => q.id !== question.id));
  }, [question.id, setQuestion]);

  const handleChangeCorrectAnswers = useCallback(
    (value: QuestionAnswersType[] | string | SelectActionCorrectType[]) => {
      setCurrentSettings(prev => ({ ...prev, correctAnswers: value }));
    },
    []
  );

  const handleChangeAnswers = useCallback((value: QuestionAnswersType[]) => {
    setCurrentSettings(prev => ({ ...prev, answers: value }));
  }, []);

  const handleChangeType = useCallback(
    (value: QuestionType) => {
      if (value === QuestionType.Checkbox || value === QuestionType.Radio) {
        if (
          currentSettings.type === QuestionType.Radio ||
          currentSettings.type === QuestionType.Checkbox
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
    [currentSettings.type]
  );

  return (
    <Card className="pt-[13px] pb-[20px] px-[41px]">
      <div>
        <h4 className="text-[16px] mb-3">Вопрос {index}</h4>
        <div className="mb-[13px] flex flex-row justify-between items-center">
          <Select
            color="white"
            aria-label="Тип вопроса"
            size="sm"
            listboxProps={selectClassNames}
            popoverProps={{
              placement: 'bottom-end',
            }}
            selectedKeys={[currentSettings.type ?? '']}
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
          <div className="flex flex-row gap-2 items-center">
            <p className="text-[13px]">Баллы: </p>
            <Input
              value={String(currentSettings.maxScore)}
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
        </div>
        <Textarea
          className="mb-3"
          value={currentSettings.question ?? ''}
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
        {currentSettings.type && (
          <ActionsSwitcher
            type={currentSettings.type}
            correctAnswers={currentSettings.correctAnswers}
            answers={currentSettings.answers}
            changeAnswers={handleChangeAnswers}
            changeCorrectAnswers={handleChangeCorrectAnswers}
          />
        )}
        <div className="flex justify-end">
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
