import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUsersComponent } from './add-users/add-users.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { DataService } from './data.service';
import {ReactiveFormsModule} from '@angular/forms';
import {EditUsersComponent } from './edit-users/edit-users.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';


const rotes:Routes=[
  {path:"",redirectTo:'/list-users',pathMatch:'full'},
  {path:"list-users",component:AddUsersComponent},
  {path:"add-users",component:AddUsersComponent},
  {path:"edit-users",component:EditUsersComponent},
  {path:"**",redirectTo:'/add-users',pathMatch:'full'},
]

@NgModule({
  declarations: [
    AppComponent,
    AddUsersComponent,
    ListUsersComponent,
    NavbarComponent,
    EditUsersComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(rotes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
