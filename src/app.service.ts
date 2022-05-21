import { Injectable } from '@nestjs/common';
import { AnimalService } from './animal/animal.service';
import { SpeciesDto } from './libs/database';

@Injectable()
export class AppService {
  constructor(private readonly animalService: AnimalService) {}

  getAll(): SpeciesDto[] {
    return this.animalService.getAll();
  }
}
