import { ReturnStatement } from '@angular/compiler';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { loginuser } from 'src/app/models/loginuser.model';
import { user } from 'src/app/models/user.model';
import { MainserviceService } from 'src/app/services/mainservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private mainservice:MainserviceService,private router:Router){}
  @ViewChild('loginForm') loginForm!:NgForm;

  registeredusers: user[] = [];
  loginuserinfo:user={
    email: '',
    role: '',
    password: '',
    userid: '',
    name:'',
    status:'',
    
  }
  loginuser: loginuser = {
    email: '',
    role: '',
    password: '',
    userid: '',
    name:'',
    status:'',
    
  };



  ngOnInit() {
    this.mainservice.getusersforlogin().subscribe((response) => {
      this.registeredusers = response;
      this.registeredusers.find((res)=>{
       res.status === 'logged in'
      })
    });
    this.mainservice.getusersfromdata(this.loginuserinfo);
  }

  onSubmit() {
    this.loginuser = this.loginForm.value;
    this.loginuserfunction(this.loginuser);
    this.mainservice.updateuserstatuslogin(this.loginuser.id,this.loginuser)
    alert('login successful');
    this.mainservice.getloggeduser(this.loginuser);
    this.router.navigate(['/dashboard']);

  }

  loginuserfunction(loginuser: loginuser) {
    for (const user of this.registeredusers) {
      if (user.email === loginuser.email && user.password === loginuser.password && user.role === loginuser.role) {
        loginuser.userid = user.userid;
        loginuser.id = user.id;
        loginuser.name = user.name;
        loginuser.status = 'logged in';

        return; 
      }
    
    }
  }

}
