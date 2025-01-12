export interface UpdateTestDTO {
  name: string;
  test: string;
  description: string;
  theme: string;
  difficulty: string;
  ownerId: string;
  attemptsCount: number;

  startTestTime: string;
  endTestTime: string;
  passTestTime?: string;

  maxPoints: number;
}

export interface UpdateTestTitleDTO {
  name: string;
  test: string;
  theme: string;
  difficulty: string;
}

export interface UpdateTestSettingsDTO {
  name: string;
  test: string;
  theme: string;
  difficulty: string;
}