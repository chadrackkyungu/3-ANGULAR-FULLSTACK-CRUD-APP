import { TestBed } from '@angular/core/testing';

import { DialogPopupService } from './dialog-popup.service';

describe('DialogPopupService', () => {
  let service: DialogPopupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DialogPopupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
