import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {Appointment} from "../model/appointment";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn:'root'
})

export class AppointmentsService{

  basePath='https://my-json-server.typicode.com/DiegoTS18/datosMyLawyer/appointments';

  httpOptions={
    headers:new HttpHeaders({'Content-Type':'application/json'})
  }

  constructor(private http:HttpClient) {}
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log(`An error occurred: ${error.error.message}`);
    } else {
      console.error ( `Backend returned code ${error.status}, body was: ${error.error}`);
    }
    return throwError( ()  => new Error('Something happened with request, please try again later'));
  }

  getAll():Observable<Appointment>{
    return this.http.get<Appointment>(this.basePath, this.httpOptions).
    pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  getAllForClient(clientId:any):Observable<any>{
    return this.http.get<any>(`${this.basePath}?clientId=${clientId}&_expand=lawyer`, this.httpOptions).
    pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  getAllForLawyer(lawyerId:any):Observable<any>{
    return this.http.get<any>(`${this.basePath}?lawyerId=${lawyerId}&_expand=client`, this.httpOptions).
    pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  delete(id:any){
    return this.http.delete(`${this.basePath}/${id}`,this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

}
