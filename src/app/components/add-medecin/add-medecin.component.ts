import { Component, OnInit } from '@angular/core';
import { Medecin } from 'src/app/medecin';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-add-medecin',
  templateUrl: './add-medecin.component.html',
  styleUrls: ['./add-medecin.component.css']
})
export class AddMedecinComponent implements OnInit {
  medecin = new Medecin();
  message: string = "";

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  insertMedecin() {
    this.dataService.insertMedecin(this.medecin).subscribe(res => {
      this.medecin = new Medecin();
      this.message = "medecin inserted";
    });

  }
}
