import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from "../user.service";
import { Router } from "@angular/router";
import { validateEmail } from "../validate-email";
import { MessageService } from "../../message.service";

import { User } from "../user";

@Component({
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user: User;
  regForm: FormGroup;
  errors: Array<string> = [];
  constructor(private fb: FormBuilder, private userService: UserService, private router: Router, private msg:MessageService ) {}


  ngOnChanges(changes: SimpleChanges) {
    console.log("first");
    for (let propName in changes) {
      let chng = changes[propName];
      let cur  = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
  }

  ngOnInit() {
    console.log("second");
    this.initForm();
  }

  initForm(){
    this.regForm = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(5), Validators.minLength(10)]],
      email: ["", [ Validators.required, validateEmail]],
      password: ["", [Validators.required, Validators.minLength(5)]],
      confirmPassword: ["", [Validators.required, Validators.minLength(5)]]
    });
  }

  onSubmit(): void{
    this.errors = [];
    let name = this.regForm.get("name");
    let email = this.regForm.get("email");
    let password = this.regForm.get("password");
    let confirmPassword = password = this.regForm.get("confirmPassword");

    if(name.hasError("required")) {
      this.errors.push("User Name Required");
    }

    if(email.hasError("required")) {
      this.errors.push("Email Required");
    }

    if(password.hasError("required")) {
      this.errors.push("Password Required");
    }

    if(confirmPassword.hasError("required")) {
      this.errors.push("Confirm Password Required");
    }

    if(password.hasError("minlength")) {
      this.errors.push("Password Length Doesn't match");
    }

    if(this.regForm.status === "VALID"){
      console.log("valid");
      this.user = new User(name.value, email.value, password.value);
      this.userService.create(this.user)
      .subscribe((response) => {
        let status = response.status;
        if(status == 201 ) {
          this.msg.push("Registered Successfully");
          this.router.navigate(["/"])
        }
        else {
          this.errors.push("Invalid Email/Password combination.")
        }
      });
    }

  }

}
