import { useState } from 'react';
import { MdFileDownload, MdFileDownloadDone } from 'react-icons/md';
import { Button } from '../Button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  Tooltip,
} from '@nextui-org/react';
import { getFileIcon, isImage } from './utils';

export const FilePreview = ({
  fileUrl,
  currentFile,
}: {
  fileUrl: string | null;
  currentFile: File;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDownloadDone, setIsDownloadDone] = useState(false);

  const handleDownloadClick = () => {
    if (fileUrl && currentFile) {
      const link = document.createElement('a');
      link.href = fileUrl;
      link.download = currentFile.name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setIsDownloadDone(true);
      setTimeout(() => {
        setIsDownloadDone(false);
      }, 4000);
    }
  };

  const FileIcon = getFileIcon(currentFile.type);

  return isImage(currentFile.type) ? (
    <Popover
      isOpen={isOpen}
      onOpenChange={open => setIsOpen(open)}
      classNames={{
        content: 'p-0',
      }}
      placement="bottom-end"
      offset={20}
      showArrow
    >
      <PopoverTrigger>
        <span>
          <Tooltip
            className="rounded-[4px] bg-white"
            showArrow
            content="Превью файла"
            placement="right"
          >
            <Button
              onClick={() => setIsOpen(true)}
              radius="sm"
              color="primary"
              isIconOnly
            >
              <FileIcon size={34} />
            </Button>
          </Tooltip>
        </span>
      </PopoverTrigger>
      <PopoverContent className="max-w-[300px] overflow-hidden">
        <div className="group relative">
          <img src={fileUrl ?? ''} alt="Preview" />
          <Tooltip
            className="rounded-[4px] bg-white"
            showArrow
            content="Скачать файл"
            placement="bottom-end"
          >
            <Button
              isDisabled={isDownloadDone}
              className="absolute right-1 bottom-1"
              radius="sm"
              size="sm"
              isIconOnly
              onClick={handleDownloadClick}
            >
              {isDownloadDone ? (
                <MdFileDownloadDone size={25} />
              ) : (
                <MdFileDownload size={25} />
              )}
            </Button>
          </Tooltip>
        </div>
      </PopoverContent>
    </Popover>
  ) : (
    <Tooltip
      className="rounded-[4px] bg-white"
      showArrow
      content="Скачать файл"
      placement="right"
    >
      <Button
        isDisabled={isDownloadDone}
        radius="sm"
        color="primary"
        isIconOnly
        onClick={handleDownloadClick}
      >
        <FileIcon size={34} />
      </Button>
    </Tooltip>
  );
};
