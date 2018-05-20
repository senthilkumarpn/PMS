import { TestBed, inject } from '@angular/core/testing';

import { MongodbService } from './mongodb.service';

describe('MongodbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MongodbService]
    });
  });

  it('should be created', inject([MongodbService], (service: MongodbService) => {
    expect(service).toBeTruthy();
  }));
});
