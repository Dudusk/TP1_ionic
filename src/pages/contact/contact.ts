import { Component } from '@angular/core';
import { IonicPage, ToastController } from 'ionic-angular';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  private newContact = {
    nom: "",
    prenom: "",
    tel: ""
  }
  private toast;
  public allContacts: any

  constructor(private contacts: Contacts, private toastContro: ToastController) {
  }

  createToast(message, time, pos){
    this.toast = this.toastContro.create({
        message: message,
        duration: time,
        position: pos
      });

      this.toast.present();
  }

  createContact(){
    let contact: Contact = this.contacts.create();
    
    contact.name = new ContactName(null, this.newContact.nom, this.newContact.prenom);
    contact.phoneNumbers = [new ContactField('mobile', this.newContact.tel)];
    contact.save().then(
      () => {
        console.log('Contact saved!', contact)
        this.createToast("Contact créé : " + contact, 5000, 'bottom')
      },
      (error) => {
        this.createToast("Contact non créé : " + error, 10000, 'bottom')
        console.log(error)
      }
    );
  }

  listContact(){
    this.contacts.find(['displayName', 'name', 'phoneNumbers', 'emails'], {filter: "", multiple: true})
    .then(data => {
      this.allContacts = data
      this.createToast("data : " + data, 100000, 'bottom')
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

}
