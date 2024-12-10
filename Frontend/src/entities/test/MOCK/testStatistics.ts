import { ITestStatistics } from '../model/dto/ITestStatistics';

const russianNames = [
  'Иван Иванов',
  'Петр Петров',
  'Сергей Сергеев',
  'Анна Аннина',
  'Елена Еленова',
  'Мария Маринова',
  'Николай Николаев',
  'Алексей Алексеев',
  'Дмитрий Дмитриев',
  'Екатерина Екатеринова',
  'Владимир Владимиров',
  'Ольга Ольгина',
  'Константин Константинов',
  'Надежда Надеждина',
  'Виктор Викторов',
  'Татьяна Татьянова',
  'Александр Александров',
  'Светлана Светланова',
  'Михаил Михайлов',
  'Любовь Любовьева',
  'Юлия Юльевна',
];

export const testStatisticsMOCK: ITestStatistics = {
  testId: '1',
  title: 'Тест по программированию на JavaScript',
  totalСompleted: 20,
  maxScore: 20,
  users: russianNames.map((name, index) => ({
    id: `${index + 1}`,
    name,
    score: Math.floor(Math.random() * 20) + 1,
  })),
};

