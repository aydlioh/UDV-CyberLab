import { AccessTokenType } from '../types';
import { LocalStorageService } from './LocalStorage';

export const tokenService = new LocalStorageService<AccessTokenType>('token');
