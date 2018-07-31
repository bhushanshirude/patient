import { Component, ViewChild } from '@angular/core';
import { Events, Platform, MenuController, Nav, PopoverController, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
import { AccountloginPage } from '../pages/accountlogin/accountlogin';
import { SupportPage } from '../pages/support/support';
import { PatientsProfileOwnTabs } from '../pages/patients-profile-own-tabs/patients-profile-own-tabs';
import { App } from 'ionic-angular/components/app/app';
import { SettingPage } from '../pages/setting/setting';


export interface PageInterface {
  title: string;
  name: string;
  component: any;
  icon: string;
  logsOut?: boolean;
  index?: number;
  tabName?: string;
  tabComponent?: any;
}
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  [x: string]: any;

  @ViewChild(Nav) nav: Nav;
  usertype = '';
  rootPage//: any = AccountloginPage;
  loggedInPages: PageInterface[] = [
    // { title: 'Doctor Home', name: 'DoctorDashboard', component: DoctorDashboard, icon: 'person' },
    { title: 'Support', name: 'SupportPage', component: SupportPage, icon: 'help' },
    { title: 'Logout', name: 'Logout', component: AccountloginPage, icon: 'log-out', logsOut: true }
  ];
  constructor(
    public events: Events, public alertCtrl: AlertController, public appCtrl: App,
    // public userData: UserData 
    platform: Platform, statusBar: StatusBar, public storage: Storage,
    public menu: MenuController, public app: App, splashScreen: SplashScreen, public popoverCtrl: PopoverController) {

    this.storage.get('usertype').then((val) => {
      console.log('Login User1:=>', val);
      if (val == "Doctor") {
        this.usertype = 'Doctor';
        // this.rootPage = HospitalDashboard;

      } if (val == "Patient") {
        this.usertype = 'Patient';
        this.rootPage = PatientsProfileOwnTabs;

      } else {
        this.usertype = '';
        this.rootPage = AccountloginPage;

      }
    });
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      console.log('Login User5:=>', this.usertype);
    });
  }

  supportPage() {
    this.nav.setRoot(SupportPage);
    this.menu.close()
  }

  // for logout section use this code 
  logout() {
    this.menu.close();
    this.promptAlert();
  }
  promptAlert() {
    let alert = this.alertCtrl.create({
      title: 'Do want to Logout',
      buttons: [
        {
          text: 'Logout',
          handler: () => {
            alert.dismiss(true);
            return false;
          }
        }, {
          text: 'Cancel',
          handler: () => {
            alert.dismiss(false);
            this.menu.open();
            return false;
          }
        }
      ]
    });
    alert.present();
    alert.onDidDismiss((data) => {
      console.log('Yes/No', data);
      if (data == true) {
        this.storage.set('usertype', '');
        this.nav.setRoot(AccountloginPage);
      }
    });
  }


  dashboard() {
    this.storage.get('usertype').then((val) => {
      console.log('Login User:=>', val);
      if (val == "Doctor") {
        // this.appCtrl.getRootNavs()[0].setRoot(HospitalDashboard);
        this.menu.close();
      } if (val == "Patient") {
        this.appCtrl.getRootNavs()[0].setRoot(PatientsProfileOwnTabs);
        this.menu.close();
      } else {
        this.menu.open();
      }
    });
  }
  
  Setting() {
    this.appCtrl.getRootNavs()[0].setRoot(SettingPage);
    this.menu.close()
  }
}

