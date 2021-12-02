import { TestBed } from '@angular/core/testing';

import { BuscadosService } from './buscados.service';

describe('BuscadosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BuscadosService = TestBed.get(BuscadosService);
    expect(service).toBeTruthy();
  });
});
