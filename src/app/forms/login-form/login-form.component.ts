import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'tcs-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm = {
    email: "",
    password: "",
    confirmPassword: ""
  }

  constructor(private user: UserService, private router: Router) { }

  ngOnInit(): void {
    this.user.userInfo.subscribe((response: any) => {
      window.localStorage.setItem("access-token", response.accessToken)
      this.router.navigateByUrl("/")
    })
  }

  login(loginForm) {
    const { email, password } = loginForm.form.value
    this.user.login(email, password);
  }

}
