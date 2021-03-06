import { Component, OnInit } from '@angular/core';
import { ProfileService} from '../services/profile.service';
import {Router} from '@angular/router';
import { ClothesService} from '../services/clothes.service';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { WeatherComponent} from '../weather/weather.component';
import { Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {isEmpty} from 'rxjs/operators';

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
    this.layer1upperbottom = '';
    this.layer2uppermid = '';
    this.layer2upperbottom = '';
    this.layer2lowerbottom = '';
    this.layer3top = '';
    this.layer3lowerbottom = '';
  }
  //get profile
  getProfile(): any {
    this.profileService.getProfile().subscribe(response => {
      this.profile = response;
      console.log(this.profile);
    });
  }
  //get clothes
  getClothes(): any{
    this.clothesService.getClothes().subscribe(response => {
      this.clothes = response;
      console.log(this.clothes);
    });
  }

  //This function executes when color is selected

  selectColor(event: any) {
    this.favColor = event.target.value;
    const color = this.favColor;

    this.clearAllLayers();

    if(this.weather.main.temp > 90){
      this.clothes.forEach((i) => {
        if ((i.color_main === color || i.color_one === color || i.color_two === color) && i.type === 'underwear' && i.event === null) {
          this.layer1upperbottom = i.image_path;
        }

        if ((i.color_main === color || i.color_one === color || i.color_two === color) && i.type === 'lightsocks' && i.event === null) {
          this.layer1lowerbottom = i.image_path;
        }

        if ((i.color_main === color || i.color_one === color || i.color_two === color)
          && (i.type === 't-shirt' || i.type === 'shirt' ) && i.event === null){
          this.layer2uppermid = i.image_path;
        }

        if ((i.color_main === color || i.color_one === color || i.color_two === color)
          && i.type === 'shorts' && i.event === null){
          this.layer2upperbottom = i.image_path;
        }

        if ((i.color_main === color || i.color_one === color || i.color_two === color)
          && i.type === 'shoes' && i.layer !== 4 && i.event === null){
          this.layer3lowerbottom = i.image_path;
        }

        if ((i.color_main === color || i.color_one === color || i.color_two === color)
          && i.type === 'hat' && i.layer !== 4 && i.event === null){
          this.layer3top = i.image_path;
        }

      });
    }else if(this.weather.main.temp > 80){
      this.clothes.forEach((i) => {
        if ((i.color_main === color || i.color_one === color || i.color_two === color) && i.type === 'underwear' && i.event === null) {
          this.layer1upperbottom = i.image_path;
        }

        if ((i.color_main === color || i.color_one === color || i.color_two === color) && i.type === 'socks' && i.event === null) {
          this.layer1lowerbottom = i.image_path;
        }

        if ((i.color_main === color || i.color_one === color || i.color_two === color)
          && (i.type === 't-shirt' || i.type === 'shirt' ) && i.event === null){
          this.layer2uppermid = i.image_path;
        }

        if ((i.color_main === color || i.color_one === color || i.color_two === color)
          && (i.type === 'sweater' || i.type === 'long shirt' || i.type === 'jacket') && i.event === null){
          this.layer3uppermid = i.image_path;
        }

        if ((i.color_main === color || i.color_one === color || i.color_two === color)
          && i.type === 'pants' && i.event === null){
          this.layer3upperbottom = i.image_path;
        }

        if ((i.color_main === color || i.color_one === color || i.color_two === color)
          && i.type === 'shoes' && i.layer !== 4 && i.event === null){
          this.layer3lowerbottom = i.image_path;
        }

        if ((i.color_main === color || i.color_one === color || i.color_two === color)
          && i.type === 'hat' && i.layer !== 4 && i.event === null){
          this.layer3top = i.image_path;
        }

      });
    }else{

      this.clothes.forEach((i) => {
        if ((i.color_main === color || i.color_one === color || i.color_two === color) && i.type === 'underwear' && i.event === null) {
          this.layer1upperbottom = i.image_path;
        }

        if ((i.color_main === color || i.color_one === color || i.color_two === color) && i.type === 'socks' && i.event === null) {
          this.layer1lowerbottom = i.image_path;
        }

        if ((i.color_main === color || i.color_one === color || i.color_two === color)
          && (i.type === 't-shirt' || i.type === 'shirt' ) && i.event === null){
          this.layer2uppermid = i.image_path;
        }

        if ((i.color_main === color || i.color_one === color || i.color_two === color)
          && (i.type === 'sweater' || i.type === 'long shirt' || i.type === 'jacket') && i.event === null){
          this.layer3uppermid = i.image_path;
        }

        if ((i.color_main === color || i.color_one === color || i.color_two === color)
          && i.type === 'pants' && i.event === null){
          this.layer3upperbottom = i.image_path;
        }

        if ((i.color_main === color || i.color_one === color || i.color_two === color)
          && i.type === 'shoes' && i.layer === 4 && i.event === null){
          this.layer4lowerbottom = i.image_path;
        }

        if ((i.color_main === color || i.color_one === color || i.color_two === color)
          && i.type === 'hat' && i.layer === 4 && i.event === null){
          this.layer4top = i.image_path;
        }

        if ((i.color_main === color || i.color_one === color || i.color_two === color)
          && i.type === 'coat' && i.layer === 4 && i.event === null){
          this.layer4uppermid = i.image_path;
        }

      });

    }



    // this.clothes.forEach(function(i){
    //   if (i.color_main === color || i.color_one === color || i.color_two === color) {
    //     console.log(i);
    //   }
    // });
  }

  selectEvents(event: any) {
    this.myEvent = event.target.value;
    const bigEvent = this.myEvent;
    this.clearAllLayers();


    switch (bigEvent){
      case 'beachday':
        this.layer1upperbottom = 'swimsuit.png';
        this.layer2lowerbottom = 'beachsandals.png';
        break;
      case 'haloween':
        this.layer3top = 'haloweenhat.png';
        this.layer3uppermid = 'haloweenshirt.png';
        this.layer3upperbottom = 'haloweenpants.png';
        this.layer3lowerbottom = 'haloweenshoes.png';
        break;
      case 'stpatric':
        this.layer3top = 'stpatrichat.png';
        this.layer3uppermid = 'stpatriccoat.png';
        this.layer3upperbottom = 'stpatricpants.png';
        this.layer3lowerbottom = 'stpatricshoes.png';
        break;
      case 'christmas':
        this.layer4top = 'christmasthat.png';
        this.layer4uppermid = 'christmastcoat.png';
        this.layer3lowermid = 'christmastpants.png';
        this.layer3uppermid = 'christmastsweater.png';
        this.layer4lowerbottom = 'christmastboots.png';
        break;
      default:
          this.layer1upperbottom = 'underwear.png';
        break;
    }

    this.clothes.forEach(function(i){
      if (i.event === bigEvent) {
        console.log(i);
      }
    });
    //console.log(this.weather.main.temp);
  }

  findWeather(): void {
    this.http
      .get(`http://api.openweathermap.org/data/2.5/weather?q=chicago&appid=b178e98e32735200ac9b04afb56e4832&&units=imperial`)
      .subscribe(response => {
        this.weather = response;
      }, err => console.log(err));
  }

  clearAllLayers():void{

    this.layer1top= '';
    this.layer1uppermid= '';
    this.layer1lowermid= '';
    this.layer1upperbottom= '';
    this.layer1lowerbottom= '';
    this.layer2top= '';
    this.layer2uppermid= '';
    this.layer2lowermid= '';
    this.layer2upperbottom= '';
    this.layer2lowerbottom= '';
    this.layer3top= '';
    this.layer3uppermid= '';
    this.layer3lowermid= '';
    this.layer3upperbottom= '';
    this.layer3lowerbottom= '';
    this.layer4top= '';
    this.layer4uppermid= '';
    this.layer4lowermid= '';
    this.layer4upperbottom= '';
    this.layer4lowerbottom= '';
  }
  ngOnInit(): void {
    this.getProfile();
    this.getClothes();

    this.findWeather();
  }

}
