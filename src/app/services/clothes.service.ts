import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClothesService {

  constructor() { }

  createClothes(): void{
    const newProfile = {
      firstName : this.firstName,
      lastName : this.lastName,
      age : this.age,
      gender : this.gender,
      size : this.size,
      path : this.path
    };
    this.profileService.createProfile(newProfile).subscribe(responce => {
      console.log(this.profile);
    });
  }
}
