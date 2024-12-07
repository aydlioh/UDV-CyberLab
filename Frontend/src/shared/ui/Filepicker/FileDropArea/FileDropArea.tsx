import clsx from 'clsx';
import { useDragAndDrop } from '../hooks/useDragAndDrop';
import { useFilepicker } from '../hooks/useFilepicker';

type FileDropAreaProps = {
  currentFile: File | null;
  onFileSelect: (file: File) => void;
};

export const FileDropArea = ({
  currentFile,
  onFileSelect,
}: FileDropAreaProps) => {
  const {
    fileInputRef,
    handleClick,
    handleFileInput,
    isSelected,
    setIsSelected,
  } = useFilepicker({ onFileSelect, currentFile });

  const { isDragOver, handleDrop, handleDragOver, handleDragLeave } =
    useDragAndDrop({
      currentFile,
      isSelected,
      setIsSelected,
      handleFileChange: onFileSelect,
    });

  return (
    <button
      className={clsx(
        'relative cursor-pointer h-[342px] w-full custom-outline border-second border-2 border-dashed rounded-[20px] duration-200',
        isDragOver
          ? 'border-foreground animate-pulse duration-300'
          : 'border-second'
      )}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onClick={handleClick}
    >
      <div className="flex h-full items-center justify-center gap-[10px] flex-col">
        <h4 className="text-[24px]">Загрузите файл</h4>
        <span>
          {isSelected ? (
            'Файл выбран'
          ) : (
            <>
              Перетащите файл или{' '}
              <span className="text-second">нажмите загрузить</span>
            </>
          )}
        </span>
      </div>

      <input
        tabIndex={-1}
        type="file"
        ref={fileInputRef}
        className="absolute opacity-0 pointer-events-none"
        onChange={handleFileInput}
      />
    </button>
  );
};
