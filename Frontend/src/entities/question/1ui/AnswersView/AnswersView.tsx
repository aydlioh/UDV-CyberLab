// import { SelectAnswer } from './Select';
// import { FileAnswer } from './File';
// import { CheckboxAnswer } from './Checkbox';
// import { RadioAnswer } from './Radio';
// import { ShortTextAnswer } from './ShordText';
// import { DetailedTextAnswer } from './DetailedText';
// import { AnswerType, QuestionType } from '../../model/types';

// type AnswersViewProps = {
//   setAnswer: (answer: AnswerType) => void;
//   answers?: string[];
//   currentAnswer: AnswerType;
//   questionType: QuestionType;
// };

// export const AnswersView = ({
//   questionType,
//   setAnswer,
//   currentAnswer,
//   answers = [],
// }: AnswersViewProps) => {
//   /* eslint-disable indent */
//   switch (questionType) {
//     case 'text':
//       return (
//         <ShortTextAnswer
//           currentAnswer={currentAnswer as string}
//           setAnswer={setAnswer}
//         />
//       );
//     case 'detailedText':
//       return (
//         <DetailedTextAnswer
//           currentAnswer={currentAnswer as string}
//           setAnswer={setAnswer}
//         />
//       );
//     case 'radio':
//       return (
//         <RadioAnswer
//           currentAnswer={currentAnswer as string}
//           answers={answers}
//           setAnswer={setAnswer}
//         />
//       );
//     case 'checkbox':
//       return (
//         <CheckboxAnswer
//           currentAnswer={currentAnswer as string[]}
//           answers={answers}
//           setAnswer={setAnswer}
//         />
//       );
//     case 'select':
//       return (
//         <SelectAnswer
//           currentAnswer={currentAnswer as string}
//           answers={answers}
//           setAnswer={setAnswer}
//         />
//       );
//     case 'file':
//       return (
//         <FileAnswer
//           currentAnswer={currentAnswer as File}
//           setAnswer={setAnswer}
//         />
//       );
//     default:
//       return <></>;
//   }
// };
