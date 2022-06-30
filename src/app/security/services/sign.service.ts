import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {User} from "../model/user";
import {catchError, retry, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SignService {
  basePath: String='http://localhost:8080/api/v1/users/auth'
  httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json',
    }),
  };

  currentUser!:User;


  constructor(private http:HttpClient) {

  }

  handleError(error:HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.log('An error ocurred: ${error.error.message}');
    }else{
      console.error('backend returnd code ${error.status},body was: ${error.error}');
    }
    return throwError(()=>new Error('Algo paso'));
  }

  signIn(user: User){
    return this.http.post(`${this.basePath}/signin`,user)
      .pipe(retry(2),catchError(this.handleError));
  }
  signUp(user: User){
    return this.http.post(`${this.basePath}/register`,user)
      .pipe(retry(2),catchError(this.handleError));
  }


}
