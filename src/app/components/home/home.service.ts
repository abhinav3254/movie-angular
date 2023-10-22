import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  public getMovies(page: number, size: number): Observable<any> {
    const url = 'http://localhost:9091/movie/?page=' + page + '&size=' + size;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ` + localStorage.getItem('token'),
    });
    return this.http.get(url, { headers: headers });
  }

  public searchMovie(year: string, page: number, size: number): Observable<any> {
    const url = 'http://localhost:9091/movie/find/' + year + '?page=' + page + '&size=' + size;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ` + localStorage.getItem('token'),
    });
    return this.http.get(url, { headers: headers });
  }

  public searchMovieByYear(year: string, page: number, size: number): Observable<any> {
    const url = 'http://localhost:9091/movie/find/' + year + '?page=' + page + '&size=' + size;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ` + localStorage.getItem('token'),
    });
    return this.http.get(url, { headers: headers });
  }

  public searchMovieByGenres(genres: string, page: number, size: number): Observable<any> {
    const url = 'http://localhost:9091/movie/genres/' + genres + '?page=' + page + '&size=' + size;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ` + localStorage.getItem('token'),
    });
    return this.http.get(url, { headers: headers });
  }

}
