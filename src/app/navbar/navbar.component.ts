import { Component, OnInit } from '@angular/core';
import { UserService} from '../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  currentUser: any;

  constructor() { }

  ngOnInit(): void {
  }

}
