import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
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
  temp: string;

  arrayLocationWatch = [];

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

    
    // let watch = this.geolocation.watchPosition();
    // watch.subscribe((data) => {
    //   //console.log(resp);
    //   this.arrayLocationWatch.push(data.coords.latitude + data.coords.longitude);
    // 	this.temp = "Latitude: " + data.coords.latitude + " Longitude: " + data.coords.longitude;
    // 	console.log(this.temp);
    // });

    
  }

  watch(){
    this.geolocation.watchPosition().subscribe((data) => {
      this.arrayLocationWatch.push(data.coords.latitude + " " + data.coords.longitude);
    });
    console.log(this.arrayLocationWatch);
  }

  ionViewDidLoad() {
    this.geolocMe();
    this.watch()
    console.log('ionViewDidLoad GeolocalisationPage');
  }

}
