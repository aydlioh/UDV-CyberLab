// import { Input } from '@/shared/ui';
// import { useEffect, useState } from 'react';

// export const ShortTextAnswer = ({
//   setAnswer,
//   currentAnswer,
// }: {
//   setAnswer: (answer: string) => void;
//   currentAnswer: string;
// }) => {
//   const [value, setValue] = useState(currentAnswer || '');

//   // TODO debounce for zustand?
//   useEffect(() => {
//     setAnswer(value);
//   }, [setAnswer, value]);

//   return (
//     <Input
//       placeholder="Краткий ответ"
//       variant="underlined"
//       value={value}
//       onChange={e => setValue(e.target.value)}
//     />
//   );
// };
