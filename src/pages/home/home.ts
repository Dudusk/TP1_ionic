import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OpenNativeSettings } from '@ionic-native/open-native-settings';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private settings: OpenNativeSettings) {

  }

  openSet(){
    this.settings.open("account").then(
      (error) => {
        console.error(error);
      }
    )
  }

}
