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

  private text: string;
  private format: any;
  formats: Array<{format: string}>;

  constructor(public barcode: BarcodeScanner) {
  }

  scanner(){
    this.barcode.scan().then((barcodeData) => {
      // Success! Barcode data is here
      this.text = barcodeData.text;
      this.format = barcodeData.format;
    }, (err) => {
         // An error occurred
    });
  }
  
  ionViewDidLoad() {
    this.formats = [
      {format: "QR_CODE"},
      {format: "DATA_MATRIX"},
      {format: "UPC_E"},
      {format: "UPC_A"},
      {format: "EAN_8"},
      {format: "EAN_13"},
      {format: "CODE_128"},
      {format: "CODE_39"},
      {format: "CODE_93"},
      {format: "CODABAR"}
    ];
    console.log('ionViewDidLoad BarcodeScannerPage');
  }

}
