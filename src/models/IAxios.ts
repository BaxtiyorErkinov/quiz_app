export interface ISignUpResponse {
  email: string;
  fullName: string;
  id: string;
}

export interface ISignInResponse {
  FullName: string;
  Email: string;
  Token: string;
  RefreshToken: string;
  ExpiresAt: string;
}
