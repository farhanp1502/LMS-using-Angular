import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { holiday } from 'src/app/models/holiday.model';
import { HolidaysService } from '../holidays.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editholidays',
  templateUrl: './editholidays.component.html',
  styleUrls: ['./editholidays.component.css']
})
export class EditholidaysComponent {

  @ViewChild('editHolidaysForm')form!:NgForm;
  currentholiday: holiday | undefined;

  constructor(private router:Router,
    private holidayservice:HolidaysService,
    private cdr: ChangeDetectorRef // Inject ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {

    this.currentholiday = this.holidayservice.currentholiday;


    // Use setTimeout to set form values after a brief delay
    setTimeout(() => {
      this.form.setValue({
        Date: this.currentholiday?.Date || '',
        reason: this.currentholiday?.reason || '',
      });

      // Trigger change detection to avoid "ExpressionChangedAfterItHasBeenCheckedError"
      this.cdr.detectChanges();
    });
  }


  editHoliday(){
    this.holidayservice.updateholidaydata(this.form.value)
    // console.log(this.form.value);
    alert('holiday updated successfully');
    this.router.navigate(['holidays'])
  }
}
