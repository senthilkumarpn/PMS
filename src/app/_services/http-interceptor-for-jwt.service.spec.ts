import { TestBed, inject } from '@angular/core/testing';

import { HttpInterceptorForJWTService } from './http-interceptor-for-jwt.service';

describe('HttpInterceptorForJWTService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpInterceptorForJWTService]
    });
  });

  it('should be created', inject([HttpInterceptorForJWTService], (service: HttpInterceptorForJWTService) => {
    expect(service).toBeTruthy();
  }));
});
