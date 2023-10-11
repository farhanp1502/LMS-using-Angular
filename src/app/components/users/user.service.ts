import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  updatedata(value: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }

  

  // getting users
  getUsers(): Observable<user[]> {
    return this.http.get<user[]>('http://localhost:3000/users'); // Note the User[] type
  }

  // adding users
  adduser(user:user){
    this.http.post('http://localhost:3000/users',user).subscribe();
  }

  // editing users
  currentid:number=0;
  currentdata: any;
  currentuserid:number=0;
  getuserdetails(data:user){
    this.currentdata = data;
    this.currentid = this.currentdata.id;
    this.currentuserid = this.currentdata.userid;
  }
  updateuserdata(data:user){
    this.http.put('http://localhost:3000/users/'+this.currentid,data).subscribe();
  }

  // deleting user
  currentdeleteuserid:number=0;
  deleteuserdetail:any;
  deleteuser(data:user){
    this.deleteuserdetail = data;
    this.currentdeleteuserid = this.deleteuserdetail.id;
  }
  deleteduser(){
    this.http.delete('http://localhost:3000/users/'+this.currentdeleteuserid).subscribe();
  }
}
