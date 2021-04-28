import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CalculatorService } from './calculator.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private calculator : CalculatorService) { }

  login(email: string, password: string) {
    return this.http.post("http://localhost:3000/users", {
      email, password
    })
  }

  register(user) {
    return this.http.post("http://localhost:3000/users", { username: user.username, email: user.email, password: user.password })
  }

}
