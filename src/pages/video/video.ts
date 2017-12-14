import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MediaCapture, MediaFile, CaptureError, CaptureVideoOptions } from '@ionic-native/media-capture';


/**
 * Generated class for the VideoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-video',
  templateUrl: 'video.html',
})
export class VideoPage {

  //public video: MediaFile[];

  constructor( private mediaCapture: MediaCapture) {
  }

  takeVideo(){
    // let options: CaptureVideoOptions = { limit: 1 };
    // this.mediaCapture.captureVideo(options)
    // .then(
    //   (data: MediaFile[]) => {
    //     alert("Success :" + data);
    //     this.video = data;
    //   },
    //   (err: CaptureError) => alert("Error :" + err)
    // );
  }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad VideoPage');
  }

}
