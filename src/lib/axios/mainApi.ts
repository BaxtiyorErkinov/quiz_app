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

export default mainApi;
