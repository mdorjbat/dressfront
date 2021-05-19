import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
import { UserService} from './user.service';

const herokuUrl = 'https://secret-savannah-30262.herokuapp.com';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  getProfile(): any{
    const token = localStorage.getItem('token');
    const requestOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      }),
    };
    return this.http
      .get(`${herokuUrl}/api/profile`, requestOptions);
  }



  constructor(private user: UserService, private http: HttpClient) {}
}
