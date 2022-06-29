import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SignService} from "../../services/sign.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent{
  signUpForm: FormGroup;
  optionselected: boolean;
  lawyer: boolean;
  usuario: string;


  constructor(public builder: FormBuilder,
              public authService: SignService,
              public router: Router,
              private http: HttpClient   )
  {
    this.signUpForm = this.builder.group({
      name:['', Validators.required],
      address:['', Validators.required],
      username:['', Validators.required],
      age:['', Validators.required],
      role:['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.minLength(6)]],
    });
    this.optionselected=false;
    this.lawyer= false;
    this.usuario="";
  }


  get email(){
    return this.signUpForm.controls['email'];
  }
  get password(){
    return this.signUpForm.controls['password'];
  }
  signUp(){
    this.http.post<any>("http://localhost:3000/users",this.signUpForm.value)
      .subscribe(res=>{
        this.signUpForm.reset();
        this.router.navigate(['signIn'])
      })
  }


}
