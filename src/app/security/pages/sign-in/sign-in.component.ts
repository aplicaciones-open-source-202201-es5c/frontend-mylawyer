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
export class SignInComponent implements OnInit{
  signInForm!:FormGroup;

  constructor(private formbuilder: FormBuilder,
              private _http:HttpClient, private router:Router,
              public authService: SignService) {

  }
  ngOnInit() {
    this.signInForm=this.formbuilder.group({
      email:[''],
      password:['']
    })
  }

  get email(){
    return this.signInForm.controls['email'];
  }
  get password(){
    return this.signInForm.controls['password'];
  }
  signIn(){
    this._http.get<any>("https://my-json-server.typicode.com/DiegoTS18/datosMyLawyer/users").subscribe(res=>{
      const user=res.find((a:any)=>{
        return a.email===this.signInForm.value.email && a.password === this.signInForm.value.password
      });
      if(user){
          localStorage.setItem('currentUser',JSON.stringify(user));
          this.signInForm.reset();
          this.router.navigate(['profile'])
        this.signInForm.reset();
        this.router.navigate(['profile'])
      }else {
        alert("user not found")
      }
    },err=>{
      alert("something went wrong")
    })
  }
  signIn_(){
    this.authService.signIn(this.signInForm.value).subscribe((response:any)=>{
      alert(response.user)
      localStorage.setItem('accessToken',JSON.stringify(response.accessToken));
      localStorage.setItem('currentUser',JSON.stringify(response.user));
      this.signInForm.reset();
      console.log(`accessToken: ${localStorage.getItem('accessToken')}`);
      this.router.navigate(['profile']).then();
    })

  }
  signOut() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('accessToken');
    this.router.navigate(['signIn']).then();
  }

}
