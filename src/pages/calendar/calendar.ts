import { Component } from '@angular/core';
import { IonicPage, ToastController } from 'ionic-angular';
import { Calendar } from '@ionic-native/calendar';


/**
 * Generated class for the CalendarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
})
export class CalendarPage {

  public toast: any;
  appoiment = {
    name: "",
    number: "",
    startDate: new Date(),
    endDate: new Date(),
    info:""
   };

  constructor(private calendar: Calendar, private toastContro: ToastController) {
  }

  createToast(message, time, pos){
    this.toast = this.toastContro.create({
        message: message,
        duration: time,
        position: pos
      });

      this.toast.present();
  }

  createCalendar(){
    this.calendar.createCalendar('MyCalendar').then(
      (msg) => { 
        console.log(msg + " calendrier créé" ); 
        this.createToast("Calendrier créé " + msg, 3000, 'bottom');
      },
      (err) => { 
        console.log(err + " calendrier failed"); 
        this.createToast("Calendrier failed " + err, 3000, 'bottom');        
      }
    );
  }
  //titre?: string, location?: string, note?: string, start?: Date, end?: Date
  createEvent(){

    this.calendar.requestWritePermission()
    this.calendar.createEvent(this.appoiment.name, this.appoiment.number, this.appoiment.info,new Date( this.appoiment.startDate),new Date(this.appoiment.endDate)).then(
      (msg) => { 
        console.log(msg + " event créé" ); 
        this.createToast("event créé " + msg, 3000, 'bottom');
      },
      (err) => { 
        console.log(err + " event failed"); 
        this.createToast("event failed " + err, 3000, 'bottom');        
      }
    );

    
    // this.calendar.createEvent(titre, location, note, start, end).then(
    //   (msg) => { 
    //     console.log(msg + "Event créé"); 
    //     this.createToast("event failed" + msg, 3000, 'bottom');        
    //   },
    //   (err) => { 
    //     console.log(err + "Event fail"); 
    //     this.createToast("event failed" + err, 3000, 'bottom');        
    //   }
    // );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalendarPage');
  }

}
