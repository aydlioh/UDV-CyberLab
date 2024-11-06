import axios from 'axios';
import { addTokenInterceptor } from '../interceptors';

export const createAxiosWithInterceptors = (baseURL: string) => {
  const instance = axios.create({ baseURL });
  instance.interceptors.request.use(addTokenInterceptor, Promise.reject);
  return instance;
};
