import { difficultyFilters, subjectFilters } from '@/entities/filter';
import { Filter } from '@/features/filter';
import { Scrollbar } from '@/shared/ui';
import { Accordion, AccordionItem } from '@nextui-org/react';

const accordionClassNames = {
  title: 'text-[14px] text-foreground',
  indicator: 'text-foreground',
  content: 'py-1.5',
};

export interface TestFiltersProps {
  difficulty: string | null;
  setDifficulty: (value: string | null) => void;
  subject: string | null;
  setSubject: (value: string | null) => void;
}

export const TestFilters = ({
  difficulty,
  setDifficulty,
  subject,
  setSubject,
}: TestFiltersProps) => {
  return (
    <Accordion
      selectionMode="multiple"
      isCompact
      variant="shadow"
      className="bg-white rounded-lg"
    >
      <AccordionItem
        key="Сложность"
        aria-label="Сложность"
        title="Сложность"
        classNames={accordionClassNames}
      >
        <Filter
          onChange={setDifficulty}
          currentValue={difficulty}
          listItems={difficultyFilters}
        />
      </AccordionItem>
      <AccordionItem
        key="Тематика"
        aria-label="Тематика"
        title="Тематика"
        classNames={accordionClassNames}
      >
        <Scrollbar className="h-[250px]">
          <Filter
            onChange={setSubject}
            currentValue={subject}
            listItems={subjectFilters}
          />
        </Scrollbar>
      </AccordionItem>
    </Accordion>
  );
};
