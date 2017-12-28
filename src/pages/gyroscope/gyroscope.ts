import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Gyroscope, GyroscopeOrientation, GyroscopeOptions } from '@ionic-native/gyroscope';

/**
 * Generated class for the GyroscopePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gyroscope',
  templateUrl: 'gyroscope.html',
})
export class GyroscopePage {

  positionX: Number = 0;
  positionY: Number = 0;
  positionZ: Number = 0;
  timestamp: Number = 0;

  watchPositionX: Number = 0;
  watchPositionY: Number = 0;
  watchPositionZ: Number = 0;
  watchTimestamp: Number = 0;

  options: GyroscopeOptions = {
   frequency: 1000
  };

  constructor(private gyro: Gyroscope) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GyroscopePage');
    this.gyroscopeLocation();
  }

  gyroscopeLocation(){
    this.gyro.getCurrent(this.options)
      .then((orientation: GyroscopeOrientation) => {
        console.log(orientation);
         console.log(orientation.x, orientation.y, orientation.z, orientation.timestamp);
         this.positionX = orientation.x;
         this.positionY = orientation.y;
         this.positionZ = orientation.z;
         this.timestamp = orientation.timestamp
       })
      .catch((err) =>{
        console.log(err);
      });

    this.gyro.watch(this.options)
      .subscribe((orientation: GyroscopeOrientation) => {
        this.watchPositionX = orientation.x;
        this.watchPositionY = orientation.y;
        this.watchPositionZ = orientation.z;
        this.watchTimestamp = orientation.timestamp
      });
  }

}
