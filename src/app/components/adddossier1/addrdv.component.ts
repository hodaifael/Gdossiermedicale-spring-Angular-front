import { Component, OnInit } from '@angular/core';
import { Medecin } from 'src/app/medecin';
import { Patien } from 'src/app/patien';
import { RDV } from 'src/app/rdv';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-addrdv',
  templateUrl: './addrdv.component.html',
  styleUrls: ['./addrdv.component.css']
})
export class AddrdvComponent implements OnInit {
  Dossier = new RDV();
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
  insertRdv() {
    this.dataService.insertRdv(this.Dossier).subscribe(res => {
      this.Dossier = new RDV();

    });

  }
}
