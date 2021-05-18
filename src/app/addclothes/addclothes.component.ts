import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addclothes',
  templateUrl: './addclothes.component.html',
  styleUrls: ['./addclothes.component.css']
})
export class AddclothesComponent implements OnInit {
  public clothesType: string;
  public clothesName: string;
  public color: string;
  public size: string;
  public occasional: string;
  public gender: string;
  public path: string;
  public layer: number;

  constructor() { }

  ngOnInit(): void {
  }

  addCloth() {

  }
}
