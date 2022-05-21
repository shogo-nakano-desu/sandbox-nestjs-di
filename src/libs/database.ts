export type Type = 'dog' | 'cat';

export class SpeciesDto {
  id: number;
  type: Type;
  name: string;
  constructor(init: Required<SpeciesDto>) {
    Object.assign(this, init);
  }
}

export const animals: SpeciesDto[] = [
  { id: 1, type: 'dog', name: 'Bulldog' },
  { id: 2, type: 'dog', name: 'Beagle' },
  { id: 3, type: 'dog', name: 'Doberman' },
  { id: 1, type: 'cat', name: 'Scottish' },
  { id: 2, type: 'cat', name: 'Sphinx' },
  { id: 3, type: 'cat', name: 'Persian' },
];
