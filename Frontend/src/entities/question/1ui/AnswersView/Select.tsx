// import { useMediaQuery } from '@/shared/hooks';
// import { Select, SelectItem } from '@/shared/ui';

// export const SelectAnswer = ({
//   answers,
//   setAnswer,
//   currentAnswer,
// }: {
//   answers: string[];
//   setAnswer: (answer: string) => void;
//   currentAnswer: string;
// }) => {
//   const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

//   return (
//     <Select
//       size="sm"
//       listboxProps={{
//         itemClasses: {
//           base: 'data-[hover=true]:bg-[#CDCDE3] data-[selectable=true]:focus:text-foreground data-[hover=true]:text-foreground data-[selectable=true]:focus:bg-[#CDCDE3]',
//         },
//       }}
//       popoverProps={{
//         placement: isMobile ? 'top-start' : 'right-start',
//       }}
//       selectedKeys={[currentAnswer]}
//       onChange={e => setAnswer(e.target.value)}
//       label="Выбрать ответ"
//       className="sm:max-w-[300px] w-full"
//     >
//       {answers.map(answer => (
//         <SelectItem key={answer}>{answer}</SelectItem>
//       ))}
//     </Select>
//   );
// };
