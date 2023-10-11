import { AfterViewInit, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { UserService } from '../user.service';
import { user } from 'src/app/models/user.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})





export class EdituserComponent implements AfterViewInit {
  @ViewChild('updateUserForm') form!: NgForm;
  currentuser: user | undefined;
  currentuserid:number=0;
  currentstatus:string='';
  currentrole:string='';

  constructor(private router:Router,
    private userservice: UserService,
    private cdr: ChangeDetectorRef // Inject ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    this.currentuser = this.userservice.currentdata;
    this.currentuserid = this.userservice.currentuserid;
    this.currentrole = this.userservice.currentdata.role;
    this.currentstatus = this.userservice.currentdata.status;
    

    // Use setTimeout to set form values after a brief delay
    setTimeout(() => {
      this.form.setValue({
        name: this.currentuser?.name || '',
        email: this.currentuser?.email || '',
        password: this.currentuser?.password || '',
        userid:this.currentuser?.userid || '',
        role:this.currentuser?.role || '',
        status:this.currentuser?.status || '',
      });

      // Trigger change detection to avoid "ExpressionChangedAfterItHasBeenCheckedError"
      this.cdr.detectChanges();
    });
  }
  onUpdateUser(){
    this.userservice.updateuserdata(this.form.value);
    alert('successfully updated the form')
    this.router.navigate(['user'])
  }
}




