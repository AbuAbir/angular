import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("should give result for add()", ()=>{

      // actual result         expected 
      expect(service.add(2,3)).toBe(5);
  })

  it("should give result for subtract()", ()=>{

    // actual result         expected 
    expect(service.subtract(2,3)).toBe(-1);
})

});
