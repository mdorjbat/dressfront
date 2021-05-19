import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { ProfileService} from '../services/profile.service';
import { UserService} from '../services/user.service';
import { EditprofileComponent} from '../editprofile/editprofile.component';

declare const M;


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public firstName: string;
  public lastName: string;
  public age: number;
  public size: string;
  public gender: string;
  public path: string;
  public profile: any;
  public user: string;

  getProfile(): any {
    this.profileService.getProfile().subscribe(response => {
      this.profile = response;
      console.log(this.profile);
    });
  }


  createProfile(): void{
    const newProfile = {
      firstName : this.firstName,
      lastName : this.lastName,
      age : this.age,
      gender : this.gender,
      size : this.size,
      path : this.path
    };
    this.profileService.createProfile(newProfile).subscribe(responce => {
      console.log(this.profile);
    });
  }
  constructor(private router: Router, private profileService: ProfileService, private userService: UserService) { }


  ngOnInit(): void {

    if (this.getProfile() != null){
      this.router.navigate(['/editprofile']);
    }else{
      this.getProfile();
    }
    this.user = localStorage.getItem('currentUser') || null;

  }

}
