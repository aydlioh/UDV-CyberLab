import { CreateProjectDTO } from './CreateProjectDTO';

export type UpdateProjectDTO = Partial<CreateProjectDTO> & { id: string };
