import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn:'root'
})
export class notificationsService{
  //endpoint
  basePath='http://localhost:3000/notifications';

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
  //update notification
  update(id:any,item:any):Observable<Notification>{
    return this.http.put<Notification>(`${this.basePath}/${id}`,JSON.stringify(item),this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
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
