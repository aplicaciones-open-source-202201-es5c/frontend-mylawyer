import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import { Injectable } from '@angular/core';
import {Lawyer} from "../model/lawyer";

@Injectable({
  providedIn: 'root'
})
export class IndexService {
  basePath = 'https://my-json-server.typicode.com/DiegoTS18/datosMyLawyer/lawyers';


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

  getAllLawyers():Observable<Lawyer>{
    return this.http.get<Lawyer>(this.basePath).pipe(retry(2), catchError(this.handleError))
  }

  getLawyer(id:any):Observable<Lawyer>{
    return this.http.get<Lawyer>(`${this.basePath}/${id}`).pipe(retry(2), catchError(this.handleError));
  }

  update(id:any,item:any):Observable<Lawyer>{
    return this.http.put<Lawyer>(`${this.basePath}/${id}`,JSON.stringify(item),this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

}

