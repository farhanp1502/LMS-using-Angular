import { TestBed } from '@angular/core/testing';

import { LeavelistService } from './leavelist.service';

describe('LeavelistService', () => {
  let service: LeavelistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeavelistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
