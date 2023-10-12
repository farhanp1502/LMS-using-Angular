import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from '../models/user.model';
import { loginuser } from '../models/loginuser.model';

@Injectable({
  providedIn: 'root'
})
export class MainserviceService {

  constructor(private http:HttpClient) { }
  isauth:boolean = false;
  users: user[]=[];
  loggeduser:loginuser={
    email: '',
    role: '',
    password: '',
    userid: '',
    name:'',
    status:''
  }

  
  loggeduserforuse:user={
    email: '',
    role: '',
    password: '',
    userid: '',
    name:'',
    status:''
  }

  getusersforlogin(){
    return this.http.get<user[]>(' http://localhost:3000/users')
  }

  getloggeduser(data:loginuser){
    this.loggeduser = data;
  }

  updateuserstatuslogin(id :any,data:loginuser){
    this.http.put('http://localhost:3000/users/'+id,data).subscribe();
  }

  updateuserstatuslogout(id:any,data:loginuser){
    this.http.put('http://localhost:3000/users/'+id,data).subscribe();
  }

  getusersfromdata(data:user){
    this.loggeduserforuse = data;
  //  this. getusersforlogin().subscribe((response)=>{
  //     this.users = response;
  //   })
  //   console.log(this.users);
  //   this.users.find((user)=>{
  //     if(user.status === 'logged in'){
  //       console.log(user);
  //     }
  //   })
  }

  getauthentication(data:boolean){
    this.isauth = data;
  }
  isauthentication(){
    return this.isauth;
  }
}
