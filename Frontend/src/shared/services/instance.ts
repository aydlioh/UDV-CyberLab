import { AccessTokenType } from '../types';
import { LocalStorageService } from './LocalStorage';

export const tokenService = new LocalStorageService<AccessTokenType>('token');

// TODO Убрать
// const now = new Date();
// const nowUTC = new Date(
//   Date.UTC(
//     now.getUTCFullYear(),
//     now.getUTCMonth(),
//     now.getUTCDate(),
//     now.getUTCHours() + 5,
//     now.getUTCMinutes(),
//     now.getUTCSeconds()
//   )
// );
// localStorage.setItem(
//   'token',
//   JSON.stringify({
//     token: 'qwerty',
//     expiration: nowUTC.toISOString(),
//   })
// );
