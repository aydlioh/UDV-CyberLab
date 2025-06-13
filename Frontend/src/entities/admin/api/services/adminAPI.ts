import { axiosClient } from '@/shared/api';

class AdminApi {
  public async deleteComment(commentId: string): Promise<boolean> {
    return await axiosClient.delete(`/api/Admin/comment/${commentId}`);
  }

  public async deleteProject(projectId: string): Promise<boolean> {
    return await axiosClient.delete(`/api/Admin/project/${projectId}`);
  }

  public async deleteUser(userId: string): Promise<boolean> {
    return await axiosClient.delete(`/api/Admin/user/${userId}`);
  }
}

export const adminApi = new AdminApi();
