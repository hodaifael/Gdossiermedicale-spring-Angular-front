import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dossier } from 'src/app/dossier';
import { Medecin } from 'src/app/medecin';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-listdossier',
  templateUrl: './listdossier.component.html',
  styleUrls: ['./listdossier.component.css']
})
export class ListdossierComponent implements OnInit {
  Dossier: Dossier[] = [];
  allDossier: Dossier[] = [];
  allmedecins: any;
  medecin = new Medecin();
  medecinID: any;
  search: string = '';
  constructor(private dataService: DataService, private route: ActivatedRoute) {
    this.medecinID = this.route.snapshot.params['id'];

  }

  ngOnInit(): void {
    this.getDossier();
  }

  searchByname() { // with type info
    if (this.search != "") {
      this.Dossier = this.allDossier.filter((res: any) => {
        return res.patien.nom.match(this.search);
      });
    } else if (this.search == "") {
      this.Dossier = this.allDossier;
    }
  }

  getDossier() {
    console.log(this.medecinID)
    this.dataService.getDossier(this.medecinID).subscribe(res => {
      this.allmedecins = res;
      this.Dossier = this.allmedecins.rdv;
      this.allDossier = this.allmedecins.rdv;
      console.log(this.Dossier);
    });
  }

  delete(id: any) {
    this.dataService.deleteDossier(id).subscribe(res => {
      this.getDossier();
    });
  }
}