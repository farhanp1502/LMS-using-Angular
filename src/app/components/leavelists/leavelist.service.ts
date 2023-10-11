import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { leavelist } from 'src/app/models/leavelist.model';
import { MainserviceService } from 'src/app/services/mainservice.service';

@Injectable({
  providedIn: 'root'
})
export class LeavelistService {

  constructor(private http:HttpClient,private mainservice:MainserviceService) { }

  // getting status
  status:string='';
  getstatus(data:string){
    this.status = data;
  }
  // getting leaves
  getleaves():Observable <leavelist[]> {
   return  this.http.get<leavelist[]>('  http://localhost:3000/leavelist')
  }

  // adding leaves
  addleaves(data:leavelist){
    this.http.post(' http://localhost:3000/leavelist',data).subscribe();
  }

  // editing leave
  currentleave:any;
  currentleaveid:number = 0;
  getleavedetail(data:leavelist){
    this.currentleave = data;
    this.currentleaveid = this.currentleave.id;

  }

updateleavedata(data:leavelist){
  this.http.put('http://localhost:3000/leavelist/'+this.currentleaveid,data).subscribe();
}

// deleting leave
currentdeleteleaveid:number = 0;
deleteleavedetail:any;
deleteleave(data:leavelist){
  this.deleteleavedetail = data;
  this.currentdeleteleaveid = this.deleteleavedetail.id;
}
deletedleave(){
  console.log(this.currentdeleteleaveid);
    this.http.delete('http://localhost:3000/leavelist/'+this.currentdeleteleaveid).subscribe();
}
}
