import { SpeciesDto } from 'src/libs/database';

export interface DbRepository {
  getAll(): SpeciesDto[];
}
