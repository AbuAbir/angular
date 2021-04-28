import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }

  add(a,b)
    {
      return a + b;
    }

  subtract(a,b)
    {
      return a - b;
    }

  multiple(a,b)
    {
      return a - b;
    }

}
