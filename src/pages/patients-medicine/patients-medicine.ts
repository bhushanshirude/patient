import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';



@Component({
  selector: 'page-patients-medicine',
  templateUrl: 'patients-medicine.html',
})
export class PatientsMedicinePage {
  [x: string]: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PatientsMedicinePage');
  }
  swipe(event) {
    if (event.direction === 4) {
      this.navCtrl.parent.select(3);
    }
  }
  sort() { }
  search() {
    this.value = 'search';
  }
  sea() {
    this.value = 'search !=search';
  }
}
