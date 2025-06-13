import { axiosClient } from '@/shared/api';
import { IProfile } from '@/shared/api/dto';
import { tokenService } from '@/shared/services';
import { UserInfo } from '@/shared/types';
import { AxiosError } from 'axios';

class UserApi {
  public async getProfile(): Promise<IProfile> {
    try {
      return await axiosClient.get<IProfile>('/api/user/user');
    } catch (error) {
      const err = error as AxiosError;
      if (err.response?.status === 404) {
        tokenService.destroy();
      }
      throw error;
    }
  }

  public async getAllUsers(): Promise<UserInfo[]> {
    return await axiosClient.get<UserInfo[]>('/api/user/users');
  }
}

export const userApi = new UserApi();
