import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-listmedecin',
  templateUrl: './listmedecin.component.html',
  styleUrls: ['./listmedecin.component.css']
})
export class ListmedecinComponent implements OnInit {
  medecins: any;
  allmedecins: any;
  search: string = '';
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getMedecins();
  }

  searchByname() { // with type info
    if (this.search != "") {
      this.medecins = this.allmedecins.filter((res: any) => {
        return res.nom.match(this.search);
      });
    } else if (this.search == "") {
      this.medecins = this.allmedecins;
    }

  }
  getMedecins() {
    this.dataService.getMedecins().subscribe(res => {
      this.allmedecins = res;
      this.medecins = res;
      console.log(res);
    });
  }

  delete(id: any) {
    this.dataService.deleteMedecin(id).subscribe(res => {
      this.getMedecins();
    });
  }
}
