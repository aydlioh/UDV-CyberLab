import { PreviewQuestionDTO } from '@/entities/test-info';
import { SavedAnswer, SavedFileAnswerDTO } from '@/entities/test-passing';
import { FileQuestionDTO } from '@/shared/api/dto';
import { Filepicker } from '@/shared/ui';
import { useState } from 'react';

export const FileAnswer = ({
  question,
  setCurrentAnswer,
}: {
  previewAnswer?: PreviewQuestionDTO;
  question: FileQuestionDTO;
  setCurrentAnswer?: (answer: SavedAnswer) => void;
  currentAnswer?: SavedFileAnswerDTO | null;
}) => {
  const [file, setFile] = useState<File | null>(null);

  return (
    <>
      <Filepicker
        currentFile={file}
        onFileSelect={file => {
          setCurrentAnswer?.({
            userFileContent: 'answer',
            questionId: question.id,
          });
          setFile(file);
        }}
      />
    </>
  );
};
