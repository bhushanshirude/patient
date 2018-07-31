import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-patient-profile-own',
  templateUrl: 'patient-profile-own.html'
})
export class PatientProfileOwnPage {
  @Input('progress') progress;
  myDate = '2018-06-05';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.myDate = new Date().toISOString();

    this.progress = 56;
  }

  ionViewWillEnter() {


  } 
  share(){
    
  }
  sort(){}
  swipe(event) {
    if(event.direction === 2) {
      this.navCtrl.parent.select(1);
    }
  }

}
