import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Shake } from '@ionic-native/shake';

/**
 * Generated class for the ShakePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shake',
  templateUrl: 'shake.html',
})
export class ShakePage {

  public watch;

  constructor(private shake: Shake) {
  }

  startWatch(){
    this.watch = this.shake.startWatch(60).subscribe(() => {
      console.log(this.watch);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShakePage');
  }

  stopWatch(){
    this.watch.unsubscribe();
  }

}
