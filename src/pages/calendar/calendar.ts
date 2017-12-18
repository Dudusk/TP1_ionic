import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

  constructor(private calendar: Calendar) {
  }

  createCalendar(){
    this.calendar.createCalendar('MyCalendar').then(
      (msg) => { alert(msg + "calendrier créé" ); },
      (err) => { alert(err + "calendrier failed"); }
    );
  }

  createEvent(titre?: string, location?: string, note?: string, start?: Date, end?: Date){
    this.calendar.createEvent(titre, location, note, start, end).then(
      (msg) => { alert(msg + "Event créé"); },
      (err) => { alert(err + "Event fail"); }
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalendarPage');
  }

}
