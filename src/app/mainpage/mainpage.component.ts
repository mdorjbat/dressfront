import { Component, OnInit } from '@angular/core';
import { ProfileService} from '../services/profile.service';
import {Router} from '@angular/router';
import { ClothesService} from '../services/clothes.service';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { WeatherComponent} from '../weather/weather.component';
import { Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  public profile: any;
  public clothes: any;
  public favColor = 'grey';
  public myEvent = '';
  public temperature: number;
  WeatherData:any;
  cityname: string;
  weather: any;

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

  constructor( private profileService: ProfileService, private clothesService: ClothesService, private http: HttpClient) {
    this.head = 'head200.png';
    this.curtain = 'curtain200.png';
    this.feet = 'feet200.png';
    this.layer1upperbottom = 'underwear.png';
    this.layer2uppermid = 'tshirt.png';
    this.layer2upperbottom = 'shorts.png';
    this.layer2lowerbottom = 'socs.png';
    this.layer3top = 'yellow hat.png';
    this.layer3lowerbottom = 'brown shoes.jpg';
  }

  getProfile(): any {
    this.profileService.getProfile().subscribe(response => {
      this.profile = response;
      console.log(this.profile);
    });
  }

  getClothes(): any{
    this.clothesService.getClothes().subscribe(response => {
      this.clothes = response;
      console.log(this.clothes);
    });
  }
  selectColor(event: any) {
    this.favColor = event.target.value;
    const color = this.favColor;
    this.clothes.forEach(function(i){
      if (i.color_main === color || i.color_one === color || i.color_two === color) {
        console.log(i);
      }
    });
  }

  selectEvents(event: any) {
    this.myEvent = event.target.value;
    const bigEvent = this.myEvent;

    this.clothes.forEach(function(i){
      if (i.event === bigEvent) {
        console.log(i);
      }
    });
    console.log(this.weather.main.temp);
  }

  findWeather(): void{
    this.http
      .get(`http://api.openweathermap.org/data/2.5/weather?q=chicago&appid=b178e98e32735200ac9b04afb56e4832&&units=imperial`)
      .subscribe(response => this.weather = response);
  }

  ngOnInit(): void {
    this.getProfile();
    this.getClothes();

    this.findWeather();
  }

}
