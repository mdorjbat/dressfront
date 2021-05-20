import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserService} from './user.service';

const herokuUrl = 'https://secret-savannah-30262.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class ClothesService {

  constructor(private user: UserService, private http: HttpClient) { }

  getClothes(): any{
    const token = localStorage.getItem('token');
    const requestOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      }),
    };
    return this.http
      .get(`${herokuUrl}/api/clothes`, requestOptions);
  }

  updateClothes(newClothes): any {
    console.log(newClothes);
    const token = localStorage.getItem('token');
    const requestOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      }),
    };
    return this.http
      .put(`${herokuUrl}/api/clothes`, newClothes, requestOptions);
  }
  createClothes(newClothes): any {
    console.log(newClothes);
    const token = localStorage.getItem('token');
    const requestOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      }),
    };
    return this.http
      .post(`${herokuUrl}/api/clothes`, newClothes, requestOptions);
  }
}
