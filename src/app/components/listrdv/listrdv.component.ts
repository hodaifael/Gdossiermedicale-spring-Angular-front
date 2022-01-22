import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Medecin } from 'src/app/medecin';
import { RDV } from 'src/app/rdv';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-listrdv',
  templateUrl: './listrdv.component.html',
  styleUrls: ['./listrdv.component.css']
})
export class ListrdvComponent implements OnInit {
  Rdvs: RDV[] = [];
  allmedecins: any;
  medecin = new Medecin();
  medecinID: any;
  constructor(private dataService: DataService, private route: ActivatedRoute) {
    this.medecinID = this.route.snapshot.params['id'];

  }

  ngOnInit(): void {
    this.getRdvs();
  }

  getRdvs() {
    console.log(this.medecinID)
    this.dataService.getRdvs(this.medecinID).subscribe(res => {
      this.allmedecins = res;
      this.Rdvs = this.allmedecins.rdv;
      console.log(this.Rdvs);
    });
  }

  delete(id: any) {
    this.dataService.deleteRdv(id).subscribe(res => {
      this.getRdvs();
    });
  }
}