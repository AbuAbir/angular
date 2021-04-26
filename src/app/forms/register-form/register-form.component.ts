import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { timeout } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'tcs-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {


  registerForm: FormGroup = new FormGroup({
    username: new FormControl("", [Validators.required, Validators.maxLength(12)]),
    email: new FormControl("", [Validators.email]),
    password: new FormControl("", [Validators.required]),
    confirmPassword: new FormControl("", [Validators.required]),
  })

  constructor(private user: UserService) { }

  ngOnInit(): void {
    setTimeout(() => {

      this.registerForm.setValue({ username: "lkhfkjsfjsf", email: "sjkdlasd@dsajdk.ds", password: "97832426432", confirmPassword: "97832426432" });
      // or
      this.username.setValue("value after 3 secs")


    }, 3000)
  }


  registerUser() {
    this.user.register(this.registerForm.value).subscribe((response) => {
      console.log(response);
    })
  }

  get username() {
    return this.registerForm.get("username")
  }

  get email() {
    return this.registerForm.get("email")
  }

  get password() {
    return this.registerForm.get("password")
  }

  get confirmPassword() {
    return this.registerForm.get("confirmPassword")
  }

}
