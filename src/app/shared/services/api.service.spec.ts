import { TestBed } from '@angular/core/testing';

import { apiService } from './api.service';

describe('ServicesService', () => {
  let service: apiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(apiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});