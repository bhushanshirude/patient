import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SocialSharing } from '../../../node_modules/@ionic-native/social-sharing';



@Component({
  selector: 'page-patient-profile-own',
  templateUrl: 'patient-profile-own.html'
})
export class PatientProfileOwnPage {
  message: string = null;
  link: string = null;
  subject: string = null;
  file: string = null;
  @Input('progress') progress;
  myDate = '2018-06-05';
  constructor(public navCtrl: NavController, public navParams: NavParams,private socialSharing: SocialSharing) {
    this.myDate = new Date().toISOString();

    this.progress = 56;
  }

  ionViewWillEnter() {


  } 
  sharing() {
    this.socialSharing.share(this.message, this.file, this.subject, this.link).then(() => {
    }).catch(() => { });
  }
  sort(){}
  swipe(event) {
    if(event.direction === 2) {
      this.navCtrl.parent.select(1);
    }
  }

}
