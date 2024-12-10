/* eslint-disable indent */
import { QuestionAnswersType, QuestionType } from '@/shared/types';
import {
  QuestionEditType,
  SelectActionCorrectType,
  SelectActionType,
} from '../../model/types';
import { CheckboxAction } from './Checkbox';
import { RadioAction } from './Radio';
import { FileAction } from './File';
import { TextAction } from './Text';
import { SelectAction } from './Select';

type Actions = {
  changeCorrectAnswers: (
    value: QuestionAnswersType[] | string | SelectActionCorrectType[]
  ) => void;
  changeAnswers: (value: QuestionAnswersType[]) => void;
};

export const ActionsSwitcher = ({
  answers,
  correctAnswers,
  type,
  changeCorrectAnswers,
  changeAnswers,
}: Omit<QuestionEditType, 'id' | 'question' | 'maxScore'> & Actions) => {
  switch (type) {
    case QuestionType.Checkbox:
      return (
        <CheckboxAction
          answers={answers as string[]}
          correctAnswers={correctAnswers as string[]}
          changeAnswers={changeAnswers}
          changeCorrectAnswers={changeCorrectAnswers}
        />
      );
    case QuestionType.Radio:
      return (
        <RadioAction
          answers={answers as string[]}
          correctAnswer={correctAnswers as string}
          changeAnswers={changeAnswers}
          changeCorrectAnswers={changeCorrectAnswers}
        />
      );
    case QuestionType.Text:
      return (
        <TextAction
          correctAnswers={correctAnswers as string[]}
          changeCorrectAnswers={changeCorrectAnswers}
        />
      );
    case QuestionType.Select:
      return (
        <SelectAction
          answers={answers as SelectActionType[]}
          correctAnswers={correctAnswers as SelectActionCorrectType[]}
          changeAnswers={changeAnswers}
          changeCorrectAnswers={changeCorrectAnswers}
        />
      );
    case QuestionType.File:
      return <FileAction />;
    default:
      return <></>;
  }
};
