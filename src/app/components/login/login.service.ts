import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  loginUser(data: any): Observable<any> {
    const url = 'http://localhost:9091/user/login';
    return this.http.post(url, data).pipe(
      catchError((error) => this.handleError(error))
    );
  }

  private handleError(error: any) {
    // console.error('An error occurred:', error);
    // You can add your specific error handling logic here
    return throwError(error); // Re-throw the error for the component to handle if needed
  }

}
