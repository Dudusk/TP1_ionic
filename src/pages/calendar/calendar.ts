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
   eventRange = {
     startDate: new Date(),
     endDate: new Date()
   };
   public calendarName: string;
   public listesCalendar = [];
   public listesEvent = [];

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
    if(this.appoiment.name != "" && this.appoiment.endDate != null && this.appoiment.startDate != null){
      this.calendar.createCalendar(this.calendarName).then(
        (msg) => { 
          console.log(msg + " calendrier créé "); 
          this.createToast("Calendrier créé : " + msg + " nom : " + this.calendarName, 3000, 'bottom');
        },
        (err) => { 
          console.log(err + " calendrier failed"); 
          this.createToast("Calendrier failed : " + err, 5000, 'bottom');        
        }
      );
    } else {
      this.createToast("Création failed : nom ou dates non entrées.", 5000, 'bottom');     
    }
    
  }
  //titre?: string, location?: string, note?: string, start?: Date, end?: Date
  createEvent(){
    this.calendar.requestWritePermission()
    this.calendar.createEvent(this.appoiment.name, this.appoiment.number, this.appoiment.info,new Date( this.appoiment.startDate),new Date(this.appoiment.endDate)).then(
      (msg) => { 
        console.log(msg + " event créé"); 
        this.createToast("event créé : " + msg, 3000, 'bottom');
        this.calendar.openCalendar(this.appoiment.startDate);
      },
      (err) => { 
        console.log(err + " event failed"); 
        this.createToast("event failed : " + err, 5000, 'bottom');        
      }
    );
  }

  listeCalendar(){
    this.calendar.listCalendars().then(
      (result) => {
        for(let i = 0 ; i < result.length ; i++){
          this.listesCalendar[i] = result[i].displayname;
        }
        this.createToast( "Liste calendrier récupérée avec succès.", 1000, 'bottom');
      },
      (err) => {
        this.createToast( err, 10000, 'bottom');
      }
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalendarPage');
  }

}
