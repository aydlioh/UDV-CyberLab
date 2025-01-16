import { Button, Checkbox, CheckboxGroup, Input } from '@/shared/ui';
import { IoAdd } from 'react-icons/io5';
import { IoMdClose } from 'react-icons/io';

export const CheckboxAction = ({
  question,
  changeQuestion,
}: {
  question?: string[];
  changeQuestion:
}) => {
  const handleAddNewAnswer = (newAnswer: string) => {
    changeAnswers?.([...(answers ?? []), newAnswer]);
  };

  const handleDeleteAnswer = (index: number) => {
    changeAnswers?.(answers?.filter((_, i) => i !== index) ?? []);
    changeCorrectAnswers?.(correctAnswers?.filter((_, i) => i !== index) ?? []);
  };

  const handleChangeAnswer = (index: number, value: string) => {
    changeAnswers?.(
      answers?.map((answer, i) => (i === index ? value : answer)) ?? []
    );
  };

  return (
    <>
      {answers?.length ? (
        <>
          <CheckboxGroup
            value={correctAnswers ?? []}
            onValueChange={changeCorrectAnswers}
          >
            {answers?.map((answer: string, index: number) => (
              <div key={index} className="flex justify-between items-center">
                <Checkbox
                  color="success"
                  classNames={{
                    icon: 'text-white',
                  }}
                  radius="sm"
                  size="md"
                  value={answer}
                />
                <Input
                  value={answer}
                  onValueChange={value => handleChangeAnswer(index, value)}
                  className="w-full mr-2"
                  variant="underlined"
                />
                <Button
                  isIconOnly
                  radius="sm"
                  variant="light"
                  size="sm"
                  onPress={() => handleDeleteAnswer(index)}
                >
                  <IoMdClose size={16} />
                </Button>
              </div>
            ))}
          </CheckboxGroup>
          <Button
            radius="sm"
            variant="light"
            className="text-[13px] mt-2"
            size="sm"
            onPress={() => handleAddNewAnswer(`Вариант ${answers?.length + 1}`)}
            startContent={<IoAdd size={16} />}
          >
            Добавить
          </Button>
        </>
      ) : (
        <div className="text-center text-second">
          <p>Варианты ответов на вопрос отсутствуют</p>
          <Button
            radius="sm"
            variant="light"
            className="text-[13px] mt-2"
            size="sm"
            onPress={() => handleAddNewAnswer('Вариант 1')}
          >
            Добавить
          </Button>
        </div>
      )}
    </>
  );
};
