import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {Lawyer} from "../model/lawyer";


@Injectable({
  providedIn: 'root'
})
export class SearchLawyerService {

  basePath='http://localhost:3000/lawyers';

  httpOptions={
    headers:new HttpHeaders({'Content-Type':'application/json'})
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

  getAll():Observable<Lawyer>{
    return this.http.get<Lawyer>(this.basePath, this.httpOptions).
    pipe(
      retry(2),
      catchError(this.handleError)
    );
  }


}
