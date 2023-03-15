export interface IUser {
  fullName: string;
  email: string;
  password: string;
}

export interface IUserResponse {
  Email: string;
  ExpiresAt: string;
  FullName: string;
  RefreshToken: string;
  Token: string;
  UserId: string;
}
