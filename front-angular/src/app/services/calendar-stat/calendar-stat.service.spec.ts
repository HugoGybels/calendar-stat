import { TestBed, inject } from '@angular/core/testing';

import { CalendarStatService } from './calendar-stat.service';

describe('CalendarStatService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalendarStatService]
    });
  });

  it('should be created', inject([CalendarStatService], (service: CalendarStatService) => {
    expect(service).toBeTruthy();
  }));
});
