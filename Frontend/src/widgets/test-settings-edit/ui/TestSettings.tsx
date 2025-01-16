import { Card, Input } from '@/shared/ui';
import { useState } from 'react';
import { DatePicker, Switch, TimeInput } from '@nextui-org/react';

// TODO_1 добавить когда время начала/конца будет опциональным
// const selectClassNames = {
//   itemClasses: {
//     base: 'data-[hover=true]:bg-controls data-[selectable=true]:focus:text-foreground data-[hover=true]:text-foreground data-[selectable=true]:focus:bg-controls',
//   },
// };

export const TestSettings = () => {
  // TODO_1 добавить когда время начала/конца будет опциональным
  // const [startDateType, setStartDateType] = useState<string>('');
  // const [endDateType, setEndDateType] = useState<string>('');
  const [isLimited, setIsLimited] = useState<boolean>(false);
  const [withTimeLimit, setWithTimeLimit] = useState<boolean>(false);

  const [startDate, setStartDate] = useState<string | null>(null);
  const [endDate, setEndDate] = useState<string | null>(null);
  const [attemptsCount, setAttemptsCount] = useState<number>(1);
  const [testDuration, setTestDuration] = useState<string | null>(null);

  return (
    <Card className="sm:p-[40px] p-[25px]">
      <div className="mb-6">
        <div className="flex sm:flex-row flex-col gap-3 mb-4">
          <div className="sm:w-1/2 flex flex-col gap-4">
            {/* // TODO_1 добавить когда время начала/конца будет опциональным */}
            {/* <Select
              color="white"
              aria-label="Время открытия теста"
              label="Время открытия теста"
              listboxProps={selectClassNames}
              popoverProps={{
                placement: 'bottom-end',
              }}
              selectedKeys={[startDateType]}
              onChange={e => setStartDateType(e.target.value)}
              className="w-full"
              classNames={{
                value: 'text-[16px] text-foreground/50',
              }}
            >
              {startDates.map(({ label, key }) => (
                <SelectItem key={key}>{label}</SelectItem>
              ))}
            </Select>
            {startDateType === 'fixed' && endDateType !== 'fixed' && ( */}
            <DatePicker
              isRequired
              errorMessage="Заполните дату и время открытия"
              dateInputClassNames={{
                input: 'text-[16px] text-foreground',
                inputWrapper:
                  'hover:bg-controls focus-within:hover:bg-controls',
              }}
              classNames={{
                timeInput: 'text-[16px] text-foreground',
                selectorIcon:
                  'text-foreground/90 group-data-[invalid=true]:text-rose-500',
              }}
              radius="sm"
              size="lg"
              aria-label="Время открытия"
            />
            {/* )} */}
          </div>
          <div className="sm:w-1/2 flex flex-col gap-4">
            {/* // TODO_1 добавить когда время начала/конца будет опциональным */}
            {/* <Select
              color="white"
              aria-label="Время закрытия теста"
              label="Время закрытия теста"
              listboxProps={selectClassNames}
              popoverProps={{
                placement: 'bottom-end',
              }}
              selectedKeys={[endDateType]}
              onChange={e => setEndDateType(e.target.value)}
              className="w-full"
              classNames={{
                value: 'text-[16px] text-foreground/50',
              }}
            >
              {endDates.map(({ label, key }) => (
                <SelectItem key={key}>{label}</SelectItem>
              ))}
            </Select>
            {endDateType === 'fixed' && startDateType !== 'fixed' && ( */}
            <DatePicker
              isRequired
              errorMessage="Заполните дату и время закрытия"
              dateInputClassNames={{
                input: 'text-[16px] text-foreground',
                inputWrapper:
                  'hover:bg-controls focus-within:hover:bg-controls',
              }}
              classNames={{
                timeInput: 'text-[16px] text-foreground',
                selectorIcon:
                  'text-foreground/90 group-data-[invalid=true]:text-rose-500',
              }}
              radius="sm"
              size="lg"
              aria-label="Время закрытия"
            />
            {/* )} */}
          </div>
        </div>
        {/* // TODO_1 добавить когда время начала/конца будет опциональным */}
        {/* {startDateType === 'fixed' && endDateType === 'fixed' && (
          <div>
            <DateRangePicker
              isRequired
              calendarProps={{
                classNames: {
                  title: 'text-[15px] text-foreground',
                  prevButton:
                    'text-foreground/80 data-[hover=true]:bg-second/10',
                  nextButton:
                    'text-foreground/80 data-[hover=true]:bg-second/10',
                  gridHeaderCell: 'text-foreground/80',
                  cellButton:
                    'data-[outside-month=true]:text-second/40 data-[selected=true]:data-[selection-start=true]:data-[range-selection=true]:bg-main-gradient data-[selected=true]:data-[selection-end=true]:data-[range-selection=true]:bg-second-gradient data-[selected=true]:data-[range-selection=true]:before:bg-second/15 data-[selected=true]:data-[range-selection=true]:text-foreground hover:bg-second/10 data-[outside-month=true]:hover:bg-transparent',
                },
              }}
              errorMessage="Заполните дату и время экзамена"
              classNames={{
                timeInput: 'text-[16px] text-foreground',
                selectorIcon:
                  'text-foreground/90 group-data-[invalid=true]:text-rose-500',
              }}
              radius="sm"
              size="lg"
              aria-label="Время"
            />
          </div>
        )} */}
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <div className="flex flex-row gap-2 items-center">
            <p>Ограничить количество попыток</p>
            <Switch
              value={String(isLimited)}
              onValueChange={setIsLimited}
              size="sm"
              classNames={{
                thumb:
                  'bg-foreground group-data-[selected=true]:bg-controlsPrimary',
                wrapper:
                  'bg-controlsPrimary group-data-[selected=true]:bg-foreground',
              }}
              aria-label="Automatic updates"
            />
          </div>
          {isLimited && (
            <div className="flex flex-row gap-3 items-center">
              <p className="text-[14px] text-foreground/70">
                Количество попыток:
              </p>
              <Input
                defaultValue="1"
                isRequired
                color="white"
                size="sm"
                classNames={{
                  base: 'w-[60px]',
                }}
                type="number"
                max={100}
                min={1}
                aria-label="Количество попыток"
              />
            </div>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex flex-row gap-2 items-center">
            <p>Ограничить по времени</p>
            <Switch
              value={String(withTimeLimit)}
              onValueChange={setWithTimeLimit}
              size="sm"
              classNames={{
                thumb:
                  'bg-foreground group-data-[selected=true]:bg-controlsPrimary',
                wrapper:
                  'bg-controlsPrimary group-data-[selected=true]:bg-foreground',
              }}
              aria-label="Automatic updates"
            />
          </div>
          {withTimeLimit && (
            <div className="flex flex-row gap-3 items-center">
              <p className="text-[14px] text-foreground/70">
                Длительность теста:
              </p>
              <TimeInput
                isRequired
                className="w-[60px]"
                hideTimeZone
                hourCycle={24}
                size="sm"
                classNames={{
                  inputWrapper:
                    'hover:bg-controls focus-within:hover:bg-controls',
                  input: 'text-[16px] text-foreground justify-center',
                }}
                aria-label="Длительность теста"
              />
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};
