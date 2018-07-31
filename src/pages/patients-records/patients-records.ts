import { Component, Input } from '@angular/core';
import {  NavController, NavParams,App } from 'ionic-angular'; 
 
@Component({
  selector: 'page-patients-records',
  templateUrl: 'patients-records.html',
})
export class PatientsRecordsPage {
 // @Input('progress') progress;
 pet='kittens';
  constructor(public navCtrl: NavController, public navParams: NavParams,public appCtrl:App) {
 
   // this.progress=36;
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PatientsRecordsPage');
  }
  sort(){

  }
  share(){
    
  }
  swipe(event) {
    if(event.direction === 2) {
      this.navCtrl.parent.select(2);
    }
    if(event.direction === 4) {
      this.navCtrl.parent.select(0);
    }
  }

}
