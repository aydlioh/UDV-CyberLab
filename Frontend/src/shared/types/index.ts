export * from './tokens';
export * from './error';

export type TestId = { testId: string };
export type WithoutId<T> = Omit<T, 'id'>;
