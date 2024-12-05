export enum AuthStatus {
  STUDENT = 0,
  ADMIN = 1,
  TEACHER = 2,
}

export enum UserRole {
  STUDENT = 'student',
  ADMIN = 'admin',
  TEACHER = 'teacher',
}

export type UserInfo = {
  email: string;
  login: string;
  role: UserRole;
};

export type UserCardType = {
  login: string;
  email: string;
  img: string;
  role: UserRole;
}