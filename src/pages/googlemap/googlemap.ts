import { Component } from '@angular/core';
import { IonicPage, NavController, Platform } from 'ionic-angular';
import { GoogleMaps, GoogleMap, GoogleMapsEvent,
  VisibleRegion, ILatLng
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
      public navCtrl: NavController, private platform: Platform) {  // <-- no longer need to define in constructor
      
      this.platform.ready().then(() => this.loadMaps());
    }
  
    ionViewLoaded() {
      console.log("gne")
      // this.loadMap();
    }

    loadMaps() {
      this.createMap();
    }


    createMap() {
      this.map = GoogleMaps.create('map_canvas');
  
      this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
        console.log("map is ready to use.");
  
        this.createMarkers();
      });
    }

    createMarkers() {
      let latLngBounds: VisibleRegion = this.map.getVisibleRegion();
      let sw: ILatLng = latLngBounds.southwest;
      let ne: ILatLng = latLngBounds.northeast;
      let diffY: number = (ne.lat - sw.lat);
      let diffX: number = (ne.lng - sw.lng);
  
      for (let i = 0; i < 100; i++) {
        this.map.addMarker({
          'position': {
            'lat': sw.lat + diffY * Math.random(),
            'lng': sw.lng  + diffX * Math.random()
          }
        });
      }
    }

  
    // loadMap() {
    //   this.map = GoogleMaps.create('map_canvas');  // <-- changed
    //   this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
    //     console.log("zer");
    //   });
    // }

}
