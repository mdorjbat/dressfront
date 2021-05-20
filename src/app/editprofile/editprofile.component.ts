import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ProfileService} from '../services/profile.service';
import {HttpHeaders, HttpClient} from '@angular/common/http';

const herokuUrl = 'https://secret-savannah-30262.herokuapp.com';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  public firstName: string;
  public lastName: string;
  public age: number;
  public size: string;
  public gender: string;
  public path: string;
  public profile: any;
  public user: string;
  public value: string;
  public selectedAvatar: string = 'avatar1';

  constructor(private router: Router, private profileService: ProfileService, private http: HttpClient) { }

  selectChangeHandler (event: any) {
    this.selectedAvatar = event.target.value;
  }

  profileUpdater(): void{

    if (this.profile == null){
      console.log('updating profile');
      this.updateProfile();
    }else{
      console.log('creating profile');
      this.createProfile();
    }
  }
  updateProfile(): void{
    console.log(this.profile);
    const newProfile = {
        firstName : this.firstName,
        lastName : this.lastName,
        age : this.age,
        gender : this.gender,
        size : this.size,
        path : this.selectedAvatar
      };
    this.profileService.updateProfile(newProfile).subscribe(responce => {
      console.log(this.profile);
    });
    this.router.navigate(['/profile']);
  }
  createProfile(): any {
  const newProfile = {
      firstName : this.firstName,
      lastName : this.lastName,
      age : this.age,
      gender : this.gender,
      size : this.size,
      path : this.path
    };
  const token = localStorage.getItem('token');
  const requestOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      }),
    };
  return this.http
      .post(`${herokuUrl}/api/profile/`, newProfile, requestOptions);
  this.router.navigate(['/profile']);
  }
  ngOnInit(): void {
  }

}
