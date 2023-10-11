import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LeavelistService } from '../leavelist.service';
import { Router } from '@angular/router';
import { MainserviceService } from 'src/app/services/mainservice.service';
import { loginuser } from 'src/app/models/loginuser.model';

@Component({
  selector: 'app-addleavelist',
  templateUrl: './addleavelist.component.html',
  styleUrls: ['./addleavelist.component.css']
})
export class AddleavelistComponent {
  constructor(private leavelistservice:LeavelistService,private router:Router,private mainservice:MainserviceService){}

  user:loginuser={
    email:'',
    role:'',
    password:'',
    userid:'',
    name:'',
    status:'',
  
  }
  defaultstatus:string = 'pending';
  ngOnInit(){
    this.user = this.mainservice.loggeduser;
  }

  @ViewChild('leaveRequestForm') form !: NgForm;
  submitLeaveRequest(){
    this.leavelistservice.addleaves(this.form.value)

    alert('successfully registered leave')
    this.leavelistservice.getstatus(this.defaultstatus)
    this.router.navigate(['leaverequest'])
  }
}
