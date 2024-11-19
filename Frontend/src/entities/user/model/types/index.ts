export enum AuthRole {
  STUDENT = 'student',
  ADMIN = 'admin',
  TEACHER = 'teacher',
}

export enum UserStatus {
  STUDENT = 0,
  ADMIN = 1,
  TEACHER = 2,
}

export type UserInfo = {
  email: string;
  login: string;
  role: AuthRole;
};
