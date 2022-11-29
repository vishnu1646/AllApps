import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PassengerdataComponent } from './passengerdata/passengerdata.component';
import { USdataComponent } from './usdata/usdata.component';

const myRoute:Routes=[
  {
    path:"",
    component:NavbarComponent
  },
  {
    path:"passenger",
    component:PassengerdataComponent
  },
  {
    path:"us",
    component:USdataComponent
  }

]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PassengerdataComponent,
    USdataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
