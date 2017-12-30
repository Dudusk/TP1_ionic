import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Device } from '@ionic-native/device';

/**
 * Generated class for the DevicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-device',
  templateUrl: 'device.html',
})
export class DevicePage {

  information = {
    uuid: "",
    cordova: "",
    model :"",
    platform: "",
    version: "",
    manufacturer: "",
    isVirtual: false,
    serial: ""
  }

  constructor(private device: Device) {
    console.log(this.device)
    this.information.uuid = this.device.uuid;
    this.information.cordova = this.device.cordova;
    this.information.model = this.device.model;
    this.information.platform = this.device.platform;
    this.information.version = this.device.version;
    this.information.manufacturer = this.device.manufacturer;
    this.information.isVirtual = this.device.isVirtual;
    this.information.serial = this.device.serial;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DevicePage');
  }

}
