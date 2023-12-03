import { TestBed } from '@angular/core/testing';
import { SunRiseSunSetService } from './sun-rise-sun-set.service';

describe('SunRiseSunSetService', () => {
  let service: SunRiseSunSetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SunRiseSunSetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
