/* eslint-disable indent */
import { QuestionAnswersType, QuestionType } from '@/shared/types';
import {
  CheckboxAnswer,
  FileAnswer,
  RadioAnswer,
  SelectAnswer,
  TextAnswer,
} from './answers';
import { AnswersInputType } from '../model/types';

type QuestionAnswersProps = {
  type: string;
  answers?: QuestionAnswersType[];
  setCurrent?: (answer: AnswersInputType) => void;
  current?: AnswersInputType;
};

export const QuestionAnswers = ({
  type,
  answers,
  setCurrent,
  current,
}: QuestionAnswersProps) => {
  switch (type) {
    case QuestionType.Checkbox:
      return (
        <CheckboxAnswer
          answers={answers as string[]}
          currentAnswers={(current as string[]) ?? []}
          setAnswer={setCurrent}
        />
      );
    case QuestionType.Radio:
      return (
        <RadioAnswer
          answers={answers as string[]}
          currentAnswer={current as string}
          setAnswer={setCurrent}
        />
      );
    case QuestionType.Text:
      return (
        <TextAnswer currentAnswer={current as string} setAnswer={setCurrent} />
      );
    case QuestionType.Select:
      return (
        <SelectAnswer
          currentAnswer={current as Record<string, string>}
          answers={answers as { title: string; items: string[] }[]}
          setAnswer={setCurrent}
        />
      );
    case QuestionType.File:
      return (
        <FileAnswer currentAnswer={current as File} setAnswer={setCurrent} />
      );
    default:
      return <></>;
  }
};
