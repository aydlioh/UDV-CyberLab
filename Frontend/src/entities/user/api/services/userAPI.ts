import { axiosClient } from '@/shared/api';
import { IProfile } from '../../model/dto/IProfile';

class UserApi {
  public async getProfile(): Promise<IProfile> {
    return await axiosClient.get<IProfile>('/api/user/user');
  }
}

export const userApi = new UserApi();
