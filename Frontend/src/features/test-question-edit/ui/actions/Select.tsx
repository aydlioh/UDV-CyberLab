import { ComplianceQuestionDTO } from '@/shared/api/dto';
import { Button, Input, Radio, RadioGroup, Textarea } from '@/shared/ui';
import { IoMdClose } from 'react-icons/io';
import { IoAdd } from 'react-icons/io5';

export const SelectAction = ({
  question,
}: {
  question: ComplianceQuestionDTO;
  changeQuestion: (value: Partial<ComplianceQuestionDTO>) => void;
}) => {
  // const handleQuestionTitleChange = (index: number, value: string) => {
  //   changeAnswers?.(
  //     answers?.map((answer, i) =>
  //       i === index ? { ...answer, title: value } : answer
  //     ) ?? []
  //   );
  //   changeCorrectAnswers?.(
  //     correctAnswers?.map((answer, i) =>
  //       i === index ? { ...answer, title: value } : answer
  //     ) ?? []
  //   );
  // };

  // const handleDeleteQuestion = (index: number) => {
  //   changeAnswers?.(answers?.filter((_, i) => i !== index) ?? []);
  //   changeCorrectAnswers?.(correctAnswers?.filter((_, i) => i !== index) ?? []);
  // };

  // const handleChangeAnswer = (
  //   qIndex: number,
  //   aIndex: number,
  //   value: string
  // ) => {
  //   changeAnswers?.(
  //     answers?.map((question, qi) =>
  //       qi === qIndex
  //         ? {
  //             ...question,
  //             items: question.items.map((item, ai) =>
  //               ai === aIndex ? value : item
  //             ),
  //           }
  //         : question
  //     ) ?? []
  //   );
  // };

  // const handleDeleteAnswer = (qIndex: number, aIndex: number) => {
  //   changeAnswers?.(
  //     answers?.map((question, qi) =>
  //       qi === qIndex
  //         ? {
  //             ...question,
  //             items: question.items.filter((_, ai) => ai !== aIndex),
  //           }
  //         : question
  //     ) ?? []
  //   );
  // };

  // const handleAddNewAnswer = (qIndex: number) => {
  //   changeAnswers?.(
  //     answers?.map((question, qi) =>
  //       qi === qIndex
  //         ? {
  //             ...question,
  //             items: [
  //               ...question.items,
  //               `Вариант ${question.items.length + 1}`,
  //             ],
  //           }
  //         : question
  //     ) ?? []
  //   );
  // };

  // const handleNewQuestion = () => {
  //   const title = `Вопрос ${(answers?.length || 0) + 1}`;
  //   changeAnswers?.([...(answers ?? []), { title, items: [] }]);
  //   changeCorrectAnswers?.([...(correctAnswers ?? []), { title, item: '' }]);
  // };

  return (
    <div>
      {Object.entries(question.compliances).length ? (
        <>
          {Object.entries(question.compliances).map(([key, title]) => (
            <div key={key}>
              <div className="flex flex-row items-center gap-2">
                <Textarea
                  value={title ?? ''}
                  // onValueChange={value =>
                  //   handleQuestionTitleChange(qIndex, value)
                  // }
                  classNames={{
                    inputWrapper: 'rounded-[8px]',
                    input: 'without-scrollbar',
                  }}
                  minRows={1}
                  color="white"
                  aria-label="Текст вопроса"
                  placeholder="Вопрос"
                />
                <Button
                  isIconOnly
                  size="md"
                  radius="sm"
                  variant="light"
                  // onPress={() => handleDeleteQuestion(qIndex)}
                >
                  <IoMdClose size={16} />
                </Button>
              </div>
              <div className="pl-6 py-3">
                {question.variants[key]?.length ? (
                  <>
                    <p className="text-[13px] mb-3">Варианты списка:</p>
                    <RadioGroup
                      value={question.rightCompliances[key] || ''}
                      // onValueChange={item =>
                      //   changeCorrectAnswers?.(
                      //     correctAnswers?.map(ca =>
                      //       ca.title === title ? { ...ca, item } : ca
                      //     ) ?? []
                      //   )
                      // }
                    >
                      {question.variants[key]?.map(
                        (answer: string, aIndex: number) => (
                          <div
                            key={aIndex}
                            className="flex justify-between items-center"
                          >
                            <Radio
                              color="success"
                              key={aIndex}
                              value={answer}
                            />
                            <Input
                              value={answer}
                              // onValueChange={value =>
                              //   handleChangeAnswer(qIndex, aIndex, value)
                              // }
                              className="w-full mr-2"
                              variant="underlined"
                            />
                            <Button
                              isIconOnly
                              radius="sm"
                              variant="light"
                              size="sm"
                              // onPress={() => handleDeleteAnswer(qIndex, aIndex)}
                            >
                              <IoMdClose size={16} />
                            </Button>
                          </div>
                        )
                      )}
                    </RadioGroup>
                    <Button
                      radius="sm"
                      variant="light"
                      className="text-[13px] mt-2"
                      size="sm"
                      // onPress={() => handleAddNewAnswer(qIndex)}
                      startContent={<IoAdd size={16} />}
                    >
                      Добавить
                    </Button>
                  </>
                ) : (
                  <div className="text-center text-second">
                    <p>Варианты ответов отсутствуют</p>
                    <Button
                      radius="sm"
                      variant="light"
                      className="text-[13px] mt-2"
                      size="sm"
                      // onPress={() => handleAddNewAnswer(qIndex)}
                    >
                      Добавить
                    </Button>
                  </div>
                )}
              </div>
            </div>
          ))}
          <Button
            radius="sm"
            variant="light"
            className="text-[13px] mt-2"
            size="sm"
            startContent={<IoAdd size={16} />}
            // onPress={handleNewQuestion}
          >
            Добавить вопрос
          </Button>
        </>
      ) : (
        <div className="text-center text-second">
          <p>Вопросы на сопоставление отсутствуют</p>
          <Button
            radius="sm"
            variant="light"
            className="text-[13px] mt-2"
            size="sm"
            // onPress={handleNewQuestion}
          >
            Добавить вопрос
          </Button>
        </div>
      )}
    </div>
  );
};
