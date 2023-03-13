import { IUserResponse } from '@/models/IUser';

export const getUser = (): IUserResponse => {
  return JSON.parse(localStorage.getItem('user') || '{}') as IUserResponse;
};
