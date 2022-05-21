import { Inject, Injectable } from '@nestjs/common';
import { DB_REPOSITORY } from 'src/libs/constants';
import { SpeciesDto } from 'src/libs/database';
import { DbRepository } from 'src/infrastructure/db-repository';

@Injectable()
export class AnimalService {
  constructor(
    @Inject(DB_REPOSITORY)
    private readonly dbRepository: DbRepository,
  ) {}

  getAll(): SpeciesDto[] {
    return this.dbRepository.getAll();
  }
  getNull(): null {
    return null;
  }
}
