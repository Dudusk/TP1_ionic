import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker
 } from '@ionic-native/google-maps';

/**
 * Generated class for the GooglemapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-googlemap',
  templateUrl: 'googlemap.html',
})
export class GooglemapPage {
  map: GoogleMap;
  
    constructor(
      public navCtrl: NavController, private googleMaps: GoogleMaps) {  // <-- no longer need to define in constructor
    }
  
    ionViewLoaded() {
      this.loadMap();
    }
    
    loadMap() {
      this.map = this.googleMaps.create('map_canvas');
    }
  
    // loadMap() {
    //   this.map = GoogleMaps.create('map_canvas');  // <-- changed
    //   this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
    //     console.log("zer");
    //   });
    // }

}
