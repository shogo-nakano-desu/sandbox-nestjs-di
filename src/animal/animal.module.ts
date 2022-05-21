import { Module } from '@nestjs/common';
import { AnimalService } from './animal.service';
import { DatasourceModule } from 'src/infrastructure/datasource.module';

@Module({
  imports: [DatasourceModule],
  providers: [AnimalService],
  exports: [AnimalService],
})
export class AnimalModule {}
