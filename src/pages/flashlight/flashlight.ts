import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Flashlight } from '@ionic-native/flashlight';

/**
 * Generated class for the FlashlightPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-flashlight',
  templateUrl: 'flashlight.html',
})
export class FlashlightPage {

  constructor(private flash: Flashlight) {
  }

  turnOn(){
    this.flash.switchOn();
  }

  turnOff(){
    this.flash.switchOff();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FlashlightPage');
  }

}
