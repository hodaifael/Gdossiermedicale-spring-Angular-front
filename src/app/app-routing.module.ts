import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AddMedecinComponent } from './components/add-medecin/add-medecin.component';
import { AddPatienComponent } from './components/add-patien/add-patien.component';
import { AdddossierComponent } from './components/adddossier/adddossier.component';
import { ListdossierComponent } from './components/listdossier/listdossier.component';
import { ListmedecinComponent } from './components/listmedecin/listmedecin.component';
import { ListpatienComponent } from './components/listpatien/listpatien.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: 'addpatien', component: AddPatienComponent, canActivate: [AuthGuard] },
  { path: 'addmedecin', component: AddMedecinComponent, canActivate: [AuthGuard] },
  { path: 'adddossier', component: AdddossierComponent, canActivate: [AuthGuard] },
  { path: 'listpatien', component: ListpatienComponent, canActivate: [AuthGuard] },
  { path: 'listmedecin', component: ListmedecinComponent, canActivate: [AuthGuard] },
  { path: 'listDossier/:id', component: ListdossierComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent },
  { path: '', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
