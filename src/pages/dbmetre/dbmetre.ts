import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DBMeter } from '@ionic-native/db-meter';

/**
 * Generated class for the DbmetrePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dbmetre',
  templateUrl: 'dbmetre.html',
})
export class DbmetrePage {
  subscription: any

  constructor(private dbmetre: DBMeter) {
  }

  start(){
    this.subscription  = this.dbmetre.start().subscribe(
      data => console.log(data)
    );
  }

  check(){
    this.dbmetre.isListening().then(
      (isListening: boolean) => console.log(isListening)
    );
  }

  stop(){
    this.subscription.unsubscribe();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DbmetrePage');
  }

}
