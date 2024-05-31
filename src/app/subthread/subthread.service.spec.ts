import { TestBed } from '@angular/core/testing';

import { SubthreadService } from './subthread.service';

describe('SubthreadService', () => {
  let service: SubthreadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubthreadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
