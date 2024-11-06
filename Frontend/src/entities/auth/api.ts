import { AccessTokenType } from '@/shared/types';
import { ILogin, IRegister } from './models';
import { axiosClient } from '@/shared/api';

class AuthApi {
  public async login(body: ILogin): Promise<AccessTokenType> {
    return await axiosClient.post('/api/auth/login', body);
  }

  public async register(body: IRegister) {
    return await axiosClient.post('/api/auth/register', body);
  }
}

export const authApi = new AuthApi();
