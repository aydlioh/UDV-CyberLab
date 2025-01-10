import { TestCardDTO } from '../dto/TestCardDTO';
import { ITestCard } from '../types/ITestCard';
import { mapStateToStatus } from './mapStateToStatus';

export const mapTestCardDTO = (dto: TestCardDTO): ITestCard => ({
  id: dto.id,
  owner: dto.userId,
  title: dto.test,
  totalPoints: dto.attemptNumber,
  currentPoints: dto.scoredPoints,
  status: mapStateToStatus(dto.state),
});
