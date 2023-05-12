import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  private baseURL = environment.baseURL;

  constructor(private http: HttpClient) {}

  getInfo(): Observable<any> {
	return this.http.get(this.baseURL);
  }
}
