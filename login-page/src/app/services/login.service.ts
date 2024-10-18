import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loginResponse } from '../types/login-response.type';
import { tap, catchError } from 'rxjs';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiUrl: string = "http://localhost:8080/auth";

  constructor(private httpClient: HttpClient) { }

  login(email: string, password: string) {
    return this.httpClient.post<loginResponse>(this.apiUrl + "/login", { email, password }).pipe(
      tap((value) => {
        sessionStorage.setItem("auth-token", value.token);
        sessionStorage.setItem("username", value.name || '');
      }),
      catchError((error) => {
        console.error('Login failed', error);
        return throwError(() => new Error('Login failed'));
      })
    );
  }

  signup(name: string, email: string, password: string) {
    return this.httpClient.post<loginResponse>(this.apiUrl + "/register", { name, email, password }).pipe(
      tap((value) => {
        sessionStorage.setItem("auth-token", value.token);
        sessionStorage.setItem("username", value.name || '');
      }),
      catchError((error) => {
        console.error('Login failed', error);
        return throwError(() => new Error('Login failed'));
      })
    );
  }
}
