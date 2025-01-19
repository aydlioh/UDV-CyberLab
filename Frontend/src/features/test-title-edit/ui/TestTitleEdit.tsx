import { difficultyFilters, subjectFilters } from '@/entities/filter';
import { Card, Input } from '@/shared/ui';
import { memo, useCallback, useEffect, useRef, useState } from 'react';
import { TitleSelect } from './TitleSelect';
import { useUpdateTestTitle } from '../api/mutations/useUpdateTestTitle';
import { getTestInfo, TestEditingDTO } from '@/entities/test-editing';
import { UpdateTestDTO } from '@/entities/test-info';

type TestTitleEditProps = {
  initTitle?: string;
  initDifficulty?: string;
  initSubject?: string;
  data: TestEditingDTO;
};

export const TestTitleEdit = memo(
  ({ initTitle, initDifficulty, initSubject, data }: TestTitleEditProps) => {
    const ref = useRef<UpdateTestDTO | null>(null);
    const [title, setTitle] = useState<string>(initTitle ?? '');
    const [difficulty, setDifficulty] = useState<string>(initDifficulty ?? '');
    const [subject, setSubject] = useState<string>(initSubject ?? '');

    const { mutate } = useUpdateTestTitle(data.id);

    const handleChangeTitle = useCallback(
      (value: string) => {
        ref.current = { ...getTestInfo(data), theme: subject, difficulty: difficulty, name: value };
        setTitle(value);
      },
      [data, difficulty, subject]
    );

    const handleChangeDifficulty = useCallback(
      (value: string) => {
        ref.current = { ...getTestInfo(data), theme: subject, difficulty: value, name: title };
        console.log(ref.current);
        setDifficulty(value);
      },
      [data, subject, title]
    );

    const handleChangeSubject = useCallback(
      (value: string) => {
        ref.current = { ...getTestInfo(data), difficulty: difficulty, name: title, theme: value };
        console.log(ref.current);
        setSubject(value);
      },
      [data, difficulty, title]
    );

    useEffect(() => {
      return () => {
        if (ref.current) {
          mutate(ref.current);
        }
      };
    }, [mutate]);

    return (
      <Card className="py-[24px] sm:px-[40px] px-[20px]">
        <div className="flex flex-col sm:gap-[24px] gap-4">
          <Input
            color="white"
            value={title}
            onChange={e => handleChangeTitle(e.target.value)}
            placeholder="Название теста"
            className="sm:max-w-[400px]"
            classNames={{
              inputWrapper: 'h-[40px] px-3',
              input:
                'placeholder:text-[16px] text-[16px] placeholder:text-foreground/50',
            }}
          />
          <div className="flex sm:flex-row flex-col sm:gap-[24px] gap-2">
            <TitleSelect
              value={difficulty}
              handleDataChange={handleChangeDifficulty}
              items={difficultyFilters}
              placeholder="Сложность"
              aria-label="Сложность теста"
            />
            <TitleSelect
              value={subject}
              handleDataChange={handleChangeSubject}
              items={subjectFilters}
              placeholder="Тематика"
              aria-label="Тематика теста"
            />
          </div>
        </div>
      </Card>
    );
  }
);
