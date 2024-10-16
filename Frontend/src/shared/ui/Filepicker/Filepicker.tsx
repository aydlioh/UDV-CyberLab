import { useCallback, useRef, useState, useEffect } from 'react';
import { IconSwitcher } from './IconSwitcher';
import { Button } from '../Button';
import clsx from 'clsx';

type FilepickerProps = {
  currentFile: File | null;
  onFileSelect: (file: File) => void;
};

export const Filepicker = ({ onFileSelect, currentFile }: FilepickerProps) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [isDragOver, setIsDragOver] = useState<boolean>(false);
  const [isSelected, setIsSelected] = useState<boolean>(false);
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

  const handleDrop = useCallback(
    (event: React.DragEvent<HTMLButtonElement>) => {
      event.preventDefault();
      setIsDragOver(false);
      const file = event.dataTransfer.files?.[0];
      if (file) {
        setIsSelected(true);
        onFileSelect(file);
      }
    },
    [onFileSelect]
  );

  const handleDragOver = useCallback(
    (event: React.DragEvent<HTMLButtonElement>) => {
      event.preventDefault();
      if (currentFile && isSelected) {
        setIsSelected(false);
      }
      setIsDragOver(true);
    },
    [currentFile, isSelected]
  );

  const handleDragLeave = useCallback(() => {
    if (currentFile) {
      setIsSelected(true);
    }
    setIsDragOver(false);
  }, [currentFile]);

  const handleClick = useCallback(() => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  }, []);

  const handleDownloadClick = () => {
    if (fileUrl && currentFile) {
      const link = document.createElement('a');
      link.href = fileUrl;
      link.download = currentFile.name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

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
    <div className="flex sm:flex-row flex-col sm:items-center gap-5">
      <Button
        className={clsx(
          'border-2 duration-300 border-dashed',
          isDragOver ? 'border-foreground' : 'border-transparent'
        )}
        color="secondary"
        onClick={handleClick}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        radius="sm"
        startContent={
          <IconSwitcher isSelected={isSelected} isDragOver={isDragOver} />
        }
      >
        <span className={isDragOver ? 'animate-pulse duration-300' : ''}>
          Выберите файл
        </span>
      </Button>
      <input
        ref={fileInputRef}
        type="file"
        onChange={handleFileInput}
        className="hidden"
      />
      {currentFile && (
        <div
          className="text-blue-500 hover:underline cursor-pointer"
          onClick={handleDownloadClick}
        >
          Превью
        </div>
      )}
    </div>
  );
};
