import { Module } from '@nestjs/common';
import { REPOSITORY } from 'src/libs/constants';
import { Datasource } from './datasource';

@Module({
  providers: [{ provide: REPOSITORY, useClass: Datasource }],
  exports: [{ provide: REPOSITORY, useClass: Datasource }],
})
export class DatasourceModule {}
