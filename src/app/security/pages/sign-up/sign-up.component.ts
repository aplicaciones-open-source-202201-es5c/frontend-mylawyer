import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SignService} from "../../services/sign.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  signUpForm: FormGroup;

  constructor(public builder: FormBuilder,
              public authService: SignService,
              public router: Router) {
    this.signUpForm = this.builder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.email, Validators.minLength(6)]],
    });
  }
  get email(){
    return this.signUpForm.controls['email'];
  }
  get password(){
    return this.signUpForm.controls['password'];
  }
  signUp(){


  }


}
