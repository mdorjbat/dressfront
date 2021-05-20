import { Component, OnInit } from '@angular/core';
import { UserService} from '../services/user.service';
import { ProfileService} from '../services/profile.service';
import {profilingEnabled} from '@angular-devkit/build-angular/src/utils/environment-options';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  currentUser: any;
  public currentUserName: string;


  constructor(private userService: UserService, private profileService: ProfileService) {
    this.currentUserName = profileService.getProfile().firstName;
  }

  ngOnInit(): void {
    // set currentUser if server restarts
    this.currentUser = localStorage.getItem('currentUser') || null;
    this.userService.searchSubject.subscribe(currentUser => {
      this.currentUser = currentUser;
      console.log(currentUser);
    });
  }

}
