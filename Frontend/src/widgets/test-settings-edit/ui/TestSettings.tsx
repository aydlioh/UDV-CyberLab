/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Card, Input } from '@/shared/ui';
import { useEffect, useRef, useState } from 'react';
import { DateRangePicker, Switch, TimeInput } from '@nextui-org/react';
import { TestEditingDTO } from '@/entities/test-editing';
import {
  parseAbsoluteToLocal,
  parseTime,
  Time,
  ZonedDateTime,
} from '@internationalized/date';
import { useUpdateTestSettings } from '../api/mutations/useUpdateTestSettings';

export const TestSettings = ({ data }: { data: TestEditingDTO }) => {
  const { mutate } = useUpdateTestSettings();
  const ref = useRef<TestEditingDTO | null>(null);
  const [isLimited, _] = useState<boolean>(true);
  const [withTimeLimit, setWithTimeLimit] = useState<boolean>(
    Boolean(data.passTestTime)
  );

  const [testDates, setTestDates] = useState<{
    start: ZonedDateTime;
    end: ZonedDateTime;
  }>({
    start: parseAbsoluteToLocal(data.startTestTime),
    end: parseAbsoluteToLocal(data.endTestTime),
  });

  const [attemptsCount, setAttemptsCount] = useState<number>(
    data.attemptsCount
  );

  const [testDuration, setTestDuration] = useState<Time | null>(
    data.passTestTime ? parseTime(data.passTestTime) : null
  );
  useEffect(() => {
    return () => {
      if (ref.current) {
        mutate(ref.current);
      }
    };
  }, [mutate]);

  useEffect(() => {
    ref.current = {
      ...data,
      startTestTime: testDates.start.toAbsoluteString(),
      endTestTime: testDates.end.toAbsoluteString(),
      attemptsCount,
      passTestTime: withTimeLimit ? testDuration?.toString() : undefined,
    };
  }, [attemptsCount, data, testDates.end, testDates.start, testDuration, withTimeLimit]);

  return (
    <Card className="sm:p-[40px] p-[25px]">
      <div className="mb-6">
        <div className="flex sm:flex-row flex-col gap-3 mb-4">
          <div className="sm:w-1/2 flex flex-col gap-4"></div>
          <div className="sm:w-1/2 flex flex-col gap-4"></div>
        </div>
        <DateRangePicker
          label="Время теста"
          labelPlacement="inside"
          isRequired
          value={testDates as any}
          onChange={e => setTestDates(e as any)}
          calendarProps={{
            classNames: {
              title: 'text-[15px] text-foreground',
              prevButton: 'text-foreground/80 data-[hover=true]:bg-second/10',
              nextButton: 'text-foreground/80 data-[hover=true]:bg-second/10',
              gridHeaderCell: 'text-foreground/80',
              cellButton:
                'data-[outside-month=true]:text-second/40 data-[selected=true]:data-[selection-start=true]:data-[range-selection=true]:bg-main-gradient data-[selected=true]:data-[selection-end=true]:data-[range-selection=true]:bg-second-gradient data-[selected=true]:data-[range-selection=true]:before:bg-second/15 data-[selected=true]:data-[range-selection=true]:text-foreground hover:bg-second/10 data-[outside-month=true]:hover:bg-transparent',
            },
          }}
          errorMessage="Неверный формат даты и времени теста"
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
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <div className="flex flex-row gap-2 items-center">
            <p>Ограничить количество попыток</p>
            <Switch
              isSelected
              isDisabled
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
                value={String(attemptsCount)}
                onChange={e => setAttemptsCount(Number(e.target.value))}
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
              isSelected={withTimeLimit}
              onChange={e => setWithTimeLimit(e.target.checked)}
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
                value={testDuration as any}
                onChange={(e: any) => {
                  setTestDuration(e);
                }}
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
