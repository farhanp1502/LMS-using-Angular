import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/users/user/user.component';
import { AdduserComponent } from './components/users/adduser/adduser.component';
import { EdituserComponent } from './components/users/edituser/edituser.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddholidaysComponent } from './components/holidays/addholidays/addholidays.component';
import { ViewholidaysComponent } from './components/holidays/viewholidays/viewholidays.component';
import { EditholidaysComponent } from './components/holidays/editholidays/editholidays.component';
import { LeavelistComponent } from './components/leavelists/leavelist/leavelist.component';
import { AddleavelistComponent } from './components/leavelists/addleavelist/addleavelist.component';
import { EditleavelistComponent } from './components/leavelists/editleavelist/editleavelist.component';
import { LeaveupdateComponent } from './components/leaveupdate/leaveupdate.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AdduserComponent,
    EdituserComponent,
    AddholidaysComponent,
    ViewholidaysComponent,
    EditholidaysComponent,
    LeavelistComponent,
    AddleavelistComponent,
    EditleavelistComponent,
    LeaveupdateComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    NavbarComponent,
    FooterComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
