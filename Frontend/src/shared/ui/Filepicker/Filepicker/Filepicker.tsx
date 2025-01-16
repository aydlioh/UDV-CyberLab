import { FilePreview } from './FilePreview';
import { FilepickerButton } from './FilepickerButton';
import { useFilepicker } from '../hooks';

type FilepickerProps = {
  currentFile: File | null;
  onFileSelect?: (file: File) => void;
};

export const Filepicker = ({ onFileSelect, currentFile }: FilepickerProps) => {
  const {
    fileInputRef,
    handleClick,
    handleFileInput,
    isSelected,
    setIsSelected,
  } = useFilepicker({ onFileSelect, currentFile });

  return (
    <div className="flex sm:flex-row flex-col sm:items-center gap-2">
      <FilepickerButton
        fileInputRef={fileInputRef}
        isSelected={isSelected}
        setIsSelected={setIsSelected}
        currentFile={currentFile}
        handleFileChange={onFileSelect}
        handleClick={handleClick}
      />
      {onFileSelect && (
        <input
          tabIndex={-1}
          ref={fileInputRef}
          type="file"
          onChange={handleFileInput}
          className="hidden"
        />
      )}
      {currentFile && <FilePreview currentFile={currentFile} />}
    </div>
  );
};
