import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http: HttpClient) {
  }

  public getRecentJob(): Observable<any> {
    const url = `${environment.apiUrl}/api/v1/jobseeker/recent`;
    return this.http.get(url);
  }
}
