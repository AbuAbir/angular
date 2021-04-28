import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing"
import { TestBed } from '@angular/core/testing';
import { CalculatorService } from './calculator.service';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CalculatorService]
    });
    service = TestBed.inject(UserService);

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController)

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it("should call the HttpClient", () => {

    const testData = { status: "success", data: { accessToken: "daskhdjkdfhkshfshkfhkshfsaf" } }

    // httpClient.post("http://localhost:3600/api/v1/login", {}).subscribe((response)=>{
    //     console.log(response);
    //     expect(response).toBe(testData)
    // })

    service.login("dsadadad", "dasdsada").subscribe((response) => {
      console.log(response);
      expect(response).toBe(testData)
    })

    const req = httpTestingController.expectOne("http://localhost:3000/users");

    req.flush(testData)

    httpTestingController.verify();
  })

});
