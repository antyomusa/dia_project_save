import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public getRecentJob(): Observable<any> {
    const url = 'http://54.251.83.205:9091/api/v1/jobseeker/recent';
    return this.http.get<any>(url);
  }
}
