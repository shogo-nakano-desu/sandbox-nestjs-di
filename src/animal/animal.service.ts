import { Inject, Injectable } from '@nestjs/common';
import { REPOSITORY } from 'src/libs/constants';
import { SpeciesDto } from 'src/libs/database';
import { DbService } from 'src/infrastructure/db.service';

@Injectable()
export class AnimalService {
  constructor(
    @Inject(REPOSITORY)
    private readonly dbService: DbService,
  ) {}

  getAll(): SpeciesDto[] {
    return this.dbService.getAll();
  }
  getNull(): null {
    return null;
  }
}
