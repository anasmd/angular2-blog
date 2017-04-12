import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from './user';
import { UserService } from "./user.service";
import { Router } from "@angular/router";
import { validateEmail } from "./validate-email"

@Component({
  selector: 'user-app',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User;
  userForm: FormGroup;
  errors: Array<string> = [];
  constructor(private fb: FormBuilder, private userService: UserService, private router: Router ) {}

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.userForm = this.fb.group({
      email: ["", [ Validators.required, validateEmail]],
      password: ["", [Validators.required, Validators.minLength(5)]]
    });
  }

  onSubmit():void{

    let email = this.userForm.get("email");
    let password = this.userForm.get("password");
    console.log(email.hasError('pattern'));

    this.errors = [];

    if(email.hasError("required")) {
      this.errors.push("Email Required");
    }

    if(email.hasError("valid")) {
      this.errors.push("Email Pattern Doesn't match");
    }

    if(password.hasError("required")) {
      this.errors.push("Password Required");
    }

    if(password.hasError("minlength")) {
      this.errors.push("Password Length Doesn't match");
    }

    if(this.userForm.status === "VALID"){
      console.log("valid");
      this.userService.authenticate(email.value, password.value)
      .subscribe((response) => {
        let token = response.json().token;
        if(token) {
          localStorage.setItem('token', response.json().token);

          console.log(token);
          this.router.navigate(["/landing"])
        }
        else {
          this.errors.push("Invalid Email/Password combination.")
        }
      });
    }
  }
}
