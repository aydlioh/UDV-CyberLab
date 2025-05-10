import { axiosClient, fileConfig } from '@/shared/api';
import { CreateProjectDTO } from '../../model/dto/CreateProjectDTO';
import { ProjectCardDTO } from '../../model/dto/ProjectCardDTO';
import { ProjectDTO } from '../../model/dto/ProjectDTO';

class ProjectApi {
  public async getAll(): Promise<ProjectCardDTO[]> {
    return await axiosClient.get('/api/ProjectCard/allShort');
  }

  public async getDetailsById(id: string): Promise<ProjectDTO> {
    return await axiosClient.get(`/api/ProjectCard/${id}`);
  }

  public async create(body: CreateProjectDTO): Promise<void> {
    const fm = new FormData();

    fm.append('Name', body.name);
    fm.append('Description', body.description);
    fm.append('ShortDescription', body.shortDescription);
    fm.append('Documentation', body.documentation);
    fm.append('LandingURL', body.landingUrl);
    fm.append('OwnerName', body.ownerName);
    fm.append('LogoPhoto', body.logoPhoto);

    return await axiosClient.post('/api/ProjectCard', fm, fileConfig);
  }

  public async getImage(path: string): Promise<string> {
    const base64: { item1: string; item2: string } = await axiosClient.get(
      '/api/Files/file',
      {
        params: {
          path,
        },
      }
    );

    return `data:${base64.item2};base64,${base64.item1}`;
  }

  // public async updateProject(body: UpdateQuestionDTO): Promise<void> {
  //   return await axiosClient.put('/api/Questions', body);
  // }
}

export const projectApi = new ProjectApi();
