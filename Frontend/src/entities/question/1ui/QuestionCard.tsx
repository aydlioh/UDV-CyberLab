// import { TestCard } from '@/shared/ui';
// import { AnswersView } from './AnswersView';
// import { useState } from 'react';
// import { IQuestion } from '../model/dto/IQuestion';
// import { AnswerType } from '../model/types';

// interface QuestionCardProps extends IQuestion {
//   totalCount: number;
//   currentIndex: number;
// }

// export const QuestionCard = ({
//   totalCount,
//   currentIndex,
//   required,
//   question,
//   answers,
//   questionType,
// }: QuestionCardProps) => {
//   const [answer, setAnswer] = useState<AnswerType>(null);
  
//   return (
//     <TestCard>
//       <div className="pl-[5px]">
//         <p className="relative inline-block text-[14.7px] leading-[20px] mb-[32px]">
//           Вопрос {currentIndex} из {totalCount}
//           {required && (
//             <span className="absolute -top-[2px] -right-[9px] text-rose-500">
//               *
//             </span>
//           )}
//         </p>
//         <h4 className="md:text-[20px] text-[17px] leading-[20px] mb-[30px]">{question}</h4>
//         <AnswersView
//           currentAnswer={answer}
//           setAnswer={setAnswer}
//           answers={answers}
//           questionType={questionType}
//         />
//       </div>
//     </TestCard>
//   );
// };
