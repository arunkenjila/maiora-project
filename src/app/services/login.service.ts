import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  URL = 'https://api.escuelajs.co/api/v1/auth/login';
  token: string = '';
  constructor(private http: HttpClient, private router: Router) {}

  login(value: any): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.URL, value);
  }

  logout(): void {
    localStorage.removeItem('token');
    this.token = '';
    this.router.navigateByUrl('/login');
  }
}
