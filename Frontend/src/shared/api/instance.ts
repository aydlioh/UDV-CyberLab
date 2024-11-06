import { AxiosClient } from './axios-client';
import { config } from './config';

export const axiosClient = new AxiosClient(config.BACKEND_URL);
