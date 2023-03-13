import axios from 'axios';
import { base_url } from './helpers';

const axiosSetup = axios.create({
  baseURL: base_url,
  headers: {
    'Content-type': 'application/json',
  },
});

export default axiosSetup;
