import { HttpClient } from '@angular/common/http';
import { RegisterForm } from './../Interfaces/register-form';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Route, Router } from '@angular/router';
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl: string = 'https://route-ecommerce.onrender.com/api/v1/auth/';

  userIsLogedIn = new BehaviorSubject(false);

  constructor(private _httpClient: HttpClient, public _Router: Router) {
    if (localStorage.getItem('token') != null) {
      this.userIsLogedIn.next(true);
      try {
        var decoded = jwt_decode(localStorage.getItem('token') || "");
        console.log(decoded);
      } catch (error:any) {
        if(error.message){
          this.logout()
        }
      }
    }
  }

  handleRegister(registerForm: any): Observable<any> {
    return this._httpClient.post(this.baseUrl + 'signup', registerForm)
  }
  handlelogin(loginForm: any): Observable<any> {
    return this._httpClient.post(this.baseUrl + 'signin', loginForm)
  }

  logout() {
    localStorage.removeItem('token')
    this.userIsLogedIn.next(false)
    this._Router.navigate(['/login'])
  }

}
