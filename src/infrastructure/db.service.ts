import { SpeciesDto } from 'src/libs/database';

export interface DbService {
  getAll(): SpeciesDto[];
}
