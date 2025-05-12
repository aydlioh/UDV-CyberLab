export enum AuthStatus {
  STUDENT,
  ADMIN,
  TEACHER,
}

export enum UserRole {
  STUDENT,
  ADMIN,
  TEACHER,
}

export type UserInfo = {
  userId: string;
  email: string;
  userName: string;
  role: UserRole;
};

export type UserCardType = {
  login: string;
  email: string;
  img?: string;
  role: UserRole;
}