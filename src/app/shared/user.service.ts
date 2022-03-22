import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = "http://localhost:3000"

  public logged: boolean

  public user: User

  constructor(private http: HttpClient) {
    this.logged = false
  }

  postRegister(user: User) {
    return this.http.post(this.url + "/register", user)
  }

  postLogin(user: User) {
    return this.http.post(this.url + "/login", user)
  }


}
