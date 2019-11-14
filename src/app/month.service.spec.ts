import { TestBed } from '@angular/core/testing';

import { MonthService } from './month.service';

describe('MonthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MonthService = TestBed.get(MonthService);
    expect(service).toBeTruthy();
  });

  describe('getMonthName should', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('return JANUARY when given 0', () => {
      const service: MonthService = TestBed.get(MonthService);
      expect(service.getMonthName(0)).toBe("JANUARY");
    });

    it('return DECEMBER when given 11', () => {
      const service: MonthService = TestBed.get(MonthService);
      expect(service.getMonthName(11)).toBe("DECEMBER");
    });

    it('throw an error when given an index greater than 11', () => {
      const service: MonthService = TestBed.get(MonthService);
      expect(() => {
        service.getMonthName(12)
      }).toThrowError("Index is invalid");
    });

    it('throw an error when given an index less than than 0', () => {
      const service: MonthService = TestBed.get(MonthService);
      expect(() => {
        service.getMonthName(-1)
      }).toThrowError("Index is invalid");
    });

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

  describe('getMonthIndex should', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('return 0 when given JANUARY', () => {
      const service: MonthService = TestBed.get(MonthService);
      expect(service.getMonthIndex("JANUARY")).toBe(0);
    });

    it('return 11 when given DECEMBER', () => {
      const service: MonthService = TestBed.get(MonthService);
      expect(service.getMonthIndex("DECEMBER")).toBe(11);
    });

    it('return falsy when given NEVERUARY', () => {
      const service: MonthService = TestBed.get(MonthService);
      expect(service.getMonthIndex("NEVERUARY")).toBe(-1);
    });

  })

});
