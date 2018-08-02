import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-patient-mydoctors',
  templateUrl: 'patient-mydoctors.html',
})
export class PatientMydoctorsPage {
  [x: string]: any;
  items: any; searchTerm: string = '';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [
      { title: 'Dr Details' }
    ]
  }
  filterItems(searchTerm) {
    return this.items.filter((item) => {
      return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MydoctorsPage');
  }

  swipe(event) {
    if (event.direction === 2) {
      this.navCtrl.parent.select(3);
    }
    if (event.direction === 4) {
      this.navCtrl.parent.select(1);
    }
  }
  search() {
    this.value = 'search';
  }
  sea() {
    this.value = 'search !=search';
  }

}
