import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { IUserForLogin, IUserForRegister } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  authUser(user: IUserForLogin) {
    
    return this.http.post(this.baseUrl + '/account/login', user);
  }

  registerUser(user: IUserForRegister){
    return this.http.post(this.baseUrl + '/account/register', user);
  }
}
