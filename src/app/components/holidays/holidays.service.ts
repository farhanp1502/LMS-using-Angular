import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { holiday } from 'src/app/models/holiday.model';
import { MainserviceService } from 'src/app/services/mainservice.service';

@Injectable({
  providedIn: 'root'
})
export class HolidaysService {

  constructor(private http:HttpClient,private mainservice : MainserviceService) { }

  // getting holidays
  getholidays():Observable<holiday[]>{
   return this.http.get<holiday[]>('http://localhost:3000/holidays')
  }

  // posting holidays
  addholidays(data:holiday){
    this.http.post('http://localhost:3000/holidays',data).subscribe();
  }


// editing holidays
currentholidayid:number = 0;
currentholiday:any;

getholidaydetails(data:holiday){
  this.currentholiday = data;
  this.currentholidayid = this.currentholiday.id;
}

updateholidaydata(data:holiday){
  this.http.put('http://localhost:3000/holidays/'+this.currentholidayid,data).subscribe();
}


// deleting holidays
currentdeleteholidayid:number=0;
  deleteholidaydetail:any;
deleteholiday(data:holiday){
this.deleteholidaydetail = data;
this.currentdeleteholidayid = this.deleteholidaydetail.id;
}
deletedholiday(){
  this.http.delete('http://localhost:3000/holidays/'+this.currentdeleteholidayid).subscribe();
}

// from main service to get logged service

getuserfromloggeduser(){
 console.log( this.mainservice.loggeduser);
}
}
