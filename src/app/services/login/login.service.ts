import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  private urlUsers = 'https://reqres.in/api/users?page=1';

  getUsers(): Observable<any> {
    return this.http.get<any>(this.urlUsers);
  }

  public postLogin(body: any): Observable<any> {
    const params = new HttpParams()
      .set('jobseekerEmail', body.jobseekerEmail)
      .set('jobseekerPassword', body.jobseekerPassword);

    this.http.get
    return this.http.post("http://54.251.83.205:9091/api/v1/jobseeker/login", params);
  }

}
