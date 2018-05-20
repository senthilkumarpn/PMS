import { TestBed, inject } from '@angular/core/testing';

import { TokenProviderService } from './token-provider.service';

describe('TokenProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TokenProviderService]
    });
  });

  it('should be created', inject([TokenProviderService], (service: TokenProviderService) => {
    expect(service).toBeTruthy();
  }));
});
