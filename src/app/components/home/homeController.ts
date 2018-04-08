import { Component } from '@angular/core';
import{ Sloat } from '../../model/sloatModel';
@Component({
  selector: "home_root",
  templateUrl: './homeComponent.html'
})


export class HomeComponent {
  sloatA: any;
  sloatB: any;
  sloatC: any;
  constructor() {
    debugger;
    this.sloatA = new Sloat("",1,1)
  }

  StartGame() {

  }

}
