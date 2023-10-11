import { Component } from '@angular/core';
import { HolidaysService } from '../holidays.service';
import { Observable } from 'rxjs';
import { holiday } from 'src/app/models/holiday.model';
import { Router } from '@angular/router';
import { MainserviceService } from 'src/app/services/mainservice.service';
import { loginuser } from 'src/app/models/loginuser.model';

@Component({
  selector: 'app-viewholidays',
  templateUrl: './viewholidays.component.html',
  styleUrls: ['./viewholidays.component.css']
})
export class ViewholidaysComponent {

  constructor(private Holidayservice:HolidaysService,private router:Router,private mainservice:MainserviceService){}

  user:loginuser={
    email: '',
    role: '',
    password: '',
    userid: '',
    name:'',
    status:'',
    
  }
  // viewing holidays
  holidays:holiday[]=[];
  ngOnInit(): void {
    this.Holidayservice.getholidays().subscribe((response)=>{
      this.holidays = response;
    })
    this.user = this.mainservice.loggeduser;
  }
  
  //  adding holidays
  clicked:boolean=false;
  addholiday(){
    if(this.clicked = true){
      this.router.navigate(['addholiday'])
    }
  }
  
  // filter functionality
  sortByDate() {
    this.holidays.sort((a, b) => {
      const dateA = new Date(a.Date);
      const dateB = new Date(b.Date);
  
      return dateA.getTime() - dateB.getTime(); 
    });
  }
  filteredHolidays: holiday[] = [];
  filterclicked: boolean = false;
  filterHolidays() {
    this.filterclicked = true;
    this.sortByDate();
    this.filteredHolidays = this.holidays;
    }

    
    
  
  // editing holidays
  oneditholiday(data:holiday){
    this.Holidayservice.getholidaydetails(data);
    if(this.clicked = true){
      this.router.navigate(['editholiday'])
    }
  }

  // delete holidays
  ondeleteholiday(holiday:holiday){
  this.Holidayservice.deleteholiday(holiday);
  alert('holiday deleted');
  this.Holidayservice.deletedholiday();
  // location.reload();
  this.ngOnInit();
  }
}
