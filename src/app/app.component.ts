import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CameraPage } from '../pages/camera/camera';
import { GeolocalisationPage } from '../pages/geolocalisation/geolocalisation';
import { VideoPage } from '../pages/video/video';
import { VibrationPage } from '../pages/vibration/vibration';
import { GooglemapPage } from '../pages/googlemap/googlemap';
import { BarcodeScannerPage } from '../pages/barcode-scanner/barcode-scanner';
import { CalendarPage } from '../pages/calendar/calendar';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'Camera', component: CameraPage },
      { title: 'Geolocalisation', component: GeolocalisationPage },
      { title: 'Video', component: VideoPage },
      { title: 'Vibration', component: VibrationPage },
      { title: 'Google Maps', component: GooglemapPage },
      { title: 'Scanner', component: BarcodeScannerPage },
      { title: 'Calendrier', component: CalendarPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
