import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import { Injectable } from '@angular/core';
import {AppointmentsClient} from "../model/clients";

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  basePath = 'https://my-json-server.typicode.com/DiegoTS18/datosMyLawyer/appointments';

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

  getAll():Observable<AppointmentsClient>{

    const lawyerId = 2

    return this.http.get<AppointmentsClient>(this.basePath+ `?lawyerId=${lawyerId}&_expand=client`).pipe(retry(2), catchError(this.handleError))
  }
}
