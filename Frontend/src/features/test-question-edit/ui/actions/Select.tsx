/* eslint-disable @typescript-eslint/no-unused-vars */
import { ComplianceQuestionDTO } from '@/shared/api/dto';
import { Button, Radio, RadioGroup } from '@/shared/ui';
import { IoMdClose } from 'react-icons/io';
import { IoAdd } from 'react-icons/io5';
import { InputWithFocus } from './InputWithFocus';
import { TextareaWithFocus } from './TextareaWithFocus';

export const SelectAction = ({
  question,
  changeQuestion,
}: {
  question: ComplianceQuestionDTO;
  changeQuestion: (value: Partial<ComplianceQuestionDTO>) => void;
}) => {
  const complianceArray = Object.entries(question.compliances);

  const handleChangeCorrectAnswer = (key: string, value: string) => {
    changeQuestion({
      rightCompliances: {
        ...question.rightCompliances,
        [key]: value,
      },
    });
  };

  const handleQuestionTitleChange = (key: string, value: string) => {
    changeQuestion({
      compliances: {
        ...question.compliances,
        [key]: value,
      },
    });
  };

  const handleDeleteQuestion = (key: string) => {
    const { [key]: _1, ...compliances } = question.compliances;
    const { [key]: _2, ...rightCompliances } = question.rightCompliances;
    const { [key]: _3, ...variants } = question.variants;

    changeQuestion({
      compliances,
      rightCompliances,
      variants,
    });
  };

  const handleNewQuestion = () => {
    changeQuestion({
      compliances: {
        ...question.compliances,
        [crypto.randomUUID()]: `Вопрос на сопоставление ${complianceArray.length + 1}`,
      },
    });
  };

  const handleChangeAnswer = (key: string, aIndex: number, value: string) => {
    // TODO_1 rightCOmplaince?
    changeQuestion({
      variants: {
        ...question.variants,
        [key]: question.variants[key].map((answer, i) =>
          i === aIndex ? value : answer
        ),
      },
    });
  };

  const handleDeleteAnswer = (key: string, aIndex: number) => {
    const variants = question.variants[key] || [];

    changeQuestion({
      variants: {
        ...question.variants,
        [key]: [...variants.slice(0, aIndex), ...variants.slice(aIndex + 1)],
      },
    });
  };

  const handleAddNewAnswer = (key: string) => {
    const variants = question.variants[key] || [];

    changeQuestion({
      variants: {
        ...question.variants,
        [key]: [...variants, `Вариант ${variants?.length + 1}`],
      },
    });
  };

  return (
    <div>
      {complianceArray.length ? (
        <>
          {complianceArray.map(([key, title]) => (
            <div key={key}>
              <div className="flex flex-row items-center gap-2">
                <TextareaWithFocus
                  value={title}
                  onChange={value => handleQuestionTitleChange(key, value)}
                />
                <Button
                  isIconOnly
                  size="md"
                  radius="sm"
                  variant="light"
                  onPress={() => handleDeleteQuestion(key)}
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
                      onValueChange={(value: string) =>
                        handleChangeCorrectAnswer(key, value)
                      }
                    >
                      {question.variants[key]?.map(
                        (answer: string, aIndex: number) => (
                          <div
                            key={aIndex + answer + key}
                            className="flex justify-between items-center"
                          >
                            <Radio
                              color="success"
                              key={aIndex}
                              value={answer}
                            />
                            <InputWithFocus
                              value={answer}
                              onChange={value =>
                                handleChangeAnswer(key, aIndex, value)
                              }
                            />
                            <Button
                              isIconOnly
                              radius="sm"
                              variant="light"
                              size="sm"
                              onPress={() => handleDeleteAnswer(key, aIndex)}
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
                      onPress={() => handleAddNewAnswer(key)}
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
                      onPress={() => handleAddNewAnswer(key)}
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
            onPress={handleNewQuestion}
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
            onPress={handleNewQuestion}
          >
            Добавить вопрос
          </Button>
        </div>
      )}
    </div>
  );
};
