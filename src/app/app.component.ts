import { Component } from '@angular/core';
import { UserService} from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dressfront';
  currentUser: any;

  constructor(private userService: UserService) { }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {
    this.userService.searchSubject.subscribe(currentUser => {
      this.currentUser = currentUser;
      console.log(currentUser);
    });
  }
}
