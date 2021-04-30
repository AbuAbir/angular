import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CalculatorService } from './calculator.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  userInfo: BehaviorSubject<any> = new BehaviorSubject(null)

  constructor(private http: HttpClient, private calculator: CalculatorService) { }

  login(email: string, password: string) {

    return this.http.post("http://localhost:3000/users", {
      email, password
    }).subscribe((response) => {
      this.userInfo.next(response)
    })
  }

  logout()
    {
        window.localStorage.removeItem("access-token");
        this.userInfo.next(null);
    }

  register(user) {
    return this.http.post("http://localhost:3000/users", { username: user.username, email: user.email, password: user.password })
  }

}
