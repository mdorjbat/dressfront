import { Component, OnInit } from '@angular/core';

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

  updateProfile(): void{

  }
  constructor() { }

  ngOnInit(): void {
  }

}
