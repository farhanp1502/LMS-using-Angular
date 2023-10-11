import { Component } from '@angular/core';
import { leavelist } from 'src/app/models/leavelist.model';
import { LeavelistService } from '../leavelist.service';
import { Router } from '@angular/router';
import { MainserviceService } from 'src/app/services/mainservice.service';
import { loginuser } from 'src/app/models/loginuser.model';

@Component({
  selector: 'app-leavelist',
  templateUrl: './leavelist.component.html',
  styleUrls: ['./leavelist.component.css']
})
export class LeavelistComponent {
  constructor(private leavelistservice:LeavelistService,private router:Router,private mainservice:MainserviceService){
    this.user = this.mainservice.loggeduser;
  }

  // defaultstatus:string = 'pending';

  filteredleaves:leavelist[]=[];
  leavelist:leavelist[]=[];
  user:loginuser={
    email:'',
    role:'',
    password:'',
    userid:'',
    name:'',
    status:'',
  }
  ngOnInit():void{
    this.leavelistservice.getleaves().subscribe((response) => {
      // Assuming that response is an array of leave objects
      this.leavelist = response;
  
      // Filter leaves based on the user's id
      this.filteredleaves = this.leavelist.filter((x) => x.userid === this.user.userid);
 
    });
  }
 

  // adding leave
  clicked:boolean = false;
  addLeave(){
    this.clicked = true;
    this.router.navigate(['addleavelist'])
  }

  // editing leave
  
  editLeave(data:leavelist){
    this.leavelistservice.getleavedetail(data);
    if(this.clicked = true){

      this.router.navigate(['editleavelist'])
    }
  }

  // deleting leave
  deleteLeave(data:leavelist){
    this.leavelistservice.deleteleave(data);
    alert('leave will be deleted');
      this.leavelistservice.deletedleave();
    // location.reload();
    this.ngOnInit();
  }
}
