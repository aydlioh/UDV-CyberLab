import { IRegister } from '../../model/dto/IRegister';
import { ILogin } from '../../model/dto/ILogin';
import { AccessTokenType } from '@/shared/types';
import { axiosClient } from '@/shared/api';

class AuthApi {
  public async login(body: ILogin): Promise<AccessTokenType> {
    return await axiosClient.post<ILogin, AccessTokenType>(
      '/api/auth/login',
      body
    );
  }

  public async register(body: IRegister) {
    return await axiosClient.post<IRegister, void>('/api/auth/register', body);
  }

  public async logout(body: IRegister) {
    return await axiosClient.post('/api/auth/logout', body);
  }
}

export const authApi = new AuthApi();
