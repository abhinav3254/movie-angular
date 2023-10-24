import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileDialogService {

  constructor(private http: HttpClient) { }

  public UpdateProfile(profile: any): Observable<any> {
    const url = 'http://localhost:9091/user/update';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ` + localStorage.getItem('token'),
    });
    return this.http.post(url, profile, { headers: headers });
  }

}
