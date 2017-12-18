import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

/**
 * Generated class for the BarcodeScannerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-barcode-scanner',
  templateUrl: 'barcode-scanner.html',
})
export class BarcodeScannerPage {

  private scannerDataText: any;
  private scannerDataForm: any;
  
  constructor(public barcode: BarcodeScanner) {
  }

  scanner(){
    this.barcode.scan().then((barcodeData) => {
      // Success! Barcode data is here
      this.scannerDataText = barcodeData.text;
      this.scannerDataForm = barcodeData.format;
    }, (err) => {
         // An error occurred
    });
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad BarcodeScannerPage');
  }

}
