import { Component, EventEmitter, Output } from '@angular/core';
import { user } from 'src/app/models/user.model';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
// import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  constructor(private userservice:UserService,private router:Router){}
  users:user[]=[];
  searchinput:string='';
  

  // getting the user list
ngOnInit(): void {
  
 
  this.getallusers();

}
getallusers(){
  this.userservice.getUsers().subscribe((response: user[]) => {
    this.users = response;
 

  });
}

  
  
  // adding user
  adduserclicked:boolean = false;
  adduserlink(){
    if(this.adduserclicked = true){
    this.router.navigate(['adduser'])
  }
}

// editing user
userclicked:boolean=false;
onedituser(data:user){
  this.userservice.getuserdetails(data);
  if(this.userclicked = true){
    this.router.navigate(['edituser'])
  }
}

// deleting user
ondelete(user:user){
  this.userservice.deleteuser(user);
  alert('user deleted');
  this.userservice.deleteduser();
  // location.reload();
  this.ngOnInit();
}

}
