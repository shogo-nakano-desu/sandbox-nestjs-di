import { Module } from '@nestjs/common';
import { DB_REPOSITORY } from 'src/libs/constants';
import { Datasource } from './datasource';

@Module({
  providers: [{ provide: DB_REPOSITORY, useClass: Datasource }],
  exports: [{ provide: DB_REPOSITORY, useClass: Datasource }],
})
export class DatasourceModule {}
