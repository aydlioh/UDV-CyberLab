import { axiosClient } from '@/shared/api';

class AdminApi {
  public async deleteComment(id: string): Promise<boolean> {
    return await axiosClient.delete(`/api/Admin/comment/${id}`);
  }
}

export const adminApi = new AdminApi();
