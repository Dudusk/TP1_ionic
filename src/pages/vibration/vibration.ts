import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';

/**
 * Generated class for the VibrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vibration',
  templateUrl: 'vibration.html',
})
export class VibrationPage {

  constructor(public vibration: Vibration) {
  }

  vibrate1() {
    this.vibration.vibrate(1000);
  }

  vibrateStartAndStop(){
    this.vibration.vibrate([2000,1000,2000]);
  }

  vibrateStop() {
    this.vibration.vibrate(0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VibrationPage');
  }

}
