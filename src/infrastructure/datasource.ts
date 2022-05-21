import { Injectable } from '@nestjs/common';
import { animals, SpeciesDto } from 'src/libs/database';
import { DbRepository } from './db-repository';

@Injectable()
export class Datasource implements DbRepository {
  getAll(): SpeciesDto[] {
    return animals;
  }
}
