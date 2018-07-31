import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { SuperTabsModule } from 'ionic2-super-tabs';
import { SwipeTabDirective } from '../directives/swipe-tab.directive';


import { SocialSharing } from '@ionic-native/social-sharing';
import { DatePickerDirective } from 'ion-datepicker';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';

import { Data } from '../providers/data';
import { DoctorData } from '../providers/doctordata';
import { DatePickerModule } from 'ion-datepicker';
import { EmergencyPage } from '../pages/emergency/emergency';
import { NativePageTransitions } from '@ionic-native/native-page-transitions';

import { AccountloginPage } from '../pages/accountlogin/accountlogin';
import { AccountsignupPage } from '../pages/accountsignup/accountsignup';
import { AccountforgotpasswordPage } from '../pages/accountforgotpassword/accountforgotpassword';
import { PatientsProfileOwnTabs } from '../pages/patients-profile-own-tabs/patients-profile-own-tabs';
import { PatientProfileOwnPage } from '../pages/patient-profile-own/patient-profile-own';
import { PatientsRecordsPage } from '../pages/patients-records/patients-records';
import { PatientMydoctorsPage } from '../pages/patient-mydoctors/patient-mydoctors';
import { ReportsPage } from '../pages/reports/reports';
import { PatientsMedicinePage } from '../pages/patients-medicine/patients-medicine';
import { SupportPage } from '../pages/support/support';
import { SettingPage } from '../pages/setting/setting';
@NgModule({
  declarations: [
    MyApp,
    SwipeTabDirective,
    AccountloginPage,
    AccountsignupPage,
    AccountforgotpasswordPage,
    EmergencyPage,
    PatientsProfileOwnTabs,
    PatientMydoctorsPage,
    PatientProfileOwnPage,
    PatientsMedicinePage,
    PatientsRecordsPage,
    ReportsPage,
    SettingPage,
    SupportPage,
  ],
  imports: [
    BrowserModule,
    DatePickerModule,
    IonicModule.forRoot(MyApp, {
      tabsPlacement: 'top',
      platforms: {
        android: {
          tabsPlacement: 'top'
        },
        ios: {
          tabsPlacement: 'top'
        },
        windows:
        {
          tabsPlacement: 'top'
        }
      }
    }),
    IonicStorageModule.forRoot(),
    SuperTabsModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AccountloginPage,
    AccountsignupPage,
    AccountforgotpasswordPage,
    EmergencyPage,
    PatientsProfileOwnTabs,
    PatientMydoctorsPage,
    PatientsMedicinePage,
    PatientProfileOwnPage,
    PatientsRecordsPage,
    ReportsPage,
    SettingPage,
    SupportPage,
  ],
  providers: [
    SocialSharing,
    StatusBar,
    SplashScreen, DatePickerDirective, DoctorData, Data,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    NativePageTransitions
  ]
})
export class AppModule { }
