import { Component, OnInit } from '@angular/core';
import { ProfileService} from '../services/profile.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  public profile: any;
  public favColor: string = 'grey';

  public head: string;
  public curtain: string;
  public feet: string;
  public layer1top: string;
  public layer1uppermid: string;
  public layer1lowermid: string;
  public layer1upperbottom: string;
  public layer1lowerbottom: string;
  public layer2top: string;
  public layer2uppermid: string;
  public layer2lowermid: string;
  public layer2upperbottom: string;
  public layer2lowerbottom: string;
  public layer3top: string;
  public layer3uppermid: string;
  public layer3lowermid: string;
  public layer3upperbottom: string;
  public layer3lowerbottom: string;
  public layer4top: string;
  public layer4uppermid: string;
  public layer4lowermid: string;
  public layer4upperbottom: string;
  public layer4lowerbottom: string;

  constructor( private profileService: ProfileService) {
    this.head = "head200.png";
    this.curtain = "curtain200.png";
    this.feet = "feet200.png";
    this.layer1upperbottom = "underwear.png";
    this.layer2uppermid = "tshirt.png";
    this.layer2upperbottom = "shorts.png";
    this.layer2lowerbottom = "socs.png";
    this.layer3top = "yellow hat.png";
    this.layer3lowerbottom = "brown shoes.jpg";
  }

  getProfile(): any {
    this.profileService.getProfile().subscribe(response => {
      this.profile = response;
      console.log(this.profile);
    });
  }

  selectColor (event: any) {
    this.favColor = event.target.value;
  }

  ngOnInit(): void {
    this.getProfile();
  }

}
