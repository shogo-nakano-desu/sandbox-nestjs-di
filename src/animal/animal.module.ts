import { Module } from '@nestjs/common';
import { AnimalService } from './animal.service';
import { DatasourceModule } from 'src/infrastructure/datasource.module';
import { CatService } from './cat.service';

@Module({
  imports: [DatasourceModule],
  providers: [AnimalService, CatService],
  exports: [AnimalService],
})
export class AnimalModule {}
