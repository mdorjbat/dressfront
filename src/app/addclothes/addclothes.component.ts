import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {ClothesService} from '../services/clothes.service';
import { ProfileService} from '../services/profile.service';

@Component({
  selector: 'app-addclothes',
  templateUrl: './addclothes.component.html',
  styleUrls: ['./addclothes.component.css']
})
export class AddclothesComponent implements OnInit {
  public type: string;
  public name: string;
  public color_main: string;
  public color_one: string;
  public color_two: string;
  public size: string;
  public event: string;
  public age_level: string;
  public gender: string;
  public image_path: string;
  public layer: number;
  public profile: any;
  public selectedColor: string = 'red';

  constructor(private router: Router, private clothesService: ClothesService, private profileService: ProfileService) { }

   addCloth(): any {

    const newClothes = {
      type: this.type,
      name: this.name,
      color_main: this.selectedColor,
      color_one:'',
      color_two:'',
      size: this.size,
      event: this.event,
      age_level: this.age_level,
      gender: this.gender,
      image_path: this.image_path,
      layer: this.layer
    };

// Get age level from persons age
    if(this.profile.age < 12){
      newClothes.age_level = 'kid';
    }else if(this.profile.age < 21){
      newClothes.age_level = 'youth';
    }else{
      newClothes.age_level = 'adult';
    }
    console.log(this.profile.age);
// Choose colorOne and colorTwo

    switch (this.selectedColor) {
       case 'pink': {
         newClothes.color_one = 'red';
         newClothes.color_two = 'beige';
         break;
       }
       case 'red': {
         newClothes.color_one = 'pink';
         newClothes.color_two = 'beige';
         break;
       }
      case 'orange': {
        newClothes.color_one = 'beige';
        newClothes.color_two = 'brown';
        break;
      }
      case 'beige': {
        newClothes.color_one = 'yellow';
        newClothes.color_two = 'orange';
        break;
      }
      case 'yellow': {
        newClothes.color_one = 'beige';
        newClothes.color_two = 'white';
        break;
      }
      case 'green': {
        newClothes.color_one = 'yellow';
        newClothes.color_two = 'lightblue';
        break;
      }
      case 'lightblue': {
        newClothes.color_one = 'darkblue';
        newClothes.color_two = 'purple';
        break;
      }
      case 'darkblue': {
        newClothes.color_one = 'lightblue';
        newClothes.color_two = 'purple';
        break;
      }
      case 'purple': {
        newClothes.color_one = 'lightblue';
        newClothes.color_two = 'darkblue';
        break;
      }
      case 'brown': {
        newClothes.color_one = 'orange';
        newClothes.color_two = 'white';
        break;
      }
      case 'grey': {
        newClothes.color_one = 'white';
        newClothes.color_two = 'black';
        break;
      }
      case 'black': {
        newClothes.color_one = 'white';
        newClothes.color_two = 'grey';
        break;
      }
      case 'white': {
        newClothes.color_one = 'black';
        newClothes.color_two = 'grey';
        break;
      }
       default: {
         break;
       }
     }

    console.log(newClothes);
    this.clothesService.createClothes(newClothes).subscribe(response => {
    });
    this.router.navigate(['/mainpage']);
  }

  getProfile(): any {
    this.profileService.getProfile().subscribe(response => {
      this.profile = response;
      console.log(this.profile);
    });
  }

  selectChangeHandler (event: any) {
    this.selectedColor = event.target.value;
  }

  ngOnInit(): void {
    this.getProfile();
  }
}
