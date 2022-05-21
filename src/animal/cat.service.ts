import { Injectable } from '@nestjs/common';

@Injectable()
export class CatService {
  getName() {
    return 'tama';
  }
}
