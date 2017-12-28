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

  private status= ""

  constructor(private flash: Flashlight) {
  }

  turnOn(){
    this.isAvailaible()
    this.flash.switchOn();
    this.status = "Allumée";
  }

  turnOff(){
    this.isAvailaible()
    this.flash.switchOff();
    this.status = "Eteinte";
  }

  isAvailaible(){
    this.flash.available().then(
      (success) => {
        this.status = "Disponible"
      },
      (error) => {
        this.status = "Non disponible"
      }
    )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FlashlightPage');
  }

}
