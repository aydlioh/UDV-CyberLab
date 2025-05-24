import { Button, FileDropArea, Input, Textarea } from '@/shared/ui';
import { ProjectFormInputs, projectSchema } from './schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useState } from 'react';
import { MdOutlineAddPhotoAlternate } from 'react-icons/md';
import { UpdateProjectDTO } from '@/entities/project';
import clsx from 'clsx';
import { useProjectEditModal } from '../../model/store';

type ProjectEditFormProps = {
  label: string;
  defaultData?: UpdateProjectDTO;
  onSubmit: (data: ProjectFormInputs) => Promise<void>;
  isPending: boolean;
};

export const ProjectEditForm = ({
  label,
  defaultData,
  onSubmit,
  isPending,
}: ProjectEditFormProps) => {
  const [isFilesDirty, setIsFilesDirty] = useState(false);
  const close = useProjectEditModal(state => state.close);
  const [images, setImages] = useState<File[]>([]);

  const {
    handleSubmit,
    reset,
    control,
    watch,
    setValue,
    trigger,
    formState: { errors, isDirty },
  } = useForm<ProjectFormInputs>({
    resolver: zodResolver(projectSchema),
    defaultValues: defaultData,
  });

  const logo = watch('logoPhoto');
  const docs = watch('documentation');

  const onFileChange = (file: File, type: 'logoPhoto' | 'documentation') => {
    setIsFilesDirty(true);
    setValue(type, file);
    trigger(type);
  };

  const onReset = () => {
    reset();
    close();
  };

  const onSubmitHandler: SubmitHandler<ProjectFormInputs> = formData => {
    onSubmit(formData).then(onReset);
  };

  const isNameError = errors.name !== undefined;
  const isShortDescriptionError = errors.shortDescription !== undefined;
  const isDescriptionError = errors.description !== undefined;
  const isLandingUrlError = errors.landingURL !== undefined;

  const isLogoError = errors.logoPhoto !== undefined;
  const isDocumentationError = errors.documentation !== undefined;

  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className="max-w-[524px] w-full mx-auto"
    >
      <h2 className="mb-5 text-2xl text-center">{label}</h2>
      <div className="flex flex-col gap-4">
        <div className="flex sm:flex-row flex-col sm:justify-normal items-center gap-8">
          <div className="w-40 h-40">
            <FileDropArea
              withPreview
              filePatterns="image/*"
              classNames={{
                container: clsx(
                  '!h-40 !w-40',
                  isLogoError && '!border-rose-400'
                ),
              }}
              currentFile={logo}
              onFileSelect={file => onFileChange(file, 'logoPhoto')}
            >
              <MdOutlineAddPhotoAlternate
                className={clsx(
                  'group-hover:text-foreground/70 transition-colors',
                  isLogoError && 'text-rose-500 group-hover:text-rose-400'
                )}
                size={50}
              />
            </FileDropArea>
          </div>
          <div className="w-full flex flex-col gap-2">
            <Controller
              name="name"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  color="white"
                  radius="sm"
                  size="md"
                  isInvalid={isNameError}
                  errorMessage={errors.name?.message}
                  {...field}
                  placeholder="Название проекта"
                />
              )}
            />

            <Controller
              name="shortDescription"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Textarea
                  minRows={5}
                  maxRows={5}
                  radius="sm"
                  color="white"
                  isInvalid={isShortDescriptionError}
                  errorMessage={errors.shortDescription?.message}
                  {...field}
                  placeholder="Краткое описание"
                  className="h-full"
                />
              )}
            />
          </div>
        </div>
        <Controller
          name="description"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Textarea
              fullWidth
              isInvalid={isDescriptionError}
              errorMessage={errors.description?.message}
              {...field}
              placeholder="Подробное описание"
              minRows={8}
              maxRows={14}
              radius="sm"
              color="white"
            />
          )}
        />

        <Controller
          name="landingURL"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Input
              color="white"
              radius="sm"
              size="md"
              isInvalid={isLandingUrlError}
              errorMessage={errors.landingURL?.message}
              {...field}
              placeholder="Ссылка на лендинг"
            />
          )}
        />

        <div>
          <p className="text-sm mb-2">Фотографии проекта</p>
          <div className="md:grid grid-cols-3 gap-5 w-full h-40 hidden">
            {images.map((image, index) => (
              <div key={index} className="flex justify-center">
                <FileDropArea
                  withPreview
                  filePatterns="image/*"
                  classNames={{
                    container: 'h-40 w-40',
                    title: 'sm:text-[15px] text-[12px] mb-1',
                    description: 'sm:text-[12px] text-[10px]',
                  }}
                  currentFile={image}
                  onFileSelect={file =>
                    setImages(prev => [
                      ...prev.slice(0, index),
                      file,
                      ...prev.slice(index + 1),
                    ])
                  }
                />
              </div>
            ))}
            {images.length < 3 && (
              <FileDropArea
                filePatterns="image/*"
                classNames={{
                  container: 'h-40',
                  title: 'sm:text-[15px] text-[12px] mb-1',
                  description: 'sm:text-[12px] text-[10px]',
                }}
                currentFile={images[images.length]}
                onFileSelect={file => setImages(prev => [...prev, file])}
              >
                <MdOutlineAddPhotoAlternate
                  className="group-hover:text-foreground/70 transition-colors"
                  size={50}
                />
              </FileDropArea>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p
            className={clsx('text-sm', isDocumentationError && 'text-rose-500')}
          >
            Файл документации
          </p>
          <FileDropArea
            filePatterns=".doc,.docx,.pdf"
            classNames={{
              container: clsx(
                'h-24 rounded-lg',
                isDocumentationError && '!border-rose-400'
              ),
              title: clsx(
                'sm:text-[18px] text-[16px] mb-1',
                isDocumentationError && '!text-rose-500'
              ),
              description: clsx(
                'sm:text-[14px] text-[12px]',
                isDocumentationError && '!text-rose-500'
              ),
            }}
            currentFile={docs}
            onFileSelect={file => onFileChange(file, 'documentation')}
          />
          {errors.documentation?.message && (
            <p className="text-rose-500 text-[12px]">
              {errors.documentation?.message}
            </p>
          )}
        </div>
      </div>
      <div className="w-full text-end sm:mt-10 mt-4">
        <Button
          isDisabled={!isFilesDirty ? !isDirty : !isFilesDirty}
          isLoading={isPending}
          type="submit"
          className="sm:w-[160px] w-full"
          color="gradient"
          size="md"
        >
          Сохранить
        </Button>
      </div>
    </form>
  );
};
