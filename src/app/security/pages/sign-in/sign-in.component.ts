import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SignService} from "../../services/sign.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  signInForm: FormGroup;


  constructor(public builder: FormBuilder,
              public authService: SignService,
              public router: Router) {
    this.signInForm = this.builder.group({
      email: [''],
      password: ['']
    });
  }

  get password(){
    return this.signInForm.controls['password'];
  }

  signIn(){
    this.authService.signIn(this.signInForm.value).subscribe((response:any)=>{
      localStorage.setItem('accessToken',JSON.stringify(response.accessToken));
      localStorage.setItem('currentUser',JSON.stringify(response.user));
      this.signInForm.reset();
      console.log(`accessToken: ${localStorage.getItem('accessToken')}`);
      this.router.navigate(['profile']).then();
    })
  }

}
