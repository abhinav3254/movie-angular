import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  public getMovies(): Observable<any> {
    const url = 'http://localhost:9091/movie/';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ` + localStorage.getItem('token'),
    });
    return this.http.get(url, { headers: headers });
  }

}
