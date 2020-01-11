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

  describe('populateTypicalDay should', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('return an array of length 17 when given a date', () => {
      const service: MonthService = TestBed.get(MonthService);
      expect(service.populateTypicalDay(new Date(2020, 0, 10)).length).toBe(17);
    });

    it('return an array containing a date of 9:30', () => {
      const service: MonthService = TestBed.get(MonthService);
      expect(service.populateTypicalDay(new Date(2020, 0, 10))[0]).toEqual(new Date(2020, 0, 10, 9, 30));
    });

  });

});
