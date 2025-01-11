import { TestCardDTO } from '../dto';
import { ITestCard } from '../types';
import { mapStateToStatus } from './mapStateToStatus';

export const mapTestCard = (dto: TestCardDTO): ITestCard => ({
  id: dto.id,
  owner: dto.ownerId,
  title: dto.name,
  totalPoints: dto.attemptNumber,
  currentPoints: dto.scoredPoints,
  status: mapStateToStatus(dto.state),
});
