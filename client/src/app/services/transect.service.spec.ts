import { TestBed, inject } from '@angular/core/testing';

import { TransectService } from './transect.service';

describe('TransectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TransectService]
    });
  });

  it('should be created', inject([TransectService], (service: TransectService) => {
    expect(service).toBeTruthy();
  }));
});
