const subjectLabels: { [key: string]: string } = {
  english: 'Английский язык',
  math: 'Математика',
  physics: 'Физика',
  russian: 'Русский язык',
  chemistry: 'Химия',
  biology: 'Биология',
  geography: 'География',
  unknown: 'Неизвестный',
};

export const getTestSubject = (subject: string): string => {
  return subjectLabels[subject] ?? subjectLabels.unknown;
};

