import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

 
 
@Component({
  selector: 'page-patients-medicine',
  templateUrl: 'patients-medicine.html',
})
export class PatientsMedicinePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PatientsMedicinePage');
  }
  swipe(event) {
    if(event.direction === 4) {
      this.navCtrl.parent.select(3);
    }
  }
  sort(){

  }
  share(){
    
  }
}
