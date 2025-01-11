export enum AuthStatus {
  STUDENT = 0,
  ADMIN = 1,
  TEACHER = 2,
}

export enum UserRole {
  STUDENT = 0,
  ADMIN = 1,
  TEACHER = 2,
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
  img: string;
  role: UserRole;
}