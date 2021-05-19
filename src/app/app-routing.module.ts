import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import {SignupComponent} from './signup/signup.component';
import {CarouselComponent} from './carousel/carousel.component';
import {ProfileComponent} from './profile/profile.component';
import {AddclothesComponent} from './addclothes/addclothes.component';
import {MainpageComponent} from './mainpage/mainpage.component';
import {EditprofileComponent} from './editprofile/editprofile.component';

const routes: Routes = [{
    path: '',
    component: CarouselComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'addclothes',
    component: AddclothesComponent
  },
  {
    path: 'mainpage',
    component: MainpageComponent
  },
  {
    path: 'editprofile',
    component: EditprofileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
