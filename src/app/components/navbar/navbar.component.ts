import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { loginuser } from 'src/app/models/loginuser.model';
import { user } from 'src/app/models/user.model';
import { MainserviceService } from 'src/app/services/mainservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private mainservice:MainserviceService,private router:Router){}
  users: user[] = [];
  loggeduserforuse:loginuser={
    email:'',
    role:'',
    password:'',
    userid:'',
    name:'',
    status:'',
  
  }

  logoutuser:loginuser={
    email:'',
    role:'',
    password:'',
    userid:'',
    name:'',
    status:'',
  
  }
  // name:any;
  // role:any;
  ngAfterViewInit(){
    this.logoutuser.name = this.mainservice.loggeduser.name;
    this.logoutuser.role = this.mainservice.loggeduser.role;
    this.logoutuser = this.mainservice.loggeduser;
    this.logoutuser.status = 'logged out';
    // this.mainservice.getusersfromdata();
    // console.log(this.logoutuser);
  }
  logout(){
    this.mainservice.updateuserstatuslogout(this.logoutuser.id,this.logoutuser)
    this.router.navigate(['/home'])
  }
}
