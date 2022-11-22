import { TestBed } from '@angular/core/testing';

import { ProductNameNormaliserService } from './product-name-normaliser.service';

describe('ProductNameNormaliserService', () => {
  let service: ProductNameNormaliserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductNameNormaliserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
