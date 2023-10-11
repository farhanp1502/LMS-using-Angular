import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HolidaysService } from '../holidays.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addholidays',
  templateUrl: './addholidays.component.html',
  styleUrls: ['./addholidays.component.css']
})
export class AddholidaysComponent {
  constructor(private holidayservice:HolidaysService,private router:Router){}
  @ViewChild('addHolidaysForm') form!:NgForm;
  addholiday(){
    this.holidayservice.addholidays(this.form.value);
    alert('holiday registered successfully');
    this.router.navigate(['holidays']);
  }
}
