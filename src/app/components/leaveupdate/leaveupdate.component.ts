import { Component } from '@angular/core';
import { LeavelistService } from '../leavelists/leavelist.service';
import { leavelist } from 'src/app/models/leavelist.model';
import { HttpClient } from '@angular/common/http';
import { MainserviceService } from 'src/app/services/mainservice.service';
import { loginuser } from 'src/app/models/loginuser.model';

@Component({
  selector: 'app-leaveupdate',
  templateUrl: './leaveupdate.component.html',
  styleUrls: ['./leaveupdate.component.css']
})
export class LeaveupdateComponent {

  constructor(private leaveslistservice:LeavelistService,private http:HttpClient,private mainservice:MainserviceService){}

    // getting leaves
    
    leaves:leavelist[]=[];
    ngOnInit(){
      this.leaveslistservice.getleaves().subscribe((response)=>{
        this.leaves = response;
      })
      

    }

    onapprove(data:leavelist){
      data.status = 'approved';
      this.http.put('http://localhost:3000/leavelist/'+data.id,data).subscribe();

    }

    onreject(data:leavelist){
      data.status = 'rejected';
      this.http.put('http://localhost:3000/leavelist/'+data.id,data).subscribe();
    }

}
