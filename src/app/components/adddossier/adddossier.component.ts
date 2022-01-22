import { Component, OnInit } from '@angular/core';
import { Dossier } from 'src/app/dossier';
import { Medecin } from 'src/app/medecin';
import { Patien } from 'src/app/patien';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-adddossier',
  templateUrl: './adddossier.component.html',
  styleUrls: ['./adddossier.component.css']
})
export class AdddossierComponent implements OnInit {
  dossier = new Dossier();
  message: string = "";
  allmedecins: any;
  medecins: Patien[] = [];
  allpatiens: any;
  patiens: Medecin[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getMedecins();
    this.getPatiens();
  }
  getMedecins() {
    this.dataService.getMedecins().subscribe(res => {
      this.allmedecins = res;
      this.medecins = this.allmedecins;
    });
  }
  getPatiens() {
    this.dataService.getPatiens().subscribe(res => {
      this.allpatiens = res;
      this.patiens = this.allpatiens;
    });
  }
  insertDossier() {
    this.dataService.insertDossier(this.dossier).subscribe(res => {
      this.dossier = new Dossier();

    });

  }
}
