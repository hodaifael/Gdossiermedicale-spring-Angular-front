import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AddMedecinComponent } from './components/add-medecin/add-medecin.component';
import { AddPatienComponent } from './components/add-patien/add-patien.component';
import { ListmedecinComponent } from './components/listmedecin/listmedecin.component';
import { ListpatienComponent } from './components/listpatien/listpatien.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';
import { AdddossierComponent } from './components/adddossier/adddossier.component';
import { ListdossierComponent } from './components/listdossier/listdossier.component';

@NgModule({
  declarations: [
    AppComponent,
    AddMedecinComponent,
    AddPatienComponent,
    NavbarComponent,
    ListpatienComponent,
    ListmedecinComponent,
    RegisterComponent,
    LoginComponent,
    AdddossierComponent,
    ListdossierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
