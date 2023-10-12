import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/users/user/user.component';
import { AdduserComponent } from './components/users/adduser/adduser.component';
import { EdituserComponent } from './components/users/edituser/edituser.component';
import { ViewholidaysComponent } from './components/holidays/viewholidays/viewholidays.component';
import { EditholidaysComponent } from './components/holidays/editholidays/editholidays.component';
import { AddholidaysComponent } from './components/holidays/addholidays/addholidays.component';
import { LeavelistComponent } from './components/leavelists/leavelist/leavelist.component';
import { AddleavelistComponent } from './components/leavelists/addleavelist/addleavelist.component';
import { EditleavelistComponent } from './components/leavelists/editleavelist/editleavelist.component';
import { LeaveupdateComponent } from './components/leaveupdate/leaveupdate.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'home/login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard]},
  {path:'user' , component:UserComponent},
  {path:'adduser',component:AdduserComponent},
  {path:'edituser',component:EdituserComponent},
  {path:'holidays',component:ViewholidaysComponent},
  {path:'addholiday',component:AddholidaysComponent},
  {path:'editholiday',component:EditholidaysComponent},
  {path:'leaverequest',component:LeavelistComponent},
  {path:'addleavelist',component:AddleavelistComponent},
  {path:'editleavelist',component:EditleavelistComponent},
  {path:'leaveupdate',component:LeaveupdateComponent},
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
