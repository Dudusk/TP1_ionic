import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';


/**
 * Generated class for the GeolocalisationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-geolocalisation',
  templateUrl: 'geolocalisation.html',
})
export class GeolocalisationPage {
  lati: number;
	longi: number;
  accuracy: number;

  constructor(private geolocation: Geolocation) {
  }

  geolocMe(){
  	this.geolocation.getCurrentPosition().then((resp) => {
	    //console.log(resp);
	    console.log(resp.coords.latitude);
	    console.log(resp.coords.longitude);

	    this.lati = resp.coords.latitude;
    	this.longi = resp.coords.longitude;
      this.accuracy = resp.coords.accuracy;
    }).catch((error) => {
	    console.log('Error getting location', error);
	    if(error.code == 2){
	    	console.log("pas internet");
	    }
    });

    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
    	//console.log(resp);
    	let temp = "Latitude: " + data.coords.latitude + " Longitude: " + data.coords.longitude;
    	console.log(temp);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GeolocalisationPage');
  }

}
