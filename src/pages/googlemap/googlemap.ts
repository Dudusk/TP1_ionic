import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, GoogleMapOptions } from '@ionic-native/google-maps';

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
  
    constructor() {
    }
  
    ionViewLoaded() {
      console.log("Génération de la map..");
      this.createMap();
    }

    createMap() {
      let mapOptions: GoogleMapOptions = {
        camera: {
          target: {
  
            lat: 43.3168,
            lng: 5.36
          },
          zoom: 18,
          tilt: 30
        }
      };

      let elements: HTMLElement = document.getElementById('map_canvas');
      this.map = GoogleMaps.create(elements, mapOptions);

      this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {
        console.log('Map is ready!');
        //this.createMarker();
      });

    }

    createMarker() {
      this.map.addMarker({
        title: 'Ionic',
        icon: 'blue',
        animation: 'DROP',
        position: {
          lat: 43.0741904,
          lng: -89.3809802
        }
      })
      .then(marker => {
        marker.on(GoogleMapsEvent.MARKER_CLICK)
          .subscribe(() => {
            alert('clicked');
          });
      });
      // let latLngBounds: VisibleRegion = this.map.getVisibleRegion();
      // let sw: ILatLng = latLngBounds.southwest;
      // let ne: ILatLng = latLngBounds.northeast;
      // let diffY: number = (ne.lat - sw.lat);
      // let diffX: number = (ne.lng - sw.lng);
  
      // for (let i = 0; i < 100; i++) {
      //   this.map.addMarker({
      //     'position': {
      //       'lat': sw.lat + diffY * Math.random(),
      //       'lng': sw.lng  + diffX * Math.random()
      //     }
      //   });
      // }
    }
    

  
    // loadMap() {
    //   this.map = GoogleMaps.create('map_canvas');  // <-- changed
    //   this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
    //     console.log("zer");
    //   });
    // }

}
