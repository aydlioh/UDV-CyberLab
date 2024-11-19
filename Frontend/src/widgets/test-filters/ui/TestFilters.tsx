import { Filter } from '@/features/filter';
import { Accordion, AccordionItem } from '@nextui-org/react';
import { difficultyFilters } from '../const/difficultyFilters';
import { subjectFilters } from '../const/subjectFilters';

const accordionClassNames = {
  title: 'text-[14px] text-foreground',
  indicator: 'text-foreground',
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
  setSubject
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
        <Filter
          onChange={setSubject}
          currentValue={subject}
          listItems={subjectFilters}
        />
      </AccordionItem>
    </Accordion>
  );
};
