import { Component } from '@angular/core';
import { NavParams, PopoverController } from 'ionic-angular';
import { PatientsRecordsPage } from '../patients-records/patients-records';
import { PatientsMedicinePage } from '../patients-medicine/patients-medicine';
import { PatientMydoctorsPage } from '../patient-mydoctors/patient-mydoctors';

// import { PopoverPatients_menu } from '../popover_patients_menu/popoverpatients_menu';
import { Storage } from '@ionic/storage';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { PatientProfileOwnPage } from '../patient-profile-own/patient-profile-own';
import { ReportsPage } from '../reports/reports';

import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
@Component({
  selector: 'page-patients-profile-own-tabs',
  templateUrl: 'patients-profile-own-tabs.html'
})
export class PatientsProfileOwnTabs {
  showIcons: boolean = true;
  showTitles: boolean = true;
  pageTitle: string = 'Partial Home';
  type = "titles-only";
  tab1Root = PatientProfileOwnPage;
  tab2Root = PatientsRecordsPage;
  tab3Root = PatientMydoctorsPage;
  tab4Root = ReportsPage;
  tab5Root = PatientsMedicinePage;
  mySelectedIndex: number;
  loaded:   boolean = false;
  tabIndex: number  = 0;
  constructor(navParams: NavParams,public nativePageTransitions: NativePageTransitions, public navCtrl: NavController,
     public popoverCtrl: PopoverController, public storage: Storage, 
     public localStorage: Storage) {
    this.showTitles = true;
    this.showIcons = false;
    this.pageTitle += ' - Titles only';

    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }
  // presentPopover(event: Event) {
  //   let popover = this.popoverCtrl.create(PopoverPatients_menu);
  //   popover.present({ ev: event });
  // }

  private getAnimationDirection(index):string {
    var currentIndex = this.tabIndex;

    this.tabIndex = index;

    switch (true){
      case (currentIndex < index):
        return('left');
      case (currentIndex > index):
        return ('right');
    }
  }

  public transition(e):void {
    let options: NativeTransitionOptions = {
     direction:this.getAnimationDirection(e.index),
     duration: 250,
     slowdownfactor: -1,
     slidePixels: 0,
     iosdelay: 20,
     androiddelay: 0,
     fixedPixelsTop: 0,
     fixedPixelsBottom: 48
    };

    if (!this.loaded) {
      this.loaded = true;
      return;
    }

    this.nativePageTransitions.slide(options);
  }
}
