import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ReportsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reports',
  templateUrl: 'reports.html',
})
export class ReportsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportsPage');
  }

  swipe(event) {
    if(event.direction === 2) {
      this.navCtrl.parent.select(4);
    }
    if(event.direction === 4) {
      this.navCtrl.parent.select(2);
    }
  }
  sort(){

  }
  share(){
    
  }
}
