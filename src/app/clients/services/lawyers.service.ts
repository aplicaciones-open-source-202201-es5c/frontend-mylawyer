import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {AppointmentsClient} from "../model/clients";
import {Lawyers} from "../model/lawyers";

@Injectable({
  providedIn: 'root'
})
export class LawyersService {
  basePath = 'http://localhost:3000/lawyers';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type':'application/json'})
  }

  constructor(private http:HttpClient) { }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log(`An error occurred: ${error.error.message}`);
    } else {
      console.error ( `Backend returned code ${error.status}, body was: ${error.error}`);
    }
    return throwError( ()  => new Error('Something happened with request, please try again later'));
  }

  getAll():Observable<Lawyers>{

    const lawyerId = 2

    return this.http.get<Lawyers>(this.basePath).pipe(retry(2), catchError(this.handleError))
  }
}
