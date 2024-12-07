import { difficultyFilters, subjectFilters } from '@/entities/filter';
import { Card, Input, Select, SelectItem } from '@/shared/ui';
import { useState } from 'react';

type TestTitleEditProps = {
  initTitle?: string;
  initDifficulty?: string;
  initSubject?: string;
};

const selectClassNames = {
  itemClasses: {
    base: 'data-[hover=true]:bg-controls data-[selectable=true]:focus:text-foreground data-[hover=true]:text-foreground data-[selectable=true]:focus:bg-controls',
  },
};

export const TestTitleEdit = ({
  initTitle,
  initDifficulty,
  initSubject,
}: TestTitleEditProps) => {
  const [title, setTitle] = useState<string>(initTitle ?? '');
  const [difficulty, setDifficulty] = useState<string>(initDifficulty ?? '');
  const [subject, setSubject] = useState<string>(initSubject ?? '');

  return (
    <Card className="py-[24px] px-[40px]">
      <div className="flex flex-col gap-[24px]">
        <Input
          color="white"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Название теста"
          className="max-w-[308px]"
          classNames={{
            inputWrapper: 'h-[40px] px-3',
            input:
              'placeholder:text-[16px] text-[16px] placeholder:text-foreground/50',
          }}
        />
        <div className="flex flex-row gap-[24px]">
          <Select
            color="white"
            aria-label="Сложность теста"
            size="sm"
            listboxProps={selectClassNames}
            popoverProps={{
              placement: 'bottom-end',
            }}
            selectedKeys={[difficulty]}
            onChange={e => setDifficulty(e.target.value)}
            placeholder="Сложность"
            className="sm:max-w-[213px] w-full"
            classNames={{
              trigger: 'h-[40px] min-h-8 px-3',
              value: 'text-[16px] text-foreground/50',
              mainWrapper: 'h-[40px]',
            }}
          >
            {difficultyFilters.map(({ label, key }) => (
              <SelectItem key={key}>{label}</SelectItem>
            ))}
          </Select>
          <Select
            color="white"
            aria-label="Тематика теста"
            size="sm"
            listboxProps={selectClassNames}
            popoverProps={{
              placement: 'bottom-end',
            }}
            selectedKeys={[subject]}
            onChange={e => setSubject(e.target.value)}
            placeholder="Тематика"
            className="sm:max-w-[213px] w-full"
            classNames={{
              trigger: 'h-[40px] min-h-8 px-3',
              value: 'text-[16px] text-foreground/50',
              mainWrapper: 'h-[40px]',
            }}
          >
            {subjectFilters.map(({ label, key }) => (
              <SelectItem key={key}>{label}</SelectItem>
            ))}
          </Select>
        </div>
      </div>
    </Card>
  );
};
