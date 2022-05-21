import { Injectable } from '@nestjs/common';
import { animals, SpeciesDto } from 'src/libs/database';
import { DbService } from './db.service';

@Injectable()
export class Datasource implements DbService {
  getAll(): SpeciesDto[] {
    return animals;
  }
}
