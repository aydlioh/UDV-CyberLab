import { Filepicker } from '@/shared/ui';

export const FileAnswer = ({
  setAnswer,
  currentAnswer,
}: {
  setAnswer: (answer: File) => void;
  currentAnswer: File;
}) => {
  return <Filepicker currentFile={currentAnswer} onFileSelect={setAnswer} />;
};
