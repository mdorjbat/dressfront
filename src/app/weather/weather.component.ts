import { Component, OnInit } from '@angular/core';
import { Subject} from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  WeatherData:any;
  zip: string;
  cityname: string;
  weather: any;
  currentTime: any;
  searchSubject = new Subject();

  constructor() { }

  ngOnInit(): void {
    this.WeatherData = {
      main : {},
      isDay: true
    };
    this.getWeatherData();
    console.log(this.WeatherData);
    // this.cityname = this.city.name;
  }
  ngOnChanges(): void{
    this.getWeatherData();
  }

  getWeatherData(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + 'chicago' + '&appid=b178e98e32735200ac9b04afb56e4832')
      .then(response => response.json())
      .then(data => {this.setWeatherData(data);
      });

  }

  setWeatherData(data){
    this.WeatherData = data;
    const sunsetTime = new Date(this.WeatherData.sys.sunset * 1000);
    this.WeatherData.sunset_time = sunsetTime.toLocaleTimeString();
    const currentDate = new Date();
    this.WeatherData.isDay = true;


    this.WeatherData.temp_celcius = ((this.WeatherData.main.temp - 273.15) * 9 / 5 + 32).toFixed(0);
    this.WeatherData.temp_min = ((this.WeatherData.main.temp_min - 273.15) * 9 / 5 + 32).toFixed(0);
    this.WeatherData.temp_max = ((this.WeatherData.main.temp_max - 273.15) * 9 / 5 + 32).toFixed(0);
    this.WeatherData.temp_feels_like = ((this.WeatherData.main.feels_like - 273.15) * 9 / 5 + 32).toFixed(0);
    this.currentTime = currentDate.getTime() + this.WeatherData.timezone * 1000;
    // this.currentTime = currentDate.getTime() - this.WeatherData.timezone;
  }

}
