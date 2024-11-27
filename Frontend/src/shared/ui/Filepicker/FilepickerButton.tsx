import clsx from 'clsx';
import { useCallback, useState } from 'react';
import { Button } from '../Button';
import { IconSwitcher } from './IconSwitcher';

type FilepickerButtonProps = {
  currentFile: File | null;
  fileInputRef: React.RefObject<HTMLInputElement>;
  onFileSelect: (file: File) => void;
  isSelected: boolean;
  setIsSelected: (value: boolean) => void;
};

export const FilepickerButton = ({
  currentFile,
  fileInputRef,
  onFileSelect,
  isSelected,
  setIsSelected,
}: FilepickerButtonProps) => {
  const [isDragOver, setIsDragOver] = useState<boolean>(false);

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
    [onFileSelect, setIsSelected]
  );

  const handleDragOver = useCallback(
    (event: React.DragEvent<HTMLButtonElement>) => {
      event.preventDefault();
      if (currentFile && isSelected) {
        setIsSelected(false);
      }
      setIsDragOver(true);
    },
    [currentFile, isSelected, setIsSelected]
  );

  const handleDragLeave = useCallback(() => {
    if (currentFile) {
      setIsSelected(true);
    }
    setIsDragOver(false);
  }, [currentFile, setIsSelected]);

  const handleClick = useCallback(() => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  }, [fileInputRef]);

  return (
    <Button
      className={clsx(
        'border-2 duration-300 border-dashed',
        isDragOver ? 'border-foreground' : 'border-foreground/60'
      )}
      color='secondary'
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
        {isSelected ? 'Файл выбран' : 'Выберите файл'}
      </span>
    </Button>
  );
};
