import { Component, ViewChild } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { user } from 'src/app/models/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent {
  userid:number=0;
  role:string = "user";
  status:string = "logged out";
  constructor(private userservice:UserService,private router: Router){

    this.userid = Math.floor(Math.random() * 1000) + 1;
  }
  @ViewChild('userloginform')form!:NgForm;
onlogin(form:any){
  this.userservice.adduser(form.value)
  alert('user successfully registered')
  form.reset();
}
exitform(){
  this.router.navigate(['user'])
}
}
