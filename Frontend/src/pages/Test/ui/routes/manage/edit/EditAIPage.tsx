import { TestTitleEdit } from '@/features/test-edit';
import { EditTestSwitcher } from './EditTestSwitcher';
import { FileDropArea } from '@/shared/ui/Filepicker/FileDropArea/FileDropArea';
import { useState } from 'react';

const EditAIPage = () => {
  const [file, setFile] = useState<File | null>(null);

  return (
    <div className="flex flex-col gap-[12px]">
      <TestTitleEdit />
      <FileDropArea currentFile={file} onFileSelect={setFile} />
      <EditTestSwitcher />
    </div>
  );
};

export default EditAIPage;
