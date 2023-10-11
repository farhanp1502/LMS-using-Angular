import { AfterViewInit, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { leavelist } from 'src/app/models/leavelist.model';
import { LeavelistService } from '../leavelist.service';
import { loginuser } from 'src/app/models/loginuser.model';
import { MainserviceService } from 'src/app/services/mainservice.service';

@Component({
  selector: 'app-editleavelist',
  templateUrl: './editleavelist.component.html',
  styleUrls: ['./editleavelist.component.css']
})
export class EditleavelistComponent implements AfterViewInit{

  status:string='';
  userid:string | undefined;
  name:string='';
  @ViewChild('editLeaveForm')form!:NgForm;
  currentleave: leavelist | undefined;

  constructor(private router:Router,
    private mainservice:MainserviceService,
    private leavelistservice:LeavelistService,
    private cdr: ChangeDetectorRef // Inject ChangeDetectorRef
  ) {}

 ngOnInit(){
  
  }
  ngAfterViewInit(): void {

    this.currentleave = this.leavelistservice.currentleave;
    this.leavelistservice.status = this.status;
    this.userid = this.mainservice.loggeduser.userid;

    // Use setTimeout to set form values after a brief delay
    setTimeout(() => {
      this.form.setValue({
        fromdate: this.currentleave?.fromdate || '',
        todate:this.currentleave?.todate || '',
        reason: this.currentleave?.reason || '',
        userid: this.currentleave?.userid || '',
        status:this.currentleave?.status || '',
        name:this.currentleave?.name || '',
      });

      // Trigger change detection to avoid "ExpressionChangedAfterItHasBeenCheckedError"
      this.cdr.detectChanges();
    });
  }


  editleave(){
    this.leavelistservice.updateleavedata(this.form.value)
    alert('leave updated successfully');
    this.router.navigate(['leaverequest'])
  }
}
