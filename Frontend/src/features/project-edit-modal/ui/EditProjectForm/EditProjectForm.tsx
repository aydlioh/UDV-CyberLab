import { Button, Input, Textarea } from '@/shared/ui';
import { Image } from '@nextui-org/react';

type EditProjectFormProps = {
  label: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
};

export const EditProjectForm = ({ label }: EditProjectFormProps) => {
  return (
    <form className="max-w-[524px] w-full mx-auto">
      <h2 className="mb-5 text-2xl text-center">{label}</h2>
      <div className="flex flex-col gap-7">
        <div className="flex sm:flex-row flex-col sm:justify-normal items-center gap-8">
          <Image
            isBlurred={true}
            fallbackSrc="https://avatars.mds.yandex.net/get-entity_search/5505928/924327095/S600xU_2x"
            className="sm:size-40 size-60 min-w-40"
          />
          <div className="w-full flex flex-col gap-2">
            <Input
              color="white"
              radius="sm"
              size="md"
              placeholder="Название проекта"
            />
            <Textarea
              minRows={5}
              maxRows={5}
              radius="sm"
              color="white"
              placeholder="Краткое описание"
              className="h-full"
            />
          </div>
        </div>
        <Textarea
          fullWidth
          placeholder="Подробное описание"
          minRows={8}
          maxRows={14}
          radius="sm"
          color="white"
        />
        <div className="md:grid grid-cols-3 gap-5 w-full max-h-40 hidden">
          <Image
            isBlurred={true}
            fallbackSrc="https://avatars.mds.yandex.net/get-entity_search/5505928/924327095/S600xU_2x"
            className="size-40"
          />
          <Image
            isBlurred={true}
            fallbackSrc="https://avatars.mds.yandex.net/get-entity_search/5505928/924327095/S600xU_2x"
            className="size-40"
          />
          <Image
            isBlurred={true}
            fallbackSrc="https://avatars.mds.yandex.net/get-entity_search/5505928/924327095/S600xU_2x"
            className="size-40"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Input
            color="white"
            radius="sm"
            size="md"
            placeholder="Ссылка на лендинг"
          />
          <Input
            color="white"
            radius="sm"
            size="md"
            placeholder="Ссылка на документацию"
          />
        </div>
      </div>
      <div className="w-full text-end sm:mt-10 mt-4">
        <Button className="sm:w-[160px] w-full" color="gradient" size="md">
          Сохранить
        </Button>
      </div>
    </form>
  );
};
