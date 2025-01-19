import { TestEditingDTO } from '@/entities/test-editing';
import { UpdateTestDTO } from '@/entities/test-info';

export const getTestInfo = (data: TestEditingDTO): UpdateTestDTO => ({
  id: data.id,
  name: data.name,
  description: data.description,
  theme: data.theme,
  difficulty: data.difficulty,
  maxPoints: data.maxPoints,
  startTestTime: data.startTestTime,
  endTestTime: data.endTestTime,
  passTestTime: data.passTestTime,
  attemptsCount: data.attemptsCount,
});
