import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { SpeciesDto } from './libs/database';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAll(): SpeciesDto[] {
    return this.appService.getAll();
  }
}
