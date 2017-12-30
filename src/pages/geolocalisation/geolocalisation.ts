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

  reloadPosition: number = 0;
  arrayLocationWatch = [];

  constructor(private geolocation: Geolocation) {
  }

  geolocMe(){
  	this.geolocation.getCurrentPosition().then((resp) => {
	    this.lati = resp.coords.latitude;
    	this.longi = resp.coords.longitude;
      this.accuracy = resp.coords.accuracy;
    }).catch((error) => {
	    console.log('Error getting location', error);
	    if(error.code == 2){
	    	console.log("pas internet");
	    }
    });
  }

  watched(){
    this.geolocation.watchPosition().subscribe((data) => {
      let newData = data.coords.latitude + " " + data.coords.longitude;
      this.reloadPosition++;
      if(this.arrayLocationWatch[this.reloadPosition -1] != newData){
        this.arrayLocationWatch.push(newData);
      }
    });
    console.log(this.arrayLocationWatch);
  }

  ionViewDidLoad() {
    this.geolocMe();
    this.watched()
    console.log('ionViewDidLoad GeolocalisationPage');
  }

}
