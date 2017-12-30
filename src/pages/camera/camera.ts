import { Component } from '@angular/core';
import { IonicPage, ToastController, AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { SocialSharing } from '@ionic-native/social-sharing';

/**
 * Generated class for the CameraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})
export class CameraPage {

  public base64Image: string;
  public base64ImageImported: string;
  public toast: any;

  public gne;

  public email = {
    receiver : "",
    sujet : ""
  }
  public message: string;

  constructor(private camera: Camera, private toastContro: ToastController, private socialSharing: SocialSharing, private alertCtrl: AlertController ) {
  }

  presentConfirm(titre: string, msg: string, params: any) {
    
  }

  /**
   * Toast
   * @param message 
   * @param time 
   * @param pos 
   */
  createToast(message, time, pos){
    this.toast = this.toastContro.create({
      message: message,
      duration: time,
      position: pos
    });

    this.toast.present();
  }
  /**
   * Social Sharing
   */
  shareEmail() {
    this.socialSharing.canShareViaEmail().then(() => {
      this.socialSharing.shareViaEmail(this.message, this.email.sujet, [this.email.receiver], [], null, this.base64Image).then(() => {
      }).catch(() => {
        console.error("Marche pas le mail");
      });
    }).catch(() => {
    });
  }

  shareSms(){
    let alert = this.alertCtrl.create({
      title: 'Numéro de téléphone',
      message: 'A qui voulez-vous envoyer votre photo ?',
      inputs: [
        {
          name: 'numero',
          placeholder: 'Numero'
        },
        {
          name: 'message',
          placeholder: 'Votre message',
          type: 'text'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Envoyer',
          handler: data => {
            if(data.numero && data.message){
              this.socialSharing.shareViaSMS(data.message + this.base64Image, data.numero).then(() => {
                this.createToast("Réussis !", 3000, "bottom");
              }).catch(() => {
                console.error("Erreur d'envoie");
              });
            }
          }
        }
      ]
    });
    alert.present();
  }

  shareInsta() {
    this.socialSharing.shareViaInstagram('Message', this.base64Image).then(() => {
      console.log("success");
    }).catch(() => {
      console.error("Marche pas le Insta");
    });
  }

  shareFb() {
      this.socialSharing.shareViaFacebookWithPasteMessageHint(this.message, this.base64Image, null, this.message).then(() => {
        console.log("success");
      }).catch(() => {
        console.error("Marche pas le Fb");
      });
  }

  /**
   * Camera
   */
  screen(){
    this.camera.getPicture({
        destinationType: this.camera.DestinationType.DATA_URL,
        targetWidth: 1000,
        targetHeight: 1000
    }).then((imageData) => {
        this.createToast("Image prise avec succès !", 3000, 'bottom');
        this.base64Image = "data:image/jpeg;base64," + imageData;
    }, (err) => {
        console.log(err);
    });
  }

  screenAndSave(){
    this.camera.getPicture({
        destinationType: this.camera.DestinationType.DATA_URL,
        saveToPhotoAlbum: true,
        targetWidth: 1000,
        targetHeight: 1000
    }).then((imageData) => {
        this.createToast("Image prise et enregistrée avec succès !", 3000, 'bottom');
        this.base64Image = "data:image/jpeg;base64," + imageData;
    }, (err) => {
        console.log(err);
    });
  }

  importerImage(){
    const options: CameraOptions = {
      quality: 100,
      allowEdit : true,
      sourceType: this.camera.DestinationType.DATA_URL,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      this.createToast("Image importée avec succès !", 3000, 'bottom');
      this.base64ImageImported = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      console.log(err);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CameraPage');
  }

}
