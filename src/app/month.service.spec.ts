import { TestBed } from '@angular/core/testing';

import { MonthService } from './month.service';

describe('MonthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MonthService = TestBed.get(MonthService);
    expect(service).toBeTruthy();
  });

  describe('isLeapYear should', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('return false when given 2000', () => {
      const service: MonthService = TestBed.get(MonthService);
      expect(service.isLeapYear(2000)).toBe(true);
    });

    it('return true when given 2016', () => {
      const service: MonthService = TestBed.get(MonthService);
      expect(service.isLeapYear(2016)).toBe(true);
    });

    it('return false when given 2015', () => {
      const service: MonthService = TestBed.get(MonthService);
      expect(service.isLeapYear(2015)).toBe(false);
    });

  });


});
