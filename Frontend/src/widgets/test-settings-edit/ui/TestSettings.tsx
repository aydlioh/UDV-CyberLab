/* eslint-disable @typescript-eslint/no-unused-vars */
import { Card } from '@/shared/ui';
import { useCallback, useEffect, useRef, useState } from 'react';
import {
  parseAbsoluteToLocal,
  parseTime,
  Time,
  ZonedDateTime,
} from '@internationalized/date';
import { useUpdateTestSettings } from '../api/mutations/useUpdateTestSettings';
import { SettingsInfoUtils } from './SettingsInfoUtils';
import { SettingsDatepicker } from './SettingsDatepicker';
import { getTestInfo, TestEditingDTO } from '@/entities/test-editing';
import { UpdateTestDTO } from '@/entities/test-info';

type TestDate = {
  start: ZonedDateTime;
  end: ZonedDateTime;
};

export const TestSettings = ({ data }: { data: TestEditingDTO }) => {
  const { mutate } = useUpdateTestSettings();
  const ref = useRef<UpdateTestDTO | null>(null);
  const [isLimited, _] = useState<boolean>(true);
  const [withTimeLimit, setWithTimeLimit] = useState<boolean>(
    Boolean(data.passTestTime)
  );

  const handleChangeWithTimeLimit = useCallback(
    (value: boolean) => {
      ref.current = {
        ...getTestInfo(data),
        passTestTime: value ? data.passTestTime : undefined,
      };
      setWithTimeLimit(value);
    },
    [data]
  );

  const handleChangeTestDuration = useCallback(
    (value: Time | null) => {
      ref.current = {
        ...getTestInfo(data),
        passTestTime: value?.toString(),
      };
      setTestDuration(value);
    },
    [data]
  );

  const handleChangeAttemptsCount = useCallback(
    (value: number) => {
      ref.current = {
        ...getTestInfo(data),
        attemptsCount: value,
      };
      setAttemptsCount(value);
    },
    [data]
  );

  const handleChangeTestDates = useCallback(
    (dates: TestDate) => {
      ref.current = {
        ...getTestInfo(data),
        startTestTime: dates.start.toAbsoluteString(),
        endTestTime: dates.end.toAbsoluteString(),
      };
      setTestDates(dates);
    },
    [data]
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

  return (
    <Card className="sm:p-[40px] p-[25px]">
      <SettingsDatepicker
        testDates={testDates}
        handleChangeTestDates={handleChangeTestDates}
      />
      <SettingsInfoUtils
        isLimited={isLimited}
        withTimeLimit={withTimeLimit}
        testDuration={testDuration}
        attemptsCount={attemptsCount}
        handleChangeWithTimeLimit={handleChangeWithTimeLimit}
        handleChangeTestDuration={handleChangeTestDuration}
        handleChangeAttemptsCount={handleChangeAttemptsCount}
      />
    </Card>
  );
};
