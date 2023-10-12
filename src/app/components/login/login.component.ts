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
  constructor(private mainservice: MainserviceService, private router: Router) { }
  @ViewChild('loginForm') loginForm!: NgForm;
  successfulloggedin: boolean = false; 
  isauth:boolean = false;

  registeredusers: user[] = [];
  loginuserinfo: user = {
    email: '',
    role: '',
    password: '',
    userid: '',
    name: '',
    status: '',
  }
  loginuser: loginuser = {
    email: '',
    role: '',
    password: '',
    userid: '',
    name: '',
    status: '',
  };

  ngAfterViewInit() {
    this.mainservice.getusersforlogin().subscribe((response) => {
      this.registeredusers = response;
      // You can set successfulloggedin to true if a user is already logged in
      this.registeredusers.find((res) => {
        if (res.status === 'logged in') {
          this.successfulloggedin = true;
        }
      });
    });
    this.mainservice.getusersfromdata(this.loginuserinfo);
    
  }

  // onSubmit() {
  //   this.loginuser = this.loginForm.value;
  //   this.loginuserfunction(this.loginuser);
  //   if(this.successfulloggedin){
  //     // this.isauth = true;
  //     // this.mainservice.getauthentication(this.isauth);
  //     this.mainservice.updateuserstatuslogin(this.loginuser.id, this.loginuser);

  //     alert('login successful');
  //     this.mainservice.getloggeduser(this.loginuser);
  //     this.router.navigate(['/dashboard']);

  //   }
  //   else{
  //     alert('login failed')
  //     this.loginForm.reset();
  //   }
  // }

  // loginuserfunction(loginuser: loginuser): boolean {
  //   for (const user of this.registeredusers) {
  //     if (user.email === loginuser.email && user.password === loginuser.password && user.role === loginuser.role) {
  //       loginuser.userid = user.userid;
  //       loginuser.id = user.id;
  //       loginuser.name = user.name;
  //       loginuser.status = 'logged in';
  //       this.successfulloggedin = true;
  //       return this.successfulloggedin;
  //     }
  //   }
  //   return false; 
  // }
  
  onSubmit() {
    this.loginuser = this.loginForm.value;
    const loginSuccessful = this.loginuserfunction(this.loginuser);
  
    if (loginSuccessful) {
      this.mainservice.updateuserstatuslogin(this.loginuser.id, this.loginuser);
      alert('Login successful');
      this.mainservice.getloggeduser(this.loginuser);
      this.router.navigate(['/dashboard']);
    } else {
      alert('Login failed'); // Display a login failed message
      this.loginForm.reset();
    }
  }
  
  loginuserfunction(loginuser: loginuser): boolean {
    for (const user of this.registeredusers) {
      if (user.email === loginuser.email && user.password === loginuser.password && user.role === loginuser.role) {
        loginuser.userid = user.userid;
        loginuser.id = user.id;
        loginuser.name = user.name;
        loginuser.status = 'logged in';
        this.isauth = true;
      this.mainservice.getauthentication(this.isauth);
        this.successfulloggedin = true;
        return true; // Return true when login is successful
      }
    }
    return false; // Return false when login fails
  }
  
}
