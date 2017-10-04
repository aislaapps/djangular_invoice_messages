import { TestBed, inject } from '@angular/core/testing';

import { MessageResultsService } from './message-results.service';

describe('MessageResultsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageResultsService]
    });
  });

  it('should be created', inject([MessageResultsService], (service: MessageResultsService) => {
    expect(service).toBeTruthy();
  }));
});
