/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PratoService } from './prato.service';

describe('Service: Prato', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PratoService]
    });
  });

  it('should ...', inject([PratoService], (service: PratoService) => {
    expect(service).toBeTruthy();
  }));
});
