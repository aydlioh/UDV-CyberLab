import { useCallback, useRef, useState, useEffect } from 'react';
import { FilePreview } from './FilePreview';
import { FilepickerButton } from './FilepickerButton';

type FilepickerProps = {
  currentFile: File | null;
  onFileSelect: (file: File) => void;
};

export const Filepicker = ({ onFileSelect, currentFile }: FilepickerProps) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [isSelected, setIsSelected] = useState<boolean>(Boolean(currentFile));
  const [fileUrl, setFileUrl] = useState<string | null>(null);

  const handleFileInput = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        setIsSelected(true);
        onFileSelect(file);
      }
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    },
    [onFileSelect]
  );

  useEffect(() => {
    if (currentFile) {
      const url = URL.createObjectURL(currentFile);
      setFileUrl(url);

      return () => {
        URL.revokeObjectURL(url);
        setFileUrl(null);
      };
    }
  }, [currentFile]);

  return (
    <div className="flex sm:flex-row flex-col sm:items-center gap-2">
      <FilepickerButton
        fileInputRef={fileInputRef}
        isSelected={isSelected}
        setIsSelected={setIsSelected}
        currentFile={currentFile}
        onFileSelect={onFileSelect}
      />
      <input
        ref={fileInputRef}
        type="file"
        onChange={handleFileInput}
        className="hidden"
      />
      {currentFile && (
        <FilePreview fileUrl={fileUrl} currentFile={currentFile} />
      )}
    </div>
  );
};
