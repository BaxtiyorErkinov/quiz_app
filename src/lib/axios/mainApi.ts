import { getUser } from '@/utils/getUser';
import axios, { AxiosRequestConfig } from 'axios';

import { base_url } from './helpers';
const mainApi = axios.create({
  baseURL: base_url,
  headers: {
    'Content-type': 'application/json',
    Authorization: 'Bearer ' + getUser().Token,
  },
});

mainApi.interceptors.request.use((req) => {
  req.headers.Authorization = 'Bearer ' + getUser().Token;

  return req;
});

mainApi.interceptors.response.use(
  (res) => {
    return res;
  },
  function (error) {
    const user = getUser();
    if (Object.entries(user).length) {
      if (error.response.status === 401) {
        localStorage.removeItem('user');
        window.location.href = '/signin';
      }
    }
    return Promise.reject(error);
  },
);

export default mainApi;
