import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {Notification} from "../model/notifications";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn:'root'
})
export class notificationsService{
  //endpoint
  basePath='https://my-json-server.typicode.com/DiegoTS18/datosMyLawyer/notifications';

  //http
  httpOptions={
    headers: new HttpHeaders({'content-Type':'application/json'})
  }
  constructor(private http:HttpClient) { }
  //Error
  handleError(error:HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log("Ocurrio un error: ${error.error.message}");
    }else{
      console.log("backend returned code ${error.status}, body was: ${error.error}")
    }
    return throwError(()=>new Error("Somethins happened with the request, please try again later"))
  }
  //Get all notifications
  getAll():Observable<Notification>{
    return this.http.get<Notification>(this.basePath, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }
  //delete notification
  delete(id: any) {
    return this.http.delete(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  getAllForLawyer(lawyerId:any):Observable<any>{
    return this.http.get<any>(`${this.basePath}?lawyerId=${lawyerId}&_expand=client`, this.httpOptions).
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

  //create notification
  create(item: any): Observable<Notification>{
    return this.http.post<Notification>(this.basePath,JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
}
