import { Component } from '@angular/core';
import { IonicPage, ToastController } from 'ionic-angular';
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
  private subscription: any
  private toast

  constructor(private dbmetre: DBMeter, private toastContro: ToastController) {
  }

  createToast(message, time, pos){
    this.toast = this.toastContro.create({
        message: message,
        duration: time,
        position: pos
      });

      this.toast.present();
  }

  start(){
    this.subscription  = this.dbmetre.start().subscribe(
      data => {
        console.log(data)
        this.createToast(data, 10000, 'bottom')
      }

    );
  }

  check(){
    this.dbmetre.isListening().then(
      (isListening: boolean) => this.createToast(isListening, 10000, 'bottom')
    );
  }

  stop(){
    this.subscription.unsubscribe();
    this.createToast("unsubscribed", 1000, 'bottom')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DbmetrePage');
  }

}
