import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CameraPage } from '../pages/camera/camera';
import { GeolocalisationPage } from '../pages/geolocalisation/geolocalisation';
import { VideoPage } from '../pages/video/video';
import { VibrationPage } from '../pages/vibration/vibration';
import { GooglemapPage } from '../pages/googlemap/googlemap';
import { BarcodeScannerPage } from '../pages/barcode-scanner/barcode-scanner';
import { CalendarPage } from '../pages/calendar/calendar';
import { ContactPage } from '../pages/contact/contact';
import { DevicePage } from '../pages/device/device';
import { FlashlightPage } from '../pages/flashlight/flashlight';
import { GyroscopePage } from '../pages/gyroscope/gyroscope';
import { ShakePage } from '../pages/shake/shake';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Geolocation } from '@ionic-native/geolocation';
import { MediaCapture } from '@ionic-native/media-capture';
import { GoogleMaps } from '@ionic-native/google-maps';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Calendar } from '@ionic-native/calendar';
import { Vibration } from '@ionic-native/vibration';
import { Contacts } from '@ionic-native/contacts';
import { Device } from '@ionic-native/device';
import { Flashlight } from '@ionic-native/flashlight';
import { Gyroscope } from '@ionic-native/gyroscope';
import { Shake } from '@ionic-native/shake';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CameraPage,
    GeolocalisationPage,
    VideoPage,
    VibrationPage,
    GooglemapPage,
    BarcodeScannerPage,
    CalendarPage,
    ContactPage,
    DevicePage,
    FlashlightPage,
    GyroscopePage,
    ShakePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CameraPage,
    GeolocalisationPage,
    VideoPage,
    VibrationPage,
    GooglemapPage,
    BarcodeScannerPage,
    CalendarPage,
    ContactPage,
    DevicePage,
    FlashlightPage,
    GyroscopePage,
    ShakePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    SocialSharing,
    Geolocation,
    MediaCapture,
    Vibration,
    GoogleMaps,
    BarcodeScanner,
    Calendar,
    Contacts,
    Device,
    Flashlight,
    Gyroscope,
    Shake,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
