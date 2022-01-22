import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpclient: HttpClient) { }

  //medecine
  insertMedecin(data: any) {
    return this.httpclient.post('http://localhost:8085/api/medecin/', data);
  }
  getMedecins() {
    return this.httpclient.get('http://localhost:8085/api/medecin/');
  }

  deleteMedecin(id: any) {
    return this.httpclient.delete('http://localhost:8085/api/medecin/' + id);
  }



  //Patien
  insertPatien(data: any) {
    return this.httpclient.post('http://localhost:8085/api/patien/', data);
  }

  getPatiens() {
    return this.httpclient.get('http://localhost:8085/api/patien/');
  }

  deletePatien(id: any) {
    return this.httpclient.delete('http://localhost:8085/api/patien/' + id);
  }



  //rdv
  insertDossier(data: any) {
    return this.httpclient.post('http://localhost:8085/api/dossier/', data);
  }
  getDossier(id: any) {
    return this.httpclient.get('http://localhost:8085/api/medecin/' + id);
  }

  deleteDossier(id: any) {
    return this.httpclient.delete('http://localhost:8085/api/dossier/' + id);
  }



  //user

  insertAdmin(data: any) {
    return this.httpclient.post('http://localhost:8085/api/secretaire/', data);
  }
  getAdmin(data: any) {
    return this.httpclient.post('http://localhost:8085/api/secretaire/login', data);
  }







}
